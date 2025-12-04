"use client";
import { createContext } from "react";

export const SizeContext = createContext([]);

export default function SizeProvider({ size , categories, color, children }) {
  return (
    <SizeContext.Provider value={[size , categories , color]}>
      {children}
    </SizeContext.Provider>
  );
}
