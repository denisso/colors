"use client";
import React from "react";
import { Colors } from "../colors";
import { InputColor } from "../input-color";
import { Container } from "@/shared/ui/layout";

export const ColorPicker = () => {
  // чтобы уменьшить перерисовки, 
  // почти как контекст только без перерисовок
  const ref = React.useRef<(arg: string) => void>(null);
  return (
    <Container className="items-center flex-col" border>
      <Colors cbRef={ref} />
      <Container>
        <InputColor cbRef={ref} />
      </Container>
    </Container>
  );
};
