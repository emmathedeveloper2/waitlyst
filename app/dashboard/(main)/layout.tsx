import React from 'react'
import { getCurrentUser } from '../../actions/user.actions'
import { redirect } from 'next/navigation'
import DashboardSidebar from '@/app/_components/dashboard/dashboard-sidebar'
import DashboardSidebarLinks from '@/app/_components/dashboard/dashboard-sidebar-links'

async function DashboardLayout({ children }: { children: React.ReactNode }) {

  const user = await getCurrentUser()

  if (!user) return redirect('/signup')

  return (
    <div className='h-screen w-screen flex'>

      <DashboardSidebar user={user as any}>
        <DashboardSidebarLinks />
      </DashboardSidebar>

      {children}
    </div>
  )
}

export default DashboardLayout