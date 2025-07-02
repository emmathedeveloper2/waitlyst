"use client";
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { formatToCurrency } from '../_lib/helpers';

type PricingCardProps = { 
    price: number, 
    title?: string, 
    className?: string, 
    features?: string[],
    type: 'free' | 'starter' | 'pro' | string,
    userLoggedIn: boolean
}

const PricingCard = ({ price , title , className , features , type , userLoggedIn } : PricingCardProps) => {

    const router = useRouter()

    const handleClick = () => {

        if(type == 'free') return

        if(!userLoggedIn) router.push('/signin?redirectTo=/pricing')

        router.push(`/checkout?plan=${type}`)
    }


    return (
        <div onClick={handleClick} className={clsx(
            'h-full rounded-[32px] p-[36px] cursor-pointer transition-shadow hover:shadow-xl',
            className
            )}>
            <h2 className='font-instrument font-black'>{formatToCurrency(price)}/<span className='text-small'>month</span></h2>
            { title && <h2 className='font-instrument'>{title}</h2> }

            {
                features && 
                <ul className='list-disc pl-[32px]'>
                    {features.map((feature , i) => (
                        <li 
                        className={clsx({'line-through opacity-50' : feature.split(':')[1]})}
                        key={i}
                        >{feature.split(':')[0]}</li>
                    ))}
                </ul>
            }
        </div>
    )
}

export default PricingCard