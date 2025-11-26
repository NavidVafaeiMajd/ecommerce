import { OrderTimeline } from "@/components/sections/MyAccount/OrderTimeline";
import { Button } from "@/components/ui/button";
import CliseIcon from "@/public/icons/colse";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col gap-15">
      <Link href={"../"}>
        <Button variant={"header"}>Back</Button>
      </Link>
      <div className="bg-grayColor py-5 px-10 rounded-md flex justify-between items-center">
        <div>
          <h4 className="text-lg">Order no : #123456789</h4>
          <div className="text-ring">
            <span>Order Date:</span>
            <span> 2 June 2023 2:40pm</span>
          </div>
        </div>

        <div>
          <span className="text-ring">Total:</span>
          <span> $143.00</span>
        </div>
      </div>
      <OrderTimeline currentStep={0} />
      <div className="bg-grayColor py-5 px-10 rounded-md">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="border-b border-gray-300 last:border-none py-5 "
          >
            <OrderList />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;

function OrderList() {
  return (
    <div className="flex justify-between items-center">
      <div className="relative w-20 h-15 md:w-25! md:h-25! rounded-2xl overflow-hidden">
        <Image alt="" src={"/home/test2.svg"} fill className="object-cover! " />
      </div>
      <div>
        <h4>Men Blue Shirt</h4>
        <div>
          <span>Color:</span> <span className="text-ring">Blue</span>
        </div>
      </div>
      <div>
        <span>Qty:</span>
        <span> 1</span>
      </div>
      <div>
        <span>$29.00</span>
      </div>
      <div>
        <CliseIcon />
      </div>
    </div>
  );
}
