import styled, { css } from "styled-components";

import { tokens } from "../../theme/tokens";

export type ButtonVariantProps = {
  variant: "primary" | "secondary" | "tertiary";
  size: "sm" | "md";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const buttonVariants: Record<
  ButtonVariantProps["variant"],
  ReturnType<typeof css>
> = {
  primary: css`
    color: ${tokens.color.component.icon.button.primary.default};
    background-color: ${tokens.color.component.bg.button.primary.default};

    &:not(:disabled):hover {
      color: ${tokens.color.flavor.brand.grow["grow-80"]};
      border: 1px solid ${tokens.color.flavor.brand.grow["grow-80"]};
    }
  `,
  secondary: css`
    background-color: ${tokens.color.component.icon.button.primary.default};
    color: ${tokens.color.component.bg.button.primary.default};
    border: 1px solid ${tokens.color.component.bg.button.primary.default};

    &:not(:disabled):hover {
      opacity: 0.7;
    }
  `,

  tertiary: css`
    color: ${tokens.color.component.bg.button.primary.default};

    &:not(:disabled):hover {
      opacity: 0.7;
    }
  `,
};

const buttonSizes: Record<
  ButtonVariantProps["size"],
  ReturnType<typeof css>
> = {
  sm: css`
    height: 38px;
  `,
  md: css`
    height: 46px;
  `,
};

export const ButtonComponent = styled.button<ButtonVariantProps>`
  all: unset;
  border-radius: ${tokens.measure["border-radius"]["borderradius-6"]};
  font-size: ${tokens.measure["font-size"]["fontsize-4"]};
  font-weight: ${tokens.fonts["font-weight"].medium};
  font-family: ${tokens.fonts["font-family"]["Work Sans"]};
  line-height: ${tokens.measure["line-height"]["lineheight-6"]};
  text-align: center;
  box-sizing: border-box;
  padding: 0 ${tokens.measure.space["spacing-6"]};
  gap: ${tokens.measure.space["spacing-6"]};
  cursor: pointer;
  transition: all ease-in-out 0.2s;
  border: 1px solid transparent;

  svg {
    width: ${tokens.measure.space["spacing-4"]};
    height: ${tokens.measure.space["spacing-4"]};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  ${(props) => buttonVariants[props.variant]}
  ${(props) => buttonSizes[props.size]}
`;
