import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from './logo'

type HeaderLogoProps = {
    title?: string,
    className?: string
}

const HeaderLogo = ({ className , title } : HeaderLogoProps) => {
    return (
        <Link href={'/'} className={`flex items-center gap-2 link-btn ${className}`}>
            <Logo className="size-[24px]"/>
            <h3>{title ?? "waitlyst"}</h3>
        </Link>
    )
}

export default HeaderLogo