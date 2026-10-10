import { k as compilerRuntimeExports, r as reactExports, j as jsxRuntimeExports } from "./vendor-react-CCnVVUMc.js";
import { h as highLowToDecimal, ec as splitHighLowBytes, F as cn, a_ as ChevronUp, aZ as ChevronDown, K as Slider, H as Input, l as PopoverTrigger, m as PopoverContent, j as Popover, J as Switch, eR as Crosshair, c3 as useDeviceConfig, bE as z, c2 as useDevice, cg as useKeyboardDriverSyncStore, c1 as useFunctionalAreaStore, ar as useDebounceFn, aL as useDeviceInfoStore, a2 as toast, a1 as Info } from "./index-CMbUujkZ.js";
import { Z } from "./index-rMUO-LNA.js";
import { r as ringDash, d as describeRingArc, A as ArcProgressGradient, R as RING_STROKE_DASHARRAY, M as MouseDriverPageLoading } from "./MouseDriverPageLoading-y3bhliSU.js";
const DPI_SLIDER_MARKS = [50, 800, 1600, 2400, 3200, 6400, 12800, 3e4];
const DPI_MIN = 50;
const DPI_MAX = 3e4;
const DPI_STEP = 50;
const DPI_PRESET_COUNT = 8;
const DPI_STAGE_COLORS = ["#f87171", "#fb923c", "#facc15", "#4ade80", "#22d3ee", "#60a5fa", "#a78bfa", "#f472b6"];
const DPI_RADAR_MARKS = [400, 3200, 8e3, 16e3, 3e4];
const DPI_RADAR_MARK_ANGLES = {
  400: -90,
  3200: 0,
  8e3: 60,
  16e3: 120,
  3e4: 180
};
const DPI_RADAR_ARC_SPAN = 270;
function clampDpi(value) {
  if (!Number.isFinite(value)) return DPI_MIN;
  return Math.min(DPI_MAX, Math.max(DPI_MIN, Math.round(value / DPI_STEP) * DPI_STEP));
}
const SLIDER_POS_MAX = 1e3;
function dpiToSliderPercent(value) {
  if (!Number.isFinite(value) || value <= 0) return 0;
  const clamped = clampDpi(value);
  const segments = DPI_SLIDER_MARKS.length - 1;
  for (let i = 0; i < segments; i++) {
    const lo = DPI_SLIDER_MARKS[i];
    const hi = DPI_SLIDER_MARKS[i + 1];
    if (clamped <= hi) {
      const frac = hi === lo ? 0 : (clamped - lo) / (hi - lo);
      return (i + frac) / segments * 100;
    }
  }
  return 100;
}
function sliderPercentToDpi(percent) {
  const segments = DPI_SLIDER_MARKS.length - 1;
  const clampedPercent = Math.min(100, Math.max(0, percent));
  const pos = clampedPercent / 100 * segments;
  const i = Math.min(segments - 1, Math.floor(pos));
  const frac = pos - i;
  const dpi = DPI_SLIDER_MARKS[i] + frac * (DPI_SLIDER_MARKS[i + 1] - DPI_SLIDER_MARKS[i]);
  return clampDpi(dpi);
}
function dpiToRadarProgress(value) {
  if (!Number.isFinite(value) || value <= 0) return 0;
  const marks = DPI_RADAR_MARKS;
  const startAngle = DPI_RADAR_MARK_ANGLES[marks[0]];
  if (value < marks[0]) return 0;
  if (value >= marks[marks.length - 1]) return 1;
  for (let i = 0; i < marks.length - 1; i++) {
    const lo = marks[i];
    const hi = marks[i + 1];
    if (value <= hi) {
      const frac = (value - lo) / (hi - lo);
      const angleLo = DPI_RADAR_MARK_ANGLES[lo];
      const angleHi = DPI_RADAR_MARK_ANGLES[hi];
      const angle = angleLo + frac * (angleHi - angleLo);
      return (angle - startAngle) / DPI_RADAR_ARC_SPAN;
    }
  }
  return 1;
}
const DPI_LEVEL_COUNT_INDEX = 25;
const DPI_CURRENT_LEVEL_INDEX = 26;
const DPI_PRESET_BASE = 27;
const DPI_PRESET_STRIDE = 9;
const DPI_FIELD_OFFSET = {
  enable: 0,
  xyEnable: 1,
  xLow: 2,
  xHigh: 3,
  yLow: 4,
  yHigh: 5,
  colorR: 6,
  colorG: 7,
  colorB: 8
};
function dpiPresetStart(index) {
  return DPI_PRESET_BASE + index * DPI_PRESET_STRIDE;
}
function toHexByte(n) {
  return Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, "0");
}
function dpiColorFromBytes(r, g, b, index) {
  if (!r && !g && !b) return DPI_STAGE_COLORS[index] ?? DPI_STAGE_COLORS[0];
  return `#${toHexByte(r)}${toHexByte(g)}${toHexByte(b)}`;
}
function dpiColorToBytes(hex) {
  const match = /^#?([0-9a-fA-F]{6})$/.exec(hex.trim());
  if (!match) return [0, 0, 0];
  const int = parseInt(match[1], 16);
  return [int >> 16 & 255, int >> 8 & 255, int & 255];
}
function writeDpiPresetsToFunctionalArea(source, presets, activeIndex, independentAxis) {
  const next = [...source];
  const used = presets.slice(0, DPI_PRESET_COUNT);
  const toByte = (h) => parseInt(h, 16);
  next[DPI_LEVEL_COUNT_INDEX] = used.filter((p) => p.enabled).length;
  next[DPI_CURRENT_LEVEL_INDEX] = activeIndex;
  used.forEach((preset, index) => {
    const start = dpiPresetStart(index);
    const [xl, xh] = splitHighLowBytes(preset.x).map(toByte);
    const [yl, yh] = splitHighLowBytes(preset.y).map(toByte);
    next[start + DPI_FIELD_OFFSET.enable] = preset.enabled ? 1 : 0;
    next[start + DPI_FIELD_OFFSET.xyEnable] = independentAxis ? 1 : 0;
    next[start + DPI_FIELD_OFFSET.xLow] = xl;
    next[start + DPI_FIELD_OFFSET.xHigh] = xh;
    next[start + DPI_FIELD_OFFSET.yLow] = yl;
    next[start + DPI_FIELD_OFFSET.yHigh] = yh;
    const [cr, cg, cb] = dpiColorToBytes(preset.color);
    next[start + DPI_FIELD_OFFSET.colorR] = cr;
    next[start + DPI_FIELD_OFFSET.colorG] = cg;
    next[start + DPI_FIELD_OFFSET.colorB] = cb;
  });
  return next;
}
function readDpiPresetsFromFunctionalArea(source) {
  const presets = [];
  for (let index = 0; index < DPI_PRESET_COUNT; index++) {
    const start = dpiPresetStart(index);
    const enabled = (source[start + DPI_FIELD_OFFSET.enable] ?? 0) === 1;
    const x = highLowToDecimal(source[start + DPI_FIELD_OFFSET.xHigh] ?? 0, source[start + DPI_FIELD_OFFSET.xLow] ?? 0);
    const y = highLowToDecimal(source[start + DPI_FIELD_OFFSET.yHigh] ?? 0, source[start + DPI_FIELD_OFFSET.yLow] ?? 0);
    const color = dpiColorFromBytes(source[start + DPI_FIELD_OFFSET.colorR] ?? 0, source[start + DPI_FIELD_OFFSET.colorG] ?? 0, source[start + DPI_FIELD_OFFSET.colorB] ?? 0, index);
    presets.push({
      enabled,
      x,
      y,
      color
    });
  }
  const independentAxis = (source[dpiPresetStart(0) + DPI_FIELD_OFFSET.xyEnable] ?? 0) === 1;
  const rawActive = source[DPI_CURRENT_LEVEL_INDEX] ?? 0;
  const activeIndex = Math.min(DPI_PRESET_COUNT - 1, Math.max(0, rawActive));
  return {
    presets,
    activeIndex,
    independentAxis
  };
}
function DpiNumberInput(t0) {
  const $ = compilerRuntimeExports.c(39);
  const {
    value,
    onChange,
    disabled,
    className
  } = t0;
  const [draft, setDraft] = reactExports.useState(String(value));
  const editingRef = reactExports.useRef(false);
  let t1;
  let t2;
  if ($[0] !== value) {
    t1 = () => {
      if (!editingRef.current) {
        setDraft(String(value));
      }
    };
    t2 = [value];
    $[0] = value;
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  reactExports.useEffect(t1, t2);
  let t3;
  if ($[3] !== draft || $[4] !== onChange || $[5] !== value) {
    t3 = () => {
      editingRef.current = false;
      const parsed = Number(draft);
      const next = draft.trim() === "" || Number.isNaN(parsed) ? value : clampDpi(parsed);
      setDraft(String(next));
      if (next !== value) {
        onChange(next);
      }
    };
    $[3] = draft;
    $[4] = onChange;
    $[5] = value;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  const commit = t3;
  let t4;
  if ($[7] !== disabled || $[8] !== onChange || $[9] !== value) {
    t4 = (delta) => {
      if (disabled) {
        return;
      }
      const next_0 = clampDpi(value + delta);
      setDraft(String(next_0));
      onChange(next_0);
    };
    $[7] = disabled;
    $[8] = onChange;
    $[9] = value;
    $[10] = t4;
  } else {
    t4 = $[10];
  }
  const step = t4;
  const t5 = disabled && "border-dashed border-muted-foreground/35";
  let t6;
  if ($[11] !== className || $[12] !== t5) {
    t6 = cn("flex h-7 w-23 shrink-0 items-stretch overflow-hidden rounded border", "border-black/12 bg-white/80 dark:border-white/12 dark:bg-white/8", t5, className);
    $[11] = className;
    $[12] = t5;
    $[13] = t6;
  } else {
    t6 = $[13];
  }
  let t7;
  let t8;
  if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
    t7 = (e) => {
      editingRef.current = true;
      e.target.select();
    };
    t8 = (e_0) => setDraft(e_0.target.value.replace(/[^\d]/g, ""));
    $[14] = t7;
    $[15] = t8;
  } else {
    t7 = $[14];
    t8 = $[15];
  }
  let t9;
  if ($[16] !== commit || $[17] !== disabled || $[18] !== draft) {
    t9 = /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", inputMode: "numeric", disabled, value: draft, onFocus: t7, onChange: t8, onBlur: commit, onKeyDown: _temp$1, className: "min-w-0 flex-1 bg-transparent px-1.5 text-center text-[11px] font-normal tabular-nums text-foreground outline-none disabled:cursor-not-allowed [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none", "aria-label": "DPI 数值" });
    $[16] = commit;
    $[17] = disabled;
    $[18] = draft;
    $[19] = t9;
  } else {
    t9 = $[19];
  }
  let t10;
  if ($[20] !== step) {
    t10 = () => step(DPI_STEP);
    $[20] = step;
    $[21] = t10;
  } else {
    t10 = $[21];
  }
  let t11;
  if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
    t11 = /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "size-2.5", strokeWidth: 1.5 });
    $[22] = t11;
  } else {
    t11 = $[22];
  }
  let t12;
  if ($[23] !== disabled || $[24] !== t10) {
    t12 = /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", disabled, onClick: t10, className: "flex flex-1 items-center justify-center text-muted-foreground hover:text-foreground disabled:pointer-events-none", "aria-label": "增加 DPI", children: t11 });
    $[23] = disabled;
    $[24] = t10;
    $[25] = t12;
  } else {
    t12 = $[25];
  }
  let t13;
  if ($[26] !== step) {
    t13 = () => step(-DPI_STEP);
    $[26] = step;
    $[27] = t13;
  } else {
    t13 = $[27];
  }
  let t14;
  if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
    t14 = /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "size-2.5", strokeWidth: 1.5 });
    $[28] = t14;
  } else {
    t14 = $[28];
  }
  let t15;
  if ($[29] !== disabled || $[30] !== t13) {
    t15 = /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", disabled, onClick: t13, className: "flex flex-1 items-center justify-center border-t border-black/10 text-muted-foreground hover:text-foreground disabled:pointer-events-none dark:border-white/8", "aria-label": "减少 DPI", children: t14 });
    $[29] = disabled;
    $[30] = t13;
    $[31] = t15;
  } else {
    t15 = $[31];
  }
  let t16;
  if ($[32] !== t12 || $[33] !== t15) {
    t16 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-4 shrink-0 flex-col border-l border-black/10 dark:border-white/8", children: [
      t12,
      t15
    ] });
    $[32] = t12;
    $[33] = t15;
    $[34] = t16;
  } else {
    t16 = $[34];
  }
  let t17;
  if ($[35] !== t16 || $[36] !== t6 || $[37] !== t9) {
    t17 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: t6, children: [
      t9,
      t16
    ] });
    $[35] = t16;
    $[36] = t6;
    $[37] = t9;
    $[38] = t17;
  } else {
    t17 = $[38];
  }
  return t17;
}
function _temp$1(e_1) {
  if (e_1.key === "Enter") {
    e_1.currentTarget.blur();
  }
}
function DpiSliderField(t0) {
  const $ = compilerRuntimeExports.c(45);
  const {
    value,
    onChange,
    disabled,
    label,
    variant: t1
  } = t0;
  const variant = t1 === void 0 ? "default" : t1;
  const percent = dpiToSliderPercent(value);
  const isEditor = variant === "editor";
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = cn("relative min-w-0 flex-1");
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  let t3;
  if ($[1] !== label) {
    t3 = label ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 mb-0.5 block text-[9px] font-normal tracking-wider text-muted-foreground uppercase", children: label }) : null;
    $[1] = label;
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  const t4 = isEditor ? "pt-10 pb-0" : "pt-7 pb-1";
  let t5;
  if ($[3] !== t4) {
    t5 = cn("relative px-0.5", t4);
    $[3] = t4;
    $[4] = t5;
  } else {
    t5 = $[4];
  }
  const t6 = `calc(${percent}% + ${(50 - percent) * 0.06}px)`;
  let t7;
  if ($[5] !== t6) {
    t7 = {
      left: t6
    };
    $[5] = t6;
    $[6] = t7;
  } else {
    t7 = $[6];
  }
  const t8 = isEditor ? "bg-primary text-[10px] font-normal text-primary-foreground" : "rounded-md border border-primary/20 bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground";
  let t9;
  if ($[7] !== t8) {
    t9 = cn("inline-flex min-w-[2.25rem] items-center justify-center rounded px-1.5 py-px tabular-nums", t8);
    $[7] = t8;
    $[8] = t9;
  } else {
    t9 = $[8];
  }
  let t10;
  if ($[9] !== t9 || $[10] !== value) {
    t10 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: t9, children: value });
    $[9] = t9;
    $[10] = value;
    $[11] = t10;
  } else {
    t10 = $[11];
  }
  let t11;
  if ($[12] !== isEditor) {
    t11 = isEditor ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-auto mt-px block size-0 border-x-[3px] border-t-[4px] border-x-transparent border-t-primary", "aria-hidden": true }) : null;
    $[12] = isEditor;
    $[13] = t11;
  } else {
    t11 = $[13];
  }
  let t12;
  if ($[14] !== t10 || $[15] !== t11 || $[16] !== t7) {
    t12 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute top-0 z-10 -translate-x-1/2", style: t7, children: [
      t10,
      t11
    ] });
    $[14] = t10;
    $[15] = t11;
    $[16] = t7;
    $[17] = t12;
  } else {
    t12 = $[17];
  }
  let t13;
  if ($[18] !== percent) {
    t13 = Math.round(percent / 100 * SLIDER_POS_MAX);
    $[18] = percent;
    $[19] = t13;
  } else {
    t13 = $[19];
  }
  let t14;
  if ($[20] !== t13) {
    t14 = [t13];
    $[20] = t13;
    $[21] = t14;
  } else {
    t14 = $[21];
  }
  let t15;
  if ($[22] !== onChange) {
    t15 = (t162) => {
      const [next] = t162;
      return onChange(clampDpi(sliderPercentToDpi(next / SLIDER_POS_MAX * 100)));
    };
    $[22] = onChange;
    $[23] = t15;
  } else {
    t15 = $[23];
  }
  const t16 = isEditor ? "**:data-[slot=slider-track]:h-0.5 **:data-[slot=slider-track]:bg-black/12 **:data-[slot=slider-range]:bg-primary/85 **:data-[slot=slider-thumb]:size-3.5 **:data-[slot=slider-thumb]:border-2 **:data-[slot=slider-thumb]:border-primary/80 **:data-[slot=slider-thumb]:bg-background dark:**:data-[slot=slider-track]:bg-white/12 dark:**:data-[slot=slider-range]:bg-primary/85 dark:**:data-[slot=slider-thumb]:border-primary/70 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-100 **:data-[slot=slider-thumb]:disabled:opacity-70" : "**:data-[slot=slider-track]:h-1.5 **:data-[slot=slider-range]:bg-primary/80 data-[disabled]:opacity-100";
  let t17;
  if ($[24] !== t16) {
    t17 = cn(t16);
    $[24] = t16;
    $[25] = t17;
  } else {
    t17 = $[25];
  }
  let t18;
  if ($[26] !== disabled || $[27] !== t14 || $[28] !== t15 || $[29] !== t17) {
    t18 = /* @__PURE__ */ jsxRuntimeExports.jsx(Slider, { min: 0, max: SLIDER_POS_MAX, step: 1, disabled, value: t14, onValueChange: t15, className: t17 });
    $[26] = disabled;
    $[27] = t14;
    $[28] = t15;
    $[29] = t17;
    $[30] = t18;
  } else {
    t18 = $[30];
  }
  let t19;
  if ($[31] !== disabled || $[32] !== onChange || $[33] !== value) {
    t19 = DPI_SLIDER_MARKS.map((mark) => {
      const markPercent = dpiToSliderPercent(mark);
      const isActive = value === mark;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", disabled, onClick: () => onChange(clampDpi(mark)), className: cn("absolute -translate-x-1/2 text-[8px] font-normal tabular-nums transition-colors", "text-muted-foreground hover:text-primary", "disabled:pointer-events-none disabled:opacity-40", isActive && "font-medium text-primary"), style: {
        left: `${markPercent}%`
      }, "aria-label": `设置为 ${mark} DPI`, children: mark >= 1e3 ? mark.toLocaleString() : mark }, mark);
    });
    $[31] = disabled;
    $[32] = onChange;
    $[33] = value;
    $[34] = t19;
  } else {
    t19 = $[34];
  }
  let t20;
  if ($[35] !== t19) {
    t20 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-2 h-3", children: t19 });
    $[35] = t19;
    $[36] = t20;
  } else {
    t20 = $[36];
  }
  let t21;
  if ($[37] !== t12 || $[38] !== t18 || $[39] !== t20 || $[40] !== t5) {
    t21 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: t5, children: [
      t12,
      t18,
      t20
    ] });
    $[37] = t12;
    $[38] = t18;
    $[39] = t20;
    $[40] = t5;
    $[41] = t21;
  } else {
    t21 = $[41];
  }
  let t22;
  if ($[42] !== t21 || $[43] !== t3) {
    t22 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: t2, children: [
      t3,
      t21
    ] });
    $[42] = t21;
    $[43] = t3;
    $[44] = t22;
  } else {
    t22 = $[44];
  }
  return t22;
}
function bytesToHex(r, g, b) {
  const h = (n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, "0");
  return `#${h(r)}${h(g)}${h(b)}`;
}
function DpiColorPicker(t0) {
  const $ = compilerRuntimeExports.c(34);
  const {
    color,
    disabled: t1,
    onChange,
    ariaLabel: t2,
    className
  } = t0;
  const disabled = t1 === void 0 ? false : t1;
  const ariaLabel = t2 === void 0 ? "选择档位颜色" : t2;
  let t3;
  if ($[0] !== color) {
    t3 = dpiColorToBytes(color);
    $[0] = color;
    $[1] = t3;
  } else {
    t3 = $[1];
  }
  const [r, g, b] = t3;
  let t4;
  if ($[2] !== b || $[3] !== g || $[4] !== onChange || $[5] !== r) {
    t4 = (channel, value) => {
      if (!Number.isFinite(value)) {
        return;
      }
      const clamped = Math.max(0, Math.min(255, Math.round(value)));
      const next = {
        r,
        g,
        b,
        [channel]: clamped
      };
      onChange(bytesToHex(next.r, next.g, next.b));
    };
    $[2] = b;
    $[3] = g;
    $[4] = onChange;
    $[5] = r;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  const setChannel = t4;
  const t5 = disabled && "cursor-not-allowed opacity-50 hover:scale-100";
  let t6;
  if ($[7] !== className || $[8] !== t5) {
    t6 = cn("size-4 shrink-0 rounded-full border border-black/15 shadow-sm transition-transform", "hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/50", "dark:border-white/25", t5, className);
    $[7] = className;
    $[8] = t5;
    $[9] = t6;
  } else {
    t6 = $[9];
  }
  let t7;
  if ($[10] !== color) {
    t7 = {
      backgroundColor: color
    };
    $[10] = color;
    $[11] = t7;
  } else {
    t7 = $[11];
  }
  let t8;
  if ($[12] !== ariaLabel || $[13] !== t6 || $[14] !== t7) {
    t8 = /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", "aria-label": ariaLabel, className: t6, style: t7 });
    $[12] = ariaLabel;
    $[13] = t6;
    $[14] = t7;
    $[15] = t8;
  } else {
    t8 = $[15];
  }
  let t9;
  if ($[16] !== disabled || $[17] !== t8) {
    t9 = /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, disabled, children: t8 });
    $[16] = disabled;
    $[17] = t8;
    $[18] = t9;
  } else {
    t9 = $[18];
  }
  let t10;
  if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
    t10 = {
      width: "100%",
      height: "130px"
    };
    $[19] = t10;
  } else {
    t10 = $[19];
  }
  let t11;
  if ($[20] !== color || $[21] !== onChange) {
    t11 = /* @__PURE__ */ jsxRuntimeExports.jsx(Z, { color, onChange, style: t10 });
    $[20] = color;
    $[21] = onChange;
    $[22] = t11;
  } else {
    t11 = $[22];
  }
  let t12;
  if ($[23] !== b || $[24] !== g || $[25] !== r || $[26] !== setChannel) {
    t12 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["r", "g", "b"].map((channel_0) => {
      const value_0 = channel_0 === "r" ? r : channel_0 === "g" ? g : b;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-[10px] font-semibold", channel_0 === "r" && "text-red-400", channel_0 === "g" && "text-green-400", channel_0 === "b" && "text-blue-400"), children: channel_0.toUpperCase() }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: value_0, inputMode: "numeric", className: "h-7 w-full p-1 text-center text-xs", onChange: (e) => {
          const v = parseInt(e.target.value, 10);
          if (!Number.isNaN(v)) {
            setChannel(channel_0, v);
          }
        }, onFocus: _temp })
      ] }, channel_0);
    }) });
    $[23] = b;
    $[24] = g;
    $[25] = r;
    $[26] = setChannel;
    $[27] = t12;
  } else {
    t12 = $[27];
  }
  let t13;
  if ($[28] !== t11 || $[29] !== t12) {
    t13 = /* @__PURE__ */ jsxRuntimeExports.jsxs(PopoverContent, { align: "start", className: "w-52 space-y-3 p-3", children: [
      t11,
      t12
    ] });
    $[28] = t11;
    $[29] = t12;
    $[30] = t13;
  } else {
    t13 = $[30];
  }
  let t14;
  if ($[31] !== t13 || $[32] !== t9) {
    t14 = /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { children: [
      t9,
      t13
    ] });
    $[31] = t13;
    $[32] = t9;
    $[33] = t14;
  } else {
    t14 = $[33];
  }
  return t14;
}
function _temp(e_0) {
  return e_0.target.select();
}
function DpiActiveEditor(t0) {
  const $ = compilerRuntimeExports.c(40);
  const {
    index,
    preset,
    independentAxis,
    isDeviceActive,
    onToggleEnabled,
    onChangeX,
    onChangeY,
    onChangeColor
  } = t0;
  const controlsDisabled = !preset.enabled;
  const displayX = preset.x;
  let t1;
  if ($[0] !== displayX) {
    t1 = dpiToSliderPercent(displayX);
    $[0] = displayX;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const barPercent = t1;
  const color = preset.color;
  const t2 = !preset.enabled && "border-muted-foreground/35 bg-muted/15 dark:border-white/15 opacity-70";
  let t3;
  if ($[2] !== t2) {
    t3 = cn("rounded-md border px-1.5 py-2.5 sm:py-3", "border-border/60 bg-muted/25", "dark:border-white/10 dark:bg-white/5", t2);
    $[2] = t2;
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  const t4 = !preset.enabled;
  const t5 = `设置 DPI 档位 ${index + 1} 颜色`;
  let t6;
  if ($[4] !== onChangeColor || $[5] !== preset.color || $[6] !== t4 || $[7] !== t5) {
    t6 = /* @__PURE__ */ jsxRuntimeExports.jsx(DpiColorPicker, { color: preset.color, disabled: t4, onChange: onChangeColor, ariaLabel: t5 });
    $[4] = onChangeColor;
    $[5] = preset.color;
    $[6] = t4;
    $[7] = t5;
    $[8] = t6;
  } else {
    t6 = $[8];
  }
  let t7;
  if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
    t7 = cn("flex size-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-normal tabular-nums", "border-black/10 bg-black/4 text-muted-foreground", "dark:border-white/12 dark:bg-white/4 dark:text-muted-foreground/80");
    $[9] = t7;
  } else {
    t7 = $[9];
  }
  const t8 = index + 1;
  let t9;
  if ($[10] !== t8) {
    t9 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: t7, children: t8 });
    $[10] = t8;
    $[11] = t9;
  } else {
    t9 = $[11];
  }
  const t10 = `${barPercent}%`;
  const t11 = preset.enabled ? 1 : 0.55;
  let t12;
  if ($[12] !== color || $[13] !== t10 || $[14] !== t11) {
    t12 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-0.5 w-14 shrink-0 overflow-hidden rounded-full bg-black/10 dark:bg-white/12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 rounded-full", style: {
      width: t10,
      backgroundColor: color,
      opacity: t11
    }, "aria-hidden": true }) });
    $[12] = color;
    $[13] = t10;
    $[14] = t11;
    $[15] = t12;
  } else {
    t12 = $[15];
  }
  let t13;
  if ($[16] !== isDeviceActive || $[17] !== preset.enabled) {
    t13 = preset.enabled && isDeviceActive ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-normal text-emerald-600 dark:text-emerald-400/80 border border-emerald-600/30 bg-emerald-600/8 px-1.5 py-px rounded-md", children: "当前" }) : null;
    $[16] = isDeviceActive;
    $[17] = preset.enabled;
    $[18] = t13;
  } else {
    t13 = $[18];
  }
  const t14 = `启用 DPI 档位 ${index + 1}`;
  let t15;
  if ($[19] !== onToggleEnabled || $[20] !== preset.enabled || $[21] !== t14) {
    t15 = /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: preset.enabled, onCheckedChange: onToggleEnabled, "aria-label": t14, className: "ml-auto" });
    $[19] = onToggleEnabled;
    $[20] = preset.enabled;
    $[21] = t14;
    $[22] = t15;
  } else {
    t15 = $[22];
  }
  let t16;
  if ($[23] !== t12 || $[24] !== t13 || $[25] !== t15 || $[26] !== t6 || $[27] !== t9) {
    t16 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex flex-wrap items-center gap-2", children: [
      t6,
      t9,
      t12,
      t13,
      t15
    ] });
    $[23] = t12;
    $[24] = t13;
    $[25] = t15;
    $[26] = t6;
    $[27] = t9;
    $[28] = t16;
  } else {
    t16 = $[28];
  }
  let t17;
  if ($[29] !== controlsDisabled || $[30] !== independentAxis || $[31] !== onChangeX || $[32] !== onChangeY || $[33] !== preset.x || $[34] !== preset.y) {
    t17 = independentAxis ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 sm:gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DpiSliderField, { label: "X 轴", value: preset.x, disabled: controlsDisabled, onChange: onChangeX, variant: "editor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DpiNumberInput, { value: preset.x, disabled: controlsDisabled, onChange: onChangeX, className: "mt-5 shrink-0" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 sm:gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DpiSliderField, { label: "Y 轴", value: preset.y, disabled: controlsDisabled, onChange: onChangeY, variant: "editor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DpiNumberInput, { value: preset.y, disabled: controlsDisabled, onChange: onChangeY, className: "mt-5 shrink-0" })
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 sm:gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DpiSliderField, { value: preset.x, disabled: controlsDisabled, onChange: onChangeX, variant: "editor" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DpiNumberInput, { value: preset.x, disabled: controlsDisabled, onChange: onChangeX, className: "mt-5 shrink-0" })
    ] });
    $[29] = controlsDisabled;
    $[30] = independentAxis;
    $[31] = onChangeX;
    $[32] = onChangeY;
    $[33] = preset.x;
    $[34] = preset.y;
    $[35] = t17;
  } else {
    t17 = $[35];
  }
  let t18;
  if ($[36] !== t16 || $[37] !== t17 || $[38] !== t3) {
    t18 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: t3, children: [
      t16,
      t17
    ] });
    $[36] = t16;
    $[37] = t17;
    $[38] = t3;
    $[39] = t18;
  } else {
    t18 = $[39];
  }
  return t18;
}
function DpiPanelHeader(t0) {
  const $ = compilerRuntimeExports.c(7);
  const {
    independentAxis,
    onIndependentAxisChange
  } = t0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 items-center gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Crosshair, { className: "size-4 shrink-0 text-muted-foreground", strokeWidth: 1.5 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "truncate text-[13px] font-normal tracking-tight text-foreground", children: "DPI 设置" })
    ] });
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  let t2;
  if ($[1] !== independentAxis || $[2] !== onIndependentAxisChange) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: independentAxis, onCheckedChange: onIndependentAxisChange, "aria-label": "X/Y 轴独立设置" });
    $[1] = independentAxis;
    $[2] = onIndependentAxisChange;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "X/Y 独立" });
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] !== t2) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "top-0 z-10 -mx-0.5 mb-2 shrink-0 px-0.5 pt-0.5 pb-1 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-center justify-between gap-2", children: [
      t1,
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex shrink-0 cursor-pointer items-center gap-1.5 text-[11px] font-normal text-muted-foreground", children: [
        t2,
        t3
      ] })
    ] }) });
    $[5] = t2;
    $[6] = t4;
  } else {
    t4 = $[6];
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
function DpiRadarGauge(t0) {
  const $ = compilerRuntimeExports.c(37);
  const {
    currentDpi,
    className
  } = t0;
  const progress = dpiToRadarProgress(currentDpi);
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
    t3 = describeRingArc(CX, CY, OUTER_R, DPI_RADAR_ARC_SPAN);
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  const middleArcPath = t3;
  let t4;
  if ($[4] !== className) {
    t4 = cn("relative mx-auto aspect-square w-full text-primary", className);
    $[4] = className;
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  let t5;
  if ($[6] !== progressGradient) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsx(ArcProgressGradient, { id: progressGradient, cx: CX, cy: CY, arcSpan: DPI_RADAR_ARC_SPAN, color: "var(--primary)", radius: OUTER_R });
    $[6] = progressGradient;
    $[7] = t5;
  } else {
    t5 = $[7];
  }
  let t6;
  let t7;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: "2", result: "blur" });
    t7 = /* @__PURE__ */ jsxRuntimeExports.jsxs("feMerge", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("feMergeNode", { in: "blur" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("feMergeNode", { in: "SourceGraphic" })
    ] });
    $[8] = t6;
    $[9] = t7;
  } else {
    t6 = $[8];
    t7 = $[9];
  }
  let t8;
  if ($[10] !== radarGlow) {
    t8 = /* @__PURE__ */ jsxRuntimeExports.jsxs("filter", { id: radarGlow, x: "-50%", y: "-50%", width: "200%", height: "200%", children: [
      t6,
      t7
    ] });
    $[10] = radarGlow;
    $[11] = t8;
  } else {
    t8 = $[11];
  }
  const t9 = 0.04 + progress * 0.1;
  let t10;
  if ($[12] !== t9) {
    t10 = /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "65%", stopColor: "var(--primary)", stopOpacity: t9 });
    $[12] = t9;
    $[13] = t10;
  } else {
    t10 = $[13];
  }
  let t11;
  if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
    t11 = /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "var(--primary)", stopOpacity: "0" });
    $[14] = t11;
  } else {
    t11 = $[14];
  }
  let t12;
  if ($[15] !== radarFade || $[16] !== t10) {
    t12 = /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: radarFade, cx: "50%", cy: "50%", r: "50%", children: [
      t10,
      t11
    ] });
    $[15] = radarFade;
    $[16] = t10;
    $[17] = t12;
  } else {
    t12 = $[17];
  }
  const t13 = `url(#${radarFade})`;
  let t14;
  if ($[18] !== t13) {
    t14 = /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: CX, cy: CY, r: OUTER_R + 6, fill: t13 });
    $[18] = t13;
    $[19] = t14;
  } else {
    t14 = $[19];
  }
  let t15;
  let t16;
  let t17;
  if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
    t15 = /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: CX, cy: CY, r: OUTER_R, fill: "none", stroke: "var(--primary)", strokeWidth: "1", strokeDasharray: RING_STROKE_DASHARRAY, strokeOpacity: 0.12 });
    t16 = /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: CX, cy: CY, r: INNER_R, fill: "none", stroke: "var(--primary)", strokeWidth: "1.2", strokeOpacity: 0.1 });
    t17 = /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: CX, cy: CY, r: OUTER_RING_R, fill: "none", stroke: "var(--primary)", strokeWidth: "0.5", strokeOpacity: 0.08 });
    $[20] = t15;
    $[21] = t16;
    $[22] = t17;
  } else {
    t15 = $[20];
    t16 = $[21];
    t17 = $[22];
  }
  const t18 = `url(#${progressGradient})`;
  const t19 = `url(#${dashedArcMask})`;
  const t20 = `url(#${radarGlow})`;
  let t21;
  if ($[23] !== t18 || $[24] !== t19 || $[25] !== t20) {
    t21 = /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: middleArcPath, fill: "none", stroke: t18, strokeWidth: "1.5", strokeLinecap: "round", strokeDasharray: RING_STROKE_DASHARRAY, mask: t19, filter: t20 });
    $[23] = t18;
    $[24] = t19;
    $[25] = t20;
    $[26] = t21;
  } else {
    t21 = $[26];
  }
  const t22 = CX;
  const t23 = CY;
  const t24 = OUTER_RING_R;
  const t25 = "none";
  const t26 = `url(#${progressGradient})`;
  const t27 = "1";
  const t28 = "round";
  const t29 = ringDash(progress, OUTER_RING_R, DPI_RADAR_ARC_SPAN);
  const t30 = `url(#${radarGlow})`;
  let t31;
  if ($[27] !== t22 || $[28] !== t23 || $[29] !== t24 || $[30] !== t26 || $[31] !== t29 || $[32] !== t30) {
    t31 = /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: t22, cy: t23, r: t24, fill: t25, stroke: t26, strokeWidth: t27, strokeLinecap: t28, strokeDasharray: t29, transform: `rotate(-90 ${CX} ${CY})`, filter: t30, className: PROGRESS_RING_CLASS });
    $[27] = t22;
    $[28] = t23;
    $[29] = t24;
    $[30] = t26;
    $[31] = t29;
    $[32] = t30;
    $[33] = t31;
  } else {
    t31 = $[33];
  }
  let t32;
  if ($[34] !== progress || $[35] !== radarGlow) {
    t32 = DPI_RADAR_MARKS.map((mark) => {
      const angle = DPI_RADAR_MARK_ANGLES[mark];
      const dot = polarToXY(angle, OUTER_R);
      const label = polarToXY(angle, LABEL_R);
      const markProgress = dpiToRadarProgress(mark);
      const selected = Math.abs(markProgress - progress) < 0.08;
      const reached = markProgress <= progress + 5e-3;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: dot.x, cy: dot.y, r: selected ? 3.2 : 2.2, className: cn("transition-[r,opacity] duration-300 ease-out motion-reduce:transition-none", selected ? "fill-primary opacity-100" : reached ? "fill-primary opacity-70" : "fill-primary opacity-25"), filter: `url(#${radarGlow})` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: label.x, y: label.y, textAnchor: "middle", dominantBaseline: "middle", className: cn("text-[7px] font-normal tabular-nums transition-[fill,opacity] duration-300 ease-out motion-reduce:transition-none", selected ? "fill-primary font-medium opacity-100 dark:fill-violet-100" : reached ? "fill-primary opacity-75" : "fill-muted-foreground opacity-55"), children: mark >= 1e3 ? mark.toLocaleString() : mark })
      ] }, mark);
    });
    $[34] = progress;
    $[35] = radarGlow;
    $[36] = t32;
  } else {
    t32 = $[36];
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: t4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 200 200", className: "size-full overflow-visible", "aria-hidden": true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
      t5,
      t8,
      t12,
      /* @__PURE__ */ jsxRuntimeExports.jsx("mask", { id: dashedArcMask, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: middleArcPath, fill: "none", stroke: "white", strokeWidth: "4", strokeLinecap: "round", strokeDasharray: ringDash(progress, OUTER_R, DPI_RADAR_ARC_SPAN), className: PROGRESS_RING_CLASS }) })
    ] }),
    t14,
    t15,
    t16,
    t17,
    t21,
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: CX, cy: CY, r: INNER_R, fill: "none", stroke: `url(#${progressGradient})`, strokeWidth: "1.8", strokeLinecap: "round", strokeDasharray: ringDash(progress, INNER_R, DPI_RADAR_ARC_SPAN), transform: `rotate(-90 ${CX} ${CY})`, filter: `url(#${radarGlow})`, className: PROGRESS_RING_CLASS }),
    t31,
    t32
  ] }) });
}
function DpiHeroPanel(t0) {
  const $ = compilerRuntimeExports.c(24);
  const {
    currentDpi,
    activeIndex,
    onSelectStage
  } = t0;
  const deviceConfig = useDeviceConfig();
  const {
    resolvedTheme
  } = z();
  const rectBackgroundImageMap = deviceConfig?.rectBackgroundImageMap;
  const imageSrc = rectBackgroundImageMap ? resolvedTheme === "dark" ? rectBackgroundImageMap.dark : rectBackgroundImageMap.light : void 0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = cn("flex min-h-0 flex-col rounded-lg border px-2.5 py-3 sm:px-3 sm:py-4", "border-border/50 bg-muted/20", "dark:border-white/8 dark:bg-white/3");
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  let t2;
  let t3;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-normal uppercase tracking-widest text-muted-foreground/70", children: "设备当前 DPI" });
    t3 = cn("mt-0.5 font-light text-4xl leading-none tracking-tight sm:text-[3rem]", "text-primary drop-shadow-[0_0_10px_var(--glow-primary)]", "dark:drop-shadow-[0_0_22px_var(--glow-primary)]");
    $[1] = t2;
    $[2] = t3;
  } else {
    t2 = $[1];
    t3 = $[2];
  }
  let t4;
  if ($[3] !== currentDpi) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 text-center", children: [
      t2,
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: t3, "aria-live": "polite", children: currentDpi })
    ] });
    $[3] = currentDpi;
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  if ($[5] !== currentDpi) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsx(DpiRadarGauge, { currentDpi, className: "absolute inset-0 m-auto hidden max-w-[min(100%,260px)] md:block" });
    $[5] = currentDpi;
    $[6] = t5;
  } else {
    t5 = $[6];
  }
  let t6;
  if ($[7] !== imageSrc) {
    t6 = imageSrc ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: imageSrc, alt: "", className: cn("relative z-10 w-[min(68%,180px)] object-contain md:mt-6 md:w-[min(72%,200px)]", "drop-shadow-[0_6px_16px_rgba(0,0,0,0.05)]"), draggable: false }) : null;
    $[7] = imageSrc;
    $[8] = t6;
  } else {
    t6 = $[8];
  }
  let t7;
  if ($[9] !== t5 || $[10] !== t6) {
    t7 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto my-2 flex min-h-[120px] w-full max-w-[220px] flex-1 items-center justify-center md:my-3 md:min-h-[190px] md:max-w-[250px]", children: [
      t5,
      t6
    ] });
    $[9] = t5;
    $[10] = t6;
    $[11] = t7;
  } else {
    t7 = $[11];
  }
  let t8;
  let t9;
  if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1.5 text-center text-[10px] font-normal text-muted-foreground", children: "切换当前档位" });
    t9 = cn("flex max-w-full gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none]", "md:grid md:max-w-none md:grid-cols-4 md:gap-x-10 md:gap-y-3 md:overflow-visible md:pb-0", "[&::-webkit-scrollbar]:hidden");
    $[12] = t8;
    $[13] = t9;
  } else {
    t8 = $[12];
    t9 = $[13];
  }
  let t10;
  if ($[14] !== activeIndex || $[15] !== onSelectStage) {
    t10 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: t9, children: Array.from({
      length: DPI_PRESET_COUNT
    }, (_, index) => {
      const selected = activeIndex === index;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => onSelectStage(index), className: cn("flex size-8 shrink-0 items-center justify-center rounded-full border text-[11px] font-normal tabular-nums transition-colors duration-150", "border-border/60 bg-background/60 text-foreground/70 hover:border-border hover:text-foreground", "dark:border-white/12 dark:bg-white/4 dark:text-foreground/60", selected && "border-primary bg-primary/10 font-medium text-primary dark:bg-primary/15 dark:text-primary"), "aria-label": `选择档位 ${index + 1} 为设备当前生效档`, "aria-current": selected ? "true" : void 0, children: index + 1 }, index);
    }) });
    $[14] = activeIndex;
    $[15] = onSelectStage;
    $[16] = t10;
  } else {
    t10 = $[16];
  }
  let t11;
  if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
    t11 = /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-center text-[10px] text-muted-foreground", children: "高亮为鼠标正在使用的档位" });
    $[17] = t11;
  } else {
    t11 = $[17];
  }
  let t12;
  if ($[18] !== t10) {
    t12 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex shrink-0 flex-col items-center pt-1", children: [
      t8,
      t10,
      t11
    ] });
    $[18] = t10;
    $[19] = t12;
  } else {
    t12 = $[19];
  }
  let t13;
  if ($[20] !== t12 || $[21] !== t4 || $[22] !== t7) {
    t13 = /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: t1, children: [
      t4,
      t7,
      t12
    ] });
    $[20] = t12;
    $[21] = t4;
    $[22] = t7;
    $[23] = t13;
  } else {
    t13 = $[23];
  }
  return t13;
}
function DpiStageListItem(t0) {
  const $ = compilerRuntimeExports.c(42);
  const {
    index,
    preset,
    independentAxis,
    isDeviceActive: t1,
    expanded: t2,
    onSelect
  } = t0;
  const isDeviceActive = t1 === void 0 ? false : t1;
  const expanded = t2 === void 0 ? false : t2;
  const displayX = preset.x;
  let t3;
  if ($[0] !== displayX) {
    t3 = dpiToSliderPercent(displayX);
    $[0] = displayX;
    $[1] = t3;
  } else {
    t3 = $[1];
  }
  const barPercent = t3;
  const color = preset.color;
  const t4 = !preset.enabled && "border-muted-foreground/30 bg-muted/10 dark:border-white/14 dark:bg-white/3";
  let t5;
  if ($[2] !== t4) {
    t5 = cn("group flex w-full items-center gap-2.5 rounded-md border px-1.5 py-2.5 text-left transition-colors", "border-border/55 bg-background/40 hover:bg-muted/30", "dark:border-white/10 dark:bg-white/4 dark:hover:bg-white/7", t4);
    $[2] = t4;
    $[3] = t5;
  } else {
    t5 = $[3];
  }
  const t6 = `展开档位 ${index + 1}，X 轴 ${displayX} DPI${preset.enabled ? "" : ""}`;
  let t7;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t7 = cn("flex size-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-normal tabular-nums", "border-black/12 bg-black/5 text-foreground/80", "dark:border-white/14 dark:bg-white/6 dark:text-foreground/85");
    $[4] = t7;
  } else {
    t7 = $[4];
  }
  const t8 = index + 1;
  let t9;
  if ($[5] !== t8) {
    t9 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: t7, children: t8 });
    $[5] = t8;
    $[6] = t9;
  } else {
    t9 = $[6];
  }
  const t10 = `${barPercent}%`;
  const t11 = preset.enabled ? 1 : 0.5;
  let t12;
  if ($[7] !== color || $[8] !== t10 || $[9] !== t11) {
    t12 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-1 w-14 shrink-0 overflow-hidden rounded-full bg-black/10 dark:bg-white/12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 rounded-full", style: {
      width: t10,
      backgroundColor: color,
      opacity: t11
    }, "aria-hidden": true }) });
    $[7] = color;
    $[8] = t10;
    $[9] = t11;
    $[10] = t12;
  } else {
    t12 = $[10];
  }
  let t13;
  if ($[11] !== isDeviceActive) {
    t13 = isDeviceActive ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-normal text-emerald-600 dark:text-emerald-400/80 border border-emerald-600/30 bg-emerald-600/8 px-1.5 py-px rounded-md", children: "当前" }) : null;
    $[11] = isDeviceActive;
    $[12] = t13;
  } else {
    t13 = $[12];
  }
  let t14;
  if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
    t14 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 flex-1" });
    $[13] = t14;
  } else {
    t14 = $[13];
  }
  let t15;
  if ($[14] !== displayX || $[15] !== independentAxis) {
    t15 = independentAxis ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-normal text-muted-foreground", children: "X " }),
      displayX
    ] }) : displayX;
    $[14] = displayX;
    $[15] = independentAxis;
    $[16] = t15;
  } else {
    t15 = $[16];
  }
  let t16;
  if ($[17] !== t15) {
    t16 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-[11px] font-medium tabular-nums text-foreground", children: t15 });
    $[17] = t15;
    $[18] = t16;
  } else {
    t16 = $[18];
  }
  const t17 = preset.enabled ? "bg-emerald-500 dark:bg-emerald-400" : "bg-muted-foreground/50";
  let t18;
  if ($[19] !== t17) {
    t18 = cn("size-1.5 shrink-0 rounded-full", t17);
    $[19] = t17;
    $[20] = t18;
  } else {
    t18 = $[20];
  }
  let t19;
  if ($[21] !== color || $[22] !== preset.enabled) {
    t19 = preset.enabled ? {
      backgroundColor: color
    } : void 0;
    $[21] = color;
    $[22] = preset.enabled;
    $[23] = t19;
  } else {
    t19 = $[23];
  }
  let t20;
  if ($[24] !== t18 || $[25] !== t19) {
    t20 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: t18, style: t19, "aria-hidden": true });
    $[24] = t18;
    $[25] = t19;
    $[26] = t20;
  } else {
    t20 = $[26];
  }
  const t21 = expanded && "rotate-180";
  let t22;
  if ($[27] !== t21) {
    t22 = cn("size-3 shrink-0 text-muted-foreground/55 transition-transform duration-200 group-hover:text-muted-foreground", t21);
    $[27] = t21;
    $[28] = t22;
  } else {
    t22 = $[28];
  }
  let t23;
  if ($[29] !== t22) {
    t23 = /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: t22, strokeWidth: 1.5 });
    $[29] = t22;
    $[30] = t23;
  } else {
    t23 = $[30];
  }
  let t24;
  if ($[31] !== expanded || $[32] !== onSelect || $[33] !== t12 || $[34] !== t13 || $[35] !== t16 || $[36] !== t20 || $[37] !== t23 || $[38] !== t5 || $[39] !== t6 || $[40] !== t9) {
    t24 = /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: onSelect, "aria-expanded": expanded, className: t5, "aria-label": t6, children: [
      t9,
      t12,
      t13,
      t14,
      t16,
      t20,
      t23
    ] });
    $[31] = expanded;
    $[32] = onSelect;
    $[33] = t12;
    $[34] = t13;
    $[35] = t16;
    $[36] = t20;
    $[37] = t23;
    $[38] = t5;
    $[39] = t6;
    $[40] = t9;
    $[41] = t24;
  } else {
    t24 = $[41];
  }
  return t24;
}
function MouseDpiPage() {
  const [presets, setPresets] = reactExports.useState(null);
  const [activeIndex, setActiveIndex] = reactExports.useState(null);
  const [editingIndex, setEditingIndex] = reactExports.useState(null);
  const [independentAxis, setIndependentAxis] = reactExports.useState(false);
  const [isReady, setIsReady] = reactExports.useState(false);
  const device = useDevice();
  const initialSyncDone = useKeyboardDriverSyncStore((s) => s.initialSyncDone);
  const setFunctionalAreaInfo = useFunctionalAreaStore((s_0) => s_0.setFunctionalAreaInfo);
  const getCurrentFunctionalAreaData = useFunctionalAreaStore((s_1) => s_1.getCurrentFunctionalAreaData);
  const currentFunctionalAreaData = useFunctionalAreaStore((s_2) => s_2.currentFunctionalAreaData);
  const skipWriteRef = reactExports.useRef(false);
  const cancelWriteRef = reactExports.useRef(() => {
  });
  const {
    run: scheduleWrite,
    cancel: cancelScheduleWrite
  } = useDebounceFn((nextPresets, nextActive, nextIndependent) => {
    const source = useFunctionalAreaStore.getState().currentFunctionalAreaData;
    if (!source.length) return;
    const next = writeDpiPresetsToFunctionalArea(source, nextPresets, nextActive, nextIndependent);
    void (async () => {
      try {
        await setFunctionalAreaInfo(next);
        await getCurrentFunctionalAreaData();
      } catch (error) {
        console.error("写入 DPI 功能区失败:", error);
      }
    })();
  }, {
    wait: 350
  });
  cancelWriteRef.current = cancelScheduleWrite;
  reactExports.useEffect(() => {
    if (!device || !initialSyncDone) return;
    setIsReady(false);
    void (async () => {
      await useDeviceInfoStore.getState().getDeviceInfoData();
      await getCurrentFunctionalAreaData();
    })();
  }, [device, initialSyncDone, getCurrentFunctionalAreaData]);
  reactExports.useEffect(() => {
    if (currentFunctionalAreaData.length === 0) return;
    const parsed = readDpiPresetsFromFunctionalArea(currentFunctionalAreaData);
    cancelWriteRef.current();
    skipWriteRef.current = true;
    setPresets(parsed.presets);
    setIndependentAxis(parsed.independentAxis);
    setActiveIndex((prev) => {
      if (prev !== parsed.activeIndex) {
        setEditingIndex(parsed.activeIndex);
      }
      return parsed.activeIndex;
    });
    setIsReady(true);
  }, [currentFunctionalAreaData]);
  reactExports.useEffect(() => {
    if (!isReady || presets === null || activeIndex === null) return;
    if (skipWriteRef.current) {
      skipWriteRef.current = false;
      return;
    }
    scheduleWrite(presets, activeIndex, independentAxis);
  }, [isReady, presets, activeIndex, independentAxis, scheduleWrite]);
  reactExports.useEffect(() => {
    return () => {
      cancelScheduleWrite();
    };
  }, [cancelScheduleWrite]);
  const updatePreset = reactExports.useCallback((index, patch) => {
    setPresets((prev_0) => {
      if (!prev_0) return prev_0;
      return prev_0.map((item, i) => {
        if (i !== index) return item;
        const next_0 = {
          ...item,
          ...patch
        };
        if (!independentAxis && patch.x != null) next_0.y = patch.x;
        if (!independentAxis && patch.y != null) next_0.x = patch.y;
        return next_0;
      });
    });
  }, [independentAxis]);
  const handleAxisValueChange = reactExports.useCallback((index_0, axis, value) => {
    if (axis === "x") {
      updatePreset(index_0, independentAxis ? {
        x: value
      } : {
        x: value,
        y: value
      });
      return;
    }
    updatePreset(index_0, independentAxis ? {
      y: value
    } : {
      x: value,
      y: value
    });
  }, [independentAxis, updatePreset]);
  const selectActiveStage = reactExports.useCallback((index_1) => {
    setActiveIndex(index_1);
    setEditingIndex(index_1);
  }, []);
  const handleToggleEnabled = reactExports.useCallback((index_2, enabled) => {
    if (enabled) {
      updatePreset(index_2, {
        enabled: true
      });
      setActiveIndex(index_2);
      setEditingIndex(index_2);
      return;
    }
    if (!presets) return;
    const usable = presets.slice(0, DPI_PRESET_COUNT);
    const enabledCount = usable.filter((p) => p.enabled).length;
    if (enabledCount <= 1 && presets[index_2]?.enabled) {
      toast.error("必须保留一个dpi档位");
      return;
    }
    setPresets((prev_1) => prev_1 ? prev_1.map((item_0, i_0) => i_0 === index_2 ? {
      ...item_0,
      enabled: false
    } : item_0) : prev_1);
    const total = usable.length;
    for (let step = 1; step < total; step++) {
      const candidate = (index_2 + step) % total;
      if (usable[candidate]?.enabled) {
        setActiveIndex(candidate);
        setEditingIndex(candidate);
        break;
      }
    }
  }, [presets, activeIndex, updatePreset]);
  if (!initialSyncDone || !isReady || presets === null || activeIndex === null || editingIndex === null) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(MouseDriverPageLoading, {});
  }
  const currentDpi = presets[activeIndex].x;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full min-h-0 flex-col overflow-hidden p-3 sm:p-4 md:p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("effect-card relative flex min-h-0 flex-1 overflow-hidden rounded-xl border", "border-border/50 bg-background/75", "dark:border-white/8 dark:bg-[oklch(0.16_0.035_270/0.72)]"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 grid min-h-0 flex-1 grid-cols-1 gap-2 p-2 sm:gap-3 sm:p-3 md:grid-cols-[minmax(200px,34%)_minmax(0,1fr)] md:gap-4 md:p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DpiHeroPanel, { currentDpi, activeIndex, onSelectStage: selectActiveStage }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "flex min-h-0 min-w-0 flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DpiPanelHeader, { independentAxis, onIndependentAxisChange: setIndependentAxis }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-0 flex-1 overflow-y-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/15 dark:bg-black/10", children: presets.slice(0, DPI_PRESET_COUNT).map((preset, index_3) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-[1%]", children: editingIndex === index_3 ? /* @__PURE__ */ jsxRuntimeExports.jsx(DpiActiveEditor, { index: index_3, preset, independentAxis, isDeviceActive: activeIndex === index_3, onToggleEnabled: (enabled_0) => handleToggleEnabled(index_3, enabled_0), onChangeX: (value_0) => handleAxisValueChange(index_3, "x", value_0), onChangeY: (value_1) => handleAxisValueChange(index_3, "y", value_1), onChangeColor: (color) => updatePreset(index_3, {
          color
        }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(DpiStageListItem, { index: index_3, preset, independentAxis, isDeviceActive: activeIndex === index_3, onSelect: () => setEditingIndex(index_3) }) }, index_3)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 flex items-center gap-1.5 px-1 text-[11px] leading-relaxed text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "mt-px size-3 shrink-0", strokeWidth: 1.5 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "点击档位行编辑预设；左侧按钮切换设备当前生效档位。修改后会自动同步到设备。" })
        ] })
      ] })
    ] })
  ] }) }) });
}
export {
  MouseDpiPage as default
};
