import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IconMinicart } from "./Components/Icons/IconMinicart";
import { MinicartFooter } from "./Components/Footer";
import { ContentMinicart } from "./Components/ContentMinicart";
import { HeaderMinicart } from "./Components/Header";

export function Minicart() {
  return (
    <div>
      <Sheet>
        <HeaderMinicart />

        <SheetContent side={"right"} className="w-full">
          <SheetHeader>
            <SheetTitle className="text-start -mt-[2px] p-6">
              Minha sacola
            </SheetTitle>
          </SheetHeader>

          <ul className="space-y-5 w-full my-6 h-[60%] overflow-auto px-6">
            <ContentMinicart />
          </ul>

          <MinicartFooter />
        </SheetContent>
      </Sheet>
    </div>
  );
}
