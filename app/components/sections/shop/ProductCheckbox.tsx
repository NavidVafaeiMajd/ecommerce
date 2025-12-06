import { useContext } from "react";
import { Label } from "../../ui/label";
import { SizeContext } from "@/context/Size";

export function ProductCheckbox({
  handleFilterChange,
}: {
  handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }) {
  
  const cat = useContext(SizeContext)[1]
  
  return (
    <>
      {cat.map((label: { category_name: string , id :number }, index: number) => (
        <div className="flex items-center gap-3 justify-between" key={index}>
          <Label htmlFor={ label.category_name}>{ label.category_name}</Label>
          <input id={ label.category_name} name="category_id" value={label.id} type="checkbox" onClick={handleFilterChange} />
        </div>
  ))}
    </>

  );
}
