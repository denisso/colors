'use client';
import React from 'react';
import { createStoreReact } from 'react-store-light';
import  { type Color, useStore } from '@/entities/color';

const reactStore = createStoreReact<Color>();

export const { useStore: useStoreShade, useStoreState: useStoreKeyShade } = reactStore;

const { StoreProvider } = reactStore;

type Props = {
  children: React.ReactNode;
  id: number;
};

export function ShadesContextProvider({ children, id }: Props) {
  const store = useStore();
  const color = React.useMemo(() => {
    const colors = store.get('colors');
    const color = colors.find((item) => item.id == id) as Color;
    return color;
  }, [id, store]);

  return <StoreProvider value={color}>{children}</StoreProvider>;
}
