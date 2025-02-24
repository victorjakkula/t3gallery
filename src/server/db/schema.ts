import { pgTable, serial, text, timestamp, index } from 'drizzle-orm/pg-core';
import { sql } from "drizzle-orm";

// Define the `posts` table
export const posts = pgTable(
  "posts",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => ({
    nameIndex: index("name_idx").on(table.name),
  })
);
