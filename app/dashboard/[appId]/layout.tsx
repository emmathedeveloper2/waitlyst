import AppHeader, { AppHeaderLoader } from '@/app/_components/app-page/app-header'
import React, { Suspense } from 'react'


async function AppLayout({ children, params }: {
    children: React.ReactNode,
    params: Promise<{ appId: string }>
}) {

    const { appId } = await params

    return (
        <div className='flex flex-1 flex-col'>
            <Suspense fallback={<AppHeaderLoader />}>
                <AppHeader id={appId} />
            </Suspense>
            {children}
        </div>
    )
}

export default AppLayout