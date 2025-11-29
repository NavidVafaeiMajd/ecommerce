import { fetchProductById } from "@/app/lib/data";
import { products } from "@/app/lib/placeholder-data";
import Description from "@/components/sections/product/Description";
import ProductInfo from "@/components/sections/product/ProductInfo";
import RelatedProduct from "@/components/sections/product/RelatedProduct";
import { notFound } from "next/navigation";

export default async function page  (props: { params: Promise<{ id: string }> })  {
    const params = await props.params;
    const id = params.id;

  const product  = await fetchProductById(id);

    if (!product ) {
    notFound();
  }
    
  return (
    <div className="">
      <ProductInfo productInfo={product[0]} />
      <Description des={product[0].product_des } />
      <RelatedProduct />
    </div>
  );
};

