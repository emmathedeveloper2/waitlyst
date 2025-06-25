import { createTransport } from 'nodemailer'
import { NODEMAILER_PASSWORD, NODEMAILER_USER } from '../env'


export const transporter = createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: NODEMAILER_USER,
        pass: NODEMAILER_PASSWORD
    }
})