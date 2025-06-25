import { z } from 'zod/v4'

export const signUpSchema = z.object({
    email: z.email(),
    name: z.string().min(3, 'Username must be at least 3 characters long'),
    password: z.string().min(8, 'Password must be at least 8 characters long')
})

export type SignUpInputs = z.infer<typeof signUpSchema>

export const signInSchema = signUpSchema.extend({
    password: z.string().min(8, 'Password must be at least 8 characters long')
}).omit({
    name: true
})

export type SignInInputs = z.infer<typeof signInSchema>

export const joinWaitListSchema = z.object({
  email: z.email()
})

export type JoinWaitListSchemaType = z.infer<typeof joinWaitListSchema>