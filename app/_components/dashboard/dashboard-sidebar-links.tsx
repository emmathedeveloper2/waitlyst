"use client";
import clsx from 'clsx'
import { BoxesIcon, SettingsIcon } from 'lucide-react';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const DashboardSidebarLinks = () => {

  const links = [
    {
      title: 'Apps',
      to: '/dashboard',
      icon: BoxesIcon
    },
    {
      title: 'Settings',
      to: '/dashboard/settings',
      icon: SettingsIcon
    },
  ]

  const pathname = usePathname()

  return (
    <div className='w-full flex flex-col gap-[16px]'>
      {links.map((link, idx) => (
        <Link key={idx} href={link.to} className={clsx(
          'flex gap-[8px] items-center p-[8px] link-btn rounded',
          { 'bg-primary-foreground text-primary': link.to == pathname },
          { 'hover:bg-secondary/20': link.to != pathname }
        )}>
          <link.icon className='small' />
          <p className='text-xs'>{link.title}</p>
        </Link>
      ))}
    </div>
  )
}

export default DashboardSidebarLinks