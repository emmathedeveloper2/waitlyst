import HeaderLogo from '@/app/_components/header-logo'
import CreateAppForm from '@/app/_forms/create-app-form'
import Image from 'next/image'
import React from 'react'

function CreateAppPage() {
    return (
        <main className="w-full flex min-h-screen">
            <div className="flex-1 h-screen p-4 flex flex-col">
                <HeaderLogo />
                <div className='flex-1 grid place-items-center'>
                    <CreateAppForm />
                </div>
            </div>
            <div className="hidden md:block flex-1 h-screen">
                <Image
                    src={'/assets/create-account-banner.png'}
                    alt='banner'
                    width={720}
                    height={1024}
                    className='size-full object-cover'
                />
            </div>
        </main>
    )
}

export default CreateAppPage