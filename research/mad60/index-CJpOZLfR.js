import { r as reactExports, k as compilerRuntimeExports, j as jsxRuntimeExports } from "./vendor-react-CCnVVUMc.js";
import { eS as getActiveDevice, eT as deviceConfigManager, F as cn, a1 as Info, X as TooltipTrigger, Y as TooltipContent, c5 as TooltipProvider, Z as Tooltip, J as Switch, eU as performanceSwitchClassName, c3 as useDeviceConfig, bE as z, N as Check, a8 as X, e2 as Zap, eV as Gauge, c2 as useDevice, cg as useKeyboardDriverSyncStore, c1 as useFunctionalAreaStore, ar as useDebounceFn, aL as useDeviceInfoStore, a2 as toast, eW as SlidersHorizontal } from "./index-CMbUujkZ.js";
import { r as ringDash, d as describeRingArc, A as ArcProgressGradient, R as RING_STROKE_DASHARRAY, M as MouseDriverPageLoading } from "./MouseDriverPageLoading-y3bhliSU.js";
const MOUSE_MODE_FIELD_INDEX = {
  /** USB 回报率：固件 0=8K … 6=125（usb_report_level） */
  usbReportLevel: 13,
  /** 2.4G 回报率：固件 0=8K … 6=125（d24g_report_level） */
  d24gReportLevel: 14,
  /** 按键防抖延迟（key_debounce_time：0:1ms … 5:24ms，默认 0x03） */
  keyDebounceTime: 17,
  /** 移动同步 motion_sync_enable */
  motionSync: 21,
  /** 波纹修正 ripple_enable */
  rippleControl: 22,
  /** 直线修正 angle_snap_enable */
  angleSnap: 23,
  /** Sensor 静默高度：0=0.7mm，1=1mm，2=2mm */
  liftHeight: 24
};
function isCurrentDeviceWireless() {
  const productId = getActiveDevice()?.getDeviceInfo()?.productId;
  if (productId == null) return false;
  return deviceConfigManager.getFeatures(productId)?.is24G === true;
}
const REPORT_RATE_TARGET_OPTIONS = [{
  value: "wired",
  label: "有线"
}, {
  value: "d24g",
  label: "2.4G"
}];
const POLLING_RATE_OPTIONS = [{
  value: 6,
  label: "125Hz",
  shortLabel: "125"
}, {
  value: 5,
  label: "250Hz",
  shortLabel: "250"
}, {
  value: 4,
  label: "500Hz",
  shortLabel: "500"
}, {
  value: 3,
  label: "1000Hz",
  shortLabel: "1K"
}, {
  value: 2,
  label: "2000Hz",
  shortLabel: "2K"
}, {
  value: 1,
  label: "4000Hz",
  shortLabel: "4K"
}, {
  value: 0,
  label: "8000Hz",
  shortLabel: "8K"
}];
const POLLING_RATE_MARK_ANGLES = {
  6: -90,
  5: -45,
  4: 0,
  3: 45,
  2: 90,
  1: 135,
  0: 180
};
const POLLING_RATE_ARC_SPAN = 270;
const LIFT_HEIGHT_OPTIONS = [{
  value: 0,
  label: "低"
}, {
  value: 1,
  label: "中"
}, {
  value: 2,
  label: "高"
}];
const KEY_DEBOUNCE_OPTIONS = [{
  value: 0,
  label: "1ms"
}, {
  value: 1,
  label: "2ms"
}, {
  value: 2,
  label: "4ms"
}, {
  value: 3,
  label: "8ms"
}, {
  value: 4,
  label: "16ms"
}, {
  value: 5,
  label: "24ms"
}];
const WORK_MODE_OPTIONS = [{
  value: 0,
  label: "默认模式",
  accent: false
}, {
  value: 1,
  label: "性能模式",
  accent: false
}, {
  value: 2,
  label: "竞技模式",
  accent: true
}];
const ADVANCED_SETTING_ITEMS = [{
  key: "motionSync",
  title: "移动同步",
  subtitle: "MOTION SYNC",
  description: "采样与报告同步，减少轨迹抖动。",
  defaultOn: true
}, {
  key: "rippleControl",
  title: "波纹修正",
  subtitle: "Ripple Control",
  description: "减少高速移动时的波纹抖动。",
  defaultOn: false
}, {
  key: "angleSnap",
  title: "直线修正",
  subtitle: "Angle Snapping",
  description: "接近水平/垂直移动时拉直轨迹。",
  defaultOn: false
}];
const WORK_MODE_TOOLTIPS = {
  0: "优先续航，不支持 1000Hz 以上回报率。",
  1: reactExports.createElement(reactExports.Fragment, null, "性能与续航平衡，", reactExports.createElement("span", {
    className: "text-destructive"
  }, "较为耗电"), "。不支持 8000Hz。"),
  2: reactExports.createElement(reactExports.Fragment, null, "响应最快、最跟手，", reactExports.createElement("span", {
    className: "text-destructive"
  }, "耗电最高"), "，请关注续航。")
};
const POLLING_RATE_MAX_INDEX = POLLING_RATE_OPTIONS.length - 1;
function getActiveReportRate(settings) {
  return settings.reportRateTarget === "d24g" ? settings.d24gReportRate : settings.usbReportRate;
}
function setActiveReportRate(settings, rate) {
  return settings.reportRateTarget === "d24g" ? {
    ...settings,
    d24gReportRate: rate
  } : {
    ...settings,
    usbReportRate: rate
  };
}
function areMouseModeSettingsEqual(a, b) {
  return a.usbReportRate === b.usbReportRate && a.d24gReportRate === b.d24gReportRate && a.liftHeight === b.liftHeight && a.motionSync === b.motionSync && a.rippleControl === b.rippleControl && a.angleSnap === b.angleSnap && a.keyDebounceTime === b.keyDebounceTime;
}
function readMouseModeSettingsFromFunctionalArea(source) {
  const idx = MOUSE_MODE_FIELD_INDEX;
  const settings = {
    // 默认目标按当前实际连接：2.4G 连接默认展示 2.4G 回报率，否则有线
    reportRateTarget: isCurrentDeviceWireless() ? "d24g" : "wired",
    usbReportRate: source[idx.usbReportLevel],
    d24gReportRate: source[idx.d24gReportLevel],
    liftHeight: source[idx.liftHeight],
    motionSync: source[idx.motionSync] !== 0,
    rippleControl: source[idx.rippleControl] !== 0,
    angleSnap: source[idx.angleSnap] !== 0,
    // 协议无工作模式字段，由当前编辑目标回报率推导
    workMode: 0,
    keyDebounceTime: source[idx.keyDebounceTime]
  };
  const activeRate = getActiveReportRate(settings);
  settings.workMode = getWorkModeForPollingRate(activeRate);
  if (!isPollingRateAllowed(settings.workMode, activeRate)) {
    return {
      ...settings,
      workMode: getWorkModeForPollingRate(activeRate)
    };
  }
  return settings;
}
function writeMouseModeSettingsToFunctionalArea(source, settings) {
  const next = [...source];
  const idx = MOUSE_MODE_FIELD_INDEX;
  next[idx.usbReportLevel] = settings.usbReportRate;
  next[idx.d24gReportLevel] = settings.d24gReportRate;
  next[idx.liftHeight] = settings.liftHeight;
  next[idx.motionSync] = settings.motionSync ? 1 : 0;
  next[idx.rippleControl] = settings.rippleControl ? 1 : 0;
  next[idx.angleSnap] = settings.angleSnap ? 1 : 0;
  next[idx.keyDebounceTime] = settings.keyDebounceTime;
  return next;
}
function getPollingRateLabel(value) {
  return POLLING_RATE_OPTIONS.find((o) => o.value === value)?.label ?? "—";
}
function getLiftHeightLabel(value) {
  return LIFT_HEIGHT_OPTIONS.find((o) => o.value === value)?.label ?? "—";
}
function getWorkModeLabel(value) {
  return WORK_MODE_OPTIONS.find((o) => o.value === value)?.label ?? "—";
}
const WORK_MODE_MIN_REPORT_LEVEL = {
  0: 3,
  1: 1,
  2: 0
};
function getMinReportLevelForWorkMode(mode) {
  return WORK_MODE_MIN_REPORT_LEVEL[mode];
}
function isPollingRateAllowed(mode, rate) {
  return rate >= getMinReportLevelForWorkMode(mode);
}
function getWorkModeForPollingRate(rate) {
  if (rate >= 3) return 0;
  if (rate >= 1) return 1;
  return 2;
}
function pollingRateToProgress(value) {
  return (POLLING_RATE_MAX_INDEX - value) / POLLING_RATE_MAX_INDEX;
}
function ModeAdvancedRow(t0) {
  const $ = compilerRuntimeExports.c(28);
  const {
    id,
    title,
    subtitle,
    description,
    checked,
    onCheckedChange
  } = t0;
  const titleId = `${id}-title`;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = cn("flex items-center justify-between gap-4 rounded-md border px-3 py-2.5", "border-border/50 bg-background/45 dark:border-white/8 dark:bg-black/15");
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  let t2;
  if ($[1] !== title || $[2] !== titleId) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { id: titleId, className: "text-sm font-normal text-foreground/88 dark:text-white/82", children: title });
    $[1] = title;
    $[2] = titleId;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  const t3 = `${title}说明`;
  let t4;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "size-3.5", "aria-hidden": true });
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  if ($[5] !== t3) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "inline-flex size-5 items-center justify-center rounded-full text-muted-foreground/70 transition-colors hover:text-primary dark:text-white/45", "aria-label": t3, children: t4 }) });
    $[5] = t3;
    $[6] = t5;
  } else {
    t5 = $[6];
  }
  let t6;
  if ($[7] !== description) {
    t6 = /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContent, { side: "top", className: "max-w-[200px] text-xs", children: description });
    $[7] = description;
    $[8] = t6;
  } else {
    t6 = $[8];
  }
  let t7;
  if ($[9] !== t5 || $[10] !== t6) {
    t7 = /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipProvider, { delayDuration: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip, { children: [
      t5,
      t6
    ] }) });
    $[9] = t5;
    $[10] = t6;
    $[11] = t7;
  } else {
    t7 = $[11];
  }
  let t8;
  if ($[12] !== t2 || $[13] !== t7) {
    t8 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
      t2,
      t7
    ] });
    $[12] = t2;
    $[13] = t7;
    $[14] = t8;
  } else {
    t8 = $[14];
  }
  let t9;
  if ($[15] !== subtitle) {
    t9 = subtitle ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground dark:text-white/40", children: subtitle }) : null;
    $[15] = subtitle;
    $[16] = t9;
  } else {
    t9 = $[16];
  }
  let t10;
  if ($[17] !== t8 || $[18] !== t9) {
    t10 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 flex-col gap-0.5", children: [
      t8,
      t9
    ] });
    $[17] = t8;
    $[18] = t9;
    $[19] = t10;
  } else {
    t10 = $[19];
  }
  let t11;
  if ($[20] !== checked || $[21] !== id || $[22] !== onCheckedChange || $[23] !== titleId) {
    t11 = /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { id, checked, onCheckedChange, "aria-labelledby": titleId, className: performanceSwitchClassName });
    $[20] = checked;
    $[21] = id;
    $[22] = onCheckedChange;
    $[23] = titleId;
    $[24] = t11;
  } else {
    t11 = $[24];
  }
  let t12;
  if ($[25] !== t10 || $[26] !== t11) {
    t12 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: t1, children: [
      t10,
      t11
    ] });
    $[25] = t10;
    $[26] = t11;
    $[27] = t12;
  } else {
    t12 = $[27];
  }
  return t12;
}
function ModeConnectionToggle(t0) {
  const $ = compilerRuntimeExports.c(11);
  const {
    options,
    value,
    onChange,
    ariaLabel: t1
  } = t0;
  const ariaLabel = t1 === void 0 ? "回报率连接方式" : t1;
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = cn("inline-flex gap-0.5 rounded-lg border p-0.5", "border-border/55 bg-muted/25 dark:border-white/10 dark:bg-white/4");
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  let t3;
  if ($[1] !== onChange || $[2] !== options || $[3] !== value) {
    let t42;
    if ($[5] !== onChange || $[6] !== value) {
      t42 = (option) => {
        const selected = option.value === value;
        return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", role: "radio", "aria-checked": selected, onClick: () => onChange(option.value), className: cn("cursor-target rounded-md px-4 py-1 text-xs font-normal transition-all duration-150 sm:text-[13px]", selected ? "bg-primary/12 font-medium text-primary shadow-[0_0_10px_var(--glow-primary)] dark:bg-primary/18 dark:text-primary" : "text-foreground/60 hover:text-foreground dark:text-white/55 dark:hover:text-white/85"), children: option.label }, option.value);
      };
      $[5] = onChange;
      $[6] = value;
      $[7] = t42;
    } else {
      t42 = $[7];
    }
    t3 = options.map(t42);
    $[1] = onChange;
    $[2] = options;
    $[3] = value;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[8] !== ariaLabel || $[9] !== t3) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { role: "radiogroup", "aria-label": ariaLabel, className: t2, children: t3 });
    $[8] = ariaLabel;
    $[9] = t3;
    $[10] = t4;
  } else {
    t4 = $[10];
  }
  return t4;
}
const CX = 100;
const CY = 100;
const INNER_R = 110;
const OUTER_R = 136;
const LABEL_R = 160;
const OUTER_RING_R = 158;
const PROGRESS_RING_CLASS = "transition-[stroke-dasharray,stroke-opacity] duration-500 ease-out motion-reduce:transition-none";
function polarToXY(angleDeg, radius) {
  const rad = angleDeg * Math.PI / 180;
  return {
    x: CX + radius * Math.cos(rad),
    y: CY + radius * Math.sin(rad)
  };
}
function ModePulseRing(t0) {
  const $ = compilerRuntimeExports.c(44);
  const {
    reportRate,
    competitive,
    className
  } = t0;
  const progress = pollingRateToProgress(reportRate);
  const t1 = reactExports.useId();
  let t2;
  if ($[0] !== t1) {
    let t33;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
      t33 = /:/g;
      $[2] = t33;
    } else {
      t33 = $[2];
    }
    t2 = t1.replace(t33, "");
    $[0] = t1;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  const uid = t2;
  const progressGradient = `${uid}-arc-progress`;
  const radarFade = `${uid}-radar-fade`;
  const radarGlow = `${uid}-radar-glow`;
  const dashedArcMask = `${uid}-dashed-arc-mask`;
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = describeRingArc(CX, CY, OUTER_R, POLLING_RATE_ARC_SPAN);
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  const middleArcPath = t3;
  const accent = competitive ? "oklch(0.78 0.16 65)" : "var(--primary)";
  let t4;
  if ($[4] !== className) {
    t4 = cn("relative mx-auto aspect-square w-full text-primary", className);
    $[4] = className;
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  let t5;
  if ($[6] !== accent || $[7] !== progressGradient) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsx(ArcProgressGradient, { id: progressGradient, cx: CX, cy: CY, arcSpan: POLLING_RATE_ARC_SPAN, color: accent, radius: OUTER_R });
    $[6] = accent;
    $[7] = progressGradient;
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  let t6;
  let t7;
  if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: "2", result: "blur" });
    t7 = /* @__PURE__ */ jsxRuntimeExports.jsxs("feMerge", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("feMergeNode", { in: "blur" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("feMergeNode", { in: "SourceGraphic" })
    ] });
    $[9] = t6;
    $[10] = t7;
  } else {
    t6 = $[9];
    t7 = $[10];
  }
  let t8;
  if ($[11] !== radarGlow) {
    t8 = /* @__PURE__ */ jsxRuntimeExports.jsxs("filter", { id: radarGlow, x: "-50%", y: "-50%", width: "200%", height: "200%", children: [
      t6,
      t7
    ] });
    $[11] = radarGlow;
    $[12] = t8;
  } else {
    t8 = $[12];
  }
  const t9 = 0.04 + progress * 0.1;
  let t10;
  if ($[13] !== accent || $[14] !== t9) {
    t10 = /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "65%", stopColor: accent, stopOpacity: t9 });
    $[13] = accent;
    $[14] = t9;
    $[15] = t10;
  } else {
    t10 = $[15];
  }
  let t11;
  if ($[16] !== accent) {
    t11 = /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: accent, stopOpacity: "0" });
    $[16] = accent;
    $[17] = t11;
  } else {
    t11 = $[17];
  }
  let t12;
  if ($[18] !== radarFade || $[19] !== t10 || $[20] !== t11) {
    t12 = /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: radarFade, cx: "50%", cy: "50%", r: "50%", children: [
      t10,
      t11
    ] });
    $[18] = radarFade;
    $[19] = t10;
    $[20] = t11;
    $[21] = t12;
  } else {
    t12 = $[21];
  }
  const t13 = `url(#${radarFade})`;
  let t14;
  if ($[22] !== t13) {
    t14 = /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: CX, cy: CY, r: OUTER_R + 6, fill: t13 });
    $[22] = t13;
    $[23] = t14;
  } else {
    t14 = $[23];
  }
  let t15;
  let t16;
  let t17;
  if ($[24] !== accent) {
    t15 = /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: CX, cy: CY, r: OUTER_R, fill: "none", stroke: accent, strokeWidth: "1", strokeDasharray: RING_STROKE_DASHARRAY, strokeOpacity: 0.12 });
    t16 = /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: CX, cy: CY, r: INNER_R, fill: "none", stroke: accent, strokeWidth: "1.2", strokeOpacity: 0.1 });
    t17 = /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: CX, cy: CY, r: OUTER_RING_R, fill: "none", stroke: accent, strokeWidth: "0.5", strokeOpacity: 0.08 });
    $[24] = accent;
    $[25] = t15;
    $[26] = t16;
    $[27] = t17;
  } else {
    t15 = $[25];
    t16 = $[26];
    t17 = $[27];
  }
  const t18 = `url(#${progressGradient})`;
  const t19 = `url(#${dashedArcMask})`;
  const t20 = `url(#${radarGlow})`;
  let t21;
  if ($[28] !== t18 || $[29] !== t19 || $[30] !== t20) {
    t21 = /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: middleArcPath, fill: "none", stroke: t18, strokeWidth: "1.5", strokeLinecap: "round", strokeDasharray: RING_STROKE_DASHARRAY, mask: t19, filter: t20 });
    $[28] = t18;
    $[29] = t19;
    $[30] = t20;
    $[31] = t21;
  } else {
    t21 = $[31];
  }
  const t22 = CX;
  const t23 = CY;
  const t24 = OUTER_RING_R;
  const t25 = "none";
  const t26 = `url(#${progressGradient})`;
  const t27 = "1";
  const t28 = "round";
  const t29 = ringDash(progress, OUTER_RING_R, POLLING_RATE_ARC_SPAN);
  const t30 = `url(#${radarGlow})`;
  let t31;
  if ($[32] !== t22 || $[33] !== t23 || $[34] !== t24 || $[35] !== t26 || $[36] !== t29 || $[37] !== t30) {
    t31 = /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: t22, cy: t23, r: t24, fill: t25, stroke: t26, strokeWidth: t27, strokeLinecap: t28, strokeDasharray: t29, transform: `rotate(-90 ${CX} ${CY})`, filter: t30, className: PROGRESS_RING_CLASS });
    $[32] = t22;
    $[33] = t23;
    $[34] = t24;
    $[35] = t26;
    $[36] = t29;
    $[37] = t30;
    $[38] = t31;
  } else {
    t31 = $[38];
  }
  let t32;
  if ($[39] !== accent || $[40] !== competitive || $[41] !== radarGlow || $[42] !== reportRate) {
    t32 = POLLING_RATE_OPTIONS.map((option) => {
      const angle = POLLING_RATE_MARK_ANGLES[option.value];
      const dot = polarToXY(angle, OUTER_R);
      const label = polarToXY(angle, LABEL_R);
      const selected = option.value === reportRate;
      const reached = option.value <= reportRate;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: dot.x, cy: dot.y, r: selected ? 3.2 : 2.2, fill: accent, opacity: selected ? 1 : reached ? 0.72 : 0.28, filter: `url(#${radarGlow})`, className: "transition-[opacity] duration-300 ease-out motion-reduce:transition-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: label.x, y: label.y, textAnchor: "middle", dominantBaseline: "middle", className: cn("select-none text-[7px] font-normal tabular-nums transition-[fill,opacity] duration-300 ease-out motion-reduce:transition-none", selected ? competitive ? "fill-amber-400 font-medium" : "fill-primary font-medium dark:fill-violet-100" : reached ? competitive ? "fill-amber-400/70" : "fill-primary/75" : "fill-muted-foreground/55"), children: option.shortLabel })
      ] }, option.value);
    });
    $[39] = accent;
    $[40] = competitive;
    $[41] = radarGlow;
    $[42] = reportRate;
    $[43] = t32;
  } else {
    t32 = $[43];
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: t4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 200 200", className: "size-full overflow-visible", "aria-hidden": true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
      t5,
      t8,
      t12,
      /* @__PURE__ */ jsxRuntimeExports.jsx("mask", { id: dashedArcMask, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: middleArcPath, fill: "none", stroke: "white", strokeWidth: "4", strokeLinecap: "round", strokeDasharray: ringDash(progress, OUTER_R, POLLING_RATE_ARC_SPAN), className: PROGRESS_RING_CLASS }) })
    ] }),
    t14,
    t15,
    t16,
    t17,
    t21,
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: CX, cy: CY, r: INNER_R, fill: "none", stroke: `url(#${progressGradient})`, strokeWidth: "1.8", strokeLinecap: "round", strokeDasharray: ringDash(progress, INNER_R, POLLING_RATE_ARC_SPAN), transform: `rotate(-90 ${CX} ${CY})`, filter: `url(#${radarGlow})`, className: PROGRESS_RING_CLASS }),
    t31,
    t32
  ] }) });
}
const LIFT_HEIGHT_DOT_STYLES = {
  0: {
    dot: "bg-emerald-400 dark:bg-emerald-500",
    ring: "ring-emerald-400/55 dark:ring-emerald-500/50",
    label: "低"
  },
  1: {
    dot: "bg-yellow-400 dark:bg-yellow-500",
    ring: "ring-yellow-400/55 dark:ring-yellow-500/50",
    label: "中"
  },
  2: {
    dot: "bg-red-400 dark:bg-red-500",
    ring: "ring-red-400/55 dark:ring-red-500/50",
    label: "高"
  }
};
function LiftHeightIndicator(t0) {
  const $ = compilerRuntimeExports.c(7);
  const {
    value
  } = t0;
  let t1;
  if ($[0] !== value) {
    t1 = getLiftHeightLabel(value);
    $[0] = value;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const t2 = `静默高度：${t1}`;
  let t3;
  if ($[2] !== value) {
    t3 = LIFT_HEIGHT_OPTIONS.map((option) => {
      const active = option.value === value;
      const style = LIFT_HEIGHT_DOT_STYLES[option.value];
      return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("rounded-full transition-all duration-200", style.dot, active ? cn("size-3 ring-2 ring-offset-2 ring-offset-background/90", style.ring) : "size-2 opacity-30"), title: style.label }, option.value);
    });
    $[2] = value;
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] !== t2 || $[5] !== t3) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5 flex items-center justify-center gap-2", role: "img", "aria-label": t2, children: t3 });
    $[4] = t2;
    $[5] = t3;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  return t4;
}
function AdvancedStatusIndicator(t0) {
  const $ = compilerRuntimeExports.c(8);
  const {
    enabled
  } = t0;
  const t1 = enabled ? "border-primary/35 bg-primary/12 text-primary dark:border-violet-400/35 dark:bg-violet-500/15 dark:text-violet-200" : "border-border/50 bg-muted/25 text-muted-foreground/45 dark:border-white/10 dark:bg-white/5 dark:text-white/28";
  let t2;
  if ($[0] !== t1) {
    t2 = cn("mt-1 inline-flex size-6 items-center justify-center rounded-full border transition-colors", t1);
    $[0] = t1;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  const t3 = enabled ? "已开启" : "已关闭";
  let t4;
  if ($[2] !== enabled) {
    t4 = enabled ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5", strokeWidth: 2.5, "aria-hidden": true }) : /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-3", strokeWidth: 2, "aria-hidden": true });
    $[2] = enabled;
    $[3] = t4;
  } else {
    t4 = $[3];
  }
  let t5;
  if ($[4] !== t2 || $[5] !== t3 || $[6] !== t4) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: t2, "aria-label": t3, children: t4 });
    $[4] = t2;
    $[5] = t3;
    $[6] = t4;
    $[7] = t5;
  } else {
    t5 = $[7];
  }
  return t5;
}
function ModeHeroPanel(t0) {
  const $ = compilerRuntimeExports.c(45);
  const {
    settings
  } = t0;
  const deviceConfig = useDeviceConfig();
  const {
    resolvedTheme
  } = z();
  const rectBackgroundImageMap = deviceConfig?.rectBackgroundImageMap;
  const imageSrc = rectBackgroundImageMap ? resolvedTheme === "dark" ? rectBackgroundImageMap.dark : rectBackgroundImageMap.light : void 0;
  const isCompetitive = settings.workMode === 2;
  let activeReportRate;
  let t1;
  if ($[0] !== settings) {
    activeReportRate = getActiveReportRate(settings);
    t1 = getPollingRateLabel(activeReportRate);
    $[0] = settings;
    $[1] = activeReportRate;
    $[2] = t1;
  } else {
    activeReportRate = $[1];
    t1 = $[2];
  }
  const pollingLabel = t1;
  let t2;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = cn("flex min-h-0 flex-col rounded-lg border px-2.5 py-3 sm:px-3 sm:py-4", "border-border/50 bg-muted/20", "dark:border-white/8 dark:bg-white/3");
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-normal uppercase tracking-widest text-muted-foreground/70", children: "当前回报率" });
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  const t4 = isCompetitive ? "text-amber-400 drop-shadow-[0_0_18px_oklch(0.78_0.16_65/0.55)]" : "text-primary drop-shadow-[0_0_10px_var(--glow-primary)] dark:drop-shadow-[0_0_22px_var(--glow-primary)]";
  let t5;
  if ($[5] !== t4) {
    t5 = cn("mt-0.5 font-light text-4xl leading-none tracking-tight sm:text-[2.75rem]", t4);
    $[5] = t4;
    $[6] = t5;
  } else {
    t5 = $[6];
  }
  let t6;
  if ($[7] !== pollingLabel || $[8] !== t5) {
    t6 = /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: t5, "aria-live": "polite", children: pollingLabel });
    $[7] = pollingLabel;
    $[8] = t5;
    $[9] = t6;
  } else {
    t6 = $[9];
  }
  const t7 = isCompetitive ? "border-amber-500/35 bg-amber-500/10 text-amber-500 dark:text-amber-500" : "border-primary/25 bg-primary/8 text-primary dark:text-violet-200";
  let t8;
  if ($[10] !== t7) {
    t8 = cn("mt-2 inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-normal", t7);
    $[10] = t7;
    $[11] = t8;
  } else {
    t8 = $[11];
  }
  let t9;
  if ($[12] !== isCompetitive) {
    t9 = isCompetitive ? /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "size-3", "aria-hidden": true }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Gauge, { className: "size-3", "aria-hidden": true });
    $[12] = isCompetitive;
    $[13] = t9;
  } else {
    t9 = $[13];
  }
  let t10;
  if ($[14] !== settings.workMode) {
    t10 = getWorkModeLabel(settings.workMode);
    $[14] = settings.workMode;
    $[15] = t10;
  } else {
    t10 = $[15];
  }
  let t11;
  if ($[16] !== t10 || $[17] !== t8 || $[18] !== t9) {
    t11 = /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: t8, children: [
      t9,
      t10
    ] });
    $[16] = t10;
    $[17] = t8;
    $[18] = t9;
    $[19] = t11;
  } else {
    t11 = $[19];
  }
  let t12;
  if ($[20] !== t11 || $[21] !== t6) {
    t12 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 text-center", children: [
      t3,
      t6,
      t11
    ] });
    $[20] = t11;
    $[21] = t6;
    $[22] = t12;
  } else {
    t12 = $[22];
  }
  let t13;
  if ($[23] !== activeReportRate || $[24] !== isCompetitive) {
    t13 = /* @__PURE__ */ jsxRuntimeExports.jsx(ModePulseRing, { reportRate: activeReportRate, competitive: isCompetitive, className: "absolute inset-0 m-auto hidden max-w-[min(100%,260px)] md:block" });
    $[23] = activeReportRate;
    $[24] = isCompetitive;
    $[25] = t13;
  } else {
    t13 = $[25];
  }
  let t14;
  if ($[26] !== imageSrc || $[27] !== isCompetitive) {
    t14 = imageSrc ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: imageSrc, alt: "", className: cn("relative z-10 w-[min(68%,180px)] object-contain md:mt-6 md:w-[min(72%,200px)]", "drop-shadow-[0_6px_16px_rgba(0,0,0,0.05)]", isCompetitive && "drop-shadow-[0_8px_24px_oklch(0.78_0.16_65/0.25)]"), draggable: false }) : null;
    $[26] = imageSrc;
    $[27] = isCompetitive;
    $[28] = t14;
  } else {
    t14 = $[28];
  }
  let t15;
  if ($[29] !== t13 || $[30] !== t14) {
    t15 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto my-2 flex min-h-[120px] w-full max-w-[220px] flex-1 items-center justify-center md:my-3 md:min-h-[190px] md:max-w-[250px]", children: [
      t13,
      t14
    ] });
    $[29] = t13;
    $[30] = t14;
    $[31] = t15;
  } else {
    t15 = $[31];
  }
  let t16;
  let t17;
  if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
    t16 = cn("rounded-md border px-2.5 py-2 text-center", "border-border/55 bg-background/50 dark:border-white/10 dark:bg-white/4");
    t17 = /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "静默高度" });
    $[32] = t16;
    $[33] = t17;
  } else {
    t16 = $[32];
    t17 = $[33];
  }
  let t18;
  if ($[34] !== settings.liftHeight) {
    t18 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: t16, children: [
      t17,
      /* @__PURE__ */ jsxRuntimeExports.jsx(LiftHeightIndicator, { value: settings.liftHeight })
    ] });
    $[34] = settings.liftHeight;
    $[35] = t18;
  } else {
    t18 = $[35];
  }
  let t19;
  if ($[36] !== settings) {
    t19 = ADVANCED_SETTING_ITEMS.map((item) => {
      const enabled = settings[item.key];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("rounded-md border px-2.5 py-2 text-center", "border-border/55 bg-background/50 dark:border-white/10 dark:bg-white/4"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: item.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AdvancedStatusIndicator, { enabled })
      ] }, item.key);
    });
    $[36] = settings;
    $[37] = t19;
  } else {
    t19 = $[37];
  }
  let t20;
  if ($[38] !== t18 || $[39] !== t19) {
    t20 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto grid shrink-0 grid-cols-2 gap-2 pt-1", children: [
      t18,
      t19
    ] });
    $[38] = t18;
    $[39] = t19;
    $[40] = t20;
  } else {
    t20 = $[40];
  }
  let t21;
  if ($[41] !== t12 || $[42] !== t15 || $[43] !== t20) {
    t21 = /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: t2, children: [
      t12,
      t15,
      t20
    ] });
    $[41] = t12;
    $[42] = t15;
    $[43] = t20;
    $[44] = t21;
  } else {
    t21 = $[44];
  }
  return t21;
}
function ModeLiftHeightBar(t0) {
  const $ = compilerRuntimeExports.c(19);
  const {
    options,
    value,
    onChange
  } = t0;
  let t1;
  if ($[0] !== options || $[1] !== value) {
    let t22;
    if ($[3] !== value) {
      t22 = (o) => o.value === value;
      $[3] = value;
      $[4] = t22;
    } else {
      t22 = $[4];
    }
    t1 = options.findIndex(t22);
    $[0] = options;
    $[1] = value;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const selectedIndex = Math.max(0, t1);
  let t2;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = cn("relative flex rounded-md border p-1", "border-border/55 bg-background/45 dark:border-white/10 dark:bg-black/20");
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  const t3 = `calc(${selectedIndex} * (100% / ${options.length}) + 0.25rem)`;
  const t4 = `calc(100% / ${options.length} - 0.5rem)`;
  let t5;
  if ($[6] !== t3 || $[7] !== t4) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-1 rounded-[6px] bg-primary shadow-[0_0_14px_var(--glow-primary)] transition-[left,width] duration-200 ease-out dark:shadow-[inset_0_0_8px_var(--glow-primary)]", style: {
      left: t3,
      width: t4
    }, "aria-hidden": true });
    $[6] = t3;
    $[7] = t4;
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  let t6;
  if ($[9] !== onChange || $[10] !== options || $[11] !== value) {
    let t72;
    if ($[13] !== onChange || $[14] !== value) {
      t72 = (option) => {
        const selected = option.value === value;
        return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", role: "radio", "aria-checked": selected, onClick: () => onChange(option.value), className: cn("relative z-10 flex-1 cursor-target rounded-[6px] px-1.5 py-2 text-xs font-normal transition-colors sm:text-[13px]", selected ? "text-primary-foreground dark:text-white" : "text-foreground/70 dark:text-white/58"), children: option.label }, option.value);
      };
      $[13] = onChange;
      $[14] = value;
      $[15] = t72;
    } else {
      t72 = $[15];
    }
    t6 = options.map(t72);
    $[9] = onChange;
    $[10] = options;
    $[11] = value;
    $[12] = t6;
  } else {
    t6 = $[12];
  }
  let t7;
  if ($[16] !== t5 || $[17] !== t6) {
    t7 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { role: "radiogroup", "aria-label": "静默高度", className: t2, children: [
      t5,
      t6
    ] });
    $[16] = t5;
    $[17] = t6;
    $[18] = t7;
  } else {
    t7 = $[18];
  }
  return t7;
}
function ModeSegmentButtons(t0) {
  const $ = compilerRuntimeExports.c(15);
  const {
    options,
    value,
    onChange,
    ariaLabel,
    isDisabled
  } = t0;
  const t1 = options.length > 5 ? "grid-cols-4 sm:grid-cols-7" : "grid-cols-3 sm:grid-cols-5";
  let t2;
  if ($[0] !== t1) {
    t2 = cn("grid gap-1.5", t1);
    $[0] = t1;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  let t3;
  if ($[2] !== isDisabled || $[3] !== onChange || $[4] !== options || $[5] !== value) {
    let t42;
    if ($[7] !== isDisabled || $[8] !== onChange || $[9] !== value) {
      t42 = (option) => {
        const selected = option.value === value;
        const disabled = isDisabled?.(option.value) ?? false;
        return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", role: "radio", "aria-checked": selected, "aria-disabled": disabled, disabled, onClick: () => {
          if (disabled) {
            return;
          }
          onChange(option.value);
        }, className: cn("rounded-md border px-2 py-2 text-center text-xs font-normal tabular-nums transition-all duration-150 sm:text-[13px]", disabled ? "cursor-not-allowed border-border/35 bg-muted/20 text-muted-foreground/45 opacity-50 dark:border-white/6 dark:bg-white/2 dark:text-white/28" : cn("cursor-target border-border/60 bg-background/60 text-foreground/70", "hover:border-border hover:bg-background/80 hover:text-foreground", "dark:border-white/12 dark:bg-white/4 dark:text-white/62 dark:hover:border-white/20 dark:hover:text-white/88", selected && "border-primary bg-primary/10 font-medium text-primary shadow-[0_0_12px_var(--glow-primary)] dark:bg-primary/15 dark:text-primary")), children: option.label }, option.value);
      };
      $[7] = isDisabled;
      $[8] = onChange;
      $[9] = value;
      $[10] = t42;
    } else {
      t42 = $[10];
    }
    t3 = options.map(t42);
    $[2] = isDisabled;
    $[3] = onChange;
    $[4] = options;
    $[5] = value;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  let t4;
  if ($[11] !== ariaLabel || $[12] !== t2 || $[13] !== t3) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { role: "radiogroup", "aria-label": ariaLabel, className: t2, children: t3 });
    $[11] = ariaLabel;
    $[12] = t2;
    $[13] = t3;
    $[14] = t4;
  } else {
    t4 = $[14];
  }
  return t4;
}
function ModeSettingSection(t0) {
  const $ = compilerRuntimeExports.c(14);
  const {
    title,
    description,
    children,
    className
  } = t0;
  let t1;
  if ($[0] !== className) {
    t1 = cn("rounded-md border px-3 py-3 sm:px-3.5 sm:py-3.5", "border-border/60 bg-muted/25", "dark:border-white/10 dark:bg-white/5", className);
    $[0] = className;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] !== title) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-normal text-foreground/90 dark:text-white/86", children: title });
    $[2] = title;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== description || $[5] !== title) {
    t3 = description ? /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipProvider, { delayDuration: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "inline-flex size-5 items-center justify-center rounded-full text-muted-foreground/70 transition-colors hover:text-primary dark:text-white/45 dark:hover:text-violet-200", "aria-label": `${title}说明`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "size-3.5", "aria-hidden": true }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContent, { side: "top", className: "max-w-[200px] text-xs", children: description })
    ] }) }) : null;
    $[4] = description;
    $[5] = title;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  let t4;
  if ($[7] !== t2 || $[8] !== t3) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center gap-1.5", children: [
      t2,
      t3
    ] });
    $[7] = t2;
    $[8] = t3;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  let t5;
  if ($[10] !== children || $[11] !== t1 || $[12] !== t4) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: t1, children: [
      t4,
      children
    ] });
    $[10] = children;
    $[11] = t1;
    $[12] = t4;
    $[13] = t5;
  } else {
    t5 = $[13];
  }
  return t5;
}
function ModeWorkModePicker(t0) {
  const $ = compilerRuntimeExports.c(15);
  const {
    options,
    value,
    onChange,
    tooltips: t1,
    isDisabled
  } = t0;
  let t2;
  if ($[0] !== t1) {
    t2 = t1 === void 0 ? {} : t1;
    $[0] = t1;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  const tooltips = t2;
  let t3;
  if ($[2] !== isDisabled || $[3] !== onChange || $[4] !== options || $[5] !== tooltips || $[6] !== value) {
    let t42;
    if ($[8] !== isDisabled || $[9] !== onChange || $[10] !== tooltips || $[11] !== value) {
      t42 = (option) => {
        const selected = option.value === value;
        const disabled = isDisabled?.(option.value) ?? false;
        const tooltip = tooltips[option.value];
        const isCompetitive = option.accent === true;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", role: "radio", "aria-checked": selected, "aria-disabled": disabled, disabled, onClick: () => {
          if (disabled) {
            return;
          }
          onChange(option.value);
        }, className: cn("group relative flex items-center justify-between gap-2 rounded-md border px-3 py-3 text-left transition-all duration-200", disabled ? "cursor-not-allowed border-border/35 bg-muted/20 opacity-50 dark:border-white/6 dark:bg-white/2" : cn("cursor-target border-border/60 bg-background/50", "hover:border-primary/30 hover:bg-primary/5", "dark:border-white/10 dark:bg-white/4 dark:hover:border-primary/35 dark:hover:bg-primary/8", selected && !isCompetitive && "border-primary/50 bg-primary/10 shadow-[0_0_16px_var(--glow-primary)] dark:bg-primary/12", selected && isCompetitive && "border-amber-500/45 bg-amber-500/10 shadow-[0_0_18px_oklch(0.78_0.16_65/0.35)] dark:bg-amber-500/12")), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex min-w-0 items-center gap-1.5", children: [
            isCompetitive && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("flex size-6 shrink-0 items-center justify-center rounded-md border", selected ? "border-amber-500/40 bg-amber-500/15 text-amber-500" : "border-amber-500/25 bg-amber-500/8 text-amber-500/80"), "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "size-3.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("truncate text-sm font-normal leading-tight", disabled ? "text-muted-foreground/45 dark:text-white/28" : isCompetitive ? selected ? "text-amber-600 dark:text-amber-300" : "text-amber-600/85 dark:text-amber-400/85" : "text-foreground/88 dark:text-white/84"), children: option.label }),
            tooltip ? /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipProvider, { delayDuration: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { role: "presentation", className: "inline-flex size-5 shrink-0 items-center justify-center rounded-full text-muted-foreground/70 transition-colors hover:text-primary dark:text-white/45", onClick: _temp$1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "size-3.5", "aria-hidden": true }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContent, { side: "bottom", className: "max-w-[200px] text-xs", children: tooltip })
            ] }) }) : null
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("flex size-5 shrink-0 items-center justify-center rounded-full border transition-colors", selected ? isCompetitive ? "border-amber-500 bg-amber-500 text-white" : "border-primary bg-primary text-primary-foreground dark:text-white" : "border-muted-foreground/30 bg-transparent dark:border-white/22"), "aria-hidden": true, children: selected ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3", strokeWidth: 3 }) : null })
        ] }, option.value);
      };
      $[8] = isDisabled;
      $[9] = onChange;
      $[10] = tooltips;
      $[11] = value;
      $[12] = t42;
    } else {
      t42 = $[12];
    }
    t3 = options.map(t42);
    $[2] = isDisabled;
    $[3] = onChange;
    $[4] = options;
    $[5] = tooltips;
    $[6] = value;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  let t4;
  if ($[13] !== t3) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { role: "radiogroup", "aria-label": "工作模式", className: "grid gap-2 sm:grid-cols-3", children: t3 });
    $[13] = t3;
    $[14] = t4;
  } else {
    t4 = $[14];
  }
  return t4;
}
function _temp$1(e) {
  return e.stopPropagation();
}
function MouseModePage() {
  const $ = compilerRuntimeExports.c(72);
  const [settings, setSettings] = reactExports.useState(null);
  const [isReady, setIsReady] = reactExports.useState(false);
  const device = useDevice();
  const initialSyncDone = useKeyboardDriverSyncStore(_temp);
  const setFunctionalAreaInfo = useFunctionalAreaStore(_temp2);
  const setCurrentFunctionalAreaData = useFunctionalAreaStore(_temp3);
  const getCurrentFunctionalAreaData = useFunctionalAreaStore(_temp4);
  const skipWriteRef = reactExports.useRef(false);
  let t0;
  let t1;
  if ($[0] !== device || $[1] !== getCurrentFunctionalAreaData || $[2] !== initialSyncDone) {
    t0 = () => {
      if (!device || !initialSyncDone) {
        return;
      }
      setIsReady(false);
      (async () => {
        await useDeviceInfoStore.getState().getDeviceInfoData();
        await getCurrentFunctionalAreaData();
        const source = useFunctionalAreaStore.getState().currentFunctionalAreaData;
        if (!source.length) {
          return;
        }
        skipWriteRef.current = true;
        setSettings(readMouseModeSettingsFromFunctionalArea(source));
        setIsReady(true);
      })();
    };
    t1 = [device, initialSyncDone, getCurrentFunctionalAreaData];
    $[0] = device;
    $[1] = getCurrentFunctionalAreaData;
    $[2] = initialSyncDone;
    $[3] = t0;
    $[4] = t1;
  } else {
    t0 = $[3];
    t1 = $[4];
  }
  reactExports.useEffect(t0, t1);
  let t2;
  if ($[5] !== getCurrentFunctionalAreaData || $[6] !== setCurrentFunctionalAreaData || $[7] !== setFunctionalAreaInfo) {
    t2 = (next) => {
      const source_0 = useFunctionalAreaStore.getState().currentFunctionalAreaData;
      if (!source_0.length) {
        return;
      }
      const current = readMouseModeSettingsFromFunctionalArea(source_0);
      if (areMouseModeSettingsEqual(current, next)) {
        return;
      }
      const patched = writeMouseModeSettingsToFunctionalArea(source_0, next);
      setCurrentFunctionalAreaData(patched);
      (async () => {
        try {
          await setFunctionalAreaInfo(patched);
          await getCurrentFunctionalAreaData();
        } catch (t36) {
          const error = t36;
          console.error("写入模式设置失败:", error);
          toast.error("保存失败");
        }
      })();
    };
    $[5] = getCurrentFunctionalAreaData;
    $[6] = setCurrentFunctionalAreaData;
    $[7] = setFunctionalAreaInfo;
    $[8] = t2;
  } else {
    t2 = $[8];
  }
  let t3;
  if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = {
      wait: 350
    };
    $[9] = t3;
  } else {
    t3 = $[9];
  }
  const {
    run: scheduleWrite,
    cancel: cancelScheduleWrite
  } = useDebounceFn(t2, t3);
  let t4;
  let t5;
  if ($[10] !== isReady || $[11] !== scheduleWrite || $[12] !== settings) {
    t4 = () => {
      if (!isReady || !settings) {
        return;
      }
      if (skipWriteRef.current) {
        skipWriteRef.current = false;
        return;
      }
      scheduleWrite(settings);
    };
    t5 = [isReady, settings, scheduleWrite];
    $[10] = isReady;
    $[11] = scheduleWrite;
    $[12] = settings;
    $[13] = t4;
    $[14] = t5;
  } else {
    t4 = $[13];
    t5 = $[14];
  }
  reactExports.useEffect(t4, t5);
  let t6;
  let t7;
  if ($[15] !== cancelScheduleWrite) {
    t6 = () => () => {
      cancelScheduleWrite();
    };
    t7 = [cancelScheduleWrite];
    $[15] = cancelScheduleWrite;
    $[16] = t6;
    $[17] = t7;
  } else {
    t6 = $[16];
    t7 = $[17];
  }
  reactExports.useEffect(t6, t7);
  let t8;
  if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
    t8 = (patch) => {
      setSettings((prev) => prev ? {
        ...prev,
        ...patch
      } : prev);
    };
    $[18] = t8;
  } else {
    t8 = $[18];
  }
  const patchSettings = t8;
  let t9;
  if ($[19] !== settings) {
    t9 = settings ? getActiveReportRate(settings) : null;
    $[19] = settings;
    $[20] = t9;
  } else {
    t9 = $[20];
  }
  const activeReportRate = t9;
  let t10;
  if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
    t10 = (rate) => {
      setSettings((prev_0) => {
        if (!prev_0) {
          return prev_0;
        }
        const next_0 = setActiveReportRate(prev_0, rate);
        next_0.workMode = getWorkModeForPollingRate(rate);
        return next_0;
      });
    };
    $[21] = t10;
  } else {
    t10 = $[21];
  }
  const handleReportRateChange = t10;
  let t11;
  if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
    t11 = (target) => {
      setSettings((prev_1) => {
        if (!prev_1 || prev_1.reportRateTarget === target) {
          return prev_1;
        }
        const next_1 = {
          ...prev_1,
          reportRateTarget: target
        };
        next_1.workMode = getWorkModeForPollingRate(getActiveReportRate(next_1));
        return next_1;
      });
    };
    $[22] = t11;
  } else {
    t11 = $[22];
  }
  const handleReportRateTargetChange = t11;
  let t12;
  if ($[23] !== activeReportRate) {
    t12 = (mode) => {
      if (activeReportRate == null) {
        return true;
      }
      return !isPollingRateAllowed(mode, activeReportRate);
    };
    $[23] = activeReportRate;
    $[24] = t12;
  } else {
    t12 = $[24];
  }
  const isWorkModeDisabled = t12;
  let t13;
  if ($[25] !== activeReportRate) {
    t13 = (value) => {
      if (activeReportRate == null) {
        return;
      }
      if (!isPollingRateAllowed(value, activeReportRate)) {
        return;
      }
      patchSettings({
        workMode: value
      });
    };
    $[25] = activeReportRate;
    $[26] = t13;
  } else {
    t13 = $[26];
  }
  const handleWorkModeChange = t13;
  let t14;
  bb0: {
    if (activeReportRate == null) {
      t14 = null;
      break bb0;
    }
    if (activeReportRate >= 3) {
      t14 = null;
      break bb0;
    }
    if (activeReportRate >= 1) {
      t14 = "当前回报率下，默认模式不可用。";
      break bb0;
    }
    t14 = "当前回报率下，仅竞技模式可用。";
  }
  const pollingRateHint = t14;
  if (!initialSyncDone || !isReady || !settings) {
    let t152;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
      t152 = /* @__PURE__ */ jsxRuntimeExports.jsx(MouseDriverPageLoading, {});
      $[27] = t152;
    } else {
      t152 = $[27];
    }
    return t152;
  }
  let t15;
  if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
    t15 = cn("effect-card relative flex min-h-0 flex-1 overflow-hidden rounded-xl border", "border-border/50 bg-background/75", "dark:border-white/8 dark:bg-[oklch(0.16_0.035_270/0.72)]");
    $[28] = t15;
  } else {
    t15 = $[28];
  }
  let t16;
  if ($[29] !== settings) {
    t16 = /* @__PURE__ */ jsxRuntimeExports.jsx(ModeHeroPanel, { settings });
    $[29] = settings;
    $[30] = t16;
  } else {
    t16 = $[30];
  }
  let t17;
  if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
    t17 = cn("flex size-7 items-center justify-center rounded-md border", "border-border/55 bg-muted/30 text-primary dark:border-white/10 dark:bg-white/5");
    $[31] = t17;
  } else {
    t17 = $[31];
  }
  let t18;
  if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
    t18 = /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "mb-2 flex shrink-0 items-center justify-between gap-2 border-b border-border/40 px-1 pb-2 dark:border-white/8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: t17, "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "size-3.5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-normal text-foreground/90 dark:text-white/88", children: "模式设置" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground dark:text-white/42", children: "调整回报率、静默高度与工作模式" })
      ] })
    ] }) });
    $[32] = t18;
  } else {
    t18 = $[32];
  }
  let t19;
  if ($[33] !== handleWorkModeChange) {
    t19 = (value_0) => handleWorkModeChange(value_0);
    $[33] = handleWorkModeChange;
    $[34] = t19;
  } else {
    t19 = $[34];
  }
  let t20;
  if ($[35] !== isWorkModeDisabled || $[36] !== settings.workMode || $[37] !== t19) {
    t20 = /* @__PURE__ */ jsxRuntimeExports.jsx(ModeSettingSection, { title: "模式选择", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ModeWorkModePicker, { options: WORK_MODE_OPTIONS, value: settings.workMode, onChange: t19, tooltips: WORK_MODE_TOOLTIPS, isDisabled: isWorkModeDisabled }) });
    $[35] = isWorkModeDisabled;
    $[36] = settings.workMode;
    $[37] = t19;
    $[38] = t20;
  } else {
    t20 = $[38];
  }
  let t21;
  if ($[39] !== settings.reportRateTarget) {
    t21 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ModeConnectionToggle, { options: REPORT_RATE_TARGET_OPTIONS, value: settings.reportRateTarget, onChange: handleReportRateTargetChange }) });
    $[39] = settings.reportRateTarget;
    $[40] = t21;
  } else {
    t21 = $[40];
  }
  let t22;
  if ($[41] !== settings) {
    t22 = getActiveReportRate(settings);
    $[41] = settings;
    $[42] = t22;
  } else {
    t22 = $[42];
  }
  let t23;
  if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
    t23 = (value_1) => handleReportRateChange(value_1);
    $[43] = t23;
  } else {
    t23 = $[43];
  }
  let t24;
  if ($[44] !== t22) {
    t24 = /* @__PURE__ */ jsxRuntimeExports.jsx(ModeSegmentButtons, { options: POLLING_RATE_OPTIONS, value: t22, onChange: t23, ariaLabel: "回报率" });
    $[44] = t22;
    $[45] = t24;
  } else {
    t24 = $[45];
  }
  let t25;
  if ($[46] !== pollingRateHint) {
    t25 = pollingRateHint ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[11px] text-muted-foreground dark:text-white/42", children: pollingRateHint }) : null;
    $[46] = pollingRateHint;
    $[47] = t25;
  } else {
    t25 = $[47];
  }
  let t26;
  if ($[48] !== t21 || $[49] !== t24 || $[50] !== t25) {
    t26 = /* @__PURE__ */ jsxRuntimeExports.jsxs(ModeSettingSection, { title: "回报率", description: "报告频率越高，延迟越低、功耗越高。有线与 2.4G 分别设置。", children: [
      t21,
      t24,
      t25
    ] });
    $[48] = t21;
    $[49] = t24;
    $[50] = t25;
    $[51] = t26;
  } else {
    t26 = $[51];
  }
  let t27;
  if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
    t27 = (value_2) => patchSettings({
      liftHeight: value_2
    });
    $[52] = t27;
  } else {
    t27 = $[52];
  }
  let t28;
  if ($[53] !== settings.liftHeight) {
    t28 = /* @__PURE__ */ jsxRuntimeExports.jsx(ModeSettingSection, { title: "静默高度", description: "抬起后停止追踪的高度，越高越不易误触。", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ModeLiftHeightBar, { options: LIFT_HEIGHT_OPTIONS, value: settings.liftHeight, onChange: t27 }) });
    $[53] = settings.liftHeight;
    $[54] = t28;
  } else {
    t28 = $[54];
  }
  let t29;
  if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
    t29 = (value_3) => patchSettings({
      keyDebounceTime: value_3
    });
    $[55] = t29;
  } else {
    t29 = $[55];
  }
  let t30;
  if ($[56] !== settings.keyDebounceTime) {
    t30 = /* @__PURE__ */ jsxRuntimeExports.jsx(ModeSettingSection, { title: "按键防抖延迟", description: "可避免鼠标按键快速连点或抖动引发的重复触发或误触发。", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ModeSegmentButtons, { options: KEY_DEBOUNCE_OPTIONS, value: settings.keyDebounceTime, onChange: t29, ariaLabel: "按键防抖延迟" }) });
    $[56] = settings.keyDebounceTime;
    $[57] = t30;
  } else {
    t30 = $[57];
  }
  let t31;
  if ($[58] !== settings) {
    t31 = ADVANCED_SETTING_ITEMS.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(ModeAdvancedRow, { id: `mouse-advanced-${item.key}`, title: item.title, subtitle: item.subtitle, description: item.description, checked: settings[item.key], onCheckedChange: (checked) => patchSettings({
      [item.key]: checked
    }) }, item.key));
    $[58] = settings;
    $[59] = t31;
  } else {
    t31 = $[59];
  }
  let t32;
  if ($[60] !== t31) {
    t32 = /* @__PURE__ */ jsxRuntimeExports.jsx(ModeSettingSection, { title: "进阶设置", description: "传感器追踪相关选项。", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2", children: t31 }) });
    $[60] = t31;
    $[61] = t32;
  } else {
    t32 = $[61];
  }
  let t33;
  if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
    t33 = /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-1.5 px-1 text-[11px] leading-relaxed text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "mt-px size-3 shrink-0", strokeWidth: 1.5 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "修改后会自动同步到设备。左侧预览会实时反映当前回报率与工作模式。" })
    ] });
    $[62] = t33;
  } else {
    t33 = $[62];
  }
  let t34;
  if ($[63] !== t20 || $[64] !== t26 || $[65] !== t28 || $[66] !== t30 || $[67] !== t32) {
    t34 = /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "flex min-h-0 min-w-0 flex-col", children: [
      t18,
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-0 flex-1 space-y-2.5 overflow-y-auto pr-0.5", children: [
        t20,
        t26,
        t28,
        t30,
        t32,
        t33
      ] })
    ] });
    $[63] = t20;
    $[64] = t26;
    $[65] = t28;
    $[66] = t30;
    $[67] = t32;
    $[68] = t34;
  } else {
    t34 = $[68];
  }
  let t35;
  if ($[69] !== t16 || $[70] !== t34) {
    t35 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full min-h-0 flex-col overflow-hidden p-3 sm:p-4 md:p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: t15, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 grid min-h-0 flex-1 grid-cols-1 gap-2 p-2 sm:gap-3 sm:p-3 md:grid-cols-[minmax(200px,34%)_minmax(0,1fr)] md:gap-4 md:p-4", children: [
      t16,
      t34
    ] }) }) });
    $[69] = t16;
    $[70] = t34;
    $[71] = t35;
  } else {
    t35 = $[71];
  }
  return t35;
}
function _temp4(s_2) {
  return s_2.getCurrentFunctionalAreaData;
}
function _temp3(s_1) {
  return s_1.setCurrentFunctionalAreaData;
}
function _temp2(s_0) {
  return s_0.setFunctionalAreaInfo;
}
function _temp(s) {
  return s.initialSyncDone;
}
export {
  MouseModePage as default
};
