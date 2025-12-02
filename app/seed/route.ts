import postgres from 'postgres';
import { products } from '../lib/placeholder-data';
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedProducts() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
  CREATE TABLE IF NOT EXISTS products (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    product_name VARCHAR(500) NOT NULL,
    product_des TEXT,
    category_id VARCHAR(20) ,
    gender VARCHAR(20),
    product_img TEXT
  );
  `;

for (const p of products) {
  const exists = await sql`SELECT 1 FROM products WHERE product_name = ${p.product_name} LIMIT 1`;
  if (exists.length === 0) {
    await sql`
      INSERT INTO products (product_name, product_des, category_id, gender, product_img)
      VALUES (${p.product_name}, ${p.product_des}, ${p.category_id}, ${p.gender}, ${p.product_img});
    `;
  }
}

}

async function seedColors() {
  await sql`
  CREATE TABLE IF NOT EXISTS colors (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
  );
  `;

  const uniqueColors = [...new Set(products.map((p) => p.product_color))];

  for (const color of uniqueColors) {
    await sql`
      INSERT INTO colors (name) VALUES (${color})
      ON CONFLICT DO NOTHING;
    `;
  }
}

async function seedSizes() {
  await sql`
    CREATE TABLE IF NOT EXISTS sizes (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(10) UNIQUE NOT NULL
    );
  `;

  const uniqueSizes = [...new Set(products.map((p) => p.product_size))];

  for (const size of uniqueSizes) {
    await sql`
      INSERT INTO sizes (name) VALUES (${size})
      ON CONFLICT DO NOTHING;
    `;
  }
}

async function seedProductVariants() {
  await sql`
  CREATE TABLE IF NOT EXISTS product_variants (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    product_id UUID REFERENCES products(id) ON DELETE CASCADE,
    color_id UUID REFERENCES colors(id),
    size_id UUID REFERENCES sizes(id),
    price NUMERIC(10, 2) NOT NULL,
    stock INT DEFAULT 10,
    sku VARCHAR(100)
  );
  `;

  for (const p of products) {
    const product = await sql`SELECT id FROM products WHERE product_name = ${p.product_name} LIMIT 1`;
    const color = await sql`SELECT id FROM colors WHERE name = ${p.product_color} LIMIT 1`;
    const size = await sql`SELECT id FROM sizes WHERE name = ${p.product_size} LIMIT 1`;

    if (product.length && color.length && size.length) {
      await sql`
        INSERT INTO product_variants (product_id, color_id, size_id, price, sku)
        VALUES (${product[0].id}, ${color[0].id}, ${size[0].id}, ${p.product_price}, ${p.product_name || 'SKU'})
      `;
    }
  }
}

export async function GET() {

  await sql`TRUNCATE TABLE product_variants, sizes, colors, products RESTART IDENTITY CASCADE;`;


  try {
    await seedProducts();
    await seedColors();
    await seedSizes();
    await seedProductVariants();

    return Response.json({ message: "Seeding done successfully!" });
  } catch (error) {
    console.error(error);
    return Response.json({ error }, { status: 500 });
  }
}
