"use client";
import React from "react";
import clsx from "clsx";

type Props = {
  className?: string;
  cb?: (color: string) => void;
};

export function InputColor({ className, cb }: Props) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [color, setColor] = React.useState<string>("#000000");
  React.useEffect(() => {
    const currentInput = inputRef.current;
    if (!currentInput) {
      return;
    }
    const onInput = () => {
      setColor(currentInput.value);
      if (cb) cb(currentInput.value);
    };
    currentInput.addEventListener("input", onInput);
    return () => {
      currentInput.removeEventListener("input", onInput);
    };
  }, [inputRef, setColor, cb]);

  const openPicker = () => {
    inputRef.current?.click();
  };

  return (
    <div
      onClick={openPicker}
      className={clsx(className, "h-4 w-4 rounded-ful cursor-pointer")}
      style={{ backgroundColor: color }}
    >
      <input ref={inputRef} type="color" className="block w-0 h-0" />
    </div>
  );
}
