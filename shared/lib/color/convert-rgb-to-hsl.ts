import type { RGB, HSL } from "@/shared/types";

export function convertRGBToHSL(rgb: RGB, result?: HSL): HSL {
  const max = Math.max(rgb.r, rgb.g, rgb.b);
  const min = Math.min(rgb.r, rgb.g, rgb.b);
  const l = (max + min) / 2;

  // achromatic
  if (max === min) {
    if (result) {
      result.h = 0;
      result.s = 0;
      result.l = l;
      return result;
    }
    return { h: 0, s: 0, l };
  }

  const delta = max - min;
  const s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);

  const h =
    60 *
    (rgb.r === max
      ? (rgb.g - rgb.b) / delta + (rgb.g < rgb.b ? 6 : 0)
      : rgb.g === max
      ? (rgb.b - rgb.r) / delta + 2
      : (rgb.r - rgb.g) / delta + 4);

  if (result) {
    result.h = h;
    result.s = s;
    result.l = l;
    return result;
  }

  return { h, s, l };
}
