import { DataTable } from "@/components/sections/data-table";
import { columns, Payment } from "./coulomn";

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


const page = async() => {
    const  data = await getData()

  return (
    <div className="">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default page;
