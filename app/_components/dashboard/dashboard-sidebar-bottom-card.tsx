import React, { Suspense } from 'react'
import { user } from '@/app/_lib/db/schemas'
import Avatar from '../avatar'
import LogOutButton from '../buttons/logout-button'
import SubscriptionButton, { SubscriptionButtonLoading } from '../buttons/subscription-button'

type DashboardSidebarBottomCardProps = {
    user: typeof user.$inferSelect
}

const DashboardSidebarBottomCard = ({ user } : DashboardSidebarBottomCardProps) => {
    return (
        <div className='flex flex-col gap-[16px] bg-primary-foreground text-secondary rounded-[16px] p-[16px]'>

            <div className='flex items-center gap-[8px]'>
                <Avatar user={user} />
                <div className='flex flex-col'>
                    <p>{user.name}</p>
                    <small>{user.email}</small>
                </div>
            </div>

            <Suspense fallback={<SubscriptionButtonLoading />}>
                <SubscriptionButton userEmail={user.email} />
            </Suspense>

            <LogOutButton />
        </div>
    )
}

export default DashboardSidebarBottomCard