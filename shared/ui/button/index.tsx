"use client";
import { WrapperControl } from "../wrapper";
import type { ReactNode } from "react";
import cls from "classnames";

type Props = {
  children: ReactNode;
  className?: string;
  onClick: () => void;
};

export const Button = ({ children, className, onClick }: Props) => {
  return (
    <WrapperControl>
      <button
        className={cls("px-3 py-1 border-none outline-none bg-ctrl-primary hover:bg-ctrl-primary[100]", className)}
        onClick={onClick}
      >
        {children}
      </button>
    </WrapperControl>
  );
};
