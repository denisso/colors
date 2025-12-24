import type { ColorShared } from "@/shared/types";
import { convertRGBToHEX } from "./convert-rgb-to-hex";

const mixChannel = (from: number, to: number, ratio: number) =>
  from + (to - from) * ratio;

const makeRGBShade = (
  color: ColorShared,
  diff: number,
  ratio: number
): ColorShared => {
  const r = Math.round(mixChannel(color.r, diff, ratio));
  const g = Math.round(mixChannel(color.g, diff, ratio));
  const b = Math.round(mixChannel(color.b, diff, ratio));
  return {
    r,
    g,
    b,
    hex: convertRGBToHEX(r, g, b),
  };
};

export const rgbDark = (color: ColorShared, ratio: number): ColorShared =>
  makeRGBShade(color, 0, ratio);

export const rgbLight = (color: ColorShared, ratio: number): ColorShared =>
  makeRGBShade(color, 255, ratio);

export const makeShadesFromRGB = (hex: string, n: number) => {
  const baseColor: ColorShared = {
    r: parseInt(hex.slice(1, 3), 16),
    g: parseInt(hex.slice(3, 5), 16),
    b: parseInt(hex.slice(5, 7), 16),
    hex,
  };

  const result: ColorShared[] = [];
  const step = 1 / n;
  for (let i = 1; i < n; i++) {
    result.push(rgbLight(baseColor, 1 - step * i));
  }
  result.push(baseColor);
  for (let i = 1; i < n; i++) {
    result.push(rgbDark(baseColor, step * i));
  }
  return result;
};
