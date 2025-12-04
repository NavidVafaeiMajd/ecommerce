import RightIcon from "@/public/icons/right";

const Breadcrumb = () => {
  return (
    <>
        <div className="text-ring flex items-center gap-5">
          {" "}
          <span>Home</span>{" "}
          <RightIcon/>
          <span className="text-foreground">Add To Cart</span>{" "}
        </div>
    </>
  );
};

export default Breadcrumb;
