import React from 'react'
import LinkButton from '@/app/_components/buttons/link-button'
import { ShoppingCartIcon } from 'lucide-react'
import HeaderLogo from '../_components/header-logo'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import clsx from 'clsx'
import { getCurrentUser } from '../actions/user.actions'
import { generatePaymentLink } from '../actions/subscriptions.actions'
import { getPlans } from '../_lib/plans'
import { formatToCurrency } from '../_lib/helpers'

async function CheckoutPage({ searchParams }: { searchParams: Promise<any> }) {

    const { plan } = await searchParams

    const match = getPlans().find(p => p.type == plan)

    if (!match) return redirect('/pricing')

    const user = await getCurrentUser()

    if (!user) return redirect('/signin')

    const authUrl = await generatePaymentLink(user as any, match.type , match.planCode)

    return (
        <main className="flex-1 size-full flex">
            <div className="hidden md:block flex-1 h-screen">
                <Image
                    src={'/assets/signup-banner.png'}
                    alt='banner'
                    width={720}
                    height={1024}
                    className='size-full object-cover'
                />
            </div>
            <div className="flex-1 h-screen p-4 flex flex-col">
                <div className='flex md:justify-end'>
                    <HeaderLogo />
                </div>
                <div className='flex-1 flex flex-col items-center justify-center gap-[32px]'>
                    <h2>Waitlyst {match.title} Plan</h2>
                    <h1 className='font-instrument'>{formatToCurrency(match.price)}/<span className='text-small'>month</span></h1>

                    <ul className='list-disc pl-[32px]'>
                        {match.features.map((feature, i) => (
                            <li
                                className={clsx({ 'line-through opacity-50': feature.split(':')[1] })}
                                key={i}
                            >{feature.split(':')[0]}</li>
                        ))}
                    </ul>

                    <LinkButton href={authUrl} target="_blank">
                        Proceed To Checkout
                        <ShoppingCartIcon />
                    </LinkButton>
                </div>
            </div>
        </main>
    )
}

export default CheckoutPage