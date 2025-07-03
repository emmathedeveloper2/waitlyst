import { boolean, pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { user } from "./auth";

export const subscriptions = pgTable('subscriptions' , {
    id: uuid().primaryKey().defaultRandom(),
    userEmail: text('user_email').references(() => user.email).notNull(),
    plan: varchar({ length: 255 }).default('free').notNull(),
    emailToken: varchar('email_token' , { length: 255 }).notNull(),
    subscriptionCode: varchar('subscription_code' , { length: 255 }).notNull(),
    status: varchar({ length: 255 }).default('active'),
    renewAt: timestamp('renew_at'),
})