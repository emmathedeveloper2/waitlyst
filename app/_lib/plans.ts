import { NODE_ENV } from "./env"

export const planFeatures = {
    free : {
        apps: 1,
        signups: 100,
    },
    starter : {
        apps: 50,
        signups: 1000000,
    },
    pro : {
        apps: Infinity,
        signups: Infinity,
    }
} as {[x: string] : { apps: number, signups: number }}

export const getPlans = () => {

    // return NODE_ENV == "development" ? test_plans : live_plans
    return test_plans
}

const test_plans = [
    {
        price: 0,
        title: 'Free',
        type: 'free',
        planCode: '',
        features: ['1 App', '1000 Signups', 'Email Export:no', 'Waitlist Customization:no']
    },
    {
        price: 14000,
        title: 'Starter',
        type: 'starter',
        planCode: 'PLN_o2t4xk4s6h8lkgo',
        features: ['50 Apps', '1 million Signups', 'Email Export', 'Waitlist Customization:no']
    },
    {
        price: 44000,
        title: 'Pro',
        type: 'pro',
        planCode: 'PLN_k3wuizzwtwjbby9',
        features: ['Unlimited Apps', 'Unlimited Signups', 'Email Export', 'Waitlist Customization']
    },
]

const live_plans = [
    {
        price: 0,
        title: 'Free',
        type: 'free',
        planCode: '',
        features: ['1 App', '1000 Signups', 'Email Export:no', 'Waitlist Customization:no']
    },
    {
        price: 14000,
        title: 'Starter',
        type: 'starter',
        planCode: 'PLN_qb7aq7it8wxiyb0',
        features: ['50 Apps', '1 million Signups', 'Email Export', 'Waitlist Customization:no']
    },
    {
        price: 30000,
        title: 'Pro',
        type: 'pro',
        planCode: 'PLN_mkwxlge8qna3kp6',
        features: ['Unlimited Apps', 'Unlimited Signups', 'Email Export', 'Waitlist Customization']
    },
]