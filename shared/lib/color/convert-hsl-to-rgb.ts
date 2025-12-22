import { HSL, RGB } from "@/shared/types";

const roundColor = (color: number): number => {
  return Math.round(color * 255);
};

/**
 * конвертирует HSL в RGB
 * @param hsl - исходный цвет
 * @param result - опционально, будет перезаписа переданный цвет
 * @returns
 */
export const convertHSLToRGB = (hsl: HSL, result?: RGB): RGB => {
  const l = hsl.l / 100;
  if (hsl.s === 0) {
    // achromatic
    const r = roundColor(hsl.l);
    if (result) {
      result.r = r;
      result.g = r;
      result.b = r;
      return result;
    }
    return { r, g: r, b: r };
  }

  // formulae from https://en.wikipedia.org/wiki/HSL_and_HSV
  const huePrime = (((hsl.h % 360) + 360) % 360) / 60;
  const chroma = (1 - Math.abs(2 * l - 1)) * (hsl.s / 100);
  const secondComponent = chroma * (1 - Math.abs((huePrime % 2) - 1));

  let red = 0;
  let green = 0;
  let blue = 0;

  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }

  const lightnessModification = l - chroma / 2;
  const r = roundColor(red + lightnessModification);
  const g = roundColor(green + lightnessModification);
  const b = roundColor(blue + lightnessModification);
  if (result) {
    result.r = r;
    result.g = g;
    result.b = b;
    return result;
  }
  return { r, g, b };
};
