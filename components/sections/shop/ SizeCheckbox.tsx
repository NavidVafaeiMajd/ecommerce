import { Checkbox } from "../../ui/checkbox";
import { Label } from "../../ui/label";
import { cn } from "@/lib/utils";

const size = ["XS", "S", "M", "L", "XL", "XXL"];
export function SizeCheckbox() {
  return (
    <div className="flex flex-wrap items-center gap-3 my-3">
      {size.map((size , index) => (
        <>
          <Label
            htmlFor={ String(index)}
            className={cn(
              "flex items-center justify-center gap-0 w-10 h-10 rounded-xl cursor-pointer border has-[[aria-checked=true]]:bg-foreground has-[[aria-checked=true]]:text-background",
            )}
          >
            <Checkbox id={String(index)} className="hidden" />
            {size}
          </Label>
        </>
      ))}
    </div>
  );
}
