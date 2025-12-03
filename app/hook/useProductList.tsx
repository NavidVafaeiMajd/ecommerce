import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ProductListItem } from "../lib/definitions";

export function useProductList() {
  const [products, setProducts] = useState<ProductListItem[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const isFetchingRef = useRef(false); 

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const [filters, setFilters] = useState({
    category_id: "",
    gender: "",
    color: "",
    size: "",
    min_price: "",
    max_price: "",
  });

  function handleFilterChange(
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setProducts([]);
    setPage(1);
    setHasMore(true);
  }

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
          pageSize: "20",
        });

        Object.entries(filters).forEach(([k, v]) => {
          if (v) params.append(k, v);
        });

        const res = await fetch(`/api/products?${params.toString()}`);
        const data = await res.json();

        if (cancelled) return;

        setProducts((prev) =>
          page === 1 ? data.products : [...prev, ...data.products]
        );
        setHasMore(
          Array.isArray(data.products) ? data.products.length === 20 : false
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
  }, [page , filters , hasMore]);

  useEffect(() => {
    if (inView && hasMore && !loading && !isFetchingRef.current) {
      isFetchingRef.current = true; 
      setPage((prev) => prev + 1);
    }
  }, [inView, hasMore, loading]);

  return { products, handleFilterChange };
}
