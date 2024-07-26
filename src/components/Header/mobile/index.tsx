import Image from "next/image";
import Link from "next/link";

import IconLogo from "@/assets/logo.svg";
import { MobileMenu } from "@/components/Menu/Mobile";
import { IconUser } from "@/components/Menu/Mobile/Icons/IconUser";

import { InputSearch } from "../InputSearch/InputSearch";

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
