import { getAppById, getTotalAppSignUps } from '@/app/actions/apps.actions'
import { ArrowLeftIcon, MailIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import AppHeaderNav from './app-header-nav'
import AppHeaderTitle from './app-header-title'

type AppHeaderProps = {
  id: string
}

export const AppHeaderLoader = async () => {

  return (
    <header className='w-full flex flex-col items-center gap-[16px] p-[16px] animate-pulse'>
      <div className='w-full'>
        <div className='w-[120px] h-[30px] flex items-center gap-[8px] bg-primary rounded opacity-50'></div>
      </div>
      <nav className='w-full flex items-center gap-[16px]'>
        <div className='w-[120px] h-[30px] flex items-center gap-[8px] bg-primary rounded-full opacity-50'></div>
        <div className='w-[120px] h-[30px] flex items-center gap-[8px] bg-primary rounded-full opacity-50'></div>
        <div className='w-[120px] h-[30px] flex items-center gap-[8px] bg-primary rounded-full opacity-50'></div>
        <div className='w-[120px] h-[30px] flex items-center gap-[8px] bg-primary rounded-full opacity-50'></div>
      </nav>
    </header>
  )
}
const AppHeader = async ({ id }: AppHeaderProps) => {

  const app = await getAppById(id)

  const totalSignUps = await getTotalAppSignUps(id)

  if (!app) return <h2>Couldn't load app</h2>

  return (
    <header className='w-full flex flex-col items-center gap-[16px] p-[16px] border-b-2 border-b-primary'>
      <AppHeaderTitle app={app}/>
      <AppHeaderNav appId={app.id} totalSignUps={totalSignUps}/>
    </header>
  )
}

export default AppHeader