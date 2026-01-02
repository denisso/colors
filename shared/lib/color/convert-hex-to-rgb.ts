export const convertHEXToRGB = (hex: string) => {
  const r = parseInt(hex[1], 16) * 16 + parseInt(hex[2], 16);
  const g = parseInt(hex[3], 16) * 16 + parseInt(hex[4], 16);
  const b = parseInt(hex[5], 16) * 16 + parseInt(hex[6], 16);
  return { r, g, b };
};
