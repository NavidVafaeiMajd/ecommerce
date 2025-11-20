import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const SecoundSec = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <Card className="bg-[url('../public/home/img2.svg')] bg-cover bg-center h-[355px] text-white!">
        <CardContent className="grid grid-cols-2 h-full!">
          <div className="flex flex-col gap-5 justify-center h-full!">
            <span className="font-bold">Low Price</span>
            <h3 className="text-4xl font-bold">Hight Coziness</h3>
            <span>UPTO 50% OFF</span>
            <Link href={"/"} className="underline font-bold mt-5">
              Explore‌ Items
            </Link>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-[url('../public/home/img3.svg')] object-cover bg-center  text-white!">
        <CardContent className="grid grid-cols-2 h-full!">
          <div className="flex flex-col gap-5 justify-center h-full!">
            <span className="font-bold">Beyong Present</span>
            <h3 className="text-4xl font-bold">Breezy Summer Style</h3>
            <span>UPTO 50% OFF</span>
            <Link href={"/"} className="underline font-bold mt-5">
              Explore‌ Items
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecoundSec;
