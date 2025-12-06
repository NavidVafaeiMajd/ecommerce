"use client";
import { createContext } from "react";
import { Categories, Sizes , Colors } from "@/app/lib/definitions";

interface Props {
  size: Sizes[];
  categories: Categories[];
  color: Colors[];
  children: React.ReactNode;
}

interface SizeContextType {
  size: Sizes[];
  categories: Categories[];
  color: Colors[];
}

export const SizeContext = createContext<SizeContextType>({
  size: [],
  categories: [],
  color: [],
});

export default function SizeProvider({
  size,
  categories,
  color,
  children,
}: Props) {
  return (
    <SizeContext.Provider value={{size, categories, color}
}>
      {children}
    </SizeContext.Provider>
  );
}
