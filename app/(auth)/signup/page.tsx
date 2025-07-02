import HeaderLogo from '@/app/_components/header-logo'
import SignUpForm from '@/app/_forms/sign-up-form'
import Image from 'next/image'
import React, { Suspense } from 'react'

async function SignUpPage() {

  return (
    <main className="w-full flex min-h-screen">
      <div className="flex-1 h-screen p-4 flex flex-col">
        <HeaderLogo />
        <div className='flex-1 grid place-items-center'>
          <Suspense>
            <SignUpForm />
          </Suspense>
        </div>
      </div>
      <div className="hidden md:block flex-1 h-screen">
        <Image
          src={'/assets/signup-banner.png'}
          alt='banner'
          width={720}
          height={1024}
          className='size-full object-cover'
        />
      </div>
    </main>
  )
}

export default SignUpPage