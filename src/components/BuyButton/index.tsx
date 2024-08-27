"use client";

import { UseMinicart } from "@/hooks/MinicartContent";
import { ButtonHTMLAttributes } from "react";

interface ProductDataBuyButton {
  id: string;
  urlImage: string;
  name: string;
  price: number;
  oldPrice: number;
  quantity: number;
  category: string;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  productData: ProductDataBuyButton;
  quantity?: number;
}

export function BuyButton({ quantity, productData, ...res }: ButtonProps) {
  const { products, addProduct, updateQuantity } = UseMinicart();

  const productAdded = products?.findIndex((item) =>
    item.id === productData?.id ? true : false
  );

  function handleAddProduct() {
    productData.quantity = quantity ? quantity : 1;
    addProduct(productData);
  }

  function handleUpdateQuantity() {
    const productQuantity = {
      id: productData.id,
      quantity: (productData.quantity += 1),
    };

    updateQuantity(productQuantity);
  }

  return (
    <button
      type="button"
      {...res}
      onClick={() => {
        if (productAdded > 0) {
          handleUpdateQuantity();
        } else {
          handleAddProduct();
        }
      }}
    >
      {res.children}
    </button>
  );
}
