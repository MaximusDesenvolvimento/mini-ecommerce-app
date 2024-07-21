"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { PropsArrayImgMosaico } from "..";
import { ImagesMosaicoDesktop } from "./ImagesMosaicoDesktop";
import { ImageMosaicoSliderMobile } from "./ImagesMosaicoSliderMobile";

export function ImagesMosaicoResponsive({ dataImg }: PropsArrayImgMosaico) {
  const { screenWidth } = useMediaQuery();
  const md = 768;
  const change = screenWidth > md;

  return (
    <>
      {change ? (
        <ImagesMosaicoDesktop dataImg={dataImg} />
      ) : (
        <ImageMosaicoSliderMobile dataImg={dataImg} />
      )}
    </>
  );
}
