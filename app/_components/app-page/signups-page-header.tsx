import { getAppById, getTotalAppSignUps } from '@/app/actions/apps.actions'
import React from 'react'
import AppLinkActions from './app-link-actions'
import { headers } from 'next/headers'
import { OpenSidebarButton } from '../nav-bar-context'

type SignUpsPageHeaderProps = {
  appId: string
}

export const SignUpsPageHeaderLoader = async () => {

  return (
    <header className='w-full flex items-center justify-between gap-[16px] p-[16px] animate-pulse'>
      <div className='w-[120px] h-[30px] flex items-center gap-[8px] bg-primary rounded opacity-50'></div>

      <div className='flex items-center gap-[8px]'>
        <div className='w-[30px] h-[30px] flex items-center gap-[8px] bg-primary rounded opacity-50'></div>
        <div className='w-[30px] h-[30px] flex items-center gap-[8px] bg-primary rounded opacity-50'></div>
      </div>
    </header>
  )
}
const SignUpsPageHeader = async ({ appId }: SignUpsPageHeaderProps) => {

  const app = await getAppById(appId)

  const totalSignUps = await getTotalAppSignUps(appId)

  if (!app) return <h2>Couldn't load app</h2>

  const headersList = await headers();
  const baseUrl = headersList.get('x-base-url') || ''; // Get the base URL

  const link = baseUrl + '/waitlyst-form/' + app.id

  return (
    <header className='w-full flex items-center justify-between gap-[16px] p-[16px]'>
      <OpenSidebarButton>
        <h2>{totalSignUps} Sign Ups</h2>
      </OpenSidebarButton>

      <AppLinkActions link={link} />
    </header>
  )
}

export default SignUpsPageHeader