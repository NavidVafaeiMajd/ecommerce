import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Props) {
  return (
    <div className="pt-5!">
      <Tabs defaultValue="MyOrder" className="grid grid-cols-6 gap-5">
        <TabsList className="col-span-2 text-ring! flex flex-col justify-start! items-start bg-transparent w-full! ">
          <div className="text-foreground! mb-5">
            <h3 className="special mb-2!">Hello Navid!</h3>
            <p className="text-ring">Welocome to your Account</p>
          </div>
          <TabsTrigger
            className="data-[state=active]:bg-grayColor data-[state=active]:border-l-2 h-15 data-[state=active]:border-l-foreground text-ring shadow-none! w-full!  rounded-none!"
            value="MyOrder"
          >
            My Order
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-grayColor data-[state=active]:border-l-2 h-15 data-[state=active]:border-l-foreground text-ring shadow-none! w-full!  rounded-none!"
            value="Wishlist"
          >
            Wishlist
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-grayColor data-[state=active]:border-l-2 h-15 data-[state=active]:border-l-foreground text-ring shadow-none! w-full!  rounded-none!"
            value="MyInfo"
          >
            My Info
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-grayColor data-[state=active]:border-l-2 h-15 data-[state=active]:border-l-foreground text-ring shadow-none! w-full!  rounded-none!"
            value="SignOut"
          >
            Sign Out
          </TabsTrigger>
        </TabsList>
        <div className="col-span-4">{children}</div>
      </Tabs>
    </div>
  );
}
