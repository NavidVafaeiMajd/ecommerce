  "use client";
  import { FillterSection } from "@/components/sections/shop/FillterSection.";
  import { useEffect, useRef, useState } from "react";
  import { ProductListItem } from "../lib/definitions";
  import { useInView } from "react-intersection-observer";
  import { ProductItems } from "@/components/sections/shop/ProductItems";
  import { string } from "zod";

  type Props = {
    children: React.ReactNode;
  };
  export default function RootLayout({ children }: Props) {
    const [products, setProducts] = useState<ProductListItem[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const isFetchingRef = useRef(false);

    const { ref, inView } = useInView({
      threshold: 0,
    });

  const [filters, setFilters] = useState({
    category_id: [] as string[],
    gender: [] as string[],
    color: [] as string[],
    size: [] as string[],
    min_price: "",  // رنج قیمت می‌تونه رشته بمونه چون تکی هست
    max_price: "",
  });


    function handleFilterChange(
      e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) {
      setFilters((prev) => {
        const list = prev[e.target.name] as string[] || string;

        return {
          ...prev,
          [e.target.name]: list.includes(e.target.value)
            ? list.filter((v) => v !== e.target.value) // remove
            : [...list, e.target.value], // add
        };
      });
      setProducts([]);
      setPage(1);
      setHasMore(true);
    }

    console.log(filters);
    useEffect(() => {
      let cancelled = false;
      async function load() {
        if (!hasMore) return;
        if (isFetchingRef.current) return;

        isFetchingRef.current = true;
        setLoading(true);

        try {
          const params = new URLSearchParams({
            page: page.toString(),
            pageSize: "6",
          });

          Object.entries(filters).forEach(([key, value]) => {
            if (!value) return;

            if (Array.isArray(value)) {
              value.forEach((v) => {
                if (v) params.append(key, v);
              });
            } else {
              params.append(key, value);
            }
          });

          console.log(params);
          const res = await fetch(`/api/product?${params.toString()}`);
          const data = await res.json();

          if (cancelled) return;

          setProducts((prev) =>
            page === 1 ? data.products : [...prev, ...data.products]
          );
          setHasMore(
            Array.isArray(data.products) ? data.products.length === 6 : false
          );
        } catch (e) {
          console.error(e);
        } finally {
          if (!cancelled) {
            setLoading(false);
            isFetchingRef.current = false;
          }
        }
      }

      load();

      return () => {
        cancelled = true;
      };
    }, [page, filters, hasMore]);

  useEffect(() => {
    if (inView && hasMore && !loading && !isFetchingRef.current) {
      setPage((prev) => prev + 1);
    }
  }, [inView, hasMore, loading]);


    console.log(products);

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
