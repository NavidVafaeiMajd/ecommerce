import Category from "@/components/sections/home/Category";
import NewArrival from "@/components/sections/home/NewArrival";
import SecoundSec from "@/components/sections/home/SecoundSec";
import { Slider } from "@/components/sections/home/slider";

export default function Home() {
  return (
    <div className="flex flex-col gap-15">
      <Slider />
      <SecoundSec />
      <NewArrival />
      <Category/>
    </div>
  );
}
