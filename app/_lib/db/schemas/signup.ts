import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { user } from "./auth";
import { apps } from "./app";

export const signups = pgTable("signups", {
    id: uuid().primaryKey().defaultRandom(),
    name: varchar({ length: 255 }),
    email: varchar({ length: 255 }).notNull(),
    ownerId: uuid('owner_id').notNull().references(() => user.id),
    appId: uuid('app_id').notNull().references(() => apps.id),
    createdAt: timestamp('created_at').$defaultFn(() => new Date()).notNull(),
    updatedAt: timestamp('updated_at').$defaultFn(() => new Date()).$onUpdateFn(() => new Date()).notNull(),
})