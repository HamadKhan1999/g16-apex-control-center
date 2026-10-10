const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-CMbUujkZ.js","./vendor-react-CCnVVUMc.js","./index-CMYnaFRv.css"])))=>i.map(i=>d[i]);
import { k as compilerRuntimeExports, j as jsxRuntimeExports, r as reactExports } from "./vendor-react-CCnVVUMc.js";
import { c as createLucideIcon, dt as FuzzyText, cP as Keyboard, ax as ElectricBorder, F as cn, bz as LoaderCircle, f3 as ChevronRight, i as Square, f4 as Gamepad2, N as Check, a8 as X, f5 as DialogClose, f6 as resolvePublicAssetUrl, f7 as useConnectDevice, w as DialogTitle, aZ as ChevronDown, x as DialogDescription, v as DialogHeader, cV as TriangleAlert, b9 as Usb, z as DialogFooter, y as DialogContent, A as Dialog, f8 as useGameInteractionStore, j as Popover, l as PopoverTrigger, m as PopoverContent, f9 as User, fa as Progress, eY as CardHeader, eZ as CardTitle, d5 as Card, d6 as CardContent, I as Image, J as Switch, B as Button, L as Label, K as Slider, $ as Separator, fb as findValorantHero, fc as ScreenCapturerService, k as keyboardLayoutMap, _ as __vitePreload, aL as useDeviceInfoStore, aM as useLightStore, aQ as withHighPriorityBatch, h as highLowToDecimal, fd as abilityGifUrl, fe as KILL_GIF_URL, ff as WIN_GIF_URL, fg as DEFEAT_GIF_URL, fh as LOW_HEALTH_GIF_URL, b0 as useActiveDeviceStore, b7 as deviceManager, fi as registerGameStopper, fj as getGameModules, fk as getActiveLightingConflicts, b5 as stopLightingModes, fl as getGameModule, aA as AlertDialog, aB as AlertDialogContent, aC as AlertDialogHeader, aD as AlertDialogTitle, aE as AlertDialogDescription, fm as MODE_LABELS, aF as AlertDialogFooter } from "./index-CMbUujkZ.js";
import { P as Play } from "./play-FC-PODUZ.js";
import { M as Monitor } from "./monitor-BTQG8tcs.js";
import PixelBlast from "./PixelBlast-fhYQNrhy.js";
import { U as Unplug } from "./unplug-uim349Nr.js";
import { H as Heart } from "./heart-DFPOnsUo.js";
import "./vendor-three-Cg879EW4.js";
const __iconNode$1 = [
  ["path", { d: "m9 10 2 2 4-4", key: "1gnqz4" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }]
];
const MonitorCheck = createLucideIcon("monitor-check", __iconNode$1);
const __iconNode = [
  ["polyline", { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5", key: "1hfsw2" }],
  ["line", { x1: "13", x2: "19", y1: "19", y2: "13", key: "1vrmhu" }],
  ["line", { x1: "16", x2: "20", y1: "16", y2: "20", key: "1bron3" }],
  ["line", { x1: "19", x2: "21", y1: "21", y2: "19", key: "13pww6" }],
  ["polyline", { points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5", key: "hbey2j" }],
  ["line", { x1: "5", x2: "9", y1: "14", y2: "18", key: "1hf58s" }],
  ["line", { x1: "7", x2: "4", y1: "17", y2: "20", key: "pidxm4" }],
  ["line", { x1: "3", x2: "5", y1: "19", y2: "21", key: "1pehsh" }]
];
const Swords = createLucideIcon("swords", __iconNode);
function NoDeviceView() {
  const $ = compilerRuntimeExports.c(4);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-0 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PixelBlast, { variant: "square", pixelSize: 5, color: "oklch(0.72 0.185 277)", patternScale: 8, patternDensity: 2, pixelSizeJitter: 0, enableRipples: true, rippleSpeed: 0.4, rippleThickness: 0.12, rippleIntensityScale: 1.5, liquid: false, speed: 0.5, edgeFade: 0.3, transparent: true }) });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FuzzyText, { fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", fontWeight: 800, gradient: ["#f88187", "#6366f1", "#8bbffa"], baseIntensity: 0.1, hoverIntensity: 0.4, glitchMode: true, glitchInterval: 4e3, glitchDuration: 120, letterSpacing: 4, color: "var(--primary)", fontFamily: "Orbitron, sans-serif", children: "未连接设备" }) });
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex size-14 items-center justify-center rounded-full bg-primary/10 mb-5 dark:shadow-[0_0_24px_var(--glow-primary)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Keyboard, { size: 28, className: "text-primary/80" }) });
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col items-center justify-center h-full w-full overflow-hidden select-none", children: [
      t0,
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col items-center", children: [
        t1,
        /* @__PURE__ */ jsxRuntimeExports.jsx(ElectricBorder, { color: "var(--primary)", speed: 0.4, chaos: 0.06, borderRadius: 16, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-background/60 backdrop-blur-xl rounded-2xl px-10 py-8 min-w-[300px] max-w-md border border-primary/10 dark:border-primary/15 flex flex-col items-center text-center dark:shadow-[0_0_30px_oklch(0.72_0.185_277/0.15)]", children: [
          t2,
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Unplug, { size: 14, className: "text-muted-foreground/40" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono tracking-widest uppercase", children: "设备离线" })
          ] })
        ] }) })
      ] })
    ] });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  return t3;
}
function GiButton(t0) {
  const $ = compilerRuntimeExports.c(28);
  let children;
  let className;
  let disabled;
  let rest;
  let style;
  let t1;
  let t2;
  let t3;
  let t4;
  if ($[0] !== t0) {
    ({
      accent: t1,
      variant: t2,
      loading: t3,
      type: t4,
      disabled,
      className,
      style,
      children,
      ...rest
    } = t0);
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = disabled;
    $[4] = rest;
    $[5] = style;
    $[6] = t1;
    $[7] = t2;
    $[8] = t3;
    $[9] = t4;
  } else {
    children = $[1];
    className = $[2];
    disabled = $[3];
    rest = $[4];
    style = $[5];
    t1 = $[6];
    t2 = $[7];
    t3 = $[8];
    t4 = $[9];
  }
  const accent = t1 === void 0 ? "#0d5561" : t1;
  const variant = t2 === void 0 ? "solid" : t2;
  const loading = t3 === void 0 ? false : t3;
  const type = t4 === void 0 ? "button" : t4;
  const isSolid = variant === "solid";
  const t5 = disabled || loading;
  const t6 = variant === "ghost" && "text-gi-mut hover:bg-gi-panel hover:text-gi-txt focus-visible:ring-gi-steel";
  const t7 = variant === "outline" && "border border-white/55 text-white hover:bg-white/10 focus-visible:ring-white";
  const t8 = isSolid && "text-white hover:brightness-110 focus-visible:ring-white";
  let t9;
  if ($[10] !== className || $[11] !== t6 || $[12] !== t7 || $[13] !== t8) {
    t9 = cn("cursor-pointer inline-flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-bold transition-[filter,color,background-color,opacity] duration-150", "disabled:cursor-not-allowed disabled:opacity-50", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset", t6, t7, t8, className);
    $[10] = className;
    $[11] = t6;
    $[12] = t7;
    $[13] = t8;
    $[14] = t9;
  } else {
    t9 = $[14];
  }
  const t10 = isSolid ? `color-mix(in srgb, ${accent} 80%, #000)` : variant === "outline" ? "rgb(var(--gi-scrim-rgb) / 0.82)" : "transparent";
  let t11;
  if ($[15] !== style || $[16] !== t10) {
    t11 = {
      background: t10,
      clipPath: "polygon(8px 0,100% 0,100% 100%,0 100%)",
      ...style
    };
    $[15] = style;
    $[16] = t10;
    $[17] = t11;
  } else {
    t11 = $[17];
  }
  let t12;
  if ($[18] !== loading) {
    t12 = loading && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin motion-reduce:animate-none" });
    $[18] = loading;
    $[19] = t12;
  } else {
    t12 = $[19];
  }
  let t13;
  if ($[20] !== children || $[21] !== rest || $[22] !== t11 || $[23] !== t12 || $[24] !== t5 || $[25] !== t9 || $[26] !== type) {
    t13 = /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type, disabled: t5, className: t9, style: t11, ...rest, children: [
      t12,
      children
    ] });
    $[20] = children;
    $[21] = rest;
    $[22] = t11;
    $[23] = t12;
    $[24] = t5;
    $[25] = t9;
    $[26] = type;
    $[27] = t13;
  } else {
    t13 = $[27];
  }
  return t13;
}
function GameCard(t0) {
  const $ = compilerRuntimeExports.c(63);
  const {
    def,
    isRunning,
    liveStatus,
    enabledEffectLabels,
    onOpen,
    onStop
  } = t0;
  const interactive = !isRunning;
  const prevRunning = reactExports.useRef(isRunning);
  const [igniting, setIgniting] = reactExports.useState(false);
  let t1;
  let t2;
  if ($[0] !== isRunning) {
    t1 = () => {
      if (isRunning && !prevRunning.current) {
        setIgniting(true);
        const t = setTimeout(() => setIgniting(false), 900);
        prevRunning.current = isRunning;
        return () => clearTimeout(t);
      }
      prevRunning.current = isRunning;
    };
    t2 = [isRunning];
    $[0] = isRunning;
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  reactExports.useEffect(t1, t2);
  const t3 = interactive && "cursor-pointer hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gi-steel";
  const t4 = isRunning ? "border-gi-run-glow" : "border-gi-line";
  let t5;
  if ($[3] !== t3 || $[4] !== t4) {
    t5 = cn("relative aspect-square animate-gi-rise overflow-hidden border transition-[transform,box-shadow] duration-200", t3, t4);
    $[3] = t3;
    $[4] = t4;
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  const t6 = isRunning ? "0 0 0 1px var(--color-gi-run-glow), 0 0 28px color-mix(in srgb, var(--color-gi-run-glow) 22%, transparent)" : void 0;
  let t7;
  if ($[6] !== t6) {
    t7 = {
      background: "var(--color-gi-surface)",
      boxShadow: t6,
      clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)"
    };
    $[6] = t6;
    $[7] = t7;
  } else {
    t7 = $[7];
  }
  const t8 = interactive ? onOpen : void 0;
  const t9 = interactive ? "button" : void 0;
  const t10 = interactive ? 0 : void 0;
  const t11 = interactive ? `配置 ${def.nameZh} 灯光联动` : void 0;
  let t12;
  if ($[8] !== interactive || $[9] !== onOpen) {
    t12 = interactive ? (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onOpen();
      }
    } : void 0;
    $[8] = interactive;
    $[9] = onOpen;
    $[10] = t12;
  } else {
    t12 = $[10];
  }
  let t13;
  if ($[11] !== def.accent || $[12] !== def.coverFit) {
    t13 = def.coverFit === "contain" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-0", style: {
      background: `radial-gradient(115% 80% at 50% 34%, color-mix(in srgb, ${def.accent} 24%, transparent), transparent 62%), var(--gi-cover-bg)`
    } });
    $[11] = def.accent;
    $[12] = def.coverFit;
    $[13] = t13;
  } else {
    t13 = $[13];
  }
  const t14 = def.coverFit === "contain" ? "bg-contain" : "bg-cover";
  let t15;
  if ($[14] !== t14) {
    t15 = cn("absolute inset-0 bg-center bg-no-repeat", t14);
    $[14] = t14;
    $[15] = t15;
  } else {
    t15 = $[15];
  }
  const t16 = `url('${def.cover}')`;
  let t17;
  if ($[16] !== def.coverFit) {
    t17 = def.coverFit === "contain" ? {
      backgroundSize: "64%",
      backgroundPosition: "center 38%"
    } : {};
    $[16] = def.coverFit;
    $[17] = t17;
  } else {
    t17 = $[17];
  }
  let t18;
  if ($[18] !== t16 || $[19] !== t17) {
    t18 = {
      backgroundImage: t16,
      ...t17
    };
    $[18] = t16;
    $[19] = t17;
    $[20] = t18;
  } else {
    t18 = $[20];
  }
  let t19;
  if ($[21] !== t15 || $[22] !== t18) {
    t19 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: t15, style: t18 });
    $[21] = t15;
    $[22] = t18;
    $[23] = t19;
  } else {
    t19 = $[23];
  }
  let t20;
  if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
    t20 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0", style: {
      background: "linear-gradient(transparent 55%, rgb(var(--gi-scrim-rgb) / 0.55) 80%, rgb(var(--gi-scrim-rgb) / 0.92))"
    } });
    $[24] = t20;
  } else {
    t20 = $[24];
  }
  let t21;
  if ($[25] !== isRunning) {
    t21 = !isRunning && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "absolute left-2 top-2 h-3.5 w-3.5 border-2 border-b-0 border-r-0 border-white/50" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "absolute right-2 top-2 h-3.5 w-3.5 border-2 border-b-0 border-l-0 border-white/50" })
    ] });
    $[25] = isRunning;
    $[26] = t21;
  } else {
    t21 = $[26];
  }
  let t22;
  if ($[27] !== igniting) {
    t22 = igniting && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 z-10 animate-gi-ignite motion-reduce:hidden", style: {
      background: "radial-gradient(120% 90% at 50% 50%, color-mix(in srgb, var(--color-gi-run-glow) 40%, transparent), transparent 68%)",
      mixBlendMode: "screen"
    } });
    $[27] = igniting;
    $[28] = t22;
  } else {
    t22 = $[28];
  }
  let t23;
  if ($[29] !== isRunning || $[30] !== onStop) {
    t23 = isRunning && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 animate-gi-scan", style: {
        background: "linear-gradient(transparent, color-mix(in srgb, var(--color-gi-run-glow) 10%, transparent) 50%, transparent)",
        backgroundSize: "100% 14px"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-3 top-3 flex animate-gi-pop items-center gap-1.5 px-2.5 py-1 text-xs font-bold tracking-wide text-gi-run-glow", style: {
        background: "rgb(var(--gi-scrim-rgb) / 0.72)",
        border: "1px solid var(--color-gi-run-glow)",
        clipPath: "polygon(0 0,100% 0,100% 70%,calc(100% - 8px) 100%,0 100%)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "h-1.5 w-1.5 animate-gi-blink rounded-full bg-gi-run-glow", style: {
          boxShadow: "0 0 9px var(--color-gi-run-glow)"
        } }),
        "联动中"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GiButton, { "aria-label": "停止灯光联动", variant: "outline", className: "absolute right-3 top-3 animate-gi-pop px-3 py-1 text-xs", onClick: (e_0) => {
        e_0.stopPropagation();
        onStop();
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Square, { "aria-hidden": true, className: "h-3 w-3", fill: "currentColor" }),
        "停止"
      ] })
    ] });
    $[29] = isRunning;
    $[30] = onStop;
    $[31] = t23;
  } else {
    t23 = $[31];
  }
  let t24;
  if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
    t24 = {
      background: "linear-gradient(transparent, rgb(var(--gi-scrim-rgb) / 0.94))"
    };
    $[32] = t24;
  } else {
    t24 = $[32];
  }
  let t25;
  if ($[33] !== def.nameZh) {
    t25 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-base font-bold tracking-wide text-gi-on-cover", children: def.nameZh });
    $[33] = def.nameZh;
    $[34] = t25;
  } else {
    t25 = $[34];
  }
  let t26;
  if ($[35] !== def.accent) {
    t26 = /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { "aria-hidden": true, className: "h-3 w-3 flex-none", style: {
      color: def.accent
    } });
    $[35] = def.accent;
    $[36] = t26;
  } else {
    t26 = $[36];
  }
  const t27 = isRunning ? liveStatus ?? "灯光联动进行中" : def.subtitle ?? "点击配置";
  let t28;
  if ($[37] !== t27) {
    t28 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: t27 });
    $[37] = t27;
    $[38] = t28;
  } else {
    t28 = $[38];
  }
  let t29;
  if ($[39] !== t26 || $[40] !== t28) {
    t29 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-0.5 flex items-center gap-1.5 text-xs text-gi-on-cover-mut", children: [
      t26,
      t28
    ] });
    $[39] = t26;
    $[40] = t28;
    $[41] = t29;
  } else {
    t29 = $[41];
  }
  let t30;
  if ($[42] !== enabledEffectLabels || $[43] !== isRunning) {
    t30 = isRunning && enabledEffectLabels && enabledEffectLabels.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex flex-wrap gap-1", children: enabledEffectLabels.map(_temp$4) });
    $[42] = enabledEffectLabels;
    $[43] = isRunning;
    $[44] = t30;
  } else {
    t30 = $[44];
  }
  let t31;
  if ($[45] !== t25 || $[46] !== t29 || $[47] !== t30) {
    t31 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-4", style: t24, children: [
      t25,
      t29,
      t30
    ] });
    $[45] = t25;
    $[46] = t29;
    $[47] = t30;
    $[48] = t31;
  } else {
    t31 = $[48];
  }
  let t32;
  if ($[49] !== t10 || $[50] !== t11 || $[51] !== t12 || $[52] !== t13 || $[53] !== t19 || $[54] !== t21 || $[55] !== t22 || $[56] !== t23 || $[57] !== t31 || $[58] !== t5 || $[59] !== t7 || $[60] !== t8 || $[61] !== t9) {
    t32 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: t5, style: t7, onClick: t8, role: t9, tabIndex: t10, "aria-label": t11, onKeyDown: t12, children: [
      t13,
      t19,
      t20,
      t21,
      t22,
      t23,
      t31
    ] });
    $[49] = t10;
    $[50] = t11;
    $[51] = t12;
    $[52] = t13;
    $[53] = t19;
    $[54] = t21;
    $[55] = t22;
    $[56] = t23;
    $[57] = t31;
    $[58] = t5;
    $[59] = t7;
    $[60] = t8;
    $[61] = t9;
    $[62] = t32;
  } else {
    t32 = $[62];
  }
  return t32;
}
function _temp$4(label) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "border px-1.5 py-0.5 text-xs leading-none text-gi-on-cover-mut", style: {
    borderColor: "color-mix(in srgb, var(--color-gi-on-cover) 22%, transparent)",
    background: "rgb(var(--gi-scrim-rgb) / 0.72)"
  }, children: label }, label);
}
function ComingSoonStrip() {
  const $ = compilerRuntimeExports.c(3);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = {
      borderColor: "color-mix(in srgb, var(--color-gi-line) 85%, transparent)",
      background: "linear-gradient(180deg, color-mix(in srgb, var(--color-gi-panel) 45%, transparent), transparent)",
      clipPath: "polygon(0 0,100% 0,100% calc(100% - 20px),calc(100% - 20px) 100%,0 100%)"
    };
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "absolute left-2 top-2 h-3.5 w-3.5 border-2 border-b-0 border-r-0", style: {
      borderColor: "color-mix(in srgb, var(--color-gi-mut) 55%, transparent)"
    } });
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex aspect-square animate-gi-rise flex-col items-center justify-center gap-3 self-stretch border border-dashed px-4 text-center", style: t0, children: [
      t1,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "grid h-11 w-11 place-items-center border", style: {
        borderColor: "var(--color-gi-line)",
        background: "var(--color-gi-surface)",
        clipPath: "polygon(0 0,100% 0,100% calc(100% - 7px),calc(100% - 7px) 100%,0 100%)"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Gamepad2, { "aria-hidden": true, className: "h-5 w-5 text-gi-mut" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold tracking-wide text-gi-txt", children: "更多游戏" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs leading-relaxed text-gi-mut", children: "联动开发中 · 敬请期待" })
      ] })
    ] });
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  return t2;
}
function EffectCheckItem(t0) {
  const $ = compilerRuntimeExports.c(28);
  const {
    effect,
    checked,
    accent,
    disabled: t1,
    onChange
  } = t0;
  const disabled = t1 === void 0 ? false : t1;
  const t2 = checked ? `linear-gradient(90deg, color-mix(in srgb, ${accent} 10%, transparent), var(--color-gi-panel) 70%)` : "var(--color-gi-panel)";
  const t3 = `1px solid ${checked ? accent : "var(--color-gi-line)"}`;
  let t4;
  if ($[0] !== t2 || $[1] !== t3) {
    t4 = {
      background: t2,
      border: t3,
      clipPath: "polygon(0 0,100% 0,100% 100%,10px 100%,0 calc(100% - 10px))"
    };
    $[0] = t2;
    $[1] = t3;
    $[2] = t4;
  } else {
    t4 = $[2];
  }
  let t5;
  if ($[3] !== checked || $[4] !== onChange) {
    t5 = () => onChange(!checked);
    $[3] = checked;
    $[4] = onChange;
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  const t6 = checked ? accent : "transparent";
  const t7 = `1.5px solid ${checked ? accent : "var(--color-gi-line)"}`;
  let t8;
  if ($[6] !== t6 || $[7] !== t7) {
    t8 = {
      background: t6,
      border: t7,
      clipPath: "polygon(0 0,100% 0,100% 70%,70% 100%,0 100%)"
    };
    $[6] = t6;
    $[7] = t7;
    $[8] = t8;
  } else {
    t8 = $[8];
  }
  let t9;
  if ($[9] !== checked) {
    t9 = checked && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5", strokeWidth: 3 });
    $[9] = checked;
    $[10] = t9;
  } else {
    t9 = $[10];
  }
  let t10;
  if ($[11] !== t8 || $[12] !== t9) {
    t10 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "mt-0.5 flex h-5 w-5 flex-none items-center justify-center text-white", style: t8, children: t9 });
    $[11] = t8;
    $[12] = t9;
    $[13] = t10;
  } else {
    t10 = $[13];
  }
  let t11;
  if ($[14] !== effect.label) {
    t11 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-sm font-semibold", children: effect.label });
    $[14] = effect.label;
    $[15] = t11;
  } else {
    t11 = $[15];
  }
  let t12;
  if ($[16] !== effect.description) {
    t12 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 block text-xs leading-relaxed text-gi-mut", children: effect.description });
    $[16] = effect.description;
    $[17] = t12;
  } else {
    t12 = $[17];
  }
  let t13;
  if ($[18] !== t11 || $[19] !== t12) {
    t13 = /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "min-w-0", children: [
      t11,
      t12
    ] });
    $[18] = t11;
    $[19] = t12;
    $[20] = t13;
  } else {
    t13 = $[20];
  }
  let t14;
  if ($[21] !== checked || $[22] !== disabled || $[23] !== t10 || $[24] !== t13 || $[25] !== t4 || $[26] !== t5) {
    t14 = /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", role: "checkbox", "aria-checked": checked, disabled, className: "mb-2.5 flex w-full items-start gap-3 px-3.5 py-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gi-steel disabled:cursor-not-allowed disabled:opacity-50", style: t4, onClick: t5, children: [
      t10,
      t13
    ] });
    $[21] = checked;
    $[22] = disabled;
    $[23] = t10;
    $[24] = t13;
    $[25] = t4;
    $[26] = t5;
    $[27] = t14;
  } else {
    t14 = $[27];
  }
  return t14;
}
function GiDialogClose(t0) {
  const $ = compilerRuntimeExports.c(7);
  const {
    className
  } = t0;
  let t1;
  if ($[0] !== className) {
    t1 = cn("absolute top-[18px] right-[18px] z-10 flex h-8 w-8 cursor-pointer items-center justify-center", "text-gi-mut transition-[color,background-color,border-color] duration-150", "hover:bg-gi-panel hover:text-gi-txt", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gi-steel", className);
    $[0] = className;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  let t3;
  let t4;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = {
      clipPath: "polygon(8px 0,100% 0,100% 100%,0 100%)",
      border: "1px solid var(--color-gi-line)",
      background: "var(--color-gi-surface)"
    };
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsx(X, { "aria-hidden": true, className: "h-4 w-4", strokeWidth: 2.25 });
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "关闭" });
    $[2] = t2;
    $[3] = t3;
    $[4] = t4;
  } else {
    t2 = $[2];
    t3 = $[3];
    t4 = $[4];
  }
  let t5;
  if ($[5] !== t1) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogClose, { className: t1, style: t2, children: [
      t3,
      t4
    ] });
    $[5] = t1;
    $[6] = t5;
  } else {
    t5 = $[6];
  }
  return t5;
}
function GiSectionLabel(t0) {
  const $ = compilerRuntimeExports.c(11);
  const {
    accent,
    children,
    className
  } = t0;
  let t1;
  if ($[0] !== className) {
    t1 = cn("mb-3 flex items-center gap-2.5", className);
    $[0] = className;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] !== accent) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "h-0.5 w-5 flex-none", style: {
      background: accent
    } });
    $[2] = accent;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== children) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-none text-xs font-bold tracking-[0.18em] text-gi-txt", children });
    $[4] = children;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  let t4;
  if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "h-px flex-1", style: {
      background: "var(--color-gi-line-soft)"
    } });
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] !== t1 || $[8] !== t2 || $[9] !== t3) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: t1, children: [
      t2,
      t3,
      t4
    ] });
    $[7] = t1;
    $[8] = t2;
    $[9] = t3;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  return t5;
}
function LightingGifTile(t0) {
  const $ = compilerRuntimeExports.c(8);
  const {
    src,
    alt
  } = t0;
  const [errored, setErrored] = reactExports.useState(false);
  let t1;
  if ($[0] !== src) {
    t1 = resolvePublicAssetUrl(src);
    $[0] = src;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const url = t1;
  let t2;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = {
      borderColor: "var(--color-gi-line)",
      background: "var(--color-gi-panel)",
      clipPath: "polygon(0 0,100% 0,100% calc(100% - 8px),calc(100% - 8px) 100%,0 100%)"
    };
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = {
      aspectRatio: "320 / 120",
      background: "var(--gi-cover-bg)"
    };
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] !== alt || $[5] !== errored || $[6] !== url) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative max-w-[320px] overflow-hidden border", style: t2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full", style: t3, children: errored ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full w-full items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gi-on-cover-mut", children: "灯效预览加载失败" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: url, alt, className: "h-full w-full object-contain", loading: "lazy", onError: () => setErrored(true) }) }) });
    $[4] = alt;
    $[5] = errored;
    $[6] = url;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  return t4;
}
function PreviewDisclosure(t0) {
  const $ = compilerRuntimeExports.c(16);
  const {
    open,
    onToggle,
    expandedLabel,
    collapsedLabel,
    panelRef,
    children
  } = t0;
  const t1 = open && "rotate-180";
  let t2;
  if ($[0] !== t1) {
    t2 = cn("h-3.5 w-3.5 transition-transform", t1);
    $[0] = t1;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  let t3;
  if ($[2] !== t2) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { "aria-hidden": true, className: t2 });
    $[2] = t2;
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  const t4 = open ? expandedLabel : collapsedLabel;
  let t5;
  if ($[4] !== onToggle || $[5] !== open || $[6] !== t3 || $[7] !== t4) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: onToggle, className: "flex items-center gap-1 text-xs text-gi-mut transition-colors hover:text-gi-txt focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gi-steel", "aria-expanded": open, children: [
      t3,
      t4
    ] });
    $[4] = onToggle;
    $[5] = open;
    $[6] = t3;
    $[7] = t4;
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  let t6;
  if ($[9] !== children || $[10] !== open || $[11] !== panelRef) {
    t6 = open ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: panelRef, className: "mt-2", children }) : null;
    $[9] = children;
    $[10] = open;
    $[11] = panelRef;
    $[12] = t6;
  } else {
    t6 = $[12];
  }
  let t7;
  if ($[13] !== t5 || $[14] !== t6) {
    t7 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 mt-2 pl-12", children: [
      t5,
      t6
    ] });
    $[13] = t5;
    $[14] = t6;
    $[15] = t7;
  } else {
    t7 = $[15];
  }
  return t7;
}
function GameSettingsDialog(t0) {
  const $ = compilerRuntimeExports.c(96);
  const {
    def,
    open,
    enabledEffects,
    deviceReady,
    isRunning,
    busy: t1,
    busyStage: t2,
    errorMessage: t3,
    onToggleEffect,
    onStart,
    onClose,
    onAbort,
    extra,
    extraAfterEffectId
  } = t0;
  const busy = t1 === void 0 ? false : t1;
  const busyStage = t2 === void 0 ? null : t2;
  const errorMessage = t3 === void 0 ? null : t3;
  let t4;
  if ($[0] !== def.effects || $[1] !== enabledEffects) {
    let t52;
    if ($[3] !== enabledEffects) {
      t52 = (e) => !(enabledEffects[e.id] ?? e.defaultEnabled);
      $[3] = enabledEffects;
      $[4] = t52;
    } else {
      t52 = $[4];
    }
    t4 = def.effects.every(t52);
    $[0] = def.effects;
    $[1] = enabledEffects;
    $[2] = t4;
  } else {
    t4 = $[2];
  }
  const noneEnabled = t4;
  const {
    connect,
    isConnecting
  } = useConnectDevice();
  const scrollAreaRef = reactExports.useRef(null);
  let t5;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ new Map();
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  const previewPanelRefs = reactExports.useRef(t5);
  const pendingPreviewIdRef = reactExports.useRef(null);
  let t6;
  if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
    t6 = [];
    $[6] = t6;
  } else {
    t6 = $[6];
  }
  const [openPreviewIds, setOpenPreviewIds] = reactExports.useState(t6);
  let t7;
  if ($[7] !== openPreviewIds) {
    t7 = Array.isArray(openPreviewIds) ? openPreviewIds : [];
    $[7] = openPreviewIds;
    $[8] = t7;
  } else {
    t7 = $[8];
  }
  const previewIds = t7;
  let t8;
  let t9;
  if ($[9] !== open) {
    t8 = () => {
      if (!open) {
        setOpenPreviewIds([]);
      }
    };
    t9 = [open];
    $[9] = open;
    $[10] = t8;
    $[11] = t9;
  } else {
    t8 = $[10];
    t9 = $[11];
  }
  reactExports.useEffect(t8, t9);
  let t10;
  if ($[12] !== def.effects || $[13] !== enabledEffects || $[14] !== extraAfterEffectId) {
    t10 = extraAfterEffectId ? enabledEffects[extraAfterEffectId] ?? def.effects.find((e_0) => e_0.id === extraAfterEffectId)?.defaultEnabled ?? false : false;
    $[12] = def.effects;
    $[13] = enabledEffects;
    $[14] = extraAfterEffectId;
    $[15] = t10;
  } else {
    t10 = $[15];
  }
  const abilityChecked = t10;
  let t11;
  if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
    t11 = (id) => {
      setOpenPreviewIds((prev) => {
        const list = Array.isArray(prev) ? prev : [];
        if (list.includes(id)) {
          return list.filter((x) => x !== id);
        }
        pendingPreviewIdRef.current = id;
        return [...list, id];
      });
    };
    $[16] = t11;
  } else {
    t11 = $[16];
  }
  const togglePreview = t11;
  let t12;
  let t13;
  if ($[17] !== abilityChecked || $[18] !== extraAfterEffectId || $[19] !== previewIds) {
    t12 = () => {
      const id_0 = pendingPreviewIdRef.current;
      if (!id_0 || !previewIds.includes(id_0)) {
        return;
      }
      if (extraAfterEffectId === id_0 && !abilityChecked) {
        return;
      }
      pendingPreviewIdRef.current = null;
      const area = scrollAreaRef.current;
      const panel = previewPanelRefs.current.get(id_0);
      if (!area || !panel) {
        return;
      }
      const areaRect = area.getBoundingClientRect();
      const panelRect = panel.getBoundingClientRect();
      if (panelRect.bottom > areaRect.bottom || panelRect.top < areaRect.top) {
        panel.scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        });
      }
    };
    t13 = [abilityChecked, extraAfterEffectId, previewIds];
    $[17] = abilityChecked;
    $[18] = extraAfterEffectId;
    $[19] = previewIds;
    $[20] = t12;
    $[21] = t13;
  } else {
    t12 = $[20];
    t13 = $[21];
  }
  reactExports.useEffect(t12, t13);
  let t14;
  if ($[22] !== onClose) {
    t14 = (o) => !o && onClose();
    $[22] = onClose;
    $[23] = t14;
  } else {
    t14 = $[23];
  }
  let t15;
  if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
    t15 = {
      background: "linear-gradient(180deg, var(--color-gi-surface), var(--color-gi-panel))",
      borderColor: "var(--color-gi-line)",
      clipPath: "polygon(0 0,100% 0,100% calc(100% - 18px),calc(100% - 18px) 100%,0 100%)"
    };
    $[24] = t15;
  } else {
    t15 = $[24];
  }
  const t16 = `linear-gradient(90deg, color-mix(in srgb, ${def.accent} 14%, transparent), transparent 70%)`;
  let t17;
  if ($[25] !== t16) {
    t17 = {
      borderColor: "var(--color-gi-line-soft)",
      background: t16
    };
    $[25] = t16;
    $[26] = t17;
  } else {
    t17 = $[26];
  }
  const t18 = def.coverFit === "contain" ? "bg-contain" : "bg-cover";
  let t19;
  if ($[27] !== t18) {
    t19 = cn("h-10 w-10 flex-none bg-center bg-no-repeat", t18);
    $[27] = t18;
    $[28] = t19;
  } else {
    t19 = $[28];
  }
  const t20 = `url('${def.cover}')`;
  const t21 = def.coverFit === "contain" ? "var(--gi-cover-bg)" : void 0;
  let t22;
  if ($[29] !== t20 || $[30] !== t21) {
    t22 = {
      backgroundImage: t20,
      backgroundColor: t21,
      clipPath: "polygon(0 0,100% 0,100% 72%,72% 100%,0 100%)"
    };
    $[29] = t20;
    $[30] = t21;
    $[31] = t22;
  } else {
    t22 = $[31];
  }
  let t23;
  if ($[32] !== t19 || $[33] !== t22) {
    t23 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: t19, style: t22 });
    $[32] = t19;
    $[33] = t22;
    $[34] = t23;
  } else {
    t23 = $[34];
  }
  let t24;
  if ($[35] !== def.nameZh) {
    t24 = /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "truncate text-lg font-bold", children: [
      def.nameZh,
      " · 灯光联动"
    ] });
    $[35] = def.nameZh;
    $[36] = t24;
  } else {
    t24 = $[36];
  }
  let t25;
  if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
    t25 = /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: "mt-0.5 text-xs leading-relaxed text-gi-mut", children: "勾选需要的灯效并开始联动。识别全程在本地完成，画面不会上传" });
    $[37] = t25;
  } else {
    t25 = $[37];
  }
  let t26;
  if ($[38] !== t24) {
    t26 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      t24,
      t25
    ] });
    $[38] = t24;
    $[39] = t26;
  } else {
    t26 = $[39];
  }
  let t27;
  if ($[40] !== t17 || $[41] !== t23 || $[42] !== t26) {
    t27 = /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { className: "flex shrink-0 flex-row items-center gap-3 border-b p-[18px] pr-14", style: t17, children: [
      t23,
      t26
    ] });
    $[40] = t17;
    $[41] = t23;
    $[42] = t26;
    $[43] = t27;
  } else {
    t27 = $[43];
  }
  let t28;
  if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
    t28 = /* @__PURE__ */ jsxRuntimeExports.jsx(GiDialogClose, {});
    $[44] = t28;
  } else {
    t28 = $[44];
  }
  let t29;
  let t30;
  if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
    t29 = {
      borderColor: "var(--color-gi-line)",
      background: "color-mix(in srgb, var(--color-gi-steel) 6%, var(--color-gi-panel))"
    };
    t30 = /* @__PURE__ */ jsxRuntimeExports.jsx(MonitorCheck, { "aria-hidden": true, className: "mt-px h-4 w-4 flex-none text-gi-steel" });
    $[45] = t29;
    $[46] = t30;
  } else {
    t29 = $[45];
    t30 = $[46];
  }
  let t31;
  if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
    t31 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-gi-txt", children: "开始前，请先确认游戏画面：" });
    $[47] = t31;
  } else {
    t31 = $[47];
  }
  let t32;
  if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
    t32 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-start gap-2.5 border px-3.5 py-3 text-xs leading-relaxed text-gi-mut", style: t29, children: [
      t30,
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        t31,
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-1.5 space-y-1 pl-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "list-disc", children: "游戏已切到全屏或无边框全屏" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "list-disc", children: "开始后会持续读取你所选「游戏所在屏」的画面用于识别，无需额外授权；识别全程在本地进行，画面不会上传" })
        ] })
      ] })
    ] });
    $[48] = t32;
  } else {
    t32 = $[48];
  }
  let t33;
  if ($[49] !== busy || $[50] !== def.accent || $[51] !== def.effects || $[52] !== enabledEffects || $[53] !== extra || $[54] !== extraAfterEffectId || $[55] !== onToggleEffect || $[56] !== previewIds) {
    t33 = def.effects.map((e_1, i) => {
      const checked = enabledEffects[e_1.id] ?? e_1.defaultEnabled;
      const showExtra = extra && extraAfterEffectId === e_1.id && checked;
      const group = e_1.group ?? "游戏事件";
      const prevGroup = i > 0 ? def.effects[i - 1].group ?? "游戏事件" : null;
      const showGroupLabel = group !== prevGroup;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        showGroupLabel && /* @__PURE__ */ jsxRuntimeExports.jsx(GiSectionLabel, { accent: def.accent, className: i > 0 ? "mt-5" : void 0, children: group }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(EffectCheckItem, { effect: e_1, accent: def.accent, checked, disabled: busy, onChange: (on) => {
          onToggleEffect(e_1.id, on);
          if (on && previewIds.includes(e_1.id)) {
            pendingPreviewIdRef.current = e_1.id;
          }
        } }),
        showExtra ? /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewDisclosure, { open: previewIds.includes(e_1.id), onToggle: () => togglePreview(e_1.id), expandedLabel: "收起技能灯效预览", collapsedLabel: "预览技能灯效", panelRef: (node) => {
          if (node) {
            previewPanelRefs.current.set(e_1.id, node);
          } else {
            previewPanelRefs.current.delete(e_1.id);
          }
        }, children: extra }) : null,
        checked && e_1.previewGifUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewDisclosure, { open: previewIds.includes(e_1.id), onToggle: () => togglePreview(e_1.id), expandedLabel: `收起${e_1.label}灯效预览`, collapsedLabel: `预览${e_1.label}灯效`, panelRef: (node_0) => {
          if (node_0) {
            previewPanelRefs.current.set(e_1.id, node_0);
          } else {
            previewPanelRefs.current.delete(e_1.id);
          }
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LightingGifTile, { src: e_1.previewGifUrl, alt: `${e_1.label}灯效预览` }) }) : null
      ] }, e_1.id);
    });
    $[49] = busy;
    $[50] = def.accent;
    $[51] = def.effects;
    $[52] = enabledEffects;
    $[53] = extra;
    $[54] = extraAfterEffectId;
    $[55] = onToggleEffect;
    $[56] = previewIds;
    $[57] = t33;
  } else {
    t33 = $[57];
  }
  let t34;
  if ($[58] !== extra || $[59] !== extraAfterEffectId) {
    t34 = extra && !extraAfterEffectId && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5", children: extra });
    $[58] = extra;
    $[59] = extraAfterEffectId;
    $[60] = t34;
  } else {
    t34 = $[60];
  }
  let t35;
  if ($[61] !== t33 || $[62] !== t34) {
    t35 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: scrollAreaRef, className: "min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-4 [scrollbar-gutter:stable]", children: [
      t32,
      t33,
      t34
    ] });
    $[61] = t33;
    $[62] = t34;
    $[63] = t35;
  } else {
    t35 = $[63];
  }
  let t36;
  if ($[64] !== connect || $[65] !== deviceReady || $[66] !== errorMessage || $[67] !== isConnecting || $[68] !== noneEnabled) {
    t36 = errorMessage ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { role: "alert", className: "flex shrink-0 items-start gap-2 border-t px-5 py-3 text-[12px] leading-relaxed text-gi-danger", style: {
      borderColor: "var(--color-gi-line-soft)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { "aria-hidden": true, className: "mt-0.5 h-3.5 w-3.5 flex-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 wrap-break-word", children: errorMessage })
    ] }) : !deviceReady ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { role: "status", className: "flex shrink-0 items-center gap-3 border-t px-5 py-3 text-[12px] leading-relaxed text-gi-warn", style: {
      borderColor: "var(--color-gi-line-soft)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { "aria-hidden": true, className: "h-3.5 w-3.5 flex-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 flex-1", children: "还没有连接键盘，连接后即可开始联动" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GiButton, { variant: "ghost", loading: isConnecting, onClick: () => void connect(), className: "flex-none px-3 py-1.5 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Usb, { "aria-hidden": true, className: "h-3.5 w-3.5" }),
        "连接键盘"
      ] })
    ] }) : noneEnabled && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 border-t px-5 py-3 text-center text-xs leading-relaxed", style: {
      borderColor: "var(--color-gi-line-soft)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gi-warn", children: "请至少启用一个灯效" }) });
    $[64] = connect;
    $[65] = deviceReady;
    $[66] = errorMessage;
    $[67] = isConnecting;
    $[68] = noneEnabled;
    $[69] = t36;
  } else {
    t36 = $[69];
  }
  let t37;
  if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
    t37 = {
      borderColor: "var(--color-gi-line-soft)"
    };
    $[70] = t37;
  } else {
    t37 = $[70];
  }
  let t38;
  if ($[71] !== busy || $[72] !== onAbort || $[73] !== onClose) {
    t38 = busy && onAbort ? /* @__PURE__ */ jsxRuntimeExports.jsx(GiButton, { variant: "ghost", onClick: onAbort, children: "中止启动" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(GiButton, { variant: "ghost", onClick: onClose, children: "取消" });
    $[71] = busy;
    $[72] = onAbort;
    $[73] = onClose;
    $[74] = t38;
  } else {
    t38 = $[74];
  }
  const t39 = !deviceReady || isRunning || noneEnabled;
  let t40;
  if ($[75] !== busy || $[76] !== busyStage) {
    t40 = busy ? busyStage ?? "正在启动…" : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { "aria-hidden": true, className: "h-4 w-4", fill: "currentColor" }),
      "开始联动"
    ] });
    $[75] = busy;
    $[76] = busyStage;
    $[77] = t40;
  } else {
    t40 = $[77];
  }
  let t41;
  if ($[78] !== busy || $[79] !== def.accent || $[80] !== onStart || $[81] !== t39 || $[82] !== t40) {
    t41 = /* @__PURE__ */ jsxRuntimeExports.jsx(GiButton, { accent: def.accent, loading: busy, disabled: t39, onClick: onStart, children: t40 });
    $[78] = busy;
    $[79] = def.accent;
    $[80] = onStart;
    $[81] = t39;
    $[82] = t40;
    $[83] = t41;
  } else {
    t41 = $[83];
  }
  let t42;
  if ($[84] !== t38 || $[85] !== t41) {
    t42 = /* @__PURE__ */ jsxRuntimeExports.jsx(DialogFooter, { className: "shrink-0 items-center border-t p-[18px] sm:justify-end", style: t37, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      t38,
      t41
    ] }) });
    $[84] = t38;
    $[85] = t41;
    $[86] = t42;
  } else {
    t42 = $[86];
  }
  let t43;
  if ($[87] !== t27 || $[88] !== t35 || $[89] !== t36 || $[90] !== t42) {
    t43 = /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { showCloseButton: false, className: "flex max-h-[min(90vh,880px)] w-[calc(100vw-2rem)] max-w-[600px] flex-col gap-0 overflow-hidden rounded-none border p-0 text-gi-txt sm:max-w-[600px]", style: t15, children: [
      t27,
      t28,
      t35,
      t36,
      t42
    ] });
    $[87] = t27;
    $[88] = t35;
    $[89] = t36;
    $[90] = t42;
    $[91] = t43;
  } else {
    t43 = $[91];
  }
  let t44;
  if ($[92] !== open || $[93] !== t14 || $[94] !== t43) {
    t44 = /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: t14, children: t43 });
    $[92] = open;
    $[93] = t14;
    $[94] = t43;
    $[95] = t44;
  } else {
    t44 = $[95];
  }
  return t44;
}
const ACCENT = "var(--color-gi-steel)";
function isNon169(d) {
  return d.height > 0 && Math.abs(d.width / d.height - 16 / 9) > 0.02 * (16 / 9);
}
function DisplayPicker() {
  const targetDisplayId = useGameInteractionStore((s) => s.targetDisplayId);
  const setTargetDisplayId = useGameInteractionStore((s_0) => s_0.setTargetDisplayId);
  const recognitionStatus = useGameInteractionStore((s_1) => s_1.recognitionStatus);
  const disabled = recognitionStatus === "running" || recognitionStatus === "initializing";
  const [displays, setDisplays] = reactExports.useState(null);
  const [open, setOpen] = reactExports.useState(false);
  const [fallbackHint, setFallbackHint] = reactExports.useState(false);
  const refresh = reactExports.useCallback(async () => {
    try {
      const list = await window.screenCapture?.getDisplays();
      if (!list) return;
      setDisplays(list);
      const saved = useGameInteractionStore.getState().targetDisplayId;
      if (saved !== null && !list.some((d) => d.id === saved)) {
        useGameInteractionStore.getState().setTargetDisplayId(null);
        setFallbackHint(true);
      }
    } catch {
    }
  }, []);
  reactExports.useEffect(() => {
    void refresh();
  }, [refresh]);
  const handleOpenChange = (o) => {
    setOpen(o);
    if (o) void refresh();
  };
  if (!displays || displays.length < 2) return null;
  const primaryId = displays.find((d_0) => d_0.isPrimary)?.id ?? displays[0].id;
  const selectedId = targetDisplayId ?? primaryId;
  const selectedIndex = Math.max(0, displays.findIndex((d_1) => d_1.id === selectedId));
  const selected = displays[selectedIndex];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-none flex-col items-end gap-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { open, onOpenChange: handleOpenChange, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(PopoverTrigger, { disabled, title: disabled ? "识别运行中无法更改，请先停止联动" : void 0, className: cn("flex items-center gap-2 border px-3 py-1.5 text-xs text-gi-txt transition-opacity", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gi-steel", disabled ? "cursor-not-allowed opacity-50" : "hover:opacity-80"), style: {
        background: "var(--color-gi-panel)",
        borderColor: "var(--color-gi-line)",
        clipPath: "polygon(0 0,100% 0,100% calc(100% - 8px),calc(100% - 8px) 100%,0 100%)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Monitor, { "aria-hidden": true, className: "h-3.5 w-3.5 text-gi-mut" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "游戏所在屏：显示器 ",
          selectedIndex + 1,
          selected?.isPrimary ? "（主）" : ""
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { "aria-hidden": true, className: "h-3.5 w-3.5 text-gi-mut" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(PopoverContent, { align: "end", className: "w-[min(360px,92vw)] rounded-none border p-3 text-gi-txt", style: {
        background: "linear-gradient(180deg, var(--color-gi-surface), var(--color-gi-panel))",
        borderColor: "var(--color-gi-line)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-xs text-gi-mut", children: "选择游戏画面所在的显示器（用于识别采集）" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-3 min-[300px]:grid-cols-2", children: displays.map((d_2, i) => {
          const isSelected = d_2.id === selectedId;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => {
            setTargetDisplayId(d_2.isPrimary ? null : d_2.id);
            setFallbackHint(false);
            setOpen(false);
          }, className: "relative overflow-hidden border p-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gi-steel", style: {
            borderColor: isSelected ? ACCENT : "var(--color-gi-line)",
            boxShadow: isSelected ? `inset 0 0 0 1px ${ACCENT}` : void 0,
            clipPath: "polygon(0 0,100% 0,100% calc(100% - 8px),calc(100% - 8px) 100%,0 100%)"
          }, children: [
            d_2.thumbnailDataUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: d_2.thumbnailDataUrl, alt: `显示器 ${i + 1}`, className: "aspect-video w-full object-cover", draggable: false }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video w-full bg-gi-panel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 px-2 py-1.5 text-xs text-gi-mut", children: [
              isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { "aria-hidden": true, className: "h-3 w-3 flex-none", style: {
                color: ACCENT
              } }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "truncate", children: [
                "显示器 ",
                i + 1,
                d_2.isPrimary ? "（主）" : "",
                " · ",
                d_2.width,
                "×",
                d_2.height
              ] })
            ] })
          ] }, d_2.id);
        }) }),
        selected && isNon169(selected) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-start gap-1.5 text-xs leading-relaxed text-gi-warn", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { "aria-hidden": true, className: "mt-0.5 h-3 w-3 flex-none" }),
          "当前所选屏幕比例非 16:9，识别效果可能下降"
        ] })
      ] })
    ] }),
    disabled && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs leading-relaxed text-gi-mut", children: "识别运行中不可更改，停止联动后可选" }),
    fallbackHint && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs leading-relaxed text-gi-mut", children: "上次选择的屏幕已断开，已回退为主屏" })
  ] });
}
function GameStatusPanel(t0) {
  const $ = compilerRuntimeExports.c(37);
  const {
    gameState
  } = t0;
  const hero = gameState?.hero ?? null;
  const healthPercent = gameState?.healthPercent ?? 100;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-lg flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-5 w-5" }),
      "游戏状态"
    ] }) });
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  let t2;
  if ($[1] !== gameState || $[2] !== hero) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4", children: hero ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-lg flex items-center justify-center text-2xl bg-primary/20 border-2 border-primary/40", children: hero.nameZh.charAt(0) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-lg", children: hero.nameZh }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: hero.name })
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-lg bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-8 w-8" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "未检测到英雄" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: gameState?.agentSelect ? "选人界面 · 已暂停对局识别" : gameState?.skillHudVisible === false ? "技能 HUD 不可见" : gameState?.heroDetectDebug ? `模板 ${gameState.heroDetectDebug.templateCount} 个 · 峰值 ${gameState.heroDetectDebug.peakHeroId ?? "—"} ${(gameState.heroDetectDebug.peakScore * 100).toFixed(0)}% (次高 ${((gameState.heroDetectDebug.secondPeakScore ?? 0) * 100).toFixed(0)}%) · 达标 ${gameState.heroDetectDebug.bestHeroId ?? "—"} ${(gameState.heroDetectDebug.bestScore * 100).toFixed(0)}% (${gameState.heroDetectDebug.matchedSlots}/4 槽≥28%)${gameState.heroDetectDebug.matchErrors ? ` · 匹配错误 ${gameState.heroDetectDebug.matchErrors}` : ""}` : "等待游戏数据..." }),
        gameState?.heroDetectDebug && !gameState.heroDetectDebug.templatesReady ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-600 dark:text-amber-400", children: "英雄模板仍在加载中…" }) : null
      ] })
    ] }) }) });
    $[1] = gameState;
    $[2] = hero;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4 text-red-500" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "生命值" })
    ] });
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] !== healthPercent) {
    t4 = healthPercent.toFixed(0);
    $[5] = healthPercent;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] !== gameState?.hpSource) {
    t5 = gameState?.hpSource === "ocr" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-xs text-amber-600 dark:text-amber-400", children: "OCR" }) : null;
    $[7] = gameState?.hpSource;
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  let t6;
  if ($[9] !== t4 || $[10] !== t5) {
    t6 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      t3,
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
        t4,
        t5
      ] })
    ] });
    $[9] = t4;
    $[10] = t5;
    $[11] = t6;
  } else {
    t6 = $[11];
  }
  const t7 = Math.min(100, healthPercent);
  const t8 = healthPercent < 30 ? "#ef4444" : "#22c55e";
  let t9;
  if ($[12] !== t8) {
    t9 = {
      "--progress-background": t8
    };
    $[12] = t8;
    $[13] = t9;
  } else {
    t9 = $[13];
  }
  const t10 = t9;
  let t11;
  if ($[14] !== t10 || $[15] !== t7) {
    t11 = /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: t7, className: "h-3", style: t10 });
    $[14] = t10;
    $[15] = t7;
    $[16] = t11;
  } else {
    t11 = $[16];
  }
  let t12;
  if ($[17] !== gameState) {
    t12 = gameState?.hpDigitSlots && gameState.hpDigitSlots.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground font-mono", children: [
      "HP E2E:",
      " ",
      gameState.hpDigitSlots.map(_temp$3).join(" "),
      gameState.hpOcrText ? ` · OCR: "${gameState.hpOcrText}"` : ""
    ] }) : null;
    $[17] = gameState;
    $[18] = t12;
  } else {
    t12 = $[18];
  }
  let t13;
  if ($[19] !== gameState) {
    t13 = gameState?.healthPercent !== void 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-dashed p-2 text-xs font-mono space-y-0.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "HP 诊断" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: gameState.hpSource === "ocr" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400", children: [
          "来源 ",
          gameState.hpSource ?? "e2e"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "OCR 文本 / 置信度" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          '"',
          gameState.hpOcrText ?? "",
          '"',
          gameState.hpOcrConfidence !== void 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: gameState.hpOcrConfidence >= 0.6 ? "ml-1 text-green-600 dark:text-green-400" : "ml-1 text-red-600 dark:text-red-400", children: [
            (gameState.hpOcrConfidence * 100).toFixed(0),
            "%"
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-muted-foreground", children: "—" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "采纳 OCR / 判定" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          gameState.hpOcrAdopted === void 0 ? "—" : gameState.hpOcrAdopted ? "是" : "否(丢弃可疑E2E)",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: gameState.healthPercent > 0 && gameState.healthPercent <= 30 ? "ml-1 text-red-600 dark:text-red-400" : "ml-1 text-green-600 dark:text-green-400", children: gameState.healthPercent > 0 && gameState.healthPercent <= 30 ? "低血量!" : "正常" })
        ] })
      ] })
    ] }) : null;
    $[19] = gameState;
    $[20] = t13;
  } else {
    t13 = $[20];
  }
  let t14;
  if ($[21] !== t11 || $[22] !== t12 || $[23] !== t13 || $[24] !== t6) {
    t14 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      t6,
      t11,
      t12,
      t13
    ] });
    $[21] = t11;
    $[22] = t12;
    $[23] = t13;
    $[24] = t6;
    $[25] = t14;
  } else {
    t14 = $[25];
  }
  let t15;
  if ($[26] !== gameState) {
    t15 = gameState?.skillHudEdgeRatio !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "技能 HUD" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
        gameState.skillHudVisible ? "可见" : "隐藏",
        " · ",
        "edge ",
        (gameState.skillHudEdgeRatio * 100).toFixed(1),
        "%"
      ] })
    ] }) });
    $[26] = gameState;
    $[27] = t15;
  } else {
    t15 = $[27];
  }
  let t16;
  if ($[28] !== gameState) {
    t16 = gameState && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "识别置信度" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
          (gameState.confidence * 100).toFixed(1),
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: gameState.confidence * 100, className: "h-1" })
    ] });
    $[28] = gameState;
    $[29] = t16;
  } else {
    t16 = $[29];
  }
  let t17;
  if ($[30] !== t14 || $[31] !== t15 || $[32] !== t16) {
    t17 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      t14,
      t15,
      t16
    ] });
    $[30] = t14;
    $[31] = t15;
    $[32] = t16;
    $[33] = t17;
  } else {
    t17 = $[33];
  }
  let t18;
  if ($[34] !== t17 || $[35] !== t2) {
    t18 = /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      t1,
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        t2,
        t17
      ] }) })
    ] });
    $[34] = t17;
    $[35] = t2;
    $[36] = t18;
  } else {
    t18 = $[36];
  }
  return t18;
}
function _temp$3(s) {
  return `${s.slot}=${s.label}(${s.classIndex})`;
}
const ABILITY_ORDER = ["C", "Q", "E", "X"];
const ABILITY_COLORS = {
  C: {
    bg: "bg-cyan-500/20",
    border: "border-cyan-500",
    text: "text-cyan-500"
  },
  Q: {
    bg: "bg-yellow-500/20",
    border: "border-yellow-500",
    text: "text-yellow-500"
  },
  E: {
    bg: "bg-purple-500/20",
    border: "border-purple-500",
    text: "text-purple-500"
  },
  X: {
    bg: "bg-red-500/20",
    border: "border-red-500",
    text: "text-red-500"
  }
};
function AbilityCard(t0) {
  const $ = compilerRuntimeExports.c(17);
  const {
    ability
  } = t0;
  let t1;
  if ($[0] !== ability.key) {
    t1 = ABILITY_COLORS[ability.key] || {
      bg: "bg-gray-500/20",
      border: "border-gray-500",
      text: "text-gray-500"
    };
    $[0] = ability.key;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const colors = t1;
  const t2 = `
        relative flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all motion-reduce:transition-none
        ${ability.available ? colors.bg : "bg-muted/50"}
        ${ability.available ? colors.border : "border-muted-foreground/30"}
        ${ability.available ? "shadow-lg" : "opacity-60"}
        ${ability.key === "X" && ability.available ? "animate-pulse motion-reduce:animate-none" : ""}
      `;
  const t3 = `text-2xl font-bold mb-1 ${ability.available ? colors.text : "text-muted-foreground"}`;
  let t4;
  if ($[2] !== ability.key || $[3] !== t3) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: t3, children: ability.key });
    $[2] = ability.key;
    $[3] = t3;
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  if ($[5] !== ability.name) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-center text-muted-foreground truncate max-w-full", children: ability.name });
    $[5] = ability.name;
    $[6] = t5;
  } else {
    t5 = $[6];
  }
  let t6;
  if ($[7] !== ability.available || $[8] !== ability.charges || $[9] !== ability.maxCharges || $[10] !== colors) {
    t6 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-center", children: ability.available ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm font-medium ${colors.text}`, children: ability.maxCharges !== void 0 && ability.charges !== void 0 ? `${ability.charges}/${ability.maxCharges}` : ability.charges !== void 0 && ability.charges > 1 ? `${ability.charges} 充能` : "就绪" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-muted-foreground", children: ability.maxCharges !== void 0 && ability.charges !== void 0 ? `${ability.charges}/${ability.maxCharges}` : "无充能" }) });
    $[7] = ability.available;
    $[8] = ability.charges;
    $[9] = ability.maxCharges;
    $[10] = colors;
    $[11] = t6;
  } else {
    t6 = $[11];
  }
  let t7;
  if ($[12] !== t2 || $[13] !== t4 || $[14] !== t5 || $[15] !== t6) {
    t7 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: t2, children: [
      t4,
      t5,
      t6
    ] });
    $[12] = t2;
    $[13] = t4;
    $[14] = t5;
    $[15] = t6;
    $[16] = t7;
  } else {
    t7 = $[16];
  }
  return t7;
}
function AbilityDisplay(t0) {
  const $ = compilerRuntimeExports.c(13);
  const {
    abilities
  } = t0;
  let T0;
  let T1;
  let t1;
  let t2;
  if ($[0] !== abilities) {
    const sortedAbilities = [...abilities].sort(_temp$2);
    T1 = Card;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
      t2 = /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-lg flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Swords, { className: "h-5 w-5" }),
        "技能状态"
      ] }) });
      $[5] = t2;
    } else {
      t2 = $[5];
    }
    T0 = CardContent;
    t1 = abilities.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-muted-foreground py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Swords, { className: "h-12 w-12 mx-auto mb-4 opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "等待检测技能状态..." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-3", children: sortedAbilities.map(_temp2$1) });
    $[0] = abilities;
    $[1] = T0;
    $[2] = T1;
    $[3] = t1;
    $[4] = t2;
  } else {
    T0 = $[1];
    T1 = $[2];
    t1 = $[3];
    t2 = $[4];
  }
  let t3;
  if ($[6] !== T0 || $[7] !== t1) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsx(T0, { children: t1 });
    $[6] = T0;
    $[7] = t1;
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  let t4;
  if ($[9] !== T1 || $[10] !== t2 || $[11] !== t3) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsxs(T1, { children: [
      t2,
      t3
    ] });
    $[9] = T1;
    $[10] = t2;
    $[11] = t3;
    $[12] = t4;
  } else {
    t4 = $[12];
  }
  return t4;
}
function _temp2$1(ability) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AbilityCard, { ability }, ability.key);
}
function _temp$2(a, b) {
  return ABILITY_ORDER.indexOf(a.key) - ABILITY_ORDER.indexOf(b.key);
}
const LABEL_MAP = {
  hero: "英雄头像",
  hp: "血量区",
  kill: "击杀区",
  Q: "Q",
  W: "W",
  E: "E",
  R: "R",
  D: "D",
  F: "F",
  P: "被动"
};
function CroppedImagesPanel(t0) {
  const $ = compilerRuntimeExports.c(26);
  const {
    images
  } = t0;
  if (images.length === 0) {
    let t12;
    if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
      t12 = /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-lg flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "h-5 w-5" }),
        "裁剪区域预览"
      ] }) });
      $[0] = t12;
    } else {
      t12 = $[0];
    }
    let t22;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
      t22 = /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        t12,
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-muted-foreground py-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "h-12 w-12 mx-auto mb-4 opacity-30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "等待识别数据..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-2", children: "请点击「开始」启动识别，裁剪图像将在此显示" })
        ] }) })
      ] });
      $[1] = t22;
    } else {
      t22 = $[1];
    }
    return t22;
  }
  let t1;
  if ($[2] !== images) {
    t1 = images.find(_temp$1);
    $[2] = images;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  const heroImage = t1;
  let T0;
  let T1;
  let t2;
  let t3;
  let t4;
  let t5;
  if ($[4] !== heroImage || $[5] !== images) {
    const abilityImages = images.filter(_temp2);
    T1 = Card;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
      t5 = /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-lg flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "h-5 w-5" }),
        "裁剪区域预览"
      ] }) });
      $[12] = t5;
    } else {
      t5 = $[12];
    }
    T0 = CardContent;
    t2 = "space-y-4";
    if ($[13] !== heroImage) {
      t3 = heroImage && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-2", children: LABEL_MAP.hero }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 flex-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border rounded-lg overflow-hidden bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImage.dataUrl, alt: LABEL_MAP.hero, className: "block max-h-24 object-contain" }) }) })
      ] });
      $[13] = heroImage;
      $[14] = t3;
    } else {
      t3 = $[14];
    }
    t4 = abilityImages.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-2", children: "技能区域" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 flex-wrap", children: abilityImages.map(_temp3) })
    ] });
    $[4] = heroImage;
    $[5] = images;
    $[6] = T0;
    $[7] = T1;
    $[8] = t2;
    $[9] = t3;
    $[10] = t4;
    $[11] = t5;
  } else {
    T0 = $[6];
    T1 = $[7];
    t2 = $[8];
    t3 = $[9];
    t4 = $[10];
    t5 = $[11];
  }
  let t6;
  if ($[15] !== t2 || $[16] !== t3 || $[17] !== t4) {
    t6 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: t2, children: [
      t3,
      t4
    ] });
    $[15] = t2;
    $[16] = t3;
    $[17] = t4;
    $[18] = t6;
  } else {
    t6 = $[18];
  }
  let t7;
  if ($[19] !== T0 || $[20] !== t6) {
    t7 = /* @__PURE__ */ jsxRuntimeExports.jsx(T0, { children: t6 });
    $[19] = T0;
    $[20] = t6;
    $[21] = t7;
  } else {
    t7 = $[21];
  }
  let t8;
  if ($[22] !== T1 || $[23] !== t5 || $[24] !== t7) {
    t8 = /* @__PURE__ */ jsxRuntimeExports.jsxs(T1, { children: [
      t5,
      t7
    ] });
    $[22] = T1;
    $[23] = t5;
    $[24] = t7;
    $[25] = t8;
  } else {
    t8 = $[25];
  }
  return t8;
}
function _temp3(img) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center border rounded-lg overflow-hidden bg-muted/30 p-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img.dataUrl, alt: LABEL_MAP[img.key] ?? img.key, className: "block max-h-16 object-contain" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium mt-1", children: LABEL_MAP[img.key] ?? img.key })
  ] }, img.key);
}
function _temp2(i_0) {
  return i_0.key !== "hero";
}
function _temp$1(i) {
  return i.key === "hero";
}
function DevPanel() {
  const $ = compilerRuntimeExports.c(66);
  const {
    config,
    updateConfig,
    gameState,
    croppedImages,
    aiModelsLoaded,
    setDevMode
  } = useGameInteractionStore();
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold", children: "开发者模式" });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  if ($[1] !== setDevMode) {
    t1 = () => setDevMode(false);
    $[1] = setDevMode;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  let t2;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" });
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== t1) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
      t0,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", onClick: t1, children: t2 })
    ] });
    $[4] = t1;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  let t4;
  if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "识别参数" }) });
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "帧率 (FPS)" });
    $[7] = t5;
  } else {
    t5 = $[7];
  }
  let t6;
  if ($[8] !== config.fps) {
    t6 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      t5,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: config.fps })
    ] });
    $[8] = config.fps;
    $[9] = t6;
  } else {
    t6 = $[9];
  }
  let t7;
  if ($[10] !== config.fps) {
    t7 = [config.fps];
    $[10] = config.fps;
    $[11] = t7;
  } else {
    t7 = $[11];
  }
  let t8;
  if ($[12] !== updateConfig) {
    t8 = (t92) => {
      const [fps] = t92;
      return updateConfig({
        fps
      });
    };
    $[12] = updateConfig;
    $[13] = t8;
  } else {
    t8 = $[13];
  }
  let t9;
  if ($[14] !== t7 || $[15] !== t8) {
    t9 = /* @__PURE__ */ jsxRuntimeExports.jsx(Slider, { value: t7, onValueChange: t8, min: 5, max: 30, step: 5 });
    $[14] = t7;
    $[15] = t8;
    $[16] = t9;
  } else {
    t9 = $[16];
  }
  let t10;
  if ($[17] !== t6 || $[18] !== t9) {
    t10 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      t6,
      t9
    ] });
    $[17] = t6;
    $[18] = t9;
    $[19] = t10;
  } else {
    t10 = $[19];
  }
  let t11;
  if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
    t11 = /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {});
    $[20] = t11;
  } else {
    t11 = $[20];
  }
  let t12;
  if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
    t12 = /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "启用 AI 识别" });
    $[21] = t12;
  } else {
    t12 = $[21];
  }
  let t13;
  if ($[22] !== updateConfig) {
    t13 = (enableAI) => updateConfig({
      enableAI
    });
    $[22] = updateConfig;
    $[23] = t13;
  } else {
    t13 = $[23];
  }
  let t14;
  if ($[24] !== config.enableAI || $[25] !== t13) {
    t14 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      t12,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: config.enableAI, onCheckedChange: t13 })
    ] });
    $[24] = config.enableAI;
    $[25] = t13;
    $[26] = t14;
  } else {
    t14 = $[26];
  }
  let t15;
  if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
    t15 = /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "启用 OCR" });
    $[27] = t15;
  } else {
    t15 = $[27];
  }
  let t16;
  if ($[28] !== updateConfig) {
    t16 = (enableOCR) => updateConfig({
      enableOCR
    });
    $[28] = updateConfig;
    $[29] = t16;
  } else {
    t16 = $[29];
  }
  let t17;
  if ($[30] !== config.enableOCR || $[31] !== t16) {
    t17 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      t15,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: config.enableOCR, onCheckedChange: t16 })
    ] });
    $[30] = config.enableOCR;
    $[31] = t16;
    $[32] = t17;
  } else {
    t17 = $[32];
  }
  let t18;
  if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
    t18 = /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "显示裁剪图像" });
    $[33] = t18;
  } else {
    t18 = $[33];
  }
  let t19;
  if ($[34] !== updateConfig) {
    t19 = (showCroppedImages) => {
      updateConfig({
        showCroppedImages
      });
      window.valorantRecognition?.updateConfig({
        showCroppedImages
      });
    };
    $[34] = updateConfig;
    $[35] = t19;
  } else {
    t19 = $[35];
  }
  let t20;
  if ($[36] !== config.showCroppedImages || $[37] !== t19) {
    t20 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      t18,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: config.showCroppedImages, onCheckedChange: t19 })
    ] });
    $[36] = config.showCroppedImages;
    $[37] = t19;
    $[38] = t20;
  } else {
    t20 = $[38];
  }
  let t21;
  if ($[39] !== aiModelsLoaded) {
    t21 = aiModelsLoaded.join(", ") || "—";
    $[39] = aiModelsLoaded;
    $[40] = t21;
  } else {
    t21 = $[40];
  }
  let t22;
  if ($[41] !== t21) {
    t22 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
      "已加载模型: ",
      t21
    ] });
    $[41] = t21;
    $[42] = t22;
  } else {
    t22 = $[42];
  }
  let t23;
  if ($[43] !== t10 || $[44] !== t14 || $[45] !== t17 || $[46] !== t20 || $[47] !== t22) {
    t23 = /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-4", children: [
      t4,
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
        t10,
        t11,
        t14,
        t17,
        t20,
        t22
      ] })
    ] });
    $[43] = t10;
    $[44] = t14;
    $[45] = t17;
    $[46] = t20;
    $[47] = t22;
    $[48] = t23;
  } else {
    t23 = $[48];
  }
  let t24;
  if ($[49] !== gameState) {
    t24 = /* @__PURE__ */ jsxRuntimeExports.jsx(GameStatusPanel, { gameState });
    $[49] = gameState;
    $[50] = t24;
  } else {
    t24 = $[50];
  }
  let t25;
  if ($[51] !== gameState?.abilities) {
    t25 = gameState?.abilities ?? [];
    $[51] = gameState?.abilities;
    $[52] = t25;
  } else {
    t25 = $[52];
  }
  let t26;
  if ($[53] !== t25) {
    t26 = /* @__PURE__ */ jsxRuntimeExports.jsx(AbilityDisplay, { abilities: t25 });
    $[53] = t25;
    $[54] = t26;
  } else {
    t26 = $[54];
  }
  let t27;
  if ($[55] !== config.showCroppedImages || $[56] !== croppedImages) {
    t27 = config.showCroppedImages && /* @__PURE__ */ jsxRuntimeExports.jsx(CroppedImagesPanel, { images: croppedImages });
    $[55] = config.showCroppedImages;
    $[56] = croppedImages;
    $[57] = t27;
  } else {
    t27 = $[57];
  }
  let t28;
  if ($[58] !== t24 || $[59] !== t26 || $[60] !== t27) {
    t28 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      t24,
      t26,
      t27
    ] });
    $[58] = t24;
    $[59] = t26;
    $[60] = t27;
    $[61] = t28;
  } else {
    t28 = $[61];
  }
  let t29;
  if ($[62] !== t23 || $[63] !== t28 || $[64] !== t3) {
    t29 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-y-0 right-0 z-40 w-[420px] overflow-auto border-l bg-background p-4 shadow-2xl", children: [
      t3,
      t23,
      t28
    ] });
    $[62] = t23;
    $[63] = t28;
    $[64] = t3;
    $[65] = t29;
  } else {
    t29 = $[65];
  }
  return t29;
}
function hasValorantRecognition() {
  return typeof window !== "undefined" && !!window.valorantRecognition;
}
class ValorantRecognitionClient {
  frameCallback = null;
  abilityReleasedCallback = null;
  heroDetectedCallback = null;
  lowHealthCallback = null;
  killCallback = null;
  damageCallback = null;
  winCallback = null;
  defeatCallback = null;
  ambientCallback = null;
  frameConfigWarningCallback = null;
  roiCroppedCallback = null;
  /** 运行期致命错误（worker 崩溃 / 采集流丢失且恢复失败），由上层停止管线并提示 */
  runtimeErrorCallback = null;
  unsubscribers = [];
  running = false;
  loadedModels = [];
  lastOptions = {};
  /** 渲染层取帧采集器（getDisplayMedia + MediaStreamTrackProcessor），裁 ROI 后经 IPC 投递给 worker */
  capturer = null;
  async initialize(_adapterName, options = {}) {
    this.lastOptions = options;
  }
  isAIEnabled() {
    return this.loadedModels.length > 0;
  }
  getLoadedAIModels() {
    return [...this.loadedModels];
  }
  onFrameProcessed(callback) {
    this.frameCallback = callback;
  }
  onAbilityReleased(callback) {
    this.abilityReleasedCallback = callback;
  }
  onHeroDetected(callback) {
    this.heroDetectedCallback = callback;
  }
  onLowHealth(callback) {
    this.lowHealthCallback = callback;
  }
  onKillDetected(callback) {
    this.killCallback = callback;
  }
  onDamage(cb) {
    this.damageCallback = cb;
  }
  onWin(cb) {
    this.winCallback = cb;
  }
  onDefeat(cb) {
    this.defeatCallback = cb;
  }
  onAmbientFrame(cb) {
    this.ambientCallback = cb;
  }
  /** 画面配置告警（黑边区持续不近黑：窗口化/「填充」拉伸/选错屏），状态翻转时回调 */
  onFrameConfigWarning(cb) {
    this.frameConfigWarningCallback = cb;
  }
  onRoiCropped(callback) {
    this.roiCroppedCallback = callback;
  }
  /** 运行期致命错误（启动成功之后的中断）：worker 异常退出、屏幕流丢失且自动恢复失败 */
  onRuntimeError(callback) {
    this.runtimeErrorCallback = callback;
  }
  setManualHero(hero) {
    if (!hasValorantRecognition()) return;
    void window.valorantRecognition.setHero(hero?.id ?? null);
  }
  setAutoDetectHero(enabled) {
    if (!hasValorantRecognition()) return;
    void window.valorantRecognition.setAutoDetect(enabled);
  }
  setLowHealthThreshold(percent) {
    if (!hasValorantRecognition()) return;
    void window.valorantRecognition.setLowHealthThreshold(percent);
  }
  setFrameRate(fps) {
    this.lastOptions = {
      ...this.lastOptions,
      fps
    };
    this.capturer?.updateConfig({
      frameRate: fps
    });
  }
  configureScreenCapture(config) {
    this.setFrameRate(config.frameRate ?? 15);
  }
  getFrameRate() {
    return this.lastOptions.fps ?? 15;
  }
  bindIpcListeners() {
    this.clearIpcListeners();
    if (!hasValorantRecognition()) return;
    const api = window.valorantRecognition;
    this.unsubscribers.push(api.onStateUpdate((state) => {
      this.frameCallback?.(state);
    }));
    this.unsubscribers.push(api.onAbilityReleased(({
      heroId,
      key
    }) => {
      if (!this.abilityReleasedCallback) return;
      const hero = findValorantHero(heroId);
      if (hero) this.abilityReleasedCallback(hero, key);
    }));
    this.unsubscribers.push(api.onHeroDetected((hero) => {
      this.heroDetectedCallback?.(hero);
    }));
    this.unsubscribers.push(api.onLowHealth((percent) => {
      this.lowHealthCallback?.(percent);
    }));
    this.unsubscribers.push(api.onKill(() => {
      this.killCallback?.();
    }));
    this.unsubscribers.push(api.onDamage((level) => this.damageCallback?.(level)));
    this.unsubscribers.push(api.onWin(() => this.winCallback?.()));
    this.unsubscribers.push(api.onDefeat(() => this.defeatCallback?.()));
    this.unsubscribers.push(api.onRoiCropped((images) => {
      this.roiCroppedCallback?.(images);
    }));
    this.unsubscribers.push(api.onError((message) => {
      this.runtimeErrorCallback?.(message);
    }));
  }
  clearIpcListeners() {
    for (const unsub of this.unsubscribers) {
      unsub();
    }
    this.unsubscribers = [];
  }
  async start() {
    if (!hasValorantRecognition()) {
      throw new Error("valorantRecognition API 不可用");
    }
    this.bindIpcListeners();
    const opts = this.lastOptions;
    const result = await window.valorantRecognition.start({
      enableAI: opts.enableAI ?? true,
      enableOCR: opts.enableOCR ?? true,
      enableTemplateMatch: opts.enableTemplateMatch ?? true,
      lowHealthThreshold: opts.lowHealthThreshold,
      showCroppedImages: opts.showCroppedImages,
      fps: opts.fps ?? 15
    });
    if (!result.success) {
      throw new Error(result.error ?? "启动识别失败");
    }
    this.loadedModels = result.loadedModels ?? [];
    this.capturer = new ScreenCapturerService({
      sampleWidth: result.captureWidth ?? 1920,
      sampleHeight: result.captureHeight ?? 1080,
      frameRate: opts.fps ?? 15,
      preferDisplayMedia: true,
      captureRects: result.captureRects ?? [],
      ambientSize: {
        width: 192,
        height: 64
      }
    });
    this.capturer.onRois((frame) => {
      window.valorantRecognition.sendRois(frame);
    });
    this.capturer.onAmbientFrame((frame) => this.ambientCallback?.(frame));
    this.capturer.onFrameConfigWarning((active) => this.frameConfigWarningCallback?.(active));
    this.capturer.onFatal((reason) => this.runtimeErrorCallback?.(reason));
    await this.capturer.start();
    this.running = true;
  }
  async stop() {
    if (this.capturer) {
      await this.capturer.stop();
      this.capturer = null;
    }
    if (hasValorantRecognition() && this.running) {
      await window.valorantRecognition.stop();
    }
    this.running = false;
  }
  async dispose() {
    await this.stop();
    this.clearIpcListeners();
    this.frameCallback = null;
    this.abilityReleasedCallback = null;
    this.heroDetectedCallback = null;
    this.lowHealthCallback = null;
    this.killCallback = null;
    this.damageCallback = null;
    this.winCallback = null;
    this.defeatCallback = null;
    this.ambientCallback = null;
    this.frameConfigWarningCallback = null;
    this.roiCroppedCallback = null;
    this.runtimeErrorCallback = null;
    this.loadedModels = [];
  }
  isActive() {
    return this.running;
  }
}
function WorkerWrapper(options) {
  return new Worker("" + new URL("gameLightingWorker-DLRGlbpC.js", import.meta.url).href, {
    name: options?.name
  });
}
async function buildDeviceKeyMap(actualDeviceId, deviceInfo) {
  const layout = keyboardLayoutMap[deviceInfo.productId];
  if (!layout) throw new Error(`无设备布局 productId=${deviceInfo.productId}`);
  const {
    deviceManager: deviceManager2
  } = await __vitePreload(async () => {
    const {
      deviceManager: deviceManager3
    } = await import("./index-CMbUujkZ.js").then((n) => n.fo);
    return {
      deviceManager: deviceManager3
    };
  }, true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url);
  const device = deviceManager2.getDevice(actualDeviceId);
  if (!device) throw new Error(`设备实例未找到 ${actualDeviceId}`);
  const getDeviceInfoData = useDeviceInfoStore.getState().getDeviceInfoData;
  const getLightRectData = useLightStore.getState().getLightRectData;
  let lightRectData = [];
  let deviceType = 4;
  const readMatrix = async () => {
    const info = await getDeviceInfoData(device);
    const snapshot = info != null ? {
      deviceType: info.deviceType,
      key_rect_size: info.key_rect_size,
      fourLightDataLength: info.fourLightDataLength
    } : void 0;
    if (window.lightEngine) await window.lightEngine.pauseDeviceSync(actualDeviceId);
    try {
      lightRectData = await getLightRectData(device, snapshot, actualDeviceId);
    } finally {
      if (window.lightEngine) await window.lightEngine.resumeDeviceSync(actualDeviceId);
    }
    if (info) deviceType = info.deviceType;
  };
  await withHighPriorityBatch(actualDeviceId, readMatrix);
  const raw = [];
  const isTwoByte = deviceType === 4 || deviceType === 5;
  const layoutRows = layout.rows;
  if (isTwoByte) {
    let currentOffset = 0;
    for (const row of layoutRows) {
      for (const item of row) {
        if (!item || !item.key) continue;
        const foundKeyIndex = currentOffset;
        currentOffset += 2;
        if (foundKeyIndex + 1 >= lightRectData.length) continue;
        const lowByte = lightRectData[foundKeyIndex];
        const highByte = lightRectData[foundKeyIndex + 1];
        const val = highLowToDecimal(highByte, lowByte);
        if (item.x === void 0 || item.y === void 0) continue;
        raw.push({
          rgbIndex: val * 3,
          x: item.x,
          y: item.y
        });
      }
    }
  } else {
    let currentOffset = 0;
    for (const row of layoutRows) {
      for (const item of row) {
        if (!item || !item.key) continue;
        currentOffset++;
        if (item.x === void 0 || item.y === void 0) continue;
        raw.push({
          rgbIndex: currentOffset * 3,
          x: item.x,
          y: item.y
        });
      }
    }
  }
  if (raw.length === 0) throw new Error("布局无有效按键");
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  for (const k of raw) {
    if (k.x < minX) minX = k.x;
    if (k.x > maxX) maxX = k.x;
    if (k.y < minY) minY = k.y;
    if (k.y > maxY) maxY = k.y;
  }
  const spanX = maxX - minX || 1;
  const spanY = maxY - minY || 1;
  let maxIndex = 0;
  const keys = raw.map((k) => {
    if (k.rgbIndex + 3 > maxIndex) maxIndex = k.rgbIndex + 3;
    return {
      rgbIndex: k.rgbIndex,
      u: (k.x - minX) / spanX,
      v: (k.y - minY) / spanY
    };
  });
  return {
    keys,
    maxIndex
  };
}
function useGameLighting() {
  const $ = compilerRuntimeExports.c(13);
  const workerRef = reactExports.useRef(null);
  const deviceIdRef = reactExports.useRef(void 0);
  const maxIndexRef = reactExports.useRef(0);
  const lowHealthActiveRef = reactExports.useRef(false);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = (msg, transfer) => {
      workerRef.current?.postMessage(msg, transfer ?? []);
    };
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  const post = t0;
  const preloadSettlementGifs = _temp;
  let t1;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = () => {
      if (workerRef.current) {
        return;
      }
      const worker_0 = new WorkerWrapper();
      workerRef.current = worker_0;
      preloadSettlementGifs(worker_0);
      worker_0.onmessage = (e) => {
        if (e.data.type === "light" && deviceIdRef.current && window.lightEngine) {
          window.lightEngine.syncLightData(e.data.light, deviceIdRef.current);
        }
      };
    };
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const start = t1;
  let t2;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = () => {
      const worker_1 = workerRef.current;
      if (!worker_1) {
        return;
      }
      if (deviceIdRef.current && maxIndexRef.current > 0 && window.lightEngine) {
        window.lightEngine.syncLightData(new Array(maxIndexRef.current).fill(0), deviceIdRef.current);
      }
      worker_1.postMessage({
        type: "stop"
      });
      worker_1.terminate();
      workerRef.current = null;
      deviceIdRef.current = void 0;
      maxIndexRef.current = 0;
      lowHealthActiveRef.current = false;
    };
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  const stop = t2;
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = async (actualDeviceId, deviceInfo) => {
      deviceIdRef.current = actualDeviceId;
      try {
        const keyMap = await buildDeviceKeyMap(actualDeviceId, deviceInfo);
        maxIndexRef.current = keyMap.maxIndex;
        post({
          type: "init",
          keyMap
        });
      } catch (t42) {
        const err = t42;
        console.warn("[GameLighting] 按键坐标提取失败，灯效不可用:", err);
      }
    };
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  const attachDevice = t3;
  let t4;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = (frame) => {
      const buffer = frame.data.buffer;
      post({
        type: "ambient",
        buffer,
        width: frame.width,
        height: frame.height
      }, [buffer]);
    };
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  const onAmbientFrame = t4;
  let t5;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = (heroId, key) => {
      const path_0 = abilityGifUrl(heroId, key);
      if (!path_0) {
        return;
      }
      post({
        type: "play",
        kind: "ability",
        url: resolvePublicAssetUrl(path_0)
      });
    };
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  const playAbility = t5;
  let t6;
  if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
    t6 = () => post({
      type: "play",
      kind: "kill",
      url: resolvePublicAssetUrl(KILL_GIF_URL)
    });
    $[6] = t6;
  } else {
    t6 = $[6];
  }
  const playKill = t6;
  let t7;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t7 = () => post({
      type: "play",
      kind: "win",
      url: resolvePublicAssetUrl(WIN_GIF_URL)
    });
    $[7] = t7;
  } else {
    t7 = $[7];
  }
  const playWin = t7;
  let t8;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t8 = () => post({
      type: "play",
      kind: "defeat",
      url: resolvePublicAssetUrl(DEFEAT_GIF_URL)
    });
    $[8] = t8;
  } else {
    t8 = $[8];
  }
  const playDefeat = t8;
  let t9;
  if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
    t9 = (active) => {
      if (lowHealthActiveRef.current === active) {
        return;
      }
      lowHealthActiveRef.current = active;
      post({
        type: "lowHealth",
        active,
        url: resolvePublicAssetUrl(LOW_HEALTH_GIF_URL)
      });
    };
    $[9] = t9;
  } else {
    t9 = $[9];
  }
  const setLowHealthActive = t9;
  let t10;
  let t11;
  if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
    t10 = () => () => stop();
    t11 = [stop];
    $[10] = t10;
    $[11] = t11;
  } else {
    t10 = $[10];
    t11 = $[11];
  }
  reactExports.useEffect(t10, t11);
  let t12;
  if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
    t12 = {
      start,
      stop,
      attachDevice,
      onAmbientFrame,
      playAbility,
      playKill,
      playWin,
      playDefeat,
      setLowHealthActive
    };
    $[12] = t12;
  } else {
    t12 = $[12];
  }
  return t12;
}
function _temp(worker) {
  for (const path of [WIN_GIF_URL, DEFEAT_GIF_URL]) {
    worker.postMessage({
      type: "preload",
      url: resolvePublicAssetUrl(path)
    });
  }
}
const LOW_HEALTH_THRESHOLD = 30;
function isMacPlatform() {
  if (typeof navigator === "undefined") return false;
  const p = navigator.platform ?? "";
  const ua = navigator.userAgent ?? "";
  return /mac/i.test(p) || /mac os x/i.test(ua);
}
let pipeline = null;
function toFriendlyStartError(error) {
  const raw = error instanceof Error ? error.message : String(error);
  const low = raw.toLowerCase();
  if (low.includes("permission") || low.includes("notallowed") || low.includes("denied") || low.includes("getdisplaymedia")) {
    return isMacPlatform() ? "无法捕获屏幕画面，请重试；若持续失败，请在「系统设置 → 隐私与安全性 → 屏幕录制」中允许本应用后重启应用" : "无法捕获屏幕画面，请重试；若持续失败，请重启应用";
  }
  if (low.includes("onnx") || low.includes("model") || low.includes("load")) {
    return "识别模型加载失败，请重试；若反复失败，请重启应用或更新到最新版本";
  }
  if (low.includes("worker exited") || low.includes("cannot find module") || low.includes("recognition worker init timed out")) {
    return "识别引擎启动失败，请重新安装或更新到最新版本后重试";
  }
  return "启动识别失败，请重试；若持续失败，请确认游戏正在运行，并重新连接键盘";
}
function toFriendlyRuntimeError(reason) {
  if (reason.includes("屏幕画面已丢失")) {
    return "屏幕画面已丢失，灯光联动已停止。请确认游戏与显示器正常后重新开始联动";
  }
  return "灯光联动意外中断，已停止。请重新开始联动";
}
async function registerLightEngineDevice(deviceId) {
  if (!window.lightEngine) return;
  const hidDevice = deviceManager.getDevice(deviceId);
  const deviceInfo = hidDevice?.getDeviceInfo();
  const {
    deviceType: dt
  } = useDeviceInfoStore.getState().deviceInfoData;
  const dataLength = dt === 4 || dt === 5 ? 63 : 31;
  await window.lightEngine.loadScene({
    mode: "game-sync",
    canvasWidth: 430,
    canvasHeight: 275
  });
  await window.lightEngine.addDevice({
    deviceId,
    path: deviceInfo?.path ?? "",
    dataLength,
    maxIndex: 0,
    keyPositions: []
  });
}
function useGameSync() {
  const gameLighting = useGameLighting();
  const {
    setRecognitionStatus,
    setRecognitionError,
    setInitStage,
    setRunningGameId,
    setLiveStatus,
    setGameState,
    setCroppedImages,
    setAIModelsLoaded,
    setFrameConfigWarning,
    getEffectFlags,
    config
  } = useGameInteractionStore();
  const stopRef = reactExports.useRef(async () => {
  });
  const start = reactExports.useCallback(async (gameId) => {
    const connectedDeviceId = useActiveDeviceStore.getState().connectedDeviceId;
    if (!connectedDeviceId) {
      setRecognitionError("请先连接键盘，再开始联动");
      return;
    }
    const status = useGameInteractionStore.getState().recognitionStatus;
    if (status === "initializing" || pipeline) {
      return;
    }
    const flags = getEffectFlags(gameId);
    setRecognitionError(null);
    setFrameConfigWarning(false);
    setRecognitionStatus("initializing");
    setInitStage("正在准备屏幕采集…");
    const aborted = () => localPipeline !== null && pipeline !== localPipeline;
    let localPipeline = null;
    const disposeQuietly = async () => {
      try {
        await localPipeline?.dispose();
      } catch {
      }
    };
    try {
      const targetDisplayId = useGameInteractionStore.getState().targetDisplayId;
      await window.screenCapture?.setTargetDisplay(targetDisplayId);
      setInitStage("正在加载识别模型…");
      localPipeline = new ValorantRecognitionClient();
      pipeline = localPipeline;
      await localPipeline.initialize("Valorant", {
        enableAI: config.enableAI,
        enableOCR: config.enableOCR,
        enableTemplateMatch: config.enableTemplateMatch,
        preferAI: true,
        fps: config.fps,
        showCroppedImages: config.showCroppedImages
      });
      if (aborted()) {
        await disposeQuietly();
        setInitStage(null);
        return;
      }
      let lastHeroLive = "等待游戏画面…";
      let frameWarnActive = false;
      const syncLive = () => {
        setLiveStatus(frameWarnActive ? "画面异常 · 请检查全屏与所在屏" : lastHeroLive);
      };
      pipeline.onFrameProcessed((state) => {
        setGameState(state);
        lastHeroLive = state.agentSelect ? "选人界面 · 已暂停对局识别" : state.hero ? `已识别 · ${state.hero.nameZh}` : "等待游戏画面…";
        syncLive();
        if (flags.lowHealth) {
          const isLow = !state.agentSelect && state.hero != null && state.healthPercent !== void 0 && state.healthPercent > 0 && state.healthPercent <= LOW_HEALTH_THRESHOLD;
          gameLighting.setLowHealthActive(isLow);
        }
      });
      pipeline.onRoiCropped((images) => setCroppedImages(images));
      pipeline.onFrameConfigWarning((active) => {
        setFrameConfigWarning(active);
        frameWarnActive = active;
        syncLive();
      });
      pipeline.onRuntimeError((message) => {
        console.error("[gameSync] 识别运行中断:", message);
        void stopRef.current().then(() => {
          setRecognitionError(toFriendlyRuntimeError(message));
        });
      });
      pipeline.setManualHero(null);
      pipeline.setAutoDetectHero(true);
      await registerLightEngineDevice(connectedDeviceId);
      const hidDevice = deviceManager.getDevice(connectedDeviceId);
      const deviceInfo = hidDevice?.getDeviceInfo();
      if (deviceInfo) {
        gameLighting.start();
        await gameLighting.attachDevice(connectedDeviceId, deviceInfo);
        pipeline.onAmbientFrame(gameLighting.onAmbientFrame);
      }
      if (flags.ability) {
        pipeline.onAbilityReleased((hero, key) => gameLighting.playAbility(hero.id, key));
      }
      if (flags.kill) {
        pipeline.onKillDetected(() => gameLighting.playKill());
      }
      if (flags.win) {
        pipeline.onWin(() => gameLighting.playWin());
      }
      if (flags.defeat) {
        pipeline.onDefeat(() => gameLighting.playDefeat());
      }
      setInitStage("正在建立屏幕采集…");
      await localPipeline.start();
      if (aborted()) {
        await disposeQuietly();
        setInitStage(null);
        return;
      }
      setAIModelsLoaded(localPipeline.getLoadedAIModels());
      setInitStage(null);
      setRecognitionStatus("running");
      setRunningGameId(gameId);
      setLiveStatus("等待游戏画面…");
    } catch (error) {
      if (aborted()) {
        await disposeQuietly();
        setInitStage(null);
        return;
      }
      console.error("[gameSync] 启动识别失败:", error);
      setInitStage(null);
      if (pipeline) {
        try {
          await pipeline.dispose();
        } catch {
        }
        pipeline = null;
      }
      setRecognitionError(toFriendlyStartError(error));
    }
  }, [config, gameLighting, getEffectFlags, setAIModelsLoaded, setCroppedImages, setFrameConfigWarning, setGameState, setInitStage, setLiveStatus, setRecognitionError, setRecognitionStatus, setRunningGameId]);
  const stop = reactExports.useCallback(async () => {
    if (pipeline) {
      pipeline.onAbilityReleased(null);
      pipeline.onKillDetected(null);
      pipeline.onWin(null);
      pipeline.onDefeat(null);
      pipeline.onRoiCropped(null);
      pipeline.onRuntimeError(null);
      pipeline.setManualHero(null);
      await pipeline.stop();
      await pipeline.dispose();
      pipeline = null;
    }
    gameLighting.stop();
    setRecognitionStatus("idle");
    setInitStage(null);
    setRunningGameId(null);
    setLiveStatus(null);
    setGameState(null);
    setCroppedImages([]);
    setFrameConfigWarning(false);
  }, [gameLighting, setCroppedImages, setFrameConfigWarning, setGameState, setInitStage, setLiveStatus, setRecognitionStatus, setRunningGameId]);
  stopRef.current = stop;
  reactExports.useEffect(() => registerGameStopper(() => stopRef.current()), []);
  return {
    start,
    stop
  };
}
function GameInteractionPage() {
  const modules = getGameModules();
  const {
    start,
    stop
  } = useGameSync();
  const {
    runningGameId,
    liveStatus,
    effectFlags,
    setEffect,
    devMode,
    toggleDevMode,
    recognitionStatus,
    recognitionError,
    setRecognitionError,
    initStage,
    frameConfigWarning
  } = useGameInteractionStore();
  const connectedDeviceId = useActiveDeviceStore((s) => s.connectedDeviceId);
  const [openGameId, setOpenGameId] = reactExports.useState(null);
  const [conflictState, setConflictState] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const isDevShortcut = (e) => {
      const isD = e.code === "KeyD" || e.key === "D" || e.key === "d";
      if (!isD) return false;
      const ctrl = e.ctrlKey || e.metaKey;
      if (!ctrl) return false;
      return e.shiftKey && !e.altKey || e.altKey && !e.shiftKey;
    };
    const hasDesktopIpc = "electronWindow" in window;
    const unsubIpc = hasDesktopIpc ? window.electronWindow.onToggleGameDevMode(() => toggleDevMode()) : void 0;
    const onKey = (e) => {
      if (hasDesktopIpc) return;
      if (!isDevShortcut(e)) return;
      e.preventDefault();
      toggleDevMode();
    };
    window.addEventListener("keydown", onKey, true);
    return () => {
      window.removeEventListener("keydown", onKey, true);
      unsubIpc?.();
    };
  }, [toggleDevMode]);
  reactExports.useEffect(() => {
    return () => {
      void stop();
    };
  }, []);
  reactExports.useEffect(() => {
    if (runningGameId && !connectedDeviceId) {
      void stop();
    }
  }, [runningGameId, connectedDeviceId, stop]);
  const handleOpen = reactExports.useCallback((gameId) => {
    setOpenGameId(gameId);
  }, []);
  const handleClose = reactExports.useCallback(() => {
    setOpenGameId(null);
  }, []);
  const handleStart = reactExports.useCallback(async (gameId) => {
    await start(gameId);
    if (useGameInteractionStore.getState().recognitionStatus === "running") {
      setOpenGameId(null);
    }
  }, [start]);
  const handleStartRequest = reactExports.useCallback(async (gameId) => {
    const conflicts = getActiveLightingConflicts("game");
    if (conflicts.length > 0) {
      setConflictState({
        gameId,
        conflicts
      });
      return;
    }
    await handleStart(gameId);
  }, [handleStart]);
  const handleConfirmConflict = reactExports.useCallback(async () => {
    if (!conflictState) return;
    const {
      gameId,
      conflicts
    } = conflictState;
    setConflictState(null);
    await stopLightingModes(conflicts);
    await handleStart(gameId);
  }, [conflictState, handleStart]);
  const openModule = openGameId ? getGameModule(openGameId) : void 0;
  const conflictModule = conflictState ? getGameModule(conflictState.gameId) : void 0;
  const runningModule = runningGameId ? getGameModule(runningGameId) : void 0;
  if (!connectedDeviceId) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(NoDeviceView, {});
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full overflow-auto p-9 text-gi-txt", style: {
    background: "var(--gi-page-bg)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { role: "status", "aria-live": "polite", className: "sr-only", children: runningModule ? `${runningModule.def.nameZh} 灯光联动进行中` : recognitionStatus === "initializing" ? initStage ?? "正在启动灯光联动" : recognitionStatus === "error" ? "灯光联动出现错误" : "灯光联动已停止" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "relative z-10 mb-7 flex animate-gi-rise items-start justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold leading-none tracking-[0.02em] text-gi-txt", children: "游戏交互" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-gi-mut", children: "屏幕识别驱动的实时灯光联动" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DisplayPicker, {})
    ] }),
    recognitionStatus === "error" && recognitionError && !openGameId && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { role: "alert", className: "relative z-10 mb-5 flex items-start gap-2.5 border px-4 py-3 text-sm", style: {
      color: "var(--color-gi-danger)",
      borderColor: "color-mix(in srgb, var(--color-gi-danger) 45%, transparent)",
      background: "color-mix(in srgb, var(--color-gi-danger) 10%, transparent)",
      clipPath: "polygon(0 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { "aria-hidden": true, className: "mt-0.5 h-4 w-4 flex-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 flex-1 leading-relaxed", children: recognitionError }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", "aria-label": "关闭错误提示", className: "-m-1 flex-none cursor-pointer p-1 opacity-70 transition-opacity duration-150 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gi-steel", onClick: () => setRecognitionError(null), children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { "aria-hidden": true, className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gi-gallery grid grid-cols-[repeat(auto-fill,minmax(200px,280px))] justify-start gap-5", children: [
      modules.map((mod) => {
        const CardComp = mod.Card ?? GameCard;
        const running = runningGameId === mod.def.id;
        const flags = effectFlags[mod.def.id] ?? {};
        const enabledLabels = running ? mod.def.effects.filter((e) => flags[e.id] ?? e.defaultEnabled).map((e) => e.label) : void 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(CardComp, { def: mod.def, isRunning: running, liveStatus: running ? liveStatus ?? void 0 : void 0, enabledEffectLabels: enabledLabels, onOpen: () => handleOpen(mod.def.id), onStop: () => void stop() }, mod.def.id);
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ComingSoonStrip, {})
    ] }),
    frameConfigWarning && runningGameId && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { role: "alert", className: "pointer-events-none absolute inset-x-0 bottom-6 z-10 flex justify-center px-9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-auto max-w-md border px-4 py-3 text-sm shadow-lg", style: {
      color: "var(--color-gi-warn)",
      borderColor: "color-mix(in srgb, var(--color-gi-warn) 50%, transparent)",
      background: "color-mix(in srgb, var(--color-gi-warn) 10%, var(--color-gi-surface))",
      clipPath: "polygon(0 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { "aria-hidden": true, className: "h-4 w-4 flex-none" }),
        "未检测到全屏 16:9 画面，识别可能失效"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-2 space-y-1 pl-6 leading-relaxed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "list-disc", children: "游戏是否已切到全屏或无边框全屏" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "list-disc", children: "上方「游戏所在屏」是否选中了游戏运行的显示器" })
      ] })
    ] }) }),
    openModule && (() => {
      const DialogComp = openModule.SettingsDialog ?? GameSettingsDialog;
      const ExtraComp = openModule.SettingsExtra;
      const enabled = effectFlags[openModule.def.id] ?? {};
      return /* @__PURE__ */ jsxRuntimeExports.jsx(DialogComp, { def: openModule.def, open: !!openGameId, enabledEffects: enabled, deviceReady: !!connectedDeviceId, isRunning: runningGameId === openModule.def.id, busy: recognitionStatus === "initializing", busyStage: initStage, errorMessage: recognitionStatus === "error" ? recognitionError : null, onToggleEffect: (effectId, on) => setEffect(openModule.def.id, effectId, on), onStart: () => void handleStartRequest(openModule.def.id), onClose: handleClose, onAbort: () => void stop(), extraAfterEffectId: openModule.settingsExtraAfterEffectId, extra: ExtraComp ? /* @__PURE__ */ jsxRuntimeExports.jsx(ExtraComp, { def: openModule.def, accent: openModule.def.accent, enabledEffects: enabled }) : void 0 });
    })(),
    devMode && /* @__PURE__ */ jsxRuntimeExports.jsx(DevPanel, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: !!conflictState, onOpenChange: (o) => !o && setConflictState(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { className: "gap-0 rounded-none border p-0 ring-0 text-gi-txt sm:max-w-md", style: {
      background: "linear-gradient(180deg, var(--color-gi-surface), var(--color-gi-panel))",
      borderColor: "var(--color-gi-line)",
      clipPath: "polygon(0 0,100% 0,100% calc(100% - 14px),calc(100% - 14px) 100%,0 100%)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { className: "place-items-start gap-1.5 p-[18px] text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { className: "text-base font-bold", children: "切换到游戏交互灯效" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { className: "text-sm leading-relaxed text-gi-mut", children: conflictState ? `当前正在运行${conflictState.conflicts.map((c) => MODE_LABELS[c]).join(" / ")}，开启游戏交互将中断它。是否继续？` : null })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { className: "mx-0 mb-0 rounded-none border-t bg-transparent p-[18px]", style: {
        borderColor: "var(--color-gi-line-soft)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(GiButton, { variant: "ghost", autoFocus: true, onClick: () => setConflictState(null), children: "取消" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(GiButton, { accent: conflictModule?.def.accent, onClick: () => void handleConfirmConflict(), children: "确认并开始" })
      ] })
    ] }) })
  ] });
}
export {
  GameInteractionPage as default
};
