import { apps } from '@/app/_lib/db/schemas/app'
import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import AppLinkActions from './app-link-actions'
import { headers } from 'next/headers'

type AppHeaderTitleProps = {
    app: typeof apps.$inferSelect
}

const AppHeaderTitle = async ({ app }: AppHeaderTitleProps) => {

    const headersList = await headers();
    const baseUrl = headersList.get('x-base-url') || ''; // Get the base URL

    return (
        <div className='w-full flex gap-[16px]'>
            <Link href={'/dashboard'} className='w-max flex items-center gap-[8px]'>
                <ArrowLeftIcon />
                <h3>{app.name}</h3>
            </Link>

            <AppLinkActions link={baseUrl + '/waitlyst-form/' + app.id} />
        </div>
    )
}

export default AppHeaderTitle