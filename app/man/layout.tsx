import { FillterSection } from "@/app/components/sections/shop/FillterSection.";

type Props = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Props) {
  return (
    <div className="md:grid grid-cols-12 gap-10">
      <div className="md:col-span-3">
        <FillterSection />
      </div>
      <div className="md:col-span-9 max-md:mt-5">{children}</div>
    </div>
  );
}
