'use client';

import type { Store } from './color-store';
import type { Color } from './types/color-types';
import { isHexRgbColor } from '../helpers';
import { nextId } from './color-store';

// уникальный namespace для localStorage
const nameLocalStorageData = '_storage_generator_colors_';

// можно выбрать только некоторые свойства для сохранения в localStorage
// Pick используется для того чтобы в написании не ошибиться
type LocalStorageData = Partial<Record<keyof Pick<Store, 'colors'>, unknown>>;

// обертка для записи в localStorage
const readFormStore = (name: string) => {
  const str = localStorage.getItem(nameLocalStorageData + name);
  if (!str) {
    return '';
  }
  return str;
};

// чтение выбранных свойств  из localstorage
export const localStorageReader = {
  colors: (): Color[] => {
    const colors = readFormStore('colors').split(',');
    const result: Color[] = [];
    for (const hex of colors) {
      if (isHexRgbColor(hex)) {
        result.push({ id: nextId(), hex });
      }
    }
    return result;
  },
} satisfies LocalStorageData;

// обертка для записи в localStorage
const writeToStore = (name: string, value: string) => {
  localStorage.setItem(nameLocalStorageData + name, value);
};

// запись выбранных свойств  из localstorage
export const localStorageWriter = {
  colors: (name: string, value: Color[]) => {
    writeToStore(name, value.map((itemColor) => itemColor.hex).join(','));
  },
} satisfies LocalStorageData;
