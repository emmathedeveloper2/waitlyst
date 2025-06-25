"use client"

import clsx from 'clsx'
import { ArrowRightIcon, MenuIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import LogOutButton from './logout-button'
import { user as users } from '../_lib/db/schemas'
import LinkButton from './link-button'

const MobileNav = ({ user , pathname }: { user?: typeof users.$inferSelect , pathname: string }) => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <button onClick={() => setOpen(!open)} className='md:hidden text-foreground cursor-pointer'>
                <MenuIcon />
            </button>

            <nav className={clsx('fixed top-0 right-0 h-screen w-screen bg-background transition-transform duration-700 flex flex-col items-center justify-between z-10 p-[16px]', open ? 'translate-x-0' : 'translate-x-full')}>

                <div className='w-full flex items-center justify-end'>
                    <button onClick={() => setOpen(!open)} className='md:hidden text-foreground'>
                        <XIcon />
                    </button>
                </div>

                <div className='flex flex-col gap-[8px]'>
                    <Link onClick={() => setOpen(!open)} href={'/pricing'}>
                        <h1>Pricing</h1>
                    </Link>
                </div>

                {
                    !user &&
                    <LinkButton href='/signin' className='flex md:hidden'>
                        Sign In
                        <ArrowRightIcon className='small' />
                    </LinkButton>
                }

                {
                    user && !pathname.startsWith('/dashboard') &&
                    <LinkButton href='/dashboard' className='flex md:hidden'>
                        Dashboard
                        <ArrowRightIcon className='small' />
                    </LinkButton>
                }

                {
                    user && pathname.startsWith('/dashboard') &&
                    <LogOutButton className='flex md:hidden' />
                }
            </nav>
        </>
    )
}

export default MobileNav