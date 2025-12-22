import type { RGB, HEX } from "@/shared/types";
const componentToHex = (c: number) => {
  const hex = c.toString(16);
  return hex.padStart(2, "0");
};

export function convertRGBToHEX(color: RGB, result?: HEX): HEX {
  const hex =
    "#" +
    componentToHex(color.r) +
    componentToHex(color.g) +
    componentToHex(color.b);
  if (result) {
    result.hex = hex;
    return result;
  }
  return { hex };
}
