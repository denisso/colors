'use client';
import React from 'react';
import { ShadeColor } from '@/shared/types';
import { ShadesContextProvider, useStoreShade } from './shades-context';
import { Container } from '@/shared/ui/layout';
import { makeShadesFromHEX } from '@/entities/color/helpers';
import { Shade } from '@/widgets/shade';
import { InputColor } from '@/widgets/input-color';

const DeleteButton = () => {
  return 
}

const ShadesList = () => {
  const [shades, setShades] = React.useState<ShadeColor[]>([]);
  const store = useStoreShade();
  React.useEffect(() => {
    const handler = (_: string, value: string) => {
      const colors = makeShadesFromHEX(value, 10);
      setShades(colors);
    };
    store.addListener('hex', handler);
    return () => {
      store.removeListener('hex', handler);
    };
  }, [store]);
  return (
    <Container>
      {shades.map((shade, index) => (
        <Shade shade={shade} key={index} className={'h-24 w-20'} />
      ))}
    </Container>
  );
};

type Props = { colorId: number };

export const Shades = ({ colorId }: Props) => {
  return (
    <Container>
      <ShadesContextProvider id={colorId}>
        <ShadesList />
        <InputColor />
      </ShadesContextProvider>
    </Container>
  );
};
