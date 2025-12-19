import type { ReactNode } from "react";
import cn from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
  dir?: "column" | "row";
};

const dirClassMap: Record<NonNullable<Props["dir"]>, string> = {
  row: "flex-row",
  column: "flex-col",
};

const Wrapper = ({ children, className, dir = "row" }: Props) => {
  return (
    <div className={cn("overflow-hidden flex", dirClassMap[dir], className)}>
      {children}
    </div>
  );
};

export const Box = ({ children, className, ...rest }: Props) => {
  return (
    <Wrapper className={cn("rounded-sm", className)} {...rest}>
      {children}
    </Wrapper>
  );
};

export const Container = ({ children, className, ...rest }: Props) => {
  return (
    <Wrapper className={cn("rounded-lg", className)} {...rest}>
      {children}
    </Wrapper>
  );
};
