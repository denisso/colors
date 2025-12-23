import Image from "next/image";
import clsx from "clsx";

const ICON_MAP = {
  colorPick: "/icons/colorize.svg",
  copyContent: "/icons/content_copy.svg",
} as const satisfies Record<string, string>;

type IconName = keyof typeof ICON_MAP;

const SIZE_MAP = {
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
  xl: "w-8 h-8",
} as const satisfies Record<string, string>;

type IconSize = keyof typeof SIZE_MAP;

export type IconProps = {
  name: IconName;
  size?: IconSize;
  className?: string;
  title?: string;
};

export const Icon = ({ name, size = "md", className, title = "" }: IconProps) => {
  return (
    <Image className={clsx(className, SIZE_MAP[size])} src={ICON_MAP[name]} alt={title}/>
  );
};
