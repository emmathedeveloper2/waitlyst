"use server";
import { and, count, eq } from "drizzle-orm";
import { db } from "../_lib/db"
import { signups } from "../_lib/db/schemas";
import { getCurrentUser } from "./user.actions";


export async function addSignUp(email: string , appId: string , ownerId: string){
    try {

        const alreadyExists = await db.query.signups.findFirst({
            where: and(eq(signups.email , email) , eq(signups.appId , appId))
        })

        if(alreadyExists) throw new Error("This email is already in the waitlist")
        
        const [ signup ] = await db.insert(signups).values({ email , appId , ownerId }).returning()

        return { data: signup }
    } catch (error: any) {
        return { data: null , error: error.message || error.statusText || "Something went wrong" }
    }
}

export async function getTotalSignUpsForUser() {
    try {
        const user = await getCurrentUser()

        if(!user) throw new Error("UNAUTHORIZED")

        const [found] = await db.select({ count: count() }).from(signups).where(eq(signups.ownerId, user.id)).limit(1)

        return found.count || 0
    } catch (error) {
        throw error
    }
}