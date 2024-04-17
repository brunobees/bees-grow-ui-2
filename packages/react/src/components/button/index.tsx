import React from "react";

import { ButtonComponent, ButtonVariantProps } from "./styles";

export interface ButtonProps extends ButtonVariantProps {
  title: string;
  onClick?: () => void;
}

export function Button({ title, onClick, ...variantProps }: ButtonProps) {
  return (
    <ButtonComponent {...variantProps} onClick={onClick}>
      {title}
    </ButtonComponent>
  );
}

Button.displayName = "Button";
