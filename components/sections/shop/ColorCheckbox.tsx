import { Checkbox } from "../../ui/checkbox";
import { Label } from "../../ui/label";
import { cn } from "@/app/lib/utils";

const color = ["red", "blue", "green"];
export function ColorCheckbox() {
  return (
    <div className="flex gap-5 mt-5">
      {color.map((color, index) => {
        return (
          <>
            <div className="flex flex-col justify-center items-center gap-3">
              <Label
                htmlFor={color}
                className={cn(
                  "flex items-center gap-0 w-7 h-7 rounded-2xl cursor-pointer",
                  "ring-2 ring-transparent ring-offset-4 ring-offset-background",
                  `bg-${color}-600 has-[[aria-checked=true]]:ring-${color}-400`
                )}
              >
                <Checkbox key={index} id={color} className="hidden" />
              </Label>

              <span className={`text-md text-${color}-600!`}>{color}</span>
            </div>
          </>
        );
      })}
    </div>
  );
}
