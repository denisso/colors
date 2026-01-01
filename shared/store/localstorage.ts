import type { Store } from './store';

const nameLocalStorageData = '_storage_generator_colors_';
/**
 * тип для данных в localStorage
 */
export type LocalStorageData = Pick<Store, 'colors'>;

type LocalStorageReader = {
  [K in keyof LocalStorageData]: (arg: string) => LocalStorageData[K];
};

// парсыры для значений из localstorage
export const localStorageReader: LocalStorageReader = {
  colors: (str: string): string[] => str.split(','),
};

type LocalStorageWriters = {
  [K in keyof LocalStorageData]: (arg: LocalStorageData[K]) => string;
};

export const localStorageWriter: LocalStorageWriters = {
  colors: (arg: string[]) => arg.join(','),
};

export const readLocalStorage = (): LocalStorageData => {
  const result: LocalStorageData = {
    colors: [],
  };

  for (const key of Object.keys(result)) {
    try {
      const data = localStorage.getItem(nameLocalStorageData + key);
      if (typeof data == 'string') {
        result[key as keyof LocalStorageData] =
          localStorageReader[key as keyof LocalStorageData](data);
      }
    } catch {}
  }

  return result;
};