"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { DesktopHeader } from "./desktop";
import { MobileHeader } from "./mobile";

export function HandleHeader() {
  const { screenWidth } = useMediaQuery();

  const md = 768;
  const change = screenWidth > md;

  return <>{change ? <DesktopHeader /> : <MobileHeader />}</>;
}
