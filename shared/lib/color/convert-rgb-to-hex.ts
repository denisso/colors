const componentToHex = (c: number) => {
  const hex = c.toString(16);
  return hex.padStart(2, "0");
};

export function convertRGBToHEX(r: number, g: number, b: number) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
