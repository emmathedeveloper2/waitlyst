"use server"
import { eq } from "drizzle-orm"
import { redirect } from "next/navigation"
import { Paystack } from "paystack-sdk"
import { db } from "../_lib/db"
import { user, subscriptions } from "../_lib/db/schemas"
import { PAYSTACK_SECRET_KEY } from "../_lib/env"


export const generatePaymentLink = async (currentUser: typeof user.$inferSelect , plan: string, planCode: string) => {

    
    try {
        //Check if the user already has an existing subscription
        const [ existing ] = await db.select().from(subscriptions).where(eq(subscriptions.userEmail , currentUser.email))

        if(existing && existing.plan == plan) return redirect('/dashboard')
    
        const paystack = new Paystack(PAYSTACK_SECRET_KEY)

        const res = await paystack.transaction.initialize({
            plan: planCode,
            email: currentUser.email,
            amount: "1000",
        })

        return res.data?.authorization_url || ''
    } catch (error) {
        console.log(error)
        redirect('/')
    }
}

export const getSubscription = async (email: string) => {

    try {
        return (await db.select().from(subscriptions).where(eq(subscriptions.userEmail , email)))[0]
    } catch (error) {
        console.log(error)
    }
}