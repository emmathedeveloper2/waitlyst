import React from 'react'
import Image from 'next/image'
import PricingCard from '@/app/_components/pricing-card'
import { getCurrentUser } from '@/app/actions/user.actions'
import clsx from 'clsx'
import { getPlans } from '@/app/_lib/plans'

async function PricingPage() {


    const user = await getCurrentUser()

    const plans = getPlans()

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

                {plans.map((plan , idx) => (
                    <PricingCard
                    key={idx}
                    {...plan}
                    userLoggedIn={!!user}
                    className={clsx({
                        'bg-primary-foreground text-primary border border-primary': plan.type == 'free',
                        'bg-foreground text-background text-background': plan.type == 'starter',
                        'bg-primary text-primary-foreground text-background': plan.type == 'pro'
                    })}
                    />
                ))}
            </section>
        </main>
    )
}

export default PricingPage