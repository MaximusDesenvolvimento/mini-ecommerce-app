"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image, { StaticImageData } from "next/image";

export interface PropsImage {
  srcDesktop: StaticImageData;
  srcMobile: StaticImageData;
  alt: string;
  widthDesktop: number;
  widthmobile: number;
  heightdesktop: number;
  heightmobile: number;
}
export function ResponsiveImage({
  alt,
  heightdesktop,
  heightmobile,
  srcDesktop,
  srcMobile,
  widthDesktop,
  widthmobile,
}: PropsImage) {
  const { screenWidth } = useMediaQuery();

  const md = 768;
  const change = screenWidth > md;

  return (
    <>
      {change ? (
        <Image
          src={srcDesktop}
          width={widthDesktop}
          height={heightdesktop}
          alt={alt}
          className="w-full"
        />
      ) : (
        <Image
          src={srcMobile}
          width={widthmobile}
          height={heightmobile}
          alt={alt}
          className="w-full"
        />
      )}
    </>
  );
}
