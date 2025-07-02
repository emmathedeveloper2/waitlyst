"use client";
import clsx from 'clsx'
import { KeyIcon, MailIcon, PaletteIcon, PlusSquareIcon, SettingsIcon } from 'lucide-react'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

type DashboardSidebarAppLinksProps = {
  appId: string
}

const DashboardSidebarAppLinks = ({ appId }: DashboardSidebarAppLinksProps) => {

  const links = [
    {
      to: `/dashboard/${appId}`,
      icon: MailIcon,
      title: "Sign Ups",
      extra: '0'
    },
    {
      to: `/dashboard/${appId}/api-keys`,
      icon: KeyIcon,
      title: "API Keys"
    },
    {
      to: `/dashboard/${appId}/integration`,
      icon: PlusSquareIcon,
      title: "Integration"
    },
    {
      to: `/dashboard/${appId}/settings`,
      icon: SettingsIcon,
      title: "Setings"
    },
    {
      to: `/dashboard/${appId}/customize`,
      icon: PaletteIcon,
      title: "Customization"
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

export default DashboardSidebarAppLinks