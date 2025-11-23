import { FillterSection } from "@/components/sections/shop/FillterSection.";

type Props = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Props) {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 md:col-span-3">
        <FillterSection />
      </div>
      <div className="md:col-span-9">{children}</div>
    </div>
  );
}
