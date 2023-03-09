import Image from "next/image";
import React from "react";

type IconType = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  flip?: boolean;
  layout?: "fixed" | "fill" | "intrinsic" | "responsive" | undefined;
}

const Icon = ({ src, alt, layout, flip, width=30, height=30 }: IconType) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    layout={layout}
    {...(flip && {style: { transform: 'rotate(180deg)' }})}
  />
);

export default Icon;
