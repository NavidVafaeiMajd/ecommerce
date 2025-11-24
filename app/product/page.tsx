import Breadcrumb from "@/components/sections/breadcrumb";
import { SizeCheckbox } from "@/components/sections/shop/ SizeCheckbox";
import { ColorCheckbox } from "@/components/sections/shop/ColorCheckbox";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const page = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2">
        <div >
          <div className="relative w-full! h-[785px]! rounded-2xl overflow-hidden">
            <Image
              alt=""
              src={"/home/test2.svg"}
              fill
              className="object-cover! "
            />
          </div>
        </div>
        <div className="p-5 flex flex-col gap-10">
          <Breadcrumb />
          <div className="text-2xl"><h2>Raven Hoodie With Black Colored Design</h2></div>
          <div>
            <span>Select Size</span>
            <SizeCheckbox/>
          </div>
          <div>
            <span>Color Avalable</span>
            <ColorCheckbox id="color"/>
          </div>
          <div className="">
            <Button>Add to cart</Button>
            <span className="price border border-black rounded-md p-2 px-3 ml-5">$63.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
