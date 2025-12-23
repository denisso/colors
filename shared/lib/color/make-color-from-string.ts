import type { ColorShared } from "@/shared/types";
import { convertRGBToHSL } from "./convert-rgb-to-hsl";

export const makeColorFromString = (hex: string) => {
  const color: ColorShared = {
    r: parseInt(hex.slice(1, 3), 16),
    g: parseInt(hex.slice(3, 5), 16),
    b: parseInt(hex.slice(5, 7), 16),
    h: 0,
    s: 0,
    l: 0,
    hex,
  };
  convertRGBToHSL(color, color);
  return color;
};
