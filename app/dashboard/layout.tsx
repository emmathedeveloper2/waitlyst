import React from 'react'
import Header from '../_components/header'
import { getCurrentUser } from '../actions/user.actions'

async function DashboardLayout({ children }: { children: React.ReactNode }) {

  const user = await getCurrentUser()

  return (
    <div className='h-screen w-screen flex flex-col'>
      <Header user={user as any}/>
      {children}
    </div>
  )
}

export default DashboardLayout