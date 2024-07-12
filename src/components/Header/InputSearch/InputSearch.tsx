"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { MagnifyingGlass } from "@phosphor-icons/react";

export function InputSearch() {
  return (
    <div className="flex items-center space-x-2 bg-[#F3F4F6] rounded-lg w-calc-mobile-search lg:w-full lg:max-w-[863px] h-12 m-auto">
      <Input
        type="text"
        placeholder="Qual produto você está procurando?"
        className=" border-none shadow-none h-12 outline-none focus-visible:outline-none"
      />
      <Button
        type="submit"
        className="h-12 border-none rounded-none bg-transparent shadow-none hover:bg-transparent lg:hover:bg-gray-400"
      >
        <MagnifyingGlass size={35} color="#000" />
      </Button>
    </div>
  );
}
