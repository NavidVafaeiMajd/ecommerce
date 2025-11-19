'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

type ListItems = {
  name: string;
  link: string;
};

type Props = {
  items: Array<ListItems>;
};

export const HeaderNav = ({ items }: Props) => {
  const pathname = usePathname();

  return (
    <div>
      <ul className="flex gap-5 text-[#807D7E]">
        {items.map((item, index) => {
          const isActive = pathname === item.link;
          return (
            <li
              key={index}
              className={isActive ? "text-foreground font-bold" : ""}
            >
              <Link href={item.link}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
