import { z } from "zod";

const EnvSchema = z.object({
    DATABASE_URL: z.string(),
    GITHUB_CLIENT_ID: z.string(),
    GITHUB_CLIENT_SECRET: z.string(),
    NODEMAILER_USER: z.string(),
    NODEMAILER_PASSWORD: z.string(),
    APP_URL: z.string(),
})

export const { 
    DATABASE_URL,
    GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET,
    NODEMAILER_USER,
    NODEMAILER_PASSWORD,
    APP_URL,
 } = EnvSchema.parse(process.env)