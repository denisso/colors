"use client";
import type { ReactNode } from "react";
import cn from "clsx";
import { Box } from "../../layout";
import styles from "./button.module.css";

type Props = {
  children: ReactNode;
  className?: string;
  onClick: () => void;
};

export const Button = ({ children, className, onClick }: Props) => {
  return (
    <Box>
      <button
        className={cn(
          "px-3 py-1 border-none outline-none",
          styles["button"],
          className
        )}
        onClick={onClick}
      >
        {children}
      </button>
    </Box>
  );
};
