import type { ReactNode } from "react";
import cls from "classnames";

type Props = {
  children: ReactNode;
  className?: string;
};

const Wrapper = ({ children, className }: Props) => {
  return <div className={cls("overflow-hidden inline-flex", className)}>{children}</div>;
};

export const WrapperControl = ({ children }: Props) => {
  return <Wrapper className="rounded-sm">{children}</Wrapper>;
};
