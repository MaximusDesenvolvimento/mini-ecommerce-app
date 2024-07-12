"use client";

import Image from "next/image";
import Link from "next/link";

import IconLogo from "@/assets/logo.svg";
import { Basket, List } from "@phosphor-icons/react";
import { InputSearch } from "../InputSearch/InputSearch";

export function MobileHeader() {
  return (
    <div>
      <div className=" flex justify-between items-center px-4 pt-4 mb-6">
        <List size={35} />

        <Link href="/">
          <Image src={IconLogo} alt="icon logo" width={142} height={34} />
        </Link>

        <Basket size={35} />
      </div>

      <InputSearch />
    </div>
  );
}
