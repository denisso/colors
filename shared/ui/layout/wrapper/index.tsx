import type { ReactNode } from "react";
import cn from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
  dir?: "column" | "row";
  border?: boolean;
};

const dirClassMap: Record<NonNullable<Props["dir"]>, string> = {
  row: "flex-row",
  column: "flex-col",
};

const Wrapper = ({ children, className, border, dir = "row" }: Props) => {
  return (
    <div
      className={cn(className, "overflow-hidden flex gap-4", dirClassMap[dir], {
        "border-solid border border-black": border,
      })}
    >
      {children}
    </div>
  );
};

export const Box = ({ children, className, ...rest }: Props) => {
  return (
    <Wrapper className={cn(className, "rounded-sm")} {...rest}>
      {children}
    </Wrapper>
  );
};

export const Container = ({ children, className, ...rest }: Props) => {
  return (
    <Wrapper className={cn(className, "rounded-lg")} {...rest}>
      {children}
    </Wrapper>
  );
};
