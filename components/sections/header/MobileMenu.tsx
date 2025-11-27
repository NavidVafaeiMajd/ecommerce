import { ReactNode, useState } from "react";
import { Input } from "../../ui/input";
import { HeaderBtn } from "./headerBtn";
interface Props {
  item: ReactNode;
}
const MobileMenu = ({ item }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="md:hidden">
      <div>
        {" "}
        <span onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          Menu
        </span>
      </div>
      <div
        className={` fixed top-0! h-screen! -right-1000 w-full bg-background/10 backdrop-blur ${isOpen ? "right-0" : ""}`}
        id="mobile-menu"
      >
        <div className="grid grid-cols-2!">
          <div className="bg-background! p-5 flex flex-col justify-around h-screen! shadow">
            <div className="flex flex-col gap-5 max-w-full!">
              <Input
                variant={"filled"}
                placeholder="Search"
                type="search"
                className="w-full"
              />
              <ul className="flex flex-col items-center gap-5">{item}</ul>
            </div>
            <HeaderBtn />
          </div>
          <div className="text-right text-2xl text-bold! p-5">
            <span onClick={() => setIsOpen(!isOpen)}>close</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
