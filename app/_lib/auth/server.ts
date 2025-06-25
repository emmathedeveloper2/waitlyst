import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db";
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from "../env";
import { nextCookies } from "better-auth/next-js";
import { transporter } from "../email";
import verificationTemplate from "../email/verification-template";
 
export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
    }),
    advanced: {
        database: {
            generateId: false
        }
    },
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: true,
    },
    emailVerification: {
        sendOnSignUp: true,
        autoSignInAfterVerification: true,
        sendVerificationEmail: async ({ user , url }) => {
            
            await transporter.sendMail({
                from: "waitlyst",
                to: user.email,
                subject: `Verify Your Email`,
                html: verificationTemplate({
                    USER_NAME: user.name,
                    BRAND_COLOR: "#222",
                    COMPANY_DOMAIN: '',
                    COMPANY_NAME: "NuxDo",
                    VERIFICATION_URL: url,
                })
            })
        }
    },
    socialProviders : {
        github: {
            clientId: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET
        }
    },
    plugins: [nextCookies()]
});