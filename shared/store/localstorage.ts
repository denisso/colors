import type { Store } from './store';
import type { BaseColor } from '../types';
import { convertHEXToRGB } from '../lib/color/convert-hex-to-rgb';
// уникальный namespace для localStorage
const nameLocalStorageData = '_storage_generator_colors_';

// можно выбрать только некоторые свойства для сохранения в localStorage
// Pick используется для того чтобы в написании не ошибиться
type LocalStorageData = Partial<Record<keyof Pick<Store, 'colors'>, unknown>>;

// чтение выбранных свойств  из localstorage
export const localStorageReader = {
  colors: (str: string): BaseColor[] => {
    return str.split(',').map((hex) => {
      return Object.assign({ id: Date.now(), hex }, convertHEXToRGB(hex));
    });
  },
} satisfies LocalStorageData;

// обертка для записи в localStorage
const writeToStore = (name: string, value: string) => {
  localStorage.setItem(name, value);
};

// запись выбранных свойств  из localstorage
export const localStorageWriter = {
  colors: (name: string, value: BaseColor[]) => {
    writeToStore(name, value.map((itemColor) => itemColor.hex).join(','));
  },
} satisfies LocalStorageData;

//тип результата для readLocalStorage
type ReadLocalStorageResult = Pick<Store, 'colors'>;

export const readLocalStorage = (): ReadLocalStorageResult => {
  const result: ReadLocalStorageResult = {
    colors: [],
  };

  for (const key of Object.keys(result)) {
    try {
      const data = localStorage.getItem(nameLocalStorageData + key);
      if (typeof data == 'string') {
        result[key as keyof ReadLocalStorageResult] =
          localStorageReader[key as keyof ReadLocalStorageResult](data);
      }
    } catch {}
  }

  return result;
};
