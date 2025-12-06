import { cn } from "@/app/lib/utils";
import { SizeContext } from "@/context/Size";
import { useContext } from "react";
import { Label } from "../../ui/label";

export function ColorCheckbox({
  handleFilterChange,
}: {
  handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const color = useContext(SizeContext).color

  return (
    <div className="grid grid-cols-3 gap-5 mt-5">
      {color.map((color, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center gap-3"
        >
          <input
            onChange={handleFilterChange}
            type="checkbox"
            id={color.id}
            name="color"
            value={color.name}
            className="hidden peer"
          />
          <Label
            htmlFor={color.id}
            className={cn(
              "flex items-center gap-0 w-7 h-7 rounded-2xl cursor-pointer",
              "ring-2 ring-transparent ring-offset-4 ring-offset-background",
              "peer-checked:ring-white peer-checked:border-amber-500"
            )}
            style={{ backgroundColor: color.name }}
          >
            {/* اینجا محتوای داخلی لِیبل */}
          </Label>

          <span className={`text-md text-${color.name}-600`}>
            {color.name}
          </span>
        </div>
      ))}
    </div>
  );
}
