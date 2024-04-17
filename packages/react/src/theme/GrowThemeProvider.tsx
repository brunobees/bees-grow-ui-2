import React, { PropsWithChildren } from "react";

import { ThemeProvider } from "styled-components";

import { tokens } from "./tokens";

export type GrowThemeProviderProps = PropsWithChildren<unknown>;

export default function GrowThemeProvider({
  children,
}: GrowThemeProviderProps) {
  return <ThemeProvider theme={tokens}>{children}</ThemeProvider>;
}
