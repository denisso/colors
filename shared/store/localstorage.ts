'use client';

import type { Store } from './store';
import type { BaseColor } from '../types';
import { convertHEXToRGB } from '../lib/color/convert-hex-to-rgb';
// уникальный namespace для localStorage
const nameLocalStorageData = '_storage_generator_colors_';

// можно выбрать только некоторые свойства для сохранения в localStorage
// Pick используется для того чтобы в написании не ошибиться
type LocalStorageData = Partial<Record<keyof Pick<Store, 'colors'>, unknown>>;

// обертка для записи в localStorage
const readFormStore = (name: string) => {
  const str = localStorage.getItem(nameLocalStorageData + name);
  if(!str){
    return ""
  }
  return str
};

// чтение выбранных свойств  из localstorage
export const localStorageReader = {
  colors: (): BaseColor[] => {
    return readFormStore("colors").split(',').map((hex) => {
      return Object.assign({ id: Date.now(), hex }, convertHEXToRGB(hex));
    });
  },
} satisfies LocalStorageData;

// обертка для записи в localStorage
const writeToStore = (name: string, value: string) => {
  localStorage.setItem(nameLocalStorageData + name, value);
};

// запись выбранных свойств  из localstorage
export const localStorageWriter = {
  colors: (name: string, value: BaseColor[]) => {
    writeToStore(name, value.map((itemColor) => itemColor.hex).join(','));
  },
} satisfies LocalStorageData;

