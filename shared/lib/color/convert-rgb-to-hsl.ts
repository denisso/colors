import type { RGB, HSL } from "@/shared/types";

export function convertRGBToHSL(rgb: RGB, result?: HSL): HSL {
  const r0 = rgb.r / 255
  const g0 = rgb.g / 255
  const b0 = rgb.b / 255
  const max = Math.max(r0, g0, b0);
  const min = Math.min(r0, g0, b0);
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
      ? (g0 - b0) / delta + (g0 < b0 ? 6 : 0)
      : g0 === max
      ? (b0 - r0) / delta + 2
      : (r0 - g0) / delta + 4);

  if (result) {
    result.h = h;
    result.s = s;
    result.l = l;
    return result;
  }

  return { h, s, l };
}
