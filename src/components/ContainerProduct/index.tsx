"use client";

import Link from "next/link";
import Image from "next/image";
import { formatPrices } from "@/utils/formatPrice";
import { BuyButton } from "../BuyButton";

interface PropsProduct {
  product: {
    id: string;
    urlImage: string;
    name: string;
    oldPrice: number;
    price: number;
    category: string;
  };
  mosaico?: boolean;
}

export function ContainerProduct({
  product: { urlImage, name, oldPrice, price, category },
  mosaico = false,
}: PropsProduct) {
  function transformPorcente(oldPrice: number, price: number) {
    const calc = ((oldPrice - price) * 100) / oldPrice;
    const decimal = calc.toFixed(3);
    const thirDecimal = parseInt(decimal.charAt(decimal.length - 1), 10);

    if (thirDecimal >= 8) {
      return parseFloat(calc.toFixed(2));
    } else {
      return Math.floor(calc * 100) / 100;
    }
  }
  const product = {
    id: "1",
    urlImage,
    name,
    oldPrice,
    price,
    category,
    quantity: 0,
  };

  const isMosaico = mosaico
    ? "flex flex-row items-center w-full"
    : "flex flex-col";

  return (
    <article
      className={`relative ${
        mosaico ? "w-full mx-auto" : "max-w-[175px] md:max-w-[227px]"
      }`}
    >
      <BuyButton
        productData={product}
        className={`h-12 border border-[#634c9f] rounded-full cursor-pointer px-4 py-2 text-primary text-sm font-medium -tracking-[0.26px] absolute ${
          mosaico
            ? "w-[161px] left-[157px] min-[375px]:left-[186px] min-[400px]:left-[188px] bottom-4"
            : "bottom-4 right-4 max-w-[128px] w-full min-[375px]:max-w-[145px] md:max-w-[195px] lg:max-w-[170px] lg:right-[19px]"
        } md:font-bold `}
      >
        Comprar
      </BuyButton>
      <Link
        href={"#"}
        className={`p-4 gap-3 border border-gray-200 rounded-lg ${isMosaico} ${
          isMosaico && "mb-4"
        }`}
      >
        <div className={`relative ${mosaico && "w-[161px]"} `}>
          <div>
            {oldPrice > 0 && (
              <span
                className={`absolute left-0 bg-red-600 rounded-full text-red-50 text-xs -tracking-[0.32px] font-extrabold px-2 py-1.5 ${
                  mosaico ? "top-2" : "top-0"
                }`}
              >
                -{transformPorcente(oldPrice, price)}%
              </span>
            )}
          </div>
          <Image
            src={urlImage}
            width={161}
            height={161}
            alt="imagem do produto"
          />
        </div>

        <div className={`${mosaico ? "mb-7" : "mb-11"}`}>
          <h3
            className={`name-product min-h-11 ${
              mosaico ? "w-[162px]" : "w-full"
            } `}
          >
            {name}
          </h3>
          <p className="my-2">
            <span className="text-red-600 text-lg font-bold -tracking-[0.44px] pr-2">
              {formatPrices(price)}
            </span>
            <span className="text-gray-900 text-sm -tracking-[0.44px] font-medium line-through">
              {formatPrices(oldPrice)}
            </span>
          </p>
        </div>
      </Link>
    </article>
  );
}
