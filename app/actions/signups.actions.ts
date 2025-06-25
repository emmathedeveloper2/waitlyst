"use server";
import { eq } from "drizzle-orm";
import { db } from "../_lib/db"
import { signups } from "../_lib/db/schemas";


export async function addSignUp(email: string , appId: string , ownerId: string){
    try {

        const alreadyExists = await db.query.signups.findFirst({
            where: eq(signups.email , email)
        })

        if(alreadyExists) throw Error("This email is already in the waitlist")
        
        const [ signup ] = await db.insert(signups).values({ email , appId , ownerId }).returning()

        return signup
    } catch (error) {
        throw error
    }
}