import Breadcrumb from "@/components/sections/breadcrumb";
import { SizeCheckbox } from "@/components/sections/shop/ SizeCheckbox";
import { ColorCheckbox } from "@/components/sections/shop/ColorCheckbox";
import { ProductItem } from "@/components/sections/shop/ProductItem";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const page = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-10">
        <div>
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
          <div className="text-2xl">
            <h2>Raven Hoodie With Black Colored Design</h2>
          </div>
          <div>
            <span>Select Size</span>
            <SizeCheckbox />
          </div>
          <div>
            <span>Color Avalable</span>
            <ColorCheckbox />
          </div>
          <div className="">
            <Button>Add to cart</Button>
            <span className="price border border-black rounded-md p-2 px-3 ml-5">
              $63.00
            </span>
          </div>
          <hr />
        </div>
      </div>
      <div>
        <h3 className="special  mt-20">Product Description</h3>
        <p className="text-ring">
          ut I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure,
          but because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful. Nor again is there
          anyone who loves or pursues or desires to obtain pain of itself,
          because it is pain, but because occasionally circumstances occur in
          which toil and pain can procure him some great pleasure. To take a
          trivial
        </p>
      </div>
      <div>
        <div>
          <h3 className="special  mt-20">Similar Product</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-5">
          {[...Array(8)].map((_, index) => (
            <ProductItem key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
