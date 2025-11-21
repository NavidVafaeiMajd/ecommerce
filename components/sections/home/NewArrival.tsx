import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const NewArrival = () => {
  return (
    <div className="flex flex-col">
      <h3 className="special">New Arrival</h3>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="basis-1/1 sm:basis-1/2 md:basis-1/4">
            <div>
              <Link href={"/"} className="flex flex-col gap-10">
                <div className="relative w-full! xl:max-w-[265px] h-[265px]! rounded-2xl overflow-hidden">
                  <Image
                    alt=""
                    src={"/home/test1.svg"}
                    fill
                    className="object-cover! "
                  />
                </div>
                <span className="text-xl font-bold">Full Sleeve</span>
              </Link>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/1 sm:basis-1/2 md:basis-1/4">
            <div>
              <Link href={"/"} className="flex flex-col gap-10">
                <Image
                  alt=""
                  src={"/home/test1.svg"}
                  width={265}
                  height={265}
                />
                <span className="text-xl font-bold">Full Sleeve</span>
              </Link>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/1 sm:basis-1/2 md:basis-1/4">
            <div>
              <Link href={"/"} className="flex flex-col gap-10">
                <Image
                  alt=""
                  src={"/home/test1.svg"}
                  width={265}
                  height={265}
                />
                <span className="text-xl font-bold">Full Sleeve</span>
              </Link>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/1 sm:basis-1/2 md:basis-1/4">
            <div>
              <Link href={"/"} className="flex flex-col gap-10">
                <Image
                  alt=""
                  src={"/home/test1.svg"}
                  width={265}
                  height={265}
                />
                <span className="text-xl font-bold">Full Sleeve</span>
              </Link>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/1 sm:basis-1/2 md:basis-1/4">
            <div>
              <Link href={"/"} className="flex flex-col gap-10">
                <Image
                  alt=""
                  src={"/home/test1.svg"}
                  width={265}
                  height={265}
                />
                <span className="text-xl ">Full Sleeve</span>
              </Link>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>{" "}
    </div>
  );
};

export default NewArrival;
