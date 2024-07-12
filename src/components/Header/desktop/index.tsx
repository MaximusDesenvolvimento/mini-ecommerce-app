"use client";
import Image from "next/image";
import Link from "next/link";

import IconLogo from "@/assets/logo.svg";
import { InputSearch } from "../InputSearch/InputSearch";
import { Basket, Heart, User } from "@phosphor-icons/react";

export function DesktopHeader() {
  return (
    <div className="flex justify-between items-center py-5 max-w-7xl m-auto px-4 gap-4 xl:gap-0">
      <Link href="/">
        <Image
          src={IconLogo}
          width={142}
          height={48}
          alt="Logo"
          className="min-w-36"
        />
      </Link>

      <InputSearch />

      <div className="flex justify-center items-center gap-5">
        <User size={25} />
        <Heart size={25} />
        <Basket size={25} />
      </div>
    </div>
  );
}
