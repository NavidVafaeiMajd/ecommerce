"use client";

import { useInView } from "react-intersection-observer";
import { FillterSection } from "@/components/sections/shop/FillterSection.";
import { ProductItems } from "@/components/sections/shop/ProductItems";
import { useEffect } from "react";
import { useProductFilter } from "../hook/useProductList";

export default function Page() {
  const {
    products,
    filters,
    loading,
    hasMore,
    setPage,
    handleFilterChange,
  } = useProductFilter({ gender: ["woman" , "man"] } );

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && hasMore && !loading) {
      setPage((prev) => prev + 1);
    }
  }, [inView, hasMore, loading]);

  return (
    <div className="md:grid grid-cols-12 gap-10">
      <div className="md:col-span-3">
        <FillterSection handleFilterChange={handleFilterChange} />
      </div>
      <div className="md:col-span-9 max-md:mt-5">
        <ProductItems products={products} />
        <div ref={ref}>{loading && <p>Loading...</p>}</div>
      </div>
    </div>
  );
}
