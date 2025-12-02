export interface Product {
  id: string;
  product_name: string;
  product_des?: string;
  category_id?: string;
  gender?: string;
  product_img?: string;
}

export interface ProductVariant {
  id: string;
  price: number;
  stock: number;
  color: string;
  size: string;
}
