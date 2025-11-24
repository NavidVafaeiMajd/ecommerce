"use client";

import Image from "next/image";
import { Button } from "../../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import CartIcon from "@/public/icons/cart";
import UserIcon from "@/public/icons/user";

export const HeaderBtn = () => {
  const pathname = usePathname();
  const isActiveCart = pathname === "/cart";
  const isActiveMyAccount = pathname === "/MyAccount";

  return (
    <div className="flex gap-2">
      <Button
        variant="header"
        className="w-12 h-12 flex items-center justify-center"
      >
        <Link href={"/MyAccount"}>
          <Image
            src="/icons/like.svg"
            width={20}
            height={20}
            alt=""
            className="w-5 h-5"
          />
        </Link>
      </Button>
      <Link href={"/MyAccount"}>
        <Button
          variant={isActiveMyAccount ? "headerActive" : "header"}
          className={cn("w-12 h-12 flex items-center justify-center")}
        >
          <UserIcon stroke={isActiveMyAccount ? "white" : "#807D7E"} />
        </Button>
      </Link>
      <Link href={"/cart"}>
        <Button
          variant={isActiveCart ? "headerActive" : "header"}
          className={cn("w-12 h-12 flex items-center justify-center")}
        >
          <CartIcon stroke={isActiveCart ? "white" : "#807D7E"} />
        </Button>
      </Link>
    </div>
  );
};
