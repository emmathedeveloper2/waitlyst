import { db } from "@/app/_lib/db";
import { subscriptions } from "@/app/_lib/db/schemas";
import { PAYSTACK_SECRET_KEY } from "@/app/_lib/env";
import { getPlans } from "@/app/_lib/plans";
import crypto from 'crypto';
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server"
import { Paystack } from "paystack-sdk";

function verify(data: any, signature: string): boolean {
    const hmac = crypto.createHmac('sha512', PAYSTACK_SECRET_KEY);
    const expectedSignature = hmac.update(JSON.stringify(data)).digest('hex');
    return expectedSignature === signature;
}

async function createSubscription({
    email,
    plan_code,
    subscription_code,
    email_token,
    next_payment_date
} : Record<string , string>) {

    const paystack = new Paystack(PAYSTACK_SECRET_KEY)
  
    const plan = getPlans().find(p => p.planCode == plan_code)?.type ?? ''

    const [alreadyExistingSubscription] = await db.select().from(subscriptions).where(eq(subscriptions.userEmail , email))

    if(alreadyExistingSubscription) {
        await paystack.subscription.disable({
            code: alreadyExistingSubscription.subscriptionCode,
            token: alreadyExistingSubscription.emailToken
        })

        await db.update(subscriptions).set({ subscriptionCode: subscription_code , emailToken: email_token , plan , active: true , renewAt: (new Date(next_payment_date)) }).where(eq(subscriptions.userEmail , email))

        return
    }


    await db.insert(subscriptions).values({
        plan,
        userEmail: email,
        emailToken: email_token,
        subscriptionCode: subscription_code,
        active: true,
        renewAt: (new Date(next_payment_date)),
    })
}

async function cancelSubscription(subscriptionCode: string) {
    
    await db.update(subscriptions).set({ plan: 'free' , active: false }).where(eq(subscriptions.subscriptionCode , subscriptionCode))
}

export const POST = async (request: NextRequest) => {
    try {

        const body = await request.json()

        const signature = request.headers.get('x-paystack-signature')

        if (!signature || !verify(body, signature)) {
            let error = new Error("Couldn't verify signature") as any

            error.status = 400

            throw error
        }

        if (body.event == "subscription.create") {
            const {
                customer: { email },
                plan: { plan_code },
                subscription_code,
                email_token,
                next_payment_date
            } = body.data

            await createSubscription({ email , plan_code , subscription_code , email_token , next_payment_date })
        }

        if(body.event == "subscription.disable") {
            const { subscription_code } = body.data

            await cancelSubscription(subscription_code)
        }
        

        return NextResponse.json({
            success: true,
            message: "Webhook successful"
        }, { status: 200 })

    } catch (error: any) {
        console.log(error)
        return NextResponse.json({
            success: false,
            message: error.message || "Webhook failed"
        }, { status: error.status || 500 })
    }
}