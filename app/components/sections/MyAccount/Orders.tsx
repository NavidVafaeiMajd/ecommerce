import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Orders = () => {
  return (
    <div>
      <div className="flex flex-col gap-10 mt-5">
        {[...Array(5)].map((_, index) => (
          <OrderItem key={index} />
        ))}
      </div>
    </div>
  );
};

export default Orders;

function OrderItem() {
  return (
    <div>
      <div className="bg-grayColor py-5 px-10 rounded-md">
        <h4 className="text-lg">Order no : #123456789</h4>
        <div className="text-ring">
          <span>Order Date:</span>
          <span> 2 June 2023 2:40pm</span>
        </div>
        <div className="text-ring">
          <span>Payment Method:</span>
          <span> Cash on delivery</span>
        </div>
      </div>
      <div className="my-5 flex gap-5 items-center">
        <div className="relative w-30! h-25 rounded-2xl overflow-hidden">
          <Image
            alt=""
            src={"/home/test2.svg"}
            fill
            className="object-cover! "
          />
        </div>{" "}
        <div className="flex justify-between items-center w-full!">
          <div>
            <h4> Black Printed T-shirt</h4>
            <div>
              <span>Color:</span>
              <span className="text-ring"> Pink </span>
            </div>
            <div>
              <span>Qty:</span>
              <span className="text-ring">1</span>
            </div>
            <div className="text-ring">
              <span>Total :</span>
              <span> $23.00 </span>
            </div>
          </div>
          <div>
            <Link href="MyAccount/detaile">
              <Button>View Details</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
