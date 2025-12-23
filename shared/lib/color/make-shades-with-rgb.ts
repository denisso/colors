import type { RGB } from "@/shared/types";

const mixChannel = (from: number, to: number, ratio: number) =>
  from + (to - from) * ratio;

export const rgbShade = (color: RGB, ratio: number) => ({
  red: mixChannel(color.r, 0, ratio),
  green: mixChannel(color.g, 0, ratio),
  blue: mixChannel(color.b, 0, ratio),
});

export const rgbTint = (color: RGB, ratio: number) => ({
  red: mixChannel(color.r, 255, ratio),
  green: mixChannel(color.g, 255, ratio),
  blue: mixChannel(color.b, 255, ratio),
});


