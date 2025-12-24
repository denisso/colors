"use client";
import React from "react";
import clsx from "clsx";
import { Container } from "@/shared/ui/layout";
type Props = {
  className?: string;
  cbRef: React.RefObject<((value: string) => void) | null>;
};

export function InputColor({ className, cbRef }: Props) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [color, setColor] = React.useState<string>("#000000");
  React.useEffect(() => {
    const currentInput = inputRef.current;
    if (!currentInput) {
      return;
    }
    const onInput = () => {
      setColor(currentInput.value);
      if (cbRef.current) {
        cbRef.current(currentInput.value);
      }
    };
    currentInput.addEventListener("input", onInput);
    return () => {
      currentInput.removeEventListener("input", onInput);
    };
  }, [inputRef, setColor, cbRef]);

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
