import { DataTable } from "@/app/components/sections/data-table";
import { columns, Payment } from "./coulomn";
import { Button } from "@/app/components/ui/button";

async function getData(): Promise<Payment[]> {
  return [
    {
      id: "1",
      product: "Laptop",
      price: 45000,
      quantity: 1,
      shipping: 1200,
      subtotal: 46200,
      status: "pending",
      amount: 100,
      email: "m@example.com",
    },
    {
      id: "2",
      product: "Headphones",
      price: 8000,
      quantity: 2,
      shipping: 500,
      subtotal: 16500,
      status: "success",
      amount: 200,
      email: "test@example.com",
    },
  ];
}

const page = async () => {
  const data = await getData();

  return (
    <div className="">
      <DataTable columns={columns} data={data} />
      <div>
        <div className="md:w-1/2 bg-grayColor! p-5 mt-5">
          <div className="flex justify-between">
            <span>Sub Total</span>
            <span>$532.00</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping </span>
            <span>$5.00</span>
          </div>
          <div className="flex justify-between font-bold mt-5 border-b-1 pb-5">
            <span>Grand Total</span>
            <span>$537.00</span>
          </div>
          <div className="flex justify-center p-5">
            <Button>Proceed To Checkout</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
