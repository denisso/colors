export function isHexRgbColor(value: string) {
  return typeof value === 'string' && /^#[0-9A-Fa-f]{6}$/.test(value);
}
