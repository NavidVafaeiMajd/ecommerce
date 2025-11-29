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
