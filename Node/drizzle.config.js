import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./drizzle/schema.js",
  out: "./drizzle/migrations",
  dialect: "mysql",
  dbCredentials: {
    host: "localhost",
    user: "root",
    password: "*aziz121#",
    database: "drizzle",
  },
});
