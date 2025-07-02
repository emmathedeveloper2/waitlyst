import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from './logo'

type HeaderLogoProps = {
    className?: string
}

const HeaderLogo = ({ className } : HeaderLogoProps) => {
    return (
        <Link href={'/'} className={`flex items-center gap-2 link-btn ${className}`}>
            <Logo className="size-[24px]"/>
            <h3>waitlyst</h3>
        </Link>
    )
}

export default HeaderLogo