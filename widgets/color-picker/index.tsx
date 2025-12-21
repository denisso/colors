"use client";
import React from "react";
import { Colors } from "../colors";
import { InputColor } from "../input-color";
import { Container } from "@/shared/ui/layout";

export const ColorPicker = () => {
  const [color, setColor] = React.useState<string>("#000000");
  return (
    <Container className="items-center" dir="column">
      <Colors baseColor={color} />
      <Container>
        <InputColor cb={setColor} />
      </Container>
    </Container>
  );
};
