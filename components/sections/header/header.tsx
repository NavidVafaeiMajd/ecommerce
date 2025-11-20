// type Props = {
import Image from "next/image";
import { HeaderNav } from "./headerNav";
import { Input } from "../../ui/input";
import { HeaderBtn } from "./headerBtn";

// }
export const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-[60px] md:h-[108px] bg-background! z-10! shadow-sm! shadow-foreground/10">
      <div className="container m-auto! flex items-center justify-between! h-full px-5">
        <div>
          <Image src="/Logo.svg" width={91} height={45} alt="logo" />
        </div>
        <div>
          <HeaderNav
            items={[
              { name: "Home", link: "/" },
              { name: "Shop", link: "/shop" },
              { name: "Man", link: "/man" },
              { name: "Woman", link: "/woman" },
            ]}
          />
        </div>
        <div className="max-md:hidden">
          <Input variant={"filled"} placeholder="Search" type="search" />
        </div>
        <div className="max-md:hidden">
          <HeaderBtn />
        </div>
      </div>
    </div>
  );
};
