import * as Toast from "@radix-ui/react-toast";

import { styled, keyframes } from "../../styles";

import { Text } from "../Text";

const VIEWPORT_PADDING = 25;

const hide = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 },
});

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: "translateX(0)" },
});

const swipeOut = keyframes({
  from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
});

export const ToastProvider = styled(Toast.Provider, {});

export const ToastRoot = styled(Toast.Root, {
  display: "flex",
  flexDirection: "column",
  gap: ".25rem",
  padding: "$3 $5",
  width: "$90",

  backgroundColor: "$gray800",
  border: "1px solid $gray500",
  borderRadius: "$sm",

  "&[data-state=\"open\"]": {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  "&[data-state=\"closed\"]": {
    animation: `${hide} 100ms ease-in`,
  },
  "&[data-swipe=\"move\"]": {
    transform: "translateX(var(--radix-toast-swipe-move-x))",
  },
  "&[data-swipe=\"cancel\"]": {
    transform: "translateX(0)",
    transition: "transform 200ms ease-out",
  },
  "&[data-swipe=\"end\"]": {
    animation: `${swipeOut} 100ms ease-out`,
  },
});

export const ToastTitleContainer = styled(Toast.Title, {});

export const ToastTitleArea = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "& svg": {
    width: "$5",
    height: "$5",
    color: "$gray200",
  },
});

export const ToastTitle = styled(Text, {
  color: "$white",
  fontWeight: "$bold",
});

export const ToastDescriptionContainer = styled(Toast.Description, {});

export const ToastDescription = styled(Text, {
  color: "$gray200",
  fontWeight: "$regular",
});

export const ToastViewPort = styled(Toast.Viewport, {
  position: "fixed",
  bottom: 0,
  right: 0,
  display: "flex",
  flexDirection: "column",
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  maxWidth: "100vw",
  margin: 0,
  listStyle: "none",
  zIndex: 2147483647,
  outline: "none",
});
