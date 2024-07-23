"use client";
import { useEffect, useState } from "react";
import { ContainerProduct } from "../ContainerProduct";
import { products } from "./mokeProducts";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { OfferCounter } from "./Counter";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

interface SplitArrayProducts {
  id: string;
  urlImage: string;
  name: string;
  oldPrice: number;
  price: number;
  category: string;
}

export function ShelfMosaico() {
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

  const chunkArray = (content: SplitArrayProducts[], sizeArray: number) => {
    return content.reduce((acc: any[], _: any, index: number) => {
      if (index % sizeArray === 0)
        acc.push(content.slice(index, index + sizeArray));
      return acc;
    }, []);
  };

  const productChunks = chunkArray(products, 2);

  return (
    <div className="px-4">
      <div className="flex justify-between items-end gap-3 mb-5">
        <div className="flex flex-wrap justify-start gap-3">
          <p className="text-xl text-gray-950 font-bold -tracking-[0.36px]">
            Contagem regressiva 😱
          </p>
          <OfferCounter />
        </div>
        <Link
          href={""}
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
      >
        <CarouselContent>
          {productChunks.map((item: SplitArrayProducts[], i: number) => (
            <CarouselItem key={i} className="md:basis-1/2">
              {item.map((product, index) => (
                <ContainerProduct key={index} product={product} mosaico />
              ))}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
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
    </div>
  );
}
