"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { BennefitbarDesktop } from "./BennerfitBarDesktop";
import { BennefitSlider } from "./BennerfitSliderMobile";

export function ResponsiveBennerfit() {
  const { screenWidth } = useMediaQuery();

  const md = 768;
  const change = screenWidth > md;

  return <>{change ? <BennefitbarDesktop /> : <BennefitSlider />}</>;
}
