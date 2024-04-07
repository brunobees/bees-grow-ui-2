import React, { ComponentProps } from "react";

import { Action } from "@radix-ui/react-toast";
import { X } from "phosphor-react";

import {
  ToastDescription,
  ToastDescriptionContainer,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastTitleArea,
  ToastTitleContainer,
  ToastViewPort,
} from "./styles";

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  swipeDirection: "up" | "down" | "left" | "right";
  title: string;
  description: string;
}

export function Toast({
  swipeDirection,
  title,
  description,
  ...props
}: ToastProps) {
  return (
    <ToastProvider swipeDirection={swipeDirection}>
      <ToastRoot {...props}>
        <ToastTitleContainer asChild>
          <ToastTitleArea>
            <ToastTitle size="xl">{title}</ToastTitle>
            <Action asChild altText="Close">
              <X />
            </Action>
          </ToastTitleArea>
        </ToastTitleContainer>
        <ToastDescriptionContainer asChild>
          <ToastDescription size="sm">{description}</ToastDescription>
        </ToastDescriptionContainer>
      </ToastRoot>
      <ToastViewPort />
    </ToastProvider>
  );
}

Toast.displayName = "Toast";
