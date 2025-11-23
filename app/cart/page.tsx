import { DataTable } from "@/components/sections/data-table";
import { columns, Payment } from "./coulomn";

  async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
      {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
      },
            {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
      },
    ]
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
