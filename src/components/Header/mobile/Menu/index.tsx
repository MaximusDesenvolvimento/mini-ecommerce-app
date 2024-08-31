import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { IconMenu } from "../../mobile/Menu/Icons/IconMenu";
import Link from "next/link";
import { IconArrow } from "../../mobile/Menu/Icons/IconArrow";
import { IconUser } from "../../mobile/Menu/Icons/IconUser";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"ghost"} className="p-0">
          <IconMenu />
        </Button>
      </SheetTrigger>

      <SheetContent side={"left"} className="w-full p-6">
        <SheetHeader>
          <SheetTitle className="text-start -mt-[2px]">Menu</SheetTitle>
        </SheetHeader>

        <ul className="my-5 space-y-6 font-semibold">
          <li>
            <SheetClose
              asChild
              className="underline text-black flex gap-2 items-center"
            >
              <Link
                href="/login-register"
                className="underline text-black flex gap-2 items-center"
              >
                <IconUser />
                <span>Faça login ou cadastra-se</span>
              </Link>
            </SheetClose>
          </li>

          <li className="underline text-black">
            <SheetClose>
              <Link href="/account">Minha conta</Link>
            </SheetClose>
          </li>

          <li className="underline text-black">
            <SheetClose asChild>
              <Link href="/account/orders">Meus pedidos</Link>
            </SheetClose>
          </li>

          <li>
            <SheetClose asChild>
              <div className="border-gray-300 border-b pb-3 flex items-center justify-between text-black">
                <Link href="#">Departamento 1</Link>
                <IconArrow />
              </div>
            </SheetClose>
          </li>
          <li>
            <SheetClose asChild>
              <div className="border-gray-300 border-b pb-3 flex items-center justify-between text-black">
                <Link href="#">Departamento 2</Link>
                <IconArrow />
              </div>
            </SheetClose>
          </li>
          <li>
            <SheetClose asChild>
              <div className="border-gray-300 border-b pb-3 flex items-center justify-between text-black">
                <Link href="#">Departamento 3</Link>
                <IconArrow />
              </div>
            </SheetClose>
          </li>
          <li>
            <SheetClose asChild>
              <div className="border-gray-300 border-b pb-3 flex items-center justify-between text-black">
                <Link href="#">Departamento 4</Link>
                <IconArrow />
              </div>
            </SheetClose>
          </li>
          <li>
            <SheetClose asChild>
              <div className="border-gray-300 border-b pb-3 flex items-center justify-between text-black">
                <Link href="#">Departamento 5</Link>
                <IconArrow />
              </div>
            </SheetClose>
          </li>
          <li>
            <SheetClose asChild>
              <div className="border-gray-300 border-b pb-3 flex items-center justify-between text-black">
                <Link href="#">Departamento 6</Link>
                <IconArrow />
              </div>
            </SheetClose>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
