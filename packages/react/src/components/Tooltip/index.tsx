import React, { ComponentProps } from "react";

import {
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipRoot,
  TooltipText,
  TooltipTooltipArrow,
  TooltipTrigger,
} from "./styles";

export interface TooltipProps extends ComponentProps<typeof TooltipProvider> {
  tooltipText: string;
  delayDuration?: number;
}

export function Tooltip({
  children,
  tooltipText,
  delayDuration = 0,
  ...props
}: TooltipProps) {
  return (
    <TooltipProvider
      delayDuration={delayDuration}
    >
      <TooltipRoot>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent sideOffset={5} {...props}>
            <TooltipText size="sm">{tooltipText}</TooltipText>
            <TooltipTooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  );
}

Tooltip.displayName = "Tooltip";
