import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProductCheckbox } from "./ProductCheckbox";
import PriceSlider from "./PriceSlider";
import { ColorCheckbox } from "./ColorCheckbox";
import { SizeCheckbox } from "./ SizeCheckbox";

export function FillterSection() {
  return (
    <div>
      <Accordion
        type="multiple"
        className="w-full text-md! text-ring! border border-t-0!"
        defaultValue={["item-1", "item-2", "item-3"]}
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl p-5">Filter</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance p-5 pt-0">
            <ProductCheckbox />
            <ProductCheckbox />
            <ProductCheckbox />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl p-5">Price</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance p-5 pt-0">
            <PriceSlider/>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-xl p-5">Colors</AccordionTrigger>
          <AccordionContent className="flex flex-wrap gap-4 text-lg! p-5 pt-0" >
            <ColorCheckbox />
            <ColorCheckbox />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-xl p-5">Size</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance p-5 pt-0">
            <SizeCheckbox/>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
