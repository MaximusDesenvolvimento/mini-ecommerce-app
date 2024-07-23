"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { ContainerProduct } from "../ContainerProduct";
import { ArrowRight } from "@phosphor-icons/react";

import { products } from "./mokeProducts";

interface PropsShelf {
  title: string;
  goFor: string;
  query: string;
}

export function Shelf({ title, goFor, query }: PropsShelf) {
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
    <div className="my-8">
      <div className="w-full flex justify-between items-center mb-5 px-4">
        <p className="text-lg text-gray-950 font-bold -tracking-[0.36px]">
          {title}
        </p>

        <Link
          href={goFor}
          className="h-12 w-29 flex items-center gap-1.5 py-2.5 px-3.5 border border-gray-200 rounded-full "
        >
          <span className="text-gray-950 text-xs font-semibold underline -tracking-[0.24px]">
            {" "}
            Ver tudos{" "}
          </span>

          <ArrowRight size={24} />
        </Link>
      </div>

      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: "start",
        }}
        className="px-4"
      >
        <CarouselContent>
          {products.map((item, index) => (
            <CarouselItem key={index} className="basis-1/2 md:basis-2/5">
              <ContainerProduct product={item} />
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
    </div>
  );
}
