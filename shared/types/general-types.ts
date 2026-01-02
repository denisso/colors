/**
 * базовый цвет из которого генерируем оттенки
 */
export type BaseColor = {
  // уникальный индентификатор
  id: number;
} & HEX;

// цвет оттенка RGB & HEX удобный для конвертирования
export type ShadeColor = RGB & HEX;

export type RGB = {
  // используются для вычисления оттенков
  r: number;
  g: number;
  b: number;
};

export type HEX = {
  // используется для хранения в localStorage и СSS
  hex: string;
};
