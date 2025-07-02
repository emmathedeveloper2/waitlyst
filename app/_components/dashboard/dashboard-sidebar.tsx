import { PlusIcon } from 'lucide-react'
import React from 'react'
import { user } from '../../_lib/db/schemas'
import DashboardSidebarBottomCard from './dashboard-sidebar-bottom-card'
import HeaderLogo from '../header-logo'
import LinkButton from '../buttons/link-button'
import { getAppById } from '@/app/actions/apps.actions'

type DashboardSidebarProps = {
  user?: typeof user.$inferSelect,
  children?: any,
  appId?: string,
}

const DashboardSidebar = async ({ user, children , appId }: DashboardSidebarProps) => {

  let app;

  if(appId) app = await getAppById(appId)

  return (
    <section className='w-full md:w-[300px] bg-primary text-primary-foreground p-[16px] flex flex-col justify-between gap-[16px] h-full'>

      <div className='w-full flex flex-col gap-[32px]'>
        <HeaderLogo className='text-inherit' title={app?.name}/>

        {
          !appId &&
          <LinkButton variant='outline' href='/create' className='w-full border-primary-foreground text-primary-foreground'>
            <PlusIcon />
            <p>New App</p>
          </LinkButton>
        }
      </div>

      {children}

      <DashboardSidebarBottomCard user={user as any} />
    </section>
  )
}

export default DashboardSidebar