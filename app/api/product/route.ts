import postgres from "postgres";
const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function GET(request: Request) {
    try {
        const url = new URL(request.url);

        const filters = {
            category_id: url.searchParams.getAll("category_id"),
            gender: url.searchParams.getAll("gender"),
            color: url.searchParams.getAll("color"),
            size: url.searchParams.getAll("size"),
            min_price: url.searchParams.get("min_price"),
            max_price: url.searchParams.get("max_price"),
        };
        console.log(filters)

        const page = parseInt(url.searchParams.get("page") || "1");
        const pageSize = parseInt(url.searchParams.get("pageSize") || "6");
        const offset = (page - 1) * pageSize;

        const conditions: any[] = [];

        if (filters.category_id && filters.category_id.length > 0) {
            const category_ids = filters.category_id.map((g: string) => g.toLowerCase());
            conditions.push(sql`LOWER(p.category_id) = ANY(${category_ids})`);
        }

        if (filters.gender && filters.gender.length > 0) {
            const genders = filters.gender.map((g: string) => g.toLowerCase());
            conditions.push(sql`LOWER(p.gender) = ANY(${genders})`);
        }

        if (filters.color && filters.color.length > 0) {
            const colors = filters.color.map((c: string) => c.toLowerCase());
            conditions.push(sql`LOWER(c.name) = ANY(${colors})`);
        }

        if (filters.size && filters.size.length > 0) {
            const sizes = filters.size.map((s: string) => s.toLowerCase());
            conditions.push(sql`LOWER(s.name) = ANY(${sizes})`);
        }

        if (filters.min_price) {
            conditions.push(sql`pv.price >= ${filters.min_price}`);
        }

        if (filters.max_price) {
            conditions.push(sql`pv.price <= ${filters.max_price}`);
        }


        const where =
            conditions.length > 0
                ? sql`WHERE ${conditions.reduce((prev, curr, i) =>
                    i === 0 ? sql`${curr}` : sql`${prev} AND ${curr}`
                )}`
                : sql``;

        const productIds = await sql`
            SELECT DISTINCT ON (p.id) p.id
            FROM products p
            JOIN product_variants pv ON pv.product_id = p.id
            JOIN colors c ON c.id = pv.color_id
            JOIN sizes s ON s.id = pv.size_id
            ${where}
            ORDER BY p.id, p.product_name
            LIMIT ${pageSize} OFFSET ${offset}
        `;

        const ids = productIds.map((item) => item.id);

        if (ids.length === 0) {
            return Response.json({
                products: [],
                total: 0,
                page,
                pageSize,
            });
        }

        const products = await sql`
            SELECT id, product_name, product_des, category_id, gender, product_img
            FROM products
            WHERE id = ANY(${ids})
        `;

        const [{ count }] = await sql`
            SELECT COUNT(DISTINCT p.id)::int
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
