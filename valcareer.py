"""valcareer.py - Valorant career stats via Riot's official API.

Read-only, on-demand: fetches YOUR match history, match details and ranked
data using your own client's login session (lockfile). No game interaction,
no memory access - identical to visiting a stat-tracking website.

Auth: lockfile -> local client entitlements token (in-memory only, never
stored to disk). Standard documented headers for glz/pd endpoints.

All fetch results are cached under valorant_data\\cache\\ and never
re-fetched, so a refresh costs a handful of requests.
"""

import base64
import hashlib
import json
import os
import ssl
import time
import urllib.request
from pathlib import Path

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(SCRIPT_DIR, "valorant_data")
CACHE_DIR = os.path.join(DATA_DIR, "cache")
LOCKFILE = os.path.expandvars(r"%LOCALAPPDATA%\Riot Games\Riot Client\Config\lockfile")
GAME_LOG = os.path.expandvars(r"%LOCALAPPDATA%\VALORANT\Saved\Logs\ShooterGame.log")

# Standard platform header blob used by all Riot client API calls
PLATFORM_B64 = ("eyJwbGF0Zm9ybVR5cGUiOiJQQyIsInBsYXRmb3JtT1MiOiJXaW5kb3dzIiwi"
                "cGxhdGZvcm1PU1ZlcnNpb24iOiIxMC4wLjE5MDQyLjEuMjU2LjY0Yml0Iiwi"
                "cGxhdGZvcm1DaGlwc2V0IjoiVW5rbm93biJ9")

_SSL_CTX = ssl.create_default_context()
_SSL_CTX.check_hostname = False
_SSL_CTX.verify_mode = ssl.CERT_NONE  # Riot local client uses a self-signed cert


class RiotError(Exception):
    pass


class RiotSession:
    """Authenticated session against the user's own Riot client + API."""

    def __init__(self):
        self.puuid = None
        self.access_token = None
        self.entitlement = None
        self.region = "ap"
        self.shard = "ap"
        self.client_version = None
        self.name = None
        self.tagline = None

    # -- lockfile + local auth ------------------------------------------

    def lockfile_available(self) -> bool:
        return os.path.exists(LOCKFILE)

    def authenticate(self):
        """Read lockfile, fetch tokens + identity from the local client UI.

        Note: the background RiotClientServices process exposes only a
        minimal event API. The full REST API (entitlements etc.) is served
        once the Riot client UI is open and signed in (RiotClientUx).
        """
        if not os.path.exists(LOCKFILE):
            raise RiotError("Riot client not running (lockfile not found). "
                            "Open the Riot client and sign in, then refresh.")
        try:
            raw = open(LOCKFILE, "r", encoding="utf-8").read().split(":")
            port, password = raw[2], raw[3]
        except Exception as ex:
            raise RiotError(f"Could not parse lockfile: {ex}")

        basic = base64.b64encode(f"riot:{password}".encode()).decode()
        try:
            data = self._local_get(f"https://127.0.0.1:{port}/entitlements/v1/token", basic)
        except urllib.error.HTTPError as ex:
            if ex.code == 404:
                raise RiotError(
                    "Riot client is running in the background but the client UI "
                    "is not signed in. Open the Riot client, sign in, then refresh.")
            raise RiotError(f"Riot client returned HTTP {ex.code}")
        self.access_token = data["accessToken"]
        self.entitlement = data["token"]
        self.puuid = data["subject"]

        # Region (local client knows best; fallback keeps previous)
        try:
            rl = self._local_get(f"https://127.0.0.1:{port}/riotclient/region-locale", basic)
            region = rl.get("region", "").lower()
            if region:
                self.region = region
                self.shard = "na" if region in ("latam", "br") else region
        except Exception:
            pass

        self._refresh_version()
        self._fetch_identity()

    def _refresh_version(self):
        try:
            data = self._public_get_json("https://valorant-api.com/v1/version")
            for e in data.get("data", []):
                if e.get("status") == "live":
                    self.client_version = e.get("version")
                    break
        except Exception:
            self.client_version = None

    def _fetch_identity(self):
        """Resolve gameName#tag via the account endpoint."""
        url = (f"https://pd.{self.shard}.a.pvp.net/name-service/v2/players"
               f"/{self.puuid}")
        try:
            data = self._api_put_json(url, [self.puuid])
            if data and isinstance(data, list) and data:
                self.name = data[0].get("GameName")
                self.tagline = data[0].get("TagLine")
        except Exception:
            pass

    # -- HTTP helpers ----------------------------------------------------

    def _local_get(self, url, basic):
        req = urllib.request.Request(url, headers={"Authorization": f"Basic {basic}"})
        with urllib.request.urlopen(req, context=_SSL_CTX, timeout=8) as r:
            return json.loads(r.read().decode())

    def _api_headers(self):
        return {
            "Authorization": f"Bearer {self.access_token}",
            "X-Riot-Entitlements-JWT": self.entitlement,
            "X-Riot-ClientVersion": self.client_version or "release-13.05-shipping-11-5350494",
            "X-Riot-ClientPlatform": PLATFORM_B64,
            "User-Agent": "G16-ControlCenter",
        }

    def _api_get_json(self, url):
        req = urllib.request.Request(url, headers=self._api_headers())
        with urllib.request.urlopen(req, timeout=15) as r:
            return json.loads(r.read().decode())

    def _api_put_json(self, url, payload):
        body = json.dumps(payload).encode()
        req = urllib.request.Request(url, data=body, method="PUT",
                                     headers={**self._api_headers(),
                                              "Content-Type": "application/json"})
        with urllib.request.urlopen(req, timeout=15) as r:
            return json.loads(r.read().decode())

    def _public_get_json(self, url):
        req = urllib.request.Request(url, headers={"User-Agent": "G16-ControlCenter"})
        with urllib.request.urlopen(req, timeout=15) as r:
            return json.loads(r.read().decode())

    # -- Remote endpoints -------------------------------------------------

    def glz(self, path):
        return self._api_get_json(
            f"https://glz-{self.region}-1.{self.shard}.a.pvp.net{path}")

    def pd(self, path):
        return self._api_get_json(
            f"https://pd.{self.shard}.a.pvp.net{path}")


# -- cache helpers ----------------------------------------------------------


def _cache_path(name: str) -> str:
    os.makedirs(CACHE_DIR, exist_ok=True)
    return os.path.join(CACHE_DIR, name)


def _load_cache(name: str):
    p = _cache_path(name)
    if os.path.exists(p):
        try:
            with open(p, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            return None
    return None


def _save_cache(name: str, data):
    with open(_cache_path(name), "w", encoding="utf-8") as f:
        json.dump(data, f)


# -- content (agents, maps, tiers) ------------------------------------------

CONTENT_TTL = 7 * 86400


def _public_content(kind: str):
    """agents|maps|competitivetiers via valorant-api.com, cached weekly."""
    cache_name = f"content_{kind}.json"
    cached = _load_cache(cache_name)
    if cached and time.time() - cached.get("_fetched", 0) < CONTENT_TTL:
        return cached["data"]
    req = urllib.request.Request(
        f"https://valorant-api.com/v1/{kind}?isPlayableAgent=true" if kind == "agents"
        else f"https://valorant-api.com/v1/{kind}",
        headers={"User-Agent": "G16-ControlCenter"})
    with urllib.request.urlopen(req, timeout=15) as r:
        data = json.loads(r.read().decode())["data"]
    _save_cache(cache_name, {"_fetched": time.time(), "data": data})
    return data


def build_lookups():
    """Return (agents{uuid:name}, maps{uuid:{"name","mapUrl"}}, tiers{tier:name})."""
    agents, maps, tiers = {}, {}, {}
    try:
        for a in _public_content("agents"):
            agents[a["uuid"]] = a.get("displayName", "?")
    except Exception:
        pass
    try:
        for m in _public_content("maps"):
            maps[m["uuid"]] = {"name": m.get("displayName", "?"),
                               "mapUrl": m.get("mapUrl", "")}
    except Exception:
        pass
    try:
        # competitivetiers: use latest season episode data
        data = _public_content("competitivetiers")
        eps = data[-1]["tiers"] if data else []
        for t in eps:
            tiers[t["competitiveTier"]] = t.get("tierName", "?")
    except Exception:
        pass
    return agents, maps, tiers


# -- main refresh ------------------------------------------------------------


def refresh(progress=None, max_matches: int = 20) -> dict:
    """Fetch history + new match details + MMR. Returns summary dict.

    progress: optional callable(progress_str) for UI feedback.
    """
    def say(msg):
        if progress:
            try:
                progress(msg)
            except Exception:
                pass

    say("Connecting to Riot client...")
    sess = RiotSession()
    sess.authenticate()
    say(f"Authenticated as {sess.name or sess.puuid[:8]}...")

    # save identity for UI
    me = {"puuid": sess.puuid, "region": sess.region, "shard": sess.shard,
          "name": sess.name, "tagline": sess.tagline,
          "_fetched": time.time()}
    _save_cache("me.json", me)

    # history
    say("Fetching match history...")
    hist = sess.pd(f"/match-history/v1/history/{sess.puuid}"
                   f"?startIndex=0&endIndex={max_matches}")
    entries = hist.get("History", [])

    # fetch details for new matches only
    agents, maps, tiers = build_lookups()
    new_count, total = 0, 0
    for i, e in enumerate(entries):
        mid = e["MatchID"]
        total += 1
        cache_file = _cache_path(f"match_{mid}.json")
        if os.path.exists(cache_file):
            continue
        say(f"Fetching match {i + 1}/{len(entries)}...")
        try:
            details = sess.pd(f"/match-details/v1/matches/{mid}")
            _save_cache(f"match_{mid}.json", details)
            new_count += 1
        except Exception as ex:
            say(f"Match {mid[:8]} failed: {ex}")
        time.sleep(0.4)  # be polite to the API

    # MMR: current rank + RR climb
    say("Fetching rank data...")
    try:
        mmr = sess.pd(f"/mmr/v1/players/{sess.puuid}")
        _save_cache("mmr.json", mmr)
    except Exception as ex:
        say(f"MMR fetch failed: {ex}")
    try:
        cu = sess.pd(f"/mmr/v1/players/{sess.puuid}/competitiveupdates"
                     f"?startIndex=0&endIndex=20&queue=competitive")
        _save_cache("competitiveupdates.json", cu)
    except Exception as ex:
        say(f"RR history fetch failed: {ex}")

    summary = compute_stats(agents, maps, tiers)
    summary["new_matches"] = new_count
    summary["total_matches"] = total
    say("Done.")
    return summary


# -- stat computation (pure: works from cache) -------------------------------


def _map_name(map_id, maps):
    m = maps.get(map_id, {})
    name = m.get("name", "")
    if not name and "/" in map_id:
        name = map_id.rstrip("/").split("/")[-1].title()
    return name or "Unknown"


def _hs_pct(round_stats):
    h = b = l = 0
    for dmg in round_stats.get("damage", []):
        h += dmg.get("headshots", 0)
        b += dmg.get("bodyshots", 0)
        l += dmg.get("legshots", 0)
    total = h + b + l
    return (100.0 * h / total) if total else 0.0, total


def compute_stats(agents=None, maps=None, tiers=None):
    """Aggregate all cached match_<id>.json files into a summary dict."""
    agents = agents or {}
    maps = maps or {}
    tiers = tiers or {}

    matches = []
    for fn in os.listdir(CACHE_DIR):
        if fn.startswith("match_") and fn.endswith(".json"):
            try:
                with open(_cache_path(fn), "r", encoding="utf-8") as f:
                    matches.append(json.load(f))
            except Exception:
                pass

    me = _load_cache("me.json") or {}
    puuid = me.get("puuid")
    out = {
        "name": (me.get("name") or "") + ("#" + me["tagline"] if me.get("tagline") else ""),
        "matches": [], "agents": {}, "maps": {},
        "overview": {"games": 0, "wins": 0, "kills": 0, "deaths": 0,
                     "assists": 0, "score": 0, "rounds": 0,
                     "head": 0, "body": 0, "leg": 0},
    }

    for m in matches:
        mi = m.get("matchInfo", {})
        players = m.get("players", [])
        me_p = next((p for p in players if p.get("subject") == puuid), None)
        if not me_p:
            continue
        st = me_p.get("stats", {})
        kills, deaths, assists = st.get("kills", 0), st.get("deaths", 0), st.get("assists", 0)
        score, rounds = st.get("score", 0), max(st.get("roundsPlayed", 1), 1)
        acs = round(score / rounds)

        # team result
        my_team = me_p.get("teamId")
        won = False
        for t in m.get("teams", []):
            if t.get("teamId") == my_team:
                won = bool(t.get("won"))

        # headshot totals across my rounds
        h = b = l = 0
        for rr in m.get("roundResults", []):
            for ps in rr.get("playerStats", []):
                if ps.get("subject") == puuid:
                    for dmg in ps.get("damage", []):
                        h += dmg.get("headshots", 0)
                        b += dmg.get("bodyshots", 0)
                        l += dmg.get("legshots", 0)
        shots = h + b + l
        hs_pct = round(100.0 * h / shots, 1) if shots else 0.0

        agent_name = agents.get(me_p.get("characterId"), "Unknown")
        map_name = _map_name(mi.get("mapId", ""), maps)

        ov = out["overview"]
        ov["games"] += 1
        ov["wins"] += int(won)
        ov["kills"] += kills
        ov["deaths"] += deaths
        ov["assists"] += assists
        ov["score"] += score
        ov["rounds"] += rounds
        ov["head"] += h
        ov["body"] += b
        ov["leg"] += l

        tier = me_p.get("competitiveTier")
        entry = {
            "matchId": mi.get("matchId"),
            "map": map_name, "agent": agent_name,
            "queue": mi.get("queueID", ""), "ranked": bool(mi.get("isRanked")),
            "won": won, "kills": kills, "deaths": deaths, "assists": assists,
            "acs": acs, "hs_pct": hs_pct,
            "rank": tiers.get(tier, str(tier) if tier is not None else ""),
            "start": mi.get("gameStartMillis", 0),
        }
        out["matches"].append(entry)

        for key, val in (("agents", agent_name), ("maps", map_name)):
            a = out[key].setdefault(val, {"games": 0, "wins": 0, "kills": 0,
                                          "deaths": 0, "assists": 0,
                                          "score": 0, "rounds": 0})
            a["games"] += 1
            a["wins"] += int(won)
            a["kills"] += kills
            a["deaths"] += deaths
            a["assists"] += assists
            a["score"] += score
            a["rounds"] += rounds

    out["matches"].sort(key=lambda x: x.get("start", 0), reverse=True)
    ov = out["overview"]
    if ov["games"]:
        ov["win_rate"] = round(100.0 * ov["wins"] / ov["games"], 1)
        ov["kd"] = round(ov["kills"] / max(ov["deaths"], 1), 2)
        ov["acs"] = round(ov["score"] / max(ov["rounds"], 1))
        shots = ov["head"] + ov["body"] + ov["leg"]
        ov["hs_pct"] = round(100.0 * ov["head"] / shots, 1) if shots else 0.0
    return out


def load_rank():
    """Current rank + RR climb from cached MMR data."""
    out = {"tier": None, "rr": None, "climb": []}
    mmr = _load_cache("mmr.json")
    if mmr:
        out["tier"] = mmr.get("LatestCompetitiveUpdate", {}).get("CompetitiveTier")
        q = mmr.get("QueueSkills", {}).get("competitive", {})
        out["rr"] = (q.get("CurrentSeasonPredictedRank")
                     and q["CurrentSeasonPredictedRank"].get("RankedRating"))
    cu = _load_cache("competitiveupdates.json")
    if cu:
        for u in cu.get("Matches", [])[-20:]:
            out["climb"].append({
                "matchId": u.get("MatchID"),
                "rr": u.get("RatingChangeAfterUpdate"),
                "start": u.get("MatchStartTime"),
            })
    return out
