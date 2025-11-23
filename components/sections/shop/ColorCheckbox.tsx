import { Checkbox } from "../../ui/checkbox";
import { Label } from "../../ui/label";
import { cn } from "@/lib/utils";

const COLOR_MAP: Record<string, { bg: string; ring: string }> = {
  red: { bg: "bg-red-600", ring: "has-[[aria-checked=true]]:ring-red-400" },
  yellow: { bg: "bg-yellow-400", ring: "has-[[aria-checked=true]]:ring-yellow-400" },
  blue: { bg: "bg-blue-600", ring: "has-[[aria-checked=true]]:ring-blue-400" },
  green: { bg: "bg-green-600", ring: "has-[[aria-checked=true]]:ring-green-400" },
};

export function ColorCheckbox({ color = "gray", id }: { color?: string; id: string }) {
  const { bg, ring } = COLOR_MAP[color] ?? {
    bg: "bg-gray-600",
    ring: "has-[[aria-checked=true]]:ring-gray-400",
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <Label
        htmlFor={id}
        className={cn(
          "flex items-start gap-0 p-5 m-3 rounded-2xl cursor-pointer",
          "ring-2 ring-transparent ring-offset-4 ring-offset-background",
          bg,
          ring
        )}
      >
        <Checkbox id={id} className="hidden" />
      </Label>

      <span className="text-sm text-slate-700">{color}</span>
    </div>
  );
}
