"use server";
import { eq } from "drizzle-orm"
import { db } from "../_lib/db"
import { credentials } from "../_lib/db/schemas"
import { getCurrentUser } from "./user.actions"
import bcrypt from 'bcryptjs'

async function generateAPIKey(length = 40, salt = 10){

    const baseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'.split('')

    let key = ''

    for(let i = 0; i < length; i++){
        key += baseChars[Math.floor(Math.random() * baseChars.length)]
    }

    const hashedKey = await bcrypt.hash(key , salt)

    return {
        key,
        hashedKey
    }
}

export async function setAPIKey() {

    try {

        //Get the current user
        const user = await getCurrentUser()

        if (!user) throw Error("Unauthorized")
        
        //Generate a key and the hashed version to use for the API key
        const { key , hashedKey } = await generateAPIKey()

        const foundRow = await db.query.credentials.findFirst({
            where: eq(credentials.ownerId , user.id)
        })
        //Set the hashed version in the database

        if(!foundRow){
            await db.insert(credentials).values({ ownerId: user.id , apiKey: hashedKey })
        }else {
            await db.update(credentials).set({ apiKey: hashedKey }).where(eq(credentials.ownerId , user.id))
        }
        
        //Return the actual key
        return key

    } catch (error) {
        throw error
    }
}