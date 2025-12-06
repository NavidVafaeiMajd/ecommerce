"use client";
import { createContext } from "react";

export const SizeContext = createContext([]);

interface Props{
  size: string[],
  categories: string[];
  color: string[]
  children: React.ReactNode;
}

export default function SizeProvider({ size , categories, color, children } : Props) {
  return (
    <SizeContext.Provider value={[size , categories , color]}>
      {children}
    </SizeContext.Provider>
  );
}
