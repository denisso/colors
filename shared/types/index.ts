export type ColorShared = HSL & RGB & HEX;

export type HSL = {
  h: number;
  s: number;
  l: number;
};

export type RGB = {
  r: number;
  g: number;
  b: number;
};

export type HEX = {
  hex: string
}