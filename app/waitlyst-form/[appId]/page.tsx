import JoinWaitListForm from '@/app/_forms/join-waitlist-form'
import { getAppById } from '@/app/actions/apps.actions'
import React from 'react'

export async function generateMetadata({ params } : { params: { appId: string } }){
    
    const { appId } = params

    const app = await getAppById(appId)

    return {
      title: app?.name ?? "waitlyst",
      description: app?.description ?? "Join the waitlist"
    }
}

async function WaitLystFormPage({ params } : {
    params: Promise<{ appId: string }>
}) {

  const { appId } = await params

  const app = await getAppById(appId)

  if(!app) return (
    <main className='h-screen grid place-items-center'>
        <h1 className='text-center'>Oop'sssss.</h1>
        <p className='text-center'>Seems like this wait list doesn't exist.</p>
    </main>
  )

  return (
    <main className='h-screen flex flex-col items-center justify-center gap-[16px]'>
        <h1>{app.name}</h1>

        {
            app.description &&
            <p className='text-center'>{app.description}</p>
        }

        <JoinWaitListForm appId={app.id} ownerId={app.ownerId}/>
    </main>
  )
}

export default WaitLystFormPage