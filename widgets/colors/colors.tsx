'use client';
import { useStoreState, useStore }  from '@/entities/color';
import { Container } from '@/shared/ui/layout';
import { Shades } from '../shades';
import { Button } from '@/shared/ui/controls';

const Controls = () => {
  const store = useStore();
  const handleClickadd = () => {
    const colors = store.get('colors');
    store.set('colors', [...colors, { id: performance.now(), hex: '#000000' }]);
  };
  return <Container>{<Button onClick={handleClickadd}>Add</Button>}</Container>;
};

const Palettes = () => {
  const [colors] = useStoreState('colors');
  return (
    <>
      <Container className='flex-col'>
        {colors.map((color, i) => (
          <Shades key={i} colorId={color.id} />
        ))}
      </Container>
    </>
  );
};
/**
 * Компонент отображения списка палитр оттенков цветов
 * @param param0 базовый цвет в rgb
 * @returns
 */
export const Colors = () => {
  return (
    <>
      <Controls />
      <Palettes />
    </>
  );
};
