"use client";
import { Box } from "@/shared/ui/layout";
import type { ColorShared } from "@/shared/types";

type Props = { color: ColorShared; className: string };

export const Color = ({ color, className }: Props) => {
  return (
    <Box>
      <div style={{ backgroundColor: color.hex }} className={className}>
        <span className="text-white mix-blend-difference">{color.hex}</span>
      </div>
    </Box>
  );
};
