import SignUpsList, { SignUpsLoadingSkeleton } from '@/app/_components/signups/signups-list'
import React, { Suspense } from 'react'

async function AppPage({ params } : {
  params: Promise<{ appId: string }>
}) {

  const { appId } = await params

  return (
    <main className='flex flex-col flex-1 h-full'>
        <Suspense fallback={<SignUpsLoadingSkeleton />}>
          <SignUpsList appId={appId}/>
        </Suspense>
    </main>
  )
}

export default AppPage