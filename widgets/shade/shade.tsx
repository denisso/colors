"use client";
import { Box } from "@/shared/ui/layout";
import type { ColorShared } from "@/shared/types";
import clsx from "clsx";

type Props = { color: ColorShared; className: string };

export const Color = ({ color, className }: Props) => {
  return (
    <Box>
      <div
        style={{ backgroundColor: color.hex }}
        className={clsx(className, "flex justify-center")}
      >
        <span className="text-white mix-blend-difference">{color.hex}</span>
      </div>
    </Box>
  );
};
