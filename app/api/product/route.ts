import postgres from "postgres";
const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);

    const filters = {
      category_id: url.searchParams.get("category_id"),
      gender: url.searchParams.get("gender"),
      color: url.searchParams.get("color"),
      size: url.searchParams.get("size"),
      min_price: url.searchParams.get("min_price"),
      max_price: url.searchParams.get("max_price"),
    };

    const page = parseInt(url.searchParams.get("page") || "1");
    const pageSize = parseInt(url.searchParams.get("pageSize") || "6");
    const offset = (page - 1) * pageSize;

    const conditions: any[] = [];

if (filters.category_id) conditions.push(sql`LOWER(p.category_id) = LOWER(${filters.category_id})`);
if (filters.gender) conditions.push(sql`LOWER(p.gender) = LOWER(${filters.gender})`);
if (filters.color) conditions.push(sql`LOWER(c.name) = LOWER(${filters.color})`);
if (filters.size) conditions.push(sql`LOWER(s.name) = LOWER(${filters.size})`);
if (filters.min_price) conditions.push(sql`pv.price >= ${filters.min_price}`);
if (filters.max_price) conditions.push(sql`pv.price <= ${filters.max_price}`);

    const where =
      conditions.length > 0
        ? sql`WHERE ${conditions.reduce((prev, curr, i) =>
            i === 0 ? sql`${curr}` : sql`${prev} AND ${curr}`
          )}`
        : sql``;

    const products = await sql`
      SELECT p.id, p.product_name, p.product_des, p.category_id, p.gender, p.product_img,
             pv.price, c.name AS color, s.name AS size
      FROM products p
      JOIN product_variants pv ON pv.product_id = p.id
      JOIN colors c ON c.id = pv.color_id
      JOIN sizes s ON s.id = pv.size_id
      ${where}
      ORDER BY p.product_name
      LIMIT ${pageSize} OFFSET ${offset}
    `;

    const [{ count }] = await sql`
      SELECT COUNT(*)::int
      FROM products p
      JOIN product_variants pv ON pv.product_id = p.id
      JOIN colors c ON c.id = pv.color_id
      JOIN sizes s ON s.id = pv.size_id
      ${where}
    `;

    return Response.json({
      products,
      total: count,
      page,
      pageSize,
    });

  } catch (err) {
    console.error(err);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
