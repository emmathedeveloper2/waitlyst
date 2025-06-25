import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { user } from "./auth";


export const credentials = pgTable("credentials" , {
    id: uuid().primaryKey().defaultRandom().notNull(),
    ownerId: uuid('owner_id').references(() => user.id).notNull(),
    apiKey: text('api_key')
})