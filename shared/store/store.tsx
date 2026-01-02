import { createStore } from 'react-store-light';
import { isBrowser } from '../lib/helpers';
import type { BaseColor } from '../types';
import { readLocalStorage, localStorageWriter } from './localstorage';

export type Store = { colors: BaseColor[] };

const storeInitData: Store = {
  colors: [{ id: Date.now(), hex: '#000000' }],
};

const initStore = () => {
  if (isBrowser()) {
    const localStorageData = Object.assign(readLocalStorage(), storeInitData);
    const store = createStore<Store>(localStorageData);
    store.addListener('colors', localStorageWriter['colors']);
  }
  return createStore<Store>(storeInitData);
};

export const store = initStore();
