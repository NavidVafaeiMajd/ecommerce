"use client";

import { Button } from "@/app/components/ui/button";
import Breadcrumb from "./breadcrumb";
import Image from "next/image";
import { Product, ProductVariant } from "@/app/lib/definitions";
import { useState } from "react";

interface Props {
  productInfo: Product;
  variants: ProductVariant[];
}

const ProductInfo = ({ productInfo, variants }: Props) => {
  const [selectedSize, setSelectedSize] = useState(variants[0]?.size || "");
  const [selectedColor, setSelectedColor] = useState(variants[0]?.color || "");

  const selectedVariant = variants.find(
    (v) => v.size === selectedSize && v.color === selectedColor
  );

  const price = selectedVariant?.price;
  const stock = selectedVariant?.stock ?? 0;

  const handleAddToCart = async () => {
    if (!selectedVariant) return;
    await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        variant_id: selectedVariant.id,
        quantity: 1,
      }),
    });
    console.log("Added to cart:", selectedVariant);
    alert("Added to cart!");
  };

  const sizes = [...new Set(variants.map((v) => v.size))];
  const colors = [...new Set(variants.map((v) => v.color))];
  return (
    <div className="max-md:flex max-md:flex-col md:grid md:grid-cols-2  gap-10">
      <div>
        <div className="relative w-full! h-[400px] md:h-[785px]! rounded-2xl overflow-hidden">
          <Image
            alt=""
            src={productInfo.product_img || ""}
            fill
            className="object-cover! "
          />
        </div>
      </div>
      <div className="p-5 flex flex-col gap-10">
        <Breadcrumb
          gender={productInfo.gender}
          productName={productInfo.product_name}
        />
        <div className="text-2xl">
          <h2>{productInfo.product_name}</h2>
        </div>
        <div className="flex gap-3">
          {sizes.map((size) => (
            <button
              key={size}
              className={`w-10 h-10 rounded-xl border 
              ${selectedSize === size ? "bg-foreground text-background" : ""}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {colors.map((color) => (
            <button
              key={color}
              className={`w-8 h-8 rounded-full ring-transparent ring-offset-2 "
              ${selectedColor === color ? "border-3 ring-2 ring-foreground border-background" : "border-foreground"}`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
        <div className="">
          <Button
            disabled={!selectedVariant || stock < 1}
            onClick={handleAddToCart}
            className="px-6 py-3 rounded-lg bg-purple-600 disabled:bg-gray-500"
          >
            Add to cart
          </Button>

          <span className="price border border-black rounded-md p-2 px-3 ml-5">
            {!price ? "not available " : price}
          </span>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ProductInfo;
