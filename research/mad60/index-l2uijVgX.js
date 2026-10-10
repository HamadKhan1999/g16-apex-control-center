const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./userPreferenceService-xnCo2yiA.js","./index-CMbUujkZ.js","./vendor-react-CCnVVUMc.js","./index-CMYnaFRv.css","./devicePositionService-ChBf7Ms5.js"])))=>i.map(i=>d[i]);
import { c as createLucideIcon, am as isElectronEnvironment, aL as useDeviceInfoStore, aM as useLightStore, aN as screenCapturerService, _ as __vitePreload, k as keyboardLayoutMap, aO as getDefaultKeyRect, aP as isUkKeyboardLayout, aQ as withHighPriorityBatch, h as highLowToDecimal, aR as codeValues, aS as formatToHex, a as usePreviewDeviceStore, P as PresetType, F as cn, S as Sparkles, av as Layers, aT as SelectTrigger, aU as SelectValue, aV as SelectContent, aW as SelectItem, aX as Select, aY as Search, H as Input, B as Button, aZ as ChevronDown, a_ as ChevronUp, a$ as useAuthorizedDevicesContext, b0 as useActiveDeviceStore, b1 as stopSelectedMatrixPlayback, b2 as exitSyncLightingForDevice, b3 as connectAuthorizedDeviceByIndex, b4 as isGameInteractionActive, b5 as stopLightingModes, b6 as getPreviewDeviceLabel, b7 as deviceManager, a0 as useUserStore, u as useMaterialStore, ag as useUserImperativePresetsStore, ah as useNetworkImperativePresetsStore, ak as NetworkMaterialSortType, a2 as toast, b8 as resumeAllPreviewCommands, b9 as Usb, aA as AlertDialog, aB as AlertDialogContent, aC as AlertDialogHeader, aD as AlertDialogTitle, aE as AlertDialogDescription, aF as AlertDialogFooter, aG as AlertDialogCancel, aH as AlertDialogAction, ba as ConnectDeviceButton, bb as lodashExports, bc as Download, O as DropdownMenu, Q as DropdownMenuTrigger, U as DropdownMenuContent, V as DropdownMenuItem, T as Trash2, a1 as Info, aJ as CyberRouteLoading, bd as Lock, be as LockOpen, R as RotateCcw, L as Label, K as Slider } from "./index-CMbUujkZ.js";
import { r as reactExports, k as compilerRuntimeExports, j as jsxRuntimeExports, n as useNavigate, q as useLocation } from "./vendor-react-CCnVVUMc.js";
import { E as EllipsisVertical, C as Checkbox } from "./checkbox-B4SkrEUN.js";
import { g as getMaterialColor, a as getMaterialTypeLabel, r as renderMaterialCardIcon, m as matchesMaterialTypeFilter, M as MATERIAL_PRESETS, b as MultiSelect } from "./presets-B7DhRBgM.js";
import { N, d as di, y as ye, t as ti, j as je, O as Oe, W as We, x as xe, e as ei, B as Be, i as it, n as nt, h as hi, a as N$1, q as qt, J as Jt } from "./vendor-leafer-BAyePMnU.js";
import { C as CirclePause } from "./circle-pause-B97fpoyo.js";
const __iconNode$1 = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M15 9.34V5a3 3 0 0 0-5.68-1.33", key: "1gzdoj" }],
  ["path", { d: "M16.95 16.95A7 7 0 0 1 5 12v-2", key: "cqa7eg" }],
  ["path", { d: "M18.89 13.23A7 7 0 0 0 19 12v-2", key: "16hl24" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12", key: "r2i35w" }]
];
const MicOff = createLucideIcon("mic-off", __iconNode$1);
const __iconNode = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
];
const Mic = createLucideIcon("mic", __iconNode);
function WorkerWrapper$1(options) {
  return new Worker("" + new URL("lightSyncWorker-PwyCO-_5.js", import.meta.url).href, {
    name: options?.name
  });
}
function WorkerWrapper(options) {
  return new Worker("" + new URL("imperativePresetWorker-Bt0-M9Tq.js", import.meta.url).href, {
    name: options?.name
  });
}
const CANVAS2D_PRESET_IDS = /* @__PURE__ */ new Set(["neon-aurora", "plasma-lightning", "magnetic-flow", "laser-rain", "rainbow-sweep", "heart-burst", "rainbow-spectrum", "polygon-waveform", "screen-ambience"]);
class DesktopCapturerAdapter {
  audioContext = null;
  analyser = null;
  stream = null;
  latestData = null;
  callbacks = /* @__PURE__ */ new Set();
  running = false;
  worker = null;
  async start() {
    if (this.running) {
      console.warn("DesktopCapturer 已在运行");
      return;
    }
    try {
      if (window.electron) {
        await this.startWithDesktopCapturer();
      } else {
        await this.startWithGetDisplayMedia();
      }
      this.running = true;
      this.startAnalysis();
      console.log("✅ DesktopCapturer 启动成功");
    } catch (error) {
      console.error("❌ DesktopCapturer 启动失败:", error);
      throw error;
    }
  }
  /**
   * Electron 环境：使用 desktopCapturer
   */
  async startWithDesktopCapturer() {
    const sources = await window.electron.ipcRenderer.invoke("desktop-capturer:getSources", {
      types: ["screen", "window"]
    });
    if (sources.length === 0) {
      throw new Error("未找到可捕获的音频源");
    }
    const sourceId = sources[0].id;
    this.stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        mandatory: {
          chromeMediaSource: "desktop",
          chromeMediaSourceId: sourceId
        }
      },
      video: {
        mandatory: {
          chromeMediaSource: "desktop",
          chromeMediaSourceId: sourceId
        }
      }
    });
    this.setupAudioContext();
  }
  /**
   * 浏览器环境：使用 getDisplayMedia
   */
  async startWithGetDisplayMedia() {
    this.stream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
      // audio: {
      //   echoCancellation: false,
      //   noiseSuppression: false,
      //   autoGainControl: false
      // } as any
      audio: true
    });
    const audioTracks = this.stream.getAudioTracks();
    if (audioTracks.length === 0) {
      throw new Error("未捕获到音频轨道，请确保选择了包含音频的源");
    }
    this.setupAudioContext();
  }
  /**
   * 设置 Web Audio 上下文
   */
  setupAudioContext() {
    this.audioContext = new AudioContext();
    this.analyser = this.audioContext.createAnalyser();
    this.analyser.fftSize = 2048;
    this.analyser.smoothingTimeConstant = 0.8;
    const source = this.audioContext.createMediaStreamSource(this.stream);
    source.connect(this.analyser);
    console.log("🎵 Web Audio 上下文设置完成");
  }
  /**
   * 开始 FFT 分析循环（使用 Web Worker，确保后台也能分析）
   */
  startAnalysis() {
    if (!this.analyser) return;
    const dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.worker = new Worker(new URL(
      /* @vite-ignore */
      "" + new URL("lightSyncWorker-PwyCO-_5.js", import.meta.url).href,
      import.meta.url
    ), {
      type: "module"
    });
    this.worker.onmessage = () => {
      if (!this.running || !this.analyser) return;
      this.analyser.getByteFrequencyData(dataArray);
      const audioData = this.extractAudioData(dataArray);
      this.latestData = audioData;
      this.callbacks.forEach((callback) => {
        try {
          callback(audioData);
        } catch (error) {
          console.error("音频数据回调执行失败:", error);
        }
      });
    };
    this.worker.postMessage({
      type: "start",
      timer: "audio-response",
      interval: 16
    });
    console.log("🎵 音频分析循环已启动（Worker 模式）");
  }
  /**
   * 从频域数据提取音频特征
   */
  extractAudioData(dataArray) {
    const sampleRate = this.audioContext.sampleRate;
    const nyquist = sampleRate / 2;
    const binCount = dataArray.length;
    const getBinForFreq = (freq) => Math.floor(freq / nyquist * binCount);
    const bassStart = getBinForFreq(20);
    const bassEnd = getBinForFreq(250);
    const bass = this.getAverageEnergy(dataArray, bassStart, bassEnd) / 255;
    const midStart = getBinForFreq(250);
    const midEnd = getBinForFreq(2e3);
    const mid = this.getAverageEnergy(dataArray, midStart, midEnd) / 255;
    const trebleStart = getBinForFreq(2e3);
    const trebleEnd = Math.min(getBinForFreq(2e4), binCount);
    const treble = this.getAverageEnergy(dataArray, trebleStart, trebleEnd) / 255;
    const average = this.getAverageEnergy(dataArray, 0, binCount) / 255;
    const maxValue = Math.max(bass, mid, treble);
    const peakDetected = maxValue > 0.7;
    return {
      timestamp: Date.now(),
      bass,
      mid,
      treble,
      average,
      peakDetected,
      peakValue: maxValue,
      spectrum: new Float32Array(dataArray)
      // 可选
    };
  }
  getAverageEnergy(dataArray, start, end) {
    let sum = 0;
    for (let i = start; i < end; i++) {
      sum += dataArray[i];
    }
    return sum / (end - start);
  }
  async stop() {
    this.running = false;
    if (this.worker) {
      this.worker.postMessage({
        type: "stop",
        timer: "audio-response"
      });
      this.worker.terminate();
      this.worker = null;
    }
    this.stream?.getTracks().forEach((track) => track.stop());
    await this.audioContext?.close();
    this.audioContext = null;
    this.analyser = null;
    this.stream = null;
    this.latestData = null;
    console.log("🛑 DesktopCapturer 已停止");
  }
  getLatestData() {
    return this.latestData;
  }
  onData(callback) {
    this.callbacks.add(callback);
  }
  offData(callback) {
    this.callbacks.delete(callback);
  }
  isRunning() {
    return this.running;
  }
  getType() {
    return "desktop";
  }
}
class RtAudioAdapter {
  latestData = null;
  callbacks = /* @__PURE__ */ new Set();
  running = false;
  async start() {
    if (this.running) {
      console.warn("RtAudio 已在运行");
      return;
    }
    if (!window.electron) {
      throw new Error("RtAudio 仅在 Electron 环境中可用");
    }
    try {
      await window.electron.ipcRenderer.invoke("rtaudio:start");
      window.electron.ipcRenderer.on("rtaudio:data", this.handleAudioData);
      this.running = true;
      console.log("✅ RtAudio 启动成功");
    } catch (error) {
      console.error("❌ RtAudio 启动失败:", error);
      throw error;
    }
  }
  /**
   * 处理来自主进程的音频数据
   */
  handleAudioData = (_event, data) => {
    this.latestData = data;
    this.callbacks.forEach((callback) => {
      try {
        callback(data);
      } catch (error) {
        console.error("音频数据回调执行失败:", error);
      }
    });
  };
  async stop() {
    if (!this.running) return;
    this.running = false;
    if (window.electron) {
      window.electron.ipcRenderer.off("rtaudio:data", this.handleAudioData);
      await window.electron.ipcRenderer.invoke("rtaudio:stop");
    }
    this.latestData = null;
    console.log("🛑 RtAudio 已停止");
  }
  getLatestData() {
    return this.latestData;
  }
  onData(callback) {
    this.callbacks.add(callback);
  }
  offData(callback) {
    this.callbacks.delete(callback);
  }
  isRunning() {
    return this.running;
  }
  getType() {
    return "system";
  }
}
class AudioReactiveService {
  capturer = null;
  smoothedValues = /* @__PURE__ */ new Map();
  /**
   * 自动选择最佳音频捕获器并启动
   * @param preferSystemAudio 是否优先使用系统音频（仅 Electron 环境有效）
   */
  async start(preferSystemAudio = true) {
    if (isElectronEnvironment() && preferSystemAudio) {
      try {
        this.capturer = new RtAudioAdapter();
        await this.capturer.start();
        console.log("🎵 使用 RtAudio 系统音频捕获");
      } catch (error) {
        console.warn("RtAudio 启动失败，降级使用 DesktopCapturer:", error);
        this.capturer = new DesktopCapturerAdapter();
        await this.capturer.start();
        console.log("🎵 使用 DesktopCapturer 屏幕音频捕获");
      }
    } else {
      this.capturer = new DesktopCapturerAdapter();
      await this.capturer.start();
      console.log("🎵 使用 DesktopCapturer 屏幕音频捕获");
    }
  }
  /**
   * 停止音频捕获
   */
  async stop() {
    await this.capturer?.stop();
    this.capturer = null;
    this.smoothedValues.clear();
  }
  /**
   * 获取最新音频数据
   */
  getLatestData() {
    return this.capturer?.getLatestData() ?? null;
  }
  /**
   * 检查是否正在运行
   */
  isRunning() {
    return this.capturer?.isRunning() ?? false;
  }
  /**
   * 获取当前使用的捕获器类型
   */
  getCapturerType() {
    return this.capturer?.getType() ?? null;
  }
  /**
   * 应用音频响应到元素（核心逻辑）
   * @param element Leafer 元素对象
   * @param config 音频响应配置
   * @returns 需要更新的属性对象
   */
  applyAudioResponse(element, config) {
    if (!config.enabled) return {};
    const audioData = this.getLatestData();
    if (!audioData) return {};
    let energyValue = this.getEnergyForBand(audioData, config.frequencyBand);
    energyValue *= config.sensitivity;
    if (energyValue < (config.threshold ?? 0)) {
      energyValue = 0;
    }
    const elementKey = element.innerId || element.id || String(element);
    const smoothedValue = this.applySmoothing(elementKey, energyValue, config.smoothing ?? 0);
    const mappedValue = this.mapRange(smoothedValue, 0, 1, config.minValue, config.maxValue);
    return this.getPropertyUpdate(config.type, mappedValue, config);
  }
  /**
   * 获取指定频段的能量值
   */
  getEnergyForBand(audioData, band) {
    switch (band) {
      case "bass":
        return audioData.bass;
      case "mid":
        return audioData.mid;
      case "treble":
        return audioData.treble;
      case "average":
        return audioData.average;
      default:
        return audioData.average;
    }
  }
  /**
   * 应用平滑算法（指数移动平均）
   */
  applySmoothing(key, newValue, smoothing) {
    const oldValue = this.smoothedValues.get(key) ?? newValue;
    const smoothed = oldValue * smoothing + newValue * (1 - smoothing);
    this.smoothedValues.set(key, smoothed);
    return smoothed;
  }
  /**
   * 映射数值范围
   */
  mapRange(value, inMin, inMax, outMin, outMax) {
    return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  }
  /**
   * 根据响应类型生成属性更新对象
   */
  getPropertyUpdate(type, value, config) {
    switch (type) {
      case "scale":
        const scaleDirection = config.scaleDirection || "both";
        if (scaleDirection === "vertical" || scaleDirection === "y") {
          return {
            scaleY: value
          };
        } else if (scaleDirection === "horizontal" || scaleDirection === "x") {
          return {
            scaleX: value
          };
        }
        return {
          scaleX: value,
          scaleY: value
        };
      case "opacity":
        return {
          opacity: Math.max(0, Math.min(1, value))
        };
      case "rotation":
        return {
          rotation: value
        };
      case "position":
        return {
          y: value
        };
      case "color":
        if (config.colorMapping) {
          return {
            fill: this.interpolateColor(value, config.colorMapping)
          };
        }
        return {};
      default:
        return {};
    }
  }
  /**
   * 颜色插值（简化实现）
   */
  interpolateColor(value, mapping) {
    const parseColor = (hex) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : [0, 0, 0];
    };
    const low = parseColor(mapping.lowColor);
    const high = parseColor(mapping.highColor);
    const r = Math.round(low[0] + (high[0] - low[0]) * value);
    const g = Math.round(low[1] + (high[1] - low[1]) * value);
    const b = Math.round(low[2] + (high[2] - low[2]) * value);
    return `rgb(${r}, ${g}, ${b})`;
  }
  /**
   * 注册音频数据回调
   */
  onData(callback) {
    this.capturer?.onData(callback);
  }
  /**
   * 移除音频数据回调
   */
  offData(callback) {
    this.capturer?.offData(callback);
  }
}
const audioReactiveService = new AudioReactiveService();
const extractKeyPositions = (keys) => {
  const positions = [];
  for (const [, key] of keys) {
    const keyBox = key.worldBoxBounds;
    const centerX = keyBox.x + keyBox.width / 2;
    const centerY = keyBox.y + keyBox.height / 2;
    const rgbIndex = parseInt(key.name || "0");
    positions.push({
      rgbIndex,
      centerX,
      centerY
    });
  }
  return positions;
};
const materialToSceneShapes = (material) => {
  return material.objects.map((obj) => ({
    id: obj.id,
    type: obj.type,
    name: obj.name,
    properties: {
      x: obj.data.x ?? 0,
      y: obj.data.y ?? 0,
      width: obj.data.width ?? 100,
      height: obj.data.height ?? 100,
      rotation: obj.data.rotation ?? 0,
      scaleX: obj.data.scaleX ?? 1,
      scaleY: obj.data.scaleY ?? 1,
      opacity: obj.data.opacity ?? 1,
      fill: obj.data.fill,
      stroke: obj.data.stroke,
      strokeWidth: obj.data.strokeWidth,
      cornerRadius: obj.data.cornerRadius,
      sides: obj.data.sides,
      corners: obj.data.corners,
      innerRadius: obj.data.innerRadius,
      dashPattern: obj.data.dashPattern,
      strokeCap: obj.data.strokeCap,
      startAngle: obj.data.startAngle,
      endAngle: obj.data.endAngle,
      curve: obj.data.curve,
      points: obj.data.points,
      path: obj.data.path,
      url: obj.data.url,
      naturalWidth: obj.data.naturalWidth,
      naturalHeight: obj.data.naturalHeight
    },
    zIndex: obj.data.zIndex ?? 0,
    audioResponse: obj.audioResponse
  }));
};
const syncSceneToMainProcess = async (material, canvasWidth, canvasHeight) => {
  if (!window.lightEngine) return;
  try {
    await window.lightEngine.loadScene({
      mode: "keyframe",
      canvasWidth,
      canvasHeight,
      shapes: materialToSceneShapes(material),
      timeline: {
        duration: material.timeline.duration,
        isLooping: true,
        keyframes: material.timeline.keyframes
      }
    });
    console.log("[Preview] 主进程灯光引擎已加载关键帧场景（渲染进程驱动同步）");
  } catch (err) {
    console.error("[Preview] 主进程灯光引擎加载失败:", err);
  }
};
const syncImperativeSceneToMainProcess = async (presetId, params, canvasWidth, canvasHeight) => {
  if (!window.lightEngine) return;
  try {
    await window.lightEngine.loadScene({
      mode: "imperative",
      canvasWidth,
      canvasHeight,
      imperativePresetId: presetId,
      imperativeParams: params
    });
    await window.lightEngine.start();
    console.log("[Preview] 主进程灯光引擎已启动（命令式模式）");
  } catch (err) {
    console.error("[Preview] 主进程灯光引擎启动失败:", err);
  }
};
const stopMainProcessEngine = async () => {
  if (!window.lightEngine) return;
  try {
    await window.lightEngine.stop();
    await window.lightEngine.unloadScene();
  } catch {
  }
};
const registerDeviceToMainProcess = (deviceId, path, dataLength, maxIndex, keyPositions, actualDeviceId) => {
  if (!window.lightEngine) return;
  window.lightEngine.addDevice({
    deviceId,
    actualDeviceId,
    path,
    dataLength,
    maxIndex,
    keyPositions
  });
};
const scale = 2;
const easeInOutCubic = (t) => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};
const interpolateColor = (color1, color2, progress) => {
  const r1 = parseInt(color1.slice(1, 3), 16);
  const g1 = parseInt(color1.slice(3, 5), 16);
  const b1 = parseInt(color1.slice(5, 7), 16);
  const r2 = parseInt(color2.slice(1, 3), 16);
  const g2 = parseInt(color2.slice(3, 5), 16);
  const b2 = parseInt(color2.slice(5, 7), 16);
  const r = Math.round(r1 + (r2 - r1) * progress);
  const g = Math.round(g1 + (g2 - g1) * progress);
  const b = Math.round(b1 + (b2 - b1) * progress);
  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
};
const interpolateProperties = (from, to, progress) => {
  const result = {
    ...from
  };
  for (const key of Object.keys(from)) {
    const fromVal = from[key];
    const toVal = to[key];
    if (typeof fromVal === "number" && typeof toVal === "number") {
      result[key] = fromVal + (toVal - fromVal) * progress;
    } else if (typeof fromVal === "string" && typeof toVal === "string") {
      if (fromVal.startsWith("#") && toVal.startsWith("#")) {
        result[key] = interpolateColor(fromVal, toVal, progress);
      } else {
        result[key] = progress < 0.5 ? fromVal : toVal;
      }
    } else if (Array.isArray(fromVal) && Array.isArray(toVal)) {
      result[key] = progress < 0.5 ? fromVal : toVal;
    }
  }
  return result;
};
const applyProperties = (shape, props) => {
  for (const [key, value] of Object.entries(props)) {
    if (shape[key] !== void 0 || key === "x" || key === "y") {
      shape[key] = value;
    }
  }
};
const cleanupWorker = (ref, timer, extraMessages) => {
  if (!ref.current) return;
  if (timer) {
    ref.current.postMessage({
      type: "stop",
      timer
    });
  }
  if (extraMessages) {
    for (const msg of extraMessages) {
      ref.current.postMessage(msg);
    }
  }
  ref.current.terminate();
  ref.current = null;
};
function useMaterialPreview(options = {}) {
  const {
    width = 800,
    height = 500
  } = options;
  const getDeviceInfoData = useDeviceInfoStore((state) => state.getDeviceInfoData);
  const getLightRectData = useLightStore((state_0) => state_0.getLightRectData);
  const leaferRef = reactExports.useRef(null);
  const containerRef = reactExports.useRef(null);
  const overlayCanvasRef = reactExports.useRef(null);
  const canvas2dCtxRef = reactExports.useRef(null);
  const objectsRef = reactExports.useRef(/* @__PURE__ */ new Map());
  const isPlayingRef = reactExports.useRef(false);
  const timelineRef = reactExports.useRef(null);
  const keyboardDevicesRef = reactExports.useRef(/* @__PURE__ */ new Map());
  const lightSyncWorkerRef = reactExports.useRef(null);
  const animationWorkerRef = reactExports.useRef(null);
  const isUpdatingLightsRef = reactExports.useRef(false);
  const audioResponseWorkerRef = reactExports.useRef(null);
  const smoothedAudioValuesRef = reactExports.useRef(/* @__PURE__ */ new Map());
  const lastRotationValuesRef = reactExports.useRef(/* @__PURE__ */ new Map());
  const imagePixelCacheRef = reactExports.useRef(/* @__PURE__ */ new Map());
  const samplingCanvasRef = reactExports.useRef(null);
  const samplingCtxRef = reactExports.useRef(null);
  const currentTimeRef = reactExports.useRef(0);
  const uiUpdateTimerRef = reactExports.useRef(0);
  const lightBufferRef = reactExports.useRef([]);
  const [objects, setObjects] = reactExports.useState(/* @__PURE__ */ new Map());
  const [selectedId, setSelectedIdState] = reactExports.useState(null);
  const [currentMaterial, setCurrentMaterial] = reactExports.useState(null);
  const [timeline, setTimeline] = reactExports.useState({
    duration: 3e3,
    currentTime: 0,
    isPlaying: false,
    isLooping: false,
    keyframes: /* @__PURE__ */ new Map(),
    selectedKeyframe: null
  });
  const [isAudioActive, setIsAudioActive] = reactExports.useState(false);
  const [hasMusicElements, setHasMusicElements] = reactExports.useState(false);
  const [isScreenCaptureActive, setIsScreenCaptureActive] = reactExports.useState(false);
  const currentPresetRef = reactExports.useRef(null);
  const presetStateRef = reactExports.useRef(null);
  const presetParamsRef = reactExports.useRef({});
  const presetStartTimeRef = reactExports.useRef(0);
  const presetLastFrameTimeRef = reactExports.useRef(0);
  const imperativeLoopWorkerRef = reactExports.useRef(null);
  const [currentPreset, setCurrentPreset] = reactExports.useState(null);
  const presetWorkerRef = reactExports.useRef(null);
  const workerImageDataRef = reactExports.useRef(null);
  const isCanvas2dPresetRef = reactExports.useRef(false);
  const audioForwardTimerRef = reactExports.useRef(null);
  const screenForwardTimerRef = reactExports.useRef(null);
  const [lockRatioState, setLockRatioState] = reactExports.useState(false);
  const [activeDeviceOverlay, setActiveDeviceOverlay] = reactExports.useState(null);
  const initLeafer = reactExports.useCallback((container) => {
    if (leaferRef.current) {
      leaferRef.current.destroy();
    }
    containerRef.current = container;
    const leafer = new N({
      view: container,
      width,
      height,
      fill: "transparent",
      tree: {},
      editor: {
        lockRatio: false
      },
      wheel: {
        zoomMode: false
      },
      move: {
        disabled: true
      },
      sky: {},
      ground: {}
    });
    leaferRef.current = leafer;
    const syncOverlay = () => {
      if (!leafer.editor) return;
      const target = leafer.editor.element;
      if (target && target.name?.startsWith("keyboard-device-")) {
        const id = target.name.replace("keyboard-device-", "");
        const sx = target.scaleX ?? 1;
        setActiveDeviceOverlay({
          deviceId: id,
          right: (target.x ?? 0) + (target.width ?? 0) * sx,
          top: target.y ?? 0
        });
      } else {
        setActiveDeviceOverlay(null);
      }
    };
    const bindEditorEvents = () => {
      if (leafer.editor) {
        leafer.editor.on(N$1.SELECT, syncOverlay);
        leafer.editor.on(qt.MOVE, syncOverlay);
        leafer.editor.on(Jt.SCALE, syncOverlay);
        console.log("[initLeafer] Editor 事件绑定成功");
      } else {
        console.log("[initLeafer] Editor 未就绪，100ms后重试...");
      }
    };
    bindEditorEvents();
  }, [width, height]);
  const initOverlayCanvas = reactExports.useCallback((canvas) => {
    overlayCanvasRef.current = canvas;
    if (!canvas) {
      canvas2dCtxRef.current = null;
      return;
    }
    canvas.width = width;
    canvas.height = height;
    canvas2dCtxRef.current = canvas.getContext("2d", {
      willReadFrequently: true
    });
  }, [width, height]);
  const destroyLeafer = reactExports.useCallback(() => {
    if (leaferRef.current) {
      leaferRef.current.destroy();
      leaferRef.current = null;
    }
  }, []);
  const selectObject = reactExports.useCallback((id_0) => {
    if (selectedId && objectsRef.current.has(selectedId)) {
      const prevShape = objectsRef.current.get(selectedId);
      if (prevShape.leaferObject && prevShape.type !== "line") {
        prevShape.leaferObject.stroke = null;
        prevShape.leaferObject.strokeWidth = 0;
      }
    }
    setSelectedIdState(id_0);
    if (id_0 && objectsRef.current.has(id_0)) {
      const shape = objectsRef.current.get(id_0);
      if (shape.leaferObject && shape.type !== "line") {
        shape.leaferObject.stroke = "#00f5d4";
        shape.leaferObject.strokeWidth = 2;
      }
    }
  }, [selectedId]);
  const applyKeyframeInterpolation = reactExports.useCallback((currentTime) => {
    const kfMap = timelineRef.current?.keyframes;
    if (!kfMap) return;
    for (const [objectId, keyframes] of kfMap) {
      if (keyframes.length === 0) continue;
      const shape_0 = objectsRef.current.get(objectId);
      if (!shape_0) continue;
      let prevKf = null;
      let nextKf = null;
      for (let i = 0; i < keyframes.length; i++) {
        if (keyframes[i].time <= currentTime) {
          prevKf = keyframes[i];
        }
        if (keyframes[i].time >= currentTime && !nextKf) {
          nextKf = keyframes[i];
        }
      }
      if (!prevKf) {
        prevKf = keyframes[0];
      }
      if (!nextKf || currentTime >= keyframes[keyframes.length - 1].time) {
        applyProperties(shape_0.leaferObject, keyframes[keyframes.length - 1].properties);
        continue;
      }
      if (prevKf.time === nextKf.time || prevKf === nextKf) {
        applyProperties(shape_0.leaferObject, prevKf.properties);
        continue;
      }
      const progress = (currentTime - prevKf.time) / (nextKf.time - prevKf.time);
      const easedProgress = easeInOutCubic(progress);
      const interpolatedProps = interpolateProperties(prevKf.properties, nextKf.properties, easedProgress);
      applyProperties(shape_0.leaferObject, interpolatedProps);
    }
  }, []);
  reactExports.useEffect(() => {
    timelineRef.current = timeline;
    isPlayingRef.current = timeline.isPlaying;
    currentTimeRef.current = timeline.currentTime;
  }, [timeline]);
  const startAudioCapture = reactExports.useCallback(async () => {
    if (audioReactiveService.isRunning()) {
      console.log("[Preview] 音频捕获已在运行中");
      setIsAudioActive(true);
      return;
    }
    try {
      await audioReactiveService.start(true);
      setIsAudioActive(true);
      console.log("[Preview] 音频捕获已启动");
    } catch (error) {
      console.error("[Preview] 启动音频捕获失败:", error);
      setIsAudioActive(false);
    }
  }, []);
  const stopAudioCapture = reactExports.useCallback(async () => {
    if (!audioReactiveService.isRunning()) {
      setIsAudioActive(false);
      return;
    }
    try {
      await audioReactiveService.stop();
      setIsAudioActive(false);
      smoothedAudioValuesRef.current.clear();
      console.log("[Preview] 音频捕获已停止");
    } catch (error_0) {
      console.error("[Preview] 停止音频捕获失败:", error_0);
    }
  }, []);
  const toggleAudioCapture = reactExports.useCallback(async () => {
    if (isAudioActive) {
      await stopAudioCapture();
    } else {
      await startAudioCapture();
    }
  }, [isAudioActive, startAudioCapture, stopAudioCapture]);
  const startScreenCapture = reactExports.useCallback(async () => {
    try {
      await screenCapturerService.start();
      setIsScreenCaptureActive(true);
      console.log("[Preview] 屏幕捕获已启动");
    } catch (error_1) {
      console.error("[Preview] 启动屏幕捕获失败:", error_1);
      setIsScreenCaptureActive(false);
    }
  }, []);
  const stopScreenCapture = reactExports.useCallback(async () => {
    try {
      await screenCapturerService.stop();
      setIsScreenCaptureActive(false);
      console.log("[Preview] 屏幕捕获已停止");
    } catch (error_2) {
      console.error("[Preview] 停止屏幕捕获失败:", error_2);
      setIsScreenCaptureActive(false);
    }
  }, []);
  const toggleScreenCapture = reactExports.useCallback(async () => {
    if (isScreenCaptureActive) {
      await stopScreenCapture();
    } else {
      await startScreenCapture();
    }
  }, [isScreenCaptureActive, startScreenCapture, stopScreenCapture]);
  const applyAudioResponseToElements = reactExports.useCallback(() => {
    if (!isAudioActive || !audioReactiveService.isRunning()) return;
    for (const [, shape_1] of objectsRef.current) {
      if (!shape_1.audioResponse?.enabled || !shape_1.leaferObject) continue;
      const config = shape_1.audioResponse;
      const element = shape_1.leaferObject;
      const originalProps = shape_1.originalProperties || {};
      const updates = audioReactiveService.applyAudioResponse(element, config);
      for (const [prop, value] of Object.entries(updates)) {
        if (prop === "y") {
          const baseY = originalProps.y || element.y;
          element.y = baseY + value;
        } else if (prop === "rotation") {
          const baseRotation = originalProps.rotation || 0;
          const targetRotation = baseRotation + value;
          const lastRotation = lastRotationValuesRef.current.get(shape_1.id) ?? element.rotation ?? baseRotation;
          const addRotation = targetRotation - lastRotation;
          if (Math.abs(addRotation) > 0.01) {
            element.rotateOf("center", addRotation);
            lastRotationValuesRef.current.set(shape_1.id, targetRotation);
          }
        } else {
          element[prop] = value;
        }
      }
    }
  }, [isAudioActive]);
  const startAudioResponseLoop = reactExports.useCallback(() => {
    cleanupWorker(audioResponseWorkerRef, "audio-response");
    const worker = new WorkerWrapper$1();
    audioResponseWorkerRef.current = worker;
    worker.onmessage = (event) => {
      if (event.data.type === "audio-response-tick") {
        applyAudioResponseToElements();
      }
    };
    worker.postMessage({
      type: "set-interval",
      timer: "audio-response",
      interval: 16
    });
    worker.postMessage({
      type: "start",
      timer: "audio-response"
    });
    console.log("[Preview] 音频响应循环已启动");
    return () => {
      cleanupWorker(audioResponseWorkerRef, "audio-response");
      if (audioResponseWorkerRef.current === null) {
        console.log("[Preview] 音频响应循环已停止");
      }
    };
  }, [applyAudioResponseToElements]);
  const stopAudioResponseLoop = reactExports.useCallback(() => {
    cleanupWorker(audioResponseWorkerRef, "audio-response");
  }, []);
  const isCanvas2dOnlyPreset = reactExports.useCallback((preset) => preset.mode === "imperative" && (CANVAS2D_PRESET_IDS.has(preset.id) || preset.canvas2d === true), []);
  const terminatePresetWorker = reactExports.useCallback(() => {
    cleanupWorker(presetWorkerRef, void 0, [{
      type: "stop"
    }, {
      type: "unload-preset"
    }]);
    if (audioForwardTimerRef.current) {
      clearInterval(audioForwardTimerRef.current);
      audioForwardTimerRef.current = null;
    }
    if (screenForwardTimerRef.current) {
      clearInterval(screenForwardTimerRef.current);
      screenForwardTimerRef.current = null;
    }
    workerImageDataRef.current = null;
    isCanvas2dPresetRef.current = false;
  }, []);
  const getPresetContext = reactExports.useCallback(() => {
    if (!leaferRef.current) return null;
    if (!canvas2dCtxRef.current) return null;
    return {
      app: leaferRef.current,
      width,
      height,
      Rect: xe,
      Ellipse: We,
      Polygon: Oe,
      Star: je,
      Line: ti,
      Group: ye,
      Path: di,
      canvas2d: canvas2dCtxRef.current
    };
  }, [width, height]);
  const getAudioDataForPreset = reactExports.useCallback(() => {
    if (!audioReactiveService.isRunning()) {
      return void 0;
    }
    const latestData = audioReactiveService.getLatestData();
    if (!latestData) {
      return void 0;
    }
    const frequencyData = latestData.spectrum ? new Uint8Array(latestData.spectrum.map((v) => v)) : new Uint8Array(128).fill(0);
    return {
      frequencyData,
      bass: latestData.bass,
      mid: latestData.mid,
      treble: latestData.treble,
      average: latestData.average,
      binCount: frequencyData.length
    };
  }, []);
  const renderImperativePresetFrame = reactExports.useCallback(() => {
    const preset_0 = currentPresetRef.current;
    const state_1 = presetStateRef.current;
    const ctx = getPresetContext();
    if (!preset_0 || !state_1 || !ctx) return;
    if (preset_0.mode !== "imperative" || !preset_0.render) return;
    const now = performance.now();
    const deltaTime = now - presetLastFrameTimeRef.current;
    const elapsedTime = now - presetStartTimeRef.current;
    presetLastFrameTimeRef.current = now;
    const input = {
      audio: getAudioDataForPreset(),
      deltaTime,
      elapsedTime
    };
    if (canvas2dCtxRef.current) {
      canvas2dCtxRef.current.clearRect(0, 0, width, height);
    }
    try {
      preset_0.render(ctx, state_1, input, presetParamsRef.current);
    } catch (error_3) {
      console.error("[Preview] 命令式预设渲染出错:", error_3);
    }
  }, [getPresetContext, getAudioDataForPreset]);
  const startImperativePresetLoop = reactExports.useCallback(() => {
    if (isCanvas2dPresetRef.current && presetWorkerRef.current) {
      presetWorkerRef.current.postMessage({
        type: "start",
        interval: 16
      });
      if (audioForwardTimerRef.current) clearInterval(audioForwardTimerRef.current);
      audioForwardTimerRef.current = setInterval(() => {
        if (!presetWorkerRef.current) return;
        const audio = getAudioDataForPreset();
        presetWorkerRef.current.postMessage({
          type: "update-audio",
          audio: audio ?? void 0
        });
      }, 50);
      if (currentPresetRef.current?.requires?.screen) {
        void startScreenCapture();
        if (screenForwardTimerRef.current) clearInterval(screenForwardTimerRef.current);
        screenForwardTimerRef.current = setInterval(() => {
          if (!presetWorkerRef.current) return;
          const frame = screenCapturerService.getLatestFrame();
          if (!frame || frame.data.byteLength === 0) return;
          const data = new Uint8ClampedArray(frame.data);
          presetWorkerRef.current.postMessage({
            type: "update-screen",
            screenFrame: {
              data,
              width: frame.width,
              height: frame.height
            }
          });
        }, 50);
      }
      console.log("[Preview] Canvas2d 预设 Worker 渲染循环已启动");
      return () => {
        if (presetWorkerRef.current) {
          presetWorkerRef.current.postMessage({
            type: "stop"
          });
        }
        if (audioForwardTimerRef.current) {
          clearInterval(audioForwardTimerRef.current);
          audioForwardTimerRef.current = null;
        }
        if (screenForwardTimerRef.current) {
          clearInterval(screenForwardTimerRef.current);
          screenForwardTimerRef.current = null;
        }
      };
    }
    cleanupWorker(imperativeLoopWorkerRef, "imperative-preset");
    presetStartTimeRef.current = performance.now();
    presetLastFrameTimeRef.current = presetStartTimeRef.current;
    const worker_0 = new WorkerWrapper$1();
    imperativeLoopWorkerRef.current = worker_0;
    worker_0.onmessage = (event_0) => {
      if (event_0.data.type === "imperative-preset-tick") {
        renderImperativePresetFrame();
      }
    };
    worker_0.postMessage({
      type: "set-interval",
      timer: "imperative-preset",
      interval: 16
    });
    worker_0.postMessage({
      type: "start",
      timer: "imperative-preset"
    });
    console.log("[Preview] 命令式预设渲染循环已启动");
    return () => {
      cleanupWorker(imperativeLoopWorkerRef, "imperative-preset");
      console.log("[Preview] 命令式预设渲染循环已停止");
    };
  }, [renderImperativePresetFrame, getAudioDataForPreset, startScreenCapture]);
  const stopImperativePresetLoop = reactExports.useCallback(() => {
    if (isCanvas2dPresetRef.current && presetWorkerRef.current) {
      presetWorkerRef.current.postMessage({
        type: "stop"
      });
    }
    if (audioForwardTimerRef.current) {
      clearInterval(audioForwardTimerRef.current);
      audioForwardTimerRef.current = null;
    }
    if (screenForwardTimerRef.current) {
      clearInterval(screenForwardTimerRef.current);
      screenForwardTimerRef.current = null;
    }
    cleanupWorker(imperativeLoopWorkerRef, "imperative-preset");
  }, []);
  const loadImperativePreset = reactExports.useCallback((preset_1, params) => {
    unloadImperativePreset();
    if (objectsRef.current.size > 0) {
      console.log("[Preview] 清空现有素材元素以加载预设");
      for (const shape_2 of objectsRef.current.values()) {
        shape_2.leaferObject.remove();
      }
      objectsRef.current.clear();
      smoothedAudioValuesRef.current.clear();
      setObjects(/* @__PURE__ */ new Map());
      setCurrentMaterial(null);
    }
    const defaultParams = {};
    if (preset_1.params) {
      for (const param of preset_1.params) {
        defaultParams[param.key] = param.default;
      }
    }
    const mergedParams = {
      ...defaultParams,
      ...params
    };
    presetParamsRef.current = mergedParams;
    if (isCanvas2dOnlyPreset(preset_1)) {
      terminatePresetWorker();
      isCanvas2dPresetRef.current = true;
      const worker_1 = new WorkerWrapper();
      presetWorkerRef.current = worker_1;
      worker_1.onmessage = (event_1) => {
        const msg = event_1.data;
        if (msg.type === "frame" && msg.imageData) {
          workerImageDataRef.current = msg.imageData;
          if (canvas2dCtxRef.current) {
            canvas2dCtxRef.current.putImageData(msg.imageData, 0, 0);
          }
        } else if (msg.type === "error") {
          console.error("[PresetWorker]", msg.message);
        }
      };
      if (preset_1._sourceCode && !CANVAS2D_PRESET_IDS.has(preset_1.id)) {
        worker_1.postMessage({
          type: "load-custom-preset",
          code: preset_1._sourceCode,
          params: mergedParams,
          width,
          height
        });
      } else {
        worker_1.postMessage({
          type: "load-preset",
          presetId: preset_1.id,
          params: mergedParams,
          width,
          height
        });
      }
      currentPresetRef.current = preset_1;
      setCurrentPreset(preset_1);
      setHasMusicElements(true);
      console.log(`[Preview] Canvas2d 预设 "${preset_1.name}" 已委托给 Worker`);
      syncImperativeSceneToMainProcess(preset_1.id, mergedParams, width, height);
      (async () => {
        try {
          const {
            saveLastPreset
          } = await __vitePreload(async () => {
            const {
              saveLastPreset: saveLastPreset2
            } = await import("./userPreferenceService-xnCo2yiA.js");
            return {
              saveLastPreset: saveLastPreset2
            };
          }, true ? __vite__mapDeps([0,1,2,3]) : void 0, import.meta.url);
          await saveLastPreset(preset_1.id, mergedParams);
        } catch (error_4) {
          console.error("[Preview] 保存预设偏好失败:", error_4);
        }
      })();
      return true;
    }
    const ctx_0 = getPresetContext();
    if (!ctx_0) {
      console.error("[Preview] 画布未初始化，无法加载预设");
      return false;
    }
    if (preset_1.setup) {
      try {
        const state_2 = preset_1.setup(ctx_0, mergedParams);
        presetStateRef.current = state_2;
        currentPresetRef.current = preset_1;
        setCurrentPreset(preset_1);
        setHasMusicElements(true);
        console.log(`[Preview] 命令式预设 "${preset_1.name}" 已加载`);
        (async () => {
          try {
            const {
              saveLastPreset: saveLastPreset_0
            } = await __vitePreload(async () => {
              const {
                saveLastPreset: saveLastPreset_02
              } = await import("./userPreferenceService-xnCo2yiA.js");
              return {
                saveLastPreset: saveLastPreset_02
              };
            }, true ? __vite__mapDeps([0,1,2,3]) : void 0, import.meta.url);
            await saveLastPreset_0(preset_1.id, mergedParams);
          } catch (error_6) {
            console.error("[Preview] 保存预设偏好失败:", error_6);
          }
        })();
        return true;
      } catch (error_5) {
        console.error(`[Preview] 预设 "${preset_1.name}" setup 失败:`, error_5);
        return false;
      }
    }
    return false;
  }, [getPresetContext, isCanvas2dOnlyPreset, terminatePresetWorker, width, height]);
  const unloadImperativePreset = reactExports.useCallback(() => {
    stopImperativePresetLoop();
    if (currentPresetRef.current?.requires?.screen) {
      void stopScreenCapture();
    }
    if (isCanvas2dPresetRef.current) {
      terminatePresetWorker();
    } else {
      const preset_2 = currentPresetRef.current;
      const state_3 = presetStateRef.current;
      const ctx_1 = getPresetContext();
      if (preset_2 && state_3 && ctx_1 && preset_2.cleanup) {
        try {
          preset_2.cleanup(ctx_1, state_3);
        } catch (error_7) {
          console.error("[Preview] 预设清理失败:", error_7);
        }
      }
    }
    if (canvas2dCtxRef.current) {
      canvas2dCtxRef.current.clearRect(0, 0, width, height);
    }
    currentPresetRef.current = null;
    presetStateRef.current = null;
    presetParamsRef.current = {};
    setCurrentPreset(null);
    setHasMusicElements(false);
    console.log("[Preview] 命令式预设已卸载");
  }, [stopImperativePresetLoop, getPresetContext, terminatePresetWorker, stopScreenCapture]);
  const updatePresetParams = reactExports.useCallback((params_0) => {
    presetParamsRef.current = {
      ...presetParamsRef.current,
      ...params_0
    };
    if (isCanvas2dPresetRef.current && presetWorkerRef.current) {
      presetWorkerRef.current.postMessage({
        type: "update-params",
        params: params_0
      });
    }
    window.lightEngine?.updateParams(params_0);
    (async () => {
      if (currentPresetRef.current) {
        try {
          const {
            saveLastPreset: saveLastPreset_1,
            savePresetParams
          } = await __vitePreload(async () => {
            const {
              saveLastPreset: saveLastPreset_12,
              savePresetParams: savePresetParams2
            } = await import("./userPreferenceService-xnCo2yiA.js");
            return {
              saveLastPreset: saveLastPreset_12,
              savePresetParams: savePresetParams2
            };
          }, true ? __vite__mapDeps([0,1,2,3]) : void 0, import.meta.url);
          await Promise.all([saveLastPreset_1(currentPresetRef.current.id, presetParamsRef.current), savePresetParams(currentPresetRef.current.id, presetParamsRef.current)]);
        } catch (error_8) {
          console.error("[Preview] 保存预设参数失败:", error_8);
        }
      }
    })();
  }, []);
  const loadHybridPreset = reactExports.useCallback((preset_3, params_1) => {
    if (preset_3.mode === "imperative") {
      const success = loadImperativePreset(preset_3, params_1);
      if (success) {
        startImperativePresetLoop();
      }
      return success;
    } else {
      console.log(`[Preview] 声明式预设 "${preset_3.name}" 需要通过素材系统加载`);
      return false;
    }
  }, [loadImperativePreset, startImperativePresetLoop]);
  const updateAnimationTime = reactExports.useCallback((delta) => {
    if (!isPlayingRef.current) return;
    const tl = timelineRef.current;
    if (!tl) return;
    let newTime = currentTimeRef.current + delta;
    if (newTime >= tl.duration) {
      if (tl.isLooping) {
        newTime = newTime % tl.duration;
      } else {
        newTime = tl.duration;
        isPlayingRef.current = false;
        currentTimeRef.current = newTime;
        cleanupWorker(animationWorkerRef, "animation");
        setTimeline((prev) => ({
          ...prev,
          currentTime: newTime,
          isPlaying: false
        }));
        applyKeyframeInterpolation(newTime);
        return;
      }
    }
    currentTimeRef.current = newTime;
    applyKeyframeInterpolation(newTime);
    const now_0 = performance.now();
    if (now_0 - uiUpdateTimerRef.current > 100) {
      uiUpdateTimerRef.current = now_0;
      setTimeline((prev_0) => ({
        ...prev_0,
        currentTime: newTime
      }));
    }
  }, [applyKeyframeInterpolation]);
  const playAnimation = () => {
    isPlayingRef.current = true;
    setTimeline((prev_1) => ({
      ...prev_1,
      isPlaying: true
    }));
    if (!animationWorkerRef.current) {
      const worker_2 = new WorkerWrapper$1();
      animationWorkerRef.current = worker_2;
      worker_2.onmessage = (event_2) => {
        if (event_2.data.type === "animation-tick" && event_2.data.delta) {
          updateAnimationTime(16);
        }
      };
      worker_2.postMessage({
        type: "set-interval",
        timer: "animation",
        interval: 16
      });
      worker_2.postMessage({
        type: "start",
        timer: "animation"
      });
    }
  };
  const pauseAnimation = reactExports.useCallback(() => {
    isPlayingRef.current = false;
    setTimeline((prev_2) => ({
      ...prev_2,
      isPlaying: false
    }));
    cleanupWorker(animationWorkerRef, "animation");
  }, []);
  const stopAnimation = reactExports.useCallback(() => {
    pauseAnimation();
    setTimeline((prev_3) => ({
      ...prev_3,
      currentTime: 0
    }));
  }, [pauseAnimation]);
  const setCurrentTime = reactExports.useCallback((time) => {
    const clamped = Math.max(0, Math.min(time, timelineRef.current?.duration ?? 3e3));
    currentTimeRef.current = clamped;
    applyKeyframeInterpolation(clamped);
    setTimeline((prev_4) => ({
      ...prev_4,
      currentTime: clamped
    }));
  }, [applyKeyframeInterpolation]);
  const toggleLoop = reactExports.useCallback(() => {
    setTimeline((prev_5) => ({
      ...prev_5,
      isLooping: !prev_5.isLooping
    }));
  }, []);
  reactExports.useEffect(() => {
    return () => {
      isPlayingRef.current = false;
      cleanupWorker(animationWorkerRef, "animation");
      cleanupWorker(audioResponseWorkerRef, "audio-response");
      cleanupWorker(imperativeLoopWorkerRef, "imperative-preset");
      cleanupWorker(presetWorkerRef, void 0, [{
        type: "stop"
      }, {
        type: "unload-preset"
      }]);
      if (audioForwardTimerRef.current) {
        clearInterval(audioForwardTimerRef.current);
        audioForwardTimerRef.current = null;
      }
      workerImageDataRef.current = null;
      isCanvas2dPresetRef.current = false;
      if (currentPresetRef.current && presetStateRef.current) {
        const ctx_2 = leaferRef.current && canvas2dCtxRef.current ? {
          app: leaferRef.current,
          width,
          height,
          Rect: xe,
          Ellipse: We,
          Polygon: Oe,
          Star: je,
          Line: ti,
          Group: ye,
          Path: di,
          canvas2d: canvas2dCtxRef.current
        } : null;
        if (ctx_2 && currentPresetRef.current.cleanup) {
          try {
            currentPresetRef.current.cleanup(ctx_2, presetStateRef.current);
          } catch (error_9) {
            console.error("[Preview] 预设清理失败:", error_9);
          }
        }
        currentPresetRef.current = null;
        presetStateRef.current = null;
      }
    };
  }, [width, height]);
  reactExports.useEffect(() => {
    if (!isPlayingRef.current) {
      applyKeyframeInterpolation(timeline.currentTime);
    }
  }, [timeline.currentTime, applyKeyframeInterpolation]);
  const createElementFromObject = reactExports.useCallback((obj) => {
    const data_0 = {
      ...obj.data,
      draggable: false
    };
    let shape_3 = null;
    switch (obj.type) {
      case "rect":
        shape_3 = new xe(data_0);
        break;
      case "ellipse":
        shape_3 = new We(data_0);
        break;
      case "polygon":
        shape_3 = new Oe(data_0);
        break;
      case "star":
        shape_3 = new je(data_0);
        break;
      case "line":
        shape_3 = new ti(data_0);
        break;
      case "path":
        shape_3 = new di(data_0);
        break;
      case "image":
        shape_3 = new ei(data_0);
        const createImagePixelCache = (imageShape, objectId_0) => {
          if (imagePixelCacheRef.current.has(objectId_0)) {
            return;
          }
          console.log("[Preview] 尝试创建图片缓存:", objectId_0, imageShape.image, imageShape.ready);
          try {
            const leaferImage = imageShape.image;
            const imgSource = leaferImage?.view || leaferImage;
            let imgWidth = 0, imgHeight = 0;
            if (imgSource instanceof HTMLImageElement) {
              imgWidth = imgSource.naturalWidth || imgSource.width;
              imgHeight = imgSource.naturalHeight || imgSource.height;
            } else if (imgSource instanceof HTMLCanvasElement) {
              imgWidth = imgSource.width;
              imgHeight = imgSource.height;
            } else if (typeof ImageBitmap !== "undefined" && imgSource instanceof ImageBitmap) {
              imgWidth = imgSource.width;
              imgHeight = imgSource.height;
            } else if (leaferImage) {
              imgWidth = leaferImage.width || imageShape.naturalWidth || imageShape.width;
              imgHeight = leaferImage.height || imageShape.naturalHeight || imageShape.height;
            }
            console.log("[Preview] 图片尺寸:", imgWidth, "x", imgHeight, "source:", imgSource?.constructor?.name);
            if (imgWidth > 0 && imgHeight > 0 && imgSource) {
              const canvas_0 = document.createElement("canvas");
              canvas_0.width = imgWidth;
              canvas_0.height = imgHeight;
              const ctx_3 = canvas_0.getContext("2d", {
                willReadFrequently: true
              });
              if (ctx_3) {
                try {
                  ctx_3.drawImage(imgSource, 0, 0, imgWidth, imgHeight);
                  const imageData = ctx_3.getImageData(0, 0, imgWidth, imgHeight);
                  imagePixelCacheRef.current.set(objectId_0, {
                    canvas: canvas_0,
                    ctx: ctx_3,
                    imageData,
                    naturalWidth: imgWidth,
                    naturalHeight: imgHeight
                  });
                  console.log("[Preview] 图片像素缓存已创建:", objectId_0, imgWidth, "x", imgHeight);
                } catch (drawError) {
                  console.error("[Preview] 绘制图片到 Canvas 失败:", drawError);
                }
              }
            } else {
              console.warn("[Preview] 无法获取图片尺寸或图片源:", objectId_0, {
                imgWidth,
                imgHeight,
                imgSource
              });
            }
          } catch (error_10) {
            console.error("[Preview] 创建图片像素缓存失败:", error_10);
          }
        };
        shape_3.on("loaded", () => {
          console.log("[Preview] 图片加载完成 (loaded事件):", obj.name);
          createImagePixelCache(shape_3, obj.id);
        });
        setTimeout(() => {
          if (shape_3.ready || shape_3.image) {
            console.log("[Preview] 图片已就绪，直接创建缓存:", obj.name, shape_3.ready);
            createImagePixelCache(shape_3, obj.id);
          }
        }, 100);
        break;
    }
    if (!shape_3) return null;
    const originalProps_0 = {
      x: shape_3.x,
      y: shape_3.y,
      rotation: shape_3.rotation ?? 0,
      opacity: shape_3.opacity ?? 1
    };
    if (shape_3.fill) originalProps_0.fill = shape_3.fill;
    if (shape_3.width) originalProps_0.width = shape_3.width;
    if (shape_3.height) originalProps_0.height = shape_3.height;
    return {
      shape: shape_3,
      originalProps: originalProps_0
    };
  }, []);
  const loadMaterialForPreview = reactExports.useCallback((material) => {
    pauseAnimation();
    stopAudioResponseLoop();
    if (currentPresetRef.current) {
      console.log("[Preview] 清空现有预设以加载素材");
      unloadImperativePreset();
    }
    for (const shape_4 of objectsRef.current.values()) {
      shape_4.leaferObject.remove();
    }
    objectsRef.current.clear();
    smoothedAudioValuesRef.current.clear();
    imagePixelCacheRef.current.clear();
    setSelectedIdState(null);
    const newKeyframes = /* @__PURE__ */ new Map();
    for (const [objectId_1, keyframes_0] of Object.entries(material.timeline.keyframes)) {
      newKeyframes.set(objectId_1, keyframes_0);
    }
    setTimeline({
      duration: material.timeline.duration,
      currentTime: 0,
      isPlaying: false,
      isLooping: true,
      // 预览默认循环
      keyframes: newKeyframes,
      selectedKeyframe: null
    });
    let hasMusicElements_0 = false;
    if (leaferRef.current) {
      for (const obj_0 of material.objects) {
        const result = createElementFromObject(obj_0);
        if (!result) continue;
        const {
          shape: shape_5,
          originalProps: originalProps_1
        } = result;
        shape_5.editable = false;
        shape_5.on("tap", () => selectObject(obj_0.id));
        leaferRef.current.tree.add(shape_5);
        const audioResponse = obj_0.audioResponse;
        if (audioResponse?.enabled) {
          hasMusicElements_0 = true;
        }
        const zIndex = obj_0.data.zIndex || 0;
        shape_5.zIndex = zIndex;
        objectsRef.current.set(obj_0.id, {
          id: obj_0.id,
          type: obj_0.type,
          name: obj_0.name,
          leaferObject: shape_5,
          audioResponse,
          originalProperties: originalProps_1,
          zIndex
        });
      }
    }
    setObjects(new Map(objectsRef.current));
    setCurrentMaterial(material);
    setHasMusicElements(hasMusicElements_0);
    if (hasMusicElements_0 && isAudioActive) {
      startAudioResponseLoop();
    }
    syncSceneToMainProcess(material, width, height);
    (async () => {
      try {
        const {
          saveLastMaterial
        } = await __vitePreload(async () => {
          const {
            saveLastMaterial: saveLastMaterial2
          } = await import("./userPreferenceService-xnCo2yiA.js");
          return {
            saveLastMaterial: saveLastMaterial2
          };
        }, true ? __vite__mapDeps([0,1,2,3]) : void 0, import.meta.url);
        await saveLastMaterial(material);
      } catch (error_11) {
        console.error("[Preview] 保存素材偏好失败:", error_11);
      }
    })();
  }, [selectObject, pauseAnimation, stopAudioResponseLoop, createElementFromObject, isAudioActive, startAudioResponseLoop, width, height]);
  const clearPreview = reactExports.useCallback(() => {
    pauseAnimation();
    stopAudioResponseLoop();
    stopMainProcessEngine();
    for (const shape_6 of objectsRef.current.values()) {
      shape_6.leaferObject.remove();
    }
    objectsRef.current.clear();
    smoothedAudioValuesRef.current.clear();
    imagePixelCacheRef.current.clear();
    setObjects(/* @__PURE__ */ new Map());
    setSelectedIdState(null);
    setCurrentMaterial(null);
    setHasMusicElements(false);
    setTimeline({
      duration: 3e3,
      currentTime: 0,
      isPlaying: false,
      isLooping: false,
      keyframes: /* @__PURE__ */ new Map(),
      selectedKeyframe: null
    });
  }, [pauseAnimation, stopAudioResponseLoop]);
  const createKeyboardDevice = reactExports.useCallback(async (deviceId, deviceInfo, actualDeviceId) => {
    if (!leaferRef.current) {
      throw new Error("Leafer not initialized");
    }
    const productId = deviceInfo.productId;
    const musicKeyboardLayout = keyboardLayoutMap[productId];
    if (!musicKeyboardLayout) {
      console.warn(`未找到设备 ${productId} 的键盘布局，使用默认布局`);
      return createSimpleKeyboardDevice(deviceId, deviceInfo);
    }
    let layoutRows = musicKeyboardLayout.rows;
    const layoutKeyWidth = musicKeyboardLayout.keyWidth || 20;
    const layoutKeyHeight = musicKeyboardLayout.keyHeight || 20;
    let lightRectData = [];
    let defaultKeyRectData = [];
    let deviceType = 4;
    let useLightRectMapping = false;
    try {
      const {
        deviceManager: deviceManager2
      } = await __vitePreload(async () => {
        const {
          deviceManager: deviceManager3
        } = await import("./index-CMbUujkZ.js").then((n) => n.fo);
        return {
          deviceManager: deviceManager3
        };
      }, true ? __vite__mapDeps([1,2,3]) : void 0, import.meta.url);
      const device = actualDeviceId ? deviceManager2.getDevice(actualDeviceId) : null;
      if (!device) {
        console.error("[Preview] 设备实例未找到，使用简化布局");
        return createSimpleKeyboardDevice(deviceId, deviceInfo);
      }
      const readDeviceMatrix = async () => {
        const deviceInfoData = await getDeviceInfoData(device);
        if (deviceInfoData) {
          deviceType = deviceInfoData.deviceType;
        }
        const lightRectInfoSnapshot = deviceInfoData != null ? {
          deviceType: deviceInfoData.deviceType,
          key_rect_size: deviceInfoData.key_rect_size,
          fourLightDataLength: deviceInfoData.fourLightDataLength
        } : void 0;
        if (actualDeviceId && window.lightEngine) {
          await window.lightEngine.pauseDeviceSync(actualDeviceId);
        }
        try {
          defaultKeyRectData = await getDefaultKeyRect(device);
          if (musicKeyboardLayout.rowsUk && isUkKeyboardLayout(defaultKeyRectData)) {
            layoutRows = musicKeyboardLayout.rowsUk;
          }
          const spaceCount = layoutRows.reduce((count, row) => count + row.filter((keyItem) => keyItem?.key === "Space").length, 0);
          const version = deviceInfoData?.version ?? "";
          useLightRectMapping = [4, 5].includes(deviceType) || [12753, 12797].includes(productId) && version > "1.20" || spaceCount > 1;
          if (useLightRectMapping) {
            lightRectData = await getLightRectData(device, lightRectInfoSnapshot, actualDeviceId);
          }
        } finally {
          if (actualDeviceId && window.lightEngine) {
            await window.lightEngine.resumeDeviceSync(actualDeviceId);
          }
        }
      };
      if (actualDeviceId) {
        await withHighPriorityBatch(actualDeviceId, readDeviceMatrix);
      } else {
        await readDeviceMatrix();
      }
      console.log("[Preview] mapping:", useLightRectMapping ? "lightRect" : "defaultKeyRect", "lightRectLen:", lightRectData.length, "keyRectLen:", defaultKeyRectData.length, "deviceType:", deviceType);
    } catch (error_12) {
      console.error("[Preview] 读取设备数据失败，使用简化布局:", error_12, {
        uiDeviceId: deviceId,
        actualDeviceId,
        path: deviceInfo.path,
        vendorId: deviceInfo.vendorId,
        productId: deviceInfo.productId
      });
      return createSimpleKeyboardDevice(deviceId, deviceInfo);
    }
    const button = new Be({
      // // 添加移除按钮
      around: "center",
      fill: "#FEB027",
      cornerRadius: 20,
      cursor: "pointer",
      children: [{
        tag: "Text",
        fill: "white",
        text: "移除",
        padding: [7, 10]
      }]
    });
    button.on("tap", () => {
      removeKeyboardDevice(deviceId);
    });
    const deviceKey = deviceInfo.path || `${deviceInfo.vendorId}-${deviceInfo.productId}`;
    let savedPosition = null;
    try {
      const {
        getDevicePosition
      } = await __vitePreload(async () => {
        const {
          getDevicePosition: getDevicePosition2
        } = await import("./devicePositionService-ChBf7Ms5.js");
        return {
          getDevicePosition: getDevicePosition2
        };
      }, true ? __vite__mapDeps([4,1,2,3]) : void 0, import.meta.url);
      const position = await getDevicePosition(deviceKey);
      if (position) {
        savedPosition = {
          x: position.x,
          y: position.y,
          scaleX: position.scaleX,
          scaleY: position.scaleY
        };
      }
    } catch (error_13) {
      console.warn("[Preview] 获取设备位置失败，使用默认值:", error_13);
    }
    const keyboardContainer = new ye({
      x: savedPosition?.x ?? 100,
      y: savedPosition?.y ?? 100,
      name: `keyboard-device-${deviceId}`,
      draggable: true,
      scaleX: savedPosition?.scaleX ?? scale,
      scaleY: savedPosition?.scaleY ?? scale,
      zIndex: 1e3,
      editable: true,
      editConfig: {
        hideOnMove: true
      }
    });
    keyboardContainer.on(it.DOUBLE_TAP, () => {
      resetDevice(deviceId);
    });
    let savePositionTimer = null;
    keyboardContainer.on(nt.END, () => {
      if (savePositionTimer) {
        clearTimeout(savePositionTimer);
      }
      savePositionTimer = setTimeout(async () => {
        try {
          const {
            saveDevicePosition
          } = await __vitePreload(async () => {
            const {
              saveDevicePosition: saveDevicePosition2
            } = await import("./devicePositionService-ChBf7Ms5.js");
            return {
              saveDevicePosition: saveDevicePosition2
            };
          }, true ? __vite__mapDeps([4,1,2,3]) : void 0, import.meta.url);
          await saveDevicePosition(deviceKey, {
            x: keyboardContainer.x ?? 100,
            y: keyboardContainer.y ?? 100,
            scaleX: keyboardContainer.scaleX ?? scale,
            scaleY: keyboardContainer.scaleY ?? scale
          });
        } catch (error_14) {
          console.error("[Preview] 保存设备位置失败:", error_14);
        }
      }, 500);
    });
    const keys = /* @__PURE__ */ new Map();
    const keyPosition = [];
    if (useLightRectMapping) {
      let currentOffset = 0;
      layoutRows.forEach((row) => {
        row.forEach((keyItem) => {
          if (keyItem && keyItem.key) {
            const step = 2;
            const foundKeyIndex = currentOffset;
            currentOffset += step;
            if (foundKeyIndex + 1 < lightRectData.length) {
              const lowByte = lightRectData[foundKeyIndex];
              const highByte = lightRectData[foundKeyIndex + 1];
              const val = highLowToDecimal(highByte, lowByte);
              keyPosition.push({
                index: val * 3,
                code: keyItem.key,
                x: keyItem.x,
                y: keyItem.y
              });
            }
          }
        });
      });
    } else {
      const layoutCoordMap = /* @__PURE__ */ new Map();
      layoutRows.forEach((row_0) => {
        row_0.forEach((keyItem_0) => {
          if (keyItem_0?.key && keyItem_0.x !== void 0 && keyItem_0.y !== void 0 && !layoutCoordMap.has(keyItem_0.key)) {
            layoutCoordMap.set(keyItem_0.key, {
              x: keyItem_0.x,
              y: keyItem_0.y
            });
          }
        });
      });
      const hexToKeyCodeMap = /* @__PURE__ */ new Map();
      Object.entries(codeValues).forEach(([code, hexArray]) => {
        if (Array.isArray(hexArray) && hexArray.length >= 2) {
          const key = hexArray.map((v_0) => v_0.toLocaleUpperCase()).join(",");
          hexToKeyCodeMap.set(key, code);
        }
      });
      for (let i_0 = 0; i_0 + 2 < defaultKeyRectData.length; i_0 += 3) {
        const hexKey = [formatToHex(defaultKeyRectData[i_0]), formatToHex(defaultKeyRectData[i_0 + 1]), formatToHex(defaultKeyRectData[i_0 + 2])].map((v_1) => v_1.toLocaleUpperCase()).join(",");
        const foundKey = hexToKeyCodeMap.get(hexKey);
        if (!foundKey) continue;
        const coord = layoutCoordMap.get(foundKey);
        if (!coord) continue;
        keyPosition.push({
          index: i_0,
          code: foundKey,
          x: coord.x,
          y: coord.y
        });
      }
    }
    console.log(`[Preview] 设备 ${productId} 按键位置数量: ${keyPosition.length}`);
    if (keyPosition.length === 0) {
      console.error("[Preview] 未解析到任何按键索引，使用简化布局", {
        productId,
        deviceType,
        useLightRectMapping,
        lightRectLen: lightRectData.length,
        keyRectLen: defaultKeyRectData.length
      });
      return createSimpleKeyboardDevice(deviceId, deviceInfo);
    }
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    keyPosition.forEach((keyItem_1) => {
      if (keyItem_1.x !== void 0 && keyItem_1.y !== void 0) {
        minX = Math.min(minX, keyItem_1.x - layoutKeyWidth / 2);
        minY = Math.min(minY, keyItem_1.y - layoutKeyHeight / 2);
        maxX = Math.max(maxX, keyItem_1.x + layoutKeyWidth / 2);
        maxY = Math.max(maxY, keyItem_1.y + layoutKeyHeight / 2);
      }
    });
    const padding = 3;
    const bgWidth = maxX - minX + padding * scale;
    const bgHeight = maxY - minY + padding * scale;
    const background = new xe({
      x: minX - padding,
      y: minY - padding,
      width: bgWidth,
      height: bgHeight,
      fill: "#2e2d2d",
      cornerRadius: 8,
      name: "keyboard-background"
    });
    keyboardContainer.add(background);
    const deviceNameLabel = new hi({
      text: deviceInfo.productName || `设备 ${deviceInfo.productId}`,
      fontSize: 7,
      fill: "#ffffff",
      x: minX - padding,
      y: minY - padding - 10,
      width: bgWidth,
      name: "device-name-label",
      textWrap: "none",
      textOverflow: "ellipsis"
      // resizeFontSize: true
    });
    keyboardContainer.add(deviceNameLabel);
    keyPosition.forEach((keyItem_2) => {
      if (keyItem_2.code && keyItem_2.x !== void 0 && keyItem_2.y !== void 0) {
        const key_0 = new xe({
          x: keyItem_2.x,
          y: keyItem_2.y,
          width: layoutKeyWidth,
          height: layoutKeyHeight,
          fill: "#000000",
          cornerRadius: 1,
          name: `${keyItem_2.index}`,
          around: "center"
        });
        keyboardContainer.add(key_0);
        keys.set(keyItem_2.index.toString(), key_0);
      }
    });
    const maxIndex = Math.max(...keyPosition.map((k) => k.index)) + 3;
    const totalH = bgHeight + (deviceNameLabel?.height || 0);
    if (!savedPosition) {
      const sx_0 = keyboardContainer.scaleX ?? 1;
      const sy = keyboardContainer.scaleY ?? 1;
      const stackIdx = Number.parseInt(deviceId, 10);
      const stepX = 28;
      const stepY = 22;
      const stackDx = Number.isFinite(stackIdx) && stackIdx > 0 ? stackIdx * stepX : 0;
      const stackDy = Number.isFinite(stackIdx) && stackIdx > 0 ? stackIdx * stepY : 0;
      keyboardContainer.x = (width - bgWidth * sx_0) / 2 + stackDx;
      keyboardContainer.y = (height - totalH * sy) / 2 + stackDy;
    }
    leaferRef.current.sky.add(keyboardContainer);
    const isUsb = deviceType === 4 || deviceType === 5;
    const dl = isUsb ? 63 : 31;
    requestAnimationFrame(() => {
      const positions = extractKeyPositions(keys);
      registerDeviceToMainProcess(deviceId, deviceInfo.path || "", dl, maxIndex, positions, actualDeviceId);
    });
    return {
      id: deviceId,
      deviceInfo,
      container: keyboardContainer,
      keys,
      maxIndex,
      initialWidth: bgWidth,
      initialHeight: totalH,
      actualDeviceId
    };
  }, []);
  const createSimpleKeyboardDevice = reactExports.useCallback((deviceId_0, deviceInfo_0) => {
    if (!leaferRef.current) {
      throw new Error("Leafer not initialized");
    }
    const keyWidth = 18;
    const keyHeight = 18;
    const gap = 2;
    const rows = 5;
    const cols = 13;
    const keys_0 = /* @__PURE__ */ new Map();
    const bgWidth_0 = cols * (keyWidth + gap) + gap;
    const bgHeight_0 = rows * (keyHeight + gap) + gap;
    const keyboardContainer_0 = new ye({
      x: (width - bgWidth_0) / 2,
      y: (height - bgHeight_0) / 2,
      name: `keyboard-device-${deviceId_0}`,
      draggable: true,
      zIndex: 1e3
    });
    const deviceNameLabel_0 = new hi({
      text: deviceInfo_0.productName || `设备 ${deviceInfo_0.productId}`,
      fontSize: 10,
      fill: "#ffffff",
      fontWeight: "bold",
      x: 0,
      y: -20,
      name: "device-name-label",
      textWrap: "none",
      textOverflow: "ellipsis",
      resizeFontSize: true
    });
    keyboardContainer_0.add(deviceNameLabel_0);
    const background_0 = new xe({
      x: 0,
      y: 0,
      width: bgWidth_0,
      height: bgHeight_0,
      fill: "#2e2d2d",
      cornerRadius: 8,
      name: "keyboard-background"
    });
    keyboardContainer_0.add(background_0);
    let keyIndex = 0;
    for (let row_1 = 0; row_1 < rows; row_1++) {
      for (let col = 0; col < cols; col++) {
        const keyX = gap + col * (keyWidth + gap) + keyWidth / 2;
        const keyY = gap + row_1 * (keyHeight + gap) + keyHeight / 2;
        const key_1 = new xe({
          x: keyX,
          y: keyY,
          width: keyWidth,
          height: keyHeight,
          fill: "#000000",
          cornerRadius: 3,
          name: `${keyIndex}`,
          around: "center"
        });
        keyboardContainer_0.add(key_1);
        keys_0.set(keyIndex.toString(), key_1);
        keyIndex++;
      }
    }
    leaferRef.current.sky.add(keyboardContainer_0);
    return {
      id: deviceId_0,
      deviceInfo: deviceInfo_0,
      container: keyboardContainer_0,
      keys: keys_0,
      maxIndex: keyIndex * 3,
      initialWidth: bgWidth_0,
      initialHeight: bgHeight_0
    };
  }, []);
  const removeKeyboardDevice = reactExports.useCallback((deviceId_1) => {
    const device_0 = keyboardDevicesRef.current.get(deviceId_1);
    if (device_0) {
      device_0.container.remove();
      if (device_0.cleanup) {
        device_0.cleanup();
      }
      keyboardDevicesRef.current.delete(deviceId_1);
      window.lightEngine?.removeDevice(deviceId_1);
    }
  }, []);
  const updateKeyboardLights = async () => {
    if (isUpdatingLightsRef.current) {
      return;
    }
    if (usePreviewDeviceStore.getState().pausePreviewSync) {
      return;
    }
    if (!leaferRef.current) return;
    isUpdatingLightsRef.current = true;
    try {
      if (isCanvas2dPresetRef.current && workerImageDataRef.current) {
        const pixelData = workerImageDataRef.current.data;
        for (const [, device] of keyboardDevicesRef.current) {
          const actualId = device.actualDeviceId;
          if (actualId && usePreviewDeviceStore.getState().isDevicePreviewSyncPaused(actualId)) {
            continue;
          }
          if (lightBufferRef.current.length < device.maxIndex) {
            lightBufferRef.current = new Array(device.maxIndex).fill(0);
          } else {
            lightBufferRef.current.fill(0, 0, device.maxIndex);
          }
          const lightData = lightBufferRef.current;
          for (const [, key] of device.keys) {
            const keyBox = key.worldBoxBounds;
            const px = Math.round(Math.max(0, Math.min(width - 1, keyBox.x + keyBox.width / 2)));
            const py = Math.round(Math.max(0, Math.min(height - 1, keyBox.y + keyBox.height / 2)));
            const idx = (py * width + px) * 4;
            let r = 0, g = 0, b = 0;
            if (pixelData[idx + 3] > 10) {
              r = pixelData[idx];
              g = pixelData[idx + 1];
              b = pixelData[idx + 2];
            }
            key.fill = `rgb(${r}, ${g}, ${b})`;
            const keyIndex = parseInt(key.name || "0");
            if (keyIndex < lightData.length - 2) {
              lightData[keyIndex] = r;
              lightData[keyIndex + 1] = g;
              lightData[keyIndex + 2] = b;
            }
          }
          window.lightEngine?.syncLightData(lightData.slice(0, device.maxIndex), device.id);
        }
        return;
      }
      if (!samplingCanvasRef.current) {
        const c = document.createElement("canvas");
        c.width = width;
        c.height = height;
        samplingCanvasRef.current = c;
        samplingCtxRef.current = c.getContext("2d", {
          willReadFrequently: true
        });
      }
      const samplingCtx = samplingCtxRef.current;
      if (!samplingCtx) return;
      samplingCtx.clearRect(0, 0, width, height);
      if (overlayCanvasRef.current) {
        try {
          samplingCtx.drawImage(overlayCanvasRef.current, 0, 0, width, height);
        } catch {
        }
      }
      const treeCanvas = leaferRef.current.tree?.canvas;
      if (treeCanvas?.context) {
        const sourceCanvas = treeCanvas.context.canvas;
        if (sourceCanvas) {
          samplingCtx.drawImage(sourceCanvas, 0, 0, width, height);
        }
      }
      const sampledData = samplingCtx.getImageData(0, 0, width, height);
      for (const [, device] of keyboardDevicesRef.current) {
        const actualId = device.actualDeviceId;
        if (actualId && usePreviewDeviceStore.getState().isDevicePreviewSyncPaused(actualId)) {
          continue;
        }
        if (lightBufferRef.current.length < device.maxIndex) {
          lightBufferRef.current = new Array(device.maxIndex).fill(0);
        } else {
          lightBufferRef.current.fill(0, 0, device.maxIndex);
        }
        const lightData = lightBufferRef.current;
        for (const [, key] of device.keys) {
          const keyBox = key.worldBoxBounds;
          const centerX = keyBox.x + keyBox.width / 2;
          const centerY = keyBox.y + keyBox.height / 2;
          const px = Math.round(Math.max(0, Math.min(width - 1, centerX)));
          const py = Math.round(Math.max(0, Math.min(height - 1, centerY)));
          const idx = (py * width + px) * 4;
          let r = 0, g = 0, b = 0;
          if (sampledData.data[idx + 3] > 10) {
            r = sampledData.data[idx];
            g = sampledData.data[idx + 1];
            b = sampledData.data[idx + 2];
          }
          key.fill = `rgb(${r}, ${g}, ${b})`;
          const keyIndex = parseInt(key.name || "0");
          if (keyIndex < lightData.length - 2) {
            lightData[keyIndex] = r;
            lightData[keyIndex + 1] = g;
            lightData[keyIndex + 2] = b;
          }
        }
        window.lightEngine?.syncLightData(lightData.slice(0, device.maxIndex), device.id);
      }
    } finally {
      isUpdatingLightsRef.current = false;
    }
  };
  const resetDevice = reactExports.useCallback(async (deviceId_2) => {
    const device_1 = keyboardDevicesRef.current.get(deviceId_2);
    if (device_1 && device_1.container) {
      const resetW = device_1.initialWidth * scale;
      const resetH = device_1.initialHeight * scale;
      const cx = (width - resetW) / 2;
      const cy = (height - resetH) / 2;
      device_1.container.x = cx;
      device_1.container.y = cy;
      device_1.container.rotation = 0;
      device_1.container.resizeWidth(resetW);
      device_1.container.resizeHeight(resetH);
      if ((device_1.container.scaleX ?? 1) < 0) device_1.container.scaleX = scale;
      if ((device_1.container.scaleY ?? 1) < 0) device_1.container.scaleY = scale;
      if (leaferRef.current?.editor) {
        leaferRef.current.editor.cancel();
        requestAnimationFrame(() => {
          if (leaferRef.current?.editor && device_1.container) {
            leaferRef.current.editor.select(device_1.container);
          }
        });
      }
      try {
        const {
          saveDevicePosition: saveDevicePosition_0
        } = await __vitePreload(async () => {
          const {
            saveDevicePosition: saveDevicePosition_02
          } = await import("./devicePositionService-ChBf7Ms5.js");
          return {
            saveDevicePosition: saveDevicePosition_02
          };
        }, true ? __vite__mapDeps([4,1,2,3]) : void 0, import.meta.url);
        const deviceKey_0 = device_1.deviceInfo.path || `${device_1.deviceInfo.vendorId}-${device_1.deviceInfo.productId}`;
        await saveDevicePosition_0(deviceKey_0, {
          x: cx,
          y: cy,
          scaleX: scale,
          scaleY: scale
        });
      } catch (error_15) {
        console.error("[Preview] 保存重置后的设备状态失败:", error_15);
      }
    }
  }, [width, height]);
  const toggleLockRatio = reactExports.useCallback(() => {
    if (leaferRef.current && leaferRef.current.editor) {
      leaferRef.current.editor.config.lockRatio = !lockRatioState;
    }
    setLockRatioState(!lockRatioState);
  }, [lockRatioState]);
  const startLightSyncLoop = (interval = 16) => {
    if (lightSyncWorkerRef.current) {
      lightSyncWorkerRef.current.postMessage({
        type: "stop",
        timer: "light-sync"
      });
      lightSyncWorkerRef.current.terminate();
      lightSyncWorkerRef.current = null;
    }
    const worker_3 = new WorkerWrapper$1();
    lightSyncWorkerRef.current = worker_3;
    worker_3.onmessage = async (event_3) => {
      if (event_3.data.type === "light-sync-tick") {
        await updateKeyboardLights();
      }
    };
    worker_3.postMessage({
      type: "set-interval",
      timer: "light-sync",
      interval
    });
    worker_3.postMessage({
      type: "start",
      timer: "light-sync"
    });
    return () => {
      if (lightSyncWorkerRef.current) {
        lightSyncWorkerRef.current.postMessage({
          type: "stop",
          timer: "light-sync"
        });
        lightSyncWorkerRef.current.terminate();
        lightSyncWorkerRef.current = null;
      }
    };
  };
  return {
    // Refs
    containerRef,
    leaferRef,
    keyboardDevicesRef,
    // State
    objects,
    selectedId,
    timeline,
    currentMaterial,
    // Canvas
    initLeafer,
    initOverlayCanvas,
    destroyLeafer,
    // Preview operations
    loadMaterialForPreview,
    clearPreview,
    selectObject,
    // Timeline
    playAnimation,
    pauseAnimation,
    stopAnimation,
    setCurrentTime,
    toggleLoop,
    // Keyboard Device
    createKeyboardDevice,
    removeKeyboardDevice,
    updateKeyboardLights,
    startLightSyncLoop,
    // Audio Reactive (音频响应 - 声明式预设)
    isAudioActive,
    hasMusicElements,
    startAudioCapture,
    stopAudioCapture,
    toggleAudioCapture,
    startAudioResponseLoop,
    stopAudioResponseLoop,
    // Screen Capture (屏幕捕获 - 屏幕映射预设)
    isScreenCaptureActive,
    startScreenCapture,
    stopScreenCapture,
    toggleScreenCapture,
    // Imperative Preset (命令式预设)
    currentPreset,
    loadHybridPreset,
    loadImperativePreset,
    unloadImperativePreset,
    updatePresetParams,
    startImperativePresetLoop,
    stopImperativePresetLoop,
    // Device Overlay (设备操作)
    toggleLockRatio,
    lockRatioState,
    activeDeviceOverlay
  };
}
const CompactMaterialCard = reactExports.memo(function CompactMaterialCard2(t0) {
  const $ = compilerRuntimeExports.c(39);
  const {
    material,
    preset,
    isActive: t1,
    isPreset: t2,
    onClick
  } = t0;
  const isActive = t1 === void 0 ? false : t1;
  const isPreset = t2 === void 0 ? false : t2;
  const name = material?.name || preset?.name || "未命名";
  const type = material?.category || PresetType.ambient.value;
  const item = preset ?? material;
  let t3;
  if ($[0] !== item) {
    t3 = getMaterialColor(item);
    $[0] = item;
    $[1] = t3;
  } else {
    t3 = $[1];
  }
  const color = t3;
  let t4;
  if ($[2] !== item) {
    t4 = getMaterialTypeLabel(item);
    $[2] = item;
    $[3] = t4;
  } else {
    t4 = $[3];
  }
  const typeLabel = t4;
  const t5 = isActive ? color === "purple" ? "border-purple-500 bg-purple-500/20 shadow-lg shadow-purple-500/30 dark:shadow-[0_0_16px_oklch(0.65_0.28_290/0.40)]" : color === "emerald" ? "border-emerald-500 bg-emerald-500/20 shadow-lg shadow-emerald-500/30 dark:shadow-[0_0_16px_oklch(0.72_0.17_155/0.38)]" : "border-cyan-500 bg-cyan-500/20 shadow-lg shadow-cyan-500/30 dark:shadow-[0_0_16px_var(--glow-brand)]" : "border-border/50 bg-card/50 hover:border-border/80";
  const t6 = !isActive && (color === "purple" ? "dark:hover:shadow-[0_0_10px_oklch(0.65_0.28_290/0.25)]" : color === "emerald" ? "dark:hover:shadow-[0_0_10px_oklch(0.72_0.17_155/0.22)]" : "dark:hover:shadow-[0_0_10px_var(--glow-brand)]");
  let t7;
  if ($[4] !== t5 || $[5] !== t6) {
    t7 = cn("group relative flex w-24 shrink-0 cursor-pointer flex-col overflow-hidden rounded-lg border transition-all duration-200", "hover:scale-105 hover:shadow-md", t5, t6);
    $[4] = t5;
    $[5] = t6;
    $[6] = t7;
  } else {
    t7 = $[6];
  }
  const t8 = color === "purple" ? "bg-linear-to-br from-purple-500/10 to-pink-500/10" : color === "emerald" ? "bg-linear-to-br from-emerald-500/10 to-cyan-500/10" : "bg-linear-to-br from-cyan-500/10 to-purple-500/10";
  let t9;
  if ($[7] !== t8) {
    t9 = cn("relative flex h-16 items-center justify-center", t8);
    $[7] = t8;
    $[8] = t9;
  } else {
    t9 = $[8];
  }
  let t10;
  if ($[9] !== material || $[10] !== preset || $[11] !== type) {
    t10 = renderMaterialCardIcon({
      material,
      preset,
      fallbackCategory: type,
      fallbackIconSizeClass: "size-6"
    });
    $[9] = material;
    $[10] = preset;
    $[11] = type;
    $[12] = t10;
  } else {
    t10 = $[12];
  }
  let t11;
  if ($[13] !== color || $[14] !== isPreset) {
    t11 = isPreset && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-1 top-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex size-4 items-center justify-center rounded-full", color === "purple" ? "bg-purple-500/30" : color === "emerald" ? "bg-emerald-500/30" : "bg-cyan-500/30"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-2.5 text-white" }) }) });
    $[13] = color;
    $[14] = isPreset;
    $[15] = t11;
  } else {
    t11 = $[15];
  }
  let t12;
  if ($[16] !== color || $[17] !== isActive) {
    t12 = isActive && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-1 left-1/2 -translate-x-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex items-center justify-center rounded-full p-1", color === "purple" ? "bg-purple-500" : color === "emerald" ? "bg-emerald-500" : "bg-cyan-500"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePause, { className: "size-7 text-white" }) }) });
    $[16] = color;
    $[17] = isActive;
    $[18] = t12;
  } else {
    t12 = $[18];
  }
  let t13;
  if ($[19] !== t10 || $[20] !== t11 || $[21] !== t12 || $[22] !== t9) {
    t13 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: t9, children: [
      t10,
      t11,
      t12
    ] });
    $[19] = t10;
    $[20] = t11;
    $[21] = t12;
    $[22] = t9;
    $[23] = t13;
  } else {
    t13 = $[23];
  }
  let t14;
  if ($[24] !== name) {
    t14 = /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-center text-[10px] font-medium leading-tight", children: name });
    $[24] = name;
    $[25] = t14;
  } else {
    t14 = $[25];
  }
  const t15 = color === "purple" ? "bg-purple-500/20 text-purple-400" : color === "emerald" ? "bg-emerald-500/20 text-emerald-400" : "bg-cyan-500/20 text-cyan-400";
  let t16;
  if ($[26] !== t15) {
    t16 = cn("mx-auto rounded px-1 py-0.5 text-[8px] font-medium", t15);
    $[26] = t15;
    $[27] = t16;
  } else {
    t16 = $[27];
  }
  let t17;
  if ($[28] !== t16 || $[29] !== typeLabel) {
    t17 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: t16, children: typeLabel });
    $[28] = t16;
    $[29] = typeLabel;
    $[30] = t17;
  } else {
    t17 = $[30];
  }
  let t18;
  if ($[31] !== t14 || $[32] !== t17) {
    t18 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col justify-center gap-0.5 p-1.5", children: [
      t14,
      t17
    ] });
    $[31] = t14;
    $[32] = t17;
    $[33] = t18;
  } else {
    t18 = $[33];
  }
  let t19;
  if ($[34] !== onClick || $[35] !== t13 || $[36] !== t18 || $[37] !== t7) {
    t19 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: t7, onClick, children: [
      t13,
      t18
    ] });
    $[34] = onClick;
    $[35] = t13;
    $[36] = t18;
    $[37] = t7;
    $[38] = t19;
  } else {
    t19 = $[38];
  }
  return t19;
});
function MaterialDrawer(t0) {
  const $ = compilerRuntimeExports.c(46);
  const {
    materials,
    currentMaterialId,
    currentSource,
    currentScope,
    onSwitchMaterial,
    defaultExpanded: t1
  } = t0;
  const defaultExpanded = t1 === void 0 ? true : t1;
  const [isExpanded, setIsExpanded] = reactExports.useState(defaultExpanded);
  const [filterType, setFilterType] = reactExports.useState("all");
  const [filterSource, setFilterSource] = reactExports.useState("all");
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const scrollContainerRef = reactExports.useRef(null);
  const activeCardRef = reactExports.useRef(null);
  let t2;
  if ($[0] !== filterSource || $[1] !== filterType || $[2] !== searchQuery) {
    t2 = (item) => {
      if (filterType !== "all") {
        if (!matchesMaterialTypeFilter(item.data, filterType)) {
          return false;
        }
      }
      if (filterSource !== "all") {
        if (filterSource === "network" && !item.isFromNet) {
          return false;
        }
        if (filterSource === "user" && item.isFromNet) {
          return false;
        }
      }
      if (searchQuery.trim()) {
        const name = item.data.name.toLowerCase();
        const query = searchQuery.toLowerCase();
        return name.includes(query);
      }
      return true;
    };
    $[0] = filterSource;
    $[1] = filterType;
    $[2] = searchQuery;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  const filteredMaterials = materials.filter(t2);
  let t3;
  let t4;
  if ($[4] !== currentMaterialId || $[5] !== isExpanded) {
    t3 = () => {
      if (isExpanded && currentMaterialId && scrollContainerRef.current) {
        const timer = setTimeout(() => {
          const activeCard = scrollContainerRef.current?.querySelector('[data-active="true"]');
          if (activeCard) {
            activeCard.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            });
          }
        }, 100);
        return () => clearTimeout(timer);
      }
    };
    t4 = [currentMaterialId, isExpanded];
    $[4] = currentMaterialId;
    $[5] = isExpanded;
    $[6] = t3;
    $[7] = t4;
  } else {
    t3 = $[6];
    t4 = $[7];
  }
  reactExports.useEffect(t3, t4);
  let t5;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = () => {
      setIsExpanded(_temp);
    };
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  const toggleExpanded = t5;
  const t6 = isExpanded ? "h-64" : "h-12";
  let t7;
  if ($[9] !== t6) {
    t7 = cn("border-t border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-300", t6);
    $[9] = t6;
    $[10] = t7;
  } else {
    t7 = $[10];
  }
  let t8;
  let t9;
  if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "size-4 text-cyan-400" });
    t9 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "素材列表" });
    $[11] = t8;
    $[12] = t9;
  } else {
    t8 = $[11];
    t9 = $[12];
  }
  const t10 = filterType !== "all" || filterSource !== "all" || searchQuery.trim() ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "(",
    filteredMaterials.length,
    " / ",
    materials.length,
    " 个素材)"
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "(",
    materials.length,
    " 个素材)"
  ] });
  let t11;
  if ($[13] !== t10) {
    t11 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      t8,
      t9,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: t10 })
    ] });
    $[13] = t10;
    $[14] = t11;
  } else {
    t11 = $[14];
  }
  let t12;
  if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
    t12 = (value) => setFilterType(value);
    $[15] = t12;
  } else {
    t12 = $[15];
  }
  let t13;
  if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
    t13 = /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-7 w-32 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "全部类型" }) });
    $[16] = t13;
  } else {
    t13 = $[16];
  }
  let t14;
  if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
    t14 = /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "全部类型" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "spectrum", children: "音乐律动" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "screen", children: "屏幕映射" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "ambient", children: "动态效果" })
    ] });
    $[17] = t14;
  } else {
    t14 = $[17];
  }
  let t15;
  if ($[18] !== filterType) {
    t15 = /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: filterType, onValueChange: t12, children: [
      t13,
      t14
    ] });
    $[18] = filterType;
    $[19] = t15;
  } else {
    t15 = $[19];
  }
  let t16;
  if ($[20] !== currentScope || $[21] !== filterSource) {
    t16 = currentScope === "user" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: filterSource, onValueChange: (value_0) => setFilterSource(value_0), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-7 w-28 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "全部来源" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "全部来源" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "network", children: "网络素材" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "user", children: "我的素材" })
      ] })
    ] });
    $[20] = currentScope;
    $[21] = filterSource;
    $[22] = t16;
  } else {
    t16 = $[22];
  }
  let t17;
  if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
    t17 = /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-2 top-1/2 size-3 -translate-y-1/2 text-muted-foreground" });
    $[23] = t17;
  } else {
    t17 = $[23];
  }
  let t18;
  if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
    t18 = (e) => setSearchQuery(e.target.value);
    $[24] = t18;
  } else {
    t18 = $[24];
  }
  let t19;
  if ($[25] !== searchQuery) {
    t19 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      t17,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", placeholder: "搜索素材...", value: searchQuery, onChange: t18, className: "h-7 w-40 pl-7 text-xs" })
    ] });
    $[25] = searchQuery;
    $[26] = t19;
  } else {
    t19 = $[26];
  }
  let t20;
  if ($[27] !== isExpanded) {
    t20 = /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: toggleExpanded, className: "h-7 gap-1 px-2 text-xs", children: isExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "size-3.5" }),
      "收起"
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "size-3.5" }),
      "展开"
    ] }) });
    $[27] = isExpanded;
    $[28] = t20;
  } else {
    t20 = $[28];
  }
  let t21;
  if ($[29] !== t15 || $[30] !== t16 || $[31] !== t19 || $[32] !== t20) {
    t21 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-1 justify-end", children: [
      t15,
      t16,
      t19,
      t20
    ] });
    $[29] = t15;
    $[30] = t16;
    $[31] = t19;
    $[32] = t20;
    $[33] = t21;
  } else {
    t21 = $[33];
  }
  let t22;
  if ($[34] !== t11 || $[35] !== t21) {
    t22 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-10 items-center justify-between border-b border-border/30 px-4 gap-3", children: [
      t11,
      t21
    ] });
    $[34] = t11;
    $[35] = t21;
    $[36] = t22;
  } else {
    t22 = $[36];
  }
  const t23 = isExpanded ? "h-52 opacity-100" : "h-0 opacity-0";
  let t24;
  if ($[37] !== t23) {
    t24 = cn("overflow-y-auto transition-all duration-300", t23);
    $[37] = t23;
    $[38] = t24;
  } else {
    t24 = $[38];
  }
  const t25 = filteredMaterials.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full items-center justify-center text-xs text-muted-foreground", children: materials.length === 0 ? "暂无素材" : "暂无符合条件的素材" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-6 gap-3 p-4 xl:grid-cols-8 2xl:grid-cols-10", children: filteredMaterials.map((item_0) => {
    const isActive = item_0.id === currentMaterialId && item_0.type === currentSource && item_0.scope === currentScope;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: isActive ? activeCardRef : void 0, "data-active": isActive, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CompactMaterialCard, { material: "objects" in item_0.data ? item_0.data : void 0, preset: "mode" in item_0.data ? item_0.data : void 0, isActive, onClick: () => onSwitchMaterial(item_0.id, item_0.type, item_0.scope) }) }, `${item_0.scope}-${item_0.type}-${item_0.id}`);
  }) });
  let t26;
  if ($[39] !== t24 || $[40] !== t25) {
    t26 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: scrollContainerRef, className: t24, children: t25 });
    $[39] = t24;
    $[40] = t25;
    $[41] = t26;
  } else {
    t26 = $[41];
  }
  let t27;
  if ($[42] !== t22 || $[43] !== t26 || $[44] !== t7) {
    t27 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: t7, children: [
      t22,
      t26
    ] });
    $[42] = t22;
    $[43] = t26;
    $[44] = t7;
    $[45] = t27;
  } else {
    t27 = $[45];
  }
  return t27;
}
function _temp(prev) {
  return !prev;
}
function usePreviewConnections(options) {
  const {
    createKeyboardDevice,
    removeKeyboardDevice,
    startLightSyncLoop,
    keyboardDevicesRef,
    confirmStopLightingConflicts
  } = options;
  const {
    devices: authorizedDevices
  } = useAuthorizedDevicesContext();
  const [selectedDeviceIds, setSelectedDeviceIds] = reactExports.useState([]);
  const [deviceIdMapping, setDeviceIdMapping] = reactExports.useState(/* @__PURE__ */ new Map());
  const deviceIdMappingRef = reactExports.useRef(/* @__PURE__ */ new Map());
  const previewLightSyncLoopCleanupRef = reactExports.useRef(null);
  const hasAutoSelectedRef = reactExports.useRef(false);
  const selectionRunRef = reactExports.useRef(Promise.resolve());
  const confirmStopLightingConflictsRef = reactExports.useRef(confirmStopLightingConflicts);
  confirmStopLightingConflictsRef.current = confirmStopLightingConflicts;
  const stopMatrixPlaybackForPreviewDevice = reactExports.useCallback(async (actualDeviceId) => {
    const connectedDeviceId = useActiveDeviceStore.getState().connectedDeviceId;
    if (!connectedDeviceId) return;
    const targetsActiveDevice = actualDeviceId ? connectedDeviceId === actualDeviceId : deviceIdMappingRef.current.has(connectedDeviceId);
    if (targetsActiveDevice) {
      await stopSelectedMatrixPlayback();
    }
  }, []);
  const rollbackPreviewDeviceSelection = reactExports.useCallback((uiDeviceId, actualDeviceId_0) => {
    setSelectedDeviceIds((prev) => prev.filter((id) => id !== uiDeviceId));
    setDeviceIdMapping((prev_0) => {
      const next = new Map(prev_0);
      next.delete(actualDeviceId_0);
      return next;
    });
    const nextMapping = new Map(deviceIdMappingRef.current);
    nextMapping.delete(actualDeviceId_0);
    deviceIdMappingRef.current = nextMapping;
  }, []);
  reactExports.useEffect(() => {
    deviceIdMappingRef.current = deviceIdMapping;
  }, [deviceIdMapping]);
  const handleDeviceSelectionChange = reactExports.useCallback(async (ids) => {
    selectionRunRef.current = selectionRunRef.current.then(async () => {
      setSelectedDeviceIds(ids);
      const allDevices = authorizedDevices;
      const currentSet = new Set(ids);
      const previousSet = new Set(Array.from(keyboardDevicesRef.current.keys()));
      for (const uiDeviceId_0 of previousSet) {
        if (!currentSet.has(uiDeviceId_0)) {
          const actualId = [...deviceIdMappingRef.current.entries()].find(([, uiId]) => uiId === uiDeviceId_0)?.[0];
          if (actualId) {
            await exitSyncLightingForDevice(actualId);
            usePreviewDeviceStore.getState().unregisterPreviewDevice(actualId);
          }
          removeKeyboardDevice(uiDeviceId_0);
        }
      }
      for (const uiDeviceId_1 of ids) {
        if (!previousSet.has(uiDeviceId_1)) {
          const deviceIndex = parseInt(uiDeviceId_1, 10);
          const deviceInfo = allDevices[deviceIndex];
          if (!deviceInfo) continue;
          try {
            const actualDeviceId_1 = await connectAuthorizedDeviceByIndex(deviceInfo, deviceIndex, {
              skipSyncCompanion: true
            });
            setDeviceIdMapping((prev_1) => {
              const next_0 = new Map(prev_1);
              next_0.set(actualDeviceId_1, uiDeviceId_1);
              return next_0;
            });
            deviceIdMappingRef.current = new Map(deviceIdMappingRef.current).set(actualDeviceId_1, uiDeviceId_1);
            const connectedDeviceId_0 = useActiveDeviceStore.getState().connectedDeviceId;
            const isActiveDriverDevice = connectedDeviceId_0 === actualDeviceId_1;
            if (isActiveDriverDevice) {
              const light = useLightStore.getState();
              const needsConfirm = Boolean(light.selectedMatrixAnimationId) || isGameInteractionActive();
              if (needsConfirm) {
                const confirm = confirmStopLightingConflictsRef.current;
                const allowed = confirm ? await confirm() : true;
                if (!allowed) {
                  rollbackPreviewDeviceSelection(uiDeviceId_1, actualDeviceId_1);
                  continue;
                }
              }
            }
            await stopMatrixPlaybackForPreviewDevice(actualDeviceId_1);
            if (isActiveDriverDevice) {
              await stopLightingModes(["game"]);
              const light_0 = useLightStore.getState();
              if (light_0.openMusicService) {
                light_0.closeMusicService();
              }
            }
            const displayLabel = getPreviewDeviceLabel(deviceInfo, deviceIndex, allDevices);
            const keyboardDevice = await createKeyboardDevice(uiDeviceId_1, deviceInfo, actualDeviceId_1, displayLabel);
            keyboardDevicesRef.current.set(uiDeviceId_1, keyboardDevice);
            usePreviewDeviceStore.getState().registerPreviewDevice(actualDeviceId_1);
          } catch (error) {
            console.error("[PreviewConnections] 连接/创建预览设备失败:", {
              uiDeviceId: uiDeviceId_1,
              error
            });
          }
        }
      }
      if (keyboardDevicesRef.current.size > 0) {
        if (!previewLightSyncLoopCleanupRef.current) {
          previewLightSyncLoopCleanupRef.current = startLightSyncLoop();
        }
      } else if (previewLightSyncLoopCleanupRef.current) {
        previewLightSyncLoopCleanupRef.current();
        previewLightSyncLoopCleanupRef.current = null;
      }
    });
    return selectionRunRef.current;
  }, [authorizedDevices, createKeyboardDevice, removeKeyboardDevice, startLightSyncLoop, keyboardDevicesRef, stopMatrixPlaybackForPreviewDevice, rollbackPreviewDeviceSelection]);
  reactExports.useEffect(() => {
    const handleManagerDisconnect = (actualDeviceId_2) => {
      const uiDeviceId_2 = deviceIdMappingRef.current.get(actualDeviceId_2);
      if (!uiDeviceId_2) return;
      setSelectedDeviceIds((prev_2) => prev_2.filter((id_0) => id_0 !== uiDeviceId_2));
      removeKeyboardDevice(uiDeviceId_2);
      usePreviewDeviceStore.getState().unregisterPreviewDevice(actualDeviceId_2);
      setDeviceIdMapping((prev_3) => {
        const next_1 = new Map(prev_3);
        next_1.delete(actualDeviceId_2);
        return next_1;
      });
    };
    deviceManager.onDeviceDisconnect(handleManagerDisconnect);
    return () => {
      deviceManager.offDeviceDisconnect(handleManagerDisconnect);
    };
  }, [removeKeyboardDevice]);
  const pendingRemovalId = usePreviewDeviceStore((s) => s.pendingRemovalId);
  const clearPendingRemoval = usePreviewDeviceStore((s_0) => s_0.clearPendingRemoval);
  reactExports.useEffect(() => {
    if (!pendingRemovalId) return;
    const removalId = pendingRemovalId;
    let cancelled = false;
    void (async () => {
      await exitSyncLightingForDevice(removalId);
      if (cancelled) return;
      const uiDeviceId_3 = deviceIdMappingRef.current.get(removalId);
      if (uiDeviceId_3) {
        setSelectedDeviceIds((prev_4) => prev_4.filter((id_1) => id_1 !== uiDeviceId_3));
        removeKeyboardDevice(uiDeviceId_3);
        setDeviceIdMapping((prev_5) => {
          const next_2 = new Map(prev_5);
          next_2.delete(removalId);
          return next_2;
        });
      }
      usePreviewDeviceStore.getState().unregisterPreviewDevice(removalId);
      clearPendingRemoval();
    })();
    return () => {
      cancelled = true;
    };
  }, [pendingRemovalId, clearPendingRemoval, removeKeyboardDevice]);
  reactExports.useEffect(() => {
    return () => {
      for (const deviceId of Array.from(keyboardDevicesRef.current.keys())) {
        removeKeyboardDevice(deviceId);
      }
      const store = usePreviewDeviceStore.getState();
      for (const id_2 of store.previewDeviceIds) {
        store.unregisterPreviewDevice(id_2);
      }
      if (previewLightSyncLoopCleanupRef.current) {
        previewLightSyncLoopCleanupRef.current();
        previewLightSyncLoopCleanupRef.current = null;
      }
    };
  }, [removeKeyboardDevice, keyboardDevicesRef]);
  reactExports.useEffect(() => {
    const validIndices = new Set(authorizedDevices.map((_, index) => index.toString()));
    setSelectedDeviceIds((prev_6) => {
      const filtered = prev_6.filter((id_3) => validIndices.has(id_3));
      return filtered.length === prev_6.length ? prev_6 : filtered;
    });
  }, [authorizedDevices]);
  const restartLightSyncLoopIfActive = reactExports.useCallback(() => {
    void (async () => {
      if (keyboardDevicesRef.current.size === 0) return;
      await stopMatrixPlaybackForPreviewDevice();
      if (previewLightSyncLoopCleanupRef.current) {
        previewLightSyncLoopCleanupRef.current();
      }
      previewLightSyncLoopCleanupRef.current = startLightSyncLoop();
    })();
  }, [keyboardDevicesRef, startLightSyncLoop, stopMatrixPlaybackForPreviewDevice]);
  return {
    selectedDeviceIds,
    deviceIdMapping,
    handleDeviceSelectionChange,
    restartLightSyncLoopIfActive,
    hasAutoSelectedRef
  };
}
function MaterialPreview() {
  const navigate = useNavigate();
  const location = useLocation();
  const previewCanvasRef = reactExports.useRef(null);
  const overlayCanvasRef = reactExports.useRef(null);
  const {
    userInfo
  } = useUserStore();
  const fetchMaterials = useUserStore((s) => s.fetchMaterials);
  const fetchOfficialMaterials = useUserStore((s) => s.fetchOfficialMaterials);
  const fetchNetWorkMaterials = useUserStore((s) => s.fetchNetWorkMaterials);
  const state = location.state;
  const {
    getMaterial,
    materials: userMaterials
  } = useMaterialStore();
  const {
    userPresets,
    loadUserStoredPresets,
    downloadNetworkMaterial
  } = useUserImperativePresetsStore();
  const {
    networkPresets,
    loadNetworkStoredPresets
  } = useNetworkImperativePresetsStore();
  reactExports.useEffect(() => {
    loadUserStoredPresets();
    loadNetworkStoredPresets();
  }, []);
  reactExports.useEffect(() => {
    const userId = userInfo?.id ?? "";
    const pageParams = {
      current: 1,
      size: 50
    };
    const listKind = state?.listKind ?? (state?.scope === "network" ? "network" : "mine");
    if (listKind === "official") {
      void fetchOfficialMaterials(userId, pageParams, {});
      return;
    }
    if (listKind === "network") {
      void fetchNetWorkMaterials(pageParams, {}, NetworkMaterialSortType.latest);
      return;
    }
    if (!userId) return;
    void fetchMaterials(userId, pageParams, {});
  }, [state?.listKind, state?.scope, userInfo?.id, fetchMaterials, fetchOfficialMaterials, fetchNetWorkMaterials]);
  const allAvailablePresets = reactExports.useMemo(() => [...userPresets], [userPresets]);
  const allAvailableNetworkPresets = reactExports.useMemo(() => [...networkPresets], [networkPresets]);
  const material = state?.materialId ? getMaterial(state.materialId) || MATERIAL_PRESETS.find((m) => m.id === state.materialId) : null;
  const preset = state?.presetId ? state.scope === "network" ? allAvailableNetworkPresets.find((p) => p.id === state.presetId) : allAvailablePresets.find((p) => p.id === state.presetId) : null;
  const allMaterials = reactExports.useMemo(() => [
    // 内置 + 用户导入的命令式预设
    ...allAvailablePresets.map((p) => ({
      id: p.id,
      data: p,
      type: "preset",
      scope: "user",
      isFromNet: p.isFromNet
    })),
    // 用户素材
    ...userMaterials.map((m) => ({
      id: m.id,
      data: m,
      type: "material",
      scope: "user",
      isFromNet: m.isFromNet
    }))
  ], [allAvailablePresets, userPresets, userMaterials]);
  const allNetworkMaterials = reactExports.useMemo(() => [...allAvailableNetworkPresets.map((p) => ({
    id: p.id,
    data: p,
    type: "preset",
    scope: "network",
    isPreset: !allAvailableNetworkPresets.some((up) => up.id === p.id)
  }))], [allAvailableNetworkPresets]);
  const {
    devices: authorizedDevices
  } = useAuthorizedDevicesContext();
  const [isAudioToggling, setIsAudioToggling] = reactExports.useState(false);
  const [currentPlayingMaterial, setCurrentPlayingMaterial] = reactExports.useState(null);
  const lastPlayingMaterialRef = reactExports.useRef(null);
  const {
    initLeafer: initPreviewLeafer,
    initOverlayCanvas: initPreviewOverlayCanvas,
    destroyLeafer: destroyPreviewLeafer,
    loadMaterialForPreview,
    clearPreview: clearPreviewMaterial,
    playAnimation: playPreview,
    createKeyboardDevice: createPreviewKeyboardDevice,
    removeKeyboardDevice: removePreviewKeyboardDevice,
    keyboardDevicesRef: previewKeyboardDevicesRef,
    startLightSyncLoop: startPreviewLightSyncLoop,
    isAudioActive,
    toggleAudioCapture,
    startAudioResponseLoop,
    stopAudioResponseLoop,
    currentPreset,
    loadHybridPreset,
    updatePresetParams,
    stopImperativePresetLoop,
    unloadImperativePreset,
    // 设备操作
    toggleLockRatio,
    lockRatioState,
    activeDeviceOverlay
  } = useMaterialPreview({
    width: 800,
    height: 500
  });
  const [lightingConflictOpen, setLightingConflictOpen] = reactExports.useState(false);
  const [lightingConflictLabels, setLightingConflictLabels] = reactExports.useState([]);
  const lightingConflictResolverRef = reactExports.useRef(null);
  const confirmStopLightingConflicts = reactExports.useCallback(() => {
    return new Promise((resolve) => {
      const labels = [];
      if (isGameInteractionActive()) {
        labels.push("游戏交互");
      }
      if (useLightStore.getState().selectedMatrixAnimationId) {
        labels.push("矩阵背光动画");
      }
      if (labels.length === 0) {
        resolve(true);
        return;
      }
      setLightingConflictLabels(labels);
      lightingConflictResolverRef.current = resolve;
      setLightingConflictOpen(true);
    });
  }, []);
  const resolveLightingConflict = reactExports.useCallback((allowed) => {
    const resolver = lightingConflictResolverRef.current;
    if (!resolver) return;
    lightingConflictResolverRef.current = null;
    setLightingConflictOpen(false);
    resolver(allowed);
  }, []);
  const {
    selectedDeviceIds,
    handleDeviceSelectionChange,
    restartLightSyncLoopIfActive,
    hasAutoSelectedRef: hasAutoSelectedDevicesRef
  } = usePreviewConnections({
    createKeyboardDevice: createPreviewKeyboardDevice,
    removeKeyboardDevice: removePreviewKeyboardDevice,
    startLightSyncLoop: startPreviewLightSyncLoop,
    keyboardDevicesRef: previewKeyboardDevicesRef,
    confirmStopLightingConflicts
  });
  const isAudioRequired = currentPreset?.requires?.audio === true || currentPreset?.category === PresetType.screen.value || material?.category === PresetType.spectrum.value || (material?.objects?.some((obj) => obj.audioResponse?.enabled) ?? false);
  const activePreviewScope = currentPlayingMaterial?.scope ?? state?.scope;
  const isOfficialPreview = state?.listKind === "official" || Boolean(currentPreset?.isOfficial) || Boolean(material?.isOfficial);
  const isPresetParamsLocked = activePreviewScope === "network" && !isOfficialPreview;
  const showRouteBootstrapLoader = Boolean(state && !state.stopped && (state.materialId || state.presetId) && !currentPlayingMaterial);
  const [presetParams, setPresetParams] = reactExports.useState({});
  const presetParamsHistoryRef = reactExports.useRef(/* @__PURE__ */ new Map());
  const presetParamsRef = reactExports.useRef({});
  const prevSyncPresetIdRef = reactExports.useRef(void 0);
  reactExports.useEffect(() => {
    presetParamsRef.current = presetParams;
    const currentPresetId = state?.presetId ?? currentPlayingMaterial?.presetId;
    if (currentPresetId) {
      if (currentPresetId === prevSyncPresetIdRef.current) {
        presetParamsHistoryRef.current.set(currentPresetId, presetParams);
      }
      prevSyncPresetIdRef.current = currentPresetId;
    }
  }, [presetParams, state?.presetId, currentPlayingMaterial?.presetId]);
  reactExports.useEffect(() => {
    (async () => {
      try {
        const {
          getAllPresetParams
        } = await __vitePreload(async () => {
          const {
            getAllPresetParams: getAllPresetParams2
          } = await import("./userPreferenceService-xnCo2yiA.js");
          return {
            getAllPresetParams: getAllPresetParams2
          };
        }, true ? __vite__mapDeps([0,1,2,3]) : void 0, import.meta.url);
        const all = await getAllPresetParams();
        all.forEach((params, presetId) => {
          if (!presetParamsHistoryRef.current.has(presetId)) {
            presetParamsHistoryRef.current.set(presetId, params);
          }
        });
        console.log("[Preview] 已从 DB 预加载预设参数:", all.size, "条");
      } catch (error) {
        console.error("[Preview] 预加载预设参数失败:", error);
      }
    })();
  }, []);
  reactExports.useEffect(() => {
    if (!location.pathname.endsWith("/preview")) {
      return;
    }
    if (state?.stopped) {
      return;
    }
    if (state && (state.materialId || state.presetId)) {
      if (state.source === "material" && !material) {
        toast.error("素材不存在");
        navigate("/light-sync/library", {
          replace: true
        });
        return;
      }
      if (state.source === "preset" && !preset) {
        navigate("/light-sync/library", {
          replace: true
        });
        return;
      }
      return;
    }
    if (currentPlayingMaterial) {
      return;
    }
    (async () => {
      try {
        const {
          getLastMaterial
        } = await __vitePreload(async () => {
          const {
            getLastMaterial: getLastMaterial2
          } = await import("./userPreferenceService-xnCo2yiA.js");
          return {
            getLastMaterial: getLastMaterial2
          };
        }, true ? __vite__mapDeps([0,1,2,3]) : void 0, import.meta.url);
        const lastMaterial = await getLastMaterial();
        if (lastMaterial) {
          console.log("[Preview] 恢复最后使用的素材:", lastMaterial);
          if (lastMaterial.materialType === "declarative" && lastMaterial.materialData) {
            const materialData = lastMaterial.materialData;
            const isMusicMaterial = materialData.category === PresetType.spectrum.value || materialData.objects.some((obj) => obj.audioResponse?.enabled);
            console.log("[Preview] 恢复声明式素材:", {
              materialName: materialData.name,
              isMusicMaterial,
              audioElements: materialData.objects.filter((obj) => obj.audioResponse?.enabled).length
            });
            if (isMusicMaterial && !isAudioActive) {
              console.log("[Preview] 自动开启音频捕获");
              handleToggleAudio();
            }
            loadMaterialForPreview(materialData);
            playPreview();
            const materialInfo = {
              materialId: lastMaterial.materialId,
              source: "material"
            };
            lastPlayingMaterialRef.current = materialInfo;
            setCurrentPlayingMaterial(materialInfo);
          } else if (lastMaterial.materialType === "imperative" && lastMaterial.presetId) {
            const foundPreset = allAvailablePresets.find((p) => p.id === lastMaterial.presetId);
            if (foundPreset) {
              console.log("[Preview] 恢复命令式预设:", {
                presetName: foundPreset.name,
                presetMode: foundPreset.mode
              });
              if (!isAudioActive) {
                console.log("[Preview] 自动开启音频捕获");
                handleToggleAudio();
              }
              loadHybridPreset(foundPreset, lastMaterial.params);
              if (lastMaterial.params) {
                setPresetParams(lastMaterial.params);
              }
              const presetInfo = {
                presetId: lastMaterial.presetId,
                source: "preset"
              };
              lastPlayingMaterialRef.current = presetInfo;
              setCurrentPlayingMaterial(presetInfo);
            }
          }
        }
      } catch (error) {
        console.error("[Preview] 恢复最后素材失败:", error);
      }
    })();
  }, [state, material, preset, navigate, loadMaterialForPreview, loadHybridPreset, location.pathname, currentPlayingMaterial]);
  reactExports.useEffect(() => {
    if (previewCanvasRef.current) {
      initPreviewLeafer(previewCanvasRef.current);
    }
    return () => {
      destroyPreviewLeafer();
    };
  }, [initPreviewLeafer, destroyPreviewLeafer]);
  reactExports.useEffect(() => {
    initPreviewOverlayCanvas(overlayCanvasRef.current);
    return () => {
      initPreviewOverlayCanvas(null);
    };
  }, [initPreviewOverlayCanvas]);
  reactExports.useEffect(() => {
    if (location.pathname.endsWith("/preview")) {
      usePreviewDeviceStore.getState().setPausePreviewSync(false);
      resumeAllPreviewCommands();
    }
  }, [location.pathname]);
  reactExports.useEffect(() => {
    if (authorizedDevices.length > 0 && !hasAutoSelectedDevicesRef.current && selectedDeviceIds.length === 0) {
      hasAutoSelectedDevicesRef.current = true;
      const allDeviceIds = authorizedDevices.map((_, index) => index.toString());
      void handleDeviceSelectionChange(allDeviceIds);
    }
  }, [authorizedDevices]);
  const handleToggleAudio = async () => {
    setIsAudioToggling(true);
    try {
      await toggleAudioCapture();
    } finally {
      setIsAudioToggling(false);
    }
  };
  const handleSwitchMaterial = reactExports.useCallback((materialId, source, scope) => {
    console.log("[Preview] 切换素材:", {
      materialId,
      source
    });
    const currentId = currentPlayingMaterial?.materialId || currentPlayingMaterial?.presetId || state?.materialId || state?.presetId;
    const currentSrc = currentPlayingMaterial?.source || state?.source;
    const currentScopeVal = currentPlayingMaterial?.scope ?? state?.scope;
    const incomingScope = scope ?? state?.scope;
    const isCurrentMaterial = currentId === materialId && currentSrc === source && incomingScope === currentScopeVal;
    if (currentId && currentSrc === "preset") {
      presetParamsHistoryRef.current.set(currentId, {
        ...presetParamsRef.current
      });
      console.log("[Preview] 缓存预设参数:", currentId, presetParamsRef.current);
    }
    if (isCurrentMaterial) {
      console.log("[Preview] 停止当前素材播放（保留设备和灯效循环）");
      if (currentId) {
        lastPlayingMaterialRef.current = {
          materialId: source === "material" ? materialId : void 0,
          presetId: source === "preset" ? materialId : void 0,
          source,
          scope: scope ?? state?.scope ?? currentPlayingMaterial?.scope
        };
        console.log("[Preview] 保存素材信息以便恢复:", lastPlayingMaterialRef.current);
      }
      stopImperativePresetLoop();
      stopAudioResponseLoop();
      unloadImperativePreset();
      clearPreviewMaterial();
      setCurrentPlayingMaterial(null);
      navigate("/light-sync/preview", {
        state: {
          materialId: void 0,
          presetId: void 0,
          source: void 0,
          stopped: true,
          // 标记为手动停止，避免跳转回素材库
          scope: scope ?? state?.scope ?? currentPlayingMaterial?.scope,
          listKind: state?.listKind
        },
        replace: true
      });
      return;
    }
    stopAudioResponseLoop();
    setCurrentPlayingMaterial({
      materialId: source === "material" ? materialId : void 0,
      presetId: source === "preset" ? materialId : void 0,
      source,
      scope
    });
    const savedParams = source === "preset" ? presetParamsHistoryRef.current.get(materialId) : void 0;
    console.log("[Preview] 切换预设，查找历史参数:", materialId, savedParams);
    navigate("/light-sync/preview", {
      state: {
        materialId: source === "material" ? materialId : void 0,
        presetId: source === "preset" ? materialId : void 0,
        source,
        scope: scope ?? state?.scope,
        listKind: state?.listKind,
        savedParams
        // 恢复该预设上次使用的参数
      },
      replace: true
    });
  }, [navigate, stopAudioResponseLoop, stopImperativePresetLoop, unloadImperativePreset, clearPreviewMaterial, state, currentPlayingMaterial, previewCanvasRef]);
  reactExports.useEffect(() => {
    console.log("[Preview] 音频状态变化:", {
      isAudioActive,
      hasMaterial: !!material,
      hasPreset: !!preset,
      currentPreset: currentPreset ? `${currentPreset.name} (${currentPreset.mode})` : null
    });
    if (isAudioActive) {
      if (material) {
        const isMusicMaterial = material.category === PresetType.spectrum.value || material.objects.some((obj) => obj.audioResponse?.enabled);
        console.log("[Preview] 检查声明式素材:", {
          isMusicMaterial
        });
        if (isMusicMaterial) {
          console.log("[Preview] 启动声明式素材的音频响应循环");
          startAudioResponseLoop();
        }
      }
    } else {
      console.log("[Preview] 停止音频响应循环");
      stopAudioResponseLoop();
    }
  }, [isAudioActive, material, currentPreset, startAudioResponseLoop, stopAudioResponseLoop]);
  reactExports.useEffect(() => {
    if (!location.pathname.endsWith("/preview")) return;
    if (!state) return;
    console.log("[Preview] 加载初始内容:", {
      source: state.source,
      scope: state.scope,
      hasMaterial: !!material,
      hasPreset: !!preset,
      isAudioActive
    });
    if (state.source === "material" && material) {
      const isMusicMaterial = material.category === PresetType.spectrum.value || material.objects.some((obj) => obj.audioResponse?.enabled);
      console.log("[Preview] 加载素材:", {
        materialName: material.name,
        isMusicMaterial,
        objectsCount: material.objects.length,
        audioElements: material.objects.filter((obj) => obj.audioResponse?.enabled).length
      });
      if (isMusicMaterial && !isAudioActive) {
        console.log("[Preview] 自动开启音频捕获");
        handleToggleAudio();
      }
      loadMaterialForPreview(material);
      playPreview();
      const materialInfo = {
        materialId: state.materialId,
        source: "material",
        scope: state.scope
      };
      lastPlayingMaterialRef.current = materialInfo;
      setCurrentPlayingMaterial(materialInfo);
      restartLightSyncLoopIfActive();
    } else if (state.source === "preset" && preset) {
      console.log("[Preview] 加载预设:", {
        presetName: preset.name,
        presetMode: preset.mode,
        hasSavedParams: !!state.savedParams
      });
      if (!isAudioActive) {
        console.log("[Preview] 自动开启音频捕获");
        handleToggleAudio();
      }
      let initialParams = {};
      if (state.savedParams) {
        initialParams = state.savedParams;
        console.log("[Preview] 使用路由传递的参数:", initialParams);
      } else if (presetParamsHistoryRef.current.has(preset.id)) {
        initialParams = presetParamsHistoryRef.current.get(preset.id);
        console.log("[Preview] 使用历史缓存的参数:", initialParams);
      } else {
        preset.params?.forEach((param) => {
          initialParams[param.key] = param.default;
        });
        console.log("[Preview] 使用默认参数:", initialParams);
      }
      setPresetParams(initialParams);
      loadHybridPreset(preset, initialParams);
      const presetInfo = {
        presetId: state.presetId,
        source: "preset",
        scope: state.scope,
        params: initialParams
      };
      lastPlayingMaterialRef.current = presetInfo;
      setCurrentPlayingMaterial(presetInfo);
      restartLightSyncLoopIfActive();
    }
  }, [state, material, preset, location.pathname]);
  const handleResetParams = () => {
    if (isPresetParamsLocked || !currentPreset?.params) return;
    const defaultParams = {};
    currentPreset.params.forEach((param) => {
      defaultParams[param.key] = param.default;
    });
    setPresetParams(defaultParams);
    updatePresetParams(defaultParams);
  };
  const handleDownloadMaterial = async () => {
    if (isOfficialPreview) return;
    if (!userInfo?.id) {
      toast.error("请先登录");
      return;
    }
    if (!currentPreset?.id) {
      toast.error("预设ID不存在");
      return;
    }
    try {
      const result = await downloadNetworkMaterial(currentPreset?.id, userInfo?.id);
      if (result) {
        toast.success("下载素材到我的素材成功");
      } else {
        toast.error("下载素材到我的素材失败");
      }
    } catch (error) {
      console.error("下载素材到我的素材失败", error);
    }
  };
  const handleClearHistory = async () => {
    try {
      const {
        clearLastMaterial
      } = await __vitePreload(async () => {
        const {
          clearLastMaterial: clearLastMaterial2
        } = await import("./userPreferenceService-xnCo2yiA.js");
        return {
          clearLastMaterial: clearLastMaterial2
        };
      }, true ? __vite__mapDeps([0,1,2,3]) : void 0, import.meta.url);
      const {
        clearAllDevicePositions
      } = await __vitePreload(async () => {
        const {
          clearAllDevicePositions: clearAllDevicePositions2
        } = await import("./devicePositionService-ChBf7Ms5.js");
        return {
          clearAllDevicePositions: clearAllDevicePositions2
        };
      }, true ? __vite__mapDeps([4,1,2,3]) : void 0, import.meta.url);
      await clearLastMaterial();
      await clearAllDevicePositions();
      toast.success("已清除所有历史记录");
    } catch (error) {
      console.error("[Preview] 清除历史记录失败:", error);
      toast.error("清除历史记录失败");
    }
  };
  const getTitle = () => {
    if (state?.source === "material" && material) {
      return material.name;
    }
    if (state?.source === "preset" && preset) {
      return preset.name;
    }
    if (currentPlayingMaterial) {
      const drawerList = currentPlayingMaterial.scope === "network" ? allNetworkMaterials : allMaterials;
      if (currentPlayingMaterial.source === "material" && currentPlayingMaterial.materialId) {
        const foundMaterial = drawerList.find((m) => m.id === currentPlayingMaterial.materialId && m.type === "material");
        if (foundMaterial) {
          return foundMaterial.data.name;
        }
      }
      if (currentPlayingMaterial.source === "preset" && currentPlayingMaterial.presetId) {
        const foundPreset = drawerList.find((m) => m.id === currentPlayingMaterial.presetId && m.type === "preset");
        if (foundPreset) {
          return foundPreset.data.name;
        }
      }
    }
    return "预览";
  };
  const deviceOptions = authorizedDevices.map((device, index) => ({
    value: index.toString(),
    label: getPreviewDeviceLabel(device, index, authorizedDevices),
    icon: Usb
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col overflow-hidden bg-linear-to-br from-background via-background to-muted/20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: lightingConflictOpen, onOpenChange: (open) => {
      if (!open) resolveLightingConflict(false);
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: "确认启用素材预览？" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogDescription, { children: [
          "当前设备正在使用",
          lightingConflictLabels.join("、"),
          "，启用素材预览将中断相关效果。是否继续？"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { onClick: () => resolveLightingConflict(false), children: "取消" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { onClick: () => resolveLightingConflict(true), children: "确认启用" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex shrink-0 items-center gap-4 border-b border-border/50 bg-card/50 px-6 py-4 backdrop-blur-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 h-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg font-semibold", children: getTitle() }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MultiSelect, { options: deviceOptions, onValueChange: (ids) => void handleDeviceSelectionChange(ids), defaultValue: selectedDeviceIds, placeholder: "选择设备", searchable: false, maxCount: 2, className: "min-w-[200px] max-w-[350px]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ConnectDeviceButton, { variant: "ghost", className: "shrink-0 w-auto px-3" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          isPresetParamsLocked && !isOfficialPreview && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "default", size: "sm", className: "gap-2 bg-purple-500 hover:bg-purple-600", onClick: lodashExports.debounce(handleDownloadMaterial, 1e3), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "size-3.5" }),
            "下载至我的素材"
          ] }),
          isAudioRequired && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: isAudioActive ? "default" : "outline", size: "sm", className: cn("gap-2", isAudioActive && "bg-purple-500 hover:bg-purple-600"), onClick: handleToggleAudio, disabled: isAudioToggling, children: [
            isAudioActive ? /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(MicOff, { className: "size-4" }),
            isAudioToggling ? "处理中..." : isAudioActive ? "音频已开启" : "开启音频"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, { className: "size-4" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuContent, { align: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onClick: handleClearHistory, className: "text-red-500 focus:text-red-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "mr-2 size-4" }),
              "清除历史记录"
            ] }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-0 h-[calc(100vh-110px)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "grid grid-rows-[1fr_auto] min-h-0 flex-1 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-lg text-xs text-muted-foreground backdrop-blur-sm justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "size-3.5 shrink-0 text-blue-400/80" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "建议将应用最小化到托盘，以获得最佳预览体验" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-xl border border-border/50 bg-black shadow-2xl", children: [
              showRouteBootstrapLoader ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-30 flex items-center justify-center bg-black/60 backdrop-blur-[2px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-36 w-full max-w-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CyberRouteLoading, {}) }) }) : null,
              /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: overlayCanvasRef, className: "pointer-events-none absolute inset-0 z-0 h-full w-full" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: previewCanvasRef, className: "relative z-10" }),
              activeDeviceOverlay && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "absolute z-20 flex items-center justify-center size-6 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-sm hover:bg-background transition-colors cursor-pointer", style: {
                left: activeDeviceOverlay.right + 6,
                top: activeDeviceOverlay.top
              }, title: lockRatioState ? "已锁定缩放比例" : "未锁定缩放比例", onClick: toggleLockRatio, children: lockRatioState ? /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "size-3 text-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(LockOpen, { className: "size-3 text-muted-foreground" }) }),
              activeDeviceOverlay && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "absolute z-20 flex items-center justify-center size-6 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-sm hover:bg-background transition-colors cursor-pointer", style: {
                left: activeDeviceOverlay.right + 6,
                top: activeDeviceOverlay.top
              }, title: lockRatioState ? "已锁定缩放比例" : "未锁定缩放比例", onClick: toggleLockRatio, children: lockRatioState ? /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "size-3 text-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(LockOpen, { className: "size-3 text-muted-foreground" }) })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MaterialDrawer, { materials: state?.scope === "network" ? allNetworkMaterials : allMaterials, currentMaterialId: currentPlayingMaterial?.materialId || currentPlayingMaterial?.presetId || state?.materialId || state?.presetId, currentScope: currentPlayingMaterial?.scope || state?.scope, currentSource: currentPlayingMaterial?.source || state?.source, onSwitchMaterial: handleSwitchMaterial, defaultExpanded: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "flex w-[340px] shrink-0 flex-col border-l border-border/50 bg-card/30", children: currentPreset && currentPreset.params && currentPreset.params.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          isPresetParamsLocked && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-start gap-2 border-b border-amber-500/25 bg-amber-500/10 px-3 py-2.5 text-xs leading-snug text-amber-900 dark:text-amber-200/90", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "mt-0.5 size-3.5 shrink-0 text-amber-600 dark:text-amber-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "请先将网络素材下载到「我的素材」后，再调节预设参数。" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex min-h-0 flex-1 flex-col", isPresetParamsLocked && "pointer-events-none opacity-45 select-none"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 border-b border-border/50 p-4 pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "预设参数" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "ghost", onClick: handleResetParams, disabled: isPresetParamsLocked, className: "h-7 px-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "mr-1 h-3.5 w-3.5" }),
                "重置"
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto p-4 pt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: currentPreset.params.map((param) => {
              const currentValue = presetParams[param.key] ?? param.default;
              const handleChange = (value) => {
                if (isPresetParamsLocked) return;
                const newParams = {
                  ...presetParams,
                  [param.key]: value
                };
                setPresetParams(newParams);
                updatePresetParams(newParams);
              };
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                param.type !== "boolean" && /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: param.name }),
                param.type === "number" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Slider, { min: param.min, max: param.max, step: param.step, disabled: isPresetParamsLocked, value: [currentValue], onValueChange: (values) => handleChange(values[0]), className: "w-full **:data-[slot=slider-range]:bg-purple-500" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right text-[10px] text-muted-foreground", children: String(currentValue) })
                ] }),
                param.type === "color" && /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "color", value: currentValue, disabled: isPresetParamsLocked, onChange: (e) => handleChange(e.target.value), className: "h-8 w-full rounded border border-border disabled:cursor-not-allowed" }),
                param.type === "boolean" && /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: cn("flex items-center gap-2", isPresetParamsLocked ? "cursor-not-allowed" : "cursor-pointer"), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { disabled: isPresetParamsLocked, checked: currentValue ?? param.default, onCheckedChange: (checked) => handleChange(checked) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium", children: param.name })
                ] }),
                param.type === "select" && param.options && /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: currentValue, onValueChange: (value) => handleChange(value), disabled: isPresetParamsLocked, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-full", size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: param.options.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: String(option.value), children: option.label }, option.value)) })
                ] })
              ] }, param.key);
            }) }) })
          ] })
        ] }) })
      ] })
    ] })
  ] });
}
export {
  MaterialPreview,
  MaterialPreview as default
};
