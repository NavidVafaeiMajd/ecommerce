"use client";

import { Button } from "../../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/lib/utils";
import CartIcon from "@/public/icons/cart";
import UserIcon from "@/public/icons/user";
import LikeIcon from "@/public/icons/like";

export const HeaderBtn = () => {
  const pathname = usePathname();
  const isActiveCart = pathname === "/cart";
  const isActiveMyAccount = pathname === "/MyAccount";
  const isActivewishlist = pathname === "/MyAccount/wishlist";

  return (
    <div className="flex gap-2">
      <Link href={"/MyAccount/wishlist"}>
        <Button
          variant={isActivewishlist ? "headerActive" : "header"}
          className="w-12 h-12 flex items-center justify-center"
        >
          <LikeIcon stroke={isActivewishlist ? "white" : "#807D7E"} />
        </Button>
      </Link>
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
