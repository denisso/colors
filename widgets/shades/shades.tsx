'use client';
import React from 'react';
import type { ShadeColor, Color } from '@/entities/color';
import { ShadesContextProvider, useStoreShade } from './shades-context';
import { Container } from '@/shared/ui/layout';
import { makeShadesFromHEX } from '@/entities/color/helpers';
import { Shade } from '@/widgets/shade';
import { InputColor } from '@/widgets/input-color';
import { Button } from '@/shared/ui/controls';
import { useStore } from '@/entities/color';

const Controls = () => {
  const store = useStore();
  const storeShade = useStoreShade();
  const handleDelete = () => {
    const colors: Color[] = [];
    const id = storeShade.get('id');
    for (const color of store.get('colors')) {
      if (color.id != id) {
        colors.push(color);
      }
    }
    store.set('colors', colors);
  };
  return (
    <Container>
      <InputColor />
      <Button onClick={handleDelete}>Delete</Button>
    </Container>
  );
};

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
    <Container className='flex-wrap'>
      {shades.map((shade, index) => (
        <Shade shade={shade} key={index} className={'h-24 w-20'} />
      ))}
    </Container>
  );
};

type Props = { colorId: number };

export const Shades = ({ colorId }: Props) => {
  return (
    <ShadesContextProvider id={colorId}>
      <Container className='flex-col'>
        <ShadesList />
        <Controls />
      </Container>
    </ShadesContextProvider>
  );
};
