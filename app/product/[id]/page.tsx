import { fetchProductWithVariants } from "@/app/lib/data";
import Description from "@/app/components/sections/product/Description";
import ProductInfo from "@/app/components/sections/product/ProductInfo";
import RelatedProduct from "@/app/components/sections/product/RelatedProduct";
import { notFound } from "next/navigation";

export default async function page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  const { product, variants } = await fetchProductWithVariants(id);

  if (!product) {
    notFound();
  }

  console.log("Product Details:", variants);

  return (
    <div className="">
      <ProductInfo productInfo={product[0]} variants={variants} />
      <Description des={product[0].product_des} />
      <RelatedProduct />
    </div>
  );
}
