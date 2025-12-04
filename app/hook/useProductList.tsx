import { useEffect, useRef, useState, useCallback } from "react";
import { ProductListItem } from "../lib/definitions";

type Filters = {
  category_id: string[];
  gender: string[];
  color: string[];
  size: string[];
  min_price: string;
  max_price: string;
};

export function useProductFilter(initialFilters?: Partial<Filters>) {
  const [products, setProducts] = useState<ProductListItem[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const isFetchingRef = useRef(false);

  const [filters, setFilters] = useState<Filters>({
    category_id: [],
    gender: ["woman", "man"],
    color: [],
    size: [],
    min_price: "",
    max_price: "",
    ...initialFilters,
  });

  // تابع کمکی برای ساخت پارامترهای url
  const buildQueryParams = useCallback(() => {
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
        if (value) params.append(key, value);
      }
    });
    return params.toString();
  }, [filters, page]);

  // بارگذاری محصولات با مدیریت کامل async و fetch
  const loadProducts = useCallback(async () => {
    if (isFetchingRef.current || !hasMore) return;

    isFetchingRef.current = true;
    setLoading(true);

    try {
      const query = buildQueryParams();
      const res = await fetch(`/api/product?${query}`);
      const data = await res.json();

      setProducts((prev) =>
        page === 1 ? data.products : [...prev, ...data.products]
      );
      setHasMore(
        Array.isArray(data.products) ? data.products.length === 6 : false
      );
    } catch (error) {
      console.error("Failed to t products:", error);
    } finally {
      isFetchingRef.current = false;
      setLoading(false);
    }
  }, [buildQueryParams, page, hasMore]);

  // هر بار page یا filters تغییر کنن، محصولات جدید لود می‌شن
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  // وقتی فیلتر تغییر کرد، محصولات و صفحه ریست می‌شه و لود جدید انجام می‌شه
  function handleFilterChange(
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) {
    const { name, value } = e.target;

    setFilters((prev) => {
      if (Array.isArray(prev[name])) {
        const list = prev[name] as string[];
        const newList = list.includes(value)
          ? list.filter((v) => v !== value)
          : [...list, value];
        return { ...prev, [name]: newList };
      } else {
        return { ...prev, [name]: value };
      }
    });

    setPage(1);
    setHasMore(true);
    setProducts([]);
  }
  function handlePriceChange(
    {min_price, max_price}: {min_price: number, max_price: number}
  ) {

    setFilters((prev) => {
      return { ...prev, min_price: min_price.toString(), max_price: max_price.toString() };
    });

    setPage(1);
    setHasMore(true);
    setProducts([]);
  }

  return {
    products,
    filters,
    loading,
    hasMore,
    setPage,
    handleFilterChange,
    handlePriceChange,
  };
}
