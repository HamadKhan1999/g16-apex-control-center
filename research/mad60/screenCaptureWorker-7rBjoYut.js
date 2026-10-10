(function() {
  "use strict";
  let canvas = null;
  let ctx = null;
  let ambientCanvas = null;
  let ambientCtx = null;
  let sampleWidth = 1920;
  let sampleHeight = 1080;
  let captureRects;
  let ambientSize;
  function post(msg, transfer) {
    self.postMessage(msg, { transfer });
  }
  function computeContentRect(srcW, srcH) {
    const TARGET = 16 / 9;
    const EPS = 0.01;
    const aspect = srcW / srcH;
    if (aspect > TARGET + EPS) {
      const sw = Math.round(srcH * TARGET);
      return { sx: Math.round((srcW - sw) / 2), sy: 0, sw, sh: srcH };
    }
    if (aspect < TARGET - EPS) {
      const sh = Math.round(srcW / TARGET);
      return { sx: 0, sy: Math.round((srcH - sh) / 2), sw: srcW, sh };
    }
    return { sx: 0, sy: 0, sw: srcW, sh: srcH };
  }
  let lastLoggedSrc = "";
  const BAR_CHECK_INTERVAL_MS = 1e3;
  const BAR_TRIP_SAMPLES = 3;
  const BAR_BLACK_LUMA_MAX = 24;
  const BAR_SAMPLE_SIZE = 16;
  let barCanvas = null;
  let barCtx = null;
  let lastBarCheckAt = 0;
  let barNonBlackStreak = 0;
  let frameConfigWarningActive = false;
  function setFrameConfigWarning(active) {
    if (frameConfigWarningActive === active) return;
    frameConfigWarningActive = active;
    console.warn(`[captureWorker] 画面配置告警 ${active ? "触发" : "解除"}`);
    post({ type: "frameConfigWarning", active }, []);
  }
  function sampleStripLuma(frame, strip) {
    if (!barCanvas) {
      barCanvas = new OffscreenCanvas(BAR_SAMPLE_SIZE, BAR_SAMPLE_SIZE);
      barCtx = barCanvas.getContext("2d", { willReadFrequently: true });
    }
    if (!barCtx) return null;
    barCtx.drawImage(
      frame,
      strip.x,
      strip.y,
      strip.width,
      strip.height,
      0,
      0,
      BAR_SAMPLE_SIZE,
      BAR_SAMPLE_SIZE
    );
    const data = barCtx.getImageData(0, 0, BAR_SAMPLE_SIZE, BAR_SAMPLE_SIZE).data;
    let sum = 0;
    for (let i = 0; i < data.length; i += 4) {
      sum += 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    }
    return sum / (data.length / 4);
  }
  function checkLetterboxBars(frame, srcW, srcH, content) {
    const isFullFrame = content.sx === 0 && content.sy === 0;
    if (isFullFrame && content.sw === srcW && content.sh === srcH) {
      barNonBlackStreak = 0;
      setFrameConfigWarning(false);
      return;
    }
    const now = performance.now();
    if (now - lastBarCheckAt < BAR_CHECK_INTERVAL_MS) return;
    lastBarCheckAt = now;
    const strips = content.sx > 0 ? [
      { x: 0, y: 0, width: content.sx, height: srcH },
      { x: content.sx + content.sw, y: 0, width: srcW - content.sx - content.sw, height: srcH }
    ] : [
      { x: 0, y: 0, width: srcW, height: content.sy },
      { x: 0, y: content.sy + content.sh, width: srcW, height: srcH - content.sy - content.sh }
    ];
    let nonBlack = false;
    for (const strip of strips) {
      if (strip.width <= 0 || strip.height <= 0) continue;
      const luma = sampleStripLuma(frame, strip);
      if (luma !== null && luma > BAR_BLACK_LUMA_MAX) {
        nonBlack = true;
        break;
      }
    }
    if (nonBlack) {
      barNonBlackStreak++;
      if (barNonBlackStreak >= BAR_TRIP_SAMPLES) setFrameConfigWarning(true);
    } else {
      barNonBlackStreak = 0;
      setFrameConfigWarning(false);
    }
  }
  function configure(msg) {
    sampleWidth = msg.sampleWidth;
    sampleHeight = msg.sampleHeight;
    captureRects = msg.captureRects;
    ambientSize = msg.ambientSize;
    if (!canvas) {
      canvas = new OffscreenCanvas(sampleWidth, sampleHeight);
      ctx = canvas.getContext("2d", { willReadFrequently: true });
    } else if (canvas.width !== sampleWidth || canvas.height !== sampleHeight) {
      canvas.width = sampleWidth;
      canvas.height = sampleHeight;
    }
    ambientCanvas = null;
    ambientCtx = null;
  }
  function processFrame(frame) {
    if (!ctx || !canvas) {
      frame.close();
      return;
    }
    const fw = sampleWidth;
    const fh = sampleHeight;
    try {
      const srcW = frame.displayWidth;
      const srcH = frame.displayHeight;
      if (srcW > 0 && srcH > 0) {
        const { sx, sy, sw, sh } = computeContentRect(srcW, srcH);
        const srcKey = `${srcW}x${srcH}`;
        if (srcKey !== lastLoggedSrc) {
          lastLoggedSrc = srcKey;
          console.log(
            `[captureWorker] 源帧 ${srcW}×${srcH} → 16:9 内容区 ${sw}×${sh}@(${sx},${sy}) → ${fw}×${fh}`
          );
        }
        checkLetterboxBars(frame, srcW, srcH, { sx, sy, sw, sh });
        ctx.drawImage(frame, sx, sy, sw, sh, 0, 0, fw, fh);
      } else {
        ctx.drawImage(frame, 0, 0, fw, fh);
      }
      if (captureRects) {
        const rois = [];
        const transfer = [];
        for (const rect of captureRects) {
          const x = Math.max(0, Math.min(rect.x, fw - 1));
          const y = Math.max(0, Math.min(rect.y, fh - 1));
          const w = Math.min(rect.width, fw - x);
          const h = Math.min(rect.height, fh - y);
          if (w <= 0 || h <= 0) continue;
          const img = ctx.getImageData(x, y, w, h);
          rois.push({ x, y, width: w, height: h, buffer: img.data.buffer });
          transfer.push(img.data.buffer);
        }
        post({ type: "rois", frame: { width: fw, height: fh, rois } }, transfer);
        if (ambientSize) {
          const aw = ambientSize.width;
          const ah = ambientSize.height;
          if (!ambientCanvas) {
            ambientCanvas = new OffscreenCanvas(aw, ah);
            ambientCtx = ambientCanvas.getContext("2d", { willReadFrequently: true });
          }
          if (ambientCtx) {
            ambientCtx.drawImage(canvas, 0, 0, aw, ah);
            const ambient = ambientCtx.getImageData(0, 0, aw, ah);
            post({ type: "ambient", frame: ambient }, [ambient.data.buffer]);
          }
        }
      } else {
        const img = ctx.getImageData(0, 0, fw, fh);
        post({ type: "frame", frame: img }, [img.data.buffer]);
      }
    } catch {
    } finally {
      frame.close();
    }
  }
  self.onmessage = (e) => {
    const msg = e.data;
    switch (msg.type) {
      case "config":
        configure(msg);
        break;
      case "process":
        processFrame(msg.frame);
        break;
      case "stop":
        canvas = null;
        ctx = null;
        ambientCanvas = null;
        ambientCtx = null;
        barCanvas = null;
        barCtx = null;
        barNonBlackStreak = 0;
        frameConfigWarningActive = false;
        break;
    }
  };
})();
