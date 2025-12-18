"use client"
import React from "react";
import { Colors } from "../colors";

export const ColorPicker = () => {
  const [color, setColor] = React.useState<string>("#000000");
  return (
    <div>
      <input
        type="color"
        onChange={(event) => {
          setColor(event.target.value);
        }}
        value={color}
      />
      {/* <input type="text" id="hexInput" value="#3b82f6" placeholder="#000000" /> */}
      <Colors baseColor={color}/>
    </div>
  );
};
