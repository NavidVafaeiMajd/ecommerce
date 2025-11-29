export type Product = {
  id: string;
  product_name: string;
  product_color?: string | null;
  product_size?: string | null;
  product_price: number;
  product_des?: string | null | undefined;
  category_id?: string | null;
  gender?: string | null;
  product_img?: string | null;
}