import React from 'react'
import Header from '../_components/header'

function MainLayout({ children } : { children: React.ReactNode}) {
  return (
    <>
    <Header />
    {children}
    </>
  )
}

export default MainLayout