import z from "zod";

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

export interface ProductListItem extends Product {
  product_price: number | null;
}
export interface Sizes {
  id: string;
  name: string;
}
export interface Colors {
  id: string;
  name: string;
}
export interface Categories {
  id: string;
  category_name: string;
}

export type CategoriesContext = {
  id: string;
  category_name: string;
}

export const SignUpchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

export const SignInchema = z.object({
  email: z
    .string()
    .email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

export interface CartItem {
  productId: string;
  productName: string;
  variantId: string;
  size: string;
  color: string;
  price: number;
  qty: number;
  subtotal : number
}

export interface CartContextType {
  items: CartItem[];
  loading: boolean;
  addItem: (item: CartItem) => void;
  decreaseItem: (item: CartItem) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  setItems: (items: CartItem[]) => void;
}
