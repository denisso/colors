import { clamp } from "./clamp";
import guard from "./guard";
import type { HSL } from "@/shared/types";

export function makeShadeFromHSLA(hsl: HSL, index: number, result?: HSL) {
  const t = (index - 5) / 5;

  let s =
    hsl.s *
    (t < 0 ? 1 - Math.pow(-t, 1.1) * 0.45 : 1 + Math.pow(t, 1.2) * 0.25);
  s = guard(0, 100, clamp(s, 0, 1) * 100);

  let l =
    hsl.l +
    (t < 0 ? (1 - hsl.l) * Math.pow(-t, 1.4) : -hsl.l * Math.pow(t, 1.15));
  l = guard(0, 100, clamp(s, 0, 1) * 100);

  if (result) {
    result.h = hsl.h;
    result.s = s;
    result.l = l;
    return result;
  }
  return {
    h: hsl.h,
    s,
    l,
  };
}
