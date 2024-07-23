"use client";
import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { type CarouselApi } from "@/components/ui/carousel";
import Image from "next/image";

import IconSroes from "@/assets/home/benefitBar/icon-stores.svg";
import IconQualidade from "@/assets/home/benefitBar/icon-qualidade.svg";
import IconFrete from "@/assets/home/benefitBar/icon-frete.svg";
import IconPix from "@/assets/home/benefitBar/icon-pix.svg";

export function BennefitSlider() {
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
      className="my-9 pb-3 pl-4 border-b border-gray-200 relative"
    >
      <CarouselContent>
        <CarouselItem className="basis-3/5 md:basis-2/5">
          <div className="flex justify-start items-center gap-5 w-full max-w-[200px] mx-auto md:max-w-full">
            <Image src={IconSroes} alt="icon de loja" width={30} height={30} />
            <div>
              <p className="mb-1 font-bold tracking-[-0.32px]">
                Compre no site
              </p>
              <p className="text-sm font-medium">
                e retire na loja ou receba em casa.
              </p>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem className="basis-3/5 md:basis-2/5">
          <div className="flex justify-start items-center gap-5 w-full max-w-[200px] mx-auto md:max-w-full">
            <Image
              src={IconQualidade}
              alt="icon de qualidade"
              width={30}
              height={30}
            />
            <div>
              <p className="mb-1 font-bold tracking-[-0.32px]">
                A qualidade de sempre
              </p>
              <p className="text-sm font-medium">
                Compre sem sair de casa ou da obra.
              </p>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem className="basis-3/5 md:basis-2/5">
          <div className="flex justify-start items-center gap-5 w-full max-w-[200px] mx-auto md:max-w-full">
            <Image
              src={IconFrete}
              alt="icon frete grátis"
              width={40}
              height={40}
              className="-ml-[11px]"
            />
            <div>
              <p className="mb-1 font-bold tracking-[-0.32px]">Frete grátis</p>
              <p className="text-sm font-medium">
                Para os compras acima de R$400
              </p>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem className="basis-3/5 md:basis-2/5">
          <div className="flex justify-start items-center gap-5 w-full max-w-[200px] mx-auto md:max-w-full">
            <Image src={IconPix} alt="icon de pix" width={30} height={30} />
            <div>
              <p className="mb-1 font-bold tracking-[-0.32px]">Pagamento</p>
              <p className="text-sm font-medium">
                Pague com o pix, sem complicações.
              </p>
            </div>
          </div>
        </CarouselItem>
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
