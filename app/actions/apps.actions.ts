"use server"
import { and, count, eq } from "drizzle-orm";
import { db } from "../_lib/db";
import { apps, InsertAppSchemaType } from "../_lib/db/schemas/app";
import { getCurrentUser } from "./user.actions";
import { signups } from "../_lib/db/schemas";


export async function getAppById(id: string) {

    try {

        const found = db.query.apps.findFirst({
            where: eq(apps.id, id)
        })

        return found
    } catch (error) {
        throw error
    }
}

export async function getTotalAppSignUps(appId: string) {

    try {

        const [ found ] = await db.select({ count: count() }).from(signups).where(eq(signups.appId , appId)).limit(1)

        return found.count || 0
    } catch (error) {
        throw error
    }
}

export async function getAppsByUser(userId: string) {

    try {
        const found = db.query.apps.findMany({
            where: eq(apps.ownerId, userId)
        })

        return found
    } catch (error) {
        throw error
    }
}

export async function createApp({ name, description }: InsertAppSchemaType) {
    try {

        const user = await getCurrentUser()

        if (!user) throw Error("Unauthorized")

        const [app] = await db.insert(apps).values({ name, description, ownerId: user.id }).returning()

        return app
    } catch (error) {
        throw error
    }
}

export async function getAppSignups(appId: string) {
    try {

        const user = await getCurrentUser()

        if (!user) throw Error("Unauthorized")

        const result = db.query.signups.findMany({
            where: and(eq(signups.appId, appId) , eq(signups.ownerId, user.id))
        })

        return result
    } catch (error) {
        throw error
    }
}