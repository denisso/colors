"use client";

type Props = { color: string; className: string };

export const Color = ({ color, className }: Props) => {
  return <div style={{ backgroundColor: color }} className={className}></div>;
};