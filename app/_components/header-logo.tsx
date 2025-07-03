import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from './logo'

type HeaderLogoProps = {
    title?: string,
    className?: string,
    backLink?: string
}

const HeaderLogo = ({ className , title , backLink } : HeaderLogoProps) => {
    return (
        <Link href={backLink ?? '/'} className={`flex items-center gap-2 link-btn ${className}`}>
            <Logo className="size-[24px]"/>
            <h3>{title ?? "waitlyst"}</h3>
        </Link>
    )
}

export default HeaderLogo