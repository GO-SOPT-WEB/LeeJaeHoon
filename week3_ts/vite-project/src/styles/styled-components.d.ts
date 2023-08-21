import { ColorType, FontSizeTypes } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorType;
    fontSize: FontSizeTypes;
  }
}
