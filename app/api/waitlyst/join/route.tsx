import { db } from "@/app/_lib/db";
import { apps, credentials, signups } from "@/app/_lib/db/schemas";
import bcrypt from "bcryptjs";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";


const addSignUp = async (apiKey: string, projectId: string, email: string) => {

    const app = await db.query.apps.findFirst({
        where: eq(apps.projectId, projectId)
    })

    if (!app) throw new Error("This app doesn't exist anymore")

    const credential = await db.query.credentials.findFirst({
        where: eq(credentials.ownerId, app.ownerId)
    })

    if (!credential || !credential.apiKey) throw new Error("Cannot validate credentials")

    const isCorrectAPIKey = await bcrypt.compare(apiKey, credential.apiKey)

    if (!isCorrectAPIKey) throw new Error("Invalid API key")

    const alreadyExists = await db.query.signups.findFirst({
        where: and(eq(signups.email, email), eq(signups.appId, app.id))
    })

    if (alreadyExists) throw Error("This email is already in the waitlist")

    const [signup] = await db.insert(signups).values({ email, appId: app.id, ownerId: app.ownerId }).returning()

    return signup
}

export const POST = async (request: NextRequest) => {

    try {

        const apiKey = request.headers.get('Authorization')?.split(' ')[1]

        const projectId = request.headers.get('X-App-ID')

        if (!apiKey) throw new Error("Missing API Key in Authorization header")

        if (!projectId) throw new Error("Missing Project ID in header")

        const { email } = await request.json()

        if (!email) throw new Error("Missing email in request body")

        const signup = await addSignUp(apiKey, projectId, email)

        return NextResponse.json({
            success: true,
            message: "User successfully added to waitlist",
            data: signup
        })

    } catch (error: any) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 404 })
    }
}