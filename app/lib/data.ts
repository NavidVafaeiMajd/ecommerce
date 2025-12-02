import postgres from 'postgres';
import { Product, ProductVariant } from './definitions';

const sql = postgres(process.env.POSTGRES_URL!, {
  ssl: false,
});

export async function fetchProduct() {
  try {
    const data = await sql<Product[]> `SELECT * FROM products`;
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch product data.');
  }
}

export async function fetchProductById(id: string) {
  try {
    const data = await sql<Product[]>`
      SELECT *
      FROM products
      WHERE products.id = ${id};
    `;

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}

export async function fetchGenderProduct(
  query: string,
) {

  try {
    const product = await sql<Product[]>`
      SELECT *
      FROM products     
      WHERE LOWER(products.gender) = LOWER(${query.trim()})    `;
    
    return product;
  }
   catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch Product.');
    }
}



export async function fetchProductWithVariants(productId: string) {
  try {
    const productResult = await sql<Product[]>`
      SELECT *
      FROM products
      WHERE id = ${productId}
    `;

    const variantsResult = await sql<ProductVariant[]>`
      SELECT
        pv.id,
        pv.price,
        pv.stock,
        c.name AS color,
        s.name AS size
      FROM product_variants pv
      LEFT JOIN colors c ON pv.color_id = c.id
      LEFT JOIN sizes s ON pv.size_id = s.id
      WHERE pv.product_id = ${productId}
    `;

    return {
      product: productResult ?? null,
      variants: variantsResult,
    };
  } catch (error) {
    console.error("❌ DB ERROR:", error);
    throw new Error("Failed to fetch product info.");
  }
}


