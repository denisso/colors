'use client';
import React from 'react';
import { ShadeColor } from '@/shared/types';
import { ShadesContextProvider, useShadesContext } from './shades-context';
import { Container } from '@/shared/ui/layout';
import { makeShadesFromHEX } from '@/shared/lib/color';
import { Shade } from '@/widgets/shade';
import { InputColor } from '@/widgets/input-color';

const ShadesList = () => {
  const [shades, setShades] = React.useState<ShadeColor[]>([]);
  const context = useShadesContext();
  React.useEffect(() => {
    const handler = (_: string, value: string) => {
      const colors = makeShadesFromHEX(value, 10);
      setShades(colors);
    };
    context.addListener('hex', handler);
    return () => {
      context.removeListener('hex', handler);
    };
  }, [context]);
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
    <ShadesContextProvider id={colorId}>
      <ShadesList />
      <InputColor/>
    </ShadesContextProvider>
  );
};
