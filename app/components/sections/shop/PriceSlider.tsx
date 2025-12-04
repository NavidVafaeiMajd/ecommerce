"use client";

import { useState } from "react";
import { Slider } from "@/app/components/ui/slider";

export default function PriceSlider({
  handlePriceChange,
}: {
  handlePriceChange: (e: { min_price: number; max_price: number }) => void;
}) {
  const [value, setValue] = useState([0, 100]);
  function handleChange(e: number[]) {
    setValue(e);
    handlePriceChange({ min_price: e[0], max_price: e[1] });
  }
  return (
    <div className="relative w-full py-10">
      <div className="relative">
        <Slider
          defaultValue={[0, 100]}
          min={0}
          max={100}
          step={1}
          value={value}
          onValueChange={(e) => {
            handleChange(e);
          }}
          className="my-slider"
        />
        <div className="flex justify-around items-center mt-5">
          <span className="py-2 px-5 border border-black/20! rounded-sm min-w-15 flex justify-center">
            $ {value[0].toLocaleString()}
          </span>
          <span className="py-2 px-5 border border-black/20! rounded-sm min-w-15 flex justify-center">
            $ {value[1].toLocaleString()}
          </span>
        </div>
        {/* <div
          className="absolute -top-8 left-0 transform -translate-x-1/2 text-sm font-medium"
          style={{
            left: `${(value[0] / 20000000) * 100}%`,
          }}
        >
          {value[0].toLocaleString()}
        </div>
        <div
          className="absolute -top-8 left-0 transform -translate-x-1/2 text-sm font-medium"
          style={{
            left: `${(value[1] / 20000000) * 100}%`,
          }}
        >
          {value[1].toLocaleString()}
        </div> */}
      </div>
    </div>
  );
}
