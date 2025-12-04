'use client';
import { SizeContext } from "@/context/Size";
import { useContext } from "react";



export function SizeCheckbox({ handleFilterChange }: { handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  const size = useContext(SizeContext)[0];

  return (
    <div className="flex flex-wrap items-center gap-3 my-3">
      {size.map((label, index) => (

        <div key={index}>
          <input
            type="checkbox"
            id={`size-${index}`}
            name="size"
            value={label.name}
            onChange={handleFilterChange}
            className="peer hidden"
          />
          <label
            htmlFor={`size-${index}`}
            className="
              flex items-center justify-center w-10 h-10 rounded-xl border border-gray-400 cursor-pointer
              peer-checked:bg-foreground peer-checked:text-background
              transition-colors duration-200
              hover:bg-blue-100
            "
          >
            {label.name}
          </label>
        </div>
      ))}
    </div>
  );
}
