"use client";
import React from "react";
import { Colors } from "../colors";

export const ColorPicker = () => {
  const [color, setColor] = React.useState<string>("#000000");
  return (
    <div className="flex flex-col items-center gap-2">
      <Colors baseColor={color} />
      <div className="flex items-center">
        <input
          type="color"
          onChange={(event) => {
            setColor(event.target.value);
          }}
          value={color}
        />
        <input
          type="text"
          id="hexInput"
          onChange={(event) => {
            setColor(event.target.value);
          }}
          value={color}
          placeholder="#000000"
        />
      </div>
    </div>
  );
};
