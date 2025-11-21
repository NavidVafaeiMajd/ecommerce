import Image from "next/image";

const TopBrands = () => {
    return (
        <div className="bg-foreground text-background p-10 rounded-3xl flex flex-col gap-20">
            <div className="flex flex-col items-center gap-5">
                <h2 className="text-4xl font-bold">Top Brands Deal</h2>
                <span>Up to <span className="text-amber-400">60%</span> off on brands</span>
            </div>
            <div className="flex justify-center gap-5">
                <Image src={"/home/brands/brand1.svg"} width={177} height={85} className="shadow rounded-md" alt="" />
                <Image src={"/home/brands/brand2.svg"} width={177} height={85} className="shadow rounded-md" alt=""/>
                <Image src={"/home/brands/brand3.svg"} width={177} height={85} className="shadow rounded-md" alt=""/>
                <Image src={"/home/brands/brand4.svg"} width={177} height={85} className="shadow rounded-md" alt=""/>
            </div>
        </div>
    );
}
 
export default TopBrands;