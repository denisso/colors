'use client';
import React from 'react';
import { createStoreReact } from 'react-store-light';
import type { Color } from './types/color-types';
import { localStorageReader, localStorageWriter } from './localstorage';

let id = 0;

export const nextId = () => {
  return id++;
};

export type Store = { colors: Color[] };

const storeReact = createStoreReact<Store>();

export const { useStore, useStoreState } = storeReact;

const { StoreProvider } = storeReact;

export const ColorsStoreProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider value={{ colors: [] }}>
      <StoreInit />
      {children}
    </StoreProvider>
  );
};

const StoreInit = () => {
  const store = useStore();

  React.useEffect(() => {
    const colors = localStorageReader['colors']();
    if (colors.length) {
      store.set('colors', colors);
    } else {
      store.set('colors', [{ id: Date.now(), hex: '#000000' }]);
    }

    store.addListener('colors', localStorageWriter['colors']);
    return () => {
      store.removeListener('colors', localStorageWriter['colors']);
    };
  }, [store]);
  return null;
};
