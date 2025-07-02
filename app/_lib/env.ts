import { z } from "zod";

const EnvSchema = z.object({
    DATABASE_URL: z.string(),
    GITHUB_CLIENT_ID: z.string(),
    GITHUB_CLIENT_SECRET: z.string(),
    NODEMAILER_USER: z.string(),
    NODEMAILER_PASSWORD: z.string(),
    PAYSTACK_SECRET_KEY: z.string(),
    NODE_ENV: z.string(),
})

export const { 
    DATABASE_URL,
    GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET,
    NODEMAILER_USER,
    NODEMAILER_PASSWORD,
    PAYSTACK_SECRET_KEY,
    NODE_ENV
 } = EnvSchema.parse(process.env)