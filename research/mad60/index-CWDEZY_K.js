import { r as reactExports, j as jsxRuntimeExports, R as React__default, k as compilerRuntimeExports, n as useNavigate, a as reactDomExports } from "./vendor-react-CCnVVUMc.js";
import { c as createLucideIcon, bH as createContextScope, d8 as useControllableState, du as useId, bK as Primitive, bL as composeEventHandlers, d7 as Presence, d9 as useComposedRefs, dv as useLayoutEffect2, dw as createCollection, dx as useDirection, dy as usePressKeyRemap, aL as useDeviceInfoStore, dz as useLiveQuery, dA as IS_ELECTRON, c0 as useKeyboardStore, dB as useKeyButtonText, dC as CUSTOM_KEY_TYPE_BYTE, dD as CUSTOM_KEY_HIGH_BYTE, dE as MODE_BADGE_COLORS, dF as SPECIAL_MODE_LABELS, dG as isFnLayerTargetLocked, dH as getReservedWakeFnSlotIndex, dI as isAdvancedKeyTriplet, dJ as useDroppable, dK as useSequentialClickConfirm, F as cn, dL as AppWindow, aA as AlertDialog, dM as Command, dc as db, dN as restoreKeySlotToDefault, aD as AlertDialogTitle, aC as AlertDialogHeader, aE as AlertDialogDescription, aG as AlertDialogCancel, aF as AlertDialogFooter, aH as AlertDialogAction, aB as AlertDialogContent, c3 as useDeviceConfig, bE as z, ce as useResolvedKeyboardLayoutItems, cf as useResolvedKeyboardLayout, cg as useKeyboardDriverSyncStore, ci as KeyboardLayoutSkeleton, c1 as useFunctionalAreaStore, a2 as toast, B as Button, cZ as RefreshCw, dO as FaWindows, dP as FaApple, dQ as ADVANCED_KEY_TYPES, dR as ButtonGroupSeparator, dS as ButtonGroup, dT as defaultMouseLayout, c9 as useKeyRectIndexStore, dU as resolveMouseButtonIndex, dV as keyButtonResultToLabel, dW as withActiveDeviceBatch, dX as useOptionalPressKeyRemap, dY as useDraggable, E as CSS, dZ as applyBoardKeyMapping, d_ as pressKeyAllkeys, aZ as ChevronDown, d$ as ensureRemapTargetNotAdvancedKey, e0 as commitLayerKeyRectWrite, h as highLowToDecimal, e1 as getFnText, aS as formatToHex, bb as lodashExports, aw as Settings2, e2 as Zap, Q as DropdownMenuTrigger, U as DropdownMenuContent, V as DropdownMenuItem, T as Trash2, O as DropdownMenu, aR as codeValues, e3 as KeyType, cR as allkeys, e4 as BoardKeys, e5 as CompareKeysPickProvider, e6 as ArrowDownToLine, a_ as ChevronUp, e7 as resolveDevice, e8 as isMouseDevice, e9 as readProtocolCommand, ea as writeProtocolCommand, eb as create, ec as splitHighLowBytes, ed as useIsMouseDevice, n as useSensors, o as useSensor, p as PointerSensor, ee as Sheet, ef as SheetContent, eg as SheetHeader, eh as SheetTitle, ei as SheetDescription, bg as CircleX, aX as Select, aT as SelectTrigger, aU as SelectValue, aV as SelectContent, aW as SelectItem, H as Input, r as DndContext, t as closestCenter, ej as getCurrentLayerKeyRect, ek as isMacroKeyFirstByte, el as slotToTriplet, au as TabsTrigger, em as EmptyHeader, en as EmptyMedia, eo as EmptyTitle, ep as EmptyDescription, eq as Empty, er as EmptyContent, aY as Search, a8 as X, at as TabsList, as as Tabs, A as Dialog, y as DialogContent, c5 as TooltipProvider, v as DialogHeader, w as DialogTitle, x as DialogDescription, d4 as TabsContent, L as Label, bF as RadioGroup, z as DialogFooter, bG as RadioGroupItem, X as TooltipTrigger, a1 as Info, Z as Tooltip, Y as TooltipContent, es as PressKeyRemapProvider, et as getIsOnboardSupported, b0 as useActiveDeviceStore, aq as reactActivationExports, eu as pressKeysTabsList, ev as BoardKeyDragPreview, D as DragOverlay, ew as enqueueSerialRead, d5 as Card, d6 as CardContent, ex as pointerWithin } from "./index-CMbUujkZ.js";
import { D as DrawerTrigger, a as DrawerTitle, b as DrawerDescription, c as DrawerHeader, d as DrawerContent, e as Drawer, S as SearchX } from "./drawer-Beh3aN8X.js";
import { P as Plus } from "./plus-BBBiVizr.js";
import { u as useSortable, G as GripVertical, b as Save, S as SortableContext, v as verticalListSortingStrategy, a as arrayMove } from "./sortable.esm-5EefM1d5.js";
import { C as CirclePause } from "./circle-pause-B97fpoyo.js";
import { F as FileDown } from "./file-down-BrX7SuQR.js";
const __iconNode$7 = [
  ["path", { d: "m18 9-6-6-6 6", key: "kcunyi" }],
  ["path", { d: "M12 3v14", key: "7cf3v8" }],
  ["path", { d: "M5 21h14", key: "11awu3" }]
];
const ArrowUpFromLine = createLucideIcon("arrow-up-from-line", __iconNode$7);
const __iconNode$6 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M17 12h.01", key: "1m0b6t" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M7 12h.01", key: "eqddd0" }]
];
const CircleEllipsis = createLucideIcon("circle-ellipsis", __iconNode$6);
const __iconNode$5 = [
  [
    "path",
    {
      d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",
      key: "kmsa83"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
];
const CirclePlay = createLucideIcon("circle-play", __iconNode$5);
const __iconNode$4 = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
];
const Ellipsis = createLucideIcon("ellipsis", __iconNode$4);
const __iconNode$3 = [
  [
    "path",
    {
      d: "M11.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v10.35",
      key: "5ad7z2"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M8 20v-7l3 1.474", key: "1ggyb9" }],
  ["circle", { cx: "6", cy: "20", r: "2", key: "j7wjp0" }]
];
const FileMusic = createLucideIcon("file-music", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m8 11 4 4 4-4", key: "1dohi6" }],
  [
    "path",
    {
      d: "M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4",
      key: "1ywtjm"
    }
  ]
];
const Import = createLucideIcon("import", __iconNode$2);
const __iconNode$1 = [
  ["rect", { width: "18", height: "12", x: "3", y: "4", rx: "2", ry: "2", key: "1qhy41" }],
  ["line", { x1: "2", x2: "22", y1: "20", y2: "20", key: "ni3hll" }]
];
const LaptopMinimal = createLucideIcon("laptop-minimal", __iconNode$1);
const __iconNode = [
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
];
const Trash = createLucideIcon("trash", __iconNode);
var COLLAPSIBLE_NAME = "Collapsible";
var [createCollapsibleContext, createCollapsibleScope] = createContextScope(COLLAPSIBLE_NAME);
var [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME);
var Collapsible = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeCollapsible,
      open: openProp,
      defaultOpen,
      disabled,
      onOpenChange,
      ...collapsibleProps
    } = props;
    const [open, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen ?? false,
      onChange: onOpenChange,
      caller: COLLAPSIBLE_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      CollapsibleProvider,
      {
        scope: __scopeCollapsible,
        disabled,
        contentId: useId(),
        open,
        onOpenToggle: reactExports.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            "data-state": getState$1(open),
            "data-disabled": disabled ? "" : void 0,
            ...collapsibleProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
Collapsible.displayName = COLLAPSIBLE_NAME;
var TRIGGER_NAME$1 = "CollapsibleTrigger";
var CollapsibleTrigger = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeCollapsible, ...triggerProps } = props;
    const context = useCollapsibleContext(TRIGGER_NAME$1, __scopeCollapsible);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        "aria-controls": context.contentId,
        "aria-expanded": context.open || false,
        "data-state": getState$1(context.open),
        "data-disabled": context.disabled ? "" : void 0,
        disabled: context.disabled,
        ...triggerProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
  }
);
CollapsibleTrigger.displayName = TRIGGER_NAME$1;
var CONTENT_NAME$1 = "CollapsibleContent";
var CollapsibleContent = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, ...contentProps } = props;
    const context = useCollapsibleContext(CONTENT_NAME$1, props.__scopeCollapsible);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: ({ present }) => /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleContentImpl, { ...contentProps, ref: forwardedRef, present }) });
  }
);
CollapsibleContent.displayName = CONTENT_NAME$1;
var CollapsibleContentImpl = reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeCollapsible, present, children, ...contentProps } = props;
  const context = useCollapsibleContext(CONTENT_NAME$1, __scopeCollapsible);
  const [isPresent, setIsPresent] = reactExports.useState(present);
  const ref = reactExports.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const heightRef = reactExports.useRef(0);
  const height = heightRef.current;
  const widthRef = reactExports.useRef(0);
  const width = widthRef.current;
  const isOpen = context.open || isPresent;
  const isMountAnimationPreventedRef = reactExports.useRef(isOpen);
  const originalStylesRef = reactExports.useRef(void 0);
  reactExports.useEffect(() => {
    const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
    return () => cancelAnimationFrame(rAF);
  }, []);
  useLayoutEffect2(() => {
    const node = ref.current;
    if (node) {
      originalStylesRef.current = originalStylesRef.current || {
        transitionDuration: node.style.transitionDuration,
        animationName: node.style.animationName
      };
      node.style.transitionDuration = "0s";
      node.style.animationName = "none";
      const rect = node.getBoundingClientRect();
      heightRef.current = rect.height;
      widthRef.current = rect.width;
      if (!isMountAnimationPreventedRef.current) {
        node.style.transitionDuration = originalStylesRef.current.transitionDuration;
        node.style.animationName = originalStylesRef.current.animationName;
      }
      setIsPresent(present);
    }
  }, [context.open, present]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.div,
    {
      "data-state": getState$1(context.open),
      "data-disabled": context.disabled ? "" : void 0,
      id: context.contentId,
      hidden: !isOpen,
      ...contentProps,
      ref: composedRefs,
      style: {
        [`--radix-collapsible-content-height`]: height ? `${height}px` : void 0,
        [`--radix-collapsible-content-width`]: width ? `${width}px` : void 0,
        ...props.style
      },
      children: isOpen && children
    }
  );
});
function getState$1(open) {
  return open ? "open" : "closed";
}
var Root = Collapsible;
var Trigger = CollapsibleTrigger;
var Content = CollapsibleContent;
var ACCORDION_NAME = "Accordion";
var ACCORDION_KEYS = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"];
var [Collection, useCollection, createCollectionScope] = createCollection(ACCORDION_NAME);
var [createAccordionContext] = createContextScope(ACCORDION_NAME, [
  createCollectionScope,
  createCollapsibleScope
]);
var useCollapsibleScope = createCollapsibleScope();
var Accordion$1 = React__default.forwardRef(
  (props, forwardedRef) => {
    const { type, ...accordionProps } = props;
    const singleProps = accordionProps;
    const multipleProps = accordionProps;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Provider, { scope: props.__scopeAccordion, children: type === "multiple" ? /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImplMultiple, { ...multipleProps, ref: forwardedRef }) : /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImplSingle, { ...singleProps, ref: forwardedRef }) });
  }
);
Accordion$1.displayName = ACCORDION_NAME;
var [AccordionValueProvider, useAccordionValueContext] = createAccordionContext(ACCORDION_NAME);
var [AccordionCollapsibleProvider, useAccordionCollapsibleContext] = createAccordionContext(
  ACCORDION_NAME,
  { collapsible: false }
);
var AccordionImplSingle = React__default.forwardRef(
  (props, forwardedRef) => {
    const {
      value: valueProp,
      defaultValue,
      onValueChange = () => {
      },
      collapsible = false,
      ...accordionSingleProps
    } = props;
    const [value, setValue] = useControllableState({
      prop: valueProp,
      defaultProp: defaultValue ?? "",
      onChange: onValueChange,
      caller: ACCORDION_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      AccordionValueProvider,
      {
        scope: props.__scopeAccordion,
        value: React__default.useMemo(() => value ? [value] : [], [value]),
        onItemOpen: setValue,
        onItemClose: React__default.useCallback(() => collapsible && setValue(""), [collapsible, setValue]),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionCollapsibleProvider, { scope: props.__scopeAccordion, collapsible, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImpl, { ...accordionSingleProps, ref: forwardedRef }) })
      }
    );
  }
);
var AccordionImplMultiple = React__default.forwardRef((props, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue,
    onValueChange = () => {
    },
    ...accordionMultipleProps
  } = props;
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue ?? [],
    onChange: onValueChange,
    caller: ACCORDION_NAME
  });
  const handleItemOpen = React__default.useCallback(
    (itemValue) => setValue((prevValue = []) => [...prevValue, itemValue]),
    [setValue]
  );
  const handleItemClose = React__default.useCallback(
    (itemValue) => setValue((prevValue = []) => prevValue.filter((value2) => value2 !== itemValue)),
    [setValue]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AccordionValueProvider,
    {
      scope: props.__scopeAccordion,
      value,
      onItemOpen: handleItemOpen,
      onItemClose: handleItemClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionCollapsibleProvider, { scope: props.__scopeAccordion, collapsible: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImpl, { ...accordionMultipleProps, ref: forwardedRef }) })
    }
  );
});
var [AccordionImplProvider, useAccordionContext] = createAccordionContext(ACCORDION_NAME);
var AccordionImpl = React__default.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, disabled, dir, orientation = "vertical", ...accordionProps } = props;
    const accordionRef = React__default.useRef(null);
    const composedRefs = useComposedRefs(accordionRef, forwardedRef);
    const getItems = useCollection(__scopeAccordion);
    const direction = useDirection(dir);
    const isDirectionLTR = direction === "ltr";
    const handleKeyDown = composeEventHandlers(props.onKeyDown, (event) => {
      if (!ACCORDION_KEYS.includes(event.key)) return;
      const target = event.target;
      const triggerCollection = getItems().filter((item) => !item.ref.current?.disabled);
      const triggerIndex = triggerCollection.findIndex((item) => item.ref.current === target);
      const triggerCount = triggerCollection.length;
      if (triggerIndex === -1) return;
      event.preventDefault();
      let nextIndex = triggerIndex;
      const homeIndex = 0;
      const endIndex = triggerCount - 1;
      const moveNext = () => {
        nextIndex = triggerIndex + 1;
        if (nextIndex > endIndex) {
          nextIndex = homeIndex;
        }
      };
      const movePrev = () => {
        nextIndex = triggerIndex - 1;
        if (nextIndex < homeIndex) {
          nextIndex = endIndex;
        }
      };
      switch (event.key) {
        case "Home":
          nextIndex = homeIndex;
          break;
        case "End":
          nextIndex = endIndex;
          break;
        case "ArrowRight":
          if (orientation === "horizontal") {
            if (isDirectionLTR) {
              moveNext();
            } else {
              movePrev();
            }
          }
          break;
        case "ArrowDown":
          if (orientation === "vertical") {
            moveNext();
          }
          break;
        case "ArrowLeft":
          if (orientation === "horizontal") {
            if (isDirectionLTR) {
              movePrev();
            } else {
              moveNext();
            }
          }
          break;
        case "ArrowUp":
          if (orientation === "vertical") {
            movePrev();
          }
          break;
      }
      const clampedIndex = nextIndex % triggerCount;
      triggerCollection[clampedIndex].ref.current?.focus();
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      AccordionImplProvider,
      {
        scope: __scopeAccordion,
        disabled,
        direction: dir,
        orientation,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Slot, { scope: __scopeAccordion, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            ...accordionProps,
            "data-orientation": orientation,
            ref: composedRefs,
            onKeyDown: disabled ? void 0 : handleKeyDown
          }
        ) })
      }
    );
  }
);
var ITEM_NAME = "AccordionItem";
var [AccordionItemProvider, useAccordionItemContext] = createAccordionContext(ITEM_NAME);
var AccordionItem$1 = React__default.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, value, ...accordionItemProps } = props;
    const accordionContext = useAccordionContext(ITEM_NAME, __scopeAccordion);
    const valueContext = useAccordionValueContext(ITEM_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    const triggerId = useId();
    const open = value && valueContext.value.includes(value) || false;
    const disabled = accordionContext.disabled || props.disabled;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      AccordionItemProvider,
      {
        scope: __scopeAccordion,
        open,
        disabled,
        triggerId,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Root,
          {
            "data-orientation": accordionContext.orientation,
            "data-state": getState(open),
            ...collapsibleScope,
            ...accordionItemProps,
            ref: forwardedRef,
            disabled,
            open,
            onOpenChange: (open2) => {
              if (open2) {
                valueContext.onItemOpen(value);
              } else {
                valueContext.onItemClose(value);
              }
            }
          }
        )
      }
    );
  }
);
AccordionItem$1.displayName = ITEM_NAME;
var HEADER_NAME = "AccordionHeader";
var AccordionHeader = React__default.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, ...headerProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(HEADER_NAME, __scopeAccordion);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.h3,
      {
        "data-orientation": accordionContext.orientation,
        "data-state": getState(itemContext.open),
        "data-disabled": itemContext.disabled ? "" : void 0,
        ...headerProps,
        ref: forwardedRef
      }
    );
  }
);
AccordionHeader.displayName = HEADER_NAME;
var TRIGGER_NAME = "AccordionTrigger";
var AccordionTrigger$1 = React__default.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, ...triggerProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(TRIGGER_NAME, __scopeAccordion);
    const collapsibleContext = useAccordionCollapsibleContext(TRIGGER_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.ItemSlot, { scope: __scopeAccordion, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Trigger,
      {
        "aria-disabled": itemContext.open && !collapsibleContext.collapsible || void 0,
        "data-orientation": accordionContext.orientation,
        id: itemContext.triggerId,
        ...collapsibleScope,
        ...triggerProps,
        ref: forwardedRef
      }
    ) });
  }
);
AccordionTrigger$1.displayName = TRIGGER_NAME;
var CONTENT_NAME = "AccordionContent";
var AccordionContent$1 = React__default.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, ...contentProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(CONTENT_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Content,
      {
        role: "region",
        "aria-labelledby": itemContext.triggerId,
        "data-orientation": accordionContext.orientation,
        ...collapsibleScope,
        ...contentProps,
        ref: forwardedRef,
        style: {
          ["--radix-accordion-content-height"]: "var(--radix-collapsible-content-height)",
          ["--radix-accordion-content-width"]: "var(--radix-collapsible-content-width)",
          ...props.style
        }
      }
    );
  }
);
AccordionContent$1.displayName = CONTENT_NAME;
function getState(open) {
  return open ? "open" : "closed";
}
var Root2 = Accordion$1;
var Item = AccordionItem$1;
var Header = AccordionHeader;
var Trigger2 = AccordionTrigger$1;
var Content2 = AccordionContent$1;
const LAYER_LABEL$1 = {
  default: "Windows 默认层",
  fn: "Windows Fn 层",
  mac: "Mac 默认层",
  macFn: "Mac Fn 层"
};
function keycapLabel(text, className) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("w-full min-w-0 text-center leading-tight line-clamp-2 break-all", className), children: text });
}
function renderKeyButton(result, fallbackLabel) {
  if (!result) return keycapLabel(fallbackLabel);
  switch (result.type) {
    case "text":
      return keycapLabel(result.text);
    case "fn":
      return keycapLabel(result.isLongPress ? `${result.text}-长按` : result.text, "text-3xs");
    case "icon":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full min-w-0 items-center justify-center flex-col", children: [
        result.icon,
        result.text ? keycapLabel(result.text) : null
      ] });
    case "command":
      return result.label ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full min-w-0 items-center justify-center flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Command, {}),
        keycapLabel(result.label)
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Command, {});
  }
}
function getKeyButtonDisplayText(result, fallbackLabel) {
  if (!result) return fallbackLabel;
  switch (result.type) {
    case "text":
      return result.text;
    case "fn":
      return result.isLongPress ? `${result.text}-长按` : result.text;
    case "icon":
      return result.text ?? fallbackLabel;
    case "command":
      return result.label ?? fallbackLabel;
  }
}
function composeKeyTitle(displayText, keyCodeLabel, hint) {
  const parts = [];
  if (displayText) parts.push(displayText);
  if (keyCodeLabel && keyCodeLabel !== displayText) parts.push(keyCodeLabel);
  if (hint) parts.push(hint);
  return parts.join(" · ");
}
function getKeyLabel(item) {
  if (item.key?.length) return item.key.join("");
  return item.code ?? "";
}
function getKeyId(item, rowIndex) {
  if (item.index !== void 0) return String(item.index);
  const fallback = item.code ?? getKeyLabel(item);
  return `${rowIndex}-${fallback}`;
}
function KeyItem(t0) {
  const $ = compilerRuntimeExports.c(81);
  const {
    item,
    keyId
  } = t0;
  const {
    selectTarget,
    isTargetSelected
  } = usePressKeyRemap();
  const productId = useDeviceInfoStore(_temp$g);
  let t1;
  let t2;
  if ($[0] !== productId) {
    t1 = () => IS_ELECTRON && productId ? db.customKeysSettings.get(productId) : void 0;
    t2 = [productId];
    $[0] = productId;
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  const customKeys = useLiveQuery(t1, t2);
  let t3;
  if ($[3] !== customKeys?.items) {
    bb0: {
      const map = /* @__PURE__ */ new Map();
      if (!IS_ELECTRON) {
        t3 = map;
        break bb0;
      }
      const items = customKeys?.items ?? [];
      for (const k of items) {
        map.set(k.slot, k);
      }
      t3 = map;
    }
    $[3] = customKeys?.items;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  const customKeyBySlot = t3;
  const currentLayer = useKeyboardStore(_temp2$9);
  const defaultKeyRect = useKeyboardStore(_temp3$7);
  const macDefaultKeyRect = useKeyboardStore(_temp4$5);
  const defaultFnKeyRect = useKeyboardStore(_temp5$4);
  const macFnDefaultKeyRect = useKeyboardStore(_temp6$4);
  const fnLockList = useKeyboardStore(_temp7$3);
  const currentKeyRect = useKeyboardStore(_temp8$1);
  const currentFnKeyRect = useKeyboardStore(_temp9$1);
  const macCurrentKeyRect = useKeyboardStore(_temp0$1);
  const macCurrentFnKeyRect = useKeyboardStore(_temp1);
  let t4;
  if ($[5] !== currentFnKeyRect || $[6] !== currentKeyRect || $[7] !== macCurrentFnKeyRect || $[8] !== macCurrentKeyRect) {
    t4 = {
      default: currentKeyRect,
      fn: currentFnKeyRect,
      mac: macCurrentKeyRect,
      macFn: macCurrentFnKeyRect
    };
    $[5] = currentFnKeyRect;
    $[6] = currentKeyRect;
    $[7] = macCurrentFnKeyRect;
    $[8] = macCurrentKeyRect;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  const activeKeyRect = t4;
  const keyRect = activeKeyRect[currentLayer];
  const defaultRect = currentLayer === "fn" ? defaultFnKeyRect : currentLayer === "macFn" ? macFnDefaultKeyRect : void 0;
  const keyButtonText = useKeyButtonText(item, keyRect, defaultRect);
  let t5;
  bb1: {
    if (!IS_ELECTRON) {
      t5 = null;
      break bb1;
    }
    if (item.index === void 0 || !keyRect) {
      t5 = null;
      break bb1;
    }
    const b0 = keyRect[item.index];
    const b1 = keyRect[item.index + 1];
    const b2 = keyRect[item.index + 2];
    if (b0 !== CUSTOM_KEY_TYPE_BYTE || b2 !== CUSTOM_KEY_HIGH_BYTE) {
      t5 = null;
      break bb1;
    }
    if (typeof b1 !== "number") {
      t5 = null;
      break bb1;
    }
    let t62;
    if ($[10] !== b1 || $[11] !== customKeyBySlot) {
      t62 = customKeyBySlot.get(b1);
      $[10] = b1;
      $[11] = customKeyBySlot;
      $[12] = t62;
    } else {
      t62 = $[12];
    }
    const found = t62;
    t5 = found ?? null;
  }
  const customKeyPreview = t5;
  const badgeKeyRect = currentLayer === "mac" ? currentKeyRect : keyRect;
  let t6;
  bb2: {
    const tripletBase = item.index;
    const mode = tripletBase !== void 0 ? badgeKeyRect?.[tripletBase] : void 0;
    if (mode !== void 0 && mode >= 128 && mode <= 133) {
      const badgeColor = MODE_BADGE_COLORS[mode] || "bg-muted-foreground";
      const t72 = `text-3xs ${badgeColor} rounded-full px-1 text-white`;
      const t82 = SPECIAL_MODE_LABELS[mode];
      let t92;
      if ($[13] !== t72 || $[14] !== t82) {
        t92 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: t72, children: t82 });
        $[13] = t72;
        $[14] = t82;
        $[15] = t92;
      } else {
        t92 = $[15];
      }
      t6 = t92;
      break bb2;
    }
    t6 = "";
  }
  const advancedKeyText = t6;
  let t7;
  if ($[16] !== currentLayer || $[17] !== defaultRect || $[18] !== fnLockList || $[19] !== item.index || $[20] !== keyRect) {
    t7 = isFnLayerTargetLocked(currentLayer, item.index, keyRect, defaultRect, fnLockList);
    $[16] = currentLayer;
    $[17] = defaultRect;
    $[18] = fnLockList;
    $[19] = item.index;
    $[20] = keyRect;
    $[21] = t7;
  } else {
    t7 = $[21];
  }
  const isrealHaveFnLockText = t7;
  let t8;
  if ($[22] !== defaultKeyRect || $[23] !== macDefaultKeyRect) {
    t8 = getReservedWakeFnSlotIndex({
      defaultKeyRect,
      macDefaultKeyRect
    });
    $[22] = defaultKeyRect;
    $[23] = macDefaultKeyRect;
    $[24] = t8;
  } else {
    t8 = $[24];
  }
  const reservedSlotIndex = t8;
  const isReservedWakeFnSlot = item.index !== void 0 && reservedSlotIndex !== null && item.index === reservedSlotIndex;
  const selected = item.index !== void 0 && isTargetSelected(item.index);
  const nonEditable = isrealHaveFnLockText || isReservedWakeFnSlot;
  const isAdvancedKeySlot = item.index !== void 0 && isAdvancedKeyTriplet(badgeKeyRect, item.index);
  const isMacDefaultLayer = currentLayer === "mac";
  const {
    setNodeRef,
    isOver
  } = useDroppable({
    id: `target-${keyId}`,
    data: {
      kind: "targetKey",
      index: item.index
    },
    disabled: item.index === void 0 || nonEditable || isAdvancedKeySlot
  });
  const canRemap = item.index !== void 0 && !nonEditable && !isAdvancedKeySlot;
  const canClickKey = item.index !== void 0 && !nonEditable;
  const [resetDialogOpen, setResetDialogOpen] = reactExports.useState(false);
  let t9;
  if ($[25] !== item.index || $[26] !== setResetDialogOpen) {
    t9 = () => {
      if (item.index === void 0) {
        return;
      }
      setResetDialogOpen(true);
    };
    $[25] = item.index;
    $[26] = setResetDialogOpen;
    $[27] = t9;
  } else {
    t9 = $[27];
  }
  const {
    onTriggerClick: onSequentialResetClick,
    isArmed: isResetArmed
  } = useSequentialClickConfirm(t9, 800);
  let t10;
  if ($[28] !== item) {
    t10 = item.code ?? getKeyLabel(item);
    $[28] = item;
    $[29] = t10;
  } else {
    t10 = $[29];
  }
  const keyTitleLabel = t10;
  let t11;
  if ($[30] !== customKeyPreview?.name || $[31] !== item || $[32] !== keyButtonText) {
    t11 = customKeyPreview?.name ?? getKeyButtonDisplayText(keyButtonText, getKeyLabel(item));
    $[30] = customKeyPreview?.name;
    $[31] = item;
    $[32] = keyButtonText;
    $[33] = t11;
  } else {
    t11 = $[33];
  }
  const keycapDisplayText = t11;
  let t12;
  if ($[34] !== keyTitleLabel || $[35] !== keycapDisplayText) {
    t12 = composeKeyTitle(keycapDisplayText, keyTitleLabel);
    $[34] = keyTitleLabel;
    $[35] = keycapDisplayText;
    $[36] = t12;
  } else {
    t12 = $[36];
  }
  const keyHoverTitle = t12;
  let t13;
  if ($[37] !== item.index || $[38] !== setResetDialogOpen) {
    t13 = () => {
      setResetDialogOpen(false);
      if (item.index === void 0) {
        return;
      }
      restoreKeySlotToDefault(item.index);
    };
    $[37] = item.index;
    $[38] = setResetDialogOpen;
    $[39] = t13;
  } else {
    t13 = $[39];
  }
  const handleConfirmRestoreKey = t13;
  const T0 = AlertDialog;
  const t14 = "button";
  const t15 = canClickKey ? 0 : -1;
  const t16 = keyHoverTitle || keyTitleLabel;
  const t17 = canRemap ? selected : void 0;
  const t18 = (e) => {
    if (!canClickKey || item.index === void 0) {
      return;
    }
    if (isAdvancedKeySlot) {
      if (isMacDefaultLayer) {
        return;
      }
      onSequentialResetClick(e);
      return;
    }
    selectTarget(item.index);
    onSequentialResetClick(e);
  };
  const t19 = cn("absolute size-[3.35rem] cursor-pointer select-none", "flex items-center justify-center rounded px-1.5", "border border-white/35 bg-white/18", "font-medium text-xs font-sans text-foreground/70", "shadow-[0_1px_0_rgba(255,255,255,0.75)_inset,0_5px_12px_oklch(0.36_0.05_265/0.1)] transition-all duration-150 ease-out", "hover:border-primary/45 hover:bg-primary/8 hover:text-foreground hover:shadow-[0_0_10px_1px_var(--glow-primary)]", "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/60 focus-visible:ring-offset-0", "active:scale-[0.96] active:bg-primary/20", "dark:border-white/10 dark:bg-[oklch(0.2_0.03_270/0.62)] dark:text-white/62 dark:shadow-[0_1px_0_rgba(255,255,255,0.07)_inset,0_4px_10px_oklch(0_0_0/0.22)]", "dark:hover:border-primary/45 dark:hover:bg-primary/15 dark:hover:text-white/86", selected && "ring-2 ring-primary/65 border-primary/65 bg-primary/12 shadow-[0_0_12px_1px_var(--glow-primary)]", isOver && canRemap && "ring-2 ring-primary/70 bg-primary/15", nonEditable ? "bg-red-500/30 text-red-500 select-none pointer-events-none cursor-not-allowed" : "", isAdvancedKeySlot && "border-amber-400/40", item.class);
  let t20;
  if ($[40] !== canRemap || $[41] !== isAdvancedKeySlot || $[42] !== isMacDefaultLayer || $[43] !== isReservedWakeFnSlot || $[44] !== isResetArmed || $[45] !== keyHoverTitle || $[46] !== keyTitleLabel || $[47] !== keycapDisplayText) {
    t20 = isReservedWakeFnSlot ? composeKeyTitle(keycapDisplayText, keyTitleLabel, "该键为系统保留键（默认层 WakeUp / Fn 层 Fn），不可修改") : isAdvancedKeySlot ? isMacDefaultLayer ? composeKeyTitle(keycapDisplayText, keyTitleLabel, "已配置高级键，改建请前往「高级键」页面") : composeKeyTitle(keycapDisplayText, keyTitleLabel, "已配置高级键，改建请前往「高级键」页面；连续快速点击两次可打开恢复默认确认") : canRemap ? isResetArmed ? composeKeyTitle(keycapDisplayText, keyTitleLabel, "再次点击或双击以打开恢复确认") : composeKeyTitle(keycapDisplayText, keyTitleLabel, "连续快速点击两次或双击可打开恢复确认") : keyHoverTitle;
    $[40] = canRemap;
    $[41] = isAdvancedKeySlot;
    $[42] = isMacDefaultLayer;
    $[43] = isReservedWakeFnSlot;
    $[44] = isResetArmed;
    $[45] = keyHoverTitle;
    $[46] = keyTitleLabel;
    $[47] = keycapDisplayText;
    $[48] = t20;
  } else {
    t20 = $[48];
  }
  let t21;
  if ($[49] !== customKeyPreview || $[50] !== item || $[51] !== keyButtonText) {
    t21 = customKeyPreview ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      customKeyPreview.coverImage ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: customKeyPreview.coverImage, alt: customKeyPreview.name, draggable: false, className: "size-5 shrink-0 rounded object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex size-5 shrink-0 items-center justify-center rounded bg-primary/15 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AppWindow, { className: "size-3" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block w-full truncate text-3xs text-center leading-tight", title: customKeyPreview.name, children: customKeyPreview.name })
    ] }) : renderKeyButton(keyButtonText, getKeyLabel(item));
    $[49] = customKeyPreview;
    $[50] = item;
    $[51] = keyButtonText;
    $[52] = t21;
  } else {
    t21 = $[52];
  }
  let t22;
  if ($[53] !== advancedKeyText || $[54] !== t21) {
    t22 = /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative z-10 pointer-events-none flex w-full min-w-0 flex-col items-center justify-center gap-0.5", children: [
      t21,
      advancedKeyText
    ] });
    $[53] = advancedKeyText;
    $[54] = t21;
    $[55] = t22;
  } else {
    t22 = $[55];
  }
  let t23;
  if ($[56] !== setNodeRef || $[57] !== t15 || $[58] !== t16 || $[59] !== t17 || $[60] !== t18 || $[61] !== t19 || $[62] !== t20 || $[63] !== t22) {
    t23 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: setNodeRef, role: t14, tabIndex: t15, "aria-label": t16, "aria-pressed": t17, onClick: t18, className: t19, title: t20, children: t22 });
    $[56] = setNodeRef;
    $[57] = t15;
    $[58] = t16;
    $[59] = t17;
    $[60] = t18;
    $[61] = t19;
    $[62] = t20;
    $[63] = t22;
    $[64] = t23;
  } else {
    t23 = $[64];
  }
  let t24;
  if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
    t24 = /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: "恢复键位为默认" });
    $[65] = t24;
  } else {
    t24 = $[65];
  }
  const t25 = LAYER_LABEL$1[currentLayer];
  let t26;
  if ($[66] !== keyTitleLabel || $[67] !== t25) {
    t26 = /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
      t24,
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogDescription, { children: [
        "将把「",
        keyTitleLabel,
        "」在",
        t25,
        "的映射恢复为默认。此操作可在确认前取消。"
      ] })
    ] });
    $[66] = keyTitleLabel;
    $[67] = t25;
    $[68] = t26;
  } else {
    t26 = $[68];
  }
  let t27;
  if ($[69] === Symbol.for("react.memo_cache_sentinel")) {
    t27 = /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { type: "button", children: "取消" });
    $[69] = t27;
  } else {
    t27 = $[69];
  }
  let t28;
  if ($[70] !== handleConfirmRestoreKey) {
    t28 = /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
      t27,
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { type: "button", onClick: handleConfirmRestoreKey, children: "确认" })
    ] });
    $[70] = handleConfirmRestoreKey;
    $[71] = t28;
  } else {
    t28 = $[71];
  }
  let t29;
  if ($[72] !== t26 || $[73] !== t28) {
    t29 = /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
      t26,
      t28
    ] });
    $[72] = t26;
    $[73] = t28;
    $[74] = t29;
  } else {
    t29 = $[74];
  }
  let t30;
  if ($[75] !== T0 || $[76] !== resetDialogOpen || $[77] !== setResetDialogOpen || $[78] !== t23 || $[79] !== t29) {
    t30 = /* @__PURE__ */ jsxRuntimeExports.jsxs(T0, { open: resetDialogOpen, onOpenChange: setResetDialogOpen, children: [
      t23,
      t29
    ] });
    $[75] = T0;
    $[76] = resetDialogOpen;
    $[77] = setResetDialogOpen;
    $[78] = t23;
    $[79] = t29;
    $[80] = t30;
  } else {
    t30 = $[80];
  }
  return t30;
}
function _temp1(s_9) {
  return s_9.macCurrentFnKeyRect;
}
function _temp0$1(s_8) {
  return s_8.macCurrentKeyRect;
}
function _temp9$1(s_7) {
  return s_7.currentFnKeyRect;
}
function _temp8$1(s_6) {
  return s_6.currentKeyRect;
}
function _temp7$3(s_5) {
  return s_5.fnLockList;
}
function _temp6$4(s_4) {
  return s_4.macFnDefaultKeyRect;
}
function _temp5$4(s_3) {
  return s_3.defaultFnKeyRect;
}
function _temp4$5(s_2) {
  return s_2.macDefaultKeyRect;
}
function _temp3$7(s_1) {
  return s_1.defaultKeyRect;
}
function _temp2$9(s_0) {
  return s_0.currentLayer;
}
function _temp$g(s) {
  return s.deviceInfoData._productId;
}
function mergeDefaultKeyRectPreservingAdvancedSlots(def, current) {
  const next = [...def];
  for (let i = 0; i < next.length; i += 3) {
    const b0 = current[i];
    if (b0 !== void 0 && ADVANCED_KEY_TYPES.has(b0)) {
      next[i] = current[i];
      next[i + 1] = current[i + 1];
      next[i + 2] = current[i + 2];
    }
  }
  return next;
}
const LAYER_RESTORE_OPS = {
  default: async (api) => {
    const def = await api.getDefaultKeyRect();
    const current = api.currentKeyRect;
    const merged = mergeDefaultKeyRectPreservingAdvancedSlots(def, current);
    await api.setCurrentKeyRect(merged);
    await api.getCurrentKeyRect();
  },
  fn: async (api) => {
    const def = await api.getDefaultFnKeyRect();
    await api.setCurrentFnKeyRect([...def]);
    await api.getCurrentFnKeyRect();
  },
  mac: async (api) => {
    const def = await api.getMacDefaultKeyRect();
    await api.setMacCurrentKeyRect([...def]);
    await api.getMacCurrentKeyRect();
  },
  macFn: async (api) => {
    const def = await api.getMacFnDefaultKeyRect();
    await api.setCurrentFnMacKeyRect([...def]);
    await api.getCurrentMacFnKeyRect();
  }
};
async function restoreLayerToDefault(layer, api) {
  try {
    await LAYER_RESTORE_OPS[layer](api);
  } catch {
    throw new Error(`${LAYER_LABEL[layer]}恢复失败`);
  }
}
function KeyboardGrid(t0) {
  const $ = compilerRuntimeExports.c(10);
  const {
    layout,
    width,
    height,
    backgroundImage
  } = t0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = cn("relative w-fit max-w-full overflow-hidden rounded-[1.15rem]", "drop-shadow-[0_10px_16px_oklch(0.44_0.08_265/0.14)]", "before:pointer-events-none before:absolute before:inset-3 before:rounded-2xl before:bg-white/18 before:blur-xl", "after:pointer-events-none after:absolute after:inset-x-10 after:bottom-2 after:h-8 after:rounded-full after:bg-violet-400/16 after:blur-2xl", "dark:drop-shadow-[0_14px_22px_oklch(0_0_0/0.38)] dark:before:bg-violet-300/5 dark:after:bg-violet-400/10");
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const t2 = `url(${backgroundImage})`;
  let t3;
  if ($[1] !== height || $[2] !== t2 || $[3] !== width) {
    t3 = {
      backgroundImage: t2,
      backgroundSize: "100% 100%",
      width,
      height
    };
    $[1] = height;
    $[2] = t2;
    $[3] = width;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] !== layout) {
    t4 = layout.flatMap(_temp$f);
    $[5] = layout;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] !== t3 || $[8] !== t4) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: t1, role: "region", "aria-label": "键盘布局预览", style: t3, children: t4 });
    $[7] = t3;
    $[8] = t4;
    $[9] = t5;
  } else {
    t5 = $[9];
  }
  return t5;
}
function _temp$f(row, rowIndex) {
  return row.map((item) => {
    const keyId = getKeyId(item, rowIndex);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(KeyItem, { keyId, item }, keyId);
  });
}
const LAYER_LABEL = {
  default: "Windows 默认层",
  fn: "Windows Fn 层",
  mac: "Mac 默认层",
  macFn: "Mac Fn 层"
};
function restoreDialogCopy(target) {
  if (!target) {
    return {
      title: "",
      description: ""
    };
  }
  if (target.kind === "all") {
    return {
      title: "恢复默认所有层",
      description: "将把当前已启用的各层按键映射恢复为出厂默认。此操作通常不可撤销，是否继续？"
    };
  }
  return {
    title: `恢复${LAYER_LABEL[target.layer]}`,
    description: `将把${LAYER_LABEL[target.layer]}的按键映射恢复为出厂默认。是否继续？`
  };
}
function LayerButtonGroupRow(t0) {
  const $ = compilerRuntimeExports.c(23);
  const {
    ariaGroupLabel,
    label,
    Icon,
    isActive,
    onSelect,
    onRequestRestore,
    className
  } = t0;
  let t1;
  if ($[0] !== className) {
    t1 = cn("w-full max-w-full overflow-hidden rounded-xl border-white/70 bg-white/58 shadow-sm dark:border-white/8 dark:bg-white/8 dark:hover:border-primary/30 dark:hover:shadow-[0_0_8px_var(--glow-primary)]", className);
    $[0] = className;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const t2 = isActive ? "bg-primary/15 text-primary hover:bg-primary/20 dark:bg-primary/18" : "bg-transparent text-foreground/76 hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/15";
  let t3;
  if ($[2] !== t2) {
    t3 = cn("min-w-0 flex-1 cursor-pointer justify-start gap-2 border-0 shadow-none transition-all", t2);
    $[2] = t2;
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] !== Icon) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-3.5 shrink-0" });
    $[4] = Icon;
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  let t5;
  if ($[6] !== label) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs min-w-14 text-left", children: label });
    $[6] = label;
    $[7] = t5;
  } else {
    t5 = $[7];
  }
  let t6;
  if ($[8] !== onSelect || $[9] !== t3 || $[10] !== t4 || $[11] !== t5) {
    t6 = /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "outline", className: t3, onClick: onSelect, children: [
      t4,
      t5
    ] });
    $[8] = onSelect;
    $[9] = t3;
    $[10] = t4;
    $[11] = t5;
    $[12] = t6;
  } else {
    t6 = $[12];
  }
  let t7;
  if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ jsxRuntimeExports.jsx(ButtonGroupSeparator, { orientation: "vertical" });
    $[13] = t7;
  } else {
    t7 = $[13];
  }
  const t8 = `将${label}恢复为默认映射`;
  let t9;
  if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
    t9 = /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "size-4", "aria-hidden": true });
    $[14] = t9;
  } else {
    t9 = $[14];
  }
  let t10;
  if ($[15] !== onRequestRestore || $[16] !== t8) {
    t10 = /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", size: "icon", className: "shrink-0 cursor-pointer border-0 bg-transparent shadow-none hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/15", "aria-label": t8, onClick: onRequestRestore, children: t9 });
    $[15] = onRequestRestore;
    $[16] = t8;
    $[17] = t10;
  } else {
    t10 = $[17];
  }
  let t11;
  if ($[18] !== ariaGroupLabel || $[19] !== t1 || $[20] !== t10 || $[21] !== t6) {
    t11 = /* @__PURE__ */ jsxRuntimeExports.jsxs(ButtonGroup, { "aria-label": ariaGroupLabel, className: t1, children: [
      t6,
      t7,
      t10
    ] });
    $[18] = ariaGroupLabel;
    $[19] = t1;
    $[20] = t10;
    $[21] = t6;
    $[22] = t11;
  } else {
    t11 = $[22];
  }
  return t11;
}
function KeySelectionControls() {
  const $ = compilerRuntimeExports.c(58);
  const showFnLayer = useKeyboardStore(_temp2$8);
  const showMacLayer = useKeyboardStore(_temp3$6);
  const showMacFnLayer = useKeyboardStore(_temp4$4);
  const currentLayer = useKeyboardStore(_temp5$3);
  const setCurrentLayer = useKeyboardStore(_temp6$3);
  const currentFunctionalAreaData = useFunctionalAreaStore(_temp7$2);
  const setFunctionalAreaInfo = useFunctionalAreaStore(_temp8);
  const getCurrentFunctionalAreaData = useFunctionalAreaStore(_temp9);
  const [restoreOpen, setRestoreOpen] = reactExports.useState(false);
  const [restoreTarget, setRestoreTarget] = reactExports.useState(null);
  let t0;
  if ($[0] !== currentFunctionalAreaData || $[1] !== getCurrentFunctionalAreaData || $[2] !== setFunctionalAreaInfo) {
    t0 = async (index, data) => {
      const newarr = [...currentFunctionalAreaData];
      newarr[index] = data;
      await setFunctionalAreaInfo(newarr);
      await getCurrentFunctionalAreaData();
    };
    $[0] = currentFunctionalAreaData;
    $[1] = getCurrentFunctionalAreaData;
    $[2] = setFunctionalAreaInfo;
    $[3] = t0;
  } else {
    t0 = $[3];
  }
  const handleSetFunctionalAreaInfo = t0;
  let t1;
  if ($[4] !== handleSetFunctionalAreaInfo || $[5] !== setCurrentLayer) {
    t1 = async (layer) => {
      setCurrentLayer(layer);
      if (["default", "fn"].includes(layer)) {
        await handleSetFunctionalAreaInfo(26, 0);
      } else {
        if (["mac", "macFn"].includes(layer)) {
          await handleSetFunctionalAreaInfo(26, 1);
        }
      }
    };
    $[4] = handleSetFunctionalAreaInfo;
    $[5] = setCurrentLayer;
    $[6] = t1;
  } else {
    t1 = $[6];
  }
  const handleChangeLayer = t1;
  let t2;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = (target) => {
      setRestoreTarget(target);
      setRestoreOpen(true);
    };
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  const openRestoreDialog = t2;
  let t3;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = (open) => {
      setRestoreOpen(open);
      if (!open) {
        setRestoreTarget(null);
      }
    };
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  const handleRestoreOpenChange = t3;
  let t4;
  if ($[9] !== restoreTarget || $[10] !== showFnLayer || $[11] !== showMacFnLayer || $[12] !== showMacLayer) {
    t4 = async () => {
      const target_0 = restoreTarget;
      if (!target_0) {
        return;
      }
      setRestoreOpen(false);
      setRestoreTarget(null);
      const api = useKeyboardStore.getState();
      if (target_0.kind !== "all") {
        try {
          await restoreLayerToDefault(target_0.layer, api);
          toast.success(`${LAYER_LABEL[target_0.layer]}已恢复为默认映射`);
        } catch {
          toast.error(`${LAYER_LABEL[target_0.layer]}恢复失败`);
        }
        return;
      }
      const layers = ["default", ...showFnLayer ? ["fn"] : [], ...showMacLayer ? ["mac"] : [], ...showMacFnLayer ? ["macFn"] : []];
      const failed = [];
      for (const layer_0 of layers) {
        try {
          await restoreLayerToDefault(layer_0, api);
        } catch {
          failed.push(LAYER_LABEL[layer_0]);
        }
      }
      if (failed.length === 0) {
        toast.success("已恢复所有层为默认映射");
      } else {
        if (failed.length === layers.length) {
          toast.error("恢复失败");
        } else {
          toast.warning(`部分恢复失败：${failed.join("、")}`);
        }
      }
    };
    $[9] = restoreTarget;
    $[10] = showFnLayer;
    $[11] = showMacFnLayer;
    $[12] = showMacLayer;
    $[13] = t4;
  } else {
    t4 = $[13];
  }
  const handleConfirmRestore = t4;
  let t5;
  if ($[14] !== restoreTarget) {
    t5 = restoreDialogCopy(restoreTarget);
    $[14] = restoreTarget;
    $[15] = t5;
  } else {
    t5 = $[15];
  }
  const {
    title: dialogTitle,
    description: dialogDescription
  } = t5;
  let t6;
  if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
    t6 = cn("flex w-40 flex-col gap-2.5 rounded-2xl border border-white/65 bg-white/58 p-2.5", "shadow-[0_8px_18px_oklch(0.42_0.08_265/0.09),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl", "dark:border-white/10 dark:bg-[oklch(0.17_0.035_270/0.72)] dark:shadow-[0_10px_22px_oklch(0_0_0/0.28),inset_0_1px_0_rgba(255,255,255,0.07)]");
    $[16] = t6;
  } else {
    t6 = $[16];
  }
  let t7;
  if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "outline", className: "h-9 cursor-pointer justify-start gap-2 rounded-xl border-white/70 bg-white/70 text-foreground/80 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary dark:border-white/8 dark:bg-white/8 dark:hover:border-primary/40 dark:hover:bg-primary/15", onClick: () => openRestoreDialog({
      kind: "all"
    }), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "size-4" }),
      "恢复默认"
    ] });
    $[17] = t7;
  } else {
    t7 = $[17];
  }
  const t8 = currentLayer === "default";
  let t9;
  if ($[18] !== handleChangeLayer) {
    t9 = () => handleChangeLayer("default");
    $[18] = handleChangeLayer;
    $[19] = t9;
  } else {
    t9 = $[19];
  }
  let t10;
  if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
    t10 = () => openRestoreDialog({
      kind: "layer",
      layer: "default"
    });
    $[20] = t10;
  } else {
    t10 = $[20];
  }
  let t11;
  if ($[21] !== t8 || $[22] !== t9) {
    t11 = /* @__PURE__ */ jsxRuntimeExports.jsx(LayerButtonGroupRow, { ariaGroupLabel: "Windows 默认层：选择或恢复", label: "默认层", Icon: FaWindows, isActive: t8, onSelect: t9, onRequestRestore: t10 });
    $[21] = t8;
    $[22] = t9;
    $[23] = t11;
  } else {
    t11 = $[23];
  }
  let t12;
  if ($[24] !== currentLayer || $[25] !== handleChangeLayer || $[26] !== showFnLayer) {
    t12 = showFnLayer && /* @__PURE__ */ jsxRuntimeExports.jsx(LayerButtonGroupRow, { ariaGroupLabel: "Windows Fn 层：选择或恢复", label: "Fn层", Icon: FaWindows, isActive: currentLayer === "fn", onSelect: () => handleChangeLayer("fn"), onRequestRestore: () => openRestoreDialog({
      kind: "layer",
      layer: "fn"
    }) });
    $[24] = currentLayer;
    $[25] = handleChangeLayer;
    $[26] = showFnLayer;
    $[27] = t12;
  } else {
    t12 = $[27];
  }
  let t13;
  if ($[28] !== currentLayer || $[29] !== handleChangeLayer || $[30] !== showMacLayer) {
    t13 = showMacLayer && /* @__PURE__ */ jsxRuntimeExports.jsx(LayerButtonGroupRow, { ariaGroupLabel: "Mac 默认层：选择或恢复", label: "默认层", Icon: FaApple, isActive: currentLayer === "mac", onSelect: () => handleChangeLayer("mac"), onRequestRestore: () => openRestoreDialog({
      kind: "layer",
      layer: "mac"
    }) });
    $[28] = currentLayer;
    $[29] = handleChangeLayer;
    $[30] = showMacLayer;
    $[31] = t13;
  } else {
    t13 = $[31];
  }
  let t14;
  if ($[32] !== currentLayer || $[33] !== handleChangeLayer || $[34] !== showMacFnLayer) {
    t14 = showMacFnLayer && /* @__PURE__ */ jsxRuntimeExports.jsx(LayerButtonGroupRow, { ariaGroupLabel: "Mac Fn 层：选择或恢复", label: "Fn层", Icon: FaApple, isActive: currentLayer === "macFn", onSelect: () => handleChangeLayer("macFn"), onRequestRestore: () => openRestoreDialog({
      kind: "layer",
      layer: "macFn"
    }) });
    $[32] = currentLayer;
    $[33] = handleChangeLayer;
    $[34] = showMacFnLayer;
    $[35] = t14;
  } else {
    t14 = $[35];
  }
  let t15;
  if ($[36] !== t11 || $[37] !== t12 || $[38] !== t13 || $[39] !== t14) {
    t15 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: t6, children: [
      t7,
      t11,
      t12,
      t13,
      t14
    ] });
    $[36] = t11;
    $[37] = t12;
    $[38] = t13;
    $[39] = t14;
    $[40] = t15;
  } else {
    t15 = $[40];
  }
  let t16;
  if ($[41] !== dialogTitle) {
    t16 = /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: dialogTitle });
    $[41] = dialogTitle;
    $[42] = t16;
  } else {
    t16 = $[42];
  }
  let t17;
  if ($[43] !== dialogDescription) {
    t17 = /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { children: dialogDescription });
    $[43] = dialogDescription;
    $[44] = t17;
  } else {
    t17 = $[44];
  }
  let t18;
  if ($[45] !== t16 || $[46] !== t17) {
    t18 = /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
      t16,
      t17
    ] });
    $[45] = t16;
    $[46] = t17;
    $[47] = t18;
  } else {
    t18 = $[47];
  }
  let t19;
  if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
    t19 = /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { type: "button", children: "取消" });
    $[48] = t19;
  } else {
    t19 = $[48];
  }
  let t20;
  if ($[49] !== handleConfirmRestore) {
    t20 = /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
      t19,
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { type: "button", onClick: handleConfirmRestore, children: "确认" })
    ] });
    $[49] = handleConfirmRestore;
    $[50] = t20;
  } else {
    t20 = $[50];
  }
  let t21;
  if ($[51] !== t18 || $[52] !== t20) {
    t21 = /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
      t18,
      t20
    ] });
    $[51] = t18;
    $[52] = t20;
    $[53] = t21;
  } else {
    t21 = $[53];
  }
  let t22;
  if ($[54] !== restoreOpen || $[55] !== t15 || $[56] !== t21) {
    t22 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col justify-center pl-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialog, { open: restoreOpen, onOpenChange: handleRestoreOpenChange, children: [
      t15,
      t21
    ] }) });
    $[54] = restoreOpen;
    $[55] = t15;
    $[56] = t21;
    $[57] = t22;
  } else {
    t22 = $[57];
  }
  return t22;
}
function _temp9(s_6) {
  return s_6.getCurrentFunctionalAreaData;
}
function _temp8(s_5) {
  return s_5.setFunctionalAreaInfo;
}
function _temp7$2(s_4) {
  return s_4.currentFunctionalAreaData;
}
function _temp6$3(s_3) {
  return s_3.setCurrentLayer;
}
function _temp5$3(s_2) {
  return s_2.currentLayer;
}
function _temp4$4(s_1) {
  return s_1.showMacFnLayer;
}
function _temp3$6(s_0) {
  return s_0.showMacLayer;
}
function _temp2$8(s) {
  return s.showFnLayer;
}
const PressKeyKeyboard = () => {
  const $ = compilerRuntimeExports.c(14);
  const deviceConfig = useDeviceConfig();
  const {
    resolvedTheme
  } = z();
  const keyboardLayout = deviceConfig?.keyboardLayout;
  const layout = useResolvedKeyboardLayoutItems(keyboardLayout);
  const rectBackgroundImageMap = deviceConfig?.rectBackgroundImageMap;
  const resolvedLayout = useResolvedKeyboardLayout(layout);
  const initialSyncDone = useKeyboardDriverSyncStore(_temp0);
  if (!layout?.length) {
    let t02;
    if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
      t02 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border/60 bg-muted/20 px-6 py-4 text-center text-sm text-muted-foreground", children: "暂无键盘布局" });
      $[0] = t02;
    } else {
      t02 = $[0];
    }
    return t02;
  }
  if (!rectBackgroundImageMap) {
    return null;
  }
  const backgroundImage = resolvedTheme === "dark" ? rectBackgroundImageMap.dark : rectBackgroundImageMap.light;
  if (!initialSyncDone) {
    const t02 = keyboardLayout?.width;
    const t12 = keyboardLayout?.height;
    let t22;
    if ($[1] !== backgroundImage || $[2] !== layout || $[3] !== t02 || $[4] !== t12) {
      t22 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(KeyboardLayoutSkeleton, { layout, width: t02, height: t12, backgroundImage }) });
      $[1] = backgroundImage;
      $[2] = layout;
      $[3] = t02;
      $[4] = t12;
      $[5] = t22;
    } else {
      t22 = $[5];
    }
    return t22;
  }
  const t0 = keyboardLayout?.width;
  const t1 = keyboardLayout?.height;
  let t2;
  if ($[6] !== backgroundImage || $[7] !== resolvedLayout || $[8] !== t0 || $[9] !== t1) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx(KeyboardGrid, { layout: resolvedLayout, width: t0, height: t1, backgroundImage });
    $[6] = backgroundImage;
    $[7] = resolvedLayout;
    $[8] = t0;
    $[9] = t1;
    $[10] = t2;
  } else {
    t2 = $[10];
  }
  let t3;
  if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsx(KeySelectionControls, {});
    $[11] = t3;
  } else {
    t3 = $[11];
  }
  let t4;
  if ($[12] !== t2) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mx-auto", children: [
      t2,
      t3
    ] });
    $[12] = t2;
    $[13] = t4;
  } else {
    t4 = $[13];
  }
  return t4;
};
function _temp0(s) {
  return s.initialSyncDone;
}
function useResolvedMouseLayout() {
  const $ = compilerRuntimeExports.c(2);
  const deviceConfig = useDeviceConfig();
  deviceConfig?.mouseLayout;
  const t0 = deviceConfig?.mouseLayout ?? defaultMouseLayout;
  let t1;
  if ($[0] !== t0) {
    t1 = {
      layout: t0
    };
    $[0] = t0;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  return t1;
}
function useResolvedMouseLayoutItems() {
  const $ = compilerRuntimeExports.c(9);
  const {
    layout
  } = useResolvedMouseLayout();
  const indices = useKeyRectIndexStore(_temp$e);
  const defaultKeyRect = useKeyboardStore(_temp2$7);
  const currentKeyRect = useKeyboardStore(_temp3$5);
  let t0;
  if ($[0] !== currentKeyRect || $[1] !== defaultKeyRect || $[2] !== indices || $[3] !== layout.buttons) {
    let t1;
    if ($[5] !== currentKeyRect || $[6] !== defaultKeyRect || $[7] !== indices) {
      t1 = (button) => {
        const resolvedIndex = resolveMouseButtonIndex(button, indices, defaultKeyRect, currentKeyRect.length ? [currentKeyRect] : []);
        if (resolvedIndex === void 0) {
          return button;
        }
        if (button.index === resolvedIndex) {
          return button;
        }
        return {
          ...button,
          index: resolvedIndex
        };
      };
      $[5] = currentKeyRect;
      $[6] = defaultKeyRect;
      $[7] = indices;
      $[8] = t1;
    } else {
      t1 = $[8];
    }
    t0 = layout.buttons.map(t1);
    $[0] = currentKeyRect;
    $[1] = defaultKeyRect;
    $[2] = indices;
    $[3] = layout.buttons;
    $[4] = t0;
  } else {
    t0 = $[4];
  }
  return t0;
}
function _temp3$5(s_1) {
  return s_1.currentKeyRect;
}
function _temp2$7(s_0) {
  return s_0.defaultKeyRect;
}
function _temp$e(s) {
  return s.indices;
}
function getMouseKeyLabel(item) {
  if (item.key?.length) return item.key.join("");
  return item.code ?? "";
}
function MouseCalloutLabel(t0) {
  const $ = compilerRuntimeExports.c(28);
  const {
    button,
    labelX,
    labelY,
    side,
    isSelected,
    showCurrentAssignment: t1,
    onSelect
  } = t0;
  const showCurrentAssignment = t1 === void 0 ? false : t1;
  const currentKeyRect = useKeyboardStore(_temp$d);
  const keyButtonText = useKeyButtonText(button, currentKeyRect);
  let label;
  let t2;
  if ($[0] !== button || $[1] !== keyButtonText || $[2] !== showCurrentAssignment) {
    label = getMouseKeyLabel(button);
    t2 = showCurrentAssignment ? keyButtonResultToLabel(keyButtonText, label) : label;
    $[0] = button;
    $[1] = keyButtonText;
    $[2] = showCurrentAssignment;
    $[3] = label;
    $[4] = t2;
  } else {
    label = $[3];
    t2 = $[4];
  }
  const assignment = t2;
  const isLeft = side === "left";
  let t3;
  if ($[5] !== button.id || $[6] !== onSelect) {
    t3 = () => onSelect(button.id);
    $[5] = button.id;
    $[6] = onSelect;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  const t4 = isLeft ? "text-left" : "text-right";
  const t5 = isSelected ? "font-medium text-primary" : "text-foreground/65 hover:text-foreground/85";
  let t6;
  if ($[8] !== t4 || $[9] !== t5) {
    t6 = cn("absolute z-30 truncate text-xs transition-colors sm:text-sm", t4, t5);
    $[8] = t4;
    $[9] = t5;
    $[10] = t6;
  } else {
    t6 = $[10];
  }
  const t7 = `${labelX}%`;
  const t8 = `${labelY}%`;
  const t9 = isLeft ? `${22 - labelX}%` : `${labelX - 78}%`;
  const t10 = isLeft ? "translateY(-50%)" : "translate(-100%, -50%)";
  let t11;
  if ($[11] !== t10 || $[12] !== t7 || $[13] !== t8 || $[14] !== t9) {
    t11 = {
      left: t7,
      top: t8,
      maxWidth: t9,
      transform: t10
    };
    $[11] = t10;
    $[12] = t7;
    $[13] = t8;
    $[14] = t9;
    $[15] = t11;
  } else {
    t11 = $[15];
  }
  let t12;
  if ($[16] !== label) {
    t12 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label });
    $[16] = label;
    $[17] = t12;
  } else {
    t12 = $[17];
  }
  let t13;
  if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
    t13 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/45", children: "：" });
    $[18] = t13;
  } else {
    t13 = $[18];
  }
  const t14 = isSelected ? "text-primary" : "text-foreground/75";
  let t15;
  if ($[19] !== assignment || $[20] !== t14) {
    t15 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: t14, children: assignment });
    $[19] = assignment;
    $[20] = t14;
    $[21] = t15;
  } else {
    t15 = $[21];
  }
  let t16;
  if ($[22] !== t11 || $[23] !== t12 || $[24] !== t15 || $[25] !== t3 || $[26] !== t6) {
    t16 = /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: t3, className: t6, style: t11, children: [
      t12,
      t13,
      t15
    ] });
    $[22] = t11;
    $[23] = t12;
    $[24] = t15;
    $[25] = t3;
    $[26] = t6;
    $[27] = t16;
  } else {
    t16 = $[27];
  }
  return t16;
}
function _temp$d(s) {
  return s.currentKeyRect;
}
function MouseHighlightButton(t0) {
  const $ = compilerRuntimeExports.c(31);
  const {
    button,
    isSelected,
    interactive,
    onSelect
  } = t0;
  const currentKeyRect = useKeyboardStore(_temp$c);
  const keyButtonText = useKeyButtonText(button, currentKeyRect);
  let t1;
  if ($[0] !== button || $[1] !== keyButtonText) {
    t1 = keyButtonResultToLabel(keyButtonText, getMouseKeyLabel(button));
    $[0] = button;
    $[1] = keyButtonText;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const assignmentLabel = t1;
  const t2 = `mouse-target-${button.id}`;
  let t3;
  if ($[3] !== button.index) {
    t3 = {
      kind: "targetKey",
      index: button.index
    };
    $[3] = button.index;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  const t4 = !interactive || button.index === void 0;
  let t5;
  if ($[5] !== t2 || $[6] !== t3 || $[7] !== t4) {
    t5 = {
      id: t2,
      data: t3,
      disabled: t4
    };
    $[5] = t2;
    $[6] = t3;
    $[7] = t4;
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  const {
    setNodeRef,
    isOver
  } = useDroppable(t5);
  if (!button.highlight) {
    return null;
  }
  const {
    x,
    y,
    width,
    height,
    borderRadius: t6
  } = button.highlight;
  const borderRadius = t6 === void 0 ? 6 : t6;
  const canRemap = interactive && button.index !== void 0;
  let t7;
  if ($[9] !== assignmentLabel || $[10] !== button || $[11] !== interactive) {
    t7 = interactive ? `${getMouseKeyLabel(button)}：${assignmentLabel}` : getMouseKeyLabel(button);
    $[9] = assignmentLabel;
    $[10] = button;
    $[11] = interactive;
    $[12] = t7;
  } else {
    t7 = $[12];
  }
  let t8;
  if ($[13] !== button.id || $[14] !== onSelect) {
    t8 = () => onSelect(button.id);
    $[13] = button.id;
    $[14] = onSelect;
    $[15] = t8;
  } else {
    t8 = $[15];
  }
  const t9 = isSelected ? "border-primary bg-primary/28 shadow-[0_0_18px_var(--glow-primary)]" : "border-transparent bg-transparent hover:border-primary/35 hover:bg-primary/8";
  const t10 = isOver && canRemap && "ring-2 ring-primary bg-primary/20";
  let t11;
  if ($[16] !== t10 || $[17] !== t9) {
    t11 = cn("absolute border transition-all duration-200", t9, t10);
    $[16] = t10;
    $[17] = t9;
    $[18] = t11;
  } else {
    t11 = $[18];
  }
  const t12 = `${x}%`;
  const t13 = `${y}%`;
  const t14 = `${width}%`;
  const t15 = `${height}%`;
  let t16;
  if ($[19] !== borderRadius || $[20] !== t12 || $[21] !== t13 || $[22] !== t14 || $[23] !== t15) {
    t16 = {
      left: t12,
      top: t13,
      width: t14,
      height: t15,
      borderRadius
    };
    $[19] = borderRadius;
    $[20] = t12;
    $[21] = t13;
    $[22] = t14;
    $[23] = t15;
    $[24] = t16;
  } else {
    t16 = $[24];
  }
  let t17;
  if ($[25] !== setNodeRef || $[26] !== t11 || $[27] !== t16 || $[28] !== t7 || $[29] !== t8) {
    t17 = /* @__PURE__ */ jsxRuntimeExports.jsx("button", { ref: setNodeRef, type: "button", "aria-label": t7, onClick: t8, className: t11, style: t16 });
    $[25] = setNodeRef;
    $[26] = t11;
    $[27] = t16;
    $[28] = t7;
    $[29] = t8;
    $[30] = t17;
  } else {
    t17 = $[30];
  }
  return t17;
}
function _temp$c(s) {
  return s.currentKeyRect;
}
function MouseRestoreDefaultButton({
  className
}) {
  const [open, setOpen] = reactExports.useState(false);
  const [restoring, setRestoring] = reactExports.useState(false);
  const remap = usePressKeyRemap();
  const handleConfirm = async () => {
    setOpen(false);
    setRestoring(true);
    try {
      await withActiveDeviceBatch(async () => {
        const api = useKeyboardStore.getState();
        const def = await api.getDefaultKeyRect();
        if (!def.length) {
          throw new Error("默认按键数据为空");
        }
        await api.setCurrentKeyRect([...def]);
        await api.getCurrentKeyRect();
      });
      remap?.clearTarget();
      toast.success("已恢复为默认按键");
    } catch {
      toast.error("恢复默认失败");
    } finally {
      setRestoring(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "outline", disabled: restoring, className: cn("h-9 cursor-pointer gap-2 rounded-xl border-white/70 bg-white/70 text-foreground/80 shadow-sm transition-all", "hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary", "dark:border-white/8 dark:bg-white/8 dark:hover:border-primary/40 dark:hover:bg-primary/15", className), onClick: () => setOpen(true), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: cn("size-4", restoring && "animate-spin") }),
      "恢复默认"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: "恢复默认按键" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { children: "将当前鼠标按键映射恢复为出厂默认，已自定义的按键会被覆盖。是否继续？" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { type: "button", children: "取消" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { type: "button", onClick: handleConfirm, children: "确认" })
      ] })
    ] })
  ] });
}
function distributeSide(buttons, side) {
  const filtered = buttons.filter((b) => b.side === side);
  const count = filtered.length;
  if (count === 0) return [];
  const top = 14;
  const bottom = 86;
  const step = count === 1 ? 0 : (bottom - top) / (count - 1);
  const labelX = side === "left" ? 4 : 96;
  return filtered.map((button, index) => ({
    button,
    labelX,
    labelY: top + step * index
  }));
}
function MousePreview({
  interactive = false,
  className
}) {
  const deviceConfig = useDeviceConfig();
  const {
    resolvedTheme
  } = z();
  const rectBackgroundImageMap = deviceConfig?.rectBackgroundImageMap;
  const imageSrc = rectBackgroundImageMap ? resolvedTheme === "dark" ? rectBackgroundImageMap.dark : rectBackgroundImageMap.light : void 0;
  const buttons = useResolvedMouseLayoutItems();
  const remap = useOptionalPressKeyRemap();
  const selectedButtonId = reactExports.useMemo(() => {
    if (!interactive || remap?.selectedTargetIndex == null) return null;
    return buttons.find((b) => b.index === remap.selectedTargetIndex)?.id ?? null;
  }, [buttons, interactive, remap?.selectedTargetIndex]);
  const callouts = reactExports.useMemo(() => {
    return [...distributeSide(buttons, "left"), ...distributeSide(buttons, "right")];
  }, [buttons]);
  const handleSelect = (buttonId) => {
    const button = buttons.find((b_0) => b_0.id === buttonId);
    if (!interactive || !remap) return;
    if (button?.index === void 0) {
      return;
    }
    remap.selectTarget(button.index);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("mx-auto flex h-full min-h-[420px] w-full max-w-[980px] items-end justify-center gap-3", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-full min-h-[420px] min-w-0 flex-1 max-w-[920px] items-center justify-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 opacity-70 dark:opacity-90", "aria-hidden": true, style: {
        backgroundImage: `
            radial-gradient(circle at 50% 62%, color-mix(in oklch, var(--primary) 14%, transparent), transparent 48%),
            linear-gradient(color-mix(in oklch, var(--primary) 8%, transparent) 1px, transparent 1px),
            linear-gradient(90deg, color-mix(in oklch, var(--primary) 8%, transparent) 1px, transparent 1px)
          `,
        backgroundSize: "100% 100%, 28px 28px, 28px 28px",
        maskImage: "radial-gradient(ellipse 72% 68% at 50% 55%, black 20%, transparent 78%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "pointer-events-none absolute inset-0 z-20 h-full w-full overflow-visible", viewBox: "0 0 100 100", preserveAspectRatio: "none", "aria-hidden": true, children: callouts.map(({
        button: button_0,
        labelX,
        labelY
      }) => {
        const isSelected = selectedButtonId === button_0.id;
        const elbowX = button_0.side === "left" ? labelX + 8 : labelX - 8;
        return /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: `${labelX},${labelY} ${elbowX},${labelY} ${button_0.anchor.x},${button_0.anchor.y}`, className: cn("fill-none", isSelected ? "stroke-primary" : "stroke-primary/55"), strokeWidth: isSelected ? 0.35 : 0.22, vectorEffect: "non-scaling-stroke" }, button_0.id);
      }) }),
      callouts.map(({
        button: button_1,
        labelX: labelX_0,
        labelY: labelY_0
      }) => /* @__PURE__ */ jsxRuntimeExports.jsx(MouseCalloutLabel, { button: button_1, labelX: labelX_0, labelY: labelY_0, side: button_1.side, isSelected: selectedButtonId === button_1.id, showCurrentAssignment: interactive, onSelect: handleSelect }, button_1.id)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex h-[78%] max-h-[360px] w-[46%] min-w-[180px] items-center justify-center", children: [
        imageSrc ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: imageSrc, alt: "鼠标预览", className: "h-full w-full object-contain drop-shadow-[0_18px_40px_oklch(0_0_0/0.45)] dark:drop-shadow-[0_18px_40px_oklch(0_0_0/0.55)]", draggable: false }) : null,
        buttons.map((button_2) => /* @__PURE__ */ jsxRuntimeExports.jsx(MouseHighlightButton, { button: button_2, isSelected: selectedButtonId === button_2.id, interactive, onSelect: handleSelect }, button_2.id))
      ] })
    ] }),
    interactive ? /* @__PURE__ */ jsxRuntimeExports.jsx(MouseRestoreDefaultButton, { className: "mb-3 shrink-0" }) : null
  ] });
}
const pressKeyIconTileSurfaceClass = `flex flex-col items-center justify-center select-none
              size-14 gap-0.5
              text-sm font-medium leading-tight
              rounded-[10px] relative
              border border-border/50
              bg-linear-to-b from-background to-muted/60
              shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_2px_0_rgba(0,0,0,0.1),0_3px_4px_rgba(0,0,0,0.05)]
              transition-all duration-100 ease-out
              hover:border-primary/50 hover:-translate-y-0.5
              hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_2px_0_rgba(0,0,0,0.15),0_6px_12px_var(--glow-primary)]
              hover:bg-linear-to-b hover:from-primary/10 hover:to-primary/5
              active:translate-y-[2px]
              active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_0px_0_rgba(0,0,0,0.1),0_1px_1px_rgba(0,0,0,0.05)]
              dark:border-border/40
              dark:from-[oklch(0.18_0.03_268)] dark:to-[oklch(0.13_0.035_270)]
              dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_2px_0_rgba(0,0,0,0.5),0_4px_4px_rgba(0,0,0,0.3)]
              dark:hover:border-primary/50
              dark:hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),0_2px_0_rgba(0,0,0,0.6),0_6px_16px_var(--glow-primary)]
              dark:hover:from-primary/15 dark:hover:to-primary/5
              dark:active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.4),0_0px_0_rgba(0,0,0,0.5),0_1px_1px_rgba(0,0,0,0.3)]
              group`;
const pressKeyIconTileDragPreviewExtraClass = `pointer-events-none cursor-grabbing !translate-y-0
              hover:!translate-y-0 active:!translate-y-0
              hover:!shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_2px_0_rgba(0,0,0,0.1),0_3px_4px_rgba(0,0,0,0.05)]
              active:!shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_0px_0_rgba(0,0,0,0.1),0_1px_1px_rgba(0,0,0,0.05)]`;
function RemapPressKeySourceButton(t0) {
  const $ = compilerRuntimeExports.c(29);
  const {
    item,
    className
  } = t0;
  const {
    selectedTargetIndex,
    clearTarget
  } = usePressKeyRemap();
  const label = item.Pointer[0];
  const t1 = `board-key-${item.code}`;
  let t2;
  if ($[0] !== item || $[1] !== label) {
    t2 = {
      kind: "boardSource",
      code: item.code,
      label,
      item,
      surface: "iconTile"
    };
    $[0] = item;
    $[1] = label;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] !== t1 || $[4] !== t2) {
    t3 = {
      id: t1,
      data: t2
    };
    $[3] = t1;
    $[4] = t2;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging
  } = useDraggable(t3);
  let t4;
  if ($[6] !== className) {
    t4 = cn(pressKeyIconTileSurfaceClass, "cursor-grab active:cursor-grabbing touch-none", className);
    $[6] = className;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  let t5;
  if ($[8] !== isDragging || $[9] !== transform) {
    t5 = {
      ...isDragging ? {
        opacity: 0
      } : {
        transform: CSS.Translate.toString(transform),
        opacity: 1
      }
    };
    $[8] = isDragging;
    $[9] = transform;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  let t6;
  if ($[11] !== clearTarget || $[12] !== item.code || $[13] !== selectedTargetIndex) {
    t6 = () => {
      if (selectedTargetIndex === null) {
        return;
      }
      applyBoardKeyMapping(selectedTargetIndex, item.code).then((ok) => {
        if (ok) {
          clearTarget();
        }
      });
    };
    $[11] = clearTarget;
    $[12] = item.code;
    $[13] = selectedTargetIndex;
    $[14] = t6;
  } else {
    t6 = $[14];
  }
  let t7;
  let t8;
  if ($[15] !== item.Pointer[0] || $[16] !== item.icon) {
    t7 = item.icon ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/70 group-hover:text-primary transition-colors duration-200 [&>svg]:size-5", children: item.icon }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80 group-hover:text-primary transition-colors duration-200", children: item.Pointer[0] });
    t8 = item.icon ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-muted-foreground/70 group-hover:text-primary/70 transition-colors duration-200 leading-none truncate max-w-full px-0.5", children: item.Pointer[0] }) : null;
    $[15] = item.Pointer[0];
    $[16] = item.icon;
    $[17] = t7;
    $[18] = t8;
  } else {
    t7 = $[17];
    t8 = $[18];
  }
  let t9;
  if ($[19] !== attributes || $[20] !== label || $[21] !== listeners || $[22] !== setNodeRef || $[23] !== t4 || $[24] !== t5 || $[25] !== t6 || $[26] !== t7 || $[27] !== t8) {
    t9 = /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { ref: setNodeRef, type: "button", className: t4, style: t5, "aria-label": label, ...listeners, ...attributes, onClick: t6, children: [
      t7,
      t8
    ] });
    $[19] = attributes;
    $[20] = label;
    $[21] = listeners;
    $[22] = setNodeRef;
    $[23] = t4;
    $[24] = t5;
    $[25] = t6;
    $[26] = t7;
    $[27] = t8;
    $[28] = t9;
  } else {
    t9 = $[28];
  }
  return t9;
}
const Mousekeys = () => {
  const $ = compilerRuntimeExports.c(1);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: pressKeyAllkeys.mouse.map(_temp$b) }) });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
};
function _temp$b(item) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RemapPressKeySourceButton, { item }, item.key);
}
function Accordion(t0) {
  const $ = compilerRuntimeExports.c(4);
  let props;
  if ($[0] !== t0) {
    ({
      ...props
    } = t0);
    $[0] = t0;
    $[1] = props;
  } else {
    props = $[1];
  }
  let t1;
  if ($[2] !== props) {
    t1 = /* @__PURE__ */ jsxRuntimeExports.jsx(Root2, { "data-slot": "accordion", ...props });
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function AccordionItem(t0) {
  const $ = compilerRuntimeExports.c(8);
  let className;
  let props;
  if ($[0] !== t0) {
    ({
      className,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  let t1;
  if ($[3] !== className) {
    t1 = cn("border-b last:border-b-0", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { "data-slot": "accordion-item", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function AccordionTrigger(t0) {
  const $ = compilerRuntimeExports.c(11);
  let children;
  let className;
  let props;
  if ($[0] !== t0) {
    ({
      className,
      children,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = props;
  } else {
    children = $[1];
    className = $[2];
    props = $[3];
  }
  let t1;
  if ($[4] !== className) {
    t1 = cn("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180", className);
    $[4] = className;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  let t2;
  if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" });
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  let t3;
  if ($[7] !== children || $[8] !== props || $[9] !== t1) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Trigger2, { "data-slot": "accordion-trigger", className: t1, ...props, children: [
      children,
      t2
    ] }) });
    $[7] = children;
    $[8] = props;
    $[9] = t1;
    $[10] = t3;
  } else {
    t3 = $[10];
  }
  return t3;
}
function AccordionContent(t0) {
  const $ = compilerRuntimeExports.c(12);
  let children;
  let className;
  let props;
  if ($[0] !== t0) {
    ({
      className,
      children,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = props;
  } else {
    children = $[1];
    className = $[2];
    props = $[3];
  }
  let t1;
  if ($[4] !== className) {
    t1 = cn("pt-0 pb-4", className);
    $[4] = className;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  let t2;
  if ($[6] !== children || $[7] !== t1) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: t1, children });
    $[6] = children;
    $[7] = t1;
    $[8] = t2;
  } else {
    t2 = $[8];
  }
  let t3;
  if ($[9] !== props || $[10] !== t2) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsx(Content2, { "data-slot": "accordion-content", className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm", ...props, children: t2 });
    $[9] = props;
    $[10] = t2;
    $[11] = t3;
  } else {
    t3 = $[11];
  }
  return t3;
}
const MediaKeys = () => {
  const $ = compilerRuntimeExports.c(1);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 py-1", children: pressKeyAllkeys.media.map(_temp$a) });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
};
function _temp$a(item) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RemapPressKeySourceButton, { item }, item.key);
}
const SystemKeys = () => {
  const $ = compilerRuntimeExports.c(1);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 py-1", children: pressKeyAllkeys.system.map(_temp$9) });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
};
function _temp$9(item) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RemapPressKeySourceButton, { item }, item.key);
}
const OfficeKeys = () => {
  const $ = compilerRuntimeExports.c(1);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 py-1", children: pressKeyAllkeys.office.map(_temp$8) });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
};
function _temp$8(item) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RemapPressKeySourceButton, { item }, item.key);
}
async function applyQuickFunctionTripletMapping(targetIndex, tripleHex, label) {
  const b0 = parseInt(tripleHex[0], 16);
  const b1 = parseInt(tripleHex[1], 16);
  const b2 = parseInt(tripleHex[2], 16);
  if (Number.isNaN(b0) || Number.isNaN(b1) || Number.isNaN(b2)) {
    toast.error("快捷功能编码无效");
    return false;
  }
  const api = useKeyboardStore.getState();
  const layer = api.currentLayer;
  const rect = layer === "default" ? api.currentKeyRect : layer === "fn" ? api.currentFnKeyRect : layer === "mac" ? api.macCurrentKeyRect : api.macCurrentFnKeyRect;
  if (targetIndex < 0 || targetIndex + 2 >= rect.length) {
    toast.error("按键索引无效");
    return false;
  }
  const reservedIndex = getReservedWakeFnSlotIndex(api);
  if (reservedIndex !== null && targetIndex === reservedIndex) {
    toast.error("该键为系统保留键，不可修改");
    return false;
  }
  const defaultRect = layer === "fn" ? api.defaultFnKeyRect : layer === "macFn" ? api.macFnDefaultKeyRect : void 0;
  if (isFnLayerTargetLocked(layer, targetIndex, rect, defaultRect, api.fnLockList)) {
    toast.error("该键在 Fn 层已锁定，无法修改");
    return false;
  }
  if (!ensureRemapTargetNotAdvancedKey(rect, targetIndex)) {
    return false;
  }
  const next = [...rect];
  next[targetIndex] = b0;
  next[targetIndex + 1] = b1;
  next[targetIndex + 2] = b2;
  try {
    const applied = await commitLayerKeyRectWrite(layer, next, api);
    if (!applied) return false;
    const name = label.trim() || "快捷功能";
    toast.success(`已绑定「${name}」`);
    return true;
  } catch {
    toast.error("写入设备失败");
    return false;
  }
}
function QuickFunctionRemapButton(t0) {
  const $ = compilerRuntimeExports.c(33);
  const {
    item,
    className
  } = t0;
  const {
    selectedTargetIndex,
    clearTarget
  } = usePressKeyRemap();
  const arr = item.arr;
  let t1;
  if ($[0] !== item.Pointer[0]) {
    t1 = item.Pointer[0]?.trim() || "快捷功能";
    $[0] = item.Pointer[0];
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const label = t1;
  const dragId = arr && arr.length === 3 ? `quick-fn-${arr[0]}-${arr[1]}-${arr[2]}` : `quick-fn-slot-${item.key}`;
  let t2;
  if ($[2] !== arr || $[3] !== item.Pointer || $[4] !== item.key) {
    t2 = {
      key: item.key,
      Pointer: item.Pointer,
      code: "",
      arr
    };
    $[2] = arr;
    $[3] = item.Pointer;
    $[4] = item.key;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  const draggableItem = t2;
  const t3 = !arr || arr.length !== 3;
  let t4;
  if ($[6] !== draggableItem) {
    t4 = {
      kind: "quickFnSource",
      item: draggableItem
    };
    $[6] = draggableItem;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  let t5;
  if ($[8] !== dragId || $[9] !== t3 || $[10] !== t4) {
    t5 = {
      id: dragId,
      disabled: t3,
      data: t4
    };
    $[8] = dragId;
    $[9] = t3;
    $[10] = t4;
    $[11] = t5;
  } else {
    t5 = $[11];
  }
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging
  } = useDraggable(t5);
  let t6;
  if ($[12] !== className) {
    t6 = cn(pressKeyIconTileSurfaceClass, "cursor-grab active:cursor-grabbing touch-none", className);
    $[12] = className;
    $[13] = t6;
  } else {
    t6 = $[13];
  }
  let t7;
  if ($[14] !== isDragging || $[15] !== transform) {
    t7 = {
      ...isDragging ? {
        opacity: 0
      } : {
        transform: CSS.Translate.toString(transform),
        opacity: 1
      }
    };
    $[14] = isDragging;
    $[15] = transform;
    $[16] = t7;
  } else {
    t7 = $[16];
  }
  let t8;
  if ($[17] !== arr || $[18] !== clearTarget || $[19] !== label || $[20] !== selectedTargetIndex) {
    t8 = () => {
      if (selectedTargetIndex === null || !arr || arr.length !== 3) {
        return;
      }
      applyQuickFunctionTripletMapping(selectedTargetIndex, [arr[0], arr[1], arr[2]], label).then((ok) => {
        if (ok) {
          clearTarget();
        }
      });
    };
    $[17] = arr;
    $[18] = clearTarget;
    $[19] = label;
    $[20] = selectedTargetIndex;
    $[21] = t8;
  } else {
    t8 = $[21];
  }
  let t9;
  if ($[22] !== item.Pointer[0]) {
    t9 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80 group-hover:text-primary transition-colors duration-200 text-xs leading-snug text-center px-0.5 line-clamp-3 break-words max-h-[3.4rem] overflow-hidden", children: item.Pointer[0] });
    $[22] = item.Pointer[0];
    $[23] = t9;
  } else {
    t9 = $[23];
  }
  let t10;
  if ($[24] !== attributes || $[25] !== label || $[26] !== listeners || $[27] !== setNodeRef || $[28] !== t6 || $[29] !== t7 || $[30] !== t8 || $[31] !== t9) {
    t10 = /* @__PURE__ */ jsxRuntimeExports.jsx("button", { ref: setNodeRef, type: "button", className: t6, style: t7, "aria-label": label, ...listeners, ...attributes, onClick: t8, children: t9 });
    $[24] = attributes;
    $[25] = label;
    $[26] = listeners;
    $[27] = setNodeRef;
    $[28] = t6;
    $[29] = t7;
    $[30] = t8;
    $[31] = t9;
    $[32] = t10;
  } else {
    t10 = $[32];
  }
  return t10;
}
const QuickFunctionKeys = () => {
  const $ = compilerRuntimeExports.c(2);
  const macFnDefaultKeyRect = useKeyboardStore(_temp$7);
  const fnDefaultKeyRect = useKeyboardStore(_temp2$6);
  const keys = [];
  const currentLayer = useKeyboardStore(_temp3$4);
  const productId = useDeviceInfoStore(_temp4$3);
  if (currentLayer === "macFn") {
    if (Array.isArray(macFnDefaultKeyRect) && macFnDefaultKeyRect.length > 0) {
      for (let i = 0; i < macFnDefaultKeyRect.length - 2; i = i + 3, i) {
        if (macFnDefaultKeyRect[i] === 96 || macFnDefaultKeyRect[i] === 98) {
          const num = highLowToDecimal(macFnDefaultKeyRect[i + 2], macFnDefaultKeyRect[i + 1]);
          let icon = "";
          if (macFnDefaultKeyRect[i] === 96) {
            icon = getFnText(num, productId) ?? "";
          } else {
            if (macFnDefaultKeyRect[i] === 98) {
              icon = getFnText(num, productId) ? `${getFnText(num, productId)}-长按` : "";
            }
          }
          const arr = [formatToHex(macFnDefaultKeyRect[i]), formatToHex(macFnDefaultKeyRect[i + 1]), formatToHex(macFnDefaultKeyRect[i + 2])];
          keys.push({
            Pointer: [icon || ""],
            code: "",
            key: i,
            arr
          });
        }
      }
    }
  } else {
    if (Array.isArray(fnDefaultKeyRect) && fnDefaultKeyRect.length > 0) {
      for (let i_0 = 0; i_0 < fnDefaultKeyRect.length - 2; i_0 = i_0 + 3, i_0) {
        if (fnDefaultKeyRect[i_0] === 96 || fnDefaultKeyRect[i_0] === 98) {
          const num_0 = highLowToDecimal(fnDefaultKeyRect[i_0 + 2], fnDefaultKeyRect[i_0 + 1]);
          let icon_0 = "";
          if (fnDefaultKeyRect[i_0] === 96) {
            icon_0 = getFnText(num_0, productId) ?? "";
          } else {
            if (fnDefaultKeyRect[i_0] === 98) {
              icon_0 = getFnText(num_0, productId) ? `${getFnText(num_0, productId)}-长按` : "";
            }
          }
          const arr_0 = [formatToHex(fnDefaultKeyRect[i_0]), formatToHex(fnDefaultKeyRect[i_0 + 1]), formatToHex(fnDefaultKeyRect[i_0 + 2])];
          keys.push({
            Pointer: [icon_0 || ""],
            code: "",
            key: i_0,
            arr: arr_0
          });
        }
      }
    }
  }
  const uniqueKeys = lodashExports.uniqBy(keys, _temp5$2);
  const t0 = "flex flex-wrap gap-2 py-1";
  const t1 = uniqueKeys.map(_temp6$2);
  let t2;
  if ($[0] !== t1) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: t0, children: t1 });
    $[0] = t1;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  return t2;
};
function _temp$7(state) {
  return state.macFnDefaultKeyRect;
}
function _temp2$6(state_0) {
  return state_0.defaultFnKeyRect;
}
function _temp3$4(state_1) {
  return state_1.currentLayer;
}
function _temp4$3(state_2) {
  return state_2.deviceInfoData._productId;
}
function _temp5$2(keys_0) {
  return keys_0.arr.slice().sort().join(",");
}
function _temp6$2(item) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QuickFunctionRemapButton, { item, className: "size-14 text-xs" }, item.key);
}
const OtherKeys = () => {
  const $ = compilerRuntimeExports.c(25);
  const currentLayer = useKeyboardStore(_temp$6);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = ["非美式键盘按键，单击为\\，按住SHIFT单击为|"];
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = {
      key: 105,
      Pointer: t0,
      code: "K45",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "NUBS" })
    };
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = ["JIS标准键盘按键，单击为\\，按住SHIFT单击为_"];
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = {
      key: 106,
      Pointer: t2,
      code: "K56",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Ro" })
    };
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = ["JIS标准键盘按键，单击为￥，按住SHIFT单击为|"];
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = {
      key: 107,
      Pointer: t4,
      code: "K14",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "¥" })
    };
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  let t6;
  if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
    t6 = ["回到假名输入状态"];
    $[6] = t6;
  } else {
    t6 = $[6];
  }
  let t7;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t7 = {
      key: 109,
      Pointer: t6,
      code: "K131",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "無变换" })
    };
    $[7] = t7;
  } else {
    t7 = $[7];
  }
  let t8;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t8 = ["转换输入的假名"];
    $[8] = t8;
  } else {
    t8 = $[8];
  }
  let t9;
  if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
    t9 = {
      key: 110,
      Pointer: t8,
      code: "K132",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "变换" })
    };
    $[9] = t9;
  } else {
    t9 = $[9];
  }
  let t10;
  if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
    t10 = ["日语英语切换"];
    $[10] = t10;
  } else {
    t10 = $[10];
  }
  let t11;
  if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
    t11 = {
      key: 111,
      Pointer: t10,
      code: "K133",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "かな" })
    };
    $[11] = t11;
  } else {
    t11 = $[11];
  }
  let t12;
  if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
    t12 = ["切换到汉字输入状态或显示假名的汉字候选项"];
    $[12] = t12;
  } else {
    t12 = $[12];
  }
  let t13;
  if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
    t13 = {
      key: 112,
      Pointer: t12,
      code: "K150",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "汉字" })
    };
    $[13] = t13;
  } else {
    t13 = $[13];
  }
  let t14;
  if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
    t14 = ["韩语英语切换"];
    $[14] = t14;
  } else {
    t14 = $[14];
  }
  let t15;
  if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
    t15 = [t1, t3, t5, t7, t9, t11, t13, {
      key: 113,
      Pointer: t14,
      code: "K151",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "한영" })
    }];
    $[15] = t15;
  } else {
    t15 = $[15];
  }
  const list = t15;
  let t16;
  if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
    t16 = {
      value: "item-1",
      icon: FileMusic,
      label: "多媒体按键",
      content: /* @__PURE__ */ jsxRuntimeExports.jsx(MediaKeys, {})
    };
    $[16] = t16;
  } else {
    t16 = $[16];
  }
  let t17;
  if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
    t17 = {
      value: "item-2",
      icon: Settings2,
      label: "系统按键",
      content: /* @__PURE__ */ jsxRuntimeExports.jsx(SystemKeys, {})
    };
    $[17] = t17;
  } else {
    t17 = $[17];
  }
  let t18;
  if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
    t18 = {
      value: "item-3",
      icon: LaptopMinimal,
      label: "办公按键",
      content: /* @__PURE__ */ jsxRuntimeExports.jsx(OfficeKeys, {})
    };
    $[18] = t18;
  } else {
    t18 = $[18];
  }
  let t19;
  if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
    t19 = [t16, t17, t18, {
      value: "item-4",
      icon: CircleEllipsis,
      label: "其他按键",
      content: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 py-1", children: list.map(_temp2$5) })
    }];
    $[19] = t19;
  } else {
    t19 = $[19];
  }
  const sections = t19;
  let t20;
  if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
    t20 = sections.map(_temp3$3);
    $[20] = t20;
  } else {
    t20 = $[20];
  }
  let t21;
  if ($[21] !== currentLayer) {
    t21 = (currentLayer === "fn" || currentLayer === "macFn") && /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "item-5", className: "border-border/30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "py-2.5 hover:no-underline", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-normal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "size-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "快捷功能按键" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(QuickFunctionKeys, {}) })
    ] });
    $[21] = currentLayer;
    $[22] = t21;
  } else {
    t21 = $[22];
  }
  let t22;
  if ($[23] !== t21) {
    t22 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Accordion, { type: "single", collapsible: true, className: "w-full", defaultValue: "item-1", children: [
      t20,
      t21
    ] }) });
    $[23] = t21;
    $[24] = t22;
  } else {
    t22 = $[24];
  }
  return t22;
};
function _temp$6(state) {
  return state.currentLayer;
}
function _temp2$5(item) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RemapPressKeySourceButton, { item }, item.key);
}
function _temp3$3(t0) {
  const {
    value,
    icon: Icon,
    label,
    content
  } = t0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value, className: "border-border/30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "py-2.5 hover:no-underline", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-normal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-4 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "pb-3", children: content })
  ] }, value);
}
const CompareKeyButtonDropdownMenu = (t0) => {
  const $ = compilerRuntimeExports.c(15);
  const {
    onDelete
  } = t0;
  const [menuOpen, setMenuOpen] = reactExports.useState(false);
  const [alertOpen, setAlertOpen] = reactExports.useState(false);
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = () => {
      setMenuOpen(false);
      queueMicrotask(() => setAlertOpen(true));
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const openDeleteAlert = t1;
  let t2;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "absolute top-1 right-1 z-10 size-5", "aria-label": "更多操作", onClick: _temp$5, size: "icon", variant: "secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ellipsis, { className: "w-4 h-4 rounded-full" }) }) });
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  let t3;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuContent, { align: "end", sideOffset: 8, onClick: _temp2$4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { className: "dark:text-muted-foreground focus:text-primary focus:dark:bg-zinc-700", onSelect: (e_1) => {
      e_1.preventDefault();
      openDeleteAlert();
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "text-red-500" }),
      " 删除"
    ] }) });
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  let t4;
  if ($[3] !== menuOpen) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { open: menuOpen, onOpenChange: setMenuOpen, children: [
      t2,
      t3
    ] });
    $[3] = menuOpen;
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: "确定删除该组合按键？" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { children: "删除后将无法恢复" })
    ] });
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  let t6;
  if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { children: "取消" });
    $[6] = t6;
  } else {
    t6 = $[6];
  }
  let t7;
  if ($[7] !== onDelete) {
    t7 = /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
      t5,
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
        t6,
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { onClick: () => {
          onDelete();
        }, children: "确定" })
      ] })
    ] });
    $[7] = onDelete;
    $[8] = t7;
  } else {
    t7 = $[8];
  }
  let t8;
  if ($[9] !== alertOpen || $[10] !== t7) {
    t8 = /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: alertOpen, onOpenChange: setAlertOpen, children: t7 });
    $[9] = alertOpen;
    $[10] = t7;
    $[11] = t8;
  } else {
    t8 = $[11];
  }
  let t9;
  if ($[12] !== t4 || $[13] !== t8) {
    t9 = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      t4,
      t8
    ] });
    $[12] = t4;
    $[13] = t8;
    $[14] = t9;
  } else {
    t9 = $[14];
  }
  return t9;
};
function _temp$5(e) {
  e.stopPropagation();
}
function _temp2$4(e_0) {
  return e_0.stopPropagation();
}
async function applyCompareKeyMapping(targetIndex, item) {
  const api = useKeyboardStore.getState();
  const layer = api.currentLayer;
  const rect = layer === "default" ? api.currentKeyRect : layer === "fn" ? api.currentFnKeyRect : layer === "mac" ? api.macCurrentKeyRect : api.macCurrentFnKeyRect;
  if (targetIndex < 0 || targetIndex + 2 >= rect.length) {
    toast.error("按键索引无效");
    return false;
  }
  const reservedIndex = getReservedWakeFnSlotIndex(api);
  if (reservedIndex !== null && targetIndex === reservedIndex) {
    toast.error("该键为系统保留键，不可修改");
    return false;
  }
  const defaultRect = layer === "fn" ? api.defaultFnKeyRect : layer === "macFn" ? api.macFnDefaultKeyRect : void 0;
  if (isFnLayerTargetLocked(layer, targetIndex, rect, defaultRect, api.fnLockList)) {
    toast.error("该键在 Fn 层已锁定，无法修改");
    return false;
  }
  if (!ensureRemapTargetNotAdvancedKey(rect, targetIndex)) {
    return false;
  }
  const mainEntry = codeValues[item.keydownCode];
  if (!mainEntry?.[2]) {
    toast.error("未找到主键编码");
    return false;
  }
  let modifierMask = 0;
  for (const code of item.currentKey) {
    const row = codeValues[code];
    if (!row?.[1]) {
      toast.error("未找到修饰键编码");
      return false;
    }
    modifierMask |= parseInt(row[1], 16);
  }
  const thirdHex = mainEntry[2] === "0x00" ? mainEntry[1] : mainEntry[2];
  if (!thirdHex) {
    toast.error("主键编码无效");
    return false;
  }
  const next = [...rect];
  next[targetIndex] = KeyType.FN_COMBO;
  next[targetIndex + 1] = parseInt(formatToHex(modifierMask), 16);
  next[targetIndex + 2] = parseInt(thirdHex, 16);
  try {
    const applied = await commitLayerKeyRectWrite(layer, next, api);
    if (!applied) return false;
    toast.success("按键已更新");
    return true;
  } catch {
    toast.error("写入设备失败");
    return false;
  }
}
function compareKeyDragId(item) {
  const mods = [...item.currentKey].sort().join(",");
  return `compare-key-${item.keydownCode}-${mods}`;
}
function CompareKeyDragPreview(t0) {
  const $ = compilerRuntimeExports.c(3);
  const {
    item
  } = t0;
  const label = allkeys[item.keydownCode]?.key[0] ?? item.keydownCode;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = cn(pressKeyIconTileSurfaceClass, pressKeyIconTileDragPreviewExtraClass, "cursor-grabbing px-1 text-center");
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  let t2;
  if ($[1] !== label) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: t1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80 block leading-tight wrap-break-word transition-colors duration-200", children: label }) });
    $[1] = label;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  return t2;
}
const CompareKeyButton = (t0) => {
  const $ = compilerRuntimeExports.c(39);
  const {
    item,
    setIsDrawerEdit,
    handleEdit,
    onDelete
  } = t0;
  const {
    selectedTargetIndex,
    clearTarget
  } = usePressKeyRemap();
  let t1;
  if ($[0] !== item) {
    t1 = compareKeyDragId(item);
    $[0] = item;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] !== item) {
    t2 = {
      kind: "compareKeySource",
      item
    };
    $[2] = item;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== t1 || $[5] !== t2) {
    t3 = {
      id: t1,
      data: t2
    };
    $[4] = t1;
    $[5] = t2;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging
  } = useDraggable(t3);
  let t4;
  if ($[7] !== handleEdit || $[8] !== item || $[9] !== setIsDrawerEdit) {
    t4 = () => {
      setIsDrawerEdit(true);
      handleEdit(item);
    };
    $[7] = handleEdit;
    $[8] = item;
    $[9] = setIsDrawerEdit;
    $[10] = t4;
  } else {
    t4 = $[10];
  }
  const openEdit = t4;
  let t5;
  if ($[11] !== clearTarget || $[12] !== item || $[13] !== openEdit || $[14] !== selectedTargetIndex) {
    t5 = () => {
      if (selectedTargetIndex !== null) {
        applyCompareKeyMapping(selectedTargetIndex, item).then((ok) => {
          if (ok) {
            clearTarget();
          }
        });
        return;
      }
      openEdit();
    };
    $[11] = clearTarget;
    $[12] = item;
    $[13] = openEdit;
    $[14] = selectedTargetIndex;
    $[15] = t5;
  } else {
    t5 = $[15];
  }
  const handleMainClick = t5;
  let t6;
  if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
    t6 = cn(pressKeyIconTileSurfaceClass, "touch-none");
    $[16] = t6;
  } else {
    t6 = $[16];
  }
  const t7 = isDragging ? 0 : 1;
  let t8;
  if ($[17] !== t7) {
    t8 = {
      opacity: t7
    };
    $[17] = t7;
    $[18] = t8;
  } else {
    t8 = $[18];
  }
  let t9;
  if ($[19] !== onDelete) {
    t9 = /* @__PURE__ */ jsxRuntimeExports.jsx(CompareKeyButtonDropdownMenu, { onDelete });
    $[19] = onDelete;
    $[20] = t9;
  } else {
    t9 = $[20];
  }
  let t10;
  if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
    t10 = cn("absolute inset-0 flex cursor-grab flex-col items-center justify-center gap-0.5", "px-1 pt-5 pb-1 text-wrap active:cursor-grabbing");
    $[21] = t10;
  } else {
    t10 = $[21];
  }
  let t11;
  if ($[22] !== isDragging || $[23] !== transform) {
    t11 = isDragging ? void 0 : {
      transform: CSS.Translate.toString(transform)
    };
    $[22] = isDragging;
    $[23] = transform;
    $[24] = t11;
  } else {
    t11 = $[24];
  }
  const t12 = allkeys[item.keydownCode]?.key[0] ?? item.keydownCode;
  const t13 = allkeys[item.keydownCode]?.key[0] ?? item.keydownCode;
  let t14;
  if ($[25] !== t13) {
    t14 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80 group-hover:text-primary block leading-tight wrap-break-word transition-colors duration-200", children: t13 });
    $[25] = t13;
    $[26] = t14;
  } else {
    t14 = $[26];
  }
  let t15;
  if ($[27] !== attributes || $[28] !== handleMainClick || $[29] !== listeners || $[30] !== setNodeRef || $[31] !== t11 || $[32] !== t12 || $[33] !== t14) {
    t15 = /* @__PURE__ */ jsxRuntimeExports.jsx("button", { ref: setNodeRef, type: "button", className: t10, style: t11, "aria-label": t12, ...listeners, ...attributes, onClick: handleMainClick, children: t14 });
    $[27] = attributes;
    $[28] = handleMainClick;
    $[29] = listeners;
    $[30] = setNodeRef;
    $[31] = t11;
    $[32] = t12;
    $[33] = t14;
    $[34] = t15;
  } else {
    t15 = $[34];
  }
  let t16;
  if ($[35] !== t15 || $[36] !== t8 || $[37] !== t9) {
    t16 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: t6, style: t8, children: [
      t9,
      t15
    ] });
    $[35] = t15;
    $[36] = t8;
    $[37] = t9;
    $[38] = t16;
  } else {
    t16 = $[38];
  }
  return t16;
};
const IGNORE_MAIN_KEY_PICK_CODES = /* @__PURE__ */ new Set(["ControlLeft", "ControlRight", "ShiftLeft", "ShiftRight", "AltLeft", "AltRight", "MetaLeft", "MetaRight"]);
function sortedModifiersSignature(keys) {
  return [...keys].sort().join(",");
}
function sameStoredItem(a, b) {
  return a.keydownCode === b.keydownCode && a.currentKey.join(",") === b.currentKey.join(",");
}
const CompareKeysDrawer = (t0) => {
  const $ = compilerRuntimeExports.c(65);
  const {
    setCreatedKeys,
    isDrawerEdit,
    currentEditItem,
    setIsDrawerEdit,
    setCurrentEditItem
  } = t0;
  const [open, setOpen] = reactExports.useState(false);
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [];
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const [currentKey, setCurrentKey] = reactExports.useState(t1);
  const [keydownCode, setKeydownCode] = reactExports.useState("");
  const drawerTitle = isDrawerEdit ? "编辑组合按键" : "新建组合按键";
  const canSave = currentKey.length > 0 && keydownCode.length > 0;
  let t2;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = () => {
      setCurrentKey([]);
      setKeydownCode("");
    };
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  const handleInit = t2;
  let t3;
  if ($[2] !== setCurrentEditItem || $[3] !== setIsDrawerEdit) {
    t3 = () => {
      handleInit();
      setIsDrawerEdit(false);
      setCurrentEditItem(void 0);
    };
    $[2] = setCurrentEditItem;
    $[3] = setIsDrawerEdit;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  const closeAndResetParents = t3;
  let t4;
  if ($[5] !== closeAndResetParents) {
    t4 = (nextOpen) => {
      setOpen(nextOpen);
      if (!nextOpen) {
        closeAndResetParents();
      }
    };
    $[5] = closeAndResetParents;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  const handleOpenChange = t4;
  let t5;
  let t6;
  if ($[7] !== currentEditItem || $[8] !== isDrawerEdit) {
    t5 = () => {
      if (!isDrawerEdit || !currentEditItem) {
        return;
      }
      setOpen(true);
      setCurrentKey([...currentEditItem.currentKey]);
      setKeydownCode(currentEditItem.keydownCode);
    };
    t6 = [isDrawerEdit, currentEditItem];
    $[7] = currentEditItem;
    $[8] = isDrawerEdit;
    $[9] = t5;
    $[10] = t6;
  } else {
    t5 = $[9];
    t6 = $[10];
  }
  reactExports.useEffect(t5, t6);
  let t7;
  if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
    const onPickKeydownCode = (code) => {
      if (!(code in codeValues)) {
        toast.error("不支持的按键");
        return;
      }
      if (IGNORE_MAIN_KEY_PICK_CODES.has(code)) {
        toast.error("请选主键（非纯修饰键）");
        return;
      }
      setKeydownCode(code);
    };
    t7 = {
      onPickKeydownCode
    };
    $[11] = t7;
  } else {
    t7 = $[11];
  }
  const pickContextValue = t7;
  let t8;
  if ($[12] !== canSave || $[13] !== closeAndResetParents || $[14] !== currentEditItem || $[15] !== currentKey || $[16] !== isDrawerEdit || $[17] !== keydownCode || $[18] !== setCreatedKeys) {
    t8 = () => {
      if (!canSave) {
        toast.error("请选择至少一个修饰键和主键");
        return;
      }
      setCreatedKeys((state) => {
        const prev = state ?? [];
        const sigNew = sortedModifiersSignature(currentKey);
        const duplicate = prev.some((item) => {
          if (isDrawerEdit && currentEditItem && sameStoredItem(item, currentEditItem)) {
            return false;
          }
          return item.keydownCode === keydownCode && sortedModifiersSignature(item.currentKey) === sigNew;
        });
        if (duplicate) {
          toast.error("该组合已存在");
          return prev;
        }
        if (isDrawerEdit && currentEditItem) {
          return prev.map((item_0) => sameStoredItem(item_0, currentEditItem) ? {
            keydownCode,
            currentKey: [...currentKey]
          } : item_0);
        }
        return [...prev, {
          keydownCode,
          currentKey: [...currentKey]
        }];
      });
      setOpen(false);
      closeAndResetParents();
    };
    $[12] = canSave;
    $[13] = closeAndResetParents;
    $[14] = currentEditItem;
    $[15] = currentKey;
    $[16] = isDrawerEdit;
    $[17] = keydownCode;
    $[18] = setCreatedKeys;
    $[19] = t8;
  } else {
    t8 = $[19];
  }
  const handleConfirm = t8;
  const mainKeyLabel = keydownCode.length > 0 ? allkeys[keydownCode]?.key[0] ?? keydownCode : "点击下方键盘选择主键";
  let t9;
  if ($[20] !== setCurrentEditItem || $[21] !== setIsDrawerEdit) {
    t9 = () => {
      setIsDrawerEdit(false);
      setCurrentEditItem(void 0);
      handleInit();
    };
    $[20] = setCurrentEditItem;
    $[21] = setIsDrawerEdit;
    $[22] = t9;
  } else {
    t9 = $[22];
  }
  let t10;
  let t11;
  if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
    t10 = /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "size-4 shrink-0", "aria-hidden": true });
    t11 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "新建组合按键" });
    $[23] = t10;
    $[24] = t11;
  } else {
    t10 = $[23];
    t11 = $[24];
  }
  let t12;
  if ($[25] !== t9) {
    t12 = /* @__PURE__ */ jsxRuntimeExports.jsx(DrawerTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", onClick: t9, children: [
      t10,
      t11
    ] }) });
    $[25] = t9;
    $[26] = t12;
  } else {
    t12 = $[26];
  }
  let t13;
  if ($[27] !== drawerTitle) {
    t13 = /* @__PURE__ */ jsxRuntimeExports.jsx(DrawerTitle, { className: "font-normal", children: drawerTitle });
    $[27] = drawerTitle;
    $[28] = t13;
  } else {
    t13 = $[28];
  }
  let t14;
  if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
    t14 = /* @__PURE__ */ jsxRuntimeExports.jsx(DrawerDescription, { children: "选择修饰键与主键后保存；主键请在下方键盘图中点击选择。" });
    $[29] = t14;
  } else {
    t14 = $[29];
  }
  let t15;
  if ($[30] !== t13) {
    t15 = /* @__PURE__ */ jsxRuntimeExports.jsxs(DrawerHeader, { className: "shrink-0", children: [
      t13,
      t14
    ] });
    $[30] = t13;
    $[31] = t15;
  } else {
    t15 = $[31];
  }
  let t16;
  if ($[32] !== currentKey) {
    t16 = pressKeyAllkeys.compare.map((item_1) => {
      const isSelected = currentKey.includes(item_1.code);
      return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", "aria-pressed": isSelected, "aria-label": `${isSelected ? "取消" : "选择"}修饰键 ${item_1.Pointer[0]}`, className: cn("flex size-14 cursor-pointer select-none items-center justify-center rounded-md text-sm font-normal", "transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-out", "focus-visible:ring-ring focus-visible:ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2", "touch-manipulation active:translate-y-px active:shadow-none", isSelected ? "border-primary bg-primary text-primary-foreground border shadow-inner dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.35)]" : "border-border border bg-background text-muted-foreground shadow-sm hover:bg-primary/10 dark:border-border/70 dark:bg-muted/30 dark:text-muted-foreground dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] dark:hover:bg-muted/45"), onClick: () => {
        setCurrentKey((prev_0) => {
          const foundIndex = prev_0.findIndex((data) => data === item_1.code);
          if (foundIndex !== -1) {
            return prev_0.filter((_, i) => i !== foundIndex);
          }
          return [...prev_0, item_1.code];
        });
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block leading-tight", children: item_1.Pointer[0] }) }, item_1.key);
    });
    $[32] = currentKey;
    $[33] = t16;
  } else {
    t16 = $[33];
  }
  let t17;
  if ($[34] !== t16) {
    t17 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid w-28 grid-cols-2 gap-2", children: t16 });
    $[34] = t16;
    $[35] = t17;
  } else {
    t17 = $[35];
  }
  let t18;
  if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
    t18 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "select-none text-2xl font-light text-muted-foreground/40 dark:text-muted-foreground/55", "aria-hidden": true, children: "+" });
    $[36] = t18;
  } else {
    t18 = $[36];
  }
  const t19 = keydownCode.length > 0 ? "border-2 border-solid border-primary bg-primary/10 text-foreground shadow-sm dark:bg-primary/20 dark:shadow-[0_1px_0_0_rgba(255,255,255,0.06),0_4px_12px_rgba(0,0,0,0.35)]" : "border-2 border-dashed border-muted-foreground/30 bg-transparent dark:border-muted-foreground/45 dark:bg-muted/10";
  let t20;
  if ($[37] !== t19) {
    t20 = cn("relative flex size-20 min-w-0 select-none items-center justify-center rounded-md text-sm font-medium", "transition-[color,background-color,border-color,box-shadow] duration-300 ease-out", t19);
    $[37] = t19;
    $[38] = t20;
  } else {
    t20 = $[38];
  }
  const t21 = keydownCode.length > 0 ? "text-foreground" : "text-muted-foreground";
  let t22;
  if ($[39] !== t21) {
    t22 = cn("line-clamp-3 max-w-full px-1 text-center text-xs leading-tight wrap-break-word", t21);
    $[39] = t21;
    $[40] = t22;
  } else {
    t22 = $[40];
  }
  let t23;
  if ($[41] !== mainKeyLabel || $[42] !== t22) {
    t23 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: t22, children: mainKeyLabel });
    $[41] = mainKeyLabel;
    $[42] = t22;
    $[43] = t23;
  } else {
    t23 = $[43];
  }
  let t24;
  if ($[44] !== t20 || $[45] !== t23) {
    t24 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: t20, "aria-live": "polite", children: t23 });
    $[44] = t20;
    $[45] = t23;
    $[46] = t24;
  } else {
    t24 = $[46];
  }
  const t25 = !canSave;
  let t26;
  if ($[47] !== handleConfirm || $[48] !== t25) {
    t26 = /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", onClick: handleConfirm, disabled: t25, children: "保存" });
    $[47] = handleConfirm;
    $[48] = t25;
    $[49] = t26;
  } else {
    t26 = $[49];
  }
  let t27;
  if ($[50] !== t17 || $[51] !== t24 || $[52] !== t26) {
    t27 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-border/50 bg-muted/40 p-6 sm:gap-8 dark:border-border/60 dark:bg-muted/20 dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]", children: [
      t17,
      t18,
      t24,
      t26
    ] });
    $[50] = t17;
    $[51] = t24;
    $[52] = t26;
    $[53] = t27;
  } else {
    t27 = $[53];
  }
  let t28;
  if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
    t28 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0 w-full aspect-100/26", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BoardKeys, { maxWidthPx: null }) });
    $[54] = t28;
  } else {
    t28 = $[54];
  }
  let t29;
  if ($[55] !== t27) {
    t29 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-4 pb-6 [-webkit-overflow-scrolling:touch]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 py-2", children: [
      t27,
      t28
    ] }) });
    $[55] = t27;
    $[56] = t29;
  } else {
    t29 = $[56];
  }
  let t30;
  if ($[57] !== t15 || $[58] !== t29) {
    t30 = /* @__PURE__ */ jsxRuntimeExports.jsx(DrawerContent, { className: "overflow-hidden data-[vaul-drawer-direction=bottom]:max-h-[min(92dvh,calc(100dvh-1.5rem))]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CompareKeysPickProvider, { value: pickContextValue, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex min-h-0 w-full max-w-7xl flex-1 flex-col overflow-hidden", children: [
      t15,
      t29
    ] }) }) });
    $[57] = t15;
    $[58] = t29;
    $[59] = t30;
  } else {
    t30 = $[59];
  }
  let t31;
  if ($[60] !== handleOpenChange || $[61] !== open || $[62] !== t12 || $[63] !== t30) {
    t31 = /* @__PURE__ */ jsxRuntimeExports.jsxs(Drawer, { open, onOpenChange: handleOpenChange, children: [
      t12,
      t30
    ] });
    $[60] = handleOpenChange;
    $[61] = open;
    $[62] = t12;
    $[63] = t30;
    $[64] = t31;
  } else {
    t31 = $[64];
  }
  return t31;
};
function legacyCompareKeysStorageKey(productId) {
  return `${productId}_createdCompareKeys`;
}
function parseLegacyLocalStorage$1(productId) {
  const raw = localStorage.getItem(legacyCompareKeysStorageKey(productId));
  if (!raw) {
    return null;
  }
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return null;
    }
    const items = [];
    for (const entry of parsed) {
      if (entry && typeof entry === "object" && "keydownCode" in entry && "currentKey" in entry && typeof entry.keydownCode === "string" && Array.isArray(entry.currentKey) && entry.currentKey.every((k) => typeof k === "string")) {
        items.push({
          keydownCode: entry.keydownCode,
          currentKey: [...entry.currentKey]
        });
      }
    }
    return items;
  } catch {
    return null;
  }
}
async function ensureCompareKeysMigrated(productId) {
  const existing = await db.compareKeysSettings.get(productId);
  if (existing) {
    return;
  }
  const fromLegacy = parseLegacyLocalStorage$1(productId);
  if (!fromLegacy) {
    return;
  }
  await db.compareKeysSettings.put({
    productId,
    items: fromLegacy,
    updatedAt: Date.now()
  });
  localStorage.removeItem(legacyCompareKeysStorageKey(productId));
}
async function applyCompareKeysUpdate(productId, updater) {
  await db.transaction("rw", db.compareKeysSettings, async () => {
    let row = await db.compareKeysSettings.get(productId);
    if (!row) {
      await ensureCompareKeysMigrated(productId);
      row = await db.compareKeysSettings.get(productId);
    }
    const prev = row?.items ?? [];
    const next = updater(prev);
    await db.compareKeysSettings.put({
      productId,
      items: next,
      updatedAt: Date.now()
    });
  });
}
const CompareKeys = () => {
  const currentKeyRect = useKeyboardStore((state) => state.currentKeyRect);
  const fnCurrentKeyRect = useKeyboardStore((state_0) => state_0.currentFnKeyRect);
  const fnDefaultKeyRect = useKeyboardStore((state_1) => state_1.defaultFnKeyRect);
  const defaultKeyRect = useKeyboardStore((state_2) => state_2.defaultKeyRect);
  const setFnCurrentKeyRect = useKeyboardStore((state_3) => state_3.setCurrentFnKeyRect);
  const newProductId = useDeviceInfoStore((state_4) => state_4.deviceInfoData._productId);
  reactExports.useEffect(() => {
    void ensureCompareKeysMigrated(newProductId);
  }, [newProductId]);
  const record = useLiveQuery(() => db.compareKeysSettings.get(newProductId), [newProductId]);
  const createdCompareKeys = record?.items ?? [];
  const setCreatedCompareKeys = reactExports.useCallback((action) => {
    void applyCompareKeysUpdate(newProductId, (prev) => typeof action === "function" ? action(prev) : action);
  }, [newProductId]);
  const [isDrawerEdit, setIsDrawerEdit] = reactExports.useState(false);
  const [currentEditItem, setCurrentEditItem] = reactExports.useState();
  const handleEdit = (item) => {
    setCurrentEditItem(item);
  };
  const handleDelete = async (target) => {
    let val2 = 0;
    target.currentKey.forEach((item_0) => {
      val2 = val2 | parseInt(codeValues[item_0][1], 16);
    });
    const tripletByte0 = KeyType.FN_COMBO;
    const tripletByte1 = parseInt(formatToHex(val2), 16);
    const thirdHex = codeValues[target.keydownCode][2] === "0x00" ? codeValues[target.keydownCode][1] : codeValues[target.keydownCode][2];
    const tripletByte2 = parseInt(thirdHex, 16);
    for (let i = 0; i < currentKeyRect.length; i += 3) {
      if (currentKeyRect[i] === tripletByte0 && currentKeyRect[i + 1] === tripletByte1 && currentKeyRect[i + 2] === tripletByte2) {
        currentKeyRect[i] = defaultKeyRect[i];
        currentKeyRect[i + 1] = defaultKeyRect[i + 1];
        currentKeyRect[i + 2] = defaultKeyRect[i + 2];
      }
    }
    for (let i_0 = 0; i_0 < fnCurrentKeyRect.length; i_0 += 3) {
      if (fnCurrentKeyRect[i_0] === tripletByte0 && fnCurrentKeyRect[i_0 + 1] === tripletByte1 && fnCurrentKeyRect[i_0 + 2] === tripletByte2) {
        fnCurrentKeyRect[i_0] = fnDefaultKeyRect[i_0];
        fnCurrentKeyRect[i_0 + 1] = fnDefaultKeyRect[i_0 + 1];
        fnCurrentKeyRect[i_0 + 2] = fnDefaultKeyRect[i_0 + 2];
        await setFnCurrentKeyRect(fnCurrentKeyRect);
      }
    }
    setCreatedCompareKeys((prev_0) => prev_0.filter((item_1) => !(item_1.keydownCode === target.keydownCode && item_1.currentKey.join(",") === target.currentKey.join(","))));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full p-2 overflow-y-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CompareKeysDrawer, { setCreatedKeys: setCreatedCompareKeys, isDrawerEdit, currentEditItem, setIsDrawerEdit, setCurrentEditItem }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-normal", children: "已添加的组合按键:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex items-center gap-2 flex-wrap", children: createdCompareKeys.map((item_2, index) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(CompareKeyButton, { currentKey: item_2.currentKey, code: item_2.keydownCode, setIsDrawerEdit, handleEdit, item: item_2, onDelete: async () => await handleDelete(item_2) }, index);
      }) })
    ] })
  ] });
};
const HongRecordButton = (t0) => {
  const $ = compilerRuntimeExports.c(83);
  const {
    item,
    changeTime,
    changeOption,
    onDelete,
    index
  } = t0;
  const t1 = `item-${index}`;
  let t2;
  if ($[0] !== t1) {
    t2 = {
      id: t1
    };
    $[0] = t1;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable(t2);
  let t3;
  if ($[2] !== transform) {
    t3 = CSS.Transform.toString(transform);
    $[2] = transform;
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] !== t3 || $[5] !== transition) {
    t4 = {
      transform: t3,
      transition
    };
    $[4] = t3;
    $[5] = transition;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  const style = t4;
  const t5 = isDragging && "z-50 opacity-50";
  let t6;
  if ($[7] !== t5) {
    t6 = cn("w-full min-w-0 max-w-full cursor-grab rounded border bg-muted px-2 py-1.5 sm:px-3", t5);
    $[7] = t5;
    $[8] = t6;
  } else {
    t6 = $[8];
  }
  let t7;
  if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ jsxRuntimeExports.jsx(GripVertical, { className: "size-4 shrink-0 text-muted-foreground" });
    $[9] = t7;
  } else {
    t7 = $[9];
  }
  const t8 = allkeys?.[item.key]?.key[0] ?? item.key;
  let t9;
  if ($[10] !== t8) {
    t9 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-w-0 max-w-[5.5rem] shrink-0 items-center justify-center rounded bg-background px-1.5 py-1 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate tabular-nums", children: t8 }) });
    $[10] = t8;
    $[11] = t9;
  } else {
    t9 = $[11];
  }
  const t10 = item.option === "up" ? "left-0.5 w-[calc(50%-2px)]" : "left-[calc(50%-2px)] w-[calc(50%-2px)]";
  let t11;
  if ($[12] !== t10) {
    t11 = cn("absolute top-0.5 bottom-0.5 rounded bg-black transition-all duration-200 ease-out dark:bg-white", t10);
    $[12] = t10;
    $[13] = t11;
  } else {
    t11 = $[13];
  }
  let t12;
  if ($[14] !== t11) {
    t12 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: t11 });
    $[14] = t11;
    $[15] = t12;
  } else {
    t12 = $[15];
  }
  const t13 = item.option === "up" ? "text-white dark:text-black" : "text-foreground";
  let t14;
  if ($[16] !== t13) {
    t14 = cn("relative z-10 flex items-center justify-center gap-0.5 rounded px-1 py-0.5 text-[10px] leading-none transition-colors duration-100 sm:gap-1 sm:px-1.5 sm:text-xs", t13);
    $[16] = t13;
    $[17] = t14;
  } else {
    t14 = $[17];
  }
  let t15;
  if ($[18] !== changeOption || $[19] !== index) {
    t15 = (e) => {
      e.stopPropagation();
      changeOption("up", index);
    };
    $[18] = changeOption;
    $[19] = index;
    $[20] = t15;
  } else {
    t15 = $[20];
  }
  let t16;
  let t17;
  if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
    t16 = /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpFromLine, { className: "size-3 sm:size-3.5" });
    t17 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "抬起" });
    $[21] = t16;
    $[22] = t17;
  } else {
    t16 = $[21];
    t17 = $[22];
  }
  let t18;
  if ($[23] !== t14 || $[24] !== t15) {
    t18 = /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: t14, onClick: t15, children: [
      t16,
      t17
    ] });
    $[23] = t14;
    $[24] = t15;
    $[25] = t18;
  } else {
    t18 = $[25];
  }
  const t19 = item.option === "down" ? "text-white dark:text-black" : "text-foreground";
  let t20;
  if ($[26] !== t19) {
    t20 = cn("relative z-10 flex items-center justify-center gap-0.5 rounded px-1 py-0.5 text-[10px] leading-none transition-colors duration-100 sm:gap-1 sm:px-1.5 sm:text-xs", t19);
    $[26] = t19;
    $[27] = t20;
  } else {
    t20 = $[27];
  }
  let t21;
  if ($[28] !== changeOption || $[29] !== index) {
    t21 = (e_0) => {
      e_0.stopPropagation();
      changeOption("down", index);
    };
    $[28] = changeOption;
    $[29] = index;
    $[30] = t21;
  } else {
    t21 = $[30];
  }
  let t22;
  let t23;
  if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
    t22 = /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDownToLine, { className: "size-3 sm:size-3.5" });
    t23 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "按下" });
    $[31] = t22;
    $[32] = t23;
  } else {
    t22 = $[31];
    t23 = $[32];
  }
  let t24;
  if ($[33] !== t20 || $[34] !== t21) {
    t24 = /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: t20, onClick: t21, children: [
      t22,
      t23
    ] });
    $[33] = t20;
    $[34] = t21;
    $[35] = t24;
  } else {
    t24 = $[35];
  }
  let t25;
  if ($[36] !== t12 || $[37] !== t18 || $[38] !== t24) {
    t25 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex shrink-0 items-center justify-center overflow-hidden rounded bg-secondary p-0.5", children: [
      t12,
      t18,
      t24
    ] });
    $[36] = t12;
    $[37] = t18;
    $[38] = t24;
    $[39] = t25;
  } else {
    t25 = $[39];
  }
  let t26;
  if ($[40] !== changeTime || $[41] !== index) {
    t26 = (e_2) => {
      const value = e_2.target.value.replace(/[^\d]/g, "");
      if (value === "") {
        changeTime(1, index);
      } else {
        const numValue = Number(value);
        const newValue = Math.min(Math.max(numValue, 1), 65535);
        changeTime(newValue, index);
      }
    };
    $[40] = changeTime;
    $[41] = index;
    $[42] = t26;
  } else {
    t26 = $[42];
  }
  let t27;
  if ($[43] !== item.time || $[44] !== t26) {
    t27 = /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", inputMode: "numeric", value: item.time, className: "w-14 shrink-0 border-0 bg-transparent py-0.5 text-center text-sm outline-none sm:w-16", onClick: _temp$4, onChange: t26 });
    $[43] = item.time;
    $[44] = t26;
    $[45] = t27;
  } else {
    t27 = $[45];
  }
  let t28;
  if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
    t28 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 px-0.5 text-xs text-muted-foreground sm:text-sm", children: "ms" });
    $[46] = t28;
  } else {
    t28 = $[46];
  }
  let t29;
  if ($[47] !== changeTime || $[48] !== index || $[49] !== item.time) {
    t29 = (e_3) => {
      e_3.stopPropagation();
      changeTime(Math.min(item.time + 1, 65535), index);
    };
    $[47] = changeTime;
    $[48] = index;
    $[49] = item.time;
    $[50] = t29;
  } else {
    t29 = $[50];
  }
  let t30;
  if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
    t30 = /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "size-3 text-muted-foreground" });
    $[51] = t30;
  } else {
    t30 = $[51];
  }
  let t31;
  if ($[52] !== t29) {
    t31 = /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "p-0.5 transition-colors hover:bg-muted", onClick: t29, children: t30 });
    $[52] = t29;
    $[53] = t31;
  } else {
    t31 = $[53];
  }
  let t32;
  if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
    t32 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border" });
    $[54] = t32;
  } else {
    t32 = $[54];
  }
  let t33;
  if ($[55] !== changeTime || $[56] !== index || $[57] !== item.time) {
    t33 = (e_4) => {
      e_4.stopPropagation();
      changeTime(Math.max(item.time - 1, 1), index);
    };
    $[55] = changeTime;
    $[56] = index;
    $[57] = item.time;
    $[58] = t33;
  } else {
    t33 = $[58];
  }
  let t34;
  if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
    t34 = /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "size-3 text-muted-foreground" });
    $[59] = t34;
  } else {
    t34 = $[59];
  }
  let t35;
  if ($[60] !== t33) {
    t35 = /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "p-0.5 transition-colors hover:bg-muted", onClick: t33, children: t34 });
    $[60] = t33;
    $[61] = t35;
  } else {
    t35 = $[61];
  }
  let t36;
  if ($[62] !== t31 || $[63] !== t35) {
    t36 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 flex-col border-l border-border bg-background", children: [
      t31,
      t32,
      t35
    ] });
    $[62] = t31;
    $[63] = t35;
    $[64] = t36;
  } else {
    t36 = $[64];
  }
  let t37;
  if ($[65] !== t27 || $[66] !== t36) {
    t37 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 items-center rounded-md bg-background", children: [
      t27,
      t28,
      t36
    ] });
    $[65] = t27;
    $[66] = t36;
    $[67] = t37;
  } else {
    t37 = $[67];
  }
  let t38;
  if ($[68] !== index || $[69] !== onDelete) {
    t38 = /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "ml-auto size-4 shrink-0 cursor-pointer text-muted-foreground transition-colors hover:text-red-500", onClick: (e_5) => {
      e_5.stopPropagation();
      onDelete(index);
    } });
    $[68] = index;
    $[69] = onDelete;
    $[70] = t38;
  } else {
    t38 = $[70];
  }
  let t39;
  if ($[71] !== t25 || $[72] !== t37 || $[73] !== t38 || $[74] !== t9) {
    t39 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full min-w-0 flex-wrap items-center gap-x-2 gap-y-2", children: [
      t7,
      t9,
      t25,
      t37,
      t38
    ] });
    $[71] = t25;
    $[72] = t37;
    $[73] = t38;
    $[74] = t9;
    $[75] = t39;
  } else {
    t39 = $[75];
  }
  let t40;
  if ($[76] !== attributes || $[77] !== listeners || $[78] !== setNodeRef || $[79] !== style || $[80] !== t39 || $[81] !== t6) {
    t40 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: setNodeRef, style, className: t6, ...attributes, ...listeners, children: t39 });
    $[76] = attributes;
    $[77] = listeners;
    $[78] = setNodeRef;
    $[79] = style;
    $[80] = t39;
    $[81] = t6;
    $[82] = t40;
  } else {
    t40 = $[82];
  }
  return t40;
};
function _temp$4(e_1) {
  return e_1.stopPropagation();
}
const getHongRect = async (device) => {
  const d = resolveDevice(device);
  const readCmd = isMouseDevice(d) ? d.getProtocol().mouseGetHongMessage : d.getProtocol().gethongMessage;
  return readProtocolCommand(d, readCmd, 256);
};
const setHongRect = async (data, device) => {
  const d = resolveDevice(device);
  const writeCmd = isMouseDevice(d) ? d.getProtocol().mouseSetHongMessage : d.getProtocol().sethongMessage;
  await writeProtocolCommand(d, writeCmd, data);
};
const usePressKeyStore = create((set) => ({
  hongRect: [],
  setHongRect: async (data) => {
    await withActiveDeviceBatch(async () => {
      await setHongRect(data);
    });
    set({
      hongRect: data
    });
  },
  getHongRect: async () => {
    const hongRect = await withActiveDeviceBatch(async () => {
      return await getHongRect();
    });
    set({
      hongRect
    });
    return hongRect ?? [];
  }
}));
const formatHongRect = (settings, size) => {
  let hongLen = splitHighLowBytes(settings.length);
  let hong_Rect = [];
  hong_Rect.length = size;
  hong_Rect.fill("0x00");
  hong_Rect[0] = "0xaa";
  hong_Rect[1] = "0x55";
  hong_Rect[4] = hongLen[0];
  hong_Rect[5] = hongLen[1];
  let newIndex = 8;
  newIndex += settings.length * 2;
  for (const key in settings) {
    const len = splitHighLowBytes(newIndex);
    if (settings[key]?.option && settings[key]?.option?.length) {
      hong_Rect[8 + Number(key || "0") * 2] = settings[key].option.length === 0 ? "0x00" : len[0];
      hong_Rect[8 + Number(key || "0") * 2 + 1] = settings[key].option.length === 0 ? "0x00" : len[1];
      if (settings[key].option.length === 0) continue;
      const _num = splitHighLowBytes(settings[key]?.option?.length);
      hong_Rect[newIndex] = _num[0];
      hong_Rect[newIndex + 1] = _num[1];
      newIndex += 4;
      for (const item of settings[key]?.option) {
        let _time = splitHighLowBytes(item.time);
        hong_Rect[newIndex] = _time[0];
        hong_Rect[newIndex + 1] = _time[1];
        const values = codeValues[item.key];
        const isMouseBasic = values != null && parseInt(values[0], 16) === KeyType.MS_BASIC;
        const code = isMouseBasic ? values[1] : values && values[2] !== "0x00" ? values[2] : values?.[1];
        const codeType = isMouseBasic ? 3 : values && values[2] !== "0x00" ? 1 : 2;
        let codeTypeHex = codeType.toString(2).padStart(8, "0");
        codeTypeHex = (item.option === "down" ? "1" : "0") + codeTypeHex.slice(1);
        hong_Rect[newIndex + 2] = code;
        hong_Rect[newIndex + 3] = parseInt(codeTypeHex, 2).toString(16).toUpperCase();
        newIndex += 4;
      }
    }
  }
  hong_Rect[2] = splitHighLowBytes(hong_Rect.length)[0];
  hong_Rect[3] = splitHighLowBytes(hong_Rect.length)[1];
  return hong_Rect;
};
let listenTime = 0;
let optionStore = [];
const downStatus = {};
const MOUSE_BUTTON_TO_CODE = {
  0: "MS_LEFT",
  1: "MS_MIDDLE",
  2: "MS_RIGHT",
  3: "MS_BACKWARD",
  4: "MS_FORWARD"
};
function isHongDrawerUiTarget(target) {
  if (!(target instanceof Element)) return false;
  return Boolean(target.closest('button, input, select, textarea, [role="button"], [data-hong-ui]'));
}
const HongDrawer = ({
  setCreatedHongKeys,
  createdHongKeys,
  drawerEditState,
  drawerOpen,
  setDrawerOpen,
  option,
  setOption,
  setDrawerEditState,
  currentEditIndex
}) => {
  const [startState, setStartState] = reactExports.useState(false);
  const [intervalTime, setIntervalTime] = reactExports.useState("1");
  const [intervalTimeNumber, setIntervalTimeNumber] = reactExports.useState(1);
  const saveHong = usePressKeyStore((state) => state.setHongRect);
  const hongSpaceSize = useDeviceInfoStore((state_0) => state_0.deviceInfoData.hong_space_size);
  const isMouse = useIsMouseDevice();
  const down = reactExports.useRef(false);
  const scrollContainerRef = reactExports.useRef(null);
  const prevOptionLengthRef = reactExports.useRef(option.length);
  const drawerTilte = reactExports.useMemo(() => `${drawerEditState ? "编辑" : "新增"}智能按键`, [drawerEditState]);
  reactExports.useEffect(() => {
    if (!drawerOpen) return;
    setIntervalTime("1");
    setIntervalTimeNumber(1);
  }, [drawerOpen]);
  const handleStart = () => {
    setStartState(true);
  };
  const handleStop = () => {
    setStartState(false);
  };
  const changeTime = reactExports.useCallback((_time, i) => {
    setOption(option.map((item, _i) => {
      return _i === i ? {
        ...item,
        time: _time ? _time : 1
      } : item;
    }));
  }, [option]);
  const changeOption = reactExports.useCallback((_option, i_0) => {
    setOption(option.map((item_0, _i_0) => {
      return _i_0 === i_0 ? {
        ...item_0,
        option: _option
      } : item_0;
    }));
  }, [option]);
  const handleDrawerClose = (open) => {
    if (!open) {
      handleClearKeys();
      setDrawerOpen(false);
      setDrawerEditState(false);
    }
  };
  const handleClearKeys = () => {
    setStartState(false);
    setOption([]);
    optionStore = [];
  };
  const handleSave = async () => {
    if (option.length === 0) {
      toast.error("请先录制宏按键");
      return;
    }
    const newCreatedHongKeys = lodashExports.cloneDeep(createdHongKeys ?? []);
    if (drawerEditState) {
      newCreatedHongKeys.forEach((item_1, index) => {
        if (index === currentEditIndex) {
          item_1.option = option;
        }
      });
    } else {
      const startIndex = newCreatedHongKeys.length * 2 + 8;
      newCreatedHongKeys.push({
        key: `${(/* @__PURE__ */ new Date()).getTime()}${Math.floor(Math.random() * 10)}`,
        name: generateNextName(newCreatedHongKeys),
        option,
        indexArray: [startIndex, startIndex + 1],
        index: 0,
        isDelete: false
      });
    }
    const hongRect = formatHongRect(newCreatedHongKeys, hongSpaceSize);
    newCreatedHongKeys?.map((item_2) => {
      item_2.index = highLowToDecimal(parseInt(hongRect[item_2.indexArray[1]], 16), parseInt(hongRect[item_2.indexArray[0]], 16));
      return item_2;
    });
    await saveHong(hongRect.map((item_3) => parseInt(item_3, 16)));
    setCreatedHongKeys(newCreatedHongKeys);
    setDrawerOpen(false);
    setDrawerEditState(false);
    handleClearKeys();
  };
  function generateNextName(existingObjects) {
    if (!existingObjects || existingObjects.length === 0) {
      return "m1";
    }
    const numbers = existingObjects.filter((obj) => /^m\d+$/.test(obj.name) && !obj.isDelete).map((obj_0) => parseInt(obj_0.name.replace("m", ""))).sort((a, b) => a - b);
    let expected = 1;
    for (const num of numbers) {
      if (num > expected) break;
      expected = num + 1;
    }
    return `M${expected}`;
  }
  const handleUploadHongKey = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".json";
    fileInput.style.display = "none";
    fileInput.onchange = (e) => {
      const target = e.target;
      const file = target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const jsonData = JSON.parse(event.target?.result);
          console.log("jsonData", jsonData);
          if (Array.isArray(jsonData) && jsonData.length > 0) {
            setOption(jsonData);
            optionStore = jsonData;
          } else {
            toast.error("无效的宏按键数据格式");
          }
        } catch (error) {
          console.error("解析JSON文件失败:", error);
          toast.error("解析JSON文件失败，请确保文件格式正确");
        }
      };
      reader.onerror = () => {
        toast.error("读取文件失败");
      };
      reader.readAsText(file);
    };
    document.body.appendChild(fileInput);
    fileInput.click();
    document.body.removeChild(fileInput);
  };
  reactExports.useEffect(() => {
    function appendAction(key, action) {
      const options = optionStore;
      const nowdate = (/* @__PURE__ */ new Date()).getTime();
      if (options?.length) {
        options[options.length - 1].time = intervalTime === "2" ? intervalTimeNumber : nowdate - listenTime;
      }
      optionStore = [...options, {
        key,
        option: action,
        time: 1
      }];
      setOption(optionStore);
      listenTime = nowdate;
      down.current = action === "down";
      downStatus[key] = action === "down";
    }
    function downlisten(e_0) {
      e_0.preventDefault();
      if (!startState || downStatus[e_0.code] || !e_0.code) return;
      appendAction(e_0.code, "down");
    }
    function uplisten(e_1) {
      e_1.preventDefault();
      if (!startState || !e_1.code) return;
      appendAction(e_1.code, "up");
    }
    function mouseDownListen(e_2) {
      if (isHongDrawerUiTarget(e_2.target)) return;
      const code = MOUSE_BUTTON_TO_CODE[e_2.button];
      if (!code || !startState || downStatus[code]) return;
      e_2.preventDefault();
      appendAction(code, "down");
    }
    function mouseUpListen(e_3) {
      if (isHongDrawerUiTarget(e_3.target)) return;
      const code_0 = MOUSE_BUTTON_TO_CODE[e_3.button];
      if (!code_0 || !startState) return;
      e_3.preventDefault();
      appendAction(code_0, "up");
    }
    function contextMenuListen(e_4) {
      if (!startState) return;
      if (isHongDrawerUiTarget(e_4.target)) return;
      e_4.preventDefault();
    }
    const setlisten = function() {
      document.addEventListener("keydown", downlisten);
      document.addEventListener("keyup", uplisten);
      if (isMouse) {
        document.addEventListener("mousedown", mouseDownListen, true);
        document.addEventListener("mouseup", mouseUpListen, true);
        document.addEventListener("contextmenu", contextMenuListen, true);
      }
    };
    const removelisten = function() {
      document.removeEventListener("keydown", downlisten);
      document.removeEventListener("keyup", uplisten);
      document.removeEventListener("mousedown", mouseDownListen, true);
      document.removeEventListener("mouseup", mouseUpListen, true);
      document.removeEventListener("contextmenu", contextMenuListen, true);
    };
    if (startState) setlisten();
    else removelisten();
    return () => {
      removelisten();
    };
  }, [startState, intervalTime, intervalTimeNumber, isMouse]);
  reactExports.useEffect(() => {
    if (option.length > prevOptionLengthRef.current) {
      setTimeout(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
        }
      }, 0);
    }
    prevOptionLengthRef.current = option.length;
  }, [option.length]);
  const sensors = useSensors(useSensor(PointerSensor, {
    activationConstraint: {
      distance: 5
    },
    // 拖动 5px 才触发拖拽
    restrictToVerticalAxis: false
  }));
  const handleDragEnd = (event_0) => {
    console.log("event", event_0);
    const {
      active,
      over
    } = event_0;
    if (!over || active.id === over.id) return;
    setOption((prevItems) => {
      const activeIndex = parseInt(String(active.id).replace("item-", ""));
      const overIndex = parseInt(String(over.id).replace("item-", ""));
      return arrayMove(prevItems, activeIndex, overIndex);
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sheet, { open: drawerOpen, onOpenChange: handleDrawerClose, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SheetContent, { side: "right", className: cn(
    // 覆盖 sheet 默认的 w-3/4 与 sm:max-w-sm（仅 max-w-none 无法取消 sm:max-w-sm）
    "flex h-full w-full flex-col gap-0 p-0 sm:w-1/3 sm:max-w-none"
  ), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-0 flex-1 flex-col px-4 pt-6 pb-4 pr-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetHeader, { className: "shrink-0 space-y-0 p-0 pb-3 text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTitle, { className: "text-base font-semibold", children: drawerTilte }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SheetDescription, { className: "sr-only", children: "录制与编辑宏动作序列" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 space-y-3 border-b border-border/40 pb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
        !startState ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "text-xs", onClick: handleStart, size: "sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "开始录制" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "destructive", className: "text-xs", onClick: handleStop, size: "sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePause, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "停止录制" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "text-xs", onClick: handleClearKeys, size: "sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "清除按键" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "text-xs", onClick: handleUploadHongKey, size: "sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Import, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "导入宏" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "text-xs", onClick: handleSave, size: "sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Save, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "保存" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-muted-foreground", children: "间隔时间：" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: intervalTime, onValueChange: (value) => {
          setIntervalTime(value);
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 w-[140px] !border-primary/10 focus:ring-primary ", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "选择间隔" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "1", className: "focus:bg-primary", children: "默认时间" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "2", className: "focus:bg-primary", children: "固定时间" })
          ] })
        ] }),
        intervalTime === "2" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", min: 1, max: 65535, step: 1, placeholder: "1–100000", value: intervalTimeNumber, className: "h-8 w-24 text-center text-sm", onChange: (e_5) => {
            const value_0 = e_5.target.value.replace(/[^\d]/g, "");
            if (value_0 === "") {
              setIntervalTimeNumber(1);
            } else {
              const numValue = Number(value_0);
              if (numValue >= 1 && numValue <= 1e5) {
                setIntervalTimeNumber(numValue);
              } else if (numValue > 1e5) {
                setIntervalTimeNumber(1e5);
              } else {
                setIntervalTimeNumber(1);
              }
            }
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "ms" })
        ] }) : null
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DndContext, { sensors, collisionDetection: closestCenter, onDragEnd: handleDragEnd, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SortableContext, { items: option.map((_, index_0) => `item-${index_0}`), strategy: verticalListSortingStrategy, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: scrollContainerRef, className: "mt-3 min-h-[200px] flex-1 overflow-y-auto rounded-lg border border-border/50 bg-muted/20 scrollbar-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full flex-col gap-2 p-2", children: [
      option.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-2 py-8 text-center text-sm text-muted-foreground", children: startState ? "请按下键盘或鼠标按键录制，动作将显示在此处" : "开始录制或导入宏后，可在此拖拽排序、编辑间隔" }) : null,
      option.map((item_4, index_1) => /* @__PURE__ */ jsxRuntimeExports.jsx(HongRecordButton, { item: item_4, index: index_1, changeTime, changeOption, onDelete: (i_1) => {
        const newOption = option.filter((__0, j) => j !== i_1);
        setOption(newOption);
        optionStore = newOption;
      } }, index_1))
    ] }) }) }) })
  ] }) }) }) });
};
function HongDleteAlertDialog(t0) {
  const $ = compilerRuntimeExports.c(18);
  const {
    open,
    setOpen,
    handleDleteClick,
    item
  } = t0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: "清空智能按键" });
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  let t2;
  if ($[1] !== item.name) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
      t1,
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogDescription, { children: [
        "确定清空",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500 font-bold", children: item.name }),
        "智能按键吗?"
      ] })
    ] });
    $[1] = item.name;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] !== setOpen) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { onMouseDown: _temp4$2, onMouseUp: _temp5$1, onClick: (e_4) => {
      e_4.stopPropagation();
      e_4.preventDefault();
      setOpen(false);
    }, children: "取消" });
    $[3] = setOpen;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] !== handleDleteClick || $[6] !== setOpen) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { onMouseDown: _temp6$1, onMouseUp: _temp7$1, onClick: (e_7) => {
      e_7.stopPropagation();
      e_7.preventDefault();
      handleDleteClick(e_7);
      setOpen(false);
    }, children: "确认" });
    $[5] = handleDleteClick;
    $[6] = setOpen;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  let t5;
  if ($[8] !== t3 || $[9] !== t4) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
      t3,
      t4
    ] });
    $[8] = t3;
    $[9] = t4;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  let t6;
  if ($[11] !== t2 || $[12] !== t5) {
    t6 = /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { onMouseDown: _temp$3, onMouseUp: _temp2$3, onClick: _temp3$2, children: [
      t2,
      t5
    ] });
    $[11] = t2;
    $[12] = t5;
    $[13] = t6;
  } else {
    t6 = $[13];
  }
  let t7;
  if ($[14] !== open || $[15] !== setOpen || $[16] !== t6) {
    t7 = /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open, onOpenChange: setOpen, children: t6 });
    $[14] = open;
    $[15] = setOpen;
    $[16] = t6;
    $[17] = t7;
  } else {
    t7 = $[17];
  }
  return t7;
}
function _temp7$1(e_6) {
  return e_6.stopPropagation();
}
function _temp6$1(e_5) {
  return e_5.stopPropagation();
}
function _temp5$1(e_3) {
  return e_3.stopPropagation();
}
function _temp4$2(e_2) {
  return e_2.stopPropagation();
}
function _temp3$2(e_1) {
  return e_1.stopPropagation();
}
function _temp2$3(e_0) {
  return e_0.stopPropagation();
}
function _temp$3(e) {
  return e.stopPropagation();
}
const HongMacroBindContext = reactExports.createContext(null);
function HongMacroBindProvider(t0) {
  const $ = compilerRuntimeExports.c(7);
  const {
    children
  } = t0;
  const [pending, setPending] = reactExports.useState(null);
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = (targetIndex, item) => {
      if (!item.option?.length) {
        toast.error("请先录制宏按键");
        return;
      }
      const rect = getCurrentLayerKeyRect();
      if (!ensureRemapTargetNotAdvancedKey(rect, targetIndex)) {
        return;
      }
      setPending({
        targetIndex,
        item
      });
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const beginBind = t1;
  let t2;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = () => {
      setPending(null);
    };
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  const cancelBind = t2;
  let t3;
  if ($[2] !== pending) {
    t3 = {
      pending,
      beginBind,
      cancelBind
    };
    $[2] = pending;
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  const value = t3;
  let t4;
  if ($[4] !== children || $[5] !== value) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsx(HongMacroBindContext.Provider, { value, children });
    $[4] = children;
    $[5] = value;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  return t4;
}
function useHongMacroBind() {
  const ctx = reactExports.useContext(HongMacroBindContext);
  if (!ctx) {
    throw new Error("useHongMacroBind must be used within HongMacroBindProvider");
  }
  return ctx;
}
function hongMacroDragId(item, listIndex) {
  if (typeof item.key === "string" && item.key.length > 0) {
    return `hong-macro-${item.key}`;
  }
  const [a0, a1] = item.indexArray ?? [];
  if (typeof a0 === "number" && typeof a1 === "number") {
    return `hong-macro-idx-${a0}-${a1}`;
  }
  if (typeof item.index === "number") {
    return `hong-macro-n-${item.index}`;
  }
  if (typeof listIndex === "number") {
    return `hong-macro-list-${listIndex}`;
  }
  return `hong-macro-${item.name}`;
}
function HongMacroDragPreview(t0) {
  const $ = compilerRuntimeExports.c(3);
  const {
    item
  } = t0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = cn(pressKeyIconTileSurfaceClass, pressKeyIconTileDragPreviewExtraClass, "cursor-grabbing px-1 text-center");
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  let t2;
  if ($[1] !== item.name) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: t1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80 block leading-tight wrap-break-word transition-colors duration-200", children: item.name }) });
    $[1] = item.name;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  return t2;
}
const HongButton = (t0) => {
  const $ = compilerRuntimeExports.c(57);
  const {
    item,
    editIndex,
    setDrawerEditState,
    setDrawerOpen,
    setCurrentEditIndex,
    setOption,
    onClearRecording
  } = t0;
  const {
    selectedTargetIndex
  } = usePressKeyRemap();
  const {
    beginBind
  } = useHongMacroBind();
  const [hongDleteAlertDialogOpen, setHongDleteAlertDialogOpen] = reactExports.useState(false);
  let t1;
  if ($[0] !== editIndex || $[1] !== item) {
    t1 = hongMacroDragId(item, editIndex);
    $[0] = editIndex;
    $[1] = item;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  let t2;
  if ($[3] !== item) {
    t2 = {
      kind: "hongMacroSource",
      item
    };
    $[3] = item;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  let t3;
  if ($[5] !== t1 || $[6] !== t2) {
    t3 = {
      id: t1,
      data: t2
    };
    $[5] = t1;
    $[6] = t2;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging
  } = useDraggable(t3);
  let t4;
  if ($[8] !== item || $[9] !== onClearRecording) {
    t4 = () => {
      onClearRecording(item);
    };
    $[8] = item;
    $[9] = onClearRecording;
    $[10] = t4;
  } else {
    t4 = $[10];
  }
  const handleDleteClick = t4;
  let t5;
  if ($[11] !== editIndex || $[12] !== item.option || $[13] !== setCurrentEditIndex || $[14] !== setDrawerEditState || $[15] !== setDrawerOpen || $[16] !== setOption) {
    t5 = () => {
      setOption(item.option);
      setCurrentEditIndex(editIndex);
      setDrawerEditState(true);
      setDrawerOpen(true);
    };
    $[11] = editIndex;
    $[12] = item.option;
    $[13] = setCurrentEditIndex;
    $[14] = setDrawerEditState;
    $[15] = setDrawerOpen;
    $[16] = setOption;
    $[17] = t5;
  } else {
    t5 = $[17];
  }
  const openEditDrawer = t5;
  let t6;
  if ($[18] !== beginBind || $[19] !== item || $[20] !== openEditDrawer || $[21] !== selectedTargetIndex) {
    t6 = () => {
      if (selectedTargetIndex !== null) {
        beginBind(selectedTargetIndex, item);
        return;
      }
      openEditDrawer();
    };
    $[18] = beginBind;
    $[19] = item;
    $[20] = openEditDrawer;
    $[21] = selectedTargetIndex;
    $[22] = t6;
  } else {
    t6 = $[22];
  }
  const handleMainClick = t6;
  let t7;
  if ($[23] !== item.key || $[24] !== item.name || $[25] !== item.option) {
    t7 = () => {
      const jsonData = JSON.stringify(item.option, null, 2);
      const blob = new Blob([jsonData], {
        type: "application/json"
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${item.name}_${item.key}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    };
    $[23] = item.key;
    $[24] = item.name;
    $[25] = item.option;
    $[26] = t7;
  } else {
    t7 = $[26];
  }
  const handleExport = t7;
  let t8;
  if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
    t8 = cn(pressKeyIconTileSurfaceClass, "touch-none relative");
    $[27] = t8;
  } else {
    t8 = $[27];
  }
  let t9;
  if ($[28] !== item.option) {
    t9 = item.option && item.option.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-1 left-1 z-10 size-2 rounded-full bg-green-500", "aria-hidden": true });
    $[28] = item.option;
    $[29] = t9;
  } else {
    t9 = $[29];
  }
  let t10;
  if ($[30] !== handleExport || $[31] !== item.option) {
    t10 = item.option && item.option.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", className: "absolute top-1 right-1 z-10 size-5", "aria-label": "更多操作", size: "icon", variant: "secondary", onClick: _temp$2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ellipsis, { className: "size-4 rounded-full" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { align: "end", sideOffset: 8, onMouseDown: _temp2$2, onMouseUp: _temp3$1, onClick: _temp4$1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onSelect: (e_3) => {
          e_3.preventDefault();
          handleExport();
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { className: "size-4" }),
          "导出"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onSelect: (e_4) => {
          e_4.preventDefault();
          setHongDleteAlertDialogOpen(true);
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Trash, { className: "size-4 text-red-500" }),
          "清空已录制按键"
        ] })
      ] })
    ] });
    $[30] = handleExport;
    $[31] = item.option;
    $[32] = t10;
  } else {
    t10 = $[32];
  }
  let t11;
  if ($[33] !== isDragging || $[34] !== transform) {
    t11 = {
      ...isDragging ? {
        opacity: 0
      } : {
        transform: CSS.Translate.toString(transform),
        opacity: 1
      }
    };
    $[33] = isDragging;
    $[34] = transform;
    $[35] = t11;
  } else {
    t11 = $[35];
  }
  let t12;
  if ($[36] !== item.name) {
    t12 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80 group-hover:text-primary block line-clamp-2 max-w-full break-all text-center text-sm font-medium leading-tight transition-colors duration-200", children: item.name });
    $[36] = item.name;
    $[37] = t12;
  } else {
    t12 = $[37];
  }
  let t13;
  if ($[38] !== attributes || $[39] !== handleMainClick || $[40] !== item.name || $[41] !== listeners || $[42] !== setNodeRef || $[43] !== t11 || $[44] !== t12) {
    t13 = /* @__PURE__ */ jsxRuntimeExports.jsx("button", { ref: setNodeRef, type: "button", className: "absolute inset-0 flex cursor-grab flex-col items-center justify-center gap-0.5 px-1 pt-5 pb-1 text-wrap active:cursor-grabbing", style: t11, "aria-label": item.name, ...listeners, ...attributes, onClick: handleMainClick, children: t12 });
    $[38] = attributes;
    $[39] = handleMainClick;
    $[40] = item.name;
    $[41] = listeners;
    $[42] = setNodeRef;
    $[43] = t11;
    $[44] = t12;
    $[45] = t13;
  } else {
    t13 = $[45];
  }
  let t14;
  if ($[46] !== handleDleteClick) {
    t14 = (e_5) => {
      e_5?.stopPropagation();
      handleDleteClick();
    };
    $[46] = handleDleteClick;
    $[47] = t14;
  } else {
    t14 = $[47];
  }
  let t15;
  if ($[48] !== hongDleteAlertDialogOpen || $[49] !== item || $[50] !== t14) {
    t15 = /* @__PURE__ */ jsxRuntimeExports.jsx(HongDleteAlertDialog, { open: hongDleteAlertDialogOpen, setOpen: setHongDleteAlertDialogOpen, handleDleteClick: t14, item });
    $[48] = hongDleteAlertDialogOpen;
    $[49] = item;
    $[50] = t14;
    $[51] = t15;
  } else {
    t15 = $[51];
  }
  let t16;
  if ($[52] !== t10 || $[53] !== t13 || $[54] !== t15 || $[55] !== t9) {
    t16 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: t8, children: [
      t9,
      t10,
      t13,
      t15
    ] });
    $[52] = t10;
    $[53] = t13;
    $[54] = t15;
    $[55] = t9;
    $[56] = t16;
  } else {
    t16 = $[56];
  }
  return t16;
};
function _temp$2(e) {
  return e.stopPropagation();
}
function _temp2$2(e_0) {
  return e_0.stopPropagation();
}
function _temp3$1(e_1) {
  return e_1.stopPropagation();
}
function _temp4$1(e_2) {
  return e_2.stopPropagation();
}
function legacyHongKeysStorageKey(productId) {
  return `${productId}_createdHongKeys`;
}
function isHongMacroOptionItem(v) {
  return v !== null && typeof v === "object" && "key" in v && "option" in v && "time" in v && typeof v.key === "string" && typeof v.option === "string" && typeof v.time === "number";
}
function isHongMacroItem(v) {
  if (v === null || typeof v !== "object") {
    return false;
  }
  const o = v;
  if (typeof o.key !== "string" || typeof o.name !== "string" || typeof o.index !== "number" || typeof o.isDelete !== "boolean" || !Array.isArray(o.indexArray) || !Array.isArray(o.option)) {
    return false;
  }
  if (!o.indexArray.every((x) => typeof x === "number")) {
    return false;
  }
  return o.option.every(isHongMacroOptionItem);
}
function parseLegacyLocalStorage(productId) {
  const raw = localStorage.getItem(legacyHongKeysStorageKey(productId));
  if (!raw) {
    return null;
  }
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return null;
    }
    const items = [];
    for (const entry of parsed) {
      if (isHongMacroItem(entry)) {
        items.push({
          key: entry.key,
          name: entry.name,
          option: entry.option.map((x) => ({
            ...x
          })),
          indexArray: [...entry.indexArray],
          index: entry.index,
          isDelete: entry.isDelete
        });
      }
    }
    return items;
  } catch {
    return null;
  }
}
async function ensureHongKeysMigrated(productId) {
  const existing = await db.hongKeysSettings.get(productId);
  if (existing) {
    return;
  }
  const fromLegacy = parseLegacyLocalStorage(productId);
  if (!fromLegacy) {
    return;
  }
  await db.hongKeysSettings.put({
    productId,
    items: fromLegacy,
    updatedAt: Date.now()
  });
  localStorage.removeItem(legacyHongKeysStorageKey(productId));
}
async function applyHongKeysUpdate(productId, updater) {
  await db.transaction("rw", db.hongKeysSettings, async () => {
    let row = await db.hongKeysSettings.get(productId);
    if (!row) {
      await ensureHongKeysMigrated(productId);
      row = await db.hongKeysSettings.get(productId);
    }
    const prev = row?.items ?? [];
    const next = updater(prev);
    await db.hongKeysSettings.put({
      productId,
      items: next,
      updatedAt: Date.now()
    });
  });
}
function macroSlotFromItem(item) {
  const a0 = item.indexArray[0];
  if (a0 === void 0 || item.indexArray.length < 2) {
    return null;
  }
  if ((a0 - 8) % 2 !== 0) {
    return null;
  }
  const slot = (a0 - 8) / 2;
  if (!Number.isInteger(slot) || slot < 0 || slot > 255) {
    return null;
  }
  return slot;
}
const DEFAULT_BIND = {
  mode: "stop",
  stopMode: 0
};
const MIN_PLAY_COUNT$1 = 1;
const MAX_PLAY_COUNT$1 = 255;
async function applyHongMacroMapping(targetIndex, item, bind = DEFAULT_BIND) {
  if (!item.option.length) {
    toast.error("请先录制宏按键");
    return false;
  }
  const slot = macroSlotFromItem(item);
  if (slot === null) {
    toast.error("宏槽位无效");
    return false;
  }
  const api = useKeyboardStore.getState();
  const layer = api.currentLayer;
  const rect = layer === "default" ? api.currentKeyRect : layer === "fn" ? api.currentFnKeyRect : layer === "mac" ? api.macCurrentKeyRect : api.macCurrentFnKeyRect;
  if (targetIndex < 0 || targetIndex + 2 >= rect.length) {
    toast.error("按键索引无效");
    return false;
  }
  const reservedIndex = getReservedWakeFnSlotIndex(api);
  if (reservedIndex !== null && targetIndex === reservedIndex) {
    toast.error("该键为系统保留键，不可修改");
    return false;
  }
  const defaultRect = layer === "fn" ? api.defaultFnKeyRect : layer === "macFn" ? api.macFnDefaultKeyRect : void 0;
  if (isFnLayerTargetLocked(layer, targetIndex, rect, defaultRect, api.fnLockList)) {
    toast.error("该键在 Fn 层已锁定，无法修改");
    return false;
  }
  if (!ensureRemapTargetNotAdvancedKey(rect, targetIndex)) {
    return false;
  }
  let keyType;
  let thirdByte;
  if (bind.mode === "stop") {
    const stopMode = Math.trunc(bind.stopMode);
    if (stopMode < 0 || stopMode > 3) {
      toast.error("宏停止方式无效");
      return false;
    }
    keyType = KeyType.MACRO_NO_COUNT;
    thirdByte = stopMode;
  } else {
    const playCount = Math.trunc(bind.playCount);
    if (!Number.isFinite(playCount) || playCount < MIN_PLAY_COUNT$1 || playCount > MAX_PLAY_COUNT$1) {
      toast.error(`宏播放次数须在 ${MIN_PLAY_COUNT$1}–${MAX_PLAY_COUNT$1} 之间`);
      return false;
    }
    keyType = KeyType.MACRO_WITH_COUNT;
    thirdByte = playCount;
  }
  const next = [...rect];
  next[targetIndex] = keyType;
  next[targetIndex + 1] = slot;
  next[targetIndex + 2] = thirdByte;
  try {
    const applied = await commitLayerKeyRectWrite(layer, next, api);
    if (!applied) return false;
    toast.success("按键已更新");
    return true;
  } catch {
    toast.error("写入设备失败");
    return false;
  }
}
function patchRectTripletForMacroSlot(current, defaultRect, slot, layer, fnDefaultRect, fnLockList) {
  const next = [...current];
  let changed = false;
  const len = Math.min(next.length, defaultRect.length);
  for (let i = 0; i + 2 < len; i += 3) {
    if (!isMacroKeyFirstByte(next[i]) || next[i + 1] !== slot) {
      continue;
    }
    if ((layer === "fn" || layer === "macFn") && fnDefaultRect) {
      if (isFnLayerTargetLocked(layer, i, current, fnDefaultRect, fnLockList)) {
        continue;
      }
    }
    next[i] = defaultRect[i];
    next[i + 1] = defaultRect[i + 1];
    next[i + 2] = defaultRect[i + 2];
    changed = true;
  }
  return {
    next,
    changed
  };
}
async function restoreMacroSlotBindingsToDefault(slot) {
  const api = useKeyboardStore.getState();
  const layer = api.currentLayer;
  let next = null;
  switch (layer) {
    case "default": {
      const {
        next: patched,
        changed
      } = patchRectTripletForMacroSlot(api.currentKeyRect, api.defaultKeyRect, slot, "default", void 0, api.fnLockList);
      if (!changed) return false;
      next = patched;
      break;
    }
    case "fn": {
      const {
        next: patched,
        changed
      } = patchRectTripletForMacroSlot(api.currentFnKeyRect, api.defaultFnKeyRect, slot, "fn", api.defaultFnKeyRect, api.fnLockList);
      if (!changed) return false;
      next = patched;
      break;
    }
    case "mac": {
      const {
        next: patched,
        changed
      } = patchRectTripletForMacroSlot(api.macCurrentKeyRect, api.macDefaultKeyRect, slot, "mac", void 0, api.fnLockList);
      if (!changed) return false;
      next = patched;
      break;
    }
    case "macFn": {
      const {
        next: patched,
        changed
      } = patchRectTripletForMacroSlot(api.macCurrentFnKeyRect, api.macFnDefaultKeyRect, slot, "macFn", api.macFnDefaultKeyRect, api.fnLockList);
      if (!changed) return false;
      next = patched;
      break;
    }
    default:
      return false;
  }
  try {
    const ok = await commitLayerKeyRectWrite(layer, next, api);
    return ok;
  } catch {
    return false;
  }
}
const HongKeys = () => {
  const newProductId = useDeviceInfoStore((state) => state.deviceInfoData._productId);
  const getHongRect2 = usePressKeyStore((state_0) => state_0.getHongRect);
  const isMouseDevice2 = useIsMouseDevice();
  reactExports.useEffect(() => {
    ensureHongKeysMigrated(newProductId);
  }, [newProductId]);
  const record = useLiveQuery(() => db.hongKeysSettings.get(newProductId), [newProductId]);
  const createdHongKeys = record?.items ?? [];
  const setCreatedHongKeys = reactExports.useCallback((action) => {
    void applyHongKeysUpdate(newProductId, (prev) => typeof action === "function" ? action(prev) : action);
  }, [newProductId]);
  const [drawerEditState, setDrawerEditState] = reactExports.useState(false);
  const [drawerOpen, setDrawerOpen] = reactExports.useState(false);
  const [option, setOption] = reactExports.useState([]);
  const [currentEditIndex, setCurrentEditIndex] = reactExports.useState(0);
  const onClearRecording = reactExports.useCallback(async (item) => {
    try {
      const slot = macroSlotFromItem(item);
      if (slot !== null) {
        await restoreMacroSlotBindingsToDefault(slot);
      }
      const hongSpaceSize = useDeviceInfoStore.getState().deviceInfoData.hong_space_size;
      await applyHongKeysUpdate(newProductId, (prev_0) => {
        const next = prev_0.map((x) => x.key === item.key ? {
          ...x,
          option: []
        } : x);
        const hex = formatHongRect(next, hongSpaceSize);
        return next.map((macro) => ({
          ...macro,
          index: highLowToDecimal(parseInt(hex[macro.indexArray[1]], 16), parseInt(hex[macro.indexArray[0]], 16))
        }));
      });
      const row = await db.hongKeysSettings.get(newProductId);
      const items = row?.items ?? [];
      const hongRectHex = formatHongRect(items, hongSpaceSize);
      await usePressKeyStore.getState().setHongRect(hongRectHex.map((x_0) => parseInt(x_0, 16)));
      toast.success("已清空并同步设备");
    } catch {
      toast.error("同步设备失败");
    }
  }, [newProductId]);
  const findKeyCode = (code, codeType) => {
    const normalized = code.toLocaleUpperCase();
    for (const key in codeValues) {
      if (!Object.prototype.hasOwnProperty.call(codeValues, key)) continue;
      const values = codeValues[key];
      const keyType = parseInt(values[0], 16);
      if (codeType === 3) {
        if (keyType === KeyType.MS_BASIC && values[2] === "0x00" && values[1].toLocaleUpperCase() === normalized) {
          return key;
        }
        continue;
      }
      if (codeType === 2) {
        if (keyType !== KeyType.MS_BASIC && values[2] === "0x00" && values[1].toLocaleUpperCase() === normalized) {
          return key;
        }
        continue;
      }
      if (values[1] === "0x00" && values[2].toLocaleUpperCase() === normalized) {
        return key;
      }
    }
    return void 0;
  };
  const formatHongActionData = (data) => {
    return data.reduce((acc, _, index) => {
      if (index % 4 === 0) {
        const time = highLowToDecimal(data[index + 1], data[index]);
        const flagBits = data[index + 3].toString(2).padStart(8, "0");
        const codeType_0 = Number(`0b0${flagBits.slice(1)}`);
        const code_0 = findKeyCode(formatToHex(data[index + 2]), codeType_0) ?? "";
        const option_0 = flagBits[0] === "1" ? "down" : "up";
        acc.push({
          key: code_0,
          option: option_0,
          time
        });
      }
      return acc;
    }, []);
  };
  const handleGetHongRect = async () => {
    const result = await getHongRect2();
    if (result.length) {
      const hongCount = 20;
      const hongAddressCount = hongCount * 2;
      let startIndex = 8 + hongAddressCount;
      const options = [];
      for (let index_0 = 0; index_0 < hongCount; index_0++) {
        const item_0 = {};
        if (result[8 + index_0 * 2] === 0 && result[9 + index_0 * 2] === 0) {
          item_0.option = [];
        } else {
          const hongActionCount = highLowToDecimal(result[startIndex + 1], result[startIndex]);
          const hongActionDataCount = startIndex + 4 + 4 * hongActionCount;
          const data_0 = result.slice(startIndex + 4, hongActionDataCount);
          startIndex = hongActionDataCount;
          item_0.option = formatHongActionData(data_0);
        }
        item_0.name = `M${index_0 + 1}`;
        item_0.key = `${newProductId}-hong-slot-${index_0}`;
        item_0.index = index_0;
        item_0.isDelete = false;
        options.push(item_0);
      }
      for (let index_1 = 0; index_1 < hongAddressCount; index_1 += 2) {
        const slot_0 = index_1 / 2;
        options[slot_0]["indexArray"] = [8 + index_1, 9 + index_1];
        options[slot_0]["key"] = `${newProductId}-hong-slot-${slot_0}`;
      }
      setCreatedHongKeys(lodashExports.cloneDeep(options));
    }
  };
  reactExports.useEffect(() => {
    handleGetHongRect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full p-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HongDrawer, { setCreatedHongKeys, createdHongKeys, drawerEditState, drawerOpen, setDrawerOpen, option, setOption, setDrawerEditState, currentEditIndex }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-normal text-base mb-2", children: "使用宏按键指南" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm text-gray-600 space-y-2 mb-4 pl-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex items-center text-xs mb-2", children: "步骤1:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex items-center text-xs mb-2", children: "点击下方宏按键进行录制，录制完成并保存后左上角将显示绿色指示点" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex items-center text-xs mb-2", children: "步骤2:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex items-center text-xs mb-2", children: isMouseDevice2 ? "在鼠标预览上选择一个按键，再选择已录制的宏按键，即可完成绑定" : "从键盘矩阵中选择一个按键，再选择已录制的宏按键，即可完成绑定" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-normal", children: "已添加的宏按键:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex items-center gap-1.5 flex-wrap", children: createdHongKeys.map((item_1, fullIndex) => ({
        item: item_1,
        fullIndex
      })).filter(({
        item: item_2
      }) => !item_2.isDelete).map(({
        item: item_3,
        fullIndex: fullIndex_0
      }) => /* @__PURE__ */ jsxRuntimeExports.jsx(HongButton, { item: item_3, editIndex: fullIndex_0, setDrawerEditState, setDrawerOpen, setCurrentEditIndex, setOption, onClearRecording }, item_3.key?.length ? item_3.key : `hong-row-${fullIndex_0}`)) })
    ] })
  ] });
};
async function applyCustomKeyMapping(targetIndex, item) {
  const api = useKeyboardStore.getState();
  const layer = api.currentLayer;
  const rect = layer === "default" ? api.currentKeyRect : layer === "fn" ? api.currentFnKeyRect : layer === "mac" ? api.macCurrentKeyRect : api.macCurrentFnKeyRect;
  if (targetIndex < 0 || targetIndex + 2 >= rect.length) {
    toast.error("按键索引无效");
    return false;
  }
  const reservedIndex = getReservedWakeFnSlotIndex(api);
  if (reservedIndex !== null && targetIndex === reservedIndex) {
    toast.error("该键为系统保留键，不可修改");
    return false;
  }
  const defaultRect = layer === "fn" ? api.defaultFnKeyRect : layer === "macFn" ? api.macFnDefaultKeyRect : void 0;
  if (isFnLayerTargetLocked(layer, targetIndex, rect, defaultRect, api.fnLockList)) {
    toast.error("该键在 Fn 层已锁定，无法修改");
    return false;
  }
  if (!ensureRemapTargetNotAdvancedKey(rect, targetIndex)) {
    return false;
  }
  const [b0, b1, b2] = slotToTriplet(item.slot);
  const next = [...rect];
  next[targetIndex] = b0;
  next[targetIndex + 1] = b1;
  next[targetIndex + 2] = b2;
  try {
    const applied = await commitLayerKeyRectWrite(layer, next, api);
    if (!applied) return false;
    toast.success(`已绑定「${item.name}」`);
    return true;
  } catch {
    toast.error("写入设备失败");
    return false;
  }
}
function customKeyDragId(item) {
  return `custom-key-${item.slot}`;
}
function CoverOrFallback(t0) {
  const $ = compilerRuntimeExports.c(11);
  const {
    item,
    className
  } = t0;
  if (item.coverImage) {
    const t12 = item.coverImage;
    const t22 = item.name;
    let t32;
    if ($[0] !== className) {
      t32 = cn("size-6 rounded object-cover", className);
      $[0] = className;
      $[1] = t32;
    } else {
      t32 = $[1];
    }
    let t4;
    if ($[2] !== item.coverImage || $[3] !== item.name || $[4] !== t32) {
      t4 = /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: t12, alt: t22, draggable: false, className: t32 });
      $[2] = item.coverImage;
      $[3] = item.name;
      $[4] = t32;
      $[5] = t4;
    } else {
      t4 = $[5];
    }
    return t4;
  }
  let t1;
  if ($[6] !== className) {
    t1 = cn("flex size-6 items-center justify-center rounded bg-primary/10 text-primary", className);
    $[6] = className;
    $[7] = t1;
  } else {
    t1 = $[7];
  }
  let t2;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx(AppWindow, { className: "size-3.5" });
    $[8] = t2;
  } else {
    t2 = $[8];
  }
  let t3;
  if ($[9] !== t1) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: t1, children: t2 });
    $[9] = t1;
    $[10] = t3;
  } else {
    t3 = $[10];
  }
  return t3;
}
function CustomKeyDragPreview(t0) {
  const $ = compilerRuntimeExports.c(8);
  const {
    item
  } = t0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = cn(pressKeyIconTileSurfaceClass, pressKeyIconTileDragPreviewExtraClass, "cursor-grabbing px-1 text-center");
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  let t2;
  if ($[1] !== item) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx(CoverOrFallback, { item, className: "shrink-0" });
    $[1] = item;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] !== item.name) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block w-full truncate text-foreground/80 text-[11px] leading-tight transition-colors duration-200", children: item.name });
    $[3] = item.name;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] !== t2 || $[6] !== t3) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: t1, children: [
      t2,
      t3
    ] });
    $[5] = t2;
    $[6] = t3;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  return t4;
}
const CustomKeyButton = (t0) => {
  const $ = compilerRuntimeExports.c(35);
  const {
    item
  } = t0;
  const {
    selectedTargetIndex,
    clearTarget
  } = usePressKeyRemap();
  let t1;
  if ($[0] !== item) {
    t1 = customKeyDragId(item);
    $[0] = item;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] !== item) {
    t2 = {
      kind: "customKeySource",
      item
    };
    $[2] = item;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== t1 || $[5] !== t2) {
    t3 = {
      id: t1,
      data: t2
    };
    $[4] = t1;
    $[5] = t2;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging
  } = useDraggable(t3);
  let t4;
  if ($[7] !== clearTarget || $[8] !== item || $[9] !== selectedTargetIndex) {
    t4 = () => {
      if (selectedTargetIndex !== null) {
        applyCustomKeyMapping(selectedTargetIndex, item).then((ok) => {
          if (ok) {
            clearTarget();
          }
        });
      }
    };
    $[7] = clearTarget;
    $[8] = item;
    $[9] = selectedTargetIndex;
    $[10] = t4;
  } else {
    t4 = $[10];
  }
  const handleMainClick = t4;
  let t5;
  if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = cn(pressKeyIconTileSurfaceClass, "touch-none");
    $[11] = t5;
  } else {
    t5 = $[11];
  }
  const t6 = isDragging ? 0 : 1;
  let t7;
  if ($[12] !== t6) {
    t7 = {
      opacity: t6
    };
    $[12] = t6;
    $[13] = t7;
  } else {
    t7 = $[13];
  }
  let t8;
  if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
    t8 = cn("absolute inset-0 flex min-w-0 cursor-grab flex-col items-center justify-center gap-0.5", "px-1 py-1 active:cursor-grabbing");
    $[14] = t8;
  } else {
    t8 = $[14];
  }
  let t9;
  if ($[15] !== isDragging || $[16] !== transform) {
    t9 = isDragging ? void 0 : {
      transform: CSS.Translate.toString(transform)
    };
    $[15] = isDragging;
    $[16] = transform;
    $[17] = t9;
  } else {
    t9 = $[17];
  }
  const t10 = `${item.name} · ${item.type === "url" ? "URL" : "应用"}`;
  let t11;
  if ($[18] !== item) {
    t11 = /* @__PURE__ */ jsxRuntimeExports.jsx(CoverOrFallback, { item, className: "shrink-0" });
    $[18] = item;
    $[19] = t11;
  } else {
    t11 = $[19];
  }
  let t12;
  if ($[20] !== item.name) {
    t12 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block w-full truncate text-foreground/80 group-hover:text-primary text-[11px] leading-tight transition-colors duration-200", children: item.name });
    $[20] = item.name;
    $[21] = t12;
  } else {
    t12 = $[21];
  }
  let t13;
  if ($[22] !== attributes || $[23] !== handleMainClick || $[24] !== item.name || $[25] !== listeners || $[26] !== setNodeRef || $[27] !== t10 || $[28] !== t11 || $[29] !== t12 || $[30] !== t9) {
    t13 = /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { ref: setNodeRef, type: "button", className: t8, style: t9, "aria-label": item.name, title: t10, ...listeners, ...attributes, onClick: handleMainClick, children: [
      t11,
      t12
    ] });
    $[22] = attributes;
    $[23] = handleMainClick;
    $[24] = item.name;
    $[25] = listeners;
    $[26] = setNodeRef;
    $[27] = t10;
    $[28] = t11;
    $[29] = t12;
    $[30] = t9;
    $[31] = t13;
  } else {
    t13 = $[31];
  }
  let t14;
  if ($[32] !== t13 || $[33] !== t7) {
    t14 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: t5, style: t7, children: t13 });
    $[32] = t13;
    $[33] = t7;
    $[34] = t14;
  } else {
    t14 = $[34];
  }
  return t14;
};
const CustomKeys = () => {
  const $ = compilerRuntimeExports.c(72);
  const navigate = useNavigate();
  const productId = useDeviceInfoStore(_temp$1);
  let t0;
  let t1;
  if ($[0] !== productId) {
    t0 = () => productId ? db.customKeysSettings.get(productId) : void 0;
    t1 = [productId];
    $[0] = productId;
    $[1] = t0;
    $[2] = t1;
  } else {
    t0 = $[1];
    t1 = $[2];
  }
  const record = useLiveQuery(t0, t1);
  let t2;
  if ($[3] !== record?.items) {
    t2 = record?.items ?? [];
    $[3] = record?.items;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  const items = t2;
  const [query, setQuery] = reactExports.useState("");
  const [typeFilter, setTypeFilter] = reactExports.useState("all");
  let url = 0;
  let app = 0;
  for (const it of items) {
    if (it.type === "url") {
      url = url + 1;
    } else {
      if (it.type === "app") {
        app = app + 1;
      }
    }
  }
  let t3;
  if ($[5] !== app || $[6] !== items.length || $[7] !== url) {
    t3 = {
      all: items.length,
      url,
      app
    };
    $[5] = app;
    $[6] = items.length;
    $[7] = url;
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  const typeCounts = t3;
  let t4;
  if ($[9] !== items || $[10] !== query || $[11] !== typeFilter) {
    bb0: {
      const kw = query.trim().toLowerCase();
      const base = typeFilter === "all" ? items : items.filter((it_0) => it_0.type === typeFilter);
      if (!kw) {
        t4 = base;
        break bb0;
      }
      t4 = base.filter((it_1) => it_1.name.toLowerCase().includes(kw) || it_1.target.toLowerCase().includes(kw));
    }
    $[9] = items;
    $[10] = query;
    $[11] = typeFilter;
    $[12] = t4;
  } else {
    t4 = $[12];
  }
  const filteredItems = t4;
  let t5;
  if ($[13] !== query || $[14] !== typeFilter) {
    t5 = query.trim() !== "" || typeFilter !== "all";
    $[13] = query;
    $[14] = typeFilter;
    $[15] = t5;
  } else {
    t5 = $[15];
  }
  const hasActiveFilter = t5;
  let t6;
  if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
    t6 = () => {
      setQuery("");
      setTypeFilter("all");
    };
    $[16] = t6;
  } else {
    t6 = $[16];
  }
  const handleClearFilters = t6;
  if (!productId) {
    return null;
  }
  if (items.length === 0) {
    let t72;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
      t72 = /* @__PURE__ */ jsxRuntimeExports.jsxs(EmptyHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyMedia, { variant: "icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AppWindow, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyTitle, { children: "还没有自定义按键" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyDescription, { children: "前往「自定义按键」页创建后，即可在此拖拽到键盘上完成改键。" })
      ] });
      $[17] = t72;
    } else {
      t72 = $[17];
    }
    let t82;
    if ($[18] !== navigate) {
      t82 = () => navigate("/keyboard-driver/customKey");
      $[18] = navigate;
      $[19] = t82;
    } else {
      t82 = $[19];
    }
    let t92;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
      t92 = /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { "data-icon": "inline-start" });
      $[20] = t92;
    } else {
      t92 = $[20];
    }
    let t102;
    if ($[21] !== t82) {
      t102 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Empty, { children: [
        t72,
        /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", onClick: t82, children: [
          t92,
          "前往创建按键"
        ] }) })
      ] }) });
      $[21] = t82;
      $[22] = t102;
    } else {
      t102 = $[22];
    }
    return t102;
  }
  let t7;
  if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "已创建的自定义按键" });
    $[23] = t7;
  } else {
    t7 = $[23];
  }
  let t8;
  if ($[24] !== filteredItems.length || $[25] !== hasActiveFilter || $[26] !== items.length) {
    t8 = hasActiveFilter ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      filteredItems.length,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/60", children: " / " }),
      items.length
    ] }) : items.length;
    $[24] = filteredItems.length;
    $[25] = hasActiveFilter;
    $[26] = items.length;
    $[27] = t8;
  } else {
    t8 = $[27];
  }
  let t9;
  if ($[28] !== t8) {
    t9 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-base font-normal", children: [
      t7,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border/60 bg-muted/40 px-2 py-0.5 font-mono text-[10px] leading-none tabular-nums text-muted-foreground", children: t8 })
    ] });
    $[28] = t8;
    $[29] = t9;
  } else {
    t9 = $[29];
  }
  let t10;
  if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
    t10 = /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "拖拽到键盘键位即可绑定；按下物理按键时将自动打开绑定的 URL / 应用。" });
    $[30] = t10;
  } else {
    t10 = $[30];
  }
  let t11;
  if ($[31] !== t9) {
    t11 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      t9,
      t10
    ] });
    $[31] = t9;
    $[32] = t11;
  } else {
    t11 = $[32];
  }
  let t12;
  if ($[33] !== navigate) {
    t12 = () => navigate("/keyboard-driver/customKey");
    $[33] = navigate;
    $[34] = t12;
  } else {
    t12 = $[34];
  }
  let t13;
  if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
    t13 = /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { "data-icon": "inline-start" });
    $[35] = t13;
  } else {
    t13 = $[35];
  }
  let t14;
  if ($[36] !== t12) {
    t14 = /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "outline", size: "sm", onClick: t12, children: [
      t13,
      "新建 / 管理"
    ] });
    $[36] = t12;
    $[37] = t14;
  } else {
    t14 = $[37];
  }
  let t15;
  if ($[38] !== t11 || $[39] !== t14) {
    t15 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between gap-2", children: [
      t11,
      t14
    ] });
    $[38] = t11;
    $[39] = t14;
    $[40] = t15;
  } else {
    t15 = $[40];
  }
  let t16;
  if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
    t16 = /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { "aria-hidden": true, className: "pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" });
    $[41] = t16;
  } else {
    t16 = $[41];
  }
  let t17;
  if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
    t17 = (e) => setQuery(e.target.value);
    $[42] = t17;
  } else {
    t17 = $[42];
  }
  let t18;
  let t19;
  if ($[43] !== query) {
    t18 = /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "search", value: query, onChange: t17, placeholder: "搜索名称或 URL / 路径", className: "h-8 pl-7 pr-8 text-sm", "aria-label": "搜索自定义按键" });
    t19 = query && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setQuery(""), "aria-label": "清除搜索", className: "absolute right-1.5 top-1/2 inline-flex size-5 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground [&_svg]:size-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}) });
    $[43] = query;
    $[44] = t18;
    $[45] = t19;
  } else {
    t18 = $[44];
    t19 = $[45];
  }
  let t20;
  if ($[46] !== t18 || $[47] !== t19) {
    t20 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-w-[180px] flex-1", children: [
      t16,
      t18,
      t19
    ] });
    $[46] = t18;
    $[47] = t19;
    $[48] = t20;
  } else {
    t20 = $[48];
  }
  let t21;
  if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
    t21 = (v) => setTypeFilter(v);
    $[49] = t21;
  } else {
    t21 = $[49];
  }
  let t22;
  if ($[50] !== typeCounts.all) {
    t22 = /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "all", className: "gap-1.5 text-xs", children: [
      "全部",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-background/70 px-1 font-mono text-[10px] leading-none text-muted-foreground tabular-nums", children: typeCounts.all })
    ] });
    $[50] = typeCounts.all;
    $[51] = t22;
  } else {
    t22 = $[51];
  }
  let t23;
  if ($[52] !== typeCounts.url) {
    t23 = /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "url", className: "gap-1.5 text-xs", children: [
      "URL",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-background/70 px-1 font-mono text-[10px] leading-none text-muted-foreground tabular-nums", children: typeCounts.url })
    ] });
    $[52] = typeCounts.url;
    $[53] = t23;
  } else {
    t23 = $[53];
  }
  let t24;
  if ($[54] !== typeCounts.app) {
    t24 = /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "app", className: "gap-1.5 text-xs", children: [
      "应用",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-background/70 px-1 font-mono text-[10px] leading-none text-muted-foreground tabular-nums", children: typeCounts.app })
    ] });
    $[54] = typeCounts.app;
    $[55] = t24;
  } else {
    t24 = $[55];
  }
  let t25;
  if ($[56] !== t22 || $[57] !== t23 || $[58] !== t24) {
    t25 = /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "h-8", children: [
      t22,
      t23,
      t24
    ] });
    $[56] = t22;
    $[57] = t23;
    $[58] = t24;
    $[59] = t25;
  } else {
    t25 = $[59];
  }
  let t26;
  if ($[60] !== t25 || $[61] !== typeFilter) {
    t26 = /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs, { value: typeFilter, onValueChange: t21, className: "shrink-0", children: t25 });
    $[60] = t25;
    $[61] = typeFilter;
    $[62] = t26;
  } else {
    t26 = $[62];
  }
  let t27;
  if ($[63] !== t20 || $[64] !== t26) {
    t27 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap items-center gap-2", children: [
      t20,
      t26
    ] });
    $[63] = t20;
    $[64] = t26;
    $[65] = t27;
  } else {
    t27 = $[65];
  }
  let t28;
  if ($[66] !== filteredItems) {
    t28 = filteredItems.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-center gap-2 rounded-md border border-dashed border-border/60 bg-muted/20 px-3 py-4 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SearchX, { className: "size-3.5", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "没有匹配的按键" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "sm", className: "h-6 px-2 text-xs", onClick: handleClearFilters, children: "清除筛选" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap items-center gap-1.5", children: filteredItems.map(_temp2$1) });
    $[66] = filteredItems;
    $[67] = t28;
  } else {
    t28 = $[67];
  }
  let t29;
  if ($[68] !== t15 || $[69] !== t27 || $[70] !== t28) {
    t29 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full p-2", children: [
      t15,
      t27,
      t28
    ] });
    $[68] = t15;
    $[69] = t27;
    $[70] = t28;
    $[71] = t29;
  } else {
    t29 = $[71];
  }
  return t29;
};
function _temp$1(s) {
  return s.deviceInfoData._productId;
}
function _temp2$1(item) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CustomKeyButton, { item }, item.key);
}
const stopRadioItems = [{
  value: "0x00",
  id: "r1",
  label: "正常停止",
  tooltipText: "按下播放一次后停止"
}, {
  value: "0x01",
  id: "r2",
  label: "释放停止",
  tooltipText: "按下循环播放，释放播放完本轮停止"
}, {
  value: "0x02",
  id: "r3",
  label: "触发停止",
  tooltipText: "按一下循环播放，再按一下停止"
}, {
  value: "0x03",
  id: "r4",
  label: "释放立即停止",
  tooltipText: "按下循环播放，释放立即停止"
}];
const MIN_PLAY_COUNT = 1;
const MAX_PLAY_COUNT = 255;
function StopModeRadioRow(t0) {
  const $ = compilerRuntimeExports.c(13);
  const {
    value,
    id,
    label,
    tooltipText
  } = t0;
  let t1;
  if ($[0] !== id || $[1] !== value) {
    t1 = /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value, id, className: "dark:border-zinc-700" });
    $[0] = id;
    $[1] = value;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  let t2;
  if ($[3] !== id || $[4] !== label) {
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: id, children: label });
    $[3] = id;
    $[4] = label;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  let t3;
  if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "size-4 cursor-pointer text-gray-500", "aria-label": "说明" }) });
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  let t4;
  if ($[7] !== tooltipText) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip, { children: [
      t3,
      /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContent, { children: tooltipText })
    ] });
    $[7] = tooltipText;
    $[8] = t4;
  } else {
    t4 = $[8];
  }
  let t5;
  if ($[9] !== t1 || $[10] !== t2 || $[11] !== t4) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-x-2", children: [
      t1,
      t2,
      t4
    ] });
    $[9] = t1;
    $[10] = t2;
    $[11] = t4;
    $[12] = t5;
  } else {
    t5 = $[12];
  }
  return t5;
}
function HongMacroBindDialog() {
  const {
    pending,
    cancelBind
  } = useHongMacroBind();
  const {
    clearTarget
  } = usePressKeyRemap();
  const [tab, setTab] = reactExports.useState("stop");
  const [stopMode, setStopMode] = reactExports.useState("0x00");
  const [playCount, setPlayCount] = reactExports.useState(MIN_PLAY_COUNT);
  const [saving, setSaving] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!pending) return;
    setTab("stop");
    setStopMode("0x00");
    setPlayCount(MIN_PLAY_COUNT);
    setSaving(false);
  }, [pending]);
  const open = pending !== null;
  const handleOpenChange = (next) => {
    if (!next) {
      cancelBind();
    }
  };
  const handleSave = async () => {
    console.log("handleSave", pending, saving, !pending || saving);
    if (!pending || saving) return;
    setSaving(true);
    try {
      const ok = tab === "stop" ? await applyHongMacroMapping(pending.targetIndex, pending.item, {
        mode: "stop",
        stopMode: parseInt(stopMode, 16)
      }) : await applyHongMacroMapping(pending.targetIndex, pending.item, {
        mode: "count",
        playCount
      });
      console.log("ok", ok);
      if (ok) {
        clearTarget();
        cancelBind();
      }
    } finally {
      setSaving(false);
    }
  };
  const handlePlayCountChange = (raw) => {
    const n = Number.parseInt(raw, 10);
    if (Number.isNaN(n)) {
      setPlayCount(MIN_PLAY_COUNT);
      return;
    }
    setPlayCount(Math.min(MAX_PLAY_COUNT, Math.max(MIN_PLAY_COUNT, n)));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: handleOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { className: "max-w-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TooltipProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: pending ? `绑定宏：${pending.item.name}` : "绑定宏" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "选择宏停止方式或设定播放次数后保存，将写入当前选中键位。" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { value: tab, onValueChange: (v) => setTab(v), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid w-full grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "stop", children: "宏停止方式" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "count", children: "宏播放次数" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "stop", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-left", children: "宏停止方式" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroup, { className: "flex items-center justify-between", value: stopMode, onValueChange: setStopMode, children: stopRadioItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(StopModeRadioRow, { value: item.value, id: item.id, label: item.label, tooltipText: item.tooltipText }, item.id)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "count", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "hong-macro-play-count", className: "text-left", children: "宏播放次数" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "hong-macro-play-count", type: "number", min: MIN_PLAY_COUNT, max: MAX_PLAY_COUNT, placeholder: `${MIN_PLAY_COUNT}–${MAX_PLAY_COUNT}`, value: playCount, className: "w-28", onChange: (e) => handlePlayCountChange(e.target.value) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", className: "dark:border-zinc-700 dark:hover:bg-zinc-700", disabled: !pending || saving, onClick: handleSave, children: saving ? "保存中…" : "保存" }) })
  ] }) }) });
}
const PressKeyButton = (t0) => {
  const $ = compilerRuntimeExports.c(17);
  const {
    item,
    className,
    asVisualOnly
  } = t0;
  const t1 = asVisualOnly ? pressKeyIconTileDragPreviewExtraClass : "cursor-pointer";
  let t2;
  if ($[0] !== className || $[1] !== t1) {
    t2 = cn(pressKeyIconTileSurfaceClass, t1, className);
    $[0] = className;
    $[1] = t1;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  const surface = t2;
  let t3;
  let t4;
  if ($[3] !== item.Pointer || $[4] !== item.icon) {
    t3 = item?.icon ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/70 group-hover:text-primary transition-colors duration-200 [&>svg]:size-5", children: item.icon }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80 group-hover:text-primary transition-colors duration-200", children: item.Pointer[0] });
    t4 = item?.icon ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-muted-foreground/70 group-hover:text-primary/70 transition-colors duration-200 leading-none truncate max-w-full px-0.5", children: item.Pointer[0] }) : null;
    $[3] = item.Pointer;
    $[4] = item.icon;
    $[5] = t3;
    $[6] = t4;
  } else {
    t3 = $[5];
    t4 = $[6];
  }
  let t5;
  if ($[7] !== t3 || $[8] !== t4) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      t3,
      t4
    ] });
    $[7] = t3;
    $[8] = t4;
    $[9] = t5;
  } else {
    t5 = $[9];
  }
  const body = t5;
  if (asVisualOnly) {
    let t62;
    if ($[10] !== body || $[11] !== surface) {
      t62 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: surface, "aria-hidden": true, children: body });
      $[10] = body;
      $[11] = surface;
      $[12] = t62;
    } else {
      t62 = $[12];
    }
    return t62;
  }
  let t6;
  if ($[13] !== body || $[14] !== item.Pointer[0] || $[15] !== surface) {
    t6 = /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: surface, "aria-label": item.Pointer[0], children: body });
    $[13] = body;
    $[14] = item.Pointer[0];
    $[15] = surface;
    $[16] = t6;
  } else {
    t6 = $[16];
  }
  return t6;
};
function PressKeyPageInner() {
  const $ = compilerRuntimeExports.c(59);
  const {
    clearTarget
  } = usePressKeyRemap();
  const {
    beginBind
  } = useHongMacroBind();
  const isMouseDevice2 = useIsMouseDevice();
  const setCurrentLayer = useKeyboardStore(_temp);
  const productId = useDeviceInfoStore(_temp2);
  let t0;
  if ($[0] !== productId) {
    t0 = getIsOnboardSupported({
      productId
    });
    $[0] = productId;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  const isOnboardSupported = t0;
  const currentFunctionalAreaData = useFunctionalAreaStore(_temp3);
  const connectedDeviceId = useActiveDeviceStore(_temp4);
  const initialSyncDone = useKeyboardDriverSyncStore(_temp5);
  const [keepAliveActive, setKeepAliveActive] = reactExports.useState(true);
  let t1;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = () => setKeepAliveActive(true);
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  reactActivationExports.useActivate(t1);
  let t2;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = () => setKeepAliveActive(false);
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  reactActivationExports.useUnactivate(t2);
  const [selectedTabValue, setSelectedTabValue] = reactExports.useState(pressKeysTabsList[0].value);
  const [activePaletteDrag, setActivePaletteDrag] = reactExports.useState(null);
  let t3;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = {
      activationConstraint: {
        distance: 8
      }
    };
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  const sensors = useSensors(useSensor(PointerSensor, t3));
  let t4;
  let t5;
  if ($[5] !== connectedDeviceId || $[6] !== initialSyncDone || $[7] !== isMouseDevice2) {
    t4 = () => {
      if (!connectedDeviceId || !initialSyncDone || isMouseDevice2) {
        return;
      }
      let canceled = false;
      (async () => {
        try {
          await enqueueSerialRead(() => withActiveDeviceBatch(async () => {
            if (canceled) {
              return;
            }
            const api = useKeyboardStore.getState();
            await api.getDefaultFnKeyRect();
            if (canceled) {
              return;
            }
            await api.getMacDefaultKeyRect();
            if (canceled) {
              return;
            }
            await api.getMacFnDefaultKeyRect();
            if (canceled) {
              return;
            }
            await api.getFnLockList();
          }));
        } catch (t62) {
          const e = t62;
          console.error("[PressKey] 读取默认层 / Fn 锁失败:", e);
        }
      })();
      return () => {
        canceled = true;
      };
    };
    t5 = [connectedDeviceId, initialSyncDone, isMouseDevice2];
    $[5] = connectedDeviceId;
    $[6] = initialSyncDone;
    $[7] = isMouseDevice2;
    $[8] = t4;
    $[9] = t5;
  } else {
    t4 = $[8];
    t5 = $[9];
  }
  reactExports.useEffect(t4, t5);
  let t6;
  if ($[10] !== currentFunctionalAreaData || $[11] !== isOnboardSupported || $[12] !== setCurrentLayer) {
    t6 = () => {
      const layer = useKeyboardStore.getState().currentLayer;
      const isFn = ["fn", "macFn"].includes(layer);
      if (!isOnboardSupported) {
        setCurrentLayer("default");
        return;
      }
      if (currentFunctionalAreaData[26] == 0) {
        setCurrentLayer(isFn ? "fn" : "default");
      } else {
        if (currentFunctionalAreaData[26] == 1) {
          setCurrentLayer(isFn ? "macFn" : "mac");
        }
      }
    };
    $[10] = currentFunctionalAreaData;
    $[11] = isOnboardSupported;
    $[12] = setCurrentLayer;
    $[13] = t6;
  } else {
    t6 = $[13];
  }
  let t7;
  if ($[14] !== currentFunctionalAreaData) {
    t7 = [currentFunctionalAreaData];
    $[14] = currentFunctionalAreaData;
    $[15] = t7;
  } else {
    t7 = $[15];
  }
  reactExports.useEffect(t6, t7);
  let t8;
  if ($[16] !== clearTarget) {
    t8 = (value) => {
      clearTarget();
      setSelectedTabValue(value);
    };
    $[16] = clearTarget;
    $[17] = t8;
  } else {
    t8 = $[17];
  }
  const handleTabChange = t8;
  const resetDragBodyChrome = _temp6;
  let t9;
  if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
    t9 = (event) => {
      const d = event.active.data.current;
      if (d && typeof d === "object" && "kind" in d && d.kind === "boardSource" && typeof d.code === "string" && typeof d.label === "string" && "item" in d && d.item && typeof d.item === "object" && "Pointer" in d.item && Array.isArray(d.item.Pointer) && "surface" in d && (d.surface === "iconTile" || d.surface === "boardKey")) {
        setActivePaletteDrag({
          kind: "board",
          item: d.item,
          surface: d.surface
        });
        document.body.style.cursor = "grabbing";
        document.body.style.userSelect = "none";
        return;
      }
      if (d && typeof d === "object" && "kind" in d && d.kind === "quickFnSource" && "item" in d && d.item && typeof d.item === "object" && Array.isArray(d.item.Pointer) && Array.isArray(d.item.arr) && d.item.arr?.length === 3) {
        setActivePaletteDrag({
          kind: "quickFn",
          item: d.item
        });
        document.body.style.cursor = "grabbing";
        document.body.style.userSelect = "none";
        return;
      }
      if (d && typeof d === "object" && "kind" in d && d.kind === "compareKeySource" && "item" in d && d.item && typeof d.item === "object" && typeof d.item.keydownCode === "string" && Array.isArray(d.item.currentKey)) {
        setActivePaletteDrag({
          kind: "compare",
          item: d.item
        });
        document.body.style.cursor = "grabbing";
        document.body.style.userSelect = "none";
        return;
      }
      if (d && typeof d === "object" && "kind" in d && d.kind === "hongMacroSource" && "item" in d && d.item && typeof d.item === "object" && typeof d.item.key === "string" && typeof d.item.name === "string" && Array.isArray(d.item.option) && Array.isArray(d.item.indexArray)) {
        setActivePaletteDrag({
          kind: "hong",
          item: d.item
        });
        document.body.style.cursor = "grabbing";
        document.body.style.userSelect = "none";
        return;
      }
      if (d && typeof d === "object" && "kind" in d && d.kind === "customKeySource" && "item" in d && d.item && typeof d.item === "object" && typeof d.item.slot === "number" && typeof d.item.name === "string") {
        setActivePaletteDrag({
          kind: "customKey",
          item: d.item
        });
        document.body.style.cursor = "grabbing";
        document.body.style.userSelect = "none";
      }
    };
    $[18] = t9;
  } else {
    t9 = $[18];
  }
  const handleDragStart = t9;
  let t10;
  let t11;
  if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
    t10 = () => () => resetDragBodyChrome();
    t11 = [resetDragBodyChrome];
    $[19] = t10;
    $[20] = t11;
  } else {
    t10 = $[19];
    t11 = $[20];
  }
  reactExports.useEffect(t10, t11);
  let t12;
  if ($[21] !== beginBind || $[22] !== clearTarget) {
    t12 = async (event_0) => {
      resetDragBodyChrome();
      setActivePaletteDrag(null);
      const {
        active,
        over
      } = event_0;
      if (!over) {
        return;
      }
      const a = active.data.current;
      const o = over.data.current;
      if (!o || typeof o !== "object" || !("kind" in o) || o.kind !== "targetKey" || typeof o.index !== "number") {
        return;
      }
      if (a && typeof a === "object" && "kind" in a && a.kind === "boardSource" && typeof a.code === "string") {
        const ok = await applyBoardKeyMapping(o.index, a.code);
        if (ok) {
          clearTarget();
        }
        return;
      }
      if (a && typeof a === "object" && "kind" in a && a.kind === "quickFnSource" && "item" in a && a.item && typeof a.item === "object" && Array.isArray(a.item.arr) && a.item.arr?.length === 3) {
        const tri = a.item.arr;
        const display = a.item.Pointer[0]?.trim() || "快捷功能";
        const ok_0 = await applyQuickFunctionTripletMapping(o.index, tri, display);
        if (ok_0) {
          clearTarget();
        }
        return;
      }
      if (a && typeof a === "object" && "kind" in a && a.kind === "compareKeySource" && "item" in a && a.item && typeof a.item === "object" && typeof a.item.keydownCode === "string" && Array.isArray(a.item.currentKey)) {
        const ok_1 = await applyCompareKeyMapping(o.index, a.item);
        if (ok_1) {
          clearTarget();
        }
        return;
      }
      if (a && typeof a === "object" && "kind" in a && a.kind === "hongMacroSource" && "item" in a && a.item && typeof a.item === "object" && typeof a.item.key === "string") {
        beginBind(o.index, a.item);
        return;
      }
      if (a && typeof a === "object" && "kind" in a && a.kind === "customKeySource" && "item" in a && a.item && typeof a.item === "object" && typeof a.item.slot === "number") {
        const ok_2 = await applyCustomKeyMapping(o.index, a.item);
        if (ok_2) {
          clearTarget();
        }
      }
    };
    $[21] = beginBind;
    $[22] = clearTarget;
    $[23] = t12;
  } else {
    t12 = $[23];
  }
  const handleDragEnd = t12;
  let t13;
  if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
    t13 = () => {
      resetDragBodyChrome();
      setActivePaletteDrag(null);
    };
    $[24] = t13;
  } else {
    t13 = $[24];
  }
  const handleDragCancel = t13;
  let t14;
  let t15;
  if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
    t14 = cn("relative flex h-full flex-col gap-3 overflow-hidden px-4 py-3", "bg-[radial-gradient(circle_at_18%_4%,oklch(0.84_0.08_220/0.24),transparent_32%),radial-gradient(circle_at_86%_10%,oklch(0.78_0.12_330/0.16),transparent_34%),linear-gradient(135deg,oklch(0.99_0.01_250),oklch(0.96_0.025_275)_56%,oklch(0.98_0.018_210))]", "dark:bg-[radial-gradient(circle_at_18%_4%,oklch(0.7_0.16_220/0.18),transparent_34%),radial-gradient(circle_at_86%_10%,oklch(0.7_0.18_330/0.12),transparent_34%),linear-gradient(135deg,oklch(0.14_0.035_260),oklch(0.09_0.03_275)_56%,oklch(0.12_0.035_230))]");
    t15 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-10 top-2 h-24 rounded-full bg-white/50 blur-3xl dark:bg-cyan-300/6", "aria-hidden": true });
    $[25] = t14;
    $[26] = t15;
  } else {
    t14 = $[25];
    t15 = $[26];
  }
  let t16;
  if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
    t16 = cn("relative flex-1 min-h-0 flex flex-col justify-center overflow-hidden", "rounded-[1.6rem] border border-white/70 px-4 py-3", "bg-white/58 shadow-[0_10px_24px_oklch(0.42_0.08_265/0.08),inset_0_1px_0_rgba(255,255,255,0.9)]", "backdrop-blur-xl", "before:pointer-events-none before:absolute before:inset-x-8 before:top-5 before:h-px before:bg-linear-to-r before:from-transparent before:via-white/90 before:to-transparent", "after:pointer-events-none after:absolute after:inset-0 after:rounded-[1.6rem] after:bg-[radial-gradient(circle_at_50%_0%,oklch(0.82_0.14_285/0.16),transparent_36%),radial-gradient(circle_at_50%_100%,oklch(0.72_0.185_277/0.1),transparent_42%)]", "dark:border-white/10 dark:bg-[oklch(0.16_0.035_270/0.72)] dark:shadow-[0_12px_28px_oklch(0_0_0/0.34),inset_0_1px_0_rgba(255,255,255,0.07)]", "dark:after:bg-[radial-gradient(circle_at_50%_0%,oklch(0.66_0.16_285/0.12),transparent_38%),radial-gradient(circle_at_50%_100%,oklch(0.72_0.185_277/0.12),transparent_44%)]");
    $[27] = t16;
  } else {
    t16 = $[27];
  }
  let t17;
  if ($[28] !== isMouseDevice2 || $[29] !== keepAliveActive) {
    t17 = isMouseDevice2 ? keepAliveActive ? /* @__PURE__ */ jsxRuntimeExports.jsx(MousePreview, { interactive: true }) : null : /* @__PURE__ */ jsxRuntimeExports.jsx(PressKeyKeyboard, {});
    $[28] = isMouseDevice2;
    $[29] = keepAliveActive;
    $[30] = t17;
  } else {
    t17 = $[30];
  }
  let t18;
  if ($[31] !== t17) {
    t18 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { role: "region", "aria-label": "按键预览", className: t16, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 flex min-h-0 flex-1 items-center justify-center", children: t17 }) });
    $[31] = t17;
    $[32] = t18;
  } else {
    t18 = $[32];
  }
  let t19;
  if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
    t19 = cn("relative flex min-h-0 flex-1 flex-col overflow-hidden gap-0 py-0", "rounded-[1.35rem] border-white/70 bg-white/58 shadow-[0_10px_24px_oklch(0.42_0.08_265/0.08),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl", "after:pointer-events-none after:absolute after:inset-0 after:rounded-[1.35rem] after:bg-[radial-gradient(circle_at_50%_0%,oklch(0.82_0.14_285/0.16),transparent_36%),radial-gradient(circle_at_50%_100%,oklch(0.72_0.185_277/0.1),transparent_42%)]", "hover:shadow-[0_10px_24px_oklch(0.42_0.08_265/0.08),inset_0_1px_0_rgba(255,255,255,0.9)]", "dark:border-white/10 dark:bg-[oklch(0.16_0.035_270/0.72)] dark:shadow-[0_12px_28px_oklch(0_0_0/0.34),inset_0_1px_0_rgba(255,255,255,0.07)] dark:hover:shadow-[0_12px_28px_oklch(0_0_0/0.34),inset_0_1px_0_rgba(255,255,255,0.07)]", "dark:after:bg-[radial-gradient(circle_at_50%_0%,oklch(0.66_0.16_285/0.12),transparent_38%),radial-gradient(circle_at_50%_100%,oklch(0.72_0.185_277/0.1),transparent_44%)]");
    $[33] = t19;
  } else {
    t19 = $[33];
  }
  let t20;
  if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
    t20 = cn("relative z-10 flex min-h-0 flex-1 flex-col overflow-hidden", "px-3 py-3 sm:px-4 sm:py-4");
    $[34] = t20;
  } else {
    t20 = $[34];
  }
  let t21;
  if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
    t21 = /* @__PURE__ */ jsxRuntimeExports.jsx(TabsList, { className: "shrink-0 border border-white/70 bg-white/62 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_3px_10px_oklch(0.42_0.08_265/0.06)] backdrop-blur-md dark:border-white/10 dark:bg-[oklch(0.19_0.035_270/0.68)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]", children: pressKeysTabsList.map(_temp7) });
    $[35] = t21;
  } else {
    t21 = $[35];
  }
  let t22;
  if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
    t22 = /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "boardKeys", className: "mt-0 h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BoardKeys, {}) });
    $[36] = t22;
  } else {
    t22 = $[36];
  }
  let t23;
  if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
    t23 = /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "mousekeys", className: "mt-0 h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mousekeys, {}) });
    $[37] = t23;
  } else {
    t23 = $[37];
  }
  let t24;
  if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
    t24 = /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "otherKeys", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OtherKeys, {}) });
    $[38] = t24;
  } else {
    t24 = $[38];
  }
  let t25;
  if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
    t25 = /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "compareKeys", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CompareKeys, {}) });
    $[39] = t25;
  } else {
    t25 = $[39];
  }
  let t26;
  if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
    t26 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 min-h-0 min-w-0 flex-1 overflow-y-auto overflow-x-hidden", children: [
      t22,
      t23,
      t24,
      t25,
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "hongKeys", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HongKeys, {}) }),
      IS_ELECTRON && /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "customKeys", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CustomKeys, {}) })
    ] });
    $[40] = t26;
  } else {
    t26 = $[40];
  }
  let t27;
  if ($[41] !== handleTabChange || $[42] !== selectedTabValue) {
    t27 = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 flex h-[45%] min-h-0 flex-col overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { role: "region", "aria-label": "按键参数", className: t19, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: t20, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { value: selectedTabValue, onValueChange: handleTabChange, className: "flex h-full min-h-0 flex-col", children: [
      t21,
      t26
    ] }) }) }) });
    $[41] = handleTabChange;
    $[42] = selectedTabValue;
    $[43] = t27;
  } else {
    t27 = $[43];
  }
  let t28;
  if ($[44] !== t18 || $[45] !== t27) {
    t28 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: t14, children: [
      t15,
      t18,
      t27
    ] });
    $[44] = t18;
    $[45] = t27;
    $[46] = t28;
  } else {
    t28 = $[46];
  }
  let t29;
  if ($[47] !== activePaletteDrag) {
    t29 = activePaletteDrag ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "\r\n                cursor-grabbing select-none rounded-[12px] shadow-lg\r\n              ", children: activePaletteDrag.kind === "board" ? activePaletteDrag.surface === "iconTile" ? /* @__PURE__ */ jsxRuntimeExports.jsx(PressKeyButton, { item: activePaletteDrag.item, asVisualOnly: true }) : /* @__PURE__ */ jsxRuntimeExports.jsx(BoardKeyDragPreview, { item: activePaletteDrag.item }) : activePaletteDrag.kind === "quickFn" ? /* @__PURE__ */ jsxRuntimeExports.jsx(PressKeyButton, { item: activePaletteDrag.item, asVisualOnly: true }) : activePaletteDrag.kind === "compare" ? /* @__PURE__ */ jsxRuntimeExports.jsx(CompareKeyDragPreview, { item: activePaletteDrag.item }) : activePaletteDrag.kind === "hong" ? /* @__PURE__ */ jsxRuntimeExports.jsx(HongMacroDragPreview, { item: activePaletteDrag.item }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CustomKeyDragPreview, { item: activePaletteDrag.item }) }) : null;
    $[47] = activePaletteDrag;
    $[48] = t29;
  } else {
    t29 = $[48];
  }
  let t30;
  if ($[49] !== t29) {
    t30 = reactDomExports.createPortal(/* @__PURE__ */ jsxRuntimeExports.jsx(DragOverlay, { dropAnimation: null, children: t29 }), document.body);
    $[49] = t29;
    $[50] = t30;
  } else {
    t30 = $[50];
  }
  let t31;
  if ($[51] !== handleDragEnd || $[52] !== sensors || $[53] !== t28 || $[54] !== t30) {
    t31 = /* @__PURE__ */ jsxRuntimeExports.jsxs(DndContext, { sensors, collisionDetection: pointerWithin, onDragStart: handleDragStart, onDragEnd: handleDragEnd, onDragCancel: handleDragCancel, children: [
      t28,
      t30
    ] });
    $[51] = handleDragEnd;
    $[52] = sensors;
    $[53] = t28;
    $[54] = t30;
    $[55] = t31;
  } else {
    t31 = $[55];
  }
  let t32;
  if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
    t32 = /* @__PURE__ */ jsxRuntimeExports.jsx(HongMacroBindDialog, {});
    $[56] = t32;
  } else {
    t32 = $[56];
  }
  let t33;
  if ($[57] !== t31) {
    t33 = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      t31,
      t32
    ] });
    $[57] = t31;
    $[58] = t33;
  } else {
    t33 = $[58];
  }
  return t33;
}
function _temp7(item) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: item.value, className: "\r\n                  gap-1.5 rounded-md px-3 text-xs\r\n                  data-[state=active]:bg-linear-to-r data-[state=active]:from-primary/16 data-[state=active]:to-violet-500/14\r\n                  data-[state=active]:text-primary\r\n                  data-[state=active]:shadow-[0_6px_14px_var(--glow-primary)]\r\n                  dark:data-[state=active]:shadow-[inset_0_0_10px_var(--glow-primary)]\r\n                  transition-all\r\n                ", children: item.label }, item.value);
}
function _temp6() {
  document.body.style.removeProperty("cursor");
  document.body.style.removeProperty("user-select");
}
function _temp5(s_3) {
  return s_3.initialSyncDone;
}
function _temp4(s_2) {
  return s_2.connectedDeviceId;
}
function _temp3(s_1) {
  return s_1.currentFunctionalAreaData;
}
function _temp2(s_0) {
  return s_0.deviceInfoData._productId;
}
function _temp(s) {
  return s.setCurrentLayer;
}
const PressKeyPage = () => {
  const $ = compilerRuntimeExports.c(1);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsxRuntimeExports.jsx(PressKeyRemapProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HongMacroBindProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(PressKeyPageInner, {}) }) });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
};
export {
  PressKeyPage as default
};
