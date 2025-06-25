"use client";
import { KeyIcon, MailIcon, PlusSquareIcon, SettingsIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import clsx from 'clsx'

type AppHeaderProps = {
    appId: string,
    totalSignUps?: number
}

const AppHeaderNav = ({ appId , totalSignUps }: AppHeaderProps) => {

    const pathname = usePathname()

    const links = [
        {
            url: `/dashboard/${appId}`,
            icon: MailIcon,
            text: "Sign Ups",
            extra: totalSignUps
        },
        {
            url: `/dashboard/${appId}/api-keys`,
            icon: KeyIcon,
            text: "API Keys"
        },
        {
            url: `/dashboard/${appId}/integration`,
            icon: PlusSquareIcon,
            text: "Integration"
        },
        {
            url: `/dashboard/${appId}/settings`,
            icon: SettingsIcon,
            text: "Setings"
        },
    ]

    return (
        <nav className='w-full flex items-center gap-[16px]'>
            {links.map((link, idx) => (
                <Link key={idx} href={link.url} className={clsx(
                    "px-[24px] py-[8px] rounded-full flex gap-[8px]",
                    link.url == pathname ? "bg-primary text-primary-foreground" : "border-2 border-primary text-primary hover:border-secondary hover:text-secondary"
                )}>
                    <link.icon />
                    <span className='hidden md:block'>{link.text} {link.extra ? '- ' + link.extra : null}</span>
                </Link>
            ))}
        </nav>
    )
}

export default AppHeaderNav