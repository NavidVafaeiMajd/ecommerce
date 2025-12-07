"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { signOut, useSession } from "../lib/auth-client";
import { isErrorWithMessage } from "../lib/utils";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  const pathname = usePathname();
  const [loading, startTransition] = useTransition();
  const router = useRouter();
  const {
    data,
    isPending, 
    error, 
    refetch,
  } = useSession();

  console.log(data);
  return (
    <div className="pt-5!">
      <div defaultValue="MyOrder" className="grid md:grid-cols-6 gap-5">
        <div className="md:col-span-2 text-ring! flex flex-col justify-start! items-start bg-transparent w-full! ">
          <div className="text-foreground! mb-5 ">
            <h3 className="special mb-2!">Hello {data?.user.name}!</h3>
            <p className="text-ring">Welocome to your Account</p>
          </div>
          <div className="flex md:flex-col w-full!">
            <Link
              className={`h-10 w-full rounded-none flex justify-center items-center ${
                pathname === "/MyAccount"
                  ? "bg-grayColor border-l-2 border-l-foreground text-ring"
                  : "text-ring"
              }`}
              href={"/MyAccount"}
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
                pathname.startsWith("/MyAccount/MyInfo")
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
              href={"/sign-in"}
              onClick={() => {
                startTransition(async () => {
                  try {
                    await signOut({
                      fetchOptions: {
                        onSuccess: () => {
                          router.push("/sign-in");
                          toast.success("Successfully Logout!");
                        },
                      },
                    });
                  } catch (error: unknown) {
                    if (isErrorWithMessage(error)) {
                      toast.error(error.message);
                    } else {
                      toast.error("Something went wrong");
                    }
                  }
                });
              }}
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
