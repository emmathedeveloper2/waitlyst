import Logo from '@/app/_components/logo'
import JoinWaitListForm from '@/app/_forms/join-waitlist-form'
import { getAppById } from '@/app/actions/apps.actions'
import { getSubscription } from '@/app/actions/subscriptions.actions'
import { headers } from 'next/headers'
import Link from 'next/link'
import React from 'react'

export async function generateMetadata({ params }: { params: Promise<{ appId: string }> }) {

  const { appId } = await params

  const app = await getAppById(appId)

  return {
    title: app?.name ?? "waitlyst",
    description: app?.description ?? "Join the waitlist"
  }
}

async function WaitLystFormPage({ params }: {
  params: Promise<{ appId: string }>
}) {

  const { appId } = await params

  const app = await getAppById(appId)

  const subscription = await getSubscription()

  const headersList = await headers();
  const baseUrl = headersList.get('x-base-url') || ''; // Get the base URL

  if (!app) return (
    <main className='h-screen grid place-items-center'>
      <h1 className='text-center'>Oop'sssss.</h1>
      <p className='text-center'>Seems like this wait list doesn't exist.</p>
    </main>
  )

  return (
    <main className='relative h-screen flex flex-col items-center justify-center gap-[16px]'>
      <h1>{app.name}</h1>

      {
        app.description &&
        <p className='text-center'>{app.description}</p>
      }

      <JoinWaitListForm appId={app.id} ownerId={app.ownerId} />

      {
        !subscription || subscription.plan != "pro" &&
        <small className='absolute bottom-2 right-2 bg-secondary text-secondary-foreground py-[4px] px-[16px] rounded shadow-md flex items-center gap-[4px]'><Logo className="size-[15px]" /> Made with <Link target='_blank' href={baseUrl}>waitlyst</Link></small>
      }
    </main>
  )
}

export default WaitLystFormPage