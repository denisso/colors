import React from "react";
import { Color } from "@/widgets/shade";
import {
  convertRGBToHEX,
  convertHSLToRGB,
} from "@/shared/lib/color";
import type { ColorShared } from "@/shared/types";
import { makeShadeFromHSLA } from "@/shared/lib/color";
import { makeColorFromString } from "@/shared/lib/color/make-color-from-string";
// оттенки
const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

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
      const color = makeColorFromString(baseColor);
      setColors((prev) => {
        const next = prev.map((_, index) => {
          const nextColor = makeShadeFromHSLA(color, index) as ColorShared;
          convertHSLToRGB(nextColor, nextColor);
          convertRGBToHEX(nextColor, nextColor);
          return nextColor;
        });
        return next;
      });
    },
    [setColors]
  );
  React.useEffect(() => {
    cbRef.current = cb;
    setColors(Array.from({ length: 10 }, () => makeColorFromString("#FFFFFF")));
  }, [cbRef, cb, setColors]);

  return (
    <div className="flex gap-2">
      {colors.map((color, indx) => (
        <Color color={color} key={shades[indx]} className={"h-24 w-20"} />
      ))}
    </div>
  );
};
