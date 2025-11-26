"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  const pathname = usePathname();
  return (
    <div className="pt-5!">
      <div defaultValue="MyOrder" className="grid md:grid-cols-6 gap-5">
        <div className="md:col-span-2 text-ring! flex flex-col justify-start! items-start bg-transparent w-full! ">
          <div className="text-foreground! mb-5 ">
            <h3 className="special mb-2!">Hello Navid!</h3>
            <p className="text-ring">Welocome to your Account</p>
          </div>
          <div className="flex md:flex-col w-full!">
            <Link
              className={`h-10 w-full rounded-none flex justify-center items-center ${
                pathname.startsWith("/MyAccount/MyOrder")
                  ? "bg-grayColor border-l-2 border-l-foreground text-ring"
                  : "text-ring"
              }`}
              href={"/MyAccount/MyOrder"}
            >
              My Order
            </Link>
            <Link
              className={`h-10 w-full rounded-none flex justify-center items-center ${
                pathname.startsWith("/MyAccount/wishlist")
                  ? "bg-grayColor border-l-2 border-l-foreground text-ring"
                  : "text-ring"
              }`}
              href={"/MyAccount/wishlist"}
            >
              Wishlist
            </Link>
            <Link
              className={`h-10 w-full rounded-none flex justify-center items-center ${
                pathname.startsWith( "/MyAccount/MyInfo")
                  ? "bg-grayColor border-l-2 border-l-foreground text-ring"
                  : "text-ring"
              }`}
              href={"/MyAccount/MyInfo"}
            >
              My Info
            </Link>

            <Link
              className={`h-10 w-full rounded-none flex justify-center items-center ${
                pathname === "/MyAccount/Logout"
                  ? "bg-grayColor border-l-2 border-l-foreground text-ring"
                  : "text-ring"
              }`}
              href={"/MyAccount/Logout"}
            >
              Logout
            </Link>
          </div>
        </div>
        <div className="md:col-span-4">{children}</div>
      </div>
    </div>
  );
}
