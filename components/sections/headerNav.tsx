'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

type ListItems = {
  name: string;
  link: string;
};

type Props = {
  items: Array<ListItems>;
};

export const HeaderNav = ({ items }: Props) => {
  const pathname = usePathname();

  const item =   items.map((item, index) => {
          const isActive = pathname === item.link;
          return (
            <li
              key={index}
              className={isActive ? "font-bold" : ""}
            >
              <Link href={item.link}>
                {item.name}
              </Link>
            </li>
          );
        })
  return (
    <div>
      <ul className="flex gap-5 text-[#807D7E] max-md:hidden">
        {item}
      </ul>
      <MobileMenu item={item}/>
    </div>
  );
};
