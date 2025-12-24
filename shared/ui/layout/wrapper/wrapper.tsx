import type { ReactNode } from "react";
import cn from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
  border?: boolean;
};

const Wrapper = ({ children, className, border }: Props) => {
  return (
    <div
      className={cn(className, "overflow-hidden flex gap-4", {
        "border-solid border border-black": border,
      })}
    >
      {children}
    </div>
  );
};

/**
 * только rounded
 * @param param0 
 * @returns 
 */
export const Box = ({ children, className, ...rest }: Props) => {
  return (
    <Wrapper className={cn(className, "rounded-sm")} {...rest}>
      {children}
    </Wrapper>
  );
};

export const Container = ({ children, className, ...rest }: Props) => {
  return (
    <Wrapper className={cn(className, "rounded-lg p-2")} {...rest}>
      {children}
    </Wrapper>
  );
};
