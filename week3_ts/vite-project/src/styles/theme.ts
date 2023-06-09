import { DefaultTheme } from "styled-components";

const colors = {
  mainLightGreen: "#5BE7C4",
  mainLightGrey: "#F5F7FA",
  mainLightBlue: "#50C1E9",
  mainPurple: "#7A57D1",
  mainWhite: "#ffffff",
  mainLightPink: "#f9bcdd",
  mainDarkPink: "#b689b0",
};

const fontSize = {
  xs: "1rem", // 16
  sm: "1.5rem", //24
  md: "1.75rem",
  lg: "2rem",
  xl: "3rem",
  xxl: "4rem",
};

export type ColorType = typeof colors;
export type FontSizeTypes = typeof fontSize;

export const theme: DefaultTheme = {
  colors,
  fontSize,
};
