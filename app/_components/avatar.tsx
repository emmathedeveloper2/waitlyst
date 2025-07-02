import React from 'react'
import { getInitials } from '../_lib/helpers'
import Image from 'next/image'

const Avatar = ({ user } : any) => {
    return (
        <div className='size-[40px] overflow-hidden rounded-full'>
            {
                !!user.image ?
                    <Image
                        src={user.image}
                        alt='profile picture'
                        height={"40"}
                        width={"40"}
                        className='size-full object-cover'
                    />
                    :
                    <div className='bg-primary text-primary-foreground/70 font-black grid place-items-center size-full'>
                        {getInitials(user.name)}
                    </div>
            }
        </div>
    )
}

export default Avatar