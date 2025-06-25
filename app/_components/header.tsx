"use client"
import { ArrowRightIcon, MenuIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import LinkButton from './link-button'
import HeaderLogo from './header-logo'
import { user } from '../_lib/db/schemas'
import { usePathname } from 'next/navigation'
import LogOutButton from './logout-button'

type HeaderProps = {
  user?: typeof user.$inferSelect
}

const Header = ({ user } : HeaderProps) => {

  const pathname = usePathname()

  return (
    <header className='w-full p-4 flex items-center justify-between z-10'>
      <HeaderLogo />

      <nav className='hidden items-center gap-4 md:flex'>
        <Link href={'/pricing'}>
          Pricing
        </Link>
        <Link href={'/pricing'}>
          Developers
        </Link>
      </nav>

      {
        !user &&
        <LinkButton href='/signin' className='hidden md:flex'>
          Sign In
          <ArrowRightIcon className='small' />
        </LinkButton>
      }

      {
        user && !pathname.startsWith('/dashboard') &&
        <LinkButton href='/dashboard' className='hidden md:flex'>
          Dashboard
          <ArrowRightIcon className='small' />
        </LinkButton>
      }

      {
        user && pathname.startsWith('/dashboard') &&
        <LogOutButton />
      }

      <button className='md:hidden text-foreground'>
        <MenuIcon/>
      </button>
    </header>
  )
}

export default Header