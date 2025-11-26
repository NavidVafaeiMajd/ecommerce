import Orders from "@/components/sections/MyAccount/Orders";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MyOrder = () => {
  return (
    <div>
      <div>
        <div className="text-foreground! mb-5">
          <h3 className="text-3xl mb-2!">My Order</h3>
        </div>
      </div>
      <div>
        <Tabs defaultValue="active" className="w-full!">
          <TabsList className="w-full! flex justify-between bg-transparent">
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          <TabsContent value="active">
            <Orders/>
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MyOrder;
