import Breadcrumb from "@/app/components/sections/checkout/breadcrumb";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="pt-10 flex flex-col gap-5">
      <div>
        <Breadcrumb />
      </div>
      <div>
        <h3 className="special m-0!"> Checkout</h3>
      </div>
      <div>{children}</div>
    </div>
  );
}
