import { r as reactExports, k as compilerRuntimeExports, n as useNavigate, q as useLocation, j as jsxRuntimeExports, O as Outlet } from "./vendor-react-CCnVVUMc.js";
import { b0 as useActiveDeviceStore, cg as useKeyboardDriverSyncStore, al as useElectronDeviceRegistryStore, dl as is24GDevice, dm as useFirmwareUpgradeSession, b7 as deviceManager, dn as getDongleAndKeyboardStatus, a2 as toast, aL as useDeviceInfoStore, dp as useKeyTravelStore, c9 as useKeyRectIndexStore, dq as useAdvancedKeyStore, a$ as useAuthorizedDevicesContext, dr as getCorrectedDeviceDriverPath, ds as runFullRefreshWithDriverSync, dt as FuzzyText, cP as Keyboard, ax as ElectricBorder } from "./index-CMbUujkZ.js";
import PixelBlast from "./PixelBlast-fhYQNrhy.js";
import { U as Unplug } from "./unplug-uim349Nr.js";
import "./vendor-three-Cg879EW4.js";
const POLL_MS = 2e3;
function useWireless24GSleepPoll(onSessionCleared) {
  const connectedDeviceId = useActiveDeviceStore((s) => s.connectedDeviceId);
  const initialSyncDone = useKeyboardDriverSyncStore((s_0) => s_0.initialSyncDone);
  const onSessionClearedRef = reactExports.useRef(onSessionCleared);
  onSessionClearedRef.current = onSessionCleared;
  reactExports.useEffect(() => {
    if (!connectedDeviceId || !initialSyncDone) return;
    const info = useActiveDeviceStore.getState().activeDeviceInfo;
    const records = useElectronDeviceRegistryStore.getState().records;
    if (!info || !is24GDevice(info, records)) return;
    let leaving = false;
    let inFlight = false;
    const markOffline = async () => {
      if (leaving) return;
      leaving = true;
      const id = useActiveDeviceStore.getState().connectedDeviceId;
      if (id) {
        await deviceManager.disconnectDevice(id).catch(() => {
        });
      }
      useActiveDeviceStore.getState().reset();
      useKeyboardDriverSyncStore.getState().setInitialSyncDone(false);
      toast.error("请唤醒设备");
      onSessionClearedRef.current?.();
    };
    const timer = window.setInterval(() => {
      void (async () => {
        if (leaving || inFlight) return;
        if (useFirmwareUpgradeSession.getState().firmwareUploading) return;
        const id_0 = useActiveDeviceStore.getState().connectedDeviceId;
        if (!id_0) return;
        inFlight = true;
        try {
          const device = deviceManager.getDevice(id_0);
          if (!device?.getConnectionStatus()) {
            await markOffline();
            return;
          }
          const {
            online
          } = await getDongleAndKeyboardStatus(device, 2e3);
          if (leaving) return;
          if (!online) await markOffline();
        } catch {
          if (!leaving) await markOffline();
        } finally {
          inFlight = false;
        }
      })();
    }, POLL_MS);
    return () => {
      window.clearInterval(timer);
      leaving = true;
    };
  }, [connectedDeviceId, initialSyncDone]);
}
function beginDriverFullResync() {
  useKeyboardDriverSyncStore.getState().setInitialSyncDone(false);
  useDeviceInfoStore.setState((state) => ({
    deviceInfoData: {
      ...state.deviceInfoData,
      _productId: 0
    }
  }));
  useKeyTravelStore.setState({
    keyTravelArea: [],
    defaultKeyTravelArea: []
  });
  useKeyRectIndexStore.getState().clearIndices();
  useAdvancedKeyStore.setState({
    advancedKeyMatrix: []
  });
}
const NoDeviceView = () => {
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
};
const DeviceDriverPage = () => {
  const $ = compilerRuntimeExports.c(19);
  const navigate = useNavigate();
  const {
    pathname
  } = useLocation();
  const {
    refresh: refreshAuthorizedDevices
  } = useAuthorizedDevicesContext();
  const connectedDeviceId = useActiveDeviceStore(_temp);
  const activeDeviceInfo = useActiveDeviceStore(_temp2);
  const showUploadOverlay = useFirmwareUpgradeSession(_temp3);
  const firmwareUploading = useFirmwareUpgradeSession(_temp4);
  const fullRefreshGenerationRef = reactExports.useRef(0);
  const holdForFirmwareUpgrade = showUploadOverlay || firmwareUploading;
  let t0;
  let t1;
  if ($[0] !== connectedDeviceId || $[1] !== holdForFirmwareUpgrade || $[2] !== navigate) {
    t0 = () => {
      if (connectedDeviceId) {
        return;
      }
      beginDriverFullResync();
      if (holdForFirmwareUpgrade) {
        return;
      }
      navigate("/hub", {
        replace: true
      });
    };
    t1 = [connectedDeviceId, holdForFirmwareUpgrade, navigate];
    $[0] = connectedDeviceId;
    $[1] = holdForFirmwareUpgrade;
    $[2] = navigate;
    $[3] = t0;
    $[4] = t1;
  } else {
    t0 = $[3];
    t1 = $[4];
  }
  reactExports.useLayoutEffect(t0, t1);
  let t2;
  if ($[5] !== refreshAuthorizedDevices) {
    t2 = () => {
      refreshAuthorizedDevices();
    };
    $[5] = refreshAuthorizedDevices;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  useWireless24GSleepPoll(t2);
  let t3;
  let t4;
  if ($[7] !== activeDeviceInfo || $[8] !== connectedDeviceId || $[9] !== navigate || $[10] !== pathname) {
    t3 = () => {
      if (!connectedDeviceId) {
        return;
      }
      const device = activeDeviceInfo ?? deviceManager.getDeviceInfo(connectedDeviceId) ?? null;
      if (!device) {
        return;
      }
      const corrected = getCorrectedDeviceDriverPath(pathname, device);
      if (corrected && corrected !== pathname) {
        navigate(corrected, {
          replace: true
        });
      }
    };
    t4 = [connectedDeviceId, activeDeviceInfo, pathname, navigate];
    $[7] = activeDeviceInfo;
    $[8] = connectedDeviceId;
    $[9] = navigate;
    $[10] = pathname;
    $[11] = t3;
    $[12] = t4;
  } else {
    t3 = $[11];
    t4 = $[12];
  }
  reactExports.useEffect(t3, t4);
  let t5;
  let t6;
  if ($[13] !== connectedDeviceId) {
    t5 = () => {
      if (!connectedDeviceId) {
        return;
      }
      const generation = fullRefreshGenerationRef.current = fullRefreshGenerationRef.current + 1;
      beginDriverFullResync();
      (async () => {
        const deviceInfo = useActiveDeviceStore.getState().activeDeviceInfo ?? deviceManager.getDeviceInfo(connectedDeviceId);
        if (deviceInfo) {
          try {
            await useElectronDeviceRegistryStore.getState().loadDeviceDetail(deviceInfo);
          } catch (t72) {
            const e = t72;
            console.error("[DeviceDriver] 设备详情加载失败:", e);
          }
        }
        if (fullRefreshGenerationRef.current !== generation) {
          return;
        }
        await runFullRefreshWithDriverSync(connectedDeviceId, () => fullRefreshGenerationRef.current !== generation);
      })().catch(_temp5);
    };
    t6 = [connectedDeviceId];
    $[13] = connectedDeviceId;
    $[14] = t5;
    $[15] = t6;
  } else {
    t5 = $[14];
    t6 = $[15];
  }
  reactExports.useEffect(t5, t6);
  if (!connectedDeviceId) {
    let t72;
    if ($[16] !== holdForFirmwareUpgrade) {
      t72 = holdForFirmwareUpgrade ? /* @__PURE__ */ jsxRuntimeExports.jsx(NoDeviceView, {}) : null;
      $[16] = holdForFirmwareUpgrade;
      $[17] = t72;
    } else {
      t72 = $[17];
    }
    return t72;
  }
  let t7;
  if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full min-h-0 [&>.ka-wrapper]:h-full [&>.ka-wrapper]:min-h-0 [&>.ka-wrapper>.ka-content]:h-full [&>.ka-wrapper>.ka-content]:min-h-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
    $[18] = t7;
  } else {
    t7 = $[18];
  }
  return t7;
};
function _temp(s) {
  return s.connectedDeviceId;
}
function _temp2(s_0) {
  return s_0.activeDeviceInfo;
}
function _temp3(s_1) {
  return s_1.showUploadOverlay;
}
function _temp4(s_2) {
  return s_2.firmwareUploading;
}
function _temp5(e_0) {
  return console.error("[KeyboardDriver] 初始化失败:", e_0);
}
export {
  DeviceDriverPage as default
};
