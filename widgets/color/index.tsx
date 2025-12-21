"use client";
import { Box } from "@/shared/ui/layout";

type Props = { color: string; className: string };

export const Color = ({ color, className }: Props) => {
  return (
    <Box>
      <div style={{ backgroundColor: color }} className={className}>
        {color}
      </div>
    </Box>
  );
};
