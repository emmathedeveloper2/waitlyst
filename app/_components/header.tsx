import { ArrowRightIcon, MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LinkButton from './link-button'

const Header = () => {
  return (
    <header className='fixed w-full p-4 flex items-center justify-between z-10'>
      <Link href={'/'} className='flex items-center gap-2 link-btn'>
        <Image
          src={'/logo.png'}
          alt='logo'
          height={36}
          width={36}
        />
        <h3>waitlyst</h3>
      </Link>

      <nav className='hidden items-center gap-4 md:flex'>
        <Link href={'/pricing'}>
          Pricing
        </Link>
        <Link href={'/pricing'}>
          Developers
        </Link>
      </nav>

      <LinkButton href='/signin' className='hidden md:flex'>
        Sign In
        <ArrowRightIcon className='small' />
      </LinkButton>

      <button className='md:hidden text-foreground'>
        <MenuIcon/>
      </button>
    </header>
  )
}

export default Header