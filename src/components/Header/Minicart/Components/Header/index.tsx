"use client";
import { Button } from "@/components/ui/button";
import { SheetTrigger } from "@/components/ui/sheet";
import { IconMinicart } from "../Icons/IconMinicart";
import { UseMinicart } from "@/hooks/MinicartContent";

export function HeaderMinicart() {
  const { products } = UseMinicart();
  return (
    <SheetTrigger asChild>
      <Button variant={"ghost"} className="p-0 relative">
        <IconMinicart />
        {products?.length > 0 && (
          <span className="w-6 h-6 rounded-full text-white bg-primary absolute top-[-8px] right-[-8px] text-base font-semibold text-center md:text-sm md:w-5 md:h-5 md:top-[-5px]">
            {products.reduce((accumulator, currentValue) => {
              const quantity =
                currentValue.quantity !== undefined ? currentValue.quantity : 0;
              return accumulator + quantity;
            }, 0)}
          </span>
        )}
      </Button>
    </SheetTrigger>
  );
}
