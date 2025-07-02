import SubscriptionButton, { SubscriptionButtonLoading } from '@/app/_components/buttons/subscription-button'
import { getSubscription } from '@/app/actions/subscriptions.actions'
import React, { Suspense } from 'react'

const NotProMemberView = () => (
    <main className='flex-1 h-full flex flex-col items-center justify-center gap-[16px]'>
        <h1 className='text-center font-instrument'>DO MORE WITH PRO</h1>
        <p className='text-center'>Get pro today. More customization, No watermarks!</p>

        <div className='w-[150px] flex justify-center mt-[32px]'>
            <Suspense fallback={<SubscriptionButtonLoading />}>
                <SubscriptionButton className='w-[150px]'/>
            </Suspense>
        </div>
    </main>
)

async function CustomizationPage({ params } : { params: Promise<{ appId: string }> }) {

  const { appId } = await params

  const subscription = await getSubscription()

  if(!subscription || subscription.plan != "pro") return <NotProMemberView />

  return (
    <main className='flex-1 h-full'>

    </main>
  )
}

export default CustomizationPage