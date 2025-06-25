import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from 'drizzle-zod'
import { z } from 'zod/v4'
import { user } from "./auth";

export const apps = pgTable("apps", {
    id: uuid().primaryKey().defaultRandom(),
    name: varchar({ length: 255 }).notNull(),
    description: text().notNull(),
    ownerId: uuid('owner_id').notNull().references(() => user.id),
    projectId: uuid().defaultRandom().notNull(),
    createdAt: timestamp('created_at').$defaultFn(() => new Date()).notNull(),
    updatedAt: timestamp('updated_at').$defaultFn(() => new Date()).$onUpdateFn(() => new Date()).notNull(),
})

export const InsertAppSchema = createInsertSchema(apps, {
    name: field => field.min(3, 'app name must be at least 3 characters long'),
    description: field => field.min(3, 'description must be at least 3 characters long')
}).omit({
    id: true,
    ownerId: true,
    createdAt: true,
    updatedAt: true
})

export type InsertAppSchemaType = z.infer<typeof InsertAppSchema>