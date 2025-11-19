import { ReactNode, useState } from "react";
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
        className={` fixed top-0! h-screen! -right-1000 w-full bg-black/60 ${isOpen ? "right-0" : ""}`}
        id="mobile-menu"
      >
        <div className="grid grid-cols-2!">
          <div className="bg-ackground!">
            <div>
              <ul>{item}</ul>
            </div>
          </div>
          <div>
            <span onClick={() => setIsOpen(!isOpen)}>close</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
