import { Checkbox } from "../../ui/checkbox";
import { Label } from "../../ui/label";

export function ProductCheckbox() {
  return (
    <div className="flex items-center gap-3 justify-between">
      <Label htmlFor="terms">Accept terms and conditions</Label>
      <Checkbox id="terms" />
    </div>
  );
}
