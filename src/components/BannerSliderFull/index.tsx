"use client";
import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { type CarouselApi } from "@/components/ui/carousel";

import fullBanner from "@/assets/home/full-banner-main-01-desktop.png";
import Image from "next/image";

export function BannerSliderFull() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        loop: true,
      }}
      className="relative"
    >
      <CarouselContent>
        <CarouselItem>
          <Image
            src={fullBanner}
            alt="banner tela inteira"
            width={800}
            height={200}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src={fullBanner}
            alt="banner tela inteira"
            width={800}
            height={200}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src={fullBanner}
            alt="banner tela inteira"
            width={800}
            height={200}
          />
        </CarouselItem>
      </CarouselContent>
      <div className="absolute -bottom-2 left-0 right-0 w-full flex justify-center">
        <span className="h-6 w-min bg-white rounded-[30px] flex justify-center items-center gap-1 px-2">
          {Array.from({ length: count }, (_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full ${
                index + 1 === current ? "bg-primary" : "bg-[#E5E7EB]"
              }`}
              onClick={() => api && api.scrollTo(index)}
            />
          ))}
        </span>
      </div>
      {/* <CarouselPrevious  />
      <CarouselNext /> */}
    </Carousel>
  );
}
