import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { Label } from "../../ui/label";
import { cn } from "@/lib/utils";

const colors = ["red", "blue", "green"];

export function ColorRadioGroup() {
  return (
    <RadioGroup defaultValue="red" className="flex gap-5 mt-5">
      {colors.map((color) => (
        <div
          key={color}
          className="flex flex-col justify-center items-center gap-3"
        >
          <Label
            htmlFor={color}
            className={cn(
              "flex items-center justify-center gap-0 w-7 h-7 rounded-2xl cursor-pointer",
              "ring-2 ring-transparent ring-offset-4 ring-offset-background",
              `bg-${color}-600`,
              `has-[[data-state=checked]]:ring-foreground`
            )}
          >
            <RadioGroupItem
              value={color}
              id={color}
              className="hidden"
            />
          </Label>

          <span className={`text-md text-${color}-600`}>{color}</span>
        </div>
      ))}
    </RadioGroup>
  );
}
