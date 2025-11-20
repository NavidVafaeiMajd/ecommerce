import Image from "next/image";
import { Button } from "../../ui/button";
import Link from "next/link";

export const HeaderBtn = () => {
  return (
    <div className="flex gap-2">
      <Button
        variant="header"
        className="w-12 h-12 flex items-center justify-center"
      >
        <Link href={"/"}>
          <Image
            src="/icons/like.svg"
            width={20}
            height={20}
            alt=""
            className="w-5 h-5"
          />
        </Link>
      </Button>
      <Button
        variant="header"
        className="w-12 h-12 flex items-center justify-center"
      >
        <Image
          src="/icons/user.svg"
          width={20}
          height={20}
          alt=""
          className="w-5 h-5"
        />
      </Button>
      <Button
        variant="header"
        className="w-12 h-12 flex items-center justify-center"
      >
        <Image
          src="/icons/cart.svg"
          width={20}
          height={20}
          alt=""
          className="w-5 h-5"
        />
      </Button>
    </div>
  );
};
