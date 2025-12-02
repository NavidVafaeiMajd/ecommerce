import postgres from 'postgres';
import { Product, ProductListItem, ProductVariant } from './definitions';

const sql = postgres(process.env.POSTGRES_URL!, {
  ssl: false,
});



export async function fetchProducts(): Promise<ProductListItem[]> {
  try {
    const result = await sql<ProductListItem[]>`
      SELECT 
        p.*,
        MIN(pv.price) AS product_price
      FROM products p
      LEFT JOIN product_variants pv ON pv.product_id = p.id
      GROUP BY p.id
      ORDER BY p.product_name ASC;
    `;

    return result;
  } catch (error) {
    console.error("DB Error:", error);
    throw new Error("Failed to fetch product list.");
  }
}


export async function fetchGenderProduct(
  query: string,
) {

  try {
    const product = await sql<ProductListItem[]>`
        SELECT 
        p.*,
        MIN(pv.price) AS product_price
      FROM products p
      LEFT JOIN product_variants pv ON pv.product_id = p.id
      WHERE LOWER(p.gender) = LOWER(${query.trim()})   
      GROUP BY p.id
      ORDER BY p.product_name ASC;
     `;
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


