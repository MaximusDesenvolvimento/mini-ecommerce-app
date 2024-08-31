"use client";
import { UseMinicart } from "@/hooks/MinicartContent";
import { Quantity } from "../Quantity";
import { formatPrices } from "@/utils/formatPrice";
import "../../styles.css";
import Image from "next/image";

export function ContentMinicart() {
  const { products, deleteProduct } = UseMinicart();

  const minicartEmpaty = products?.length < 1;

  return (
    <>
      {minicartEmpaty && (
        <li className="h-full flex items-center justify-center">
          <h2 className="text-lg font-semibold text-center">
            Seu carrinho de compras está vázio!
          </h2>
        </li>
      )}
      {products?.map((product, index) => (
        <li key={index}>
          <div className="flex justify-between items-start ">
            <div className="h-[90px] w-2/5">
              <Image
                src={product.urlImage}
                width={90}
                height={90}
                alt={product.name}
                className="w-[90px] h-[90px] object-cover"
              />
            </div>

            <div className="w-4/5">
              <p className="text-base text-start font-semibold TextLimitMinicart">
                {product?.name}
              </p>

              <div className="space-x-4 my-2 text-sm">
                <span className="font-semibold">
                  {" "}
                  {formatPrices(product.price)}{" "}
                </span>
                {product.oldPrice === product.price ? null : (
                  <span className="line-through text-[#7d8184eb]">
                    {product.oldPrice !== null &&
                      formatPrices(product.oldPrice)}
                  </span>
                )}
              </div>

              <Quantity idProduct={product.id} quantity={product.quantity!} />
            </div>

            <button
              className="font-sembold h-5 w-1/5 text-end"
              onClick={() => deleteProduct(product.id)}
            >
              X
            </button>
          </div>
        </li>
      ))}
    </>
  );
}
