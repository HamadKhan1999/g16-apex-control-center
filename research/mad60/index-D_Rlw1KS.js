import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-CCnVVUMc.js";
import { dc as db, b$ as useActiveProductId, aL as useDeviceInfoStore, c0 as useKeyboardStore, aM as useLightStore, aR as codeValues, k as keyboardLayoutMap, dd as getDeviceConfigByProductId, ca as resolveMusicLayout, h as highLowToDecimal, aS as formatToHex, de as pushMusicFrame, df as pushLogoSideMusicFrame, dg as ensureLogoSideSyncFlagBridge, dh as prefetchLogoSideLayout, aq as reactActivationExports, c1 as useFunctionalAreaStore, di as LOGO_SIDE_SYNC_MUSIC_INDEX, b0 as useActiveDeviceStore, b7 as deviceManager, ay as Music, F as cn, bz as LoaderCircle, a8 as X, J as Switch, am as isElectronEnvironment, $ as Separator, aA as AlertDialog, aB as AlertDialogContent, aC as AlertDialogHeader, aD as AlertDialogTitle, aE as AlertDialogDescription, aF as AlertDialogFooter, aG as AlertDialogCancel, aH as AlertDialogAction, c4 as syncLogoSideConfigToActiveWorker, dj as resetMusicFrameSink, a as usePreviewDeviceStore, b4 as isGameInteractionActive, b5 as stopLightingModes, b1 as stopSelectedMatrixPlayback, dk as resumePreviewCommandsForDevice } from "./index-CMbUujkZ.js";
const musicModes = [{
  value: "waveform",
  label: "波形跳动"
}, {
  value: "centralBeatBars",
  label: "中央律动"
}, {
  value: "rowBeatColumns",
  label: "行音柱"
}, {
  value: "soundWave",
  label: "音波扩散"
}, {
  value: "heartJumping",
  label: "万键穿心"
}, {
  value: "sLineJump",
  label: "S线律动"
}];
const THEME_COLORS = {
  "neon-cyan": {
    name: "neon-cyan",
    displayName: "霓虹青",
    leftColor: [0, 255, 255],
    // 青色
    middleColor: [0, 255, 128],
    // 青绿色
    rightColor: [0, 128, 255],
    // 蓝色
    description: "经典霓虹青色，清新动感"
  },
  "neon-purple": {
    name: "neon-purple",
    displayName: "霓虹紫",
    leftColor: [128, 0, 255],
    // 紫色
    middleColor: [255, 0, 255],
    // 洋红
    rightColor: [255, 0, 128],
    // 粉红
    description: "神秘紫色，科技感十足"
  },
  "neon-green": {
    name: "neon-green",
    displayName: "霓虹绿",
    leftColor: [0, 255, 0],
    // 绿色
    middleColor: [128, 255, 0],
    // 黄绿色
    rightColor: [255, 255, 0],
    // 黄色
    description: "活力绿色，充满生机"
  },
  "neon-orange": {
    name: "neon-orange",
    displayName: "霓虹橙",
    leftColor: [255, 128, 0],
    // 橙色
    middleColor: [255, 64, 0],
    // 红橙色
    rightColor: [255, 0, 0],
    // 红色
    description: "温暖橙色，热情似火"
  },
  "neon-blue": {
    name: "neon-blue",
    displayName: "霓虹蓝",
    leftColor: [0, 128, 255],
    // 蓝色
    middleColor: [0, 64, 255],
    // 深蓝
    rightColor: [128, 0, 255],
    // 紫蓝
    description: "深邃蓝色，宁静致远"
  },
  "neon-pink": {
    name: "neon-pink",
    displayName: "霓虹粉",
    leftColor: [255, 0, 128],
    // 粉红
    middleColor: [255, 0, 255],
    // 洋红
    rightColor: [128, 0, 255],
    // 紫色
    description: "甜美粉色，浪漫梦幻"
  },
  "neon-yellow": {
    name: "neon-yellow",
    displayName: "霓虹黄",
    leftColor: [255, 255, 0],
    // 黄色
    middleColor: [255, 128, 0],
    // 橙黄
    rightColor: [255, 0, 0],
    // 红色
    description: "明亮黄色，活力四射"
  },
  "neon-rainbow": {
    name: "neon-rainbow",
    displayName: "霓虹彩虹",
    leftColor: [255, 0, 0],
    // 红色
    middleColor: [0, 255, 0],
    // 绿色
    rightColor: [0, 0, 255],
    // 蓝色
    description: "彩虹色彩，绚丽多彩"
  },
  "neon-electric": {
    name: "neon-electric",
    displayName: "电光蓝",
    leftColor: [0, 255, 255],
    // 青色
    middleColor: [255, 255, 255],
    // 白色
    rightColor: [0, 128, 255],
    // 蓝色
    description: "电光效果，未来科技"
  },
  "neon-fire": {
    name: "neon-fire",
    displayName: "火焰红",
    leftColor: [255, 0, 0],
    // 红色
    middleColor: [255, 128, 0],
    // 橙色
    rightColor: [255, 255, 0],
    // 黄色
    description: "火焰色彩，激情燃烧"
  }
};
const DEFAULT_CUSTOM = {
  c1: [0, 255, 255],
  // 青色
  c2: [0, 220, 200],
  c3: [0, 255, 128],
  // 青绿
  c4: [0, 200, 220],
  c5: [0, 160, 255],
  c6: [0, 128, 255],
  // 蓝色
  c7: [80, 80, 255]
};
const rgbToHex = (rgb) => {
  return "#" + rgb.map((v) => Math.max(0, Math.min(255, v)).toString(16).padStart(2, "0")).join("");
};
const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return [0, 0, 0];
  return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
};
const serializeThemeColor = (colors) => {
  return JSON.stringify(colors);
};
const parseStoredCustomColors = (stored) => {
  try {
    const parsed = JSON.parse(stored);
    if (parsed.c1 && parsed.c7) {
      return parsed;
    }
    if (parsed.left && parsed.middle && parsed.right) {
      return interpolateTo7(parsed.left, parsed.middle, parsed.right);
    }
  } catch {
  }
  const preset = THEME_COLORS[stored] || THEME_COLORS["neon-cyan"];
  return interpolateTo7(preset.leftColor, preset.middleColor, preset.rightColor);
};
const interpolateTo7 = (left, middle, right) => {
  const lerp = (a, b, t) => [Math.round(a[0] * (1 - t) + b[0] * t), Math.round(a[1] * (1 - t) + b[1] * t), Math.round(a[2] * (1 - t) + b[2] * t)];
  return {
    c1: left,
    c2: lerp(left, middle, 1 / 3),
    c3: lerp(left, middle, 2 / 3),
    c4: middle,
    c5: lerp(middle, right, 1 / 3),
    c6: lerp(middle, right, 2 / 3),
    c7: right
  };
};
const DEFAULT_THEME_COLORS = DEFAULT_CUSTOM;
async function getMusicSettings(productId) {
  const record = await db.musicSettings.get(productId);
  return record ?? null;
}
async function saveMusicMode(productId, musicMode) {
  const existing = await db.musicSettings.get(productId);
  if (existing) {
    await db.musicSettings.update(productId, {
      musicMode,
      updatedAt: Date.now()
    });
  } else {
    await db.musicSettings.put({
      productId,
      musicMode,
      musicModeSettings: {},
      updatedAt: Date.now()
    });
  }
}
async function saveMusicModeParams(productId, mode, paramName, value) {
  const existing = await db.musicSettings.get(productId);
  const settings = existing?.musicModeSettings ?? {};
  const modeParams = settings[mode] ?? {};
  settings[mode] = {
    ...modeParams,
    [paramName]: value
  };
  if (existing) {
    await db.musicSettings.update(productId, {
      musicModeSettings: settings,
      updatedAt: Date.now()
    });
  } else {
    await db.musicSettings.put({
      productId,
      musicMode: mode,
      musicModeSettings: settings,
      updatedAt: Date.now()
    });
  }
}
const FFT_SIZE = 2048;
const MusicEffect = () => {
  const newProductId = useActiveProductId();
  const version = useDeviceInfoStore((state) => state.deviceInfoData.version);
  const defaultKeyRect = useKeyboardStore((state) => state.defaultKeyRect);
  const lightRect = useLightStore((state) => state.lightRectData);
  const openMusicService = useLightStore((state) => state.openMusicService);
  const setOpenMusicService = useLightStore((state) => state.setOpenMusicService);
  const setAudioContext = useLightStore((state) => state.setAudioContext);
  const setMusicWorker = useLightStore((state) => state.setMusicWorker);
  const setMusicStream = useLightStore((state) => state.setMusicStream);
  const setMusicAnalyser = useLightStore((state) => state.setMusicAnalyser);
  const closeMusicService = useLightStore((state) => state.closeMusicService);
  const deviceType = useDeviceInfoStore((state) => state.deviceInfoData.deviceType);
  const codeValue = codeValues;
  const disconnectAutoRef = reactExports.useRef(false);
  const [loading, setLoading] = reactExports.useState(false);
  const [isHovering, setIsHovering] = reactExports.useState(false);
  const [startConflictOpen, setStartConflictOpen] = reactExports.useState(false);
  const [startConflictLabels, setStartConflictLabels] = reactExports.useState([]);
  const [musicMode, setMusicMode] = reactExports.useState("centralBeatBars");
  const dbModeSettingsRef = reactExports.useRef({});
  const currentModeSettings = reactExports.useMemo(() => {
    const modeSettings = dbModeSettingsRef.current[musicMode];
    return {
      lowAmplitude: modeSettings?.lowAmplitude ?? 100,
      midAmplitude: modeSettings?.midAmplitude ?? 100,
      highAmplitude: modeSettings?.highAmplitude ?? 100,
      brightness: modeSettings?.brightness ?? 100,
      themeColor: modeSettings?.themeColor ?? serializeThemeColor(DEFAULT_THEME_COLORS),
      smoothness: modeSettings?.smoothness ?? 100,
      spectrumMappingType: modeSettings?.spectrumMappingType ?? "gradient",
      heartColor: modeSettings?.heartColor ?? "#ff2d55"
    };
  }, [musicMode]);
  const [lowAmplitude, setLowAmplitude] = reactExports.useState(currentModeSettings.lowAmplitude);
  const [midAmplitude, setMidAmplitude] = reactExports.useState(currentModeSettings.midAmplitude);
  const [highAmplitude, setHighAmplitude] = reactExports.useState(currentModeSettings.highAmplitude);
  const [brightness, setBrightness] = reactExports.useState(currentModeSettings.brightness);
  const [themeColor, setThemeColor] = reactExports.useState(currentModeSettings.themeColor);
  const [smoothness, setSmoothness] = reactExports.useState(currentModeSettings.smoothness);
  const [heartColor, setHeartColor] = reactExports.useState(currentModeSettings.heartColor ?? "#ff2d55");
  const musicModeRef = reactExports.useRef(musicMode);
  const themeColorRef = reactExports.useRef(themeColor);
  const heartColorRef = reactExports.useRef(heartColor);
  const lightParamsRef = reactExports.useRef({
    lowAmplitude,
    midAmplitude,
    highAmplitude,
    brightness,
    smoothness
  });
  const isSendingRef = reactExports.useRef(false);
  const workerRef = reactExports.useRef(null);
  const hexToKeyCodeMap = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    Object.entries(codeValue).forEach(([code, hexArray]) => {
      if (Array.isArray(hexArray) && hexArray.length >= 2) {
        const key = hexArray.map((v) => v.toLocaleUpperCase()).join(",");
        map.set(key, code);
      }
    });
    return map;
  }, [codeValue]);
  const musicKeyboardLayout = reactExports.useMemo(() => {
    if (!newProductId) return [];
    const fromLegacyMap = keyboardLayoutMap[newProductId]?.musicLayout;
    if (fromLegacyMap) return fromLegacyMap;
    const config = getDeviceConfigByProductId(newProductId);
    return resolveMusicLayout(config?.musicLayout, defaultKeyRect);
  }, [newProductId, defaultKeyRect]);
  const layoutPositionMap = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    musicKeyboardLayout.forEach((row, rowIndex) => {
      row.forEach((key, colIndex) => {
        if (key) map.set(key, {
          row: rowIndex,
          col: colIndex
        });
      });
    });
    return map;
  }, [musicKeyboardLayout]);
  const isHasMutilSpace = reactExports.useMemo(() => {
    const isHasSpace = musicKeyboardLayout[musicKeyboardLayout.length - 1].filter((key) => key === "Space");
    return isHasSpace.length > 1;
  }, [musicKeyboardLayout.length]);
  const keyPosition = reactExports.useMemo(() => {
    const result = Array.from({
      length: musicKeyboardLayout.length
    }, () => []);
    if ([4, 5].includes(deviceType) || newProductId && [12753, 12797].includes(newProductId) && version > "1.20" || isHasMutilSpace) {
      let currentOffset = 0;
      musicKeyboardLayout.forEach((row, rowIndex) => {
        row.forEach((key, colIndex) => {
          if (key && !key.includes("-undefined")) {
            const step = 2;
            const foundKeyIndex = currentOffset;
            currentOffset += step;
            if (foundKeyIndex + 1 < lightRect.length) {
              const lowByte = lightRect[foundKeyIndex];
              const highByte = lightRect[foundKeyIndex + 1];
              const val = highLowToDecimal(highByte, lowByte);
              result[rowIndex].push({
                // 用布局列号，保证 Insert 等最右键落在高频段
                col: colIndex,
                index: val * 3,
                code: key
              });
            }
          }
        });
      });
      return result;
    } else {
      const len = defaultKeyRect.length;
      for (let i = 0; i < len; i += 3) {
        if (i + 2 >= len) break;
        const hexKey = [formatToHex(defaultKeyRect[i]), formatToHex(defaultKeyRect[i + 1]), formatToHex(defaultKeyRect[i + 2])].map((v) => v.toLocaleUpperCase()).join(",");
        const foundKey = hexToKeyCodeMap.get(hexKey);
        if (foundKey) {
          const position = layoutPositionMap.get(foundKey);
          if (position && position.row < result.length) {
            result[position.row].push({
              col: position.col,
              index: i,
              code: foundKey
            });
          }
        }
      }
    }
    return result;
  }, [defaultKeyRect, hexToKeyCodeMap, layoutPositionMap, musicKeyboardLayout, lightRect, deviceType, version, newProductId]);
  console.log("keyPosition", keyPosition);
  const keyPositionMaxIndex = reactExports.useMemo(() => {
    const flat = keyPosition.flat();
    if (flat.length === 0) return 0;
    return Math.max(...flat.map((item) => item.index)) + 3;
  }, [keyPosition]);
  console.log("keyPositionMaxIndex", keyPositionMaxIndex);
  const totalColumns = reactExports.useMemo(() => {
    let maxCol = 0;
    let hasKey = false;
    for (const row of musicKeyboardLayout) {
      for (let col = 0; col < row.length; col++) {
        const key = row[col];
        if (key && !String(key).includes("-undefined")) {
          hasKey = true;
          maxCol = Math.max(maxCol, col);
        }
      }
    }
    return hasKey ? maxCol + 1 : 0;
  }, [musicKeyboardLayout]);
  const buildConfig = () => ({
    keyPosition,
    totalColumns,
    totalRows: keyPosition.length,
    musicMode: musicModeRef.current,
    themeColor: themeColorRef.current,
    heartColor: heartColorRef.current,
    productId: newProductId ?? 0,
    lightParams: {
      ...lightParamsRef.current
    },
    keyPositionMaxIndex
  });
  const syncLogoSideConfigToWorker = async () => {
    await syncLogoSideConfigToActiveWorker({
      musicMode: musicModeRef.current,
      themeColor: themeColorRef.current,
      heartColor: heartColorRef.current,
      productId: newProductId ?? 0,
      lightParams: {
        ...lightParamsRef.current
      }
    });
  };
  const stopCapture = () => {
    closeMusicService();
    workerRef.current = null;
    isSendingRef.current = false;
    resetMusicFrameSink();
    const matrixPlaying = useLightStore.getState().selectedMatrixAnimationId !== null;
    const previewActive = usePreviewDeviceStore.getState().previewDeviceIds.size > 0;
    if (matrixPlaying || previewActive || isGameInteractionActive()) return;
    if (window.lightEngine) {
      const currentDeviceId = useActiveDeviceStore.getState().connectedDeviceId;
      if (currentDeviceId) {
        window.lightEngine.removeDevice(currentDeviceId).catch(() => {
        });
      }
      window.lightEngine.stop().catch(() => {
      });
      window.lightEngine.unloadScene().catch(() => {
      });
    }
  };
  const setupAudioProcessing = (stream) => {
    setMusicStream(stream);
    stream.getVideoTracks()[0].onended = stopCapture;
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    setAudioContext(audioCtx);
    const source = audioCtx.createMediaStreamSource(stream);
    const analyser = audioCtx.createAnalyser();
    analyser.fftSize = FFT_SIZE;
    analyser.smoothingTimeConstant = 0;
    source.connect(analyser);
    setMusicAnalyser(analyser);
    const worker = new Worker(new URL(
      /* @vite-ignore */
      "" + new URL("music.worker-BBfl7HzL.js", import.meta.url).href,
      import.meta.url
    ), {
      type: "module"
    });
    setMusicWorker(worker);
    workerRef.current = worker;
    worker.onmessage = async (e) => {
      const msg = e.data;
      if (msg.type === "tick") {
        const latestAudioCtx = useLightStore.getState().audioContext;
        if (latestAudioCtx?.state === "suspended") {
          latestAudioCtx.resume();
        }
        const latestAnalyser = useLightStore.getState().musicAnalyser;
        if (!latestAnalyser) return;
        const buf = new Uint8Array(latestAnalyser.frequencyBinCount);
        latestAnalyser.getByteFrequencyData(buf);
        worker.postMessage({
          type: "audio-data",
          frequencyData: buf.buffer
        }, [buf.buffer]);
      } else if (msg.type === "light-data") {
        pushMusicFrame(msg.data);
      } else if (msg.type === "logo-side-light-data") {
        pushLogoSideMusicFrame(msg.data);
      }
    };
    ensureLogoSideSyncFlagBridge();
    worker.postMessage({
      type: "update-config",
      config: buildConfig()
    });
    void syncLogoSideConfigToWorker();
    prefetchLogoSideLayout();
    worker.postMessage({
      type: "start"
    });
  };
  const startCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: {
          displaySurface: "monitor"
        },
        audio: true
      });
      if (stream.getAudioTracks().length === 0) {
        alert("请勾选分享音频！");
        return;
      }
      await stopSelectedMatrixPlayback();
      const currentDeviceId = useActiveDeviceStore.getState().connectedDeviceId;
      if (currentDeviceId) {
        resumePreviewCommandsForDevice(currentDeviceId);
      }
      setOpenMusicService(true);
      if (window.lightEngine) {
        const currentDeviceId2 = useActiveDeviceStore.getState().connectedDeviceId;
        if (currentDeviceId2) {
          const hidDevice = deviceManager.getDevice(currentDeviceId2);
          const deviceInfo = hidDevice?.getDeviceInfo();
          const {
            deviceType: dt
          } = useDeviceInfoStore.getState().deviceInfoData;
          const dl = dt === 4 || dt === 5 ? 63 : 31;
          await window.lightEngine.loadScene({
            mode: "music-compute",
            canvasWidth: 430,
            canvasHeight: 275
          });
          await window.lightEngine.addDevice({
            deviceId: currentDeviceId2,
            path: deviceInfo?.path ?? "",
            dataLength: dl,
            maxIndex: 0,
            keyPositions: []
          });
        }
      }
      setupAudioProcessing(stream);
    } catch (err) {
      console.error(err);
    }
  };
  reactExports.useEffect(() => {
    const {
      openMusicService: isOpen,
      musicWorker
    } = useLightStore.getState();
    if (isOpen && musicWorker) {
      workerRef.current = musicWorker;
      isSendingRef.current = false;
      musicWorker.onmessage = async (e) => {
        const msg = e.data;
        if (msg.type === "tick") {
          const latestAudioCtx = useLightStore.getState().audioContext;
          if (latestAudioCtx?.state === "suspended") {
            latestAudioCtx.resume();
          }
          const latestAnalyser = useLightStore.getState().musicAnalyser;
          if (!latestAnalyser) return;
          const buf = new Uint8Array(latestAnalyser.frequencyBinCount);
          latestAnalyser.getByteFrequencyData(buf);
          musicWorker.postMessage({
            type: "audio-data",
            frequencyData: buf.buffer
          }, [buf.buffer]);
        } else if (msg.type === "light-data") {
          pushMusicFrame(msg.data);
        } else if (msg.type === "logo-side-light-data") {
          pushLogoSideMusicFrame(msg.data);
        }
      };
      ensureLogoSideSyncFlagBridge();
      musicWorker.postMessage({
        type: "update-config",
        config: buildConfig()
      });
      void syncLogoSideConfigToWorker();
      prefetchLogoSideLayout();
      musicWorker.postMessage({
        type: "start"
      });
    }
  }, []);
  reactActivationExports.useActivate(() => {
    const {
      openMusicService: isOpen,
      musicWorker
    } = useLightStore.getState();
    if (isOpen && musicWorker) {
      workerRef.current = musicWorker;
      isSendingRef.current = false;
      musicWorker.onmessage = async (e) => {
        const msg = e.data;
        if (msg.type === "tick") {
          const latestAudioCtx = useLightStore.getState().audioContext;
          if (latestAudioCtx?.state === "suspended") {
            latestAudioCtx.resume();
          }
          const latestAnalyser = useLightStore.getState().musicAnalyser;
          if (!latestAnalyser) return;
          const buf = new Uint8Array(latestAnalyser.frequencyBinCount);
          latestAnalyser.getByteFrequencyData(buf);
          musicWorker.postMessage({
            type: "audio-data",
            frequencyData: buf.buffer
          }, [buf.buffer]);
        } else if (msg.type === "light-data") {
          pushMusicFrame(msg.data);
        } else if (msg.type === "logo-side-light-data") {
          pushLogoSideMusicFrame(msg.data);
        }
      };
      ensureLogoSideSyncFlagBridge();
      musicWorker.postMessage({
        type: "update-config",
        config: buildConfig()
      });
      void syncLogoSideConfigToWorker();
      prefetchLogoSideLayout();
      musicWorker.postMessage({
        type: "start"
      });
    }
  });
  const logoSideSyncFlag = useFunctionalAreaStore((s) => s.currentFunctionalAreaData[LOGO_SIDE_SYNC_MUSIC_INDEX] === 1);
  reactExports.useEffect(() => {
    if (!openMusicService) return;
    ensureLogoSideSyncFlagBridge();
    void syncLogoSideConfigToWorker();
  }, [logoSideSyncFlag, openMusicService, newProductId]);
  reactExports.useEffect(() => {
    if (!newProductId) return;
    getMusicSettings(newProductId).then((settings) => {
      if (!settings) return;
      dbModeSettingsRef.current = settings.musicModeSettings ?? {};
      const mode = settings.musicMode || "centralBeatBars";
      setMusicMode(mode);
      const params = dbModeSettingsRef.current[mode];
      if (params) {
        setLowAmplitude(params.lowAmplitude ?? 100);
        setMidAmplitude(params.midAmplitude ?? 100);
        setHighAmplitude(params.highAmplitude ?? 100);
        setBrightness(params.brightness ?? 100);
        setThemeColor(params.themeColor ?? serializeThemeColor(DEFAULT_THEME_COLORS));
        setSmoothness(params.smoothness ?? 100);
        setHeartColor(params.heartColor ?? "#ff2d55");
      }
    });
  }, [newProductId]);
  const connectedDeviceId = useActiveDeviceStore((s) => s.connectedDeviceId);
  reactExports.useEffect(() => {
    if (!connectedDeviceId) return;
    const device = deviceManager.getDevice(connectedDeviceId);
    if (!device) return;
    (async () => {
      const {
        deviceInfoData
      } = useDeviceInfoStore.getState();
      if (!deviceInfoData._productId) {
        await useDeviceInfoStore.getState().getDeviceInfoData();
      }
      const {
        lightRectData
      } = useLightStore.getState();
      if (!lightRectData || lightRectData.length === 0) {
        await useLightStore.getState().getLightRectData();
      }
      const {
        defaultKeyRect: currentKeyRect
      } = useKeyboardStore.getState();
      if (!currentKeyRect || currentKeyRect.length === 0) {
        await useKeyboardStore.getState().getDefaultKeyRect();
      }
    })();
  }, [connectedDeviceId]);
  const handleCheckedChange = async (value) => {
    if (value) {
      const connectedDeviceId2 = useActiveDeviceStore.getState().connectedDeviceId;
      const labels = [];
      if (isGameInteractionActive()) {
        labels.push("游戏交互");
      }
      if (connectedDeviceId2 && usePreviewDeviceStore.getState().isDeviceInPreview(connectedDeviceId2)) {
        labels.push("素材预览");
      }
      if (useLightStore.getState().selectedMatrixAnimationId) {
        labels.push("矩阵背光动画");
      }
      if (labels.length > 0) {
        setStartConflictLabels(labels);
        setStartConflictOpen(true);
        return;
      }
      await startCapture();
    } else {
      stopCapture();
    }
  };
  const handleConfirmMusicStart = async () => {
    setStartConflictOpen(false);
    await stopLightingModes(["game"]);
    const connectedDeviceId2 = useActiveDeviceStore.getState().connectedDeviceId;
    if (connectedDeviceId2) {
      usePreviewDeviceStore.getState().requestRemoveFromPreview(connectedDeviceId2);
    }
    await startCapture();
  };
  const handleCancelMusicStart = () => {
    setStartConflictOpen(false);
    setStartConflictLabels([]);
  };
  const handleDisconnectAuto = () => {
    disconnectAutoRef.current = true;
    setLoading(false);
    setIsHovering(false);
  };
  const handleEffectChange = (effect) => {
    setMusicMode(effect);
    musicModeRef.current = effect;
    const newModeSettings = dbModeSettingsRef.current[effect];
    setLowAmplitude(newModeSettings?.lowAmplitude ?? 100);
    setMidAmplitude(newModeSettings?.midAmplitude ?? 100);
    setHighAmplitude(newModeSettings?.highAmplitude ?? 100);
    setBrightness(newModeSettings?.brightness ?? 100);
    setThemeColor(newModeSettings?.themeColor ?? serializeThemeColor(DEFAULT_THEME_COLORS));
    setSmoothness(newModeSettings?.smoothness ?? 100);
    setHeartColor(newModeSettings?.heartColor ?? "#ff2d55");
    if (newProductId) {
      saveMusicMode(newProductId, effect);
    }
    workerRef.current?.postMessage({
      type: "update-config",
      config: {
        musicMode: effect
      }
    });
  };
  const updateModeSettings = (paramName, value) => {
    if (!newProductId) return;
    if (!dbModeSettingsRef.current[musicMode]) {
      dbModeSettingsRef.current[musicMode] = {};
    }
    dbModeSettingsRef.current[musicMode][paramName] = value;
    saveMusicModeParams(newProductId, musicMode, paramName, value);
  };
  const handleThemeColorChange = (newThemeColor) => {
    setThemeColor(newThemeColor);
    updateModeSettings("themeColor", newThemeColor);
  };
  const handleHeartColorChange = (newColor) => {
    setHeartColor(newColor);
    heartColorRef.current = newColor;
    updateModeSettings("heartColor", newColor);
    workerRef.current?.postMessage({
      type: "update-config",
      config: {
        heartColor: newColor
      }
    });
  };
  const prevOpenMusicServiceRef = reactExports.useRef(openMusicService);
  reactExports.useEffect(() => {
    const wasOpen = prevOpenMusicServiceRef.current;
    prevOpenMusicServiceRef.current = openMusicService;
    if (wasOpen && !openMusicService) {
      stopCapture();
    }
  }, [openMusicService]);
  reactExports.useEffect(() => {
    musicModeRef.current = musicMode;
  }, [musicMode]);
  reactExports.useEffect(() => {
    themeColorRef.current = themeColor;
    workerRef.current?.postMessage({
      type: "update-config",
      config: {
        themeColor
      }
    });
  }, [themeColor]);
  reactExports.useEffect(() => {
    heartColorRef.current = heartColor;
  }, [heartColor]);
  reactExports.useEffect(() => {
    if (currentModeSettings) {
      setLowAmplitude(currentModeSettings.lowAmplitude);
      setMidAmplitude(currentModeSettings.midAmplitude);
      setHighAmplitude(currentModeSettings.highAmplitude);
      setBrightness(currentModeSettings.brightness);
      setSmoothness(currentModeSettings.smoothness);
    }
  }, [currentModeSettings]);
  reactExports.useEffect(() => {
    lightParamsRef.current.lowAmplitude = lowAmplitude;
    workerRef.current?.postMessage({
      type: "update-config",
      config: {
        lightParams: {
          ...lightParamsRef.current
        }
      }
    });
  }, [lowAmplitude]);
  reactExports.useEffect(() => {
    lightParamsRef.current.midAmplitude = midAmplitude;
    workerRef.current?.postMessage({
      type: "update-config",
      config: {
        lightParams: {
          ...lightParamsRef.current
        }
      }
    });
  }, [midAmplitude]);
  reactExports.useEffect(() => {
    lightParamsRef.current.highAmplitude = highAmplitude;
    workerRef.current?.postMessage({
      type: "update-config",
      config: {
        lightParams: {
          ...lightParamsRef.current
        }
      }
    });
  }, [highAmplitude]);
  reactExports.useEffect(() => {
    lightParamsRef.current.smoothness = smoothness;
    workerRef.current?.postMessage({
      type: "update-config",
      config: {
        lightParams: {
          ...lightParamsRef.current
        }
      }
    });
  }, [smoothness]);
  reactExports.useEffect(() => {
    lightParamsRef.current.brightness = brightness;
    workerRef.current?.postMessage({
      type: "update-config",
      config: {
        lightParams: {
          ...lightParamsRef.current
        }
      }
    });
  }, [brightness]);
  reactExports.useEffect(() => {
    if (workerRef.current) {
      workerRef.current.postMessage({
        type: "update-config",
        config: {
          keyPosition,
          totalColumns,
          totalRows: keyPosition.length,
          keyPositionMaxIndex
        }
      });
    }
  }, [keyPosition, totalColumns, keyPositionMaxIndex]);
  const sectionTitleClass = "text-sm font-semibold text-foreground/85 tracking-[0.2px] select-none leading-none";
  const paramLabelClass = "text-[13px] font-medium text-muted-foreground";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2.5 flex flex-col gap-2.5 h-full overflow-y-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Music, { className: "size-3.5 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn(sectionTitleClass, "mr-5"), children: "音乐律动" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-medium text-muted-foreground select-none", children: openMusicService ? "运行中" : "未启动" }),
          loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative cursor-pointer", onMouseEnter: () => setIsHovering(true), onMouseLeave: () => setIsHovering(false), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "size-4 text-primary animate-spin" }),
            isHovering && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-background/80 rounded-full", onClick: handleDisconnectAuto, children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-3.5 text-destructive" }) })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { onCheckedChange: handleCheckedChange, checked: openMusicService, className: "scale-90 origin-right" })
        ] })
      ] }),
      !openMusicService ? (
        /* ── 未连接提示 ── */
        !isElectronEnvironment() && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 rounded-lg border border-border/60 bg-card/60 px-4 py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Music, { className: "size-4 text-muted-foreground/50 mt-0.5 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-muted-foreground leading-relaxed", children: '请在弹出的窗口中选择要共享的窗口或屏幕，并开启系统音频开关，然后点击"共享"。' })
        ] })
      ) : (
        /* ── 已连接：模式 + 颜色 ── */
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col flex-1 min-w-0 gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: sectionTitleClass, children: "模式" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-6 gap-2", children: musicModes.map((item, index) => {
              const isSelected = musicMode === item.value;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => handleEffectChange(item.value), className: cn("group relative flex items-center justify-center rounded-lg px-3 py-2", "border transition-all duration-200 ease-out cursor-pointer", "hover:shadow-md hover:-translate-y-px", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", isSelected ? "border-primary/60 bg-primary/6 shadow-sm shadow-primary/10" : "border-border/60 bg-card/60 hover:border-primary/30 hover:bg-primary/3"), style: {
                animationDelay: `${index * 25}ms`
              }, children: [
                isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-lg bg-linear-to-r from-primary/4 to-transparent pointer-events-none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("relative text-[13px] font-medium tracking-wide transition-colors duration-200 truncate", isSelected ? "text-primary" : "text-foreground/80 group-hover:text-foreground"), children: item.label })
              ] }, item.value);
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { orientation: "vertical", className: "mt-5 self-stretch h-auto min-h-32" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col flex-1 min-w-0 gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground/85 tracking-[0.2px] select-none leading-none", children: "参数" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-w-0 gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: paramLabelClass, children: "主题颜色" }) }),
              (() => {
                const c = parseStoredCustomColors(themeColor);
                const stops = [c.c1, c.c2, c.c3, c.c4, c.c5, c.c6, c.c7].map((rgb) => `rgb(${rgb.join(",")})`).join(", ");
                return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2.5 w-full rounded-full border border-border/40 shadow-inner", style: {
                  background: `linear-gradient(to right, ${stops})`
                } });
              })(),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-muted-foreground/70 leading-none select-none", children: "七个锚点对应键盘从左到右的渐变色，点击任意色块修改该位置颜色" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-1.5", children: [{
                key: "c1",
                label: "1"
              }, {
                key: "c2",
                label: "2"
              }, {
                key: "c3",
                label: "3"
              }, {
                key: "c4",
                label: "4"
              }, {
                key: "c5",
                label: "5"
              }, {
                key: "c6",
                label: "6"
              }, {
                key: "c7",
                label: "7"
              }].map(({
                key,
                label
              }) => {
                const colors = parseStoredCustomColors(themeColor);
                const hexVal = rgbToHex(colors[key]);
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex flex-col items-center gap-1 cursor-pointer group", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("relative w-full h-6 rounded-md overflow-hidden", "border border-border/50 shadow-sm", "transition-all duration-200", "group-hover:border-primary/50 group-hover:shadow-md group-hover:scale-105"), style: {
                    backgroundColor: hexVal
                  }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "color", value: hexVal, onChange: (e) => {
                    const newRgb = hexToRgb(e.target.value);
                    const updated = {
                      ...colors,
                      [key]: newRgb
                    };
                    handleThemeColorChange(serializeThemeColor(updated));
                  }, className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-medium text-muted-foreground/60 select-none", children: label })
                ] }, key);
              }) })
            ] }),
            musicMode === "heartJumping" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { orientation: "horizontal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-w-0 gap-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: paramLabelClass, children: "爱心颜色" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-muted-foreground/70 leading-none select-none", children: "点击色块调整爱心的纯色颜色" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 cursor-pointer group w-fit", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("relative w-10 h-7 rounded-md overflow-hidden", "border border-border/50 shadow-sm", "transition-all duration-200", "group-hover:border-primary/50 group-hover:shadow-md group-hover:scale-105"), style: {
                    backgroundColor: heartColor
                  }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "color", value: heartColor, onChange: (e) => handleHeartColorChange(e.target.value), className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-muted-foreground/70 select-none font-mono", children: heartColor.toUpperCase() })
                ] })
              ] })
            ] })
          ] })
        ] })
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: startConflictOpen, onOpenChange: (open) => {
      if (!open) handleCancelMusicStart();
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: "确认启用音乐律动？" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogDescription, { children: [
          "当前设备正在使用",
          startConflictLabels.join("、"),
          "，启用音乐律动将中断相关效果。是否继续？"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { onClick: handleCancelMusicStart, children: "取消" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { onClick: handleConfirmMusicStart, children: "确认启用" })
      ] })
    ] }) })
  ] });
};
export {
  MusicEffect as default
};
