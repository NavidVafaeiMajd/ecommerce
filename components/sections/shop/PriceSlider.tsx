"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";

export default function PriceSlider() {
  const [value, setValue] = useState([0, 13400000]);

  return (
    <div className="relative w-full py-10">
      <div className="relative">
        <Slider
          defaultValue={[0, 13400000]}
          min={0}
          max={20000000}
          step={1000}
          value={value}
          onValueChange={setValue}
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
        {/* Label for Left Thumb */}
        <div
          className="absolute -top-8 left-0 transform -translate-x-1/2 text-sm font-medium"
          style={{
            left: `${(value[0] / 20000000) * 100}%`,
          }}
        >
          {value[0].toLocaleString()}
        </div>

        {/* Label for Right Thumb */}
        <div
          className="absolute -top-8 left-0 transform -translate-x-1/2 text-sm font-medium"
          style={{
            left: `${(value[1] / 20000000) * 100}%`,
          }}
        >
          {value[1].toLocaleString()}
        </div>
      </div>
    </div>
  );
}
