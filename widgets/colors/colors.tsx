import React from "react";
import { Color } from "@/widgets/shade";
import { makeShadesFromRGB } from "@/shared/lib/color";
import { Container } from "@/shared/ui/layout";
import type { ColorShared } from "@/shared/types";

type Props = {
  cbRef: React.RefObject<((value: string) => void) | null>;
};

/**
 * Компонент отображения оттенков цвета
 * @param param0 базовый цвет в rgb
 * @returns
 */
export const Colors = ({ cbRef }: Props) => {
  const [colors, setColors] = React.useState<ColorShared[]>([]);
  const cb = React.useCallback(
    (baseColor: string) => {
      const colors = makeShadesFromRGB(baseColor, 10);
      setColors(colors);
    },
    [setColors]
  );
  React.useEffect(() => {
    cbRef.current = cb;
    setColors(makeShadesFromRGB("#FFFFFF", 10));
  }, [cbRef, cb, setColors]);

  return (
    <Container className="flex-wrap">
      {colors.map((color, indx) => (
        <Color color={color} key={indx} className={"h-24 w-20"} />
      ))}
    </Container>
  );
};
