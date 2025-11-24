import RightIcon from "@/public/icons/right";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Props) {
  return (
    <div>
      <div className="flex flex-col gap-5 py-10">
        <div className="text-ring flex items-center gap-5">
          {" "}
          <span>Home</span>{" "}
          <RightIcon/>
          <span className="text-foreground">Add To Cart</span>{" "}
        </div>
        <div>
          <p>Please fill in the fields below and click place order to complete your purchase!<br/>
          Already registered?<Link href={"/"} className="text-primary">Please log in here</Link> </p>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
