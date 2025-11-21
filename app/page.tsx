import Category from "@/components/sections/home/Category";
import FeedBack from "@/components/sections/home/FeedBack";
import LimeLight from "@/components/sections/home/LimeLight";
import NewArrival from "@/components/sections/home/NewArrival";
import SecoundSec from "@/components/sections/home/SecoundSec";
import { Slider } from "@/components/sections/home/slider";
import TopBrands from "@/components/sections/home/TopBrands";

export default function Home() {
  return (
    <div className="flex flex-col gap-15">
      <Slider />
      <SecoundSec />
      <NewArrival />
      <Category />
      <TopBrands />
      <LimeLight />
      <FeedBack/>
    </div>
  );
}
