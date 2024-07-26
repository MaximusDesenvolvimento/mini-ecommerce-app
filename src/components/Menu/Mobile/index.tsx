import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IconMenu } from "./IconMenu";
import Link from "next/link";
import { IconArrow } from "./IconArrow";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"ghost"} className="p-0">
          <IconMenu />
        </Button>
      </SheetTrigger>

      <SheetContent side={"left"} className="w-full">
        <SheetHeader>
          <SheetTitle className="text-start -mt-[2px]">Menu</SheetTitle>
        </SheetHeader>

        <ul className="my-5 space-y-6 font-semibold">
          <li className="underline">
            <Link href="/login-register">Faça login ou cadastra-se</Link>
          </li>

          <li className="underline">
            <Link href="/account">Minha conta</Link>
          </li>

          <li className="underline">
            <Link href="/account/orders">Meus pedidos</Link>
          </li>

          <li className="border-gray-300 border-b pb-3 flex items-center justify-between">
            <Link href="#">Departamento 1</Link>
            <IconArrow />
          </li>

          <li className="border-gray-300 border-b pb-3 flex items-center justify-between">
            <Link href="#">Departamento 2</Link>
            <IconArrow />
          </li>

          <li className="border-gray-300 border-b pb-3 flex items-center justify-between">
            <Link href="#">Departamento 3</Link>
            <IconArrow />
          </li>

          <li className="border-gray-300 border-b pb-3 flex items-center justify-between">
            <Link href="#">Departamento 4</Link>
            <IconArrow />
          </li>

          <li className="border-gray-300 border-b pb-3 flex items-center justify-between">
            <Link href="#">Departamento 5</Link>
            <IconArrow />
          </li>

          <li className="border-gray-300 border-b pb-3 flex items-center justify-between">
            <Link href="#">Departamento 6</Link>
            <IconArrow />
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
