import OrderSummary from "@/components/sections/checkout/OrderSummary";

const Page = () => {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-4"></div>
      <div className="col-span-2 border rounded-md p-5 flex flex-col gap-5">
        <OrderSummary />
      </div>
    </div>
  );
};

export default Page;
