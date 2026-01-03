'use client';
import React from 'react';
import { createStoreReact } from 'react-store-light';
import type { BaseColor } from '../types';
import { localStorageReader, localStorageWriter } from './localstorage';

export type Store = { colors: BaseColor[] };

const storeReact = createStoreReact<Store>();

export const { useStore, useStoreKey } = storeReact;

const { StoreProvider } = storeReact;
export const GlobalStoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <StoreProvider value={{ colors: [] }}>{children}</StoreProvider>;
};

export const StoreInit = () => {
  const store = useStore();

  React.useEffect(() => {
    const colors = localStorageReader['colors']();
    if (colors) {
      store.set('colors', colors);
    }

    store.addListener('colors', localStorageWriter['colors']);
    return () => {
      store.removeListener('colors', localStorageWriter['colors']);
    };
  }, [store]);
  return null;
};
