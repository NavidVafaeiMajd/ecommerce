import { TabsContent } from "@/components/ui/tabs";
import MyOrder from "./MyOrder";
import Wishlist from "./Wishlist";
import MyInfo from "./MyInfo";

const page = () => {
  return (
    <div className="">
      <TabsContent value="MyOrder">
        <MyOrder />
      </TabsContent>
      <TabsContent value="Wishlist">
        <Wishlist />
      </TabsContent>
      <TabsContent value="MyInfo">
        <MyInfo />
      </TabsContent>
    </div>
  );
};

export default page;
