import React from 'react';
import { createStore } from 'react-store-light';
import type { BaseColor } from '@/shared/types';
import { store } from '@/shared/store';

type IContext = ReturnType<typeof createStore<BaseColor>>;

const Context = React.createContext<IContext | undefined>(undefined);

type Props = {
  children: React.ReactNode;
  id: number;
};

export function ShadesContextProvider({ children, id }: Props) {
  const context = React.useMemo(() => {
    const colors = store.get('colors');
    const color = colors.find((item) => item.id == id) as BaseColor;
    return createStore<BaseColor>(color);
  }, [id]);

  return <Context.Provider value={context}>{children}</Context.Provider>;
}

export function useShadesContext() {
  const context = React.useContext(Context);
  if (context === undefined) {
    throw new Error('useShadesContext must be used within a ShadesContextProvider');
  }
  return context;
}
