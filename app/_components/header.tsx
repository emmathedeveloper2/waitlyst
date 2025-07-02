"use client"
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import LinkButton from './buttons/link-button'
import HeaderLogo from './header-logo'
import { user } from '../_lib/db/schemas'
import { usePathname } from 'next/navigation'
import MobileNav from './mobile-nav'

type HeaderProps = {
  user?: typeof user.$inferSelect
}

const Header = ({ user }: HeaderProps) => {

  const pathname = usePathname()

  return (
    <header className='w-full p-4 flex items-center justify-between z-10'>
      <HeaderLogo />

      <nav className='hidden items-center gap-4 md:flex'>
        <Link href={'/pricing'}>
          Pricing
        </Link>
      </nav>

      <div>
        {
          !user &&
          <LinkButton variant='secondary' href='/signin' className='hidden md:flex'>
            Sign In
            <ArrowRightIcon className='small' />
          </LinkButton>
        }

        {
          user && !pathname.startsWith('/dashboard') &&
          <LinkButton variant='secondary' href='/dashboard' className='hidden md:flex'>
            Dashboard
            <ArrowRightIcon className='small' />
          </LinkButton>
        }

        <MobileNav user={user} pathname={pathname} />
      </div>
    </header>
  )
}

export default Header