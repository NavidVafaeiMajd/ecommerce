import postgres from 'postgres';
import { Product } from './definitions';

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
