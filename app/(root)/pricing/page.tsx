import React from 'react'
import Image from 'next/image'
import PricingCard from '@/app/_components/pricing-card'

function PricingPage() {
    return (
        <main className='relative h-screen flex flex-col gap-[16px]'>
            <div className='absolute top-0 left-0 size-full flex items-center justify-center -z-[1]'>
                <Image
                    src={'/assets/doodle-hero.svg'}
                    alt='doodle'
                    width={1218}
                    height={640}
                    className='size-full object-cover'
                />
            </div>

            <h1 className='w-full text-center font-instrument'>Pricing</h1>
            <p className='w-full text-center text-small'>Take your waitlyst experience up a notch</p>

            <section className='w-full md:w-[1000px] mx-auto flex-1 grid grid-cols-1 md:grid-cols-3 gap-[16px] p-[16px]'>
                <PricingCard
                    price='0'
                    title='Free'
                    className='bg-primary-foreground text-primary border border-primary'
                    features={['1 App', '1000 Signups']}
                />
                <PricingCard
                    price='9'
                    title='Starter'
                    className='bg-foreground text-background text-background'
                />
                <PricingCard
                    price='29'
                    title='Pro'
                    className='bg-primary text-primary-foreground text-background'
                />
            </section>
        </main>
    )
}

export default PricingPage