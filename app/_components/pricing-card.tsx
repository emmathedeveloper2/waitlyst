import clsx from 'clsx'

type PricingCardProps = { 
    price: string, 
    title?: string, 
    className?: string, 
    features?: string[] 
}

const PricingCard = ({ price , title , className , features } : PricingCardProps) => {

    return (
        <div className={clsx(
            'h-full rounded-[32px] p-[36px]',
            className
            )}>
            <h1 className='font-instrument'>${price}/<span className='text-small'>month</span></h1>
            { title && <h2 className='font-instrument'>{title}</h2> }

            {
                features && 
                <ul className='list-disc pl-[32px]'>
                    {features.map((feature , i) => (
                        <li key={i}>{feature}</li>
                    ))}
                </ul>
            }
        </div>
    )
}

export default PricingCard