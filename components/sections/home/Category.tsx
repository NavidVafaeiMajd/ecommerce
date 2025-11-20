import Image from "next/image";

const Category = () => {
  return (
    <div>
      <h3 className="special">Categories For Men</h3>
      <div className="grid grid-cols-4 gap-10">
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </div>
    </div>
  );
};

export default Category;

const CategoryItem = () => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <Image alt="" src={"/home/test2.svg"} width={270} height={393} />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="font-bold">Shirt</span>
          <span className="font-light">Explore Now!</span>
        </div>
        <div>
          <Image alt="" src={"/icons/Arrow.svg"} width={20} height={30} />
        </div>
      </div>
    </div>
  );
};
