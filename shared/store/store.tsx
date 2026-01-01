import { createStore } from 'react-store-light';
import { isBrowser } from '../lib/helpers';
import { readLocalStorage, type LocalStorageData, localStorageWriter } from './localstorage';

export type Store = { colors: string[] };

const storeInitData: Store = {
  colors: [],
};

const initStore = () => {
  if (isBrowser()) {
    const localStorageData = readLocalStorage();
    for (const key of Object.keys(localStorageData)) {
      storeInitData[key as keyof LocalStorageData] =
        localStorageData[key as keyof LocalStorageData];
    }
    const store = createStore<Store>(storeInitData);
    store.addListener('colors', (_, value) => {
      localStorageWriter['colors'](value);
    });
  }
  return createStore<Store>(storeInitData);
};

export const store = initStore();
