import Image from "next/image";
import Link from "next/link";

import { InputSearch } from "../InputSearch/InputSearch";
import { MobileMenu } from "./Menu";

import IconLogo from "@/assets/logo.svg";
import { Minicart } from "../Minicart";

export function MobileHeader() {
  return (
    <div>
      <div className=" flex justify-between items-center px-4 pt-4 mb-6">
        <MobileMenu />

        <Link href="/">
          <Image src={IconLogo} alt="icon logo" width={142} height={34} />
        </Link>

        <Minicart />
      </div>

      <InputSearch />
    </div>
  );
}
