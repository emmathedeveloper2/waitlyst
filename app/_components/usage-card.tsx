import React from 'react'
import { formatNumber } from '../_lib/helpers'

type UsageCardProps = {
    icon: any,
    title: string,
    used: any,
    limit?: any
}

const UsageCard = ({ icon , limit , title , used } : UsageCardProps) => {
    return (
        <div className='border border-primary/20 rounded-md p-[16px]'>
            <div className='rounded-full border border-primary/20 mb-[32px] w-max p-[8px]'>
                {icon}
            </div>

            <small>{title}</small>
            <h3>{formatNumber(used)} {limit && `of ${formatNumber(limit)}`}</h3>
        </div>
    )
}

export default UsageCard