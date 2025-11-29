import postgres from 'postgres';
import { products } from '../lib/placeholder-data';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedProducts() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS products (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      product_name VARCHAR(255) NOT NULL,
      product_color VARCHAR(50),
      product_size VARCHAR(10),
      product_price NUMERIC(10, 2) NOT NULL,
      product_des TEXT,
      category_id VARCHAR(50),
      gender VARCHAR(20)
    );
  `;

  await sql`ALTER TABLE products
ADD COLUMN product_img VARCHAR(100) NOT NULL DEFAULT '';
  `

  const insertedProducts = await Promise.all(
    products.map((p) =>
      sql`
        INSERT INTO products (
          product_name,
          product_color,
          product_size,
          product_price,
          product_des,
          category_id,
          gender
        ) VALUES (
          ${p.product_name},
          ${p.product_color ?? null},
          ${p.product_size ?? null},
          ${p.product_price},
          ${p.product_des ?? null},
          ${p.category_id ?? null},
          ${p.gender ?? null}
        )
        ON CONFLICT DO NOTHING;
      `
    )
  );

  return insertedProducts;
}

export async function GET() {
  try {
    await sql.begin(sql => [
      seedProducts(),
    ]);

    return Response.json({ message: 'Products table seeded successfully' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
