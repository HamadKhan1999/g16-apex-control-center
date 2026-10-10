import { r as reactExports, k as compilerRuntimeExports, j as jsxRuntimeExports } from "./vendor-react-CCnVVUMc.js";
import { c as createLucideIcon, c0 as useKeyboardStore, dC as CUSTOM_KEY_TYPE_BYTE, dD as CUSTOM_KEY_HIGH_BYTE, dG as isFnLayerTargetLocked, e0 as commitLayerKeyRectWrite, F as cn, dL as AppWindow, c_ as FolderOpen, Y as TooltipContent, X as TooltipTrigger, Z as Tooltip, B as Button, T as Trash2, d5 as Card, a2 as toast, j as Popover, l as PopoverTrigger, aY as Search, eF as ChevronsUpDown, m as PopoverContent, bp as Command, bl as CommandInput, bo as CommandList, bm as CommandEmpty, bi as CommandGroup, bj as CommandItem, N as Check, H as Input, as as Tabs, at as TabsList, au as TabsTrigger, a5 as Upload, d4 as TabsContent, I as Image$1, cN as CircleAlert, b$ as useActiveProductId, dz as useLiveQuery, eG as CUSTOM_KEY_MAX_SLOT, eH as updateCustomKey, eI as createCustomKey, eJ as deleteCustomKey, a8 as X, aX as Select, aT as SelectTrigger, aU as SelectValue, aV as SelectContent, aW as SelectItem, eq as Empty, em as EmptyHeader, en as EmptyMedia, eo as EmptyTitle, ep as EmptyDescription, er as EmptyContent, aA as AlertDialog, aB as AlertDialogContent, aC as AlertDialogHeader, aD as AlertDialogTitle, aE as AlertDialogDescription, aF as AlertDialogFooter, aG as AlertDialogCancel, aH as AlertDialogAction, dc as db } from "./index-CMbUujkZ.js";
import { P as Pencil } from "./pencil-DOp3mKSR.js";
import { e as Drawer, d as DrawerContent, c as DrawerHeader, a as DrawerTitle, b as DrawerDescription, f as DrawerFooter, S as SearchX } from "./drawer-Beh3aN8X.js";
import { P as Plus } from "./plus-BBBiVizr.js";
const __iconNode$1 = [
  ["path", { d: "M12 13v8", key: "1l5pq0" }],
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "m8 17 4-4 4 4", key: "1quai1" }]
];
const CloudUpload = createLucideIcon("cloud-upload", __iconNode$1);
const __iconNode = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
const Link = createLucideIcon("link", __iconNode);
function collectLayerViews(api) {
  return [{
    layer: "default",
    current: api.currentKeyRect,
    defaultRect: api.defaultKeyRect
  }, {
    layer: "fn",
    current: api.currentFnKeyRect,
    defaultRect: api.defaultFnKeyRect,
    fnDefaultRect: api.defaultFnKeyRect
  }, {
    layer: "mac",
    current: api.macCurrentKeyRect,
    defaultRect: api.macDefaultKeyRect
  }, {
    layer: "macFn",
    current: api.macCurrentFnKeyRect,
    defaultRect: api.macFnDefaultKeyRect,
    fnDefaultRect: api.macFnDefaultKeyRect
  }];
}
function patchRectForCustomSlot(view, slot, fnLockList) {
  const next = [...view.current];
  const len = Math.min(next.length, view.defaultRect.length);
  let changed = false;
  for (let i = 0; i + 2 < len; i += 3) {
    if (next[i] !== CUSTOM_KEY_TYPE_BYTE) continue;
    if (next[i + 2] !== CUSTOM_KEY_HIGH_BYTE) continue;
    if (next[i + 1] !== slot) continue;
    if ((view.layer === "fn" || view.layer === "macFn") && view.fnDefaultRect) {
      if (isFnLayerTargetLocked(view.layer, i, view.current, view.fnDefaultRect, fnLockList)) {
        continue;
      }
    }
    next[i] = view.defaultRect[i];
    next[i + 1] = view.defaultRect[i + 1];
    next[i + 2] = view.defaultRect[i + 2];
    changed = true;
  }
  return {
    next,
    changed
  };
}
async function restoreCustomKeySlotBindingsToDefault(slot) {
  const api = useKeyboardStore.getState();
  const views = collectLayerViews(api);
  let anyChanged = false;
  for (const view of views) {
    const {
      next,
      changed
    } = patchRectForCustomSlot(view, slot, api.fnLockList);
    if (!changed) continue;
    try {
      const ok = await commitLayerKeyRectWrite(view.layer, next, api);
      if (ok) anyChanged = true;
    } catch {
    }
  }
  return anyChanged;
}
const ICON_MODE_WIDTH_THRESHOLD = 320;
function CustomKeyCardBase(t0) {
  const $ = compilerRuntimeExports.c(70);
  const {
    item,
    onEdit,
    onDelete,
    index: t1
  } = t0;
  const index = t1 === void 0 ? 0 : t1;
  const isUrl = item.type === "url";
  const TypeIcon = isUrl ? Link : AppWindow;
  const TargetIcon = isUrl ? Link : FolderOpen;
  const targetAriaLabel = isUrl ? "查看 URL" : "查看应用路径";
  const animationDelay = `${Math.min(index, 11) * 25}ms`;
  const [autoIconMode, setAutoIconMode] = reactExports.useState(false);
  const isIconMode = item.coverMode === "icon" || item.coverMode == null && autoIconMode;
  let t2;
  if ($[0] !== item.coverMode) {
    t2 = (e) => {
      if (item.coverMode != null) {
        return;
      }
      const w = e.currentTarget.naturalWidth;
      if (w > 0 && w < ICON_MODE_WIDTH_THRESHOLD) {
        setAutoIconMode(true);
      }
    };
    $[0] = item.coverMode;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  const handleImgLoad = t2;
  let t3;
  if ($[2] !== item || $[3] !== onEdit) {
    t3 = (e_0) => {
      if (e_0.target !== e_0.currentTarget) {
        return;
      }
      if (e_0.key === "Enter" || e_0.key === " ") {
        e_0.preventDefault();
        onEdit(item);
      }
    };
    $[2] = item;
    $[3] = onEdit;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  const handleFigureKeyDown = t3;
  let t4;
  if ($[5] !== animationDelay) {
    t4 = {
      animationDelay
    };
    $[5] = animationDelay;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  const t5 = item.name;
  let t6;
  if ($[7] !== item || $[8] !== onEdit) {
    t6 = () => onEdit(item);
    $[7] = item;
    $[8] = onEdit;
    $[9] = t6;
  } else {
    t6 = $[9];
  }
  let t7;
  if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
    t7 = cn("press-scale relative aspect-square gap-0 overflow-hidden rounded-2xl border border-white/70 bg-white/62 p-0 py-0 shadow-[0_8px_18px_oklch(0.42_0.08_265/0.07),inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-xl", "transition-[transform,box-shadow,border-color] duration-200", "dark:border-white/10 dark:bg-[oklch(0.17_0.035_270/0.72)] dark:cyber-scanlines", "group-hover:border-primary/60 group-hover:shadow-[0_10px_20px_oklch(0.42_0.08_265/0.1),0_0_10px_var(--glow-primary)]", "group-focus-visible:border-primary/70 group-focus-visible:ring-2 group-focus-visible:ring-ring/50", "dark:group-hover:border-primary/70 dark:group-hover:shadow-[0_0_0_1px_var(--glow-primary),0_12px_28px_-8px_oklch(0_0_0/0.6)]");
    $[10] = t7;
  } else {
    t7 = $[10];
  }
  let t8;
  if ($[11] !== handleImgLoad || $[12] !== isIconMode || $[13] !== item.coverImage || $[14] !== item.name) {
    t8 = item.coverImage ? isIconMode ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: cn("absolute inset-0", "bg-[radial-gradient(120%_120%_at_0%_0%,var(--color-primary)_0%,transparent_55%),radial-gradient(120%_120%_at_100%_100%,var(--color-accent-brand)_0%,transparent_55%)]", "opacity-[0.22] dark:opacity-[0.38]") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.coverImage, alt: "", draggable: false, decoding: "async", loading: "lazy", onLoad: handleImgLoad, className: "absolute left-1/2 top-1/2 h-3/5 w-3/5 -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_6px_14px_rgb(0_0_0/0.4)] transition-transform duration-500 group-hover:scale-[1.06]" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.coverImage, alt: "", draggable: false, decoding: "async", loading: "lazy", onLoad: handleImgLoad, className: "absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: cn("absolute inset-0 flex items-center justify-center", "bg-[radial-gradient(120%_120%_at_0%_0%,var(--color-primary)_0%,transparent_55%),radial-gradient(120%_120%_at_100%_100%,var(--color-accent-brand)_0%,transparent_55%)]", "opacity-[0.22] dark:opacity-[0.38]"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "select-none font-display text-5xl font-black text-foreground/30 drop-shadow-sm", children: item.name.slice(0, 1).toUpperCase() || "#" }) });
    $[11] = handleImgLoad;
    $[12] = isIconMode;
    $[13] = item.coverImage;
    $[14] = item.name;
    $[15] = t8;
  } else {
    t8 = $[15];
  }
  let t9;
  if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
    t9 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: cn("pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/0 via-black/0 to-transparent", "transition-[background-image,height] duration-200", "group-hover:h-2/5 group-hover:from-black/75 group-hover:via-black/40", "group-focus-within:h-2/5 group-focus-within:from-black/75 group-focus-within:via-black/40") });
    $[16] = t9;
  } else {
    t9 = $[16];
  }
  let t10;
  if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
    t10 = cn("inline-flex size-5 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-md [&_svg]:size-2.5");
    $[17] = t10;
  } else {
    t10 = $[17];
  }
  const t11 = isUrl ? "URL" : "应用";
  let t12;
  if ($[18] !== TypeIcon) {
    t12 = /* @__PURE__ */ jsxRuntimeExports.jsx(TypeIcon, {});
    $[18] = TypeIcon;
    $[19] = t12;
  } else {
    t12 = $[19];
  }
  let t13;
  if ($[20] !== t11 || $[21] !== t12) {
    t13 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute left-1.5 top-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: t10, title: t11, "aria-hidden": true, children: t12 }) });
    $[20] = t11;
    $[21] = t12;
    $[22] = t13;
  } else {
    t13 = $[22];
  }
  let t14;
  if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
    t14 = cn("absolute inset-x-0 bottom-0 flex items-center justify-between gap-1.5 p-2", "translate-y-1 opacity-0 transition-[opacity,transform] duration-150", "group-hover:translate-y-0 group-hover:opacity-100", "group-focus-within:translate-y-0 group-focus-within:opacity-100");
    $[23] = t14;
  } else {
    t14 = $[23];
  }
  let t15;
  if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
    t15 = cn("inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md [&_svg]:size-3", "transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40");
    $[24] = t15;
  } else {
    t15 = $[24];
  }
  let t16;
  if ($[25] !== TargetIcon) {
    t16 = /* @__PURE__ */ jsxRuntimeExports.jsx(TargetIcon, {});
    $[25] = TargetIcon;
    $[26] = t16;
  } else {
    t16 = $[26];
  }
  let t17;
  if ($[27] !== t16 || $[28] !== targetAriaLabel) {
    t17 = /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", "aria-label": targetAriaLabel, className: t15, children: t16 }) });
    $[27] = t16;
    $[28] = targetAriaLabel;
    $[29] = t17;
  } else {
    t17 = $[29];
  }
  let t18;
  if ($[30] !== item.target) {
    t18 = /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContent, { side: "top", align: "start", className: "max-w-[260px] break-all text-[11px]", children: item.target });
    $[30] = item.target;
    $[31] = t18;
  } else {
    t18 = $[31];
  }
  let t19;
  if ($[32] !== t17 || $[33] !== t18) {
    t19 = /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip, { children: [
      t17,
      t18
    ] });
    $[32] = t17;
    $[33] = t18;
    $[34] = t19;
  } else {
    t19 = $[34];
  }
  let t20;
  if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
    t20 = cn("size-6 rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md [&_svg]:size-3", "hover:bg-white/20 hover:text-white dark:hover:bg-white/20");
    $[35] = t20;
  } else {
    t20 = $[35];
  }
  let t21;
  if ($[36] !== item || $[37] !== onEdit) {
    t21 = () => onEdit(item);
    $[36] = item;
    $[37] = onEdit;
    $[38] = t21;
  } else {
    t21 = $[38];
  }
  const t22 = `编辑 ${item.name}`;
  let t23;
  if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
    t23 = /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, {});
    $[39] = t23;
  } else {
    t23 = $[39];
  }
  let t24;
  if ($[40] !== t21 || $[41] !== t22) {
    t24 = /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", size: "icon-sm", variant: "ghost", className: t20, onClick: t21, "aria-label": t22, children: t23 });
    $[40] = t21;
    $[41] = t22;
    $[42] = t24;
  } else {
    t24 = $[42];
  }
  let t25;
  if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
    t25 = cn("size-6 rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md [&_svg]:size-3", "hover:bg-destructive/85 hover:text-white dark:hover:bg-destructive/80");
    $[43] = t25;
  } else {
    t25 = $[43];
  }
  let t26;
  if ($[44] !== item || $[45] !== onDelete) {
    t26 = () => onDelete(item);
    $[44] = item;
    $[45] = onDelete;
    $[46] = t26;
  } else {
    t26 = $[46];
  }
  const t27 = `删除 ${item.name}`;
  let t28;
  if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
    t28 = /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, {});
    $[47] = t28;
  } else {
    t28 = $[47];
  }
  let t29;
  if ($[48] !== t26 || $[49] !== t27) {
    t29 = /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", size: "icon-sm", variant: "ghost", className: t25, onClick: t26, "aria-label": t27, children: t28 });
    $[48] = t26;
    $[49] = t27;
    $[50] = t29;
  } else {
    t29 = $[50];
  }
  let t30;
  if ($[51] !== t24 || $[52] !== t29) {
    t30 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center gap-0.5", children: [
      t24,
      t29
    ] });
    $[51] = t24;
    $[52] = t29;
    $[53] = t30;
  } else {
    t30 = $[53];
  }
  let t31;
  if ($[54] !== t19 || $[55] !== t30) {
    t31 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: t14, children: [
      t19,
      t30
    ] });
    $[54] = t19;
    $[55] = t30;
    $[56] = t31;
  } else {
    t31 = $[56];
  }
  let t32;
  if ($[57] !== t13 || $[58] !== t31 || $[59] !== t8) {
    t32 = /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: t7, children: [
      t8,
      t9,
      t13,
      t31
    ] });
    $[57] = t13;
    $[58] = t31;
    $[59] = t8;
    $[60] = t32;
  } else {
    t32 = $[60];
  }
  let t33;
  if ($[61] !== item.name) {
    t33 = /* @__PURE__ */ jsxRuntimeExports.jsx("figcaption", { className: "truncate px-0.5 text-center text-xs font-medium text-foreground/85 transition-colors group-hover:text-foreground", title: item.name, children: item.name });
    $[61] = item.name;
    $[62] = t33;
  } else {
    t33 = $[62];
  }
  let t34;
  if ($[63] !== handleFigureKeyDown || $[64] !== item.name || $[65] !== t32 || $[66] !== t33 || $[67] !== t4 || $[68] !== t6) {
    t34 = /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "slide-up-fade group flex flex-col gap-2 outline-none", style: t4, tabIndex: 0, role: "group", "aria-label": t5, onKeyDown: handleFigureKeyDown, onDoubleClick: t6, children: [
      t32,
      t33
    ] });
    $[63] = handleFigureKeyDown;
    $[64] = item.name;
    $[65] = t32;
    $[66] = t33;
    $[67] = t4;
    $[68] = t6;
    $[69] = t34;
  } else {
    t34 = $[69];
  }
  return t34;
}
const CustomKeyCard = reactExports.memo(CustomKeyCardBase);
function entryToValue(entry) {
  return {
    name: entry.name,
    targetPath: entry.targetPath,
    shortcutPath: entry.shortcutPath,
    icon: entry.icon
  };
}
function AppPickerCombobox({
  value,
  onChange,
  className
}) {
  const [open, setOpen] = reactExports.useState(false);
  const [items, setItems] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const [hasScanned, setHasScanned] = reactExports.useState(false);
  const refresh = reactExports.useCallback(async () => {
    if (!window.electronApps) {
      toast.error("当前环境不支持扫描本机应用");
      return;
    }
    setLoading(true);
    try {
      const res = await window.electronApps.scanStartMenu();
      if (res.success) {
        setItems(res.items);
        setHasScanned(true);
      } else {
        toast.error(`扫描失败：${res.error ?? "未知错误"}`);
      }
    } finally {
      setLoading(false);
    }
  }, []);
  const browse = reactExports.useCallback(async () => {
    if (!window.electronApps) {
      toast.error("当前环境不支持选择本机应用");
      return;
    }
    const res = await window.electronApps.pickFile();
    if (!res.success) return;
    if (res.entry) {
      onChange(entryToValue(res.entry));
      setOpen(false);
    }
  }, [onChange]);
  reactExports.useEffect(() => {
    if (open && !hasScanned && !loading) {
      void refresh();
    }
  }, [open, hasScanned, loading, refresh]);
  const selectedLabel = reactExports.useMemo(() => {
    if (!value) return "选择本机应用…";
    return value.name;
  }, [value]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex flex-col gap-2", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "outline", role: "combobox", "aria-expanded": open, className: "w-full justify-between gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex min-w-0 items-center gap-2", children: [
          value?.icon ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: value.icon, alt: "", className: "size-4 shrink-0 rounded-sm", draggable: false }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { "data-icon": "inline-start", className: "size-4 shrink-0 opacity-70" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate text-left", children: selectedLabel })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronsUpDown, { className: "size-4 shrink-0 opacity-50" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContent, { className: "w-[--radix-popover-trigger-width] p-0", align: "center", "data-vaul-no-drag": "", onWheel: (e) => e.stopPropagation(), onTouchMove: (e_0) => e_0.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Command, { filter: (v, search) => {
        if (!search) return 1;
        return v.toLowerCase().includes(search.toLowerCase()) ? 1 : 0;
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CommandInput, { placeholder: "搜索应用名称…" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandList, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CommandEmpty, { children: loading ? "正在扫描…" : "未找到匹配应用，可点下方「浏览…」手动选择" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CommandGroup, { heading: `已扫描 · ${items.length}`, children: items.map((entry) => {
            const isSelected = value?.shortcutPath === entry.shortcutPath;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandItem, { value: `${entry.name}${entry.targetPath}`, onSelect: () => {
              onChange(entryToValue(entry));
              setOpen(false);
            }, children: [
              entry.icon ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: entry.icon, alt: "", className: "size-4 shrink-0 rounded-sm", draggable: false }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-4 shrink-0 rounded-sm bg-muted" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: entry.name }),
              isSelected ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "ml-auto size-4 text-primary" }) : null
            ] }, entry.id);
          }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "outline", size: "sm", className: "w-full", onClick: browse, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpen, { "data-icon": "inline-start" }),
      "浏览…"
    ] })
  ] });
}
const MAX_COVER_PIXELS = 512;
function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}
function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("图片解码失败"));
    img.src = src;
  });
}
async function compressImageDataURL(src) {
  const img = await loadImage(src);
  const longEdge = Math.max(img.naturalWidth, img.naturalHeight);
  const scale = longEdge > MAX_COVER_PIXELS ? MAX_COVER_PIXELS / longEdge : 1;
  const targetW = Math.max(1, Math.round(img.naturalWidth * scale));
  const targetH = Math.max(1, Math.round(img.naturalHeight * scale));
  const canvas = document.createElement("canvas");
  canvas.width = targetW;
  canvas.height = targetH;
  const ctx = canvas.getContext("2d");
  if (!ctx) return src;
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(img, 0, 0, targetW, targetH);
  let out = canvas.toDataURL("image/webp", 0.85);
  if (!out.startsWith("data:image/webp")) {
    out = canvas.toDataURL("image/jpeg", 0.88);
  }
  return out;
}
function Section(t0) {
  const $ = compilerRuntimeExports.c(14);
  const {
    title,
    htmlFor,
    hint,
    children
  } = t0;
  const Label = htmlFor ? "label" : "span";
  let t1;
  if ($[0] !== htmlFor) {
    t1 = htmlFor ? {
      htmlFor
    } : {};
    $[0] = htmlFor;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] !== Label || $[3] !== t1 || $[4] !== title) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { ...t1, className: "text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground", children: title });
    $[2] = Label;
    $[3] = t1;
    $[4] = title;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  let t3;
  if ($[6] !== hint) {
    t3 = hint ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 text-[11px] text-muted-foreground/80", children: hint }) : null;
    $[6] = hint;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  let t4;
  if ($[8] !== t2 || $[9] !== t3) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
      t2,
      t3
    ] });
    $[8] = t2;
    $[9] = t3;
    $[10] = t4;
  } else {
    t4 = $[10];
  }
  let t5;
  if ($[11] !== children || $[12] !== t4) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "flex flex-col gap-2.5", children: [
      t4,
      children
    ] });
    $[11] = children;
    $[12] = t4;
    $[13] = t5;
  } else {
    t5 = $[13];
  }
  return t5;
}
function FieldError(t0) {
  const $ = compilerRuntimeExports.c(3);
  const {
    children
  } = t0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "size-3.5" });
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  let t2;
  if ($[1] !== children) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { role: "alert", className: "inline-flex items-center gap-1 text-xs text-destructive", children: [
      t1,
      children
    ] });
    $[1] = children;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  return t2;
}
function CustomKeyDrawer({
  open,
  onOpenChange,
  mode,
  initial,
  usedSlotCount,
  onSubmit
}) {
  const [name, setName] = reactExports.useState("");
  const [type, setType] = reactExports.useState("url");
  const [url, setUrl] = reactExports.useState("");
  const [app, setApp] = reactExports.useState(null);
  const [coverImage, setCoverImage] = reactExports.useState(void 0);
  const [coverMode, setCoverMode] = reactExports.useState(void 0);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [nameInvalid, setNameInvalid] = reactExports.useState(false);
  const [targetInvalid, setTargetInvalid] = reactExports.useState(false);
  const [dragOver, setDragOver] = reactExports.useState(false);
  const fileInputRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!open) return;
    if (mode === "edit" && initial) {
      setName(initial.name);
      setType(initial.type);
      if (initial.type === "url") {
        setUrl(initial.target);
        setApp(null);
      } else {
        setUrl("");
        setApp({
          name: initial.name,
          targetPath: initial.target,
          shortcutPath: initial.target
        });
      }
      setCoverImage(initial.coverImage);
      setCoverMode(initial.coverMode);
    } else {
      setName("");
      setType("url");
      setUrl("");
      setApp(null);
      setCoverImage(void 0);
      setCoverMode(void 0);
    }
    setNameInvalid(false);
    setTargetInvalid(false);
  }, [open, mode, initial]);
  const handleFilePick = reactExports.useCallback(async (file) => {
    if (file.size > 5 * 1024 * 1024) {
      toast.error("图片不能超过 5MB");
      return;
    }
    try {
      const raw = await readFileAsDataURL(file);
      const compressed = await compressImageDataURL(raw);
      setCoverImage(compressed);
      setCoverMode("cover");
    } catch (err) {
      toast.error(err.message || "图片处理失败");
    }
  }, []);
  const onFileInputChange = async (e) => {
    const file_0 = e.target.files?.[0];
    e.target.value = "";
    if (file_0) await handleFilePick(file_0);
  };
  const pickAppIconAsCover = reactExports.useCallback(async () => {
    if (!app) return;
    if (app.icon) {
      setCoverImage(app.icon);
      setCoverMode("icon");
      return;
    }
    if (!window.electronApps) return;
    const res = await window.electronApps.getIcon(app.shortcutPath || app.targetPath);
    if (res.success && res.icon) {
      setCoverImage(res.icon);
      setCoverMode("icon");
    } else {
      toast.error("未能获取应用图标");
    }
  }, [app]);
  const handleDropZoneClick = reactExports.useCallback(() => {
    fileInputRef.current?.click();
  }, []);
  const handleDragOver = reactExports.useCallback((e_0) => {
    e_0.preventDefault();
    if (e_0.dataTransfer) e_0.dataTransfer.dropEffect = "copy";
    setDragOver(true);
  }, []);
  const handleDragLeave = reactExports.useCallback((e_1) => {
    e_1.preventDefault();
    setDragOver(false);
  }, []);
  const handleDrop = reactExports.useCallback((e_2) => {
    e_2.preventDefault();
    setDragOver(false);
    const f = e_2.dataTransfer.files?.[0];
    if (f && f.type.startsWith("image/")) void handleFilePick(f);
  }, [handleFilePick]);
  const handleRemoveCover = reactExports.useCallback((e_3) => {
    e_3.stopPropagation();
    setCoverImage(void 0);
    setCoverMode(void 0);
  }, []);
  const handlePickAppIconStopProp = reactExports.useCallback((e_4) => {
    e_4.stopPropagation();
    void pickAppIconAsCover();
  }, [pickAppIconAsCover]);
  const handleSubmit = async () => {
    const trimmedName = name.trim();
    let targetOk = false;
    let target = "";
    if (type === "url") {
      const trimmed = url.trim();
      const looksLikeUrl = /^https?:\/\/.+/i.test(trimmed) || /^[\w-]+(\.[\w-]+)+(\/.*)?$/i.test(trimmed);
      targetOk = looksLikeUrl;
      target = trimmed;
    } else {
      targetOk = !!app?.targetPath;
      target = app?.targetPath ?? "";
    }
    const nameOk = trimmedName.length > 0 && trimmedName.length <= 32;
    setNameInvalid(!nameOk);
    setTargetInvalid(!targetOk);
    if (!nameOk || !targetOk) {
      toast.error("请完善名称与绑定目标");
      return;
    }
    setSubmitting(true);
    try {
      await onSubmit({
        name: trimmedName,
        type,
        target,
        coverImage: coverImage ?? null,
        coverMode: coverImage ? coverMode ?? null : null
      });
      onOpenChange(false);
    } finally {
      setSubmitting(false);
    }
  };
  const title = mode === "edit" ? "编辑自定义按键" : "新建自定义按键";
  const description = mode === "edit" ? "修改该自定义按键的名称 / 绑定目标 / 封面图" : "创建一个可绑定到键位的媒体按键";
  const coverInitial = (name.trim().slice(0, 1) || "#").toUpperCase();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Drawer, { open, onOpenChange, direction: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DrawerContent, { className: cn("sm:max-w-xl gap-0 p-0", "border-l border-border/60 bg-card/95", "dark:border-border/40 dark:bg-card/70 dark:backdrop-blur-xl dark:cyber-scanlines"), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: cn("pointer-events-none absolute inset-x-0 top-0 h-48", "bg-[radial-gradient(110%_100%_at_100%_0%,var(--color-primary)_0%,transparent_55%)]", "opacity-[0.08] dark:opacity-[0.22]") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-y-0 left-0 hidden w-px bg-linear-to-b from-transparent via-primary/40 to-transparent dark:block" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DrawerHeader, { className: "relative gap-1.5 px-6 pt-6 pb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 flex-col gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DrawerTitle, { className: "font-display text-lg font-semibold tracking-wide", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DrawerDescription, { className: "text-sm leading-relaxed", children: description })
        ] }),
        mode === "create" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn("shrink-0 rounded-full border border-border/60 bg-muted/50 px-2.5 py-1", "font-mono text-[11px] tabular-nums text-muted-foreground", "dark:border-border/50 dark:bg-card/60"), children: [
          usedSlotCount,
          "/256"
        ] }) : null
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "mt-4 h-px bg-linear-to-r from-transparent via-border to-transparent" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex-1 overflow-y-auto px-6 pb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "名称", htmlFor: "custom-key-name", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "custom-key-name", value: name, maxLength: 32, placeholder: "例如：打开 GitHub", onChange: (e_5) => {
          setName(e_5.target.value);
          if (nameInvalid) setNameInvalid(false);
        }, "aria-invalid": nameInvalid || void 0, "data-invalid": nameInvalid || void 0 }),
        nameInvalid ? /* @__PURE__ */ jsxRuntimeExports.jsx(FieldError, { children: "名称不能为空，且不超过 32 个字符" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground/80", children: "最多 32 个字符 · 将作为按键卡片显示名" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "绑定类型", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { value: type, onValueChange: (v) => setType(v), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: cn("grid w-full grid-cols-2 rounded-lg bg-muted/40 p-1", "dark:bg-card/50 dark:border dark:border-border/40"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "url", className: cn("transition-[color,background-color,box-shadow,border-color] duration-200", "data-[state=active]:bg-primary/10 data-[state=active]:text-primary", "data-[state=active]:border-primary/40", "dark:data-[state=active]:bg-primary/15", "data-[state=active]:dark:shadow-[0_0_0_1px_var(--ring),0_0_14px_var(--glow-primary)]"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { "data-icon": "inline-start" }),
            "URL"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "app", className: cn("transition-[color,background-color,box-shadow,border-color] duration-200", "data-[state=active]:bg-primary/10 data-[state=active]:text-primary", "data-[state=active]:border-primary/40", "dark:data-[state=active]:bg-primary/15", "data-[state=active]:dark:shadow-[0_0_0_1px_var(--ring),0_0_14px_var(--glow-primary)]"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { "data-icon": "inline-start" }),
            "本机应用"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "url", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "https://example.com", value: url, onChange: (e_6) => {
            setUrl(e_6.target.value);
            if (targetInvalid) setTargetInvalid(false);
          }, "aria-invalid": targetInvalid || void 0, "data-invalid": targetInvalid || void 0 }),
          targetInvalid && type === "url" ? /* @__PURE__ */ jsxRuntimeExports.jsx(FieldError, { children: "请输入合法的 URL 或域名" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground/80", children: "支持 http(s):// 开头，或形如 example.com 的短链（将自动补全）" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "app", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AppPickerCombobox, { value: app, onChange: (v_0) => {
            setApp(v_0);
            if (!name.trim()) setName(v_0.name);
            if (targetInvalid) setTargetInvalid(false);
            if (!coverImage && v_0.icon) {
              setCoverImage(v_0.icon);
              setCoverMode("icon");
            }
          } }),
          targetInvalid && type === "app" ? /* @__PURE__ */ jsxRuntimeExports.jsx(FieldError, { children: "请选择一个应用" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground/80", children: "从已安装应用或快捷方式中选取目标可执行文件" })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "封面图", hint: "推荐正方形图片", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: fileInputRef, type: "file", accept: "image/*", className: "sr-only", onChange: onFileInputChange }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { role: "button", tabIndex: 0, "aria-label": "点击或拖拽上传封面图", onClick: handleDropZoneClick, onKeyDown: (e_7) => {
          if (e_7.key === "Enter" || e_7.key === " ") {
            e_7.preventDefault();
            handleDropZoneClick();
          }
        }, onDragOver: handleDragOver, onDragLeave: handleDragLeave, onDrop: handleDrop, className: cn("group/drop relative flex w-full items-center gap-4 overflow-hidden rounded-2xl p-3", "border border-dashed border-border/70 bg-muted/30", "cursor-pointer select-none", "transition-[background-color,border-color,box-shadow] duration-200", "hover:border-primary/50 hover:bg-primary/5", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", "dark:border-border/50 dark:bg-card/50", dragOver && "border-primary/60 bg-primary/5 ring-2 ring-primary/60 dark:bg-primary/10"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("relative flex aspect-square w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl", "border border-border/60 bg-background/60", "dark:border-border/40 dark:bg-card/60 dark:cyber-scanlines"), children: coverImage ? coverMode === "icon" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: cn("absolute inset-0", "bg-[radial-gradient(120%_120%_at_0%_0%,var(--color-primary)_0%,transparent_55%),radial-gradient(120%_120%_at_100%_100%,var(--color-accent-brand)_0%,transparent_55%)]", "opacity-[0.22] dark:opacity-[0.4]") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: coverImage, alt: "cover preview", draggable: false, className: "relative h-3/5 w-3/5 object-contain drop-shadow-[0_6px_14px_rgb(0_0_0/0.35)]" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: coverImage, alt: "cover preview", className: "h-full w-full object-cover", draggable: false }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: cn("absolute inset-0", "bg-[radial-gradient(120%_120%_at_0%_0%,var(--color-primary)_0%,transparent_55%),radial-gradient(120%_120%_at_100%_100%,var(--color-accent-brand)_0%,transparent_55%)]", "opacity-[0.22] dark:opacity-[0.4]") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative select-none font-display text-4xl font-black text-foreground/30 drop-shadow-sm", children: coverInitial })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 flex-1 flex-col gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-medium text-primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CloudUpload, { className: "size-4" }),
              dragOver ? "松开即可上传" : coverImage ? "替换封面图" : "上传封面图"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] leading-relaxed text-muted-foreground", children: "点击区域或拖拽图片到此处 · 单张 ≤ 5MB · 推荐正方形" }),
            (coverImage || type === "app" && app) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex flex-wrap items-center gap-1", children: [
              type === "app" && app ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "ghost", size: "sm", className: "h-7 px-2 text-xs", onClick: handlePickAppIconStopProp, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Image$1, { "data-icon": "inline-start" }),
                "用应用图标"
              ] }) : null,
              coverImage ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "ghost", size: "sm", className: "h-7 px-2 text-xs text-destructive hover:bg-destructive/10 hover:text-destructive", onClick: handleRemoveCover, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { "data-icon": "inline-start" }),
                "移除"
              ] }) : null
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DrawerFooter, { className: cn("flex-row justify-end gap-2 border-t border-border/60 px-6 py-4", "bg-card/60 backdrop-blur-md", "dark:border-border/40 dark:bg-card/40"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", disabled: submitting, onClick: () => onOpenChange(false), children: "取消" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", onClick: handleSubmit, disabled: submitting, className: cn("press-scale", "dark:shadow-[0_0_18px_-2px_var(--glow-primary)]"), children: submitting ? "保存中…" : mode === "edit" ? "保存" : "创建" })
    ] })
  ] }) });
}
const CustomKeyPage = () => {
  const productId = useActiveProductId();
  const record = useLiveQuery(() => productId ? db.customKeysSettings.get(productId) : void 0, [productId]);
  const items = reactExports.useMemo(() => record?.items ?? [], [record]);
  const [drawerOpen, setDrawerOpen] = reactExports.useState(false);
  const [editingItem, setEditingItem] = reactExports.useState(null);
  const [pendingDelete, setPendingDelete] = reactExports.useState(null);
  const [query, setQuery] = reactExports.useState("");
  const [typeFilter, setTypeFilter] = reactExports.useState("all");
  const [sortBy, setSortBy] = reactExports.useState("updatedDesc");
  const typeCounts = reactExports.useMemo(() => {
    let url = 0;
    let app = 0;
    for (const it of items) {
      if (it.type === "url") url += 1;
      else if (it.type === "app") app += 1;
    }
    return {
      all: items.length,
      url,
      app
    };
  }, [items]);
  const filteredItems = reactExports.useMemo(() => {
    const kw = query.trim().toLowerCase();
    const base = typeFilter === "all" ? items : items.filter((it_0) => it_0.type === typeFilter);
    const matched = kw ? base.filter((it_1) => it_1.name.toLowerCase().includes(kw) || it_1.target.toLowerCase().includes(kw)) : base;
    const sorted = matched.slice();
    sorted.sort((a, b) => {
      if (sortBy === "nameAsc") return a.name.localeCompare(b.name, "zh-Hans-CN");
      return (b.updatedAt ?? 0) - (a.updatedAt ?? 0);
    });
    return sorted;
  }, [items, query, typeFilter, sortBy]);
  const hasActiveFilter = query.trim() !== "" || typeFilter !== "all";
  const handleClearFilters = reactExports.useCallback(() => {
    setQuery("");
    setTypeFilter("all");
  }, []);
  const handleOpenCreate = reactExports.useCallback(() => {
    if (items.length > CUSTOM_KEY_MAX_SLOT) {
      toast.error("自定义按键数量已达上限");
      return;
    }
    setEditingItem(null);
    setDrawerOpen(true);
  }, [items.length]);
  const handleOpenEdit = reactExports.useCallback((item) => {
    setEditingItem(item);
    setDrawerOpen(true);
  }, []);
  const handleSubmit = reactExports.useCallback(async (payload) => {
    if (!productId) {
      toast.error("未检测到已连接设备");
      return;
    }
    try {
      if (editingItem) {
        await updateCustomKey(productId, editingItem.slot, {
          name: payload.name,
          type: payload.type,
          target: payload.target,
          coverImage: payload.coverImage,
          coverMode: payload.coverMode
        });
        toast.success("已保存");
      } else {
        const created = await createCustomKey(productId, {
          name: payload.name,
          type: payload.type,
          target: payload.target,
          coverImage: payload.coverImage ?? void 0,
          coverMode: payload.coverMode ?? void 0
        });
        if (!created) {
          toast.error("按键数量已达上限");
          return;
        }
      }
    } catch (err) {
      toast.error(err.message || "保存失败");
      throw err;
    }
  }, [productId, editingItem]);
  const handleConfirmDelete = reactExports.useCallback(async () => {
    if (!productId || !pendingDelete) return;
    try {
      await restoreCustomKeySlotBindingsToDefault(pendingDelete.slot).catch(() => false);
      await deleteCustomKey(productId, pendingDelete.slot);
      toast.success("已删除");
    } catch (err_0) {
      toast.error(err_0.message || "删除失败");
    } finally {
      setPendingDelete(null);
    }
  }, [productId, pendingDelete]);
  const isEmpty = items.length === 0;
  const isFilteredEmpty = !isEmpty && filteredItems.length === 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("relative flex h-full min-h-0 flex-col gap-4 overflow-hidden px-6 py-4", "bg-[radial-gradient(circle_at_18%_4%,oklch(0.84_0.08_220/0.24),transparent_32%),radial-gradient(circle_at_86%_10%,oklch(0.78_0.12_330/0.16),transparent_34%),linear-gradient(135deg,oklch(0.99_0.01_250),oklch(0.96_0.025_275)_56%,oklch(0.98_0.018_210))]", "dark:bg-[radial-gradient(circle_at_18%_4%,oklch(0.7_0.16_220/0.18),transparent_34%),radial-gradient(circle_at_86%_10%,oklch(0.7_0.18_330/0.12),transparent_34%),linear-gradient(135deg,oklch(0.14_0.035_260),oklch(0.09_0.03_275)_56%,oklch(0.12_0.035_230))]"), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex flex-wrap items-end justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold tracking-tight", children: "自定义按键" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "创建可绑定到键位的媒体按键，按下后打开 URL 或本机应用。" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-white/65 bg-white/58 px-2.5 py-1 font-mono text-xs tabular-nums text-muted-foreground shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-[oklch(0.18_0.035_270/0.68)]", children: hasActiveFilter ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          filteredItems.length,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/60", children: " / " }),
          items.length,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/60", children: " · " }),
          CUSTOM_KEY_MAX_SLOT + 1
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          items.length,
          "/",
          CUSTOM_KEY_MAX_SLOT + 1
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", onClick: handleOpenCreate, disabled: !productId, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { "data-icon": "inline-start" }),
          "新建按键"
        ] })
      ] })
    ] }),
    !isEmpty && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 z-10 -mx-1 flex flex-wrap items-center gap-2 rounded-2xl border border-white/70 bg-white/62 px-2 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_4px_12px_oklch(0.42_0.08_265/0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-[oklch(0.18_0.035_270/0.68)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-w-[180px] flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { "aria-hidden": true, className: "pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "search", value: query, onChange: (e) => setQuery(e.target.value), placeholder: "搜索名称或 URL / 路径", className: "h-8 pl-7 pr-8 text-sm", "aria-label": "搜索自定义按键" }),
        query && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setQuery(""), "aria-label": "清除搜索", className: "absolute right-1.5 top-1/2 inline-flex size-5 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground [&_svg]:size-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs, { value: typeFilter, onValueChange: (v) => setTypeFilter(v), className: "shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "h-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "all", className: "gap-1.5 text-xs", children: [
          "全部",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-background/70 px-1 font-mono text-[10px] leading-none text-muted-foreground tabular-nums", children: typeCounts.all })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "url", className: "gap-1.5 text-xs", children: [
          "URL",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-background/70 px-1 font-mono text-[10px] leading-none text-muted-foreground tabular-nums", children: typeCounts.url })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "app", className: "gap-1.5 text-xs", children: [
          "应用",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-background/70 px-1 font-mono text-[10px] leading-none text-muted-foreground tabular-nums", children: typeCounts.app })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: sortBy, onValueChange: (v_0) => setSortBy(v_0), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { size: "sm", className: "h-8 text-xs", "aria-label": "排序方式", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { align: "end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "updatedDesc", children: "最近更新" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "nameAsc", children: "名称 A→Z" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0 overflow-y-auto pr-1", children: isEmpty ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Empty, { className: "h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(EmptyHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyMedia, { variant: "icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AppWindow, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyTitle, { children: "还没有自定义按键" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyDescription, { children: "点击「新建按键」创建第一个自定义媒体按键，支持绑定 URL 或本机应用。" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", onClick: handleOpenCreate, disabled: !productId, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { "data-icon": "inline-start" }),
        "新建按键"
      ] }) })
    ] }) : isFilteredEmpty ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Empty, { className: "h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(EmptyHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyMedia, { variant: "icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SearchX, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyTitle, { children: "没有匹配的按键" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyDescription, { children: "试试调整关键词或切换到「全部」类型。" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", onClick: handleClearFilters, children: "清除筛选" }) })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-x-4 gap-y-5", style: {
      gridTemplateColumns: "repeat(auto-fill, minmax(112px, 1fr))"
    }, children: filteredItems.map((item_0, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(CustomKeyCard, { item: item_0, index: i, onEdit: handleOpenEdit, onDelete: setPendingDelete }, item_0.key)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CustomKeyDrawer, { open: drawerOpen, onOpenChange: setDrawerOpen, mode: editingItem ? "edit" : "create", initial: editingItem, usedSlotCount: items.length, onSubmit: handleSubmit }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: pendingDelete !== null, onOpenChange: (open) => !open && setPendingDelete(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: "删除自定义按键" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { children: pendingDelete ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "将删除「",
          pendingDelete.name,
          "」，已绑定到该按键的键位将自动恢复为默认映射。"
        ] }) : null })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { children: "取消" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { className: "bg-destructive text-destructive-foreground hover:bg-destructive/90", onClick: handleConfirmDelete, variant: "destructive", children: "删除" })
      ] })
    ] }) })
  ] });
};
export {
  CustomKeyPage as default
};
