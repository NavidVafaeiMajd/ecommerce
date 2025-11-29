import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { Label } from "../../ui/label";
import { cn } from "@/app/lib/utils";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

export function SizeRadioGroup() {
  return (
    <RadioGroup
      defaultValue="M"
      className="flex flex-wrap items-center gap-3 my-3"
    >
      {sizes.map((size, index) => (
        <div key={size}>
          <Label
            htmlFor={`size-${index}`}
            className={cn(
              "flex items-center justify-center w-10 h-10 rounded-xl cursor-pointer border transition",
              "has-[[data-state=checked]]:bg-foreground has-[[data-state=checked]]:text-background"
            )}
          >
            <RadioGroupItem
              id={`size-${index}`}
              value={size}
              className="peer sr-only"
            />
            {size}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
