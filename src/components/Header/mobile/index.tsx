import Image from "next/image";
import Link from "next/link";

import IconLogo from "@/assets/logo.svg";

import { IconUser } from "@/components/Header/mobile/Menu/Icons/IconUser";

import { InputSearch } from "../InputSearch/InputSearch";
import { MobileMenu } from "./Menu";

export function MobileHeader() {
  return (
    <div>
      <div className=" flex justify-between items-center px-4 pt-4 mb-6">
        <MobileMenu />

        <Link href="/">
          <Image src={IconLogo} alt="icon logo" width={142} height={34} />
        </Link>

        <IconUser />
      </div>

      <InputSearch />
    </div>
  );
}
