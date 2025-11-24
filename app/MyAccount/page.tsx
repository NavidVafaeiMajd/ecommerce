import { TabsContent } from "@/components/ui/tabs";
import MyOrder from "./MyOrder";
import Wishlist from "./Wishlist";

const page = () => {
  return (
    <div className="">
      <TabsContent value="MyOrder">
        <MyOrder/>
      </TabsContent>
      <TabsContent value="Wishlist">
        <Wishlist/>
      </TabsContent>
    </div>
  );
};

export default page;
