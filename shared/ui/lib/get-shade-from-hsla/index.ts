import { hsla } from "color2k";
import { clamp } from "../clamp";

export function getShadeFromHSLA(
  H: number,
  S0: number,
  L0: number,
  A: number,
  index: number
) {
  const t = (index - 5) / 5;

  const L =
    L0 + (t < 0 ? (1 - L0) * Math.pow(-t, 1.4) : -L0 * Math.pow(t, 1.15));

  const S =
    S0 * (t < 0 ? 1 - Math.pow(-t, 1.1) * 0.45 : 1 + Math.pow(t, 1.2) * 0.25);

  return hsla(H, clamp(S, 0, 1), clamp(L, 0, 1), A);
}