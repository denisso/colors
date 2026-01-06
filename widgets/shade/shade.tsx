"use client";
import { Box } from "@/shared/ui/layout";
import type { ShadeColor } from '@/entities/color';
import clsx from "clsx";

type Props = { shade: ShadeColor; className: string };

export const Shade = ({ shade, className }: Props) => {
  return (
    <Box>
      <div
        style={{ backgroundColor: shade.hex }}
        className={clsx(className, "flex justify-center")}
      >
        <span className="text-white mix-blend-difference">{shade.hex}</span>
      </div>
    </Box>
  );
};
