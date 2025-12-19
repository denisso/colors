import React from "react";
import { Color } from "@/widgets/color";
import { parseToHsla } from "color2k";
import { getShadeFromHSLA } from "@/shared/lib/get-shade-from-hsla";

// оттенки
const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

type Props = {
  baseColor: string;
};

/**
 * Компонент отображения оттенков цвета
 * @param param0 базовый цвет в rgb
 * @returns
 */
export const Colors = ({ baseColor }: Props) => {
  const [colors, setColors] = React.useState<string[]>([]);
  React.useEffect(() => {
    const [h, s, l, a] = parseToHsla(baseColor);
    setColors(shades.map((_, index) => getShadeFromHSLA(h, s, l, a, index)));
  }, [baseColor]);
  return (
    <div className="flex gap-2">
      {colors.map((color, indx) => (
        <Color color={color} key={shades[indx]} className={"h-24 w-20"} />
      ))}
    </div>
  );
};
