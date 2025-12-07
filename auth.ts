import { Pool } from "pg";
import { betterAuth } from "better-auth";

const pool = new Pool({
  connectionString: process.env.POSTGRES_STRING,
  ssl: {
    rejectUnauthorized: false,
  }
})

export const auth = betterAuth({
  database: pool,
  emailAndPassword: {
    enabled: true,
  },
  secret: process.env.BETTER_AUTH_SECRET,

});
