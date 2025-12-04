"use client";
import { createContext } from "react";

export const SizeContext = createContext([]);

export default function SizeProvider({ size, children }) {
  return (
    <SizeContext.Provider value={size}>
      {children}
    </SizeContext.Provider>
  );
}
