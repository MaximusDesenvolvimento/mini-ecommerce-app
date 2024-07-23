"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { type CarouselApi } from "@/components/ui/carousel";

import { PropsArrayImgMosaico } from "..";

export function ImageMosaicoSliderMobile({ dataImg }: PropsArrayImgMosaico) {
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
        align: "start",
      }}
      className="my-8 pl-4"
    >
      <CarouselContent>
        {dataImg.map((item, index) => (
          <CarouselItem key={index} className="basis-3/5 md:basis-2/5">
            <Link href={item.link}>
              <Image
                src={item.srcMobile}
                width={item.widthmobile}
                height={item.heightmobile}
                alt={item.alt}
              />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="w-full flex justify-center mt-3">
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
    </Carousel>
  );
}
