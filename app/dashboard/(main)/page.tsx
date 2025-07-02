import React, { Suspense } from 'react'
import { getCurrentUser } from '../../actions/user.actions'
import AppList, { AppListLoadingSkeleton } from '../../_components/app-page/app-list'
import { redirect } from 'next/navigation'

async function DashboardPage() {

  const user = await getCurrentUser()

  if (!user) return redirect('/signin')

  return (
    <main className='flex-1 h-full'>
      <Suspense fallback={<AppListLoadingSkeleton />}>
        <AppList userId={user.id} />
      </Suspense>
    </main>
  )
}

export default DashboardPage