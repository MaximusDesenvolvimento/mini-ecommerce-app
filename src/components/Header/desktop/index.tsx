"use client";
import Image from "next/image";
import Link from "next/link";

import IconLogo from "@/assets/logo.svg";
import { InputSearch } from "../InputSearch/InputSearch";
import { Basket, Heart, User } from "@phosphor-icons/react";
import { DesktopMenu } from "@/components/Menu/Desktop";

export function DesktopHeader() {
  return (
    <div>
      <div className="flex justify-between items-center py-5 max-w-container m-auto px-4 gap-4 xl:gap-0">
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
          <Link href="/login-register">
            <User size={25} />
          </Link>
          <Heart size={25} />
          <Basket size={25} />
        </div>
      </div>

      <DesktopMenu />
    </div>
  );
}
