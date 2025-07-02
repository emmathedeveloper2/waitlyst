import DashboardSidebarAppLinks from '@/app/_components/dashboard/dashboard-sidebar-app-links'
import DashboardSidebar from '@/app/_components/dashboard/dashboard-sidebar'
import { getCurrentUser } from '@/app/actions/user.actions'
import React from 'react'


async function AppLayout({ children, params }: {
    children: React.ReactNode,
    params: Promise<{ appId: string }>
}) {

    const { appId } = await params

    const user = await getCurrentUser()

    return (
        <div className='flex flex-1 h-screen'>
            <DashboardSidebar user={user as any} appId={appId}>
                <DashboardSidebarAppLinks appId={appId}/>
            </DashboardSidebar>
            {children}
        </div>
    )
}

export default AppLayout