'use client';
import React from 'react';
import clsx from 'clsx';
import { Container } from '@/shared/ui/layout';
import { useStoreShade } from '../shades/shades-context';
import { useStore } from '@/shared/store';

type Props = {
  className?: string;
};

export function InputColor({ className }: Props) {
  const context = useStoreShade();
  const store = useStore();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [color, setColor] = React.useState<string>('#000000');
  React.useEffect(() => {
    const currentInput = inputRef.current;
    if (!currentInput) {
      return;
    }
    const onInput = () => {
      setColor(currentInput.value);
      context.set('hex', currentInput.value);
    };
    const onChange = () => {
      const id = context.get('id');
      const hex = context.get('hex');
      const colors = store.get('colors').map((color) => {
        if (color.id == id) {
          return { id, hex };
        }
        return color;
      });
      store.set('colors', colors);
    };
    currentInput.addEventListener('input', onInput);
    currentInput.addEventListener('change', onChange);
    return () => {
      currentInput.removeEventListener('input', onInput);
      currentInput.removeEventListener('change', onChange);
    };
  }, [inputRef, setColor, context, store]);

  const openPicker = () => {
    inputRef.current?.click();
  };

  return (
    <Container className='items-center'>
      <div
        onClick={openPicker}
        className={clsx(className, 'h-4 w-4 rounded-full cursor-pointer')}
        style={{ backgroundColor: color }}
      >
        <input ref={inputRef} type='color' className='block w-0 h-0' />
      </div>
      <div>{color}</div>
    </Container>
  );
}
