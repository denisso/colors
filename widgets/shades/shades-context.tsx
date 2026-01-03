'use client';
import React from 'react';
import { createStoreReact } from 'react-store-light';
import type { BaseColor } from '@/shared/types';
import { useStore } from '@/shared/store';

const reactStore = createStoreReact<BaseColor>();

export const { useStore: useStoreShade, useStoreKey: useStoreKeyShade } = reactStore;

const { StoreProvider } = reactStore;

type Props = {
  children: React.ReactNode;
  id: number;
};

export function ShadesContextProvider({ children, id }: Props) {
  const store = useStore();
  const color = React.useMemo(() => {
    const colors = store.get('colors');
    const color = colors.find((item) => item.id == id) as BaseColor;
    return color;
  }, [id, store]);

  return <StoreProvider value={color}>{children}</StoreProvider>;
}
