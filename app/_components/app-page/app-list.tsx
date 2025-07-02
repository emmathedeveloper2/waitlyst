import { AppListItem } from '@/app/_components/app-page/app-list-item'
import LinkButton from '@/app/_components/buttons/link-button'
import { getAppsByUser } from '@/app/actions/apps.actions'
import { Loader2Icon, PlusIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export const AppListLoadingSkeleton = () => (
  <div className='size-full grid place-items-center'>
    <Loader2Icon className='animate-spin' />
  </div>
)

type AppListProps = {
  userId: string
}

const NoAppsPlaceholder = () => (
    <div className='relative z-0 size-full flex flex-col gap-[16px] items-center justify-center'>
      <div className='absolute size-full top-0 left-0 grid place-items-center -z-[1]'>
        <Image
          src={'/assets/doodle-no-apps.svg'}
          alt='doodle'
          width={596}
          height={533}
        />
      </div>

      <h1 className='font-instrument text-center'>It’s pretty quiet in here.</h1>
      <p className='font-instrument text-small md:text-[32px] text-center'>Add your first app and let the hype begin.</p>

      <LinkButton href='/create' className='mt-[32px]'>
        Create App
        <PlusIcon />
      </LinkButton>
    </div>
  )

const AppList = async ({ userId }: AppListProps) => {

  const apps = await getAppsByUser(userId)

  if (!apps.length) return <NoAppsPlaceholder />

  return (
    <div className='size-full overflow-y-auto'>
      {apps.map(app => (
        <AppListItem key={app.id} app={app} />
      ))}
    </div>
  )
}

export default AppList