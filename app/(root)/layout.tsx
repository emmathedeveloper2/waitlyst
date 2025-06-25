import React from 'react'
import Header from '../_components/header'
import { getCurrentUser } from '../actions/user.actions'

async function MainLayout({ children } : { children: React.ReactNode}) {

  const user = await getCurrentUser(false)

  return (
    <div className='min-h-screen flex flex-col'>
    <Header user={user as any}/>
    {children}
    </div>
  )
}

export default MainLayout