import { k as compilerRuntimeExports, j as jsxRuntimeExports, r as reactExports } from "./vendor-react-CCnVVUMc.js";
import { aL as useDeviceInfoStore, eX as useFunctionalAreaPatch, a2 as toast, eY as CardHeader, eZ as CardTitle, e_ as DormancyOption, e$ as Wifi, f0 as Bluetooth, d5 as Card, f1 as performanceGlassCardClass, d6 as CardContent, c1 as useFunctionalAreaStore, F as cn, f2 as Skeleton } from "./index-CMbUujkZ.js";
const MOUSE_SLEEP_BYTES = {
  "bluetooth-backlight": [6, 7],
  // BLE_SLEEP1_TIME_L/H（预留）
  "2.4g-backlight": [2, 3],
  // 24G_SLEEP1_TIME_L/H（预留）
  "2.4g-sleep": [4, 5],
  // D24G_SLEEP2_TIME_L/H
  "bluetooth-sleep": [8, 9],
  // BLE_SLEEP2_TIME_L/H
  "wired-backlight": [10, 11]
  // USB_SLEEP1_TIME_L/H（预留）
};
function writeSleepMinutesAsSecondsWord(data, lowByteIndex, minutes) {
  const seconds = minutes * 60;
  data[lowByteIndex] = seconds & 255;
  data[lowByteIndex + 1] = seconds >> 8 & 255;
}
function PerformancePowerCard() {
  const $ = compilerRuntimeExports.c(17);
  const deviceType = useDeviceInfoStore(_temp$1);
  const productId = useDeviceInfoStore(_temp2$1);
  const patch = useFunctionalAreaPatch();
  const deviceReady = productId !== 0;
  let t0;
  if ($[0] !== deviceReady || $[1] !== deviceType) {
    t0 = deviceReady && [0, 1, 2, 3, 4].includes(deviceType);
    $[0] = deviceReady;
    $[1] = deviceType;
    $[2] = t0;
  } else {
    t0 = $[2];
  }
  const showWired = t0;
  let t1;
  if ($[3] !== deviceReady || $[4] !== deviceType) {
    t1 = deviceReady && [1, 3, 4].includes(deviceType);
    $[3] = deviceReady;
    $[4] = deviceType;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  const showBluetooth = t1;
  let t2;
  if ($[6] !== deviceReady || $[7] !== deviceType) {
    t2 = deviceReady && [2, 3, 4].includes(deviceType);
    $[6] = deviceReady;
    $[7] = deviceType;
    $[8] = t2;
  } else {
    t2 = $[8];
  }
  const show24G = t2;
  const showSleepBlock = showWired || show24G || showBluetooth;
  let t3;
  if ($[9] !== patch) {
    t3 = async (kind, value) => {
      const [lowByteIndex] = MOUSE_SLEEP_BYTES[kind];
      try {
        await patch((data) => {
          writeSleepMinutesAsSecondsWord(data, lowByteIndex, value);
        });
      } catch {
        toast.error("保存失败");
      }
    };
    $[9] = patch;
    $[10] = t3;
  } else {
    t3 = $[10];
  }
  const handleTimeSelection = t3;
  let t4;
  if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { id: "performance-power-title", className: "text-base", children: "性能/功耗" }) });
    $[11] = t4;
  } else {
    t4 = $[11];
  }
  let t5;
  if ($[12] !== handleTimeSelection || $[13] !== showSleepBlock) {
    t5 = showSleepBlock ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { id: "performance-sleep-legend", className: "text-sm font-medium", children: "睡眠设置" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6", "aria-labelledby": "performance-sleep-legend", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DormancyOption, { kind: "2.4g-sleep", loIdx: MOUSE_SLEEP_BYTES["2.4g-sleep"][0], hiIdx: MOUSE_SLEEP_BYTES["2.4g-sleep"][1], title: "2.4G进入睡眠时间", onSelect: (v) => void handleTimeSelection("2.4g-sleep", v), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wifi, { className: "size-3", "aria-hidden": true }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DormancyOption, { kind: "bluetooth-sleep", loIdx: MOUSE_SLEEP_BYTES["bluetooth-sleep"][0], hiIdx: MOUSE_SLEEP_BYTES["bluetooth-sleep"][1], title: "蓝牙进入睡眠时间", onSelect: (v_0) => void handleTimeSelection("bluetooth-sleep", v_0), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bluetooth, { className: "size-3", "aria-hidden": true }) })
      ] })
    ] }) : null;
    $[12] = handleTimeSelection;
    $[13] = showSleepBlock;
    $[14] = t5;
  } else {
    t5 = $[14];
  }
  let t6;
  if ($[15] !== t5) {
    t6 = /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: performanceGlassCardClass, children: [
      t4,
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "flex flex-col gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2", children: t5 }) })
    ] });
    $[15] = t5;
    $[16] = t6;
  } else {
    t6 = $[16];
  }
  return t6;
}
function _temp2$1(s_0) {
  return s_0.deviceInfoData._productId;
}
function _temp$1(s) {
  return s.deviceInfoData.deviceType;
}
const cardSuspenseFallback = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex flex-col gap-4 rounded-2xl p-6", performanceGlassCardClass), role: "status", "aria-live": "polite", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-28" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full max-w-sm" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 pt-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-9 w-16" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-9 w-16" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-9 w-20" })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-full max-w-xs" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "加载中…" })
] });
const PerformancePage = () => {
  const $ = compilerRuntimeExports.c(6);
  const isDataReady = useFunctionalAreaStore(_temp);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = [];
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  reactExports.useEffect(_temp2, t0);
  let t1;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = cn("relative flex h-full min-h-0 overflow-hidden", "bg-[radial-gradient(circle_at_18%_4%,oklch(0.84_0.08_220/0.24),transparent_32%),radial-gradient(circle_at_86%_10%,oklch(0.78_0.12_330/0.16),transparent_34%),linear-gradient(135deg,oklch(0.99_0.01_250),oklch(0.96_0.025_275)_56%,oklch(0.98_0.018_210))]", "dark:bg-[radial-gradient(circle_at_20%_0%,oklch(0.58_0.12_255/0.18),transparent_34%),radial-gradient(circle_at_86%_8%,oklch(0.62_0.18_315/0.16),transparent_34%),linear-gradient(135deg,oklch(0.09_0.03_265),oklch(0.055_0.024_275)_58%,oklch(0.075_0.028_250))]");
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] !== isDataReady) {
    t2 = isDataReady ? /* @__PURE__ */ jsxRuntimeExports.jsx(PerformancePowerCard, {}) : cardSuspenseFallback;
    $[2] = isDataReady;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== t2) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: t1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "min-h-0 flex-1 overflow-auto p-6", tabIndex: -1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex w-full max-w-xl flex-col gap-8", children: t2 }) }) });
    $[4] = t2;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  return t3;
};
function _temp(s) {
  return s.currentFunctionalAreaData.length > 0;
}
function _temp2() {
  useFunctionalAreaStore.getState().getCurrentFunctionalAreaData();
}
export {
  PerformancePage as default
};
