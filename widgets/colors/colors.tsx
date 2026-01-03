'use client';
import { useStoreKey } from '@/shared/store';
import { Container } from '@/shared/ui/layout';
import { Shades } from '../shades';
/**
 * Компонент отображения списка палитр оттенков цветов
 * @param param0 базовый цвет в rgb
 * @returns
 */
export const Colors = () => {
  const colors = useStoreKey('colors');
  return (
    <Container>
      {colors.map((color) => (
        <Shades key={color.id} colorId={color.id} />
      ))}
    </Container>
  );
};
