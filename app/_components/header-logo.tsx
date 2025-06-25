import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeaderLogo = () => {
    return (
        <Link href={'/'} className='flex items-center gap-2 link-btn'>
            <Image
                src={'/logo.png'}
                alt='logo'
                height={36}
                width={36}
            />
            <h3>waitlyst</h3>
        </Link>
    )
}

export default HeaderLogo