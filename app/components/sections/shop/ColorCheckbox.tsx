import { SizeContext } from "@/context/Size";
import { Checkbox } from "../../ui/checkbox";
import { Label } from "../../ui/label";
import { cn } from "@/app/lib/utils";
import { useContext } from "react";

export function ColorCheckbox({
  handleFilterChange,
}: {
  handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const color = useContext(SizeContext)[2];

  return (
    <div className="flex gap-5 mt-5">
      {color.map((color, index) => {
        return (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-3"
          >
            <Label
              htmlFor={color.id}
              className={cn(
                "flex items-center gap-0 w-7 h-7 rounded-2xl cursor-pointer",
                "ring-2 ring-transparent ring-offset-4 ring-offset-background",
                `has-[[aria-checked=true]]:ring-white`
              )}
              style={{ backgroundColor: color.name }}
            >
              <input onClick={handleFilterChange} type="checkbox" key={index} id={color.id} className="hidden" value={color.name} />
            </Label>

            <span className={`text-md text-${color.name}-600!`}>
              {color.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}
