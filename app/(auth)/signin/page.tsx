import HeaderLogo from '@/app/_components/header-logo'
import SignInForm from '@/app/_forms/sign-in-form'
import SignUpForm from '@/app/_forms/sign-up-form'
import Image from 'next/image'
import React from 'react'

function SignInPage() {
  return (
    <main className="w-full flex min-h-screen">
      <div className="hidden md:block flex-1 h-screen">
        <Image
          src={'/assets/signin-banner.png'}
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
        <div className='flex-1 grid place-items-center'>
          <SignInForm />
        </div>
      </div>
    </main>
  )
}

export default SignInPage