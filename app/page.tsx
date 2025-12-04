import Category from "@/app/components/sections/home/Category";
import FeedBack from "@/app/components/sections/home/FeedBack";
import LimeLight from "@/app/components/sections/home/LimeLight";
import NewArrival from "@/app/components/sections/home/NewArrival";
import SecoundSec from "@/app/components/sections/home/SecoundSec";
import { Slider } from "@/app/components/sections/home/slider";
import TopBrands from "@/app/components/sections/home/TopBrands";

export default async function Home() {
  return (
    <div className="flex flex-col gap-15">
      <Slider />
      <SecoundSec />
      <NewArrival />
      <Category />
      <TopBrands />
      <LimeLight />
      <FeedBack />
    </div>
  );
}
