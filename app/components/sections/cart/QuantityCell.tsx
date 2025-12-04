"use client";

import { useState } from "react";

export function QuantityCell() {
  const [value, setValue] = useState(1);

  return (
    <div className="flex items-center justify-center gap-6 bg-grayColor! px-6 py-3 rounded-2xl max-w-30!">
      <button
        onClick={() => value > 0 && setValue(value - 1)}
        className=""
      >
        −
      </button>

      <span>{value}</span>

      <button
        onClick={() => setValue(value + 1)}
        className=""
      >
        +
      </button>
    </div>
  );
}
