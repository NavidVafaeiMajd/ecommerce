import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import Image from "next/image";

const FeedBack = () => {
  return (
    <div className="flex flex-col">
      <h3 className="special">FeedBack</h3>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="basis-1/1 sm:basis-1/2 md:basis-1/3">
            <div>
              <div>
                <Image alt="" src={"/home/test1.svg"} width={75} height={75} />
              </div>
              <div className="font-bold my-5 text-2xl">
                <span>Folyd Miles</span>
              </div>
              <div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/1 sm:basis-1/2 md:basis-1/3">
            <div>
              <div>
                <Image alt="" src={"/home/tst1.svg"} width={15} height={15} />
              </div>
              <div>Folyd Miles</div>
              <div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/1 sm:basis-1/2 md:basis-1/3">
            <div>
              <div>
                <Image alt="" src={"/home/tst1.svg"} width={15} height={15} />
              </div>
              <div>Folyd Miles</div>
              <div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>{" "}
    </div>
  );
};

export default FeedBack;
