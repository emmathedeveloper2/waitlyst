import React from 'react'
import { getCurrentUser } from '../../actions/user.actions'
import { redirect } from 'next/navigation'
import DashboardSidebar from '@/app/_components/dashboard/dashboard-sidebar'
import DashboardSidebarLinks from '@/app/_components/dashboard/dashboard-sidebar-links'
import { NavBarWrapper } from '@/app/_components/nav-bar-context'
import NavBarContextProvider from '@/app/_components/nav-bar-context'

async function DashboardLayout({ children }: { children: React.ReactNode }) {

  const user = await getCurrentUser()

  if (!user) return redirect('/signup')

  return (
    <NavBarContextProvider>
      <div className='flex flex-1 w-full'>
        <NavBarWrapper>
          <DashboardSidebar user={user as any}>
            <DashboardSidebarLinks />
          </DashboardSidebar>
        </NavBarWrapper>
        <div className='flex flex-1 h-screen md:w-screen'>
          {children}
        </div>
      </div>
    </NavBarContextProvider>
  )
}

export default DashboardLayout