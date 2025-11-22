import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";

const size = ["XS", "S", "M", "L", "XL", "XXL"];
export function SizeCheckbox() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {size.map((size , index) => (
        <>
          <Label
            htmlFor={ String(index)}
            className={cn(
              "flex items-start gap-0 p-5 m-3 rounded-2xl cursor-pointer border has-[[aria-checked=true]]:bg-foreground/10",
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
