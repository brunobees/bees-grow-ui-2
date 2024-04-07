import * as RadixTooltip from "@radix-ui/react-tooltip";

import { styled } from "../../styles";

import { Text } from "../Text";

export const TooltipProvider = styled(RadixTooltip.Provider, {});

export const TooltipRoot = styled(RadixTooltip.Root, {});

export const TooltipTrigger = styled(RadixTooltip.Trigger, {});

export const TooltipPortal = styled(RadixTooltip.Portal, {});

export const TooltipContent = styled(RadixTooltip.TooltipContent, {
  maxWidth: "$40",
  padding: "$2 $3",
  textAlign: "center",

  backgroundColor: "$gray900",
  borderRadius: "$md",
  color: "$ignite500"
});

export const TooltipTooltipArrow = styled(RadixTooltip.TooltipArrow, {
  fill: "$gray900",
});

export const TooltipText = styled(Text, {
  letterSpacing: "-.0056rem",
  color: "$gray100",
});
