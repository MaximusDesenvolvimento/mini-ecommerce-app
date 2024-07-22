import Link from "next/link";
import { products } from "../Shelf/mokeProducts";
import Image from "next/image";
import { formatPrices } from "@/utils/formatPrice";

interface PropsProduct {
  product: {
    id: string;
    urlImage: string;
    name: string;
    oldPrice: number;
    price: number;
    category: string;
  };
}

export function ContainerProduct({
  product: { urlImage, name, oldPrice, price, category },
}: PropsProduct) {
  const product = products[0];

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

  return (
    <Link
      href={"#"}
      className="p-4 flex flex-col gap-3 border border-gray-200 rounded-lg max-w-[175px] h-[300px] md:max-w-[227px] md:h-[379px]"
    >
      <div className="relative">
        {oldPrice > 0 && (
          <span className="absolute left-0 bg-red-600 rounded-full text-red-50 text-xs -tracking-[0.32px] font-extrabold px-2 py-1.5">
            {transformPorcente(oldPrice, price)}%
          </span>
        )}
        <Image
          src={urlImage}
          width={161}
          height={161}
          alt="imagem do produto"
        />
      </div>
      <div>
        <h3 className="name-product min-h-11 max-w-full">{name}</h3>
        <p className="my-2">
          <span className="text-red-600 text-xl font-bold -tracking-[0.44px] pr-2">
            {formatPrices(price)}
          </span>
          <span className="text-gray-900 -tracking-[0.44px] font-medium line-through">
            {formatPrices(oldPrice)}
          </span>
        </p>
        <button className="w-full h-12 border border-[#634c9f] rounded-full cursor-pointer px-4 py-2 text-[#634c9f] text-sm font-medium -tracking-[0.26px]">
          Comprar
        </button>
      </div>
    </Link>
  );
}
