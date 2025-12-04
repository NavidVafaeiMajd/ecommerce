"use client";
import { createContext } from "react";

export const SizeContext = createContext([]);

export default function SizeProvider({ size , categories, children }) {
  return (
    <SizeContext.Provider value={[size , categories]}>
      {children}
    </SizeContext.Provider>
  );
}
