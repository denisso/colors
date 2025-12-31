import { createStore } from 'react-store-light';

const nameLocalStorageData = '_storage_generator_colors_';

type Store = { colors: Set<string> };

const parseLocalStorage = (): Store => {
  const result = {
    colors: new Set<string>(),
  };

  if (typeof localStorage != 'object') {
    return result;
  }
  const keys = Object.keys(result);

  const parser = {
    colors: (str: string): string[] => str.split(','),
  };
  for (const key of keys) {
    const data = localStorage.getItem(nameLocalStorageData + key);
    if (typeof data != 'string') {
      continue;
    }
    result[key as keyof Store] = new Set<string>(parser[key as keyof Store](data));
  }

  return result;
};

export const store = createStore<Store>(parseLocalStorage());
