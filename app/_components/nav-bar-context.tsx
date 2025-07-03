"use client";
import clsx from 'clsx';
import { MenuIcon, XIcon } from 'lucide-react';
import React, { createContext, useContext, useState } from 'react'

const NavBarContext = createContext<any>({})

export const useNavBarContext = () => useContext<{ navOpen: boolean, setNavOpen: React.Dispatch<React.SetStateAction<boolean>> }>(NavBarContext)

const NavBarContextProvider = ({ children }: { children?: any }) => {

  const [navOpen, setNavOpen] = useState(false)

  return (
    <NavBarContext.Provider value={{ navOpen, setNavOpen }}>
      {children}
    </NavBarContext.Provider>
  )
}


export const NavBarWrapper = ({ children } : { children?: any }) => {

  const { navOpen } = useNavBarContext()

  return (
    <div className={clsx(
      'fixed md:static z-10 w-screen md:w-[300px] h-screen top-0 nav',
      navOpen ? 'left-0' : '-left-full'
    )}>
      {children}
    </div>
  )
}

export const CloseSidebarButton = () => {

  const { navOpen, setNavOpen } = useNavBarContext()

  return (
    <button className='md:hidden' onClick={() => setNavOpen(!navOpen)}>
      <XIcon />
    </button>
  )
}

export const OpenSidebarButton = ({ children } : { children?: any }) => {

  const { navOpen, setNavOpen } = useNavBarContext()

  return (
    <div className='flex gap-[8px]'>
      <button className='md:hidden' onClick={() => setNavOpen(!navOpen)}>
        <MenuIcon />
      </button>
      {children}
    </div>
  )
}

export default NavBarContextProvider