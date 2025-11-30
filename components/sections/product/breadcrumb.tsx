import RightIcon from "@/public/icons/right";
import Link from "next/link";

const Breadcrumb = ({gender , productName} : {gender: string | null | undefined, productName: string}) => {
  return (
    <>
        <div className="text-ring flex items-center gap-5">
          {" "}
          <span><Link href={"/"}>Home</Link></span>{" "}
          <RightIcon/>
          <span className="text-foreground"><Link href={`/${gender}`}>{gender}</Link></span>{" "}
          <RightIcon/>
          <span className="text-foreground">{productName}</span>{" "}
        </div>
    </>
  );
};

export default Breadcrumb;
