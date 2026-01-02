"use client";
import React from "react";
import clsx from "clsx";
import { Container } from "@/shared/ui/layout";
import { useShadesContext } from '../shades/shades-context';

type Props = {
  className?: string;
};

export function InputColor({ className }: Props) {
  const context = useShadesContext()
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [color, setColor] = React.useState<string>("#000000");
  React.useEffect(() => {
    const currentInput = inputRef.current;
    if (!currentInput) {
      return;
    }
    const onInput = () => {
      setColor(currentInput.value);
      context.set("hex", currentInput.value)
    };
    currentInput.addEventListener("input", onInput);
    return () => {
      currentInput.removeEventListener("input", onInput);
    };
  }, [inputRef, setColor, context]);

  const openPicker = () => {
    inputRef.current?.click();
  };

  return (
    <Container className="items-center">
      <div
        onClick={openPicker}
        className={clsx(className, "h-4 w-4 rounded-full cursor-pointer")}
        style={{ backgroundColor: color }}
      >
        <input ref={inputRef} type="color" className="block w-0 h-0" />
      </div>
      <div>
        {color}
      </div>
    </Container>
  );
}
