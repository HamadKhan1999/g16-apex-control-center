import { k as compilerRuntimeExports, j as jsxRuntimeExports, r as reactExports, n as useNavigate, q as useLocation, a as reactDomExports } from "./vendor-react-CCnVVUMc.js";
import { c as createLucideIcon, a3 as get, a4 as post, F as cn, L as Label, a5 as Upload, a6 as Upload$1, a7 as IMAGE_UPLOAD_ACCEPT, B as Button, a8 as X, P as PresetType, a9 as getMaterialScoreTierTag, S as Sparkles, aa as StarRow, ab as officialScoreToStarDisplayCount, ac as formatDate, Q as DropdownMenuTrigger, V as DropdownMenuItem, G as Copy, W as DropdownMenuSeparator, T as Trash2, O as DropdownMenu, U as DropdownMenuContent, ad as cameraCapturerService, ae as screenRegionAnalyzer, af as ScreenRegionAnalyzer, a2 as toast, u as useMaterialStore, ag as useUserImperativePresetsStore, ah as useNetworkImperativePresetsStore, ai as FEEDBACK_MAX_IMAGES, a0 as useUserStore, aj as validateImageUploadFile, ak as NetworkMaterialSortType, al as useElectronDeviceRegistryStore, am as isElectronEnvironment, an as NodeHIDAdapter, ao as WebHIDDevice, ap as getValueByLabel, aq as reactActivationExports, ar as useDebounceFn, as as Tabs, at as TabsList, au as TabsTrigger, av as Layers, N as Check, aw as Settings2, ax as ElectricBorder, ay as Music, az as PaginationBar, aA as AlertDialog, aB as AlertDialogContent, aC as AlertDialogHeader, aD as AlertDialogTitle, aE as AlertDialogDescription, H as Input, aF as AlertDialogFooter, aG as AlertDialogCancel, aH as AlertDialogAction, A as Dialog, y as DialogContent, v as DialogHeader, w as DialogTitle, x as DialogDescription, aI as ExternalLink, z as DialogFooter, aJ as CyberRouteLoading, aK as updateMaterialBackGround } from "./index-CMbUujkZ.js";
import { C as Checkbox, E as EllipsisVertical } from "./checkbox-B4SkrEUN.js";
import { T as Textarea } from "./textarea-CM_b3pFI.js";
import { g as getMaterialColor, a as getMaterialTypeLabel, r as renderMaterialCardIcon, M as MATERIAL_PRESETS, b as MultiSelect, c as buildSubmitFeedBackFormData } from "./presets-B7DhRBgM.js";
import { P as Play } from "./play-FC-PODUZ.js";
import { P as Pencil } from "./pencil-DOp3mKSR.js";
import { F as FileDown } from "./file-down-BrX7SuQR.js";
import { P as Plus } from "./plus-BBBiVizr.js";
import { M as Monitor } from "./monitor-BTQG8tcs.js";
const __iconNode$6 = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
];
const BookOpen = createLucideIcon("book-open", __iconNode$6);
const __iconNode$5 = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
];
const Bot = createLucideIcon("bot", __iconNode$5);
const __iconNode$4 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
const CheckCheck = createLucideIcon("check-check", __iconNode$4);
const __iconNode$3 = [
  ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]
];
const Cloud = createLucideIcon("cloud", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
];
const Funnel = createLucideIcon("funnel", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
];
const MessageSquare = createLucideIcon("message-square", __iconNode$1);
const __iconNode = [
  ["path", { d: "M12 2v13", key: "1km8f5" }],
  ["path", { d: "m16 6-4-4-4 4", key: "13yo43" }],
  ["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8", key: "1b2hhj" }]
];
const Share = createLucideIcon("share", __iconNode);
async function submitFeedBack(userId, formData) {
  const res = await post(`/feedBack/submit/${userId}`, formData);
  return res;
}
async function getFeedBackTypes() {
  const res = await get("/feedBack/list");
  return res;
}
function ImportPresetBackgroundField(t0) {
  const $ = compilerRuntimeExports.c(25);
  const {
    isLogin,
    objectUrl,
    remoteUrl,
    hasLocalFile,
    beforeUpload,
    onClear
  } = t0;
  const showPreview = Boolean(objectUrl || remoteUrl || hasLocalFile);
  const imgSrc = objectUrl || remoteUrl;
  const showReplaceHint = Boolean(objectUrl || remoteUrl);
  const showClear = Boolean(hasLocalFile || remoteUrl);
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "设置素材背景图" });
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const t2 = !isLogin;
  const t3 = !isLogin && "pointer-events-none opacity-50";
  let t4;
  if ($[1] !== t3) {
    t4 = cn("block [&_.ant-upload]:m-0 [&_.ant-upload-select]:m-0 [&_.ant-upload]:h-full [&_.ant-upload]:w-full", "[&_.ant-upload]:border-0 [&_.ant-upload]:bg-transparent p-0", t3);
    $[1] = t3;
    $[2] = t4;
  } else {
    t4 = $[2];
  }
  const t5 = isLogin && "hover:border-cyan-500/40 hover:bg-muted/50";
  let t6;
  if ($[3] !== t5) {
    t6 = cn("group relative flex h-32 w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-dashed border-border/80 bg-muted/30 sm:w-48", t5);
    $[3] = t5;
    $[4] = t6;
  } else {
    t6 = $[4];
  }
  let t7;
  if ($[5] !== imgSrc || $[6] !== showPreview) {
    t7 = showPreview && imgSrc ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: imgSrc, alt: "背景预览", className: "h-full w-full object-cover" }) : showPreview ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1.5 p-2 text-center text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "size-6 opacity-60" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "生成预览中…" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1.5 p-2 text-center text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "size-6 opacity-60" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "点击选择背景图" })
    ] });
    $[5] = imgSrc;
    $[6] = showPreview;
    $[7] = t7;
  } else {
    t7 = $[7];
  }
  let t8;
  if ($[8] !== showReplaceHint) {
    t8 = showReplaceHint ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/35", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-background/80 px-2 py-0.5 text-[10px] text-foreground opacity-0 transition-opacity group-hover:opacity-100", children: "更换" }) }) : null;
    $[8] = showReplaceHint;
    $[9] = t8;
  } else {
    t8 = $[9];
  }
  let t9;
  if ($[10] !== t6 || $[11] !== t7 || $[12] !== t8) {
    t9 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: t6, children: [
      t7,
      t8
    ] });
    $[10] = t6;
    $[11] = t7;
    $[12] = t8;
    $[13] = t9;
  } else {
    t9 = $[13];
  }
  let t10;
  if ($[14] !== beforeUpload || $[15] !== t2 || $[16] !== t4 || $[17] !== t9) {
    t10 = /* @__PURE__ */ jsxRuntimeExports.jsx(Upload$1, { name: "file", accept: IMAGE_UPLOAD_ACCEPT, showUploadList: false, beforeUpload, disabled: t2, className: t4, children: t9 });
    $[14] = beforeUpload;
    $[15] = t2;
    $[16] = t4;
    $[17] = t9;
    $[18] = t10;
  } else {
    t10 = $[18];
  }
  let t11;
  if ($[19] !== onClear || $[20] !== showClear) {
    t11 = showClear ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: onClear, children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-3" }) }) : null;
    $[19] = onClear;
    $[20] = showClear;
    $[21] = t11;
  } else {
    t11 = $[21];
  }
  let t12;
  if ($[22] !== t10 || $[23] !== t11) {
    t12 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      t1,
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 sm:flex-row sm:items-start", children: [
        t10,
        t11
      ] })
    ] });
    $[22] = t10;
    $[23] = t11;
    $[24] = t12;
  } else {
    t12 = $[24];
  }
  return t12;
}
const SpotlightCard = (t0) => {
  const $ = compilerRuntimeExports.c(15);
  const {
    children,
    className: t1,
    spotlightColor: t2
  } = t0;
  const className = t1 === void 0 ? "" : t1;
  const spotlightColor = t2 === void 0 ? "rgba(255, 255, 255, 0.25)" : t2;
  const divRef = reactExports.useRef(null);
  const [isFocused, setIsFocused] = reactExports.useState(false);
  let t3;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = {
      x: 0,
      y: 0
    };
    $[0] = t3;
  } else {
    t3 = $[0];
  }
  const [position, setPosition] = reactExports.useState(t3);
  const [opacity, setOpacity] = reactExports.useState(0);
  let t4;
  if ($[1] !== isFocused) {
    t4 = (e) => {
      if (!divRef.current || isFocused) {
        return;
      }
      const rect = divRef.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };
    $[1] = isFocused;
    $[2] = t4;
  } else {
    t4 = $[2];
  }
  const handleMouseMove = t4;
  let t5;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = () => {
      setIsFocused(true);
      setOpacity(0.6);
    };
    $[3] = t5;
  } else {
    t5 = $[3];
  }
  const handleFocus = t5;
  let t6;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t6 = () => {
      setIsFocused(false);
      setOpacity(0);
    };
    $[4] = t6;
  } else {
    t6 = $[4];
  }
  const handleBlur = t6;
  let t7;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t7 = () => {
      setOpacity(0.6);
    };
    $[5] = t7;
  } else {
    t7 = $[5];
  }
  const handleMouseEnter = t7;
  let t8;
  if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
    t8 = () => {
      setOpacity(0);
    };
    $[6] = t8;
  } else {
    t8 = $[6];
  }
  const handleMouseLeave = t8;
  const t9 = `relative overflow-hidden ${className}`;
  const t10 = `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`;
  let t11;
  if ($[7] !== opacity || $[8] !== t10) {
    t11 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out", style: {
      opacity,
      background: t10
    } });
    $[7] = opacity;
    $[8] = t10;
    $[9] = t11;
  } else {
    t11 = $[9];
  }
  let t12;
  if ($[10] !== children || $[11] !== handleMouseMove || $[12] !== t11 || $[13] !== t9) {
    t12 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: divRef, onMouseMove: handleMouseMove, onFocus: handleFocus, onBlur: handleBlur, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, className: t9, children: [
      t11,
      children
    ] });
    $[10] = children;
    $[11] = handleMouseMove;
    $[12] = t11;
    $[13] = t9;
    $[14] = t12;
  } else {
    t12 = $[14];
  }
  return t12;
};
const MaterialCard = reactExports.memo(function MaterialCard2(t0) {
  const $ = compilerRuntimeExports.c(149);
  const {
    material,
    preset,
    isPreset: t1,
    isSelected: t2,
    isBatchMode: t3,
    onClick,
    onSelect,
    onEdit,
    onUpload,
    onCopy,
    onAttribute,
    onExport,
    onDelete,
    isNetwork: t4
  } = t0;
  const isPreset = t1 === void 0 ? false : t1;
  const isSelected = t2 === void 0 ? false : t2;
  const isBatchMode = t3 === void 0 ? false : t3;
  const isNetwork = t4 === void 0 ? false : t4;
  const name = material?.name || preset?.name || "未命名";
  const type = material?.category || PresetType.ambient.value;
  const objectsCount = material?.objects?.length || 0;
  const duration = material?.timeline?.duration || 0;
  const description = preset?.description;
  const item = preset ?? material;
  let t5;
  if ($[0] !== item) {
    t5 = getMaterialColor(item);
    $[0] = item;
    $[1] = t5;
  } else {
    t5 = $[1];
  }
  const color = t5;
  let t6;
  if ($[2] !== item) {
    t6 = getMaterialTypeLabel(item);
    $[2] = item;
    $[3] = t6;
  } else {
    t6 = $[3];
  }
  const typeLabel = t6;
  let T0;
  let categoryText;
  let scoreTier;
  let t10;
  let t11;
  let t12;
  let t13;
  let t14;
  let t15;
  let t7;
  let t8;
  let t9;
  if ($[4] !== color || $[5] !== description || $[6] !== isBatchMode || $[7] !== isPreset || $[8] !== isSelected || $[9] !== item.isOfficial || $[10] !== item.officialScore || $[11] !== material || $[12] !== name || $[13] !== onAttribute || $[14] !== onClick || $[15] !== onCopy || $[16] !== onDelete || $[17] !== onEdit || $[18] !== onExport || $[19] !== onSelect || $[20] !== onUpload || $[21] !== preset || $[22] !== type) {
    scoreTier = item.isOfficial ? void 0 : getMaterialScoreTierTag(typeof item.officialScore === "number" ? item.officialScore : void 0);
    categoryText = preset?.category === PresetType.spectrum.value ? PresetType.spectrum.text : preset?.category === PresetType.rhythm.value ? PresetType.rhythm.text : preset?.category === PresetType.ambient.value ? PresetType.ambient.text : preset?.category === PresetType.waveform.value ? PresetType.waveform.text : preset?.category === PresetType.screen.value ? PresetType.screen.text : null;
    const spotlightColor = color === "purple" ? "rgba(168, 85, 247, 0.20)" : color === "emerald" ? "rgba(16, 185, 129, 0.20)" : "rgba(34, 211, 238, 0.20)";
    T0 = SpotlightCard;
    t14 = spotlightColor;
    t15 = "rounded-xl";
    const t162 = isSelected ? color === "purple" ? "border-purple-500/80 bg-purple-500/10 shadow-lg shadow-purple-500/25 dark:shadow-[0_0_20px_oklch(0.65_0.28_290/0.45)]" : color === "emerald" ? "border-emerald-500/80 bg-emerald-500/10 shadow-lg shadow-emerald-500/25 dark:shadow-[0_0_20px_oklch(0.72_0.17_155/0.42)]" : "border-cyan-500/80 bg-cyan-500/10 shadow-lg shadow-cyan-500/25 dark:shadow-[0_0_20px_var(--glow-brand)]" : "border-border/40 bg-card/50 hover:border-border/70 dark:border-border/20 dark:hover:border-border/40";
    const t172 = !isSelected && (color === "purple" ? "dark:hover:shadow-[0_0_16px_oklch(0.65_0.28_290/0.3)] dark:hover:border-purple-500/30" : color === "emerald" ? "dark:hover:shadow-[0_0_16px_oklch(0.72_0.17_155/0.25)] dark:hover:border-emerald-500/30" : "dark:hover:shadow-[0_0_16px_var(--glow-brand)] dark:hover:border-cyan-500/30");
    const t182 = isBatchMode && isPreset && "opacity-50 cursor-not-allowed";
    if ($[35] !== t162 || $[36] !== t172 || $[37] !== t182) {
      t11 = cn("effect-card group relative flex cursor-pointer flex-col overflow-hidden rounded-xl border transition-all duration-200", "hover:shadow-lg hover:scale-[1.03] active:scale-[0.98]", "dark:bg-card/60 dark:backdrop-blur-sm h-full", t162, t172, t182);
      $[35] = t162;
      $[36] = t172;
      $[37] = t182;
      $[38] = t11;
    } else {
      t11 = $[38];
    }
    if ($[39] !== isBatchMode || $[40] !== isPreset || $[41] !== onClick || $[42] !== onSelect) {
      t12 = () => {
        if (isBatchMode && !isPreset) {
          onSelect?.();
        } else {
          if (!isBatchMode) {
            onClick?.();
          }
        }
      };
      $[39] = isBatchMode;
      $[40] = isPreset;
      $[41] = onClick;
      $[42] = onSelect;
      $[43] = t12;
    } else {
      t12 = $[43];
    }
    const t192 = color === "purple" ? "bg-linear-to-br from-purple-500/12 via-pink-500/5 to-transparent" : color === "emerald" ? "bg-linear-to-br from-emerald-500/12 via-cyan-500/5 to-transparent" : "bg-linear-to-br from-cyan-500/12 via-purple-500/5 to-transparent";
    let t202;
    if ($[44] !== t192) {
      t202 = cn("relative flex h-32 items-center justify-center", t192);
      $[44] = t192;
      $[45] = t202;
    } else {
      t202 = $[45];
    }
    let t212;
    if ($[46] !== material || $[47] !== preset || $[48] !== type) {
      t212 = renderMaterialCardIcon({
        material,
        preset,
        fallbackCategory: type,
        fallbackIconSizeClass: "size-8"
      });
      $[46] = material;
      $[47] = preset;
      $[48] = type;
      $[49] = t212;
    } else {
      t212 = $[49];
    }
    let t222;
    if ($[50] !== isBatchMode || $[51] !== isPreset || $[52] !== isSelected || $[53] !== onSelect) {
      t222 = isBatchMode && !isPreset && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-2 top-2 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked: isSelected, onClick: _temp, onCheckedChange: onSelect }) });
      $[50] = isBatchMode;
      $[51] = isPreset;
      $[52] = isSelected;
      $[53] = onSelect;
      $[54] = t222;
    } else {
      t222 = $[54];
    }
    let t232;
    if ($[55] !== color || $[56] !== isBatchMode || $[57] !== isPreset) {
      t232 = isPreset && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("absolute top-2", isBatchMode ? "left-2" : "left-2"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn("flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium", color === "purple" ? "bg-purple-500/20 text-purple-400" : color === "emerald" ? "bg-emerald-500/20 text-emerald-400" : "bg-cyan-500/20 text-cyan-400"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-2.5" }),
        "预设"
      ] }) });
      $[55] = color;
      $[56] = isBatchMode;
      $[57] = isPreset;
      $[58] = t232;
    } else {
      t232 = $[58];
    }
    let t242;
    if ($[59] !== color || $[60] !== isBatchMode) {
      t242 = !isBatchMode && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-[2px] opacity-0 transition-all duration-200 group-hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex size-12 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-110", color === "purple" ? "bg-purple-500 shadow-[0_0_16px_oklch(0.65_0.28_290/0.5)]" : color === "emerald" ? "bg-emerald-500 shadow-[0_0_16px_oklch(0.72_0.17_155/0.5)]" : "bg-cyan-500 shadow-[0_0_16px_oklch(0.78_0.16_195/0.5)]"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "size-5 text-white", fill: "white" }) }) });
      $[59] = color;
      $[60] = isBatchMode;
      $[61] = t242;
    } else {
      t242 = $[61];
    }
    if ($[62] !== t202 || $[63] !== t212 || $[64] !== t222 || $[65] !== t232 || $[66] !== t242) {
      t13 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: t202, children: [
        t212,
        t222,
        t232,
        t242
      ] });
      $[62] = t202;
      $[63] = t212;
      $[64] = t222;
      $[65] = t232;
      $[66] = t242;
      $[67] = t13;
    } else {
      t13 = $[67];
    }
    t9 = "flex flex-1 flex-col p-3";
    let t252;
    if ($[68] !== name) {
      t252 = /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "truncate text-sm font-medium", children: name });
      $[68] = name;
      $[69] = t252;
    } else {
      t252 = $[69];
    }
    let t262;
    if ($[70] !== description) {
      t262 = description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 line-clamp-1 text-xs text-muted-foreground", children: description });
      $[70] = description;
      $[71] = t262;
    } else {
      t262 = $[71];
    }
    let t27;
    if ($[72] !== t252 || $[73] !== t262) {
      t27 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
        t252,
        t262
      ] });
      $[72] = t252;
      $[73] = t262;
      $[74] = t27;
    } else {
      t27 = $[74];
    }
    let t28;
    if ($[75] === Symbol.for("react.memo_cache_sentinel")) {
      t28 = /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon-sm", className: "size-6 shrink-0 opacity-0 transition-opacity group-hover:opacity-100", onClick: _temp2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, { className: "size-3.5" }) }) });
      $[75] = t28;
    } else {
      t28 = $[75];
    }
    let t29;
    if ($[76] !== onClick) {
      t29 = (e_1) => {
        e_1.stopPropagation();
        onClick?.();
      };
      $[76] = onClick;
      $[77] = t29;
    } else {
      t29 = $[77];
    }
    let t30;
    if ($[78] === Symbol.for("react.memo_cache_sentinel")) {
      t30 = /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "mr-2 size-3.5" });
      $[78] = t30;
    } else {
      t30 = $[78];
    }
    let t31;
    if ($[79] !== t29) {
      t31 = /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onClick: t29, children: [
        t30,
        "预览"
      ] });
      $[79] = t29;
      $[80] = t31;
    } else {
      t31 = $[80];
    }
    let t32;
    if ($[81] !== onUpload) {
      t32 = onUpload && /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onClick: (e_2) => {
        e_2.stopPropagation();
        onUpload();
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Share, { className: "mr-2 size-3.5" }),
        "上传网络素材"
      ] });
      $[81] = onUpload;
      $[82] = t32;
    } else {
      t32 = $[82];
    }
    let t33;
    if ($[83] !== onEdit) {
      t33 = onEdit && /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onClick: (e_3) => {
        e_3.stopPropagation();
        onEdit();
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "mr-2 size-3.5" }),
        "编辑"
      ] });
      $[83] = onEdit;
      $[84] = t33;
    } else {
      t33 = $[84];
    }
    let t34;
    if ($[85] !== onCopy) {
      t34 = onCopy && /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onClick: (e_4) => {
        e_4.stopPropagation();
        onCopy();
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "mr-2 size-3.5" }),
        "复制"
      ] });
      $[85] = onCopy;
      $[86] = t34;
    } else {
      t34 = $[86];
    }
    let t35;
    if ($[87] !== isPreset || $[88] !== onAttribute) {
      t35 = onAttribute && !isPreset && /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onClick: (e_5) => {
        e_5.stopPropagation();
        onAttribute();
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "mr-2 size-3.5" }),
        "属性"
      ] });
      $[87] = isPreset;
      $[88] = onAttribute;
      $[89] = t35;
    } else {
      t35 = $[89];
    }
    let t36;
    if ($[90] !== onExport) {
      t36 = onExport && /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onClick: (e_6) => {
        e_6.stopPropagation();
        onExport();
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { className: "mr-2 size-3.5" }),
        "导出"
      ] });
      $[90] = onExport;
      $[91] = t36;
    } else {
      t36 = $[91];
    }
    let t37;
    if ($[92] !== isPreset || $[93] !== onDelete) {
      t37 = onDelete && !isPreset && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { className: "text-destructive focus:text-destructive", onClick: (e_7) => {
          e_7.stopPropagation();
          onDelete();
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "mr-2 size-3.5" }),
          "删除"
        ] })
      ] });
      $[92] = isPreset;
      $[93] = onDelete;
      $[94] = t37;
    } else {
      t37 = $[94];
    }
    let t38;
    if ($[95] !== t31 || $[96] !== t32 || $[97] !== t33 || $[98] !== t34 || $[99] !== t35 || $[100] !== t36 || $[101] !== t37) {
      t38 = /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
        t28,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { align: "end", className: "w-36", children: [
          t31,
          t32,
          t33,
          t34,
          t35,
          t36,
          t37
        ] })
      ] });
      $[95] = t31;
      $[96] = t32;
      $[97] = t33;
      $[98] = t34;
      $[99] = t35;
      $[100] = t36;
      $[101] = t37;
      $[102] = t38;
    } else {
      t38 = $[102];
    }
    if ($[103] !== t27 || $[104] !== t38) {
      t10 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
        t27,
        t38
      ] });
      $[103] = t27;
      $[104] = t38;
      $[105] = t10;
    } else {
      t10 = $[105];
    }
    t7 = "mt-2 flex items-center gap-2";
    t8 = scoreTier && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("rounded px-1.5 py-0.5 text-[10px] font-medium", scoreTier.badgeClass), children: scoreTier.label });
    $[4] = color;
    $[5] = description;
    $[6] = isBatchMode;
    $[7] = isPreset;
    $[8] = isSelected;
    $[9] = item.isOfficial;
    $[10] = item.officialScore;
    $[11] = material;
    $[12] = name;
    $[13] = onAttribute;
    $[14] = onClick;
    $[15] = onCopy;
    $[16] = onDelete;
    $[17] = onEdit;
    $[18] = onExport;
    $[19] = onSelect;
    $[20] = onUpload;
    $[21] = preset;
    $[22] = type;
    $[23] = T0;
    $[24] = categoryText;
    $[25] = scoreTier;
    $[26] = t10;
    $[27] = t11;
    $[28] = t12;
    $[29] = t13;
    $[30] = t14;
    $[31] = t15;
    $[32] = t7;
    $[33] = t8;
    $[34] = t9;
  } else {
    T0 = $[23];
    categoryText = $[24];
    scoreTier = $[25];
    t10 = $[26];
    t11 = $[27];
    t12 = $[28];
    t13 = $[29];
    t14 = $[30];
    t15 = $[31];
    t7 = $[32];
    t8 = $[33];
    t9 = $[34];
  }
  let t16;
  if ($[106] !== item.isOfficial) {
    t16 = item.isOfficial && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded px-1.5 py-0.5 text-[10px] font-medium bg-blue-500/20 text-blue-400", children: "官方" });
    $[106] = item.isOfficial;
    $[107] = t16;
  } else {
    t16 = $[107];
  }
  const t17 = color === "purple" ? "bg-purple-500/15 text-purple-400 dark:bg-purple-500/20" : color === "emerald" ? "bg-emerald-500/15 text-emerald-400 dark:bg-emerald-500/20" : "bg-cyan-500/15 text-cyan-400 dark:bg-cyan-500/20";
  let t18;
  if ($[108] !== t17) {
    t18 = cn("rounded-full px-2 py-0.5 text-[10px] font-medium", t17);
    $[108] = t17;
    $[109] = t18;
  } else {
    t18 = $[109];
  }
  let t19;
  if ($[110] !== t18 || $[111] !== typeLabel) {
    t19 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: t18, children: typeLabel });
    $[110] = t18;
    $[111] = typeLabel;
    $[112] = t19;
  } else {
    t19 = $[112];
  }
  let t20;
  if ($[113] !== duration || $[114] !== material || $[115] !== objectsCount) {
    t20 = material && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
      objectsCount,
      " 个图形",
      duration > 0 && ` · ${duration}ms`
    ] });
    $[113] = duration;
    $[114] = material;
    $[115] = objectsCount;
    $[116] = t20;
  } else {
    t20 = $[116];
  }
  let t21;
  if ($[117] !== categoryText) {
    t21 = categoryText ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: categoryText }) : null;
    $[117] = categoryText;
    $[118] = t21;
  } else {
    t21 = $[118];
  }
  let t22;
  if ($[119] !== t16 || $[120] !== t19 || $[121] !== t20 || $[122] !== t21 || $[123] !== t7 || $[124] !== t8) {
    t22 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: t7, children: [
      t8,
      t16,
      t19,
      t20,
      t21
    ] });
    $[119] = t16;
    $[120] = t19;
    $[121] = t20;
    $[122] = t21;
    $[123] = t7;
    $[124] = t8;
    $[125] = t22;
  } else {
    t22 = $[125];
  }
  let t23;
  if ($[126] !== isNetwork || $[127] !== item.createTime || $[128] !== item.creator || $[129] !== item.downloadCount || $[130] !== item.isOfficial || $[131] !== item.officialScore || $[132] !== scoreTier) {
    t23 = isNetwork && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-0.5", children: [
      scoreTier && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StarRow, { count: officialScoreToStarDisplayCount(item.officialScore), maxStars: 5 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
        item.creator && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
          "作者：",
          item.creator ?? ""
        ] }),
        item.createTime && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
          "时间： ",
          formatDate(item.createTime)
        ] }),
        !item.isOfficial && item.downloadCount ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
          "下载量：",
          item.downloadCount
        ] }) : null
      ] })
    ] }) });
    $[126] = isNetwork;
    $[127] = item.createTime;
    $[128] = item.creator;
    $[129] = item.downloadCount;
    $[130] = item.isOfficial;
    $[131] = item.officialScore;
    $[132] = scoreTier;
    $[133] = t23;
  } else {
    t23 = $[133];
  }
  let t24;
  if ($[134] !== t10 || $[135] !== t22 || $[136] !== t23 || $[137] !== t9) {
    t24 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: t9, children: [
      t10,
      t22,
      t23
    ] });
    $[134] = t10;
    $[135] = t22;
    $[136] = t23;
    $[137] = t9;
    $[138] = t24;
  } else {
    t24 = $[138];
  }
  let t25;
  if ($[139] !== t11 || $[140] !== t12 || $[141] !== t13 || $[142] !== t24) {
    t25 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: t11, onClick: t12, children: [
      t13,
      t24
    ] });
    $[139] = t11;
    $[140] = t12;
    $[141] = t13;
    $[142] = t24;
    $[143] = t25;
  } else {
    t25 = $[143];
  }
  let t26;
  if ($[144] !== T0 || $[145] !== t14 || $[146] !== t15 || $[147] !== t25) {
    t26 = /* @__PURE__ */ jsxRuntimeExports.jsx(T0, { spotlightColor: t14, className: t15, children: t25 });
    $[144] = T0;
    $[145] = t14;
    $[146] = t15;
    $[147] = t25;
    $[148] = t26;
  } else {
    t26 = $[148];
  }
  return t26;
});
function _temp(e) {
  return e.stopPropagation();
}
function _temp2(e_0) {
  return e_0.stopPropagation();
}
const rainbowSpectrumPreset = {
  id: "rainbow-spectrum",
  name: "彩虹频谱条",
  icon: "🌈",
  description: "经典的频谱条效果，低音到高音从左到右排列，颜色渐变呈现完整音频频谱",
  category: PresetType.spectrum.value,
  mode: "imperative",
  requires: {
    audio: true
  },
  params: [{
    key: "barCount",
    name: "柱子数量",
    type: "number",
    default: 32,
    min: 8,
    max: 64,
    step: 4
  }, {
    key: "smoothing",
    name: "平滑度",
    type: "number",
    default: 0.2,
    min: 0.05,
    max: 0.5,
    step: 0.05
  }, {
    key: "maxHeight",
    name: "最大高度",
    type: "number",
    default: 300,
    min: 100,
    max: 500,
    step: 50
  }],
  setup(_ctx, params) {
    const barCount = params.barCount || 32;
    return {
      barCount,
      smoothedHeights: new Array(barCount).fill(5)
    };
  },
  render(ctx, state, input, params) {
    const s = state;
    const c2d = ctx.canvas2d;
    const {
      audio
    } = input;
    if (!audio) return;
    const smoothing = params.smoothing || 0.2;
    const maxHeight = params.maxHeight || 300;
    const newBarCount = params.barCount || 32;
    if (newBarCount !== s.barCount) {
      s.barCount = newBarCount;
      s.smoothedHeights = new Array(newBarCount).fill(5);
    }
    const margin = 50;
    const barWidth = (ctx.width - margin * 2) / s.barCount;
    const baseY = ctx.height;
    for (let i = 0; i < s.barCount; i++) {
      const val = audio.frequencyData[i] || 0;
      const targetHeight = val / 255 * maxHeight + 5;
      s.smoothedHeights[i] += (targetHeight - s.smoothedHeights[i]) * smoothing;
      const hue = i / s.barCount * 300;
      c2d.fillStyle = `hsl(${hue}, 80%, 55%)`;
      c2d.fillRect(margin + i * barWidth, baseY - s.smoothedHeights[i], barWidth, s.smoothedHeights[i]);
    }
  },
  cleanup() {
  }
};
const polygonWaveformPreset = {
  id: "polygon-waveform",
  name: "波形山峰",
  icon: "🏔️",
  description: "流动的音频波形，呈现连续的山峰效果",
  category: PresetType.spectrum.value,
  mode: "imperative",
  requires: {
    audio: true
  },
  params: [{
    key: "pointCount",
    name: "点数量",
    type: "number",
    default: 64,
    min: 32,
    max: 128,
    step: 16
  }, {
    key: "smoothing",
    name: "平滑度",
    type: "number",
    default: 0.3,
    min: 0.1,
    max: 0.8,
    step: 0.1
  }, {
    key: "amplitudeScale",
    name: "振幅倍数",
    type: "number",
    default: 0.5,
    min: 0.2,
    max: 1,
    step: 0.1
  }, {
    key: "normalize",
    name: "归一化强度",
    type: "number",
    default: 0.7,
    min: 0,
    max: 1,
    step: 0.1
  }, {
    key: "rainbow",
    name: "七彩模式",
    type: "boolean",
    default: false
  }, {
    key: "rainbowSpeed",
    name: "七彩速度",
    type: "number",
    default: 1,
    min: 0.2,
    max: 5,
    step: 0.2
  }, {
    key: "fillColor",
    name: "填充颜色",
    type: "color",
    default: "#50ce78"
  }, {
    key: "cornerRadius",
    name: "圆滑度",
    type: "number",
    default: 15,
    min: 0,
    max: 30,
    step: 5
  }],
  setup(_ctx, params) {
    const pointCount = params.pointCount || 64;
    return {
      pointCount,
      smoothedValues: new Array(pointCount).fill(0),
      hueOffset: 0
    };
  },
  render(ctx, state, input, params) {
    const s = state;
    const c2d = ctx.canvas2d;
    const {
      width,
      height
    } = ctx;
    const {
      audio
    } = input;
    if (!audio) return;
    const smoothing = params.smoothing || 0.3;
    const amplitudeScale = params.amplitudeScale || 0.5;
    const normalizeStrength = params.normalize ?? 0.7;
    const fillColor = params.fillColor || "#50ce78";
    const cornerRadius = params.cornerRadius || 15;
    const pointCount = params.pointCount || 64;
    const rainbow = params.rainbow ?? false;
    const rainbowSpeed = params.rainbowSpeed ?? 1;
    const baseY = height;
    if (s.smoothedValues.length !== pointCount) {
      const newArr = new Array(pointCount).fill(0);
      for (let i = 0; i < Math.min(s.smoothedValues.length, pointCount); i++) {
        newArr[i] = s.smoothedValues[i];
      }
      s.smoothedValues = newArr;
      s.pointCount = pointCount;
    }
    const sliceWidth = width / (pointCount - 1);
    const maxAmplitude = height * amplitudeScale;
    const rawValues = new Array(pointCount);
    for (let i = 0; i < pointCount; i++) {
      rawValues[i] = audio.frequencyData[Math.floor(i / pointCount * audio.binCount)] || 0;
    }
    const segmentCount = 3;
    const segmentSize = Math.floor(pointCount / segmentCount);
    const normalizedValues = new Array(pointCount);
    for (let seg = 0; seg < segmentCount; seg++) {
      const start = seg * segmentSize;
      const end = seg === segmentCount - 1 ? pointCount : (seg + 1) * segmentSize;
      let segMax = 0;
      for (let i = start; i < end; i++) segMax = Math.max(segMax, rawValues[i]);
      const factor = segMax > 0 ? 255 / segMax : 1;
      for (let i = start; i < end; i++) {
        normalizedValues[i] = rawValues[i] * (1 - normalizeStrength) + rawValues[i] * factor * normalizeStrength;
      }
    }
    const wavePoints = [];
    for (let i = 0; i < pointCount; i++) {
      const target = normalizedValues[i] / 255 * maxAmplitude;
      s.smoothedValues[i] += (target - s.smoothedValues[i]) * smoothing;
      wavePoints.push({
        x: i * sliceWidth,
        y: baseY - s.smoothedValues[i]
      });
    }
    c2d.beginPath();
    c2d.moveTo(0, baseY);
    if (cornerRadius > 0 && wavePoints.length > 2) {
      c2d.lineTo(wavePoints[0].x, wavePoints[0].y);
      for (let i = 0; i < wavePoints.length - 1; i++) {
        const curr = wavePoints[i];
        const next = wavePoints[i + 1];
        const mx = (curr.x + next.x) / 2;
        const my = (curr.y + next.y) / 2;
        c2d.quadraticCurveTo(curr.x, curr.y, mx, my);
      }
      const last = wavePoints[wavePoints.length - 1];
      c2d.lineTo(last.x, last.y);
    } else {
      for (let i = 0; i < wavePoints.length; i++) {
        c2d.lineTo(wavePoints[i].x, wavePoints[i].y);
      }
    }
    c2d.lineTo(width, baseY);
    c2d.closePath();
    if (rainbow) {
      s.hueOffset = (s.hueOffset + rainbowSpeed) % 360;
      let totalEnergy = 0;
      for (let i = 0; i < pointCount; i++) totalEnergy += normalizedValues[i];
      const overallEnergy = totalEnergy / (pointCount * 255);
      const lightness = 40 + overallEnergy * 25;
      const h0 = s.hueOffset;
      const h1 = (s.hueOffset + 120) % 360;
      const h2 = (s.hueOffset + 240) % 360;
      const grad = c2d.createLinearGradient(0, 0, width, 0);
      grad.addColorStop(0, `hsl(${h0}, 100%, ${lightness}%)`);
      grad.addColorStop(0.5, `hsl(${h1}, 100%, ${lightness}%)`);
      grad.addColorStop(1, `hsl(${h2}, 100%, ${lightness}%)`);
      c2d.fillStyle = grad;
    } else {
      c2d.fillStyle = fillColor;
    }
    c2d.fill();
  },
  cleanup() {
  }
};
function rgbToHsl(r, g, b) {
  const rP = r / 255;
  const gP = g / 255;
  const bP = b / 255;
  const cMax = Math.max(rP, gP, bP);
  const cMin = Math.min(rP, gP, bP);
  const delta = cMax - cMin;
  let h = 0;
  let s = 0;
  const l = (cMax + cMin) / 2;
  if (delta !== 0) {
    s = delta / (1 - Math.abs(2 * l - 1));
    if (cMax === rP) h = (gP - bP) / delta % 6;
    else if (cMax === gP) h = (bP - rP) / delta + 2;
    else h = (rP - gP) / delta + 4;
  }
  h = Math.round(h * 60);
  if (h < 0) h += 360;
  return {
    h,
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}
function analyzeRegions(frame, rows, cols, pictureMode, hueShift, brightnessAdj, saturationAdj, state) {
  const regionW = frame.width / cols;
  const regionH = frame.height / rows;
  const data = frame.data;
  const fw = frame.width;
  const total = rows * cols;
  const hslArray = new Float32Array(total * 3);
  let maxSat = 0;
  let domIdx = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const idx = row * cols + col;
      const sx = Math.floor(col * regionW);
      const sy = Math.floor(row * regionH);
      const ex = Math.min(Math.floor(sx + regionW), frame.width);
      const ey = Math.min(Math.floor(sy + regionH), frame.height);
      let tR = 0, tG = 0, tB = 0, cnt = 0;
      for (let y = sy; y < ey; y++) {
        for (let x = sx; x < ex; x++) {
          const p = (y * fw + x) * 4;
          tR += data[p];
          tG += data[p + 1];
          tB += data[p + 2];
          cnt++;
        }
      }
      if (cnt === 0) {
        hslArray[idx * 3] = 0;
        hslArray[idx * 3 + 1] = 0;
        hslArray[idx * 3 + 2] = 0;
        continue;
      }
      const hsl = rgbToHsl(tR / cnt, tG / cnt, tB / cnt);
      hslArray[idx * 3] = hsl.h;
      hslArray[idx * 3 + 1] = hsl.s;
      hslArray[idx * 3 + 2] = hsl.l;
      if (hsl.l > 30 && hsl.s > maxSat) {
        maxSat = hsl.s;
        domIdx = idx;
      }
    }
  }
  let dominantHue = hslArray[domIdx * 3];
  if (state.lastDominantHue === -1) {
    state.lastDominantHue = dominantHue;
  } else {
    if (dominantHue > state.lastDominantHue) state.lastDominantHue += 1;
    else if (dominantHue < state.lastDominantHue) state.lastDominantHue -= 1;
    dominantHue = state.lastDominantHue;
  }
  for (let i = 0; i < total; i++) {
    let h = hslArray[i * 3];
    let s = hslArray[i * 3 + 1];
    let l = hslArray[i * 3 + 2];
    switch (pictureMode) {
      case "Mono":
        s = 0;
        break;
      case "Vivid":
        s = Math.min(100, s + 10);
        break;
      case "Cinema":
        s = Math.max(0, s - 10);
        break;
      case "Dominant":
        h = dominantHue;
        break;
    }
    h = (h + hueShift + 360) % 360;
    l = Math.max(0, Math.min(100, l + brightnessAdj));
    s = Math.max(0, Math.min(100, s + saturationAdj));
    hslArray[i * 3] = h;
    hslArray[i * 3 + 1] = s;
    hslArray[i * 3 + 2] = l;
  }
  return {
    hslArray,
    dominantHue
  };
}
function applyBlur(hsl, cols, rows, buf) {
  const total = rows * cols;
  for (let i = 0; i < total; i++) {
    const row = i / cols | 0;
    const col = i % cols;
    let tH = hsl[i * 3], tS = hsl[i * 3 + 1], tL = hsl[i * 3 + 2], c = 1;
    if (row > 0) {
      const n = ((row - 1) * cols + col) * 3;
      tH += hsl[n];
      tS += hsl[n + 1];
      tL += hsl[n + 2];
      c++;
    }
    if (row < rows - 1) {
      const n = ((row + 1) * cols + col) * 3;
      tH += hsl[n];
      tS += hsl[n + 1];
      tL += hsl[n + 2];
      c++;
    }
    if (col > 0) {
      const n = (row * cols + col - 1) * 3;
      tH += hsl[n];
      tS += hsl[n + 1];
      tL += hsl[n + 2];
      c++;
    }
    if (col < cols - 1) {
      const n = (row * cols + col + 1) * 3;
      tH += hsl[n];
      tS += hsl[n + 1];
      tL += hsl[n + 2];
      c++;
    }
    buf[i * 3] = tH / c;
    buf[i * 3 + 1] = tS / c;
    buf[i * 3 + 2] = tL / c;
  }
  buf.copyWithin(0, 0);
  for (let i = 0; i < total * 3; i++) {
    hsl[i] = buf[i];
  }
}
const screenAmbiencePreset = {
  id: "screen-ambience",
  name: "屏幕映射",
  icon: "🖥️",
  description: "将屏幕内容实时映射到键盘灯光上，支持多种图像模式和颜色调节",
  category: PresetType.screen.value,
  mode: "imperative",
  requires: {
    screen: {
      regions: "grid",
      regionCount: 560,
      captureRate: 30
    }
  },
  params: [{
    key: "pictureMode",
    name: "图像模式",
    type: "select",
    default: "Vivid",
    options: [{
      label: "标准",
      value: "Standard"
    }, {
      label: "电影",
      value: "Cinema"
    }, {
      label: "黑白",
      value: "Mono"
    }, {
      label: "鲜艳",
      value: "Vivid"
    }, {
      label: "主色调",
      value: "Dominant"
    }]
  }, {
    key: "hueShift",
    name: "色相偏移",
    type: "number",
    default: 0,
    min: -180,
    max: 180,
    step: 10
  }, {
    key: "brightness",
    name: "亮度",
    type: "number",
    default: 0,
    min: -100,
    max: 100,
    step: 10
  }, {
    key: "saturation",
    name: "饱和度",
    type: "number",
    default: 0,
    min: -100,
    max: 100,
    step: 10
  }, {
    key: "blur",
    name: "模糊",
    type: "boolean",
    default: false
  }, {
    key: "cols",
    name: "列数",
    type: "number",
    default: 28,
    min: 8,
    max: 64,
    step: 4
  }, {
    key: "rows",
    name: "行数",
    type: "number",
    default: 20,
    min: 5,
    max: 40,
    step: 5
  }],
  setup(ctx, params) {
    const cols = params.cols || 28;
    const rows = params.rows || 20;
    return {
      rows,
      cols,
      cellWidth: ctx.width / cols,
      cellHeight: ctx.height / rows,
      lastDominantHue: -1,
      blurBuf: new Float32Array(rows * cols * 3)
    };
  },
  render(ctx, state, input, params) {
    const s = state;
    const c2d = ctx.canvas2d;
    const frame = input.screen?.frameData;
    if (!frame) return;
    const newCols = params.cols || 28;
    const newRows = params.rows || 20;
    if (newCols !== s.cols || newRows !== s.rows) {
      s.cols = newCols;
      s.rows = newRows;
      s.cellWidth = ctx.width / newCols;
      s.cellHeight = ctx.height / newRows;
      s.blurBuf = new Float32Array(newRows * newCols * 3);
    }
    const pictureMode = params.pictureMode || "Vivid";
    const hueShift = params.hueShift || 0;
    const brightness = params.brightness || 0;
    const saturation = params.saturation || 0;
    const blur = params.blur || false;
    const {
      hslArray
    } = analyzeRegions(frame, s.rows, s.cols, pictureMode, hueShift, brightness, saturation, s);
    if (blur) {
      applyBlur(hslArray, s.cols, s.rows, s.blurBuf);
    }
    for (let row = 0; row < s.rows; row++) {
      for (let col = 0; col < s.cols; col++) {
        const i = (row * s.cols + col) * 3;
        c2d.fillStyle = `hsl(${hslArray[i]}, ${hslArray[i + 1]}%, ${hslArray[i + 2]}%)`;
        c2d.fillRect(col * s.cellWidth, row * s.cellHeight, s.cellWidth, s.cellHeight);
      }
    }
  },
  cleanup(_ctx, _state) {
  }
};
const cameraAmbiencePreset = {
  id: "camera-ambience",
  name: "摄像头映射",
  icon: "📷",
  description: "将摄像头画面实时映射到键盘灯光上，支持镜像翻转和多种图像模式",
  category: PresetType.screen.value,
  mode: "imperative",
  requires: {
    screen: {
      regions: "grid",
      regionCount: 560,
      // 28x20
      captureRate: 30
    }
  },
  params: [{
    key: "mirror",
    name: "镜像翻转",
    type: "boolean",
    default: true,
    description: "水平翻转画面（自拍模式）"
  }, {
    key: "pictureMode",
    name: "图像模式",
    type: "select",
    default: "Vivid",
    options: [{
      label: "标准",
      value: "Standard"
    }, {
      label: "电影",
      value: "Cinema"
    }, {
      label: "黑白",
      value: "Mono"
    }, {
      label: "鲜艳",
      value: "Vivid"
    }, {
      label: "主色调",
      value: "Dominant"
    }]
  }, {
    key: "hueShift",
    name: "色相偏移",
    type: "number",
    default: 0,
    min: -180,
    max: 180,
    step: 10
  }, {
    key: "brightness",
    name: "亮度",
    type: "number",
    default: 0,
    min: -100,
    max: 100,
    step: 10
  }, {
    key: "saturation",
    name: "饱和度",
    type: "number",
    default: 0,
    min: -100,
    max: 100,
    step: 10
  }, {
    key: "blur",
    name: "模糊",
    type: "boolean",
    default: false
  }, {
    key: "cols",
    name: "列数",
    type: "number",
    default: 28,
    min: 8,
    max: 64,
    step: 4
  }, {
    key: "rows",
    name: "行数",
    type: "number",
    default: 20,
    min: 5,
    max: 40,
    step: 5
  }],
  setup: (ctx, params) => {
    const cols = params.cols || 28;
    const rows = params.rows || 20;
    const mirror = params.mirror !== false;
    const cellWidth = ctx.width / cols;
    const cellHeight = ctx.height / rows;
    const group = new ctx.Group({
      x: 0,
      y: 0
    });
    const cells = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const cell = new ctx.Rect({
          x: col * cellWidth,
          y: row * cellHeight,
          width: cellWidth,
          height: cellHeight,
          fill: "#000000"
        });
        cells.push(cell);
        group.add(cell);
      }
    }
    ctx.app.tree.add(group);
    cameraCapturerService.setMirror(mirror);
    if (!cameraCapturerService.isRunning()) {
      cameraCapturerService.start().catch((err) => {
        console.error("[CameraAmbience] 启动摄像头捕获失败:", err);
        const message = err instanceof Error ? err.message : "摄像头启动失败";
        toast.error(message);
      });
    }
    return {
      group,
      cells,
      rows,
      cols,
      isCapturing: true,
      regions: []
    };
  },
  render: (ctx, state, _input, params) => {
    const {
      cells,
      group
    } = state;
    const currentRows = state.rows;
    const currentCols = state.cols;
    const mirror = params.mirror !== false;
    const pictureMode = params.pictureMode || "Vivid";
    const hueShift = params.hueShift || 0;
    const brightness = params.brightness || 0;
    const saturation = params.saturation || 0;
    const blur = params.blur || false;
    const newCols = params.cols || 28;
    const newRows = params.rows || 20;
    if (cameraCapturerService.getMirror() !== mirror) {
      cameraCapturerService.setMirror(mirror);
    }
    if (newCols !== currentCols || newRows !== currentRows) {
      cells.forEach((cell) => cell.remove());
      cells.length = 0;
      const cellWidth = ctx.width / newCols;
      const cellHeight = ctx.height / newRows;
      for (let row = 0; row < newRows; row++) {
        for (let col = 0; col < newCols; col++) {
          const cell = new ctx.Rect({
            x: col * cellWidth,
            y: row * cellHeight,
            width: cellWidth,
            height: cellHeight,
            fill: "#000000"
          });
          cells.push(cell);
          group.add(cell);
        }
      }
      state.rows = newRows;
      state.cols = newCols;
    }
    const frame = cameraCapturerService.getLatestFrame();
    if (!frame) return;
    const result = screenRegionAnalyzer.analyze(frame, {
      rows: newRows,
      cols: newCols,
      pictureMode,
      hueShift,
      brightness,
      saturation
    });
    result.regions.forEach((region, index) => {
      if (index < cells.length) {
        const color = ScreenRegionAnalyzer.hslToString(region.hue, region.saturation, region.lightness);
        cells[index].fill = color;
      }
    });
    state.regions = result.regions;
    if (blur) {
      applyBlurEffect(cells, newCols, newRows, result.regions);
    }
  },
  cleanup: (_ctx, state) => {
    const {
      group
    } = state;
    if (cameraCapturerService.isRunning()) {
      cameraCapturerService.stop().catch((err) => {
        console.error("[CameraAmbience] 停止摄像头捕获失败:", err);
      });
    }
    screenRegionAnalyzer.resetDominantHue();
    group?.remove();
  }
};
function applyBlurEffect(cells, cols, rows, regions) {
  const blurredColors = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const index = row * cols + col;
      const current = regions[index];
      if (!current) {
        blurredColors.push("#000000");
        continue;
      }
      let totalH = current.hue;
      let totalS = current.saturation;
      let totalL = current.lightness;
      let count = 1;
      if (row > 0) {
        const neighbor = regions[(row - 1) * cols + col];
        if (neighbor) {
          totalH += neighbor.hue;
          totalS += neighbor.saturation;
          totalL += neighbor.lightness;
          count++;
        }
      }
      if (row < rows - 1) {
        const neighbor = regions[(row + 1) * cols + col];
        if (neighbor) {
          totalH += neighbor.hue;
          totalS += neighbor.saturation;
          totalL += neighbor.lightness;
          count++;
        }
      }
      if (col > 0) {
        const neighbor = regions[row * cols + (col - 1)];
        if (neighbor) {
          totalH += neighbor.hue;
          totalS += neighbor.saturation;
          totalL += neighbor.lightness;
          count++;
        }
      }
      if (col < cols - 1) {
        const neighbor = regions[row * cols + (col + 1)];
        if (neighbor) {
          totalH += neighbor.hue;
          totalS += neighbor.saturation;
          totalL += neighbor.lightness;
          count++;
        }
      }
      const avgH = Math.round(totalH / count);
      const avgS = Math.round(totalS / count);
      const avgL = Math.round(totalL / count);
      blurredColors.push(ScreenRegionAnalyzer.hslToString(avgH, avgS, avgL));
    }
  }
  blurredColors.forEach((color, index) => {
    if (index < cells.length) {
      cells[index].fill = color;
    }
  });
}
function computeLayout(width, height, barCount, angle) {
  const angleRad = angle * Math.PI / 180;
  const effectiveWidth = width + height * Math.tan(angleRad);
  const barWidth = effectiveWidth / barCount * 1.5;
  const totalWidth = barCount * barWidth;
  const totalBars = Math.ceil(barCount * 1.5);
  const leftOffset = height * Math.tan(angleRad);
  const barHeight = height * 2.5;
  return {
    barWidth,
    totalWidth,
    totalBars,
    leftOffset,
    barHeight
  };
}
const rainbowSweepPreset = {
  id: "rainbow-sweep",
  name: "彩虹扫光",
  icon: "🌈",
  description: "连续流动的彩虹渐变效果，屏幕始终被柔和的彩虹色填满",
  category: PresetType.ambient.value,
  mode: "imperative",
  params: [{
    key: "speed",
    name: "流动速度",
    type: "number",
    default: 1,
    min: 0.1,
    max: 5,
    step: 0.1
  }, {
    key: "direction",
    name: "流动方向",
    type: "select",
    default: "right",
    options: [{
      label: "向右",
      value: "right"
    }, {
      label: "向左",
      value: "left"
    }]
  }, {
    key: "opacity",
    name: "整体透明度",
    type: "number",
    default: 0.9,
    min: 0.5,
    max: 1,
    step: 0.05
  }, {
    key: "saturation",
    name: "色彩饱和度",
    type: "number",
    default: 85,
    min: 50,
    max: 100,
    step: 5
  }, {
    key: "brightness",
    name: "亮度",
    type: "number",
    default: 60,
    min: 40,
    max: 80,
    step: 5
  }, {
    key: "barCount",
    name: "彩虹条数",
    type: "number",
    default: 40,
    min: 20,
    max: 80,
    step: 5
  }, {
    key: "angle",
    name: "倾斜角度",
    type: "number",
    default: 20,
    min: 0,
    max: 45,
    step: 5
  }],
  setup(ctx, params) {
    const barCount = params.barCount ?? 40;
    const angle = params.angle ?? 20;
    const {
      barWidth,
      totalWidth,
      totalBars,
      leftOffset,
      barHeight
    } = computeLayout(ctx.width, ctx.height, barCount, angle);
    return {
      barCount,
      angle,
      barWidth,
      totalWidth,
      totalBars,
      leftOffset,
      barHeight
    };
  },
  render(ctx, state, input, params) {
    const s = state;
    const {
      width,
      height
    } = ctx;
    const c2d = ctx.canvas2d;
    const speed = params.speed ?? 1;
    const direction = params.direction || "right";
    const opacity = params.opacity ?? 0.9;
    const saturation = params.saturation ?? 85;
    const brightness = params.brightness ?? 60;
    const newBarCount = params.barCount ?? 40;
    const newAngle = params.angle ?? 20;
    if (newBarCount !== s.barCount || Math.abs(newAngle - s.angle) > 0.1) {
      const layout = computeLayout(width, height, newBarCount, newAngle);
      s.barCount = newBarCount;
      s.angle = newAngle;
      Object.assign(s, layout);
    }
    const {
      elapsedTime
    } = input;
    const baseSpeed = 0.1;
    const offset = elapsedTime * speed * baseSpeed % s.totalWidth;
    const angleRad = s.angle * Math.PI / 180;
    c2d.save();
    c2d.globalAlpha = opacity;
    for (let i = 0; i < s.totalBars; i++) {
      let x = i * s.barWidth - s.leftOffset;
      if (direction === "right") {
        x = (x + offset) % s.totalWidth - s.leftOffset;
      } else {
        x = (x - offset + s.totalWidth) % s.totalWidth - s.leftOffset;
      }
      const hue = i % s.barCount / s.barCount * 360;
      c2d.fillStyle = `hsl(${hue}, ${saturation}%, ${brightness}%)`;
      c2d.save();
      c2d.translate(x, height / 2);
      c2d.rotate(angleRad);
      c2d.fillRect(-s.barWidth / 2, -s.barHeight / 2, s.barWidth, s.barHeight);
      c2d.restore();
    }
    c2d.restore();
  },
  cleanup() {
  }
};
const HEART_PATH_D = "M 0,-30 C -15,-45 -40,-45 -40,-25 C -40,-10 -30,0 0,20 C 30,0 40,-10 40,-25 C 40,-45 15,-45 0,-30 Z";
const COLOR_SCHEMES = {
  warm: ["#ff0000", "#ff4d4d", "#ff80ab", "#ea80fc", "#e040fb", "#ff1744", "#d500f9", "#f50057"],
  cool: ["#00bcd4", "#26c6da", "#4dd0e1", "#80deea", "#b2ebf2", "#18ffff", "#84ffff", "#00e5ff"],
  rainbow: ["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#00ffff", "#0000ff", "#8b00ff", "#ff00ff"]
};
function getColorFromScheme(scheme, index, total, customColor) {
  if (scheme === "custom" && customColor) return customColor;
  const colors = COLOR_SCHEMES[scheme] || COLOR_SCHEMES.warm;
  return colors[Math.floor(index / total * colors.length) % colors.length];
}
function generateBurstPoints(mode, width, height, count) {
  const pts = [];
  const cx = width / 2;
  const cy = height / 2;
  const m = 80;
  switch (mode) {
    case "center":
      pts.push({
        x: cx,
        y: cy,
        lastBurstTime: -1e4,
        nextBurstDelay: 0
      });
      break;
    case "corners":
      pts.push({
        x: m,
        y: m,
        lastBurstTime: -1e4,
        nextBurstDelay: 0
      }, {
        x: width - m,
        y: m,
        lastBurstTime: -1e4,
        nextBurstDelay: 300
      }, {
        x: m,
        y: height - m,
        lastBurstTime: -1e4,
        nextBurstDelay: 600
      }, {
        x: width - m,
        y: height - m,
        lastBurstTime: -1e4,
        nextBurstDelay: 900
      });
      break;
    case "corners_center":
      pts.push({
        x: cx,
        y: cy,
        lastBurstTime: -1e4,
        nextBurstDelay: 0
      }, {
        x: m,
        y: m,
        lastBurstTime: -1e4,
        nextBurstDelay: 200
      }, {
        x: width - m,
        y: m,
        lastBurstTime: -1e4,
        nextBurstDelay: 400
      }, {
        x: m,
        y: height - m,
        lastBurstTime: -1e4,
        nextBurstDelay: 600
      }, {
        x: width - m,
        y: height - m,
        lastBurstTime: -1e4,
        nextBurstDelay: 800
      });
      break;
    case "edges": {
      const ec = Math.max(4, count);
      for (let i = 0; i < ec; i++) {
        const side = i % 4;
        const prog = Math.floor(i / 4) / Math.max(1, Math.floor(ec / 4));
        let x = 0, y = 0;
        switch (side) {
          case 0:
            x = m + (width - m * 2) * prog;
            y = m;
            break;
          case 1:
            x = width - m;
            y = m + (height - m * 2) * prog;
            break;
          case 2:
            x = width - m - (width - m * 2) * prog;
            y = height - m;
            break;
          case 3:
            x = m;
            y = height - m - (height - m * 2) * prog;
            break;
        }
        pts.push({
          x,
          y,
          lastBurstTime: -1e4,
          nextBurstDelay: i * 150
        });
      }
      break;
    }
    case "grid": {
      const gs = Math.ceil(Math.sqrt(count));
      const sx = (width - m * 2) / (gs - 1 || 1);
      const sy = (height - m * 2) / (gs - 1 || 1);
      for (let r = 0; r < gs && pts.length < count; r++) {
        for (let c = 0; c < gs && pts.length < count; c++) {
          pts.push({
            x: m + c * sx,
            y: m + r * sy,
            lastBurstTime: -1e4,
            nextBurstDelay: (r * gs + c) * 100
          });
        }
      }
      break;
    }
    case "random":
      for (let i = 0; i < count; i++) {
        pts.push({
          x: m + Math.random() * (width - m * 2),
          y: m + Math.random() * (height - m * 2),
          lastBurstTime: -1e4,
          nextBurstDelay: Math.random() * 1e3
        });
      }
      break;
    default:
      pts.push({
        x: cx,
        y: cy,
        lastBurstTime: -1e4,
        nextBurstDelay: 0
      });
  }
  return pts;
}
const heartBurstPreset = {
  id: "heart-burst",
  name: "❤️ 心形爆发",
  icon: "💕",
  description: "浪漫的心形粒子爆发效果，带有重力和旋转动画",
  category: PresetType.ambient.value,
  mode: "imperative",
  params: [{
    key: "burstMode",
    name: "爆发模式",
    type: "select",
    default: "center",
    options: [{
      label: "中心爆发",
      value: "center"
    }, {
      label: "四角爆发",
      value: "corners"
    }, {
      label: "四角+中心",
      value: "corners_center"
    }, {
      label: "边缘喷射",
      value: "edges"
    }, {
      label: "网格分布",
      value: "grid"
    }, {
      label: "随机位置",
      value: "random"
    }],
    description: "心形爆发的位置模式"
  }, {
    key: "pointCount",
    name: "爆发点数量",
    type: "number",
    default: 5,
    min: 1,
    max: 12,
    step: 1,
    description: "同时存在的爆发点数量（仅对grid/random模式有效）"
  }, {
    key: "burstInterval",
    name: "爆发间隔",
    type: "number",
    default: 2500,
    min: 800,
    max: 5e3,
    step: 100,
    description: "各爆发点的平均时间间隔（毫秒）"
  }, {
    key: "intervalVariation",
    name: "间隔随机性",
    type: "number",
    default: 0.5,
    min: 0,
    max: 1,
    step: 0.1,
    description: "爆发间隔的随机变化程度（0=固定，1=完全随机）"
  }, {
    key: "heartCount",
    name: "每次数量",
    type: "number",
    default: 12,
    min: 5,
    max: 25,
    step: 5,
    description: "单次爆发产生的心形数量"
  }, {
    key: "initialSpeed",
    name: "初始速度",
    type: "number",
    default: 3,
    min: 1,
    max: 8,
    step: 0.5,
    description: "心形飞出的初始速度"
  }, {
    key: "gravity",
    name: "重力强度",
    type: "number",
    default: 0.15,
    min: 0,
    max: 0.5,
    step: 0.05,
    description: "模拟重力的下坠加速度"
  }, {
    key: "friction",
    name: "摩擦系数",
    type: "number",
    default: 0.98,
    min: 0.9,
    max: 0.99,
    step: 0.01,
    description: "速度衰减系数，越小衰减越快"
  }, {
    key: "lifeTime",
    name: "生命周期",
    type: "number",
    default: 3e3,
    min: 1500,
    max: 6e3,
    step: 250,
    description: "心形存活时间（毫秒）"
  }, {
    key: "rotationSpeed",
    name: "旋转速度",
    type: "number",
    default: 2,
    min: 0,
    max: 5,
    step: 0.5,
    description: "心形旋转速度（度/帧）"
  }, {
    key: "baseScale",
    name: "粒子大小",
    type: "number",
    default: 1,
    min: 0.5,
    max: 2,
    step: 0.1,
    description: "心形基础尺寸倍数"
  }, {
    key: "colorMode",
    name: "颜色模式",
    type: "select",
    default: "warm",
    options: [{
      label: "浪漫暖色",
      value: "warm"
    }, {
      label: "梦幻冷色",
      value: "cool"
    }, {
      label: "彩虹色",
      value: "rainbow"
    }, {
      label: "自定义",
      value: "custom"
    }],
    description: "心形颜色方案"
  }, {
    key: "customColor",
    name: "自定义颜色",
    type: "color",
    default: "#ff1493",
    description: "当颜色模式为自定义时使用"
  }],
  setup(ctx, params) {
    const burstMode = params.burstMode || "center";
    const pointCount = params.pointCount || 5;
    const burstPoints = generateBurstPoints(burstMode, ctx.width, ctx.height, pointCount);
    return {
      hearts: [],
      burstPoints,
      canvasWidth: ctx.width,
      canvasHeight: ctx.height,
      lastBurstMode: burstMode,
      lastPointCount: pointCount,
      heartPath: new Path2D(HEART_PATH_D)
    };
  },
  render(ctx, state, input, params) {
    const s = state;
    const c2d = ctx.canvas2d;
    const {
      elapsedTime,
      deltaTime
    } = input;
    const burstMode = params.burstMode || "center";
    const pointCount = params.pointCount || 5;
    const burstInterval = params.burstInterval || 2500;
    const intervalVariation = params.intervalVariation || 0.5;
    const heartCount = params.heartCount || 12;
    const initialSpeed = params.initialSpeed || 3;
    const gravity = params.gravity || 0.15;
    const friction = params.friction || 0.98;
    const lifeTime = params.lifeTime || 3e3;
    const rotationSpeed = params.rotationSpeed || 2;
    const baseScale = params.baseScale || 1;
    const colorMode = params.colorMode || "warm";
    const customColor = params.customColor || "#ff1493";
    if (s.lastBurstMode !== burstMode || s.lastPointCount !== pointCount || s.canvasWidth !== ctx.width || s.canvasHeight !== ctx.height) {
      s.burstPoints = generateBurstPoints(burstMode, ctx.width, ctx.height, pointCount);
      s.canvasWidth = ctx.width;
      s.canvasHeight = ctx.height;
      s.lastBurstMode = burstMode;
      s.lastPointCount = pointCount;
    }
    for (const pt of s.burstPoints) {
      const elapsed = elapsedTime - pt.lastBurstTime;
      const actual = burstInterval * (1 - intervalVariation + Math.random() * intervalVariation * 2);
      if (elapsed >= actual + pt.nextBurstDelay) {
        pt.lastBurstTime = elapsedTime;
        pt.nextBurstDelay = 0;
        for (let i = 0; i < heartCount; i++) {
          const angle = i / heartCount * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
          const speed = initialSpeed * (0.7 + Math.random() * 0.6);
          s.hearts.push({
            x: pt.x,
            y: pt.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            age: 0,
            maxAge: lifeTime * (0.8 + Math.random() * 0.4),
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * rotationSpeed * 2,
            baseScale: baseScale * (0.7 + Math.random() * 0.6),
            color: getColorFromScheme(colorMode, i, heartCount, customColor)
          });
        }
      }
    }
    const dt = deltaTime / 16;
    const frictionFactor = Math.pow(friction, dt);
    const gravityDelta = gravity * dt;
    let writeIdx = 0;
    for (let i = 0; i < s.hearts.length; i++) {
      const h = s.hearts[i];
      h.vy += gravityDelta;
      h.vx *= frictionFactor;
      h.vy *= frictionFactor;
      h.x += h.vx * dt;
      h.y += h.vy * dt;
      h.rotation += h.rotationSpeed * dt;
      h.age += deltaTime;
      if (h.age < h.maxAge) {
        s.hearts[writeIdx++] = h;
      }
    }
    s.hearts.length = writeIdx;
    const MAX_HEARTS = 80;
    if (s.hearts.length > MAX_HEARTS) {
      s.hearts.splice(0, s.hearts.length - MAX_HEARTS);
    }
    const DEG2RAD = Math.PI / 180;
    const TWO_PI = Math.PI * 2;
    for (let i = 0; i < s.hearts.length; i++) {
      const h = s.hearts[i];
      const lifeRatio = h.age / h.maxAge;
      const alpha = lifeRatio > 0.7 ? 1 - (lifeRatio - 0.7) / 0.3 : 1;
      const scale = h.baseScale * (1 + Math.sin(lifeRatio * TWO_PI) * 0.15);
      c2d.save();
      c2d.globalAlpha = alpha;
      c2d.translate(h.x, h.y);
      c2d.rotate(h.rotation * DEG2RAD);
      c2d.scale(scale, scale);
      c2d.fillStyle = h.color;
      c2d.fill(s.heartPath);
      c2d.restore();
    }
  },
  cleanup(_ctx, state) {
    const s = state;
    s.hearts = [];
  }
};
const AURORA_PALETTES = [{
  stroke: [0, 255, 200],
  glow: [0, 200, 160]
}, {
  stroke: [130, 0, 255],
  glow: [100, 0, 200]
}, {
  stroke: [255, 0, 150],
  glow: [200, 0, 120]
}, {
  stroke: [0, 160, 255],
  glow: [0, 120, 200]
}, {
  stroke: [255, 200, 0],
  glow: [200, 160, 0]
}, {
  stroke: [0, 255, 80],
  glow: [0, 200, 60]
}, {
  stroke: [255, 80, 0],
  glow: [200, 60, 0]
}];
function rgba(rgb, a) {
  return `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${a})`;
}
function waveY(wave, x, width, time) {
  const nx = x / width;
  const phase = nx * Math.PI * 4 + time * wave.speed + wave.phaseOffset;
  return wave.amplitude * Math.sin(phase) + wave.amplitude * wave.harmonics[0] * Math.sin(phase * 2.3 + 1.1) + wave.amplitude * wave.harmonics[1] * Math.cos(phase * 0.7 + 2.6);
}
const neonAuroraPreset = {
  id: "neon-aurora",
  name: "🌌 霓虹极光",
  icon: "🌌",
  description: "多条流动极光带，贝塞尔曲线 + 渐变发光 + 拖尾，纯时间驱动氛围动画",
  category: PresetType.ambient.value,
  mode: "imperative",
  params: [{
    key: "bandCount",
    name: "光带数量",
    type: "number",
    default: 5,
    min: 2,
    max: 7,
    step: 1
  }, {
    key: "trailDecay",
    name: "拖尾强度",
    type: "number",
    default: 0.18,
    min: 0.05,
    max: 0.5,
    step: 0.01,
    description: "越小拖尾越长，越大响应越清晰"
  }, {
    key: "glowIntensity",
    name: "发光强度",
    type: "number",
    default: 1,
    min: 0.2,
    max: 2,
    step: 0.1
  }, {
    key: "speed",
    name: "流动速度",
    type: "number",
    default: 1,
    min: 0.2,
    max: 3,
    step: 0.1
  }],
  // ── setup ──────────────────────────────────────────────────────────────────
  setup(ctx, params) {
    const bandCount = Math.round(params.bandCount ?? 5);
    const waves = Array.from({
      length: bandCount
    }, (_, i) => {
      const palette = AURORA_PALETTES[i % AURORA_PALETTES.length];
      const ySpread = 0.6;
      const yStart = 0.2;
      return {
        yRatio: yStart + ySpread / (bandCount - 1 || 1) * i,
        amplitude: 28 + Math.random() * 32,
        harmonics: [0.35 + Math.random() * 0.2, 0.18 + Math.random() * 0.12],
        phaseOffset: i / bandCount * Math.PI * 2,
        speed: 0.5 + Math.random() * 0.6,
        lineWidth: 1.5 + Math.random() * 2.5,
        rgb: palette.stroke,
        glowRgb: palette.glow
      };
    });
    const offscreen = document.createElement("canvas");
    offscreen.width = ctx.width;
    offscreen.height = ctx.height;
    const offCtx = offscreen.getContext("2d");
    offCtx.fillStyle = "#000000";
    offCtx.fillRect(0, 0, ctx.width, ctx.height);
    return {
      time: 0,
      waves,
      offscreen,
      offCtx
    };
  },
  // ── render ─────────────────────────────────────────────────────────────────
  render(ctx, state, input, params) {
    const s = state;
    const {
      width,
      height
    } = ctx;
    const c2d = ctx.canvas2d;
    const {
      offCtx,
      offscreen
    } = s;
    const trailDecay = params.trailDecay ?? 0.18;
    const glowIntensity = params.glowIntensity ?? 1;
    const speedMult = params.speed ?? 1;
    const newBandCount = Math.round(params.bandCount ?? 5);
    if (newBandCount !== s.waves.length) {
      const ySpread = 0.6;
      const yStart = 0.2;
      s.waves = Array.from({
        length: newBandCount
      }, (_, i) => {
        const palette = AURORA_PALETTES[i % AURORA_PALETTES.length];
        return {
          yRatio: yStart + ySpread / (newBandCount - 1 || 1) * i,
          amplitude: 28 + Math.random() * 32,
          harmonics: [0.35 + Math.random() * 0.2, 0.18 + Math.random() * 0.12],
          phaseOffset: i / newBandCount * Math.PI * 2,
          speed: 0.5 + Math.random() * 0.6,
          lineWidth: 1.5 + Math.random() * 2.5,
          rgb: palette.stroke,
          glowRgb: palette.glow
        };
      });
      offCtx.fillStyle = "#000000";
      offCtx.fillRect(0, 0, width, height);
    }
    s.time += input.deltaTime * 1e-3 * speedMult;
    const breathe = (Math.sin(s.time * 0.8) + 1) / 2;
    const shimmer = (Math.sin(s.time * 2.1 + 1.3) + 1) / 2;
    offCtx.fillStyle = `rgba(0,0,0,${trailDecay})`;
    offCtx.fillRect(0, 0, width, height);
    for (let wi = 0; wi < s.waves.length; wi++) {
      const wave = s.waves[wi];
      const yBase = height * wave.yRatio;
      const ampBoost = 1 + breathe * 0.5;
      const alpha = Math.min(1, 0.5 + breathe * 0.35 + shimmer * 0.15) * glowIntensity;
      const lw = wave.lineWidth * (1 + shimmer * 0.4) * glowIntensity;
      const grad = offCtx.createLinearGradient(0, 0, width, 0);
      grad.addColorStop(0, rgba(wave.rgb, 0));
      grad.addColorStop(0.1, rgba(wave.rgb, alpha * 0.7));
      grad.addColorStop(0.4, rgba(wave.rgb, alpha));
      grad.addColorStop(0.6, rgba(wave.rgb, alpha));
      grad.addColorStop(0.9, rgba(wave.rgb, alpha * 0.7));
      grad.addColorStop(1, rgba(wave.rgb, 0));
      offCtx.save();
      offCtx.shadowColor = rgba(wave.glowRgb, 0.9 * glowIntensity);
      offCtx.shadowBlur = 14 + breathe * 18;
      offCtx.strokeStyle = grad;
      offCtx.lineWidth = lw;
      offCtx.lineCap = "round";
      offCtx.lineJoin = "round";
      const STEPS = 80;
      offCtx.beginPath();
      let prevX = 0;
      let prevY = yBase + waveY(wave, 0, width, s.time) * ampBoost;
      offCtx.moveTo(prevX, prevY);
      for (let s_ = 1; s_ <= STEPS; s_++) {
        const cx_ = s_ / STEPS * width;
        const cy_ = yBase + waveY(wave, cx_, width, s.time) * ampBoost;
        const mx = (prevX + cx_) / 2;
        const my = (prevY + cy_) / 2;
        offCtx.quadraticCurveTo(prevX, prevY, mx, my);
        prevX = cx_;
        prevY = cy_;
      }
      offCtx.lineTo(width, prevY);
      offCtx.stroke();
      offCtx.restore();
      offCtx.save();
      offCtx.strokeStyle = rgba([255, 255, 255], alpha * 0.35);
      offCtx.lineWidth = Math.max(0.5, lw * 0.25);
      offCtx.shadowBlur = 0;
      offCtx.beginPath();
      prevX = 0;
      prevY = yBase + waveY(wave, 0, width, s.time) * ampBoost;
      offCtx.moveTo(prevX, prevY);
      for (let s_ = 1; s_ <= STEPS; s_++) {
        const cx_ = s_ / STEPS * width;
        const cy_ = yBase + waveY(wave, cx_, width, s.time) * ampBoost;
        const mx = (prevX + cx_) / 2;
        const my = (prevY + cy_) / 2;
        offCtx.quadraticCurveTo(prevX, prevY, mx, my);
        prevX = cx_;
        prevY = cy_;
      }
      offCtx.lineTo(width, prevY);
      offCtx.stroke();
      offCtx.restore();
    }
    const edgeMask = offCtx.createLinearGradient(0, 0, 0, height);
    edgeMask.addColorStop(0, "rgba(0,0,0,0.7)");
    edgeMask.addColorStop(0.15, "rgba(0,0,0,0)");
    edgeMask.addColorStop(0.85, "rgba(0,0,0,0)");
    edgeMask.addColorStop(1, "rgba(0,0,0,0.7)");
    offCtx.fillStyle = edgeMask;
    offCtx.fillRect(0, 0, width, height);
    c2d.drawImage(offscreen, 0, 0);
  },
  // ── cleanup ────────────────────────────────────────────────────────────────
  cleanup(_ctx, state) {
    const s = state;
    s.waves = [];
  }
};
function hexToHsl$1(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return [h * 360, s * 100, l * 100];
}
function getFlowAngle(x, y, time, comp) {
  const nx = x * 2e-3 * comp;
  const ny = y * 2e-3 * comp;
  const t = time * 0.4;
  const a = Math.sin(nx + t) + Math.cos(ny - t * 0.8);
  const b = Math.sin(nx * 1.5 - ny * 0.5 + t * 1.2);
  const c = Math.cos(ny * 2 + nx * 0.8 - t * 0.5);
  return (a + b + c) * Math.PI;
}
function createParticle(width, height) {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    prevX: 0,
    prevY: 0,
    vx: 0,
    vy: 0,
    age: 0,
    lifespan: Math.random() * 150 + 100,
    hueOffset: (Math.random() - 0.5) * 40,
    size: Math.random() * 1.2 + 0.5
  };
}
const magneticFlowPreset = {
  id: "magnetic-flow",
  name: "🌪️ 能量磁场",
  icon: "🌪️",
  description: "大量光点受磁场引力交织，如星云流沙般变幻莫测",
  category: PresetType.ambient.value,
  mode: "imperative",
  requires: {
    audio: false
  },
  params: [{
    key: "particleCount",
    name: "粒子数量",
    type: "number",
    default: 200,
    min: 50,
    max: 300,
    step: 10
  }, {
    key: "speed",
    name: "流动速度",
    type: "number",
    default: 1,
    min: 0.2,
    max: 3,
    step: 0.1
  }, {
    key: "complexity",
    name: "磁场复杂度",
    type: "number",
    default: 1.2,
    min: 0.5,
    max: 3,
    step: 0.1
  }, {
    key: "trailDecay",
    name: "拖尾长度",
    type: "number",
    default: 0.1,
    min: 0.01,
    max: 0.3,
    step: 0.01
  }, {
    key: "primaryColor",
    name: "主色调",
    type: "color",
    default: "#00f5d4"
  }, {
    key: "autoHue",
    name: "色彩流转",
    type: "boolean",
    default: true
  }],
  // ── setup ──────────────────────────────────────────────────────────────────
  setup(ctx, params) {
    const offscreen = document.createElement("canvas");
    offscreen.width = ctx.width;
    offscreen.height = ctx.height;
    const offCtx = offscreen.getContext("2d");
    offCtx.fillStyle = "#000000";
    offCtx.fillRect(0, 0, ctx.width, ctx.height);
    const targetCount = Math.round(params.particleCount ?? 200);
    const particles = Array.from({
      length: targetCount
    }, () => createParticle(ctx.width, ctx.height));
    return {
      time: 0,
      particles,
      currentCount: targetCount,
      offscreen,
      offCtx,
      lastColor: "",
      baseHsl: [170, 100, 48]
      // #00f5d4 默认值的近似 HSL
    };
  },
  // ── render ─────────────────────────────────────────────────────────────────
  render(ctx, state, input, params) {
    const s = state;
    const dt = input.deltaTime * 1e-3;
    const speed = params.speed ?? 1;
    const complexity = params.complexity ?? 1.2;
    const trailDecay = params.trailDecay ?? 0.05;
    const primaryColor = params.primaryColor ?? "#00f5d4";
    const autoHue = params.autoHue ?? true;
    const targetCount = Math.round(params.particleCount ?? 200);
    const c2d = ctx.canvas2d;
    const {
      offscreen,
      offCtx
    } = s;
    s.time += dt * speed;
    if (s.lastColor !== primaryColor) {
      s.baseHsl = hexToHsl$1(primaryColor);
      s.lastColor = primaryColor;
    }
    if (s.currentCount !== targetCount) {
      if (s.particles.length < targetCount) {
        const toAdd = targetCount - s.particles.length;
        for (let i = 0; i < toAdd; i++) {
          s.particles.push(createParticle(ctx.width, ctx.height));
        }
      } else if (s.particles.length > targetCount) {
        s.particles.splice(targetCount);
      }
      s.currentCount = targetCount;
    }
    offCtx.globalCompositeOperation = "source-over";
    offCtx.fillStyle = `rgba(0, 0, 0, ${trailDecay})`;
    offCtx.fillRect(0, 0, ctx.width, ctx.height);
    offCtx.globalCompositeOperation = "lighter";
    const baseH = s.baseHsl[0] + (autoHue ? s.time * 25 : 0);
    const baseS = s.baseHsl[1];
    const baseL = s.baseHsl[2];
    for (const p of s.particles) {
      p.age += 1;
      if (p.age > p.lifespan) {
        Object.assign(p, createParticle(ctx.width, ctx.height));
        continue;
      }
      p.prevX = p.x;
      p.prevY = p.y;
      const angle = getFlowAngle(p.x, p.y, s.time, complexity);
      const targetVx = Math.cos(angle) * 3 * speed;
      const targetVy = Math.sin(angle) * 3 * speed;
      p.vx += (targetVx - p.vx) * 0.08;
      p.vy += (targetVy - p.vy) * 0.08;
      p.x += p.vx;
      p.y += p.vy;
      let wrapped = false;
      if (p.x < 0) {
        p.x = ctx.width;
        wrapped = true;
      } else if (p.x > ctx.width) {
        p.x = 0;
        wrapped = true;
      }
      if (p.y < 0) {
        p.y = ctx.height;
        wrapped = true;
      } else if (p.y > ctx.height) {
        p.y = 0;
        wrapped = true;
      }
      if (!wrapped) {
        const finalHue = (baseH + p.hueOffset) % 360;
        offCtx.lineCap = "round";
        offCtx.beginPath();
        offCtx.moveTo(p.prevX, p.prevY);
        offCtx.lineTo(p.x, p.y);
        offCtx.lineWidth = p.size * 3.5;
        offCtx.strokeStyle = `hsla(${finalHue}, ${baseS}%, ${baseL}%, 0.15)`;
        offCtx.stroke();
        offCtx.beginPath();
        offCtx.moveTo(p.prevX, p.prevY);
        offCtx.lineTo(p.x, p.y);
        offCtx.lineWidth = p.size * 0.8;
        offCtx.strokeStyle = `hsla(${finalHue}, ${baseS}%, ${Math.min(100, baseL + 25)}%, 0.9)`;
        offCtx.stroke();
      }
    }
    offCtx.globalCompositeOperation = "source-over";
    c2d.clearRect(0, 0, ctx.width, ctx.height);
    c2d.filter = "contrast(115%)";
    c2d.drawImage(offscreen, 0, 0);
    c2d.filter = "none";
  },
  // ── cleanup ────────────────────────────────────────────────────────────────
  cleanup(_ctx, state) {
    const s = state;
    s.particles = [];
  }
};
function hexToHsl(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return [h * 360, s * 100, l * 100];
}
function hslToRgb(h, s, l) {
  s /= 100;
  l /= 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
}
function drawLightning(ctx2d, sx, sy, ex, ey, intensity, rgb) {
  const steps = 5;
  const maxJitter = intensity * 40;
  const alpha = Math.min(1, intensity + 0.2);
  ctx2d.beginPath();
  ctx2d.moveTo(sx, sy);
  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    const tx = sx + (ex - sx) * t;
    const ty = sy + (ey - sy) * t;
    if (i === steps) {
      ctx2d.lineTo(tx, ty);
    } else {
      const dx = ex - sx;
      const dy = ey - sy;
      const len = Math.sqrt(dx * dx + dy * dy) || 1;
      const nx = -dy / len;
      const ny = dx / len;
      const jitterMult = Math.sin(t * Math.PI);
      const jitter = (Math.random() - 0.5) * maxJitter * jitterMult;
      ctx2d.lineTo(tx + nx * jitter, ty + ny * jitter);
    }
  }
  ctx2d.lineWidth = 4 + intensity * 2;
  ctx2d.strokeStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${alpha * 0.3})`;
  ctx2d.stroke();
  ctx2d.lineWidth = 1.5;
  ctx2d.strokeStyle = `rgba(255,255,255,${alpha * 0.8})`;
  ctx2d.stroke();
}
const plasmaLightningPreset = {
  id: "plasma-lightning",
  name: "⚡ 等离子闪电",
  icon: "⚡",
  description: "中央核心随低频脉冲，并向四周劈裂出音频驱动的绚丽等离子闪电",
  category: PresetType.spectrum.value,
  mode: "imperative",
  requires: {
    audio: true
  },
  params: [{
    key: "sensitivity",
    name: "灵敏度",
    type: "number",
    default: 1.2,
    min: 0.5,
    max: 3,
    step: 0.1
  }, {
    key: "lightningCount",
    name: "频段数量",
    type: "number",
    default: 48,
    min: 16,
    max: 128,
    step: 8
  }, {
    key: "coreRadius",
    name: "核心半径",
    type: "number",
    default: 80,
    min: 30,
    max: 150,
    step: 5
  }, {
    key: "primaryColor",
    name: "闪电主色",
    type: "color",
    default: "#7b2cbf"
  }, {
    key: "autoHue",
    name: "色彩流转",
    type: "boolean",
    default: true
  }],
  // ── setup ──────────────────────────────────────────────────────────────────
  setup(ctx, params) {
    const binCount = Math.round(params.lightningCount ?? 48);
    const smoothed = new Float32Array(binCount);
    const offscreen = document.createElement("canvas");
    offscreen.width = ctx.width;
    offscreen.height = ctx.height;
    const offCtx = offscreen.getContext("2d");
    offCtx.fillStyle = "#000000";
    offCtx.fillRect(0, 0, ctx.width, ctx.height);
    return {
      smoothed,
      currentBinCount: binCount,
      smoothBass: 0,
      offscreen,
      offCtx,
      time: 0,
      lastColor: "",
      baseHsl: [270, 67, 45]
      // #7b2cbf 默认主色的近似 HSL
    };
  },
  // ── render ─────────────────────────────────────────────────────────────────
  render(ctx, state, input, params) {
    const {
      audio
    } = input;
    if (!audio) return;
    const s = state;
    const c2d = ctx.canvas2d;
    const {
      offscreen,
      offCtx
    } = s;
    const sensitivity = params.sensitivity ?? 1.2;
    const targetBinCount = Math.round(params.lightningCount ?? 48);
    const baseRadius = params.coreRadius ?? 80;
    const primaryColor = params.primaryColor ?? "#7b2cbf";
    const autoHue = params.autoHue ?? true;
    s.time += input.deltaTime * 1e-3;
    if (s.lastColor !== primaryColor) {
      s.baseHsl = hexToHsl(primaryColor);
      s.lastColor = primaryColor;
    }
    if (s.currentBinCount !== targetBinCount) {
      s.smoothed = new Float32Array(targetBinCount);
      s.currentBinCount = targetBinCount;
    }
    const currentHue = (s.baseHsl[0] + (autoHue ? s.time * 20 : 0)) % 360;
    const baseS = s.baseHsl[1];
    const baseL = s.baseHsl[2];
    const rgb = hslToRgb(currentHue, baseS, baseL);
    const cx = ctx.width / 2;
    const cy = ctx.height / 2;
    s.smoothBass += (audio.bass * sensitivity - s.smoothBass) * 0.25;
    const overallEnergy = (audio.bass + audio.mid + audio.treble) / 3;
    const decayAlpha = overallEnergy < 0.1 ? 0.5 : 0.15;
    offCtx.globalCompositeOperation = "source-over";
    offCtx.fillStyle = `rgba(0,0,0,${decayAlpha})`;
    offCtx.fillRect(0, 0, ctx.width, ctx.height);
    offCtx.globalCompositeOperation = "lighter";
    offCtx.lineCap = "round";
    offCtx.lineJoin = "miter";
    const corePulse = baseRadius + s.smoothBass * 40;
    offCtx.beginPath();
    offCtx.arc(cx, cy, corePulse, 0, Math.PI * 2);
    offCtx.lineWidth = 3 + s.smoothBass * 4;
    offCtx.strokeStyle = `hsla(${currentHue}, ${baseS}%, ${baseL}%, ${0.6 + s.smoothBass * 0.4})`;
    offCtx.stroke();
    offCtx.beginPath();
    offCtx.arc(cx, cy, corePulse * 0.6, 0, Math.PI * 2);
    offCtx.lineWidth = 1.5;
    offCtx.strokeStyle = `hsla(${(currentHue + 25) % 360}, ${baseS}%, ${Math.min(100, baseL + 18)}%, ${0.22 + s.smoothBass * 0.28})`;
    offCtx.stroke();
    const innerR = corePulse * 0.54;
    const innerEnergy = Math.min(1.2, (audio.bass * 0.9 + audio.mid * 0.5) * sensitivity);
    const innerAlpha = Math.min(0.5, 0.12 + innerEnergy * 0.22);
    const innerGrad = offCtx.createRadialGradient(cx, cy, innerR * 0.08, cx, cy, innerR);
    innerGrad.addColorStop(0, `hsla(${(currentHue + 210) % 360}, ${Math.min(100, baseS + 10)}%, ${Math.max(0, baseL - 10)}%, ${innerAlpha * 0.35})`);
    innerGrad.addColorStop(0.55, `hsla(${(currentHue + 10) % 360}, ${Math.min(100, baseS + 12)}%, ${Math.min(100, baseL + 10)}%, ${innerAlpha})`);
    innerGrad.addColorStop(1, `hsla(${(currentHue + 20) % 360}, ${baseS}%, ${Math.min(100, baseL + 6)}%, 0)`);
    offCtx.beginPath();
    offCtx.arc(cx, cy, innerR, 0, Math.PI * 2);
    offCtx.fillStyle = innerGrad;
    offCtx.fill();
    const innerSegments = 28;
    const innerSpin = s.time * (1.6 + s.smoothBass * 2.2);
    for (let k = 0; k < innerSegments; k++) {
      const t = k / innerSegments;
      const a = t * Math.PI * 2 + innerSpin;
      const wobble = Math.sin(s.time * 2.4 + k * 1.7) * 0.12 + Math.sin(s.time * 3.3 + k * 0.9) * 0.06;
      const r = innerR * (0.28 + 0.55 * (0.5 + 0.5 * Math.sin(s.time * 1.1 + k * 0.65)) + wobble);
      const arc = 0.06 + innerEnergy * 0.1;
      const alpha = Math.min(0.42, 0.06 + innerEnergy * 0.22) * (0.6 + 0.4 * Math.sin(k * 3.2 + s.time * 1.4));
      if (alpha <= 0.02) continue;
      offCtx.beginPath();
      offCtx.arc(cx, cy, r, a - arc, a + arc);
      offCtx.lineWidth = 0.7 + innerEnergy * 1.6;
      offCtx.strokeStyle = `hsla(${(currentHue + 55 + k * 2.2) % 360}, ${Math.min(100, baseS + 10)}%, ${Math.min(100, baseL + 14)}%, ${alpha})`;
      offCtx.stroke();
    }
    const midInner = corePulse * 0.62;
    const midOuter = corePulse * 0.98;
    if (midOuter > midInner + 2) {
      const midAlpha = Math.min(0.36, 0.1 + s.smoothBass * 0.32);
      const midGrad = offCtx.createRadialGradient(cx, cy, midInner, cx, cy, midOuter);
      midGrad.addColorStop(0, `hsla(${(currentHue + 10) % 360}, ${Math.min(100, baseS + 6)}%, ${Math.min(100, baseL + 18)}%, 0)`);
      midGrad.addColorStop(0.5, `hsla(${(currentHue + 6) % 360}, ${Math.min(100, baseS + 10)}%, ${Math.min(100, baseL + 14)}%, ${midAlpha})`);
      midGrad.addColorStop(1, `hsla(${(currentHue + 2) % 360}, ${baseS}%, ${Math.min(100, baseL + 10)}%, 0)`);
      offCtx.beginPath();
      offCtx.arc(cx, cy, midOuter, 0, Math.PI * 2);
      offCtx.arc(cx, cy, midInner, 0, Math.PI * 2, true);
      offCtx.fillStyle = midGrad;
      offCtx.fill();
      const ringR = (midInner + midOuter) * 0.5;
      const ringW = Math.max(1, (midOuter - midInner) * 0.5);
      const segments = 72;
      const spin = s.time * (0.9 + s.smoothBass * 1.2);
      for (let j = 0; j < segments; j++) {
        const idx = Math.floor(j / segments * audio.binCount);
        const raw = (audio.frequencyData[idx] ?? 0) / 255 * sensitivity;
        const val = Math.min(1.2, raw);
        if (val < 0.08) continue;
        const baseAngle = j / segments * Math.PI * 2 + spin;
        const arcLen = 0.04 + val * 0.18;
        const innerJitter = (Math.sin(s.time * 2.2 + j * 1.35) * 0.28 + Math.sin(s.time * 3.7 + j * 2.1) * 0.12) * ringW;
        const r = ringR + innerJitter;
        offCtx.beginPath();
        offCtx.arc(cx, cy, r, baseAngle - arcLen, baseAngle + arcLen);
        offCtx.lineWidth = 0.8 + val * 2.2;
        offCtx.strokeStyle = `hsla(${(currentHue + 34 + j * 0.8) % 360}, ${Math.min(100, baseS + 10)}%, ${Math.min(100, baseL + 18)}%, ${Math.min(0.45, 0.08 + val * 0.32)})`;
        offCtx.stroke();
      }
    }
    for (let i = 0; i < targetBinCount; i++) {
      const idx = Math.floor(i / targetBinCount * audio.binCount);
      const raw = (audio.frequencyData[idx] ?? 0) / 255 * sensitivity;
      s.smoothed[i] += (raw - s.smoothed[i]) * 0.25;
      const val = s.smoothed[i];
      if (val > 0.15) {
        const angle = i / targetBinCount * Math.PI * 2 + input.elapsedTime * 2e-4;
        const startX = cx + Math.cos(angle) * corePulse;
        const startY = cy + Math.sin(angle) * corePulse;
        const lightningLength = val * (ctx.height * 0.45);
        const endX = startX + Math.cos(angle) * lightningLength;
        const endY = startY + Math.sin(angle) * lightningLength;
        drawLightning(offCtx, startX, startY, endX, endY, val, rgb);
      }
    }
    offCtx.globalCompositeOperation = "source-over";
    const edgeMask = offCtx.createRadialGradient(cx, cy, ctx.height * 0.3, cx, cy, ctx.height * 0.7);
    edgeMask.addColorStop(0, "rgba(0,0,0,0)");
    edgeMask.addColorStop(1, "rgba(0,0,0,0.55)");
    offCtx.fillStyle = edgeMask;
    offCtx.fillRect(0, 0, ctx.width, ctx.height);
    c2d.drawImage(offscreen, 0, 0);
  },
  // ── cleanup ────────────────────────────────────────────────────────────────
  cleanup(_ctx, state) {
    const s = state;
    s.smoothed = new Float32Array(0);
  }
};
const imperativePresets = [
  // 频谱类
  // peakDropPreset,
  rainbowSpectrumPreset,
  // pulseRingPreset,
  // waveformLinesPreset,
  polygonWaveformPreset,
  plasmaLightningPreset,
  // mountainWaveformPreset,
  // // 节奏类
  // bassImpactPreset,
  // breathingLightPreset,
  // circularWavePreset,
  // 氛围类
  rainbowSweepPreset,
  heartBurstPreset,
  neonAuroraPreset,
  magneticFlowPreset,
  // pulseParticles,
  // starryTwinklePreset,
  // particleFlowPreset
  // 屏幕/摄像头映射类
  screenAmbiencePreset,
  cameraAmbiencePreset
];
const allMusicPresets = imperativePresets;
const AI_PRESET_PROMPT = `根据文档帮我生成一个灯光素材，要求如下：xxx`;
function MaterialLibrary({
  statusBar
} = {}) {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    materials,
    attributeMaterial,
    deleteMaterial,
    exportMaterial,
    importMaterial,
    duplicateMaterial
  } = useMaterialStore();
  const {
    userPresets,
    loadUserStoredPresets,
    importPresetFromCode,
    editUserPreset,
    removeUserPreset,
    duplicateUserPreset,
    getStoredRecord,
    validateUserPreset,
    uploadUserPreset,
    patchStoredPresetBackGround
  } = useUserImperativePresetsStore();
  const {
    networkPresets
  } = useNetworkImperativePresetsStore();
  const [typeFilter, setTypeFilter] = reactExports.useState("all");
  const [sourceTab, setSourceTab] = reactExports.useState("my");
  const [isBatchMode, setIsBatchMode] = reactExports.useState(false);
  const [selectedMaterialIds, setSelectedMaterialIds] = reactExports.useState(/* @__PURE__ */ new Set());
  const [attributeDialogOpen, setAttributeDialogOpen] = reactExports.useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = reactExports.useState(false);
  const [importDialogOpen, setImportDialogOpen] = reactExports.useState(false);
  const [selectedMaterial, setSelectedMaterial] = reactExports.useState(null);
  const [deletingUserPreset, setDeletingUserPreset] = reactExports.useState(null);
  const [newName, setNewName] = reactExports.useState("");
  const [importJson, setImportJson] = reactExports.useState("");
  const [importMaterialName, setImportMaterialName] = reactExports.useState("");
  const [importMode, setImportMode] = reactExports.useState("imperative");
  const [importImperativeCode, setImportImperativeCode] = reactExports.useState("");
  const [importBackgroundFile, setImportBackgroundFile] = reactExports.useState(null);
  const [importBackgroundObjectUrl, setImportBackgroundObjectUrl] = reactExports.useState("");
  const [importBackgroundRemoteUrl, setImportBackgroundRemoteUrl] = reactExports.useState("");
  const [editingPresetId, setEditingPresetId] = reactExports.useState(null);
  const [promptCopied, setPromptCopied] = reactExports.useState(false);
  const [feedbackDialogOpen, setFeedbackDialogOpen] = reactExports.useState(false);
  const [feedbackTypesList, setFeedbackTypesList] = reactExports.useState([]);
  const [feedbackTypesLoading, setFeedbackTypesLoading] = reactExports.useState(false);
  const [feedbackSubmitting, setFeedbackSubmitting] = reactExports.useState(false);
  const [feedbackType, setFeedbackType] = reactExports.useState(null);
  const [feedbackText, setFeedbackText] = reactExports.useState("");
  const [feedbackImageSlots, setFeedbackImageSlots] = reactExports.useState(() => Array.from({
    length: FEEDBACK_MAX_IMAGES
  }, () => null));
  const [feedbackImagePreviewUrls, setFeedbackImagePreviewUrls] = reactExports.useState(() => Array.from({
    length: FEEDBACK_MAX_IMAGES
  }, () => null));
  const [previewNavigateLoading, setPreviewNavigateLoading] = reactExports.useState(false);
  const isLogin = useUserStore((s) => s.isLogin);
  reactExports.useEffect(() => {
    if (location.pathname.endsWith("/light-sync/preview")) {
      setPreviewNavigateLoading(false);
    }
  }, [location.pathname]);
  const navigateToPreview = reactExports.useCallback((opts) => {
    reactDomExports.flushSync(() => setPreviewNavigateLoading(true));
    requestAnimationFrame(() => {
      navigate("/light-sync/preview", opts);
    });
  }, [navigate]);
  const [authorizedDevices, setAuthorizedDevices] = reactExports.useState([]);
  const [selectedDeviceIds, setSelectedDeviceIds] = reactExports.useState([]);
  const authorizedDevicesRef = reactExports.useRef([]);
  const userId = useUserStore((s_0) => s_0.userInfo.id);
  const fetchMaterialsState = useUserStore((s_1) => s_1.fetchMaterials);
  const fetchOfficialMaterialsState = useUserStore((s_2) => s_2.fetchOfficialMaterials);
  const fetchNetWorkMaterialsState = useUserStore((s_3) => s_3.fetchNetWorkMaterials);
  reactExports.useEffect(() => {
    if (!importBackgroundFile) {
      setImportBackgroundObjectUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return "";
      });
      return;
    }
    const url = URL.createObjectURL(importBackgroundFile);
    setImportBackgroundObjectUrl((prev_0) => {
      if (prev_0) URL.revokeObjectURL(prev_0);
      return url;
    });
    return () => {
      URL.revokeObjectURL(url);
    };
  }, [importBackgroundFile]);
  const importBackgroundBeforeUpload = reactExports.useCallback((file) => {
    if (!isLogin) {
      toast.error("请先登录");
      return false;
    }
    const f = file;
    const check = validateImageUploadFile(f);
    if (!check.ok) {
      toast.error(check.message);
      return false;
    }
    setImportBackgroundRemoteUrl("");
    setImportBackgroundFile(f);
    return false;
  }, [isLogin]);
  const [myPageParams, setMyPageParams] = reactExports.useState({
    current: 1,
    size: 50
  });
  const [myTotal, setMyTotal] = reactExports.useState(0);
  const [ownerFilter, setOwnerFilter] = reactExports.useState("mine");
  const previewListKind = sourceTab === "network" ? "network" : ownerFilter;
  const [networkPageParams, setNetworkPageParams] = reactExports.useState({
    current: 1,
    size: 50
  });
  const [networkTotal, setNetworkTotal] = reactExports.useState(0);
  const [networkSortType, setNetworkSortType] = reactExports.useState(NetworkMaterialSortType.latest);
  const [userMaterialListFilters, setUserMaterialListFilters] = reactExports.useState({
    category: void 0,
    isFromNet: void 0
  });
  reactExports.useEffect(() => {
    authorizedDevicesRef.current = authorizedDevices;
  }, [authorizedDevices]);
  reactExports.useEffect(() => {
    const fetchFeedBackTypes = async () => {
      if (!feedbackDialogOpen) return;
      if (feedbackTypesList.length > 0) {
        setFeedbackType(feedbackTypesList[0]?.id ?? null);
        return;
      }
      setFeedbackTypesLoading(true);
      try {
        const list = await getFeedBackTypes();
        setFeedbackTypesList(list ?? []);
        setFeedbackType(list?.[0]?.id ?? null);
      } catch (error) {
        toast.error("获取反馈类型失败", {
          description: error instanceof Error ? error.message : "未知错误"
        });
        setFeedbackTypesList([]);
      } finally {
        setFeedbackTypesLoading(false);
      }
    };
    fetchFeedBackTypes();
  }, [feedbackDialogOpen]);
  reactExports.useEffect(() => {
    const urls = feedbackImageSlots.map((f_0) => f_0 ? URL.createObjectURL(f_0) : null);
    setFeedbackImagePreviewUrls(urls);
    return () => {
      urls.forEach((u) => {
        if (u) URL.revokeObjectURL(u);
      });
    };
  }, [feedbackImageSlots]);
  const refreshAuthorizedDevices = reactExports.useCallback(async () => {
    try {
      await useElectronDeviceRegistryStore.getState().loadDeviceList();
      const matchesDevice = useElectronDeviceRegistryStore.getState().matchesDevice;
      let allDevices = [];
      if (isElectronEnvironment()) {
        allDevices = await NodeHIDAdapter.getAuthorizedDevices();
      } else {
        allDevices = await WebHIDDevice.getAuthorizedDevices();
      }
      setAuthorizedDevices(allDevices.filter(matchesDevice));
    } catch (error_0) {
      console.error("刷新设备列表失败:", error_0);
      setAuthorizedDevices([]);
    }
  }, []);
  reactExports.useEffect(() => {
    refreshAuthorizedDevices();
    const handleDeviceChange = () => {
      refreshAuthorizedDevices();
    };
    if (isElectronEnvironment()) {
      NodeHIDAdapter.onDeviceConnect(handleDeviceChange);
      NodeHIDAdapter.onDeviceDisconnect(handleDeviceChange);
      return () => {
        NodeHIDAdapter.removeDeviceConnectListener(handleDeviceChange);
        NodeHIDAdapter.removeDeviceDisconnectListener(handleDeviceChange);
      };
    } else {
      WebHIDDevice.onDeviceConnect(handleDeviceChange);
      WebHIDDevice.onDeviceDisconnect(handleDeviceChange);
      return () => {
        WebHIDDevice.removeDeviceConnectListener(handleDeviceChange);
        WebHIDDevice.removeDeviceDisconnectListener(handleDeviceChange);
      };
    }
  }, [refreshAuthorizedDevices]);
  reactExports.useEffect(() => {
    setUserMaterialListFilters({
      ...userMaterialListFilters,
      category: getValueByLabel(typeFilter) ?? void 0
    });
  }, [typeFilter]);
  reactExports.useEffect(() => {
    const validIndices = new Set(authorizedDevices.map((_, index) => index.toString()));
    const validSelectedIds = selectedDeviceIds.filter((id) => validIndices.has(id));
    if (validSelectedIds.length !== selectedDeviceIds.length) {
      setSelectedDeviceIds(validSelectedIds);
    }
  }, [authorizedDevices, selectedDeviceIds]);
  const fetchMaterials = async () => {
    if (!isLogin) return;
    try {
      const total = await fetchMaterialsState(userId ?? "", myPageParams, userMaterialListFilters);
      setMyTotal(total ?? 0);
    } catch (error_1) {
      loadUserStoredPresets();
      console.error("获取用户素材失败:", error_1);
    }
  };
  const fetchOfficialMaterials = async () => {
    try {
      const total_0 = await fetchOfficialMaterialsState(userId ?? "", myPageParams, {
        category: userMaterialListFilters.category,
        status: userMaterialListFilters.status
      });
      setMyTotal(total_0 ?? 0);
    } catch (error_2) {
      console.error("获取官方素材失败:", error_2);
    }
  };
  const fetchNetWorkMaterials = async () => {
    const total_1 = await fetchNetWorkMaterialsState(networkPageParams, {}, networkSortType);
    setNetworkTotal(total_1 ?? 0);
  };
  const isMyOfficial = sourceTab === "my" && ownerFilter === "official";
  reactActivationExports.useActivate(() => {
    if (ownerFilter === "official") {
      void fetchOfficialMaterials();
    } else {
      void fetchMaterials();
    }
  });
  reactExports.useEffect(() => {
    if (sourceTab === "my") {
      if (ownerFilter === "official") {
        void fetchOfficialMaterials();
      } else {
        void fetchMaterials();
      }
    }
    if (sourceTab === "network") {
      void fetchNetWorkMaterials();
    }
  }, [isLogin, userId, sourceTab, ownerFilter, typeFilter, myPageParams, userMaterialListFilters, networkPageParams, networkSortType]);
  const getFilteredMyMaterials = () => {
    const allMyMaterials = [...userPresets, ...materials];
    return allMyMaterials;
  };
  const getFilteredNetworkMaterials = () => {
    const allNetworkMaterials = [
      ...networkPresets
      // 网络素材预设
    ];
    return allNetworkMaterials;
  };
  const filteredMaterials = reactExports.useMemo(() => {
    if (sourceTab === "network" || ownerFilter === "official") {
      return getFilteredNetworkMaterials();
    }
    return getFilteredMyMaterials();
  }, [sourceTab, ownerFilter, typeFilter, materials, userPresets, networkPresets]);
  const toggleBatchMode = reactExports.useCallback(() => {
    setIsBatchMode((prev_1) => {
      if (prev_1) {
        setSelectedMaterialIds(/* @__PURE__ */ new Set());
      } else {
        if (sourceTab === "network" || ownerFilter === "official") {
          toast.error("官方与网络素材暂不支持批量管理");
          return false;
        }
      }
      return !prev_1;
    });
  }, [sourceTab, ownerFilter]);
  const toggleMaterialSelection = reactExports.useCallback((id_0) => {
    setSelectedMaterialIds((prev_2) => {
      const next = new Set(prev_2);
      if (next.has(id_0)) {
        next.delete(id_0);
      } else {
        next.add(id_0);
      }
      return next;
    });
  }, []);
  const isSystemBuiltinPreset = reactExports.useCallback((id_1) => {
    return allMusicPresets.some((p_0) => p_0.id === id_1) || MATERIAL_PRESETS.some((p) => p.id === id_1);
  }, []);
  const selectAllMaterials = reactExports.useCallback(() => {
    const userMaterialsOnly = filteredMaterials.filter((item) => !isSystemBuiltinPreset(item.id));
    const allIds = new Set(userMaterialsOnly.map((m) => m.id));
    setSelectedMaterialIds(allIds);
  }, [filteredMaterials, isSystemBuiltinPreset]);
  const clearSelection = reactExports.useCallback(() => {
    setSelectedMaterialIds(/* @__PURE__ */ new Set());
  }, []);
  const handleBatchDelete = reactExports.useCallback(() => {
    if (selectedMaterialIds.size === 0) return;
    setDeleteDialogOpen(true);
  }, [selectedMaterialIds]);
  const confirmBatchDelete = async () => {
    if (selectedMaterialIds.size > 0) {
      const idsArray = Array.from(selectedMaterialIds);
      const userPresetIds = idsArray.filter((id_2) => userPresets.some((p_1) => p_1.id === id_2));
      const materialIds = idsArray.filter((id_3) => !userPresets.some((p_2) => p_2.id === id_3));
      if (materialIds.length > 0) {
        await deleteMaterial(materialIds);
      }
      if (userPresetIds.length > 0) {
        await removeUserPreset(userPresetIds);
      }
      setSelectedMaterialIds(/* @__PURE__ */ new Set());
      setDeleteDialogOpen(false);
      const remainingDeletable = materials.length - materialIds.length + (userPresets.length - userPresetIds.length);
      if (remainingDeletable === 0) {
        setIsBatchMode(false);
      }
      return true;
    }
    return false;
  };
  reactExports.useEffect(() => {
    if ((sourceTab === "network" || ownerFilter === "official") && isBatchMode) {
      setIsBatchMode(false);
      setSelectedMaterialIds(/* @__PURE__ */ new Set());
    }
  }, [sourceTab, ownerFilter, isBatchMode]);
  reactExports.useEffect(() => {
    if (selectedMaterialIds.size > 0) {
      const validIds = new Set(filteredMaterials.map((m_0) => m_0.id));
      const validSelectedIds_0 = Array.from(selectedMaterialIds).filter((id_4) => validIds.has(id_4));
      if (validSelectedIds_0.length !== selectedMaterialIds.size) {
        setSelectedMaterialIds(new Set(validSelectedIds_0));
      }
    }
  }, [typeFilter, filteredMaterials, selectedMaterialIds]);
  reactExports.useEffect(() => {
    if (isBatchMode && filteredMaterials.length === 0) {
      setIsBatchMode(false);
      setSelectedMaterialIds(/* @__PURE__ */ new Set());
    }
  }, [isBatchMode, filteredMaterials.length]);
  const handleMaterialClick = (material) => {
    navigateToPreview({
      state: {
        materialId: material.id,
        source: "material",
        scope: "user",
        listKind: previewListKind
      }
    });
  };
  const handlePresetClick = (preset) => {
    navigateToPreview({
      state: {
        presetId: preset.id,
        source: "preset",
        scope: "user",
        listKind: previewListKind
      }
    });
  };
  const handleNetworkPresetClick = (preset_0) => {
    navigateToPreview({
      state: {
        presetId: preset_0.id,
        source: "preset",
        scope: "network",
        listKind: previewListKind
      }
    });
  };
  const handleNetworkMaterialClick = (material_0) => {
    navigateToPreview({
      state: {
        materialId: material_0.id,
        source: "material",
        scope: "network",
        listKind: previewListKind
      }
    });
  };
  const handleEditMaterial = (material_1) => {
    navigate("/light-sync/editor", {
      state: {
        materialId: material_1.id,
        action: "edit"
      }
    });
  };
  const handleCopyMaterial = async (material_2) => {
    const newMaterial = await duplicateMaterial(material_2.id);
    fetchMaterials();
    if (newMaterial) {
      toast.success(`已复制素材 "${newMaterial.name}"`);
    } else {
      toast.error("复制失败");
    }
  };
  const handleEditUserPreset = (preset_1) => {
    const record = getStoredRecord(preset_1.id);
    if (record) {
      setEditingPresetId(preset_1.id);
      setImportImperativeCode(record.code);
      setImportBackgroundFile(null);
      setImportBackgroundRemoteUrl(record.backGround?.trim() ?? "");
      setImportMode("imperative");
      setImportDialogOpen(true);
    } else {
      toast.error("未找到预设代码记录");
    }
  };
  const handleCopyUserPreset = async (preset_2) => {
    const newPreset = await duplicateUserPreset(preset_2.id ?? "");
    fetchMaterials();
    if (newPreset) {
      toast.success(`已复制预设 "${newPreset.name}"`);
    } else {
      toast.error("复制失败");
    }
  };
  const handleUploadUserPreset = async (preset_3) => {
    try {
      await uploadUserPreset(preset_3);
      toast.success(`已上传预设 "${preset_3.name}",预计需要1-2个工作日审核,详情请前往个人中心查看`);
      fetchMaterials();
    } catch (error_3) {
      toast.error(error_3 instanceof Error ? error_3.message : "上传失败");
    }
  };
  const handleCreateEffect = () => {
    if (!isLogin) {
      toast.error("请先登录");
      return;
    }
    navigate("/light-sync/editor");
  };
  const openAttributeDialog = (material_3) => {
    setSelectedMaterial(material_3);
    setNewName(material_3.name);
    setAttributeDialogOpen(true);
  };
  const handleAttribute = async () => {
    if (selectedMaterial) {
      try {
        attributeMaterial(selectedMaterial.id, newName.trim());
        await handleSetMaterialBackground(selectedMaterial);
        void fetchMaterials();
        toast.success("修改属性成功");
      } catch (error_4) {
        toast.error("修改属性失败");
      }
      setAttributeDialogOpen(false);
      setSelectedMaterial(null);
    }
  };
  const openDeleteDialog = (material_4) => {
    setSelectedMaterial(material_4);
    setSelectedMaterialIds(/* @__PURE__ */ new Set([material_4.id]));
    setDeleteDialogOpen(true);
  };
  const handleDelete = async () => {
    try {
      const isSuccess = await confirmBatchDelete();
      if (isSuccess) {
        await fetchMaterials();
        toast.success("删除素材成功");
      }
    } catch (error_5) {
      toast.error("删除素材失败", {
        description: error_5 instanceof Error ? error_5.message : "未知错误"
      });
    } finally {
      setDeletingUserPreset(null);
      setDeleteDialogOpen(false);
      setSelectedMaterialIds(/* @__PURE__ */ new Set());
      setSelectedMaterial(null);
    }
  };
  const handleExport = (material_5) => {
    const json = exportMaterial(material_5.id);
    if (json) {
      const blob = new Blob([json], {
        type: "application/json"
      });
      const url_0 = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url_0;
      a.download = `${material_5.name.replace(/\s+/g, "_")}.json`;
      a.click();
      URL.revokeObjectURL(url_0);
    }
  };
  const handleImport = () => {
    if (!isLogin) {
      toast.error("请先登录");
      return;
    }
    setEditingPresetId(null);
    setImportJson("");
    setImportMaterialName("");
    setImportImperativeCode("");
    setImportBackgroundFile(null);
    setImportBackgroundRemoteUrl("");
    setImportMode("imperative");
    setImportDialogOpen(true);
  };
  const {
    run: handleImportImperativeConfirm
  } = useDebounceFn(async () => {
    if (!importImperativeCode.trim()) {
      toast.error("请输入预设代码");
      return;
    }
    try {
      const isValidate = await validateUserPreset(importImperativeCode);
      if (!isValidate) {
        toast.error("素材无效");
        return;
      }
    } catch (error_6) {
      toast.error("未知错误", {
        description: error_6 instanceof Error ? error_6.message : "未知错误"
      });
      return;
    }
    const isEditing = !!editingPresetId;
    let result = null;
    if (isEditing) {
      result = await editUserPreset(importImperativeCode, editingPresetId, importBackgroundFile?.toString() ?? "");
      if ("error" in result) {
        toast.error("保存失败", {
          description: result.error
        });
        return;
      }
    } else {
      result = await importPresetFromCode(importImperativeCode, userId ?? "");
      if ("error" in result) {
        toast.error(isEditing ? "保存失败" : "导入失败", {
          description: result.error
        });
        return;
      }
    }
    const {
      preset: preset_4
    } = result;
    await handleSetMaterialBackground(preset_4);
    setImportDialogOpen(false);
    setImportImperativeCode("");
    setImportBackgroundFile(null);
    setImportBackgroundRemoteUrl("");
    setEditingPresetId(null);
    if (isEditing) {
      void fetchMaterials();
      toast.success(`预设 "${preset_4.name}" 已保存`);
    } else {
      toast.success(`命令式预设 "${preset_4.name}" 导入成功`);
      navigateToPreview({
        state: {
          presetId: preset_4.id,
          source: "preset",
          scope: "user"
        }
      });
    }
  }, {
    wait: 300
  });
  const handleSetMaterialBackground = async (preset_5) => {
    if (importBackgroundFile && preset_5.id) {
      try {
        const formData = new FormData();
        formData.append("file", importBackgroundFile);
        const uploadedUrl = await updateMaterialBackGround(String(preset_5.id), formData);
        if (uploadedUrl && typeof uploadedUrl === "string") {
          patchStoredPresetBackGround(String(preset_5.id), uploadedUrl);
        }
      } catch (e) {
        console.error(e);
        toast.error("素材已保存，但背景图上传失败，可稍后重新编辑本素材再选图上传");
      }
    }
  };
  const handleImportConfirm = () => {
    if (!importJson.trim()) {
      toast.error("请输入 JSON 内容");
      return;
    }
    try {
      const data = JSON.parse(importJson);
      if (!data.name || typeof data.name !== "string") {
        toast.error("导入失败：缺少 name 字段");
        return;
      }
      if (!data.objects || !Array.isArray(data.objects)) {
        toast.error("导入失败：缺少 objects 字段");
        return;
      }
      if (!data.timeline || typeof data.timeline !== "object") {
        toast.error("导入失败：缺少 timeline 字段");
        return;
      }
      const finalName = importMaterialName.trim() || data.name;
      const modifiedData = {
        ...data,
        name: finalName
      };
      const imported = importMaterial(JSON.stringify(modifiedData));
      if (imported) {
        setImportDialogOpen(false);
        setImportJson("");
        setImportMaterialName("");
        setSourceTab("my");
        navigateToPreview({
          state: {
            materialId: imported.id,
            source: "material",
            scope: "user"
          }
        });
      } else {
        toast.error("导入失败");
      }
    } catch (error_7) {
      const errorMsg = error_7 instanceof Error ? error_7.message : "未知错误";
      toast.error("导入失败：JSON 格式错误", {
        description: errorMsg
      });
    }
  };
  reactExports.useEffect(() => {
    if (importJson.trim() && !importMaterialName) {
      try {
        const data_0 = JSON.parse(importJson);
        if (data_0.name && typeof data_0.name === "string") {
          setImportMaterialName(data_0.name);
        }
      } catch {
      }
    }
  }, [importJson, importMaterialName]);
  const isMusicPreset = (item_0) => {
    return "mode" in item_0;
  };
  const isUserImportedPreset = reactExports.useCallback((id_5) => userPresets.some((p_3) => p_3.id === id_5), [userPresets]);
  const openDeleteUserPresetDialog = (preset_6) => {
    setDeletingUserPreset(preset_6);
    setSelectedMaterialIds(/* @__PURE__ */ new Set([preset_6.id]));
    setDeleteDialogOpen(true);
  };
  const handleFeedback = async () => {
    if (!feedbackText.trim()) {
      toast.error("请先填写反馈内容");
      return;
    }
    if (feedbackType == null) {
      toast.error("请选择反馈类型");
      return;
    }
    setFeedbackSubmitting(true);
    try {
      const formData_0 = buildSubmitFeedBackFormData({
        type: feedbackType,
        feedBack: feedbackText.trim(),
        files: feedbackImageSlots
      });
      const success = await submitFeedBack(userId ?? "", formData_0);
      if (success) {
        const typeLabel = feedbackTypesList.find((t) => t.id === feedbackType)?.name ?? "其他";
        toast.success(`感谢您的反馈（${typeLabel}），我们会尽快处理`);
        setFeedbackText("");
        setFeedbackImageSlots(Array.from({
          length: FEEDBACK_MAX_IMAGES
        }, () => null));
        setFeedbackDialogOpen(false);
      } else {
        toast.error("提交失败，请稍后重试");
      }
    } catch {
      toast.error("提交失败，请稍后重试");
    } finally {
      setFeedbackSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between shrink-0 border-b border-border/30 dark:border-border/15 bg-card/20 dark:bg-card/30 backdrop-blur-sm px-4 py-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs, { value: sourceTab, onValueChange: (v) => setSourceTab(v), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "dark:bg-muted/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "my", className: "gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "size-3.5" }),
          "我的素材"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "network", className: "gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Cloud, { className: "size-3.5" }),
          "网络素材"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-3", children: [
        statusBar && !isBatchMode && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MultiSelect, { options: statusBar.deviceOptions, onValueChange: statusBar.onDeviceSelectionChange, defaultValue: statusBar.selectedDeviceIds, placeholder: "选择设备", searchable: false, maxCount: 2, className: "min-w-[160px] max-w-[280px]" }),
            !statusBar.isElectronEnv && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: statusBar.onConnectDevice, disabled: statusBar.isConnecting, variant: "outline", size: "sm", className: "gap-1.5 shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "size-3.5" }),
              statusBar.isConnecting ? "连接中..." : "添加设备"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 w-px bg-border/60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 rounded-full bg-green-500/10 border border-green-500/20 px-2.5 py-1 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-1.5 rounded-full bg-green-500 animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-green-500", children: "灯效运行中" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-green-500/70", children: [
                "· ",
                statusBar.deviceCount,
                " 个设备"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: statusBar.onReturnToPreview, className: "gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "size-3.5" }),
              statusBar.hasLastPlaying ? "继续预览" : "返回预览"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 w-px bg-border/60" })
        ] }),
        !isBatchMode && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", className: "gap-1.5", onClick: () => {
          if (!isLogin) {
            toast.error("请先登录");
            return;
          }
          setFeedbackText("");
          setFeedbackDialogOpen(true);
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "size-3.5" }),
          "意见＆反馈"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          isBatchMode && sourceTab === "my" && !isMyOfficial && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mr-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked: filteredMaterials.length > 0 && selectedMaterialIds.size === filteredMaterials.filter((item_1) => !isSystemBuiltinPreset(item_1.id)).length, onCheckedChange: (checked) => {
                if (checked) {
                  selectAllMaterials();
                } else {
                  clearSelection();
                }
              } }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
                "已选 ",
                selectedMaterialIds.size,
                " /",
                " ",
                filteredMaterials.filter((item_2) => !isSystemBuiltinPreset(item_2.id)).length
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: selectAllMaterials, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCheck, { className: "size-3.5" }),
              "全选"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "destructive", size: "sm", onClick: handleBatchDelete, disabled: selectedMaterialIds.size === 0, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "size-3.5" }),
              "删除 (",
              selectedMaterialIds.size,
              ")"
            ] })
          ] }),
          sourceTab === "my" && !isMyOfficial && filteredMaterials.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            isBatchMode && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "sm", className: "cursor-pointer gap-1.5", onClick: toggleBatchMode, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-3.5" }),
              "取消"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: isBatchMode ? "default" : "outline", size: "sm", className: "cursor-pointer gap-1.5", onClick: toggleBatchMode, children: isBatchMode ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5" }),
              "完成"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Settings2, { className: "size-3.5" }),
              "批量管理"
            ] }) })
          ] }),
          !isBatchMode && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ElectricBorder, { color: "#B19EEF", speed: 1, chaos: 0.05, borderRadius: 10, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "cursor-pointer gap-1.5 border-[rgba(177,158,239,0.45)] bg-[rgba(177,158,239,0.12)] text-[rgb(140,116,220)] shadow-[0_6px_18px_rgba(98,76,164,0.12)] hover:bg-[rgba(177,158,239,0.18)] hover:text-[rgb(116,90,202)] dark:bg-[rgba(177,158,239,0.14)]", onClick: handleImport, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "size-3.5" }),
              "导入AI素材"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "cursor-pointer gap-1.5 bg-linear-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400", onClick: handleCreateEffect, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "size-3.5" }),
              "创建素材"
            ] })
          ] })
        ] })
      ] })
    ] }),
    sourceTab === "my" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 border-b border-border/30 dark:border-border/15 bg-muted/15 dark:bg-muted/10 px-2 py-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-x-3 gap-y-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "size-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-muted-foreground", children: "来源：" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 gap-1 rounded-lg border border-border/40 dark:border-border/20 bg-background/50 dark:bg-background/30 p-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
            setOwnerFilter("official");
            setMyPageParams((prev_3) => ({
              ...prev_3,
              current: 1
            }));
            if (isBatchMode) {
              setIsBatchMode(false);
              setSelectedMaterialIds(/* @__PURE__ */ new Set());
            }
          }, className: cn("shrink-0 whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-medium transition-all duration-200", ownerFilter === "official" ? "bg-primary text-primary-foreground shadow-sm dark:shadow-[0_0_8px_var(--glow-primary)]" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"), children: "官方" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
            setOwnerFilter("mine");
            setMyPageParams((prev_4) => ({
              ...prev_4,
              current: 1
            }));
          }, className: cn("shrink-0 whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-medium transition-all duration-200", ownerFilter === "mine" ? "bg-primary text-primary-foreground shadow-sm dark:shadow-[0_0_8px_var(--glow-primary)]" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"), children: "我的" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 flex-wrap items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-xs font-medium text-muted-foreground", children: "类型：" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1 rounded-lg border border-border/40 dark:border-border/20 bg-background/50 dark:bg-background/30 p-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
            setTypeFilter("all");
            setMyPageParams((prev_5) => ({
              ...prev_5,
              current: 1
            }));
          }, className: cn("shrink-0 whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-medium transition-all duration-200", typeFilter === "all" ? "bg-primary text-primary-foreground shadow-sm dark:shadow-[0_0_8px_var(--glow-primary)]" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"), children: "全部" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => {
            setTypeFilter("spectrum");
            setMyPageParams((prev_6) => ({
              ...prev_6,
              current: 1
            }));
          }, className: cn("flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-medium transition-all duration-200", typeFilter === PresetType.spectrum.label ? "bg-purple-500/20 text-purple-400 dark:shadow-[0_0_8px_oklch(0.65_0.28_290/0.3)]" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Music, { className: "size-3.5" }),
            "音乐律动"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => {
            setTypeFilter("screen");
            setMyPageParams((prev_7) => ({
              ...prev_7,
              current: 1
            }));
          }, className: cn("flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-medium transition-all duration-200", typeFilter === PresetType.screen.label ? "bg-emerald-500/20 text-emerald-400 dark:shadow-[0_0_8px_oklch(0.72_0.17_155/0.3)]" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Monitor, { className: "size-3.5" }),
            "屏幕映射"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => {
            setTypeFilter("ambient");
            setMyPageParams((prev_8) => ({
              ...prev_8,
              current: 1
            }));
          }, className: cn("flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-medium transition-all duration-200", typeFilter === PresetType.ambient.label ? "bg-cyan-500/20 text-cyan-400 dark:shadow-[0_0_8px_var(--glow-brand)]" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-3.5" }),
            "动态效果"
          ] })
        ] })
      ] })
    ] }) }),
    sourceTab === "network" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 border-b border-border/50 bg-muted/20 px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "size-4 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-muted-foreground", children: "排序：" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 rounded-lg border border-border/50 bg-background/50 p-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: cn("rounded-md px-3 py-1.5 text-xs font-medium transition-colors", networkSortType === NetworkMaterialSortType.latest ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"), onClick: () => {
          setNetworkSortType(NetworkMaterialSortType.latest);
          setNetworkPageParams({
            current: 1,
            size: 50
          });
        }, children: "最新" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: cn("rounded-md px-3 py-1.5 text-xs font-medium transition-colors", networkSortType === NetworkMaterialSortType.hot ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"), onClick: () => {
          setNetworkSortType(NetworkMaterialSortType.hot);
          setNetworkPageParams({
            current: 1,
            size: 50
          });
        }, children: "最热" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: cn("rounded-md px-3 py-1.5 text-xs font-medium transition-colors", networkSortType === NetworkMaterialSortType.recommend ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"), onClick: () => {
          setNetworkSortType(NetworkMaterialSortType.recommend);
          setNetworkPageParams({
            current: 1,
            size: 50
          });
        }, children: "推荐" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: cn("min-h-0 flex-1 overflow-y-auto p-4"), children: sourceTab === "my" ? (
      // 我的素材 / 官方目录
      filteredMaterials.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-20 text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "size-12 opacity-30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm", children: isMyOfficial ? "暂无官方素材" : "暂无素材" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4", children: filteredMaterials.map((item_3) => {
        const isMusicPresetItem = isMusicPreset(item_3);
        const isSystemPreset = isSystemBuiltinPreset(item_3.id);
        const isUserPreset = isUserImportedPreset(item_3.id);
        if (isMyOfficial) {
          return isMusicPresetItem ? /* @__PURE__ */ jsxRuntimeExports.jsx(MaterialCard, { preset: item_3, isPreset: isSystemPreset, isSelected: selectedMaterialIds.has(item_3.id), isBatchMode: false, isNetwork: true, onClick: () => handleNetworkPresetClick(item_3) }, item_3.id) : /* @__PURE__ */ jsxRuntimeExports.jsx(MaterialCard, { material: item_3, isPreset: isSystemPreset, isSelected: selectedMaterialIds.has(item_3.id), isBatchMode: false, isNetwork: true, onClick: () => handleNetworkMaterialClick(item_3) }, item_3.id);
        }
        return isMusicPresetItem ? /* @__PURE__ */ jsxRuntimeExports.jsx(MaterialCard, { preset: item_3, isPreset: isSystemPreset, isSelected: selectedMaterialIds.has(item_3.id), isBatchMode, onClick: () => handlePresetClick(item_3), onSelect: isUserPreset ? () => toggleMaterialSelection(item_3.id) : void 0, onEdit: isUserPreset ? () => handleEditUserPreset(item_3) : void 0, onCopy: isUserPreset ? () => handleCopyUserPreset(item_3) : void 0, onUpload: isUserPreset && isLogin && !item_3.isFromNet && !item_3.isUpload ? () => handleUploadUserPreset(item_3) : void 0, onDelete: isUserPreset ? () => openDeleteUserPresetDialog(item_3) : void 0 }, item_3.id) : /* @__PURE__ */ jsxRuntimeExports.jsx(MaterialCard, { material: item_3, isPreset: isSystemPreset, isSelected: selectedMaterialIds.has(item_3.id), isBatchMode, onClick: () => handleMaterialClick(item_3), onSelect: () => toggleMaterialSelection(item_3.id), onEdit: !isSystemPreset ? () => handleEditMaterial(item_3) : void 0, onCopy: !isSystemPreset ? () => handleCopyMaterial(item_3) : void 0, onAttribute: !isSystemPreset ? () => openAttributeDialog(item_3) : void 0, onExport: !isSystemPreset ? () => handleExport(item_3) : void 0, onDelete: !isSystemPreset ? () => openDeleteDialog(item_3) : void 0 }, item_3.id);
      }) })
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4", children: filteredMaterials.map((item_4) => {
      const isMusicPresetItem_0 = isMusicPreset(item_4);
      const isSystemPreset_0 = isSystemBuiltinPreset(item_4.id);
      return isMusicPresetItem_0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(MaterialCard, { preset: item_4, isPreset: isSystemPreset_0, isSelected: selectedMaterialIds.has(item_4.id), isBatchMode, isNetwork: true, onClick: () => handleNetworkPresetClick(item_4) }, item_4.id) : /* @__PURE__ */ jsxRuntimeExports.jsx(MaterialCard, { material: item_4, isPreset: isSystemPreset_0, isSelected: selectedMaterialIds.has(item_4.id), isBatchMode, isNetwork: true, onClick: () => handleNetworkMaterialClick(item_4) }, item_4.id);
    }) }) }),
    sourceTab === "my" && isLogin && /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationBar, { className: "shrink-0", total: myTotal, current: myPageParams.current, pageSize: myPageParams.size, onCurrentChange: (current) => setMyPageParams((prev_9) => ({
      ...prev_9,
      current
    })), onPageSizeChange: (size) => setMyPageParams((prev_10) => ({
      ...prev_10,
      current: 1,
      size
    })) }),
    sourceTab === "network" && /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationBar, { className: "shrink-0", total: networkTotal, current: networkPageParams.current, pageSize: networkPageParams.size, onCurrentChange: (current_0) => setNetworkPageParams((prev_11) => ({
      ...prev_11,
      current: current_0
    })), onPageSizeChange: (size_0) => setNetworkPageParams((prev_12) => ({
      ...prev_12,
      current: 1,
      size: size_0
    })) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: attributeDialogOpen, onOpenChange: setAttributeDialogOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: "重命名素材" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { children: "为素材输入新的名称" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: newName, onChange: (e_0) => setNewName(e_0.target.value), placeholder: "请输入素材名称", onKeyDown: (e_1) => e_1.key === "Enter" && handleAttribute() }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ImportPresetBackgroundField, { isLogin, objectUrl: importBackgroundObjectUrl, remoteUrl: importBackgroundRemoteUrl, hasLocalFile: importBackgroundFile != null, beforeUpload: importBackgroundBeforeUpload, onClear: () => {
        setImportBackgroundFile(null);
        setImportBackgroundRemoteUrl("");
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { children: "取消" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { onClick: handleAttribute, disabled: !newName.trim(), children: "确认" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: deleteDialogOpen, onOpenChange: (open) => {
      setDeleteDialogOpen(open);
      if (!open) {
        setSelectedMaterial(null);
        setDeletingUserPreset(null);
      }
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { size: "sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: deletingUserPreset ? "删除命令式预设" : "删除素材" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { children: deletingUserPreset ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          '确定要删除预设 "',
          deletingUserPreset.name,
          '" 吗？此操作无法撤销。'
        ] }) : selectedMaterial ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          '确定要删除素材 "',
          selectedMaterial.name,
          '" 吗？此操作无法撤销。'
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "确定要删除 ",
          selectedMaterialIds.size,
          " 个素材吗？此操作无法撤销。"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { children: "取消" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { onClick: handleDelete, variant: "destructive", children: "删除" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: importDialogOpen, onOpenChange: (open_0) => {
      setImportDialogOpen(open_0);
      if (!open_0) {
        setEditingPresetId(null);
        setImportBackgroundFile(null);
        setImportBackgroundRemoteUrl("");
      }
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-2xl overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: editingPresetId ? "编辑预设" : "导入素材" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: editingPresetId ? "修改预设代码后保存" : "选择导入类型后粘贴对应代码" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 rounded-lg border border-border/50 bg-muted/30 p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setImportMode("imperative"), className: cn("flex flex-1 items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors", importMode === "imperative" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "size-4" }),
        "AI 素材"
      ] }) }),
      importMode === "json" ? (
        /* ── 静态素材 JSON 导入 ── */
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "material-json", children: "JSON 代码" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "material-json", value: importJson, onChange: (e_2) => setImportJson(e_2.target.value), placeholder: `粘贴素材 JSON 代码，例如：
{
  "name": "我的素材",
  "objects": [
    {
      "id": "obj_1",
      "type": "rect",
      "name": "矩形",
      "data": {}
    }
  ],
  "timeline": {
    "duration": 1000,
    "keyframes": {}
  }
}`, className: "h-56 resize-none overflow-x-auto overflow-y-auto whitespace-pre font-mono text-xs" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "material-name", children: "素材名称" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "material-name", value: importMaterialName, onChange: (e_3) => setImportMaterialName(e_3.target.value), placeholder: "默认使用 JSON 中的 name 字段", className: "font-sans" })
          ] })
        ] })
      ) : (
        /* ── 命令式预设 JS 导入 ── */
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 rounded-lg border border-cyan-500/20 bg-cyan-500/5 p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "mt-0.5 size-4 shrink-0 text-cyan-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold", children: "用 AI 一键生成专属灯光预设" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-0.5 text-xs leading-relaxed font-bold", children: [
                "下载",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => window.electron.ipcRenderer.invoke("docs:open-canvas2d-guide"), className: "inline-flex items-center gap-0.5 text-cyan-400 underline-offset-2 hover:text-cyan-300 hover:underline", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "size-3" }),
                  "预设生成指南"
                ] }),
                " ",
                "发给 AI，再",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: async () => {
                  try {
                    await navigator.clipboard.writeText(AI_PRESET_PROMPT);
                    setPromptCopied(true);
                    setTimeout(() => setPromptCopied(false), 2e3);
                  } catch {
                    const el = document.createElement("textarea");
                    el.value = AI_PRESET_PROMPT;
                    document.body.appendChild(el);
                    el.select();
                    document.execCommand("copy");
                    document.body.removeChild(el);
                    setPromptCopied(true);
                    setTimeout(() => setPromptCopied(false), 2e3);
                  }
                }, className: "inline-flex items-center gap-0.5 text-purple-400 underline-offset-2 hover:text-purple-300 hover:underline", children: [
                  promptCopied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "size-3" }),
                  promptCopied ? "已复制！" : "复制提示词"
                ] }),
                " ",
                "告诉它你想要的效果，比如粒子流光、彩虹波浪、霓虹闪烁……将生成的代码粘贴到下方即可导入。"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "preset-code", children: "预设代码" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "preset-code", value: importImperativeCode, onChange: (e_4) => setImportImperativeCode(e_4.target.value), placeholder: `{
  id: 'my-custom-preset',
  name: '🎨 旋转发光方块',
  icon: '🎨',
  description: '用 Canvas 2D 绘制旋转发光方块',
  category: 'ambient',
  mode: 'imperative',
  canvas2d: true,
  setup(ctx, params) {
    return { time: 0 }
  },
  render(ctx, state, input, params) {
    const c2d = ctx.canvas2d
    state.time += input.deltaTime * 0.001
    c2d.save()
    c2d.translate(ctx.width / 2, ctx.height / 2)
    c2d.rotate(state.time)
    c2d.shadowColor = '#00f5d4'
    c2d.shadowBlur = 20
    c2d.fillStyle = '#00f5d4'
    c2d.fillRect(-50, -50, 100, 100)
    c2d.restore()
  },
  cleanup(ctx, state) { }
}`, className: "h-64 w-[462px] overflow-auto font-mono text-xs" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ImportPresetBackgroundField, { isLogin, objectUrl: importBackgroundObjectUrl, remoteUrl: importBackgroundRemoteUrl, hasLocalFile: importBackgroundFile != null, beforeUpload: importBackgroundBeforeUpload, onClear: () => {
            setImportBackgroundFile(null);
            setImportBackgroundRemoteUrl("");
          } })
        ] })
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setImportDialogOpen(false), children: "取消" }),
        importMode === "json" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleImportConfirm, disabled: !importJson.trim(), children: "导入素材" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleImportImperativeConfirm, disabled: !importImperativeCode.trim(), className: "bg-linear-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400", children: editingPresetId ? "保存" : "导入预设" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: feedbackDialogOpen, onOpenChange: (open_1) => {
      setFeedbackDialogOpen(open_1);
      if (!open_1) {
        setFeedbackImageSlots(Array.from({
          length: FEEDBACK_MAX_IMAGES
        }, () => null));
      }
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "意见与反馈" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "请选择反馈类型并描述您遇到的问题或建议，我们会认真阅读并持续改进产品。" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "反馈类型" }),
          feedbackTypesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "加载类型中..." }) : feedbackTypesList.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "暂无反馈类型" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 rounded-lg border border-border/50 bg-muted/20 p-1.5", children: feedbackTypesList.map((item_5) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setFeedbackType(item_5.id), className: cn("rounded-md px-3 py-2 text-sm font-medium transition-colors", feedbackType === item_5.id ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"), children: item_5.name }, item_5.id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "feedback-content", children: "反馈内容" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "feedback-content", value: feedbackText, onChange: (e_5) => setFeedbackText(e_5.target.value), placeholder: "请输入您的意见或反馈...", className: "min-h-[120px] resize-y", maxLength: 100 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-right text-xs text-muted-foreground", children: [
            feedbackText.length,
            " / 100"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
            "附图（选填，最多 ",
            FEEDBACK_MAX_IMAGES,
            " 张）"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "支持 JPG/PNG，单张不超过 2MB。" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: Array.from({
            length: FEEDBACK_MAX_IMAGES
          }, (__0, slotIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx(Upload$1, { showUploadList: false, accept: IMAGE_UPLOAD_ACCEPT, disabled: feedbackSubmitting, beforeUpload: (file_0) => {
            const f_1 = file_0;
            const r = validateImageUploadFile(f_1);
            if (!r.ok) {
              toast.error(r.message);
              return false;
            }
            setFeedbackImageSlots((prev_13) => {
              const next_0 = [...prev_13];
              next_0[slotIndex] = f_1;
              return next_0;
            });
            return false;
          }, className: cn("[&_.ant-upload]:m-0 [&_.ant-upload-select]:m-0 [&_.ant-upload]:h-full [&_.ant-upload]:w-full", "[&_.ant-upload]:border-0 [&_.ant-upload]:bg-transparent p-0"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("group relative flex h-20 w-20 cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-dashed border-border/80 bg-muted/30", !feedbackSubmitting && "hover:border-cyan-500/40 hover:bg-muted/50", feedbackSubmitting && "pointer-events-none opacity-50"), children: feedbackImagePreviewUrls[slotIndex] ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: feedbackImagePreviewUrls[slotIndex], alt: `反馈附图 ${slotIndex + 1}`, className: "size-full object-cover" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "absolute right-0.5 top-0.5 flex size-5 items-center justify-center rounded-full bg-background/90 text-foreground shadow-sm hover:bg-destructive/90 hover:text-destructive-foreground", "aria-label": "移除图片", onClick: (e_6) => {
              e_6.stopPropagation();
              e_6.preventDefault();
              setFeedbackImageSlots((prev_14) => {
                const next_1 = [...prev_14];
                next_1[slotIndex] = null;
                return next_1;
              });
            }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-3" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/25", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-background/80 px-1.5 py-0.5 text-[9px] text-foreground opacity-0 transition-opacity group-hover:opacity-100", children: "更换" }) })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-0.5 p-1 text-center text-[10px] text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "size-5 opacity-60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "图",
              slotIndex + 1
            ] })
          ] }) }) }, slotIndex)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setFeedbackDialogOpen(false), children: "取消" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: async () => {
          await handleFeedback();
        }, disabled: !feedbackText.trim() || feedbackType == null || feedbackSubmitting, className: "bg-linear-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400", children: feedbackSubmitting ? "提交中..." : "提交" })
      ] })
    ] }) }),
    previewNavigateLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-auto fixed inset-0 z-100 flex items-center justify-center bg-background/70 backdrop-blur-sm", "aria-busy": "true", "aria-label": "正在打开预览", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-40 w-full max-w-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CyberRouteLoading, {}) }) }) : null
  ] });
}
export {
  MaterialLibrary,
  MaterialLibrary as default
};
