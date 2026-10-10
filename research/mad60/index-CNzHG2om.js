import { r as reactExports, k as compilerRuntimeExports, j as jsxRuntimeExports, n as useNavigate } from "./vendor-react-CCnVVUMc.js";
import { c as createLucideIcon, bq as ItemGroup, br as Item, bs as ItemContent, bt as ItemTitle, bf as Badge, bu as ItemDescription, bv as paginateReleases, bw as fetchAppReleaseManifest, a2 as toast, bx as DialogTrigger, B as Button, by as History, v as DialogHeader, w as DialogTitle, bz as LoaderCircle, y as DialogContent, A as Dialog, bA as useSettingsStore, L as Label, J as Switch, K as Slider, bB as AlertDialogTrigger, aC as AlertDialogHeader, aD as AlertDialogTitle, aE as AlertDialogDescription, aG as AlertDialogCancel, aA as AlertDialog, aB as AlertDialogContent, aF as AlertDialogFooter, aH as AlertDialogAction, bC as useDesktopInstallerDownload, F as cn, bc as Download, bD as useUpdaterStore, bE as z, am as isElectronEnvironment, bF as RadioGroup, bG as RadioGroupItem } from "./index-CMbUujkZ.js";
import { Z } from "./index-rMUO-LNA.js";
import { M as Monitor } from "./monitor-BTQG8tcs.js";
const __iconNode$2 = [
  ["path", { d: "M20 20v-7a4 4 0 0 0-4-4H4", key: "1nkjon" }],
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }]
];
const CornerUpLeft = createLucideIcon("corner-up-left", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }
  ]
];
const Moon = createLucideIcon("moon", __iconNode$1);
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
];
const Sun = createLucideIcon("sun", __iconNode);
const LIMIT = 10;
function hasUpdaterApi() {
  return typeof window !== "undefined" && "updater" in window && window.updater != null;
}
function formatReleaseDate(iso) {
  try {
    return new Intl.DateTimeFormat("zh-CN", {
      dateStyle: "medium"
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}
const AppReleaseHistoryDialog = reactExports.memo(function AppReleaseHistoryDialog2(t0) {
  const $ = compilerRuntimeExports.c(26);
  const {
    targetVersion
  } = t0;
  const [currentVersion, setCurrentVersion] = reactExports.useState(void 0);
  const [open, setOpen] = reactExports.useState(false);
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [];
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const [releases, setReleases] = reactExports.useState(t1);
  let t2;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = [];
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  const [list, setList] = reactExports.useState(t2);
  const [page, setPage] = reactExports.useState(0);
  const [hasMore, setHasMore] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const [failed, setFailed] = reactExports.useState(false);
  let t3;
  let t4;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = () => {
      if (!hasUpdaterApi()) {
        return;
      }
      window.updater?.getVersion?.().then((version) => setCurrentVersion(version)).catch(_temp$1);
    };
    t4 = [];
    $[2] = t3;
    $[3] = t4;
  } else {
    t3 = $[2];
    t4 = $[3];
  }
  reactExports.useEffect(t3, t4);
  let t5;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = (all, nextPage, append) => {
      const result = paginateReleases(all, nextPage, LIMIT);
      setPage(nextPage);
      setHasMore(result.hasMore);
      setList((prev) => append ? [...prev, ...result.items] : result.items);
    };
    $[4] = t5;
  } else {
    t5 = $[4];
  }
  const applyPage = t5;
  let t6;
  if ($[5] !== page || $[6] !== releases) {
    t6 = () => {
      applyPage(releases, page + 1, true);
    };
    $[5] = page;
    $[6] = releases;
    $[7] = t6;
  } else {
    t6 = $[7];
  }
  const loadMore = t6;
  let t7;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t7 = (next) => {
      setOpen(next);
      if (!next) {
        return;
      }
      setList([]);
      setPage(0);
      setHasMore(false);
      setFailed(false);
      setLoading(true);
      fetchAppReleaseManifest().then((all_0) => {
        setReleases(all_0);
        applyPage(all_0, 0, false);
      }).catch(() => {
        setReleases([]);
        setList([]);
        setFailed(true);
        toast.error("获取历史版本失败");
      }).finally(() => {
        setLoading(false);
      });
    };
    $[8] = t7;
  } else {
    t7 = $[8];
  }
  const onOpenChange = t7;
  if (!hasUpdaterApi()) {
    return null;
  }
  const showEmpty = !loading && !failed && list.length === 0;
  let t8;
  if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "link", size: "sm", className: "h-auto p-0 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(History, { "data-icon": "inline-start" }),
      "历史版本"
    ] }) });
    $[9] = t8;
  } else {
    t8 = $[9];
  }
  let t9;
  if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
    t9 = /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "历史版本" }) });
    $[10] = t9;
  } else {
    t9 = $[10];
  }
  let t10;
  if ($[11] !== currentVersion || $[12] !== list || $[13] !== showEmpty || $[14] !== targetVersion) {
    t10 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-0 flex-1 overflow-y-auto", children: showEmpty ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "py-8 text-center text-sm text-muted-foreground", children: "暂无发布记录" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ItemGroup, { className: "flex flex-col gap-2", children: list.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ItemContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ItemTitle, { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center justify-between gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "V",
            item.version
          ] }),
          item.version === currentVersion ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-muted-foreground", children: "当前" }) : null,
          targetVersion && item.version === targetVersion ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "default", children: "新版本" }) : null
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: formatReleaseDate(item.releasedAt) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ItemDescription, { className: "line-clamp-none whitespace-pre-line text-xs text-muted-foreground", children: item.notes })
    ] }) }, item.version)) }) });
    $[11] = currentVersion;
    $[12] = list;
    $[13] = showEmpty;
    $[14] = targetVersion;
    $[15] = t10;
  } else {
    t10 = $[15];
  }
  let t11;
  if ($[16] !== hasMore || $[17] !== loadMore || $[18] !== loading) {
    t11 = hasMore ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "secondary", size: "sm", className: "w-full", disabled: loading, onClick: loadMore, children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "animate-spin", "data-icon": "inline-start" }),
      "加载中…"
    ] }) : "加载更多" }) : null;
    $[16] = hasMore;
    $[17] = loadMore;
    $[18] = loading;
    $[19] = t11;
  } else {
    t11 = $[19];
  }
  let t12;
  if ($[20] !== t10 || $[21] !== t11) {
    t12 = /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "flex max-h-[min(30rem,80vh)] flex-col gap-4", children: [
      t9,
      t10,
      t11
    ] });
    $[20] = t10;
    $[21] = t11;
    $[22] = t12;
  } else {
    t12 = $[22];
  }
  let t13;
  if ($[23] !== open || $[24] !== t12) {
    t13 = /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onOpenChange, children: [
      t8,
      t12
    ] });
    $[23] = open;
    $[24] = t12;
    $[25] = t13;
  } else {
    t13 = $[25];
  }
  return t13;
});
function _temp$1() {
}
const settingsSurfaceClass$2 = "rounded-2xl border border-white/70 bg-white/58 p-5 shadow-[0_10px_24px_oklch(0.42_0.08_265/0.08),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl dark:border-white/10 dark:bg-[linear-gradient(180deg,oklch(0.16_0.035_270/0.82),oklch(0.105_0.03_270/0.78))] dark:shadow-[0_14px_30px_oklch(0_0_0/0.34),inset_0_1px_0_rgba(255,255,255,0.07)]";
function ParamSlider(props) {
  const $ = compilerRuntimeExports.c(23);
  const {
    label,
    value,
    min,
    max,
    step,
    format,
    onChange
  } = props;
  let t0;
  if ($[0] !== label) {
    t0 = /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-normal text-muted-foreground", children: label });
    $[0] = label;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  let t1;
  if ($[2] !== format || $[3] !== value) {
    t1 = format(value);
    $[2] = format;
    $[3] = value;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== t1) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono tabular-nums text-muted-foreground", children: t1 });
    $[5] = t1;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  let t3;
  if ($[7] !== t0 || $[8] !== t2) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
      t0,
      t2
    ] });
    $[7] = t0;
    $[8] = t2;
    $[9] = t3;
  } else {
    t3 = $[9];
  }
  let t4;
  if ($[10] !== value) {
    t4 = [value];
    $[10] = value;
    $[11] = t4;
  } else {
    t4 = $[11];
  }
  let t5;
  if ($[12] !== onChange) {
    t5 = (t62) => {
      const [v] = t62;
      return onChange(v);
    };
    $[12] = onChange;
    $[13] = t5;
  } else {
    t5 = $[13];
  }
  let t6;
  if ($[14] !== max || $[15] !== min || $[16] !== step || $[17] !== t4 || $[18] !== t5) {
    t6 = /* @__PURE__ */ jsxRuntimeExports.jsx(Slider, { min, max, step, value: t4, onValueChange: t5 });
    $[14] = max;
    $[15] = min;
    $[16] = step;
    $[17] = t4;
    $[18] = t5;
    $[19] = t6;
  } else {
    t6 = $[19];
  }
  let t7;
  if ($[20] !== t3 || $[21] !== t6) {
    t7 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      t3,
      t6
    ] });
    $[20] = t3;
    $[21] = t6;
    $[22] = t7;
  } else {
    t7 = $[22];
  }
  return t7;
}
function SplashCursorSettingsSection() {
  const $ = compilerRuntimeExports.c(19);
  const splashCursorEnabled = useSettingsStore(_temp);
  const splashCursor = useSettingsStore(_temp2);
  const setSplashCursorEnabled = useSettingsStore(_temp3);
  const updateSplashCursor = useSettingsStore(_temp4);
  const resetSplashCursorDefaults = useSettingsStore(_temp5);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 space-y-0.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium", children: "流体光标" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/70", children: "鼠标移动时的流体着色效果（全屏叠加，不参与点击）" })
    ] });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", size: "sm", className: "dark:border-white/10 dark:bg-white/8 dark:hover:border-primary/35 dark:hover:bg-primary/14 dark:hover:text-violet-100", children: "恢复默认" }) });
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: "恢复流体光标默认设置？" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { children: "将重置飞溅、颜色速度与外观相关参数为出厂默认。当前屏幕上的流体痕迹会随模拟重建被清空。" })
    ] });
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { children: "取消" });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] !== resetSplashCursorDefaults) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialog, { children: [
      t1,
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
        t2,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
          t3,
          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { onClick: () => resetSplashCursorDefaults(), children: "恢复默认" })
        ] })
      ] })
    ] });
    $[4] = resetSplashCursorDefaults;
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  let t5;
  if ($[6] !== setSplashCursorEnabled || $[7] !== splashCursorEnabled) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: splashCursorEnabled, onCheckedChange: setSplashCursorEnabled });
    $[6] = setSplashCursorEnabled;
    $[7] = splashCursorEnabled;
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  let t6;
  if ($[9] !== t4 || $[10] !== t5) {
    t6 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
      t0,
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center gap-2", children: [
        t4,
        t5
      ] })
    ] }) });
    $[9] = t4;
    $[10] = t5;
    $[11] = t6;
  } else {
    t6 = $[11];
  }
  let t7;
  if ($[12] !== splashCursor || $[13] !== splashCursorEnabled || $[14] !== updateSplashCursor) {
    t7 = splashCursorEnabled ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-border/30 dark:bg-border/15" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ParamSlider, { label: "飞溅半径", value: splashCursor.SPLAT_RADIUS, min: 0.01, max: 0.16, step: 0.01, format: _temp6, onChange: (v_0) => updateSplashCursor({
        SPLAT_RADIUS: v_0
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ParamSlider, { label: "飞溅力度", value: splashCursor.SPLAT_FORCE, min: 1e3, max: 6e3, step: 50, format: _temp7, onChange: (v_2) => updateSplashCursor({
        SPLAT_FORCE: v_2
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ParamSlider, { label: "颜色变化速度", value: splashCursor.COLOR_UPDATE_SPEED, min: 1, max: 20, step: 1, format: _temp8, onChange: (v_4) => updateSplashCursor({
        COLOR_UPDATE_SPEED: v_4
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium", children: "彩虹色" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/70", children: "开启则飞溅颜色随机变化；关闭则使用下方固定颜色" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: splashCursor.RAINBOW_MODE, onCheckedChange: (c) => updateSplashCursor({
          RAINBOW_MODE: c
        }) })
      ] }),
      splashCursor.RAINBOW_MODE ? null : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-normal text-muted-foreground", children: "固定颜色" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-xl border border-border/40 dark:border-white/10 dark:bg-white/[0.025]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Z, { color: splashCursor.COLOR, onChangeEnd: (hex) => updateSplashCursor({
          COLOR: hex
        }), style: {
          width: "100%",
          height: "120px"
        } }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium", children: "光照" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/70", children: "低性能设备可关闭" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: splashCursor.SHADING, onCheckedChange: (c_0) => updateSplashCursor({
          SHADING: c_0
        }) })
      ] })
    ] }) : null;
    $[12] = splashCursor;
    $[13] = splashCursorEnabled;
    $[14] = updateSplashCursor;
    $[15] = t7;
  } else {
    t7 = $[15];
  }
  let t8;
  if ($[16] !== t6 || $[17] !== t7) {
    t8 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${settingsSurfaceClass$2} space-y-5`, children: [
      t6,
      t7
    ] });
    $[16] = t6;
    $[17] = t7;
    $[18] = t8;
  } else {
    t8 = $[18];
  }
  return t8;
}
function _temp8(v_3) {
  return String(Math.round(v_3));
}
function _temp7(v_1) {
  return String(Math.round(v_1));
}
function _temp6(v) {
  return v.toFixed(2);
}
function _temp5(s_3) {
  return s_3.resetSplashCursorDefaults;
}
function _temp4(s_2) {
  return s_2.updateSplashCursor;
}
function _temp3(s_1) {
  return s_1.setSplashCursorEnabled;
}
function _temp2(s_0) {
  return s_0.splashCursor;
}
function _temp(s) {
  return s.splashCursorEnabled;
}
const settingsSurfaceClass$1 = "rounded-2xl border border-white/70 bg-white/58 p-5 shadow-[0_10px_24px_oklch(0.42_0.08_265/0.08),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl dark:border-white/10 dark:bg-[linear-gradient(180deg,oklch(0.16_0.035_270/0.82),oklch(0.105_0.03_270/0.78))] dark:shadow-[0_14px_30px_oklch(0_0_0/0.34),inset_0_1px_0_rgba(255,255,255,0.07)]";
const notesScrollbarClass = "[scrollbar-gutter:stable] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-muted/40 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-muted-foreground/40 hover:[&::-webkit-scrollbar-thumb]:bg-muted-foreground/60";
function DesktopAppSettingsSection() {
  const $ = compilerRuntimeExports.c(15);
  const download = useDesktopInstallerDownload();
  let t0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-semibold", children: "桌面应用" }) });
    t1 = cn(settingsSurfaceClass$1, "space-y-4");
    $[0] = t0;
    $[1] = t1;
  } else {
    t0 = $[0];
    t1 = $[1];
  }
  let t2;
  if ($[2] !== download.status) {
    t2 = download.status === "loading" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-x-4 gap-y-3", "aria-busy": "true", "aria-live": "polite", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "当前版本" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/70", children: "正在获取安装包…" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-30 shrink-0 rounded-md bg-muted/50", "aria-hidden": true })
    ] }) : null;
    $[2] = download.status;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== download.status) {
    t3 = download.status === "unavailable" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-start justify-between gap-x-4 gap-y-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 space-y-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "当前版本" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/70", children: "暂时无法获取安装包" })
    ] }) }) : null;
    $[4] = download.status;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  let t4;
  if ($[6] !== download.downloadUrl || $[7] !== download.notes || $[8] !== download.status || $[9] !== download.version) {
    t4 = download.status === "available" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-x-4 gap-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium", children: "当前版本" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/70", children: "当前环境最新的 Windows 安装包" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-sm tabular-nums text-muted-foreground", children: download.version }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: download.downloadUrl, target: "_blank", rel: "noopener noreferrer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "size-4", "aria-hidden": true }),
            "下载桌面版"
          ] }) })
        ] })
      ] }),
      download.notes ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium", children: "更新说明" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("max-h-48 overflow-y-auto", notesScrollbarClass), children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-prose whitespace-pre-wrap text-sm leading-relaxed text-muted-foreground", children: download.notes }) })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/70", children: "暂无说明" })
    ] }) : null;
    $[6] = download.downloadUrl;
    $[7] = download.notes;
    $[8] = download.status;
    $[9] = download.version;
    $[10] = t4;
  } else {
    t4 = $[10];
  }
  let t5;
  if ($[11] !== t2 || $[12] !== t3 || $[13] !== t4) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl space-y-6", children: [
      t0,
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: t1, children: [
        t2,
        t3,
        t4
      ] })
    ] });
    $[11] = t2;
    $[12] = t3;
    $[13] = t4;
    $[14] = t5;
  } else {
    t5 = $[14];
  }
  return t5;
}
const settingsSurfaceClass = "rounded-2xl border border-white/70 bg-white/58 p-5 shadow-[0_10px_24px_oklch(0.42_0.08_265/0.08),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl dark:border-white/10 dark:bg-[linear-gradient(180deg,oklch(0.16_0.035_270/0.82),oklch(0.105_0.03_270/0.78))] dark:shadow-[0_14px_30px_oklch(0_0_0/0.34),inset_0_1px_0_rgba(255,255,255,0.07)]";
function SettingsPage() {
  const navigate = useNavigate();
  const showSystemSettings = isElectronEnvironment();
  const showDesktopAppDownload = !showSystemSettings;
  const {
    autoLaunch,
    setAutoLaunch,
    initializeSettings
  } = useSettingsStore();
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [activeTab, setActiveTab] = reactExports.useState(() => showSystemSettings ? "system" : "appearance");
  const [version, setVersion] = reactExports.useState("");
  const {
    updateInfo
  } = useUpdaterStore();
  const {
    theme,
    setTheme
  } = z();
  reactExports.useEffect(() => {
    initializeSettings().catch(console.error);
  }, [initializeSettings]);
  reactExports.useEffect(() => {
    if (typeof window === "undefined" || !("updater" in window) || window.updater == null) {
      return;
    }
    const getAppVersion = async () => {
      try {
        const appVersion = await window.updater.getVersion();
        setVersion(appVersion);
      } catch (error) {
        console.error("获取版本信息失败:", error);
      }
    };
    getAppVersion();
  }, []);
  const handleAutoLaunchChange = async (checked) => {
    setIsLoading(true);
    try {
      await setAutoLaunch(checked);
    } catch (error_0) {
      console.error("设置开机自启失败:", error_0);
    } finally {
      setIsLoading(false);
    }
  };
  const handleBack = () => {
    navigate(-1);
  };
  const themeOptions = [{
    value: "system",
    label: "跟随系统",
    icon: Monitor
  }, {
    value: "light",
    label: "浅色",
    icon: Sun
  }, {
    value: "dark",
    label: "深色",
    icon: Moon
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-screen flex-col bg-background dark:bg-[radial-gradient(circle_at_30%_0%,oklch(0.58_0.12_255/0.12),transparent_34%),radial-gradient(circle_at_82%_8%,oklch(0.62_0.18_315/0.12),transparent_32%),linear-gradient(135deg,oklch(0.075_0.026_265),oklch(0.045_0.022_275)_58%,oklch(0.062_0.024_250))]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-14 items-center border-b border-border/30 px-6 backdrop-blur-sm dark:border-white/8 dark:bg-white/2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleBack, className: "flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CornerUpLeft, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "ml-6 text-lg font-semibold font-display", children: "设置" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-0 flex-1 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-[calc(100vh-6rem)] w-50 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-4 left-2 right-0 overflow-hidden rounded-3xl border border-white/38 bg-white/22 p-4 shadow-[inset_-1px_0_0_rgba(255,255,255,0.45),inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-2xl dark:border-white/8 dark:bg-[linear-gradient(180deg,oklch(0.16_0.035_270/0.48),oklch(0.105_0.03_270/0.4))] dark:shadow-[inset_-1px_0_0_rgba(255,255,255,0.045),inset_0_1px_0_rgba(255,255,255,0.06)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "space-y-1", children: [
        showSystemSettings ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTab("system"), className: cn("w-full rounded-xl px-3 py-2 text-left text-sm font-medium transition-all duration-200", activeTab === "system" ? "bg-primary/12 text-primary shadow-[0_6px_14px_var(--glow-primary)] hover:bg-primary/16 dark:bg-primary/16 dark:text-violet-100 dark:shadow-[inset_0_0_10px_var(--glow-primary)]" : "text-foreground/74 hover:bg-primary/8 hover:text-primary dark:text-white/66 dark:hover:bg-primary/14 dark:hover:text-violet-100"), children: "系统" }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTab("appearance"), className: cn("w-full rounded-xl px-3 py-2 text-left text-sm font-medium transition-all duration-200", activeTab === "appearance" ? "bg-primary/12 text-primary shadow-[0_6px_14px_var(--glow-primary)] hover:bg-primary/16 dark:bg-primary/16 dark:text-violet-100 dark:shadow-[inset_0_0_10px_var(--glow-primary)]" : "text-foreground/74 hover:bg-primary/8 hover:text-primary dark:text-white/66 dark:hover:bg-primary/14 dark:hover:text-violet-100"), children: "外观" }),
        showDesktopAppDownload ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTab("desktop"), className: cn("w-full rounded-xl px-3 py-2 text-left text-sm font-medium transition-all duration-200", activeTab === "desktop" ? "bg-primary/12 text-primary shadow-[0_6px_14px_var(--glow-primary)] hover:bg-primary/16 dark:bg-primary/16 dark:text-violet-100 dark:shadow-[inset_0_0_10px_var(--glow-primary)]" : "text-foreground/74 hover:bg-primary/8 hover:text-primary dark:text-white/66 dark:hover:bg-primary/14 dark:hover:text-violet-100"), children: "桌面应用" }) : null
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-auto px-8 py-6", children: [
        showSystemSettings && activeTab === "system" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold font-display", children: "系统" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn(settingsSurfaceClass, "space-y-5"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium", children: "开机自启" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: autoLaunch, onCheckedChange: handleAutoLaunchChange, disabled: isLoading })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/70", children: "系统启动时自动运行应用" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-border/30 dark:bg-border/15" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium", children: "应用版本" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AppReleaseHistoryDialog, { targetVersion: updateInfo?.version })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-mono text-muted-foreground", children: version || "加载中..." })
            ] })
          ] })
        ] }),
        activeTab === "appearance" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold font-display", children: "外观" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(settingsSurfaceClass, "space-y-5"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium", children: "主题" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/70", children: "选择应用的显示主题" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroup, { value: theme, onValueChange: setTheme, className: "grid grid-cols-3 gap-3 pt-1", children: themeOptions.map(({
              value,
              label,
              icon: Icon
            }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: `theme-${value}`, className: cn("relative flex cursor-pointer flex-col items-center gap-2 rounded-xl border p-4 text-center transition-all duration-200", theme === value ? "border-primary/50 bg-primary/10 text-primary shadow-[0_0_12px_var(--glow-primary)] dark:border-primary/45 dark:bg-primary/14 dark:text-violet-100" : "border-border/40 bg-card/30 text-muted-foreground hover:border-border/60 hover:bg-muted/25 hover:text-foreground dark:border-white/8 dark:bg-white/2.5 dark:text-white/56 dark:hover:border-primary/25 dark:hover:bg-primary/10 dark:hover:text-violet-100"), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { id: `theme-${value}`, value, className: "sr-only" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium", children: label })
            ] }, value)) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SplashCursorSettingsSection, {})
        ] }),
        showDesktopAppDownload && activeTab === "desktop" && /* @__PURE__ */ jsxRuntimeExports.jsx(DesktopAppSettingsSection, {})
      ] })
    ] })
  ] });
}
export {
  SettingsPage,
  SettingsPage as default
};
