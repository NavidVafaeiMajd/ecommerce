import Image from "next/image";

const OrderSummary = () => {
  return (
    <>
      <h4 className="text-2xl">Order Summary</h4>
      <div>
        {[...Array(3)].map((_, index) => (
          <div key={index} className="border-b last:border-none ">
            <OrderItem />
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <span>Subtotal:</span>
        <span> $513.00</span>
      </div>
      <div className="flex justify-between items-center">
        <span>Saving:</span>
        <span> $30.00</span>
      </div>
      <div className="flex justify-between items-center">
        <span>Shiping:</span>
        <span> $5.00</span>
      </div>
      <div className="flex justify-between items-center">
        <span>Total:</span>
        <span> $478.00</span>
      </div>
    </>
  );
};

export default OrderSummary;

function OrderItem() {
  return (
    <div className="my-5 flex gap-5 items-center">
      <div className="relative w-15! h-15 rounded-2xl overflow-hidden">
        <Image alt="" src={"/home/test2.svg"} fill className="object-cover! " />
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
        </div>
        <div>
          <div className="text-ring">
            <span>Total :</span>
            <span> $23.00 </span>
          </div>
        </div>
      </div>
    </div>
  );
}
