import SecoundSec from "@/components/sections/home/SecoundSec";
import { Slider } from "@/components/sections/home/slider";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Slider />
      <SecoundSec />
    </div>
  );
}
