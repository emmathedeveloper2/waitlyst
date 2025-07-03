import DashboardSidebarAppLinks from '@/app/_components/dashboard/dashboard-sidebar-app-links'
import DashboardSidebar from '@/app/_components/dashboard/dashboard-sidebar'
import { getCurrentUser } from '@/app/actions/user.actions'
import React from 'react'
import NavBarContextProvider, { NavBarWrapper } from '@/app/_components/nav-bar-context'


async function AppLayout({ children, params }: {
    children: React.ReactNode,
    params: Promise<{ appId: string }>
}) {

    const { appId } = await params

    const user = await getCurrentUser()

    return (
        <NavBarContextProvider>
            <div className='flex flex-1 w-full'>
                <NavBarWrapper>
                    <DashboardSidebar user={user as any} appId={appId}>
                        <DashboardSidebarAppLinks appId={appId} />
                    </DashboardSidebar>
                </NavBarWrapper>
                <div className='flex flex-1 h-screen md:w-screen'>
                    {children}
                </div>
            </div>
        </NavBarContextProvider>
    )
}

export default AppLayout