import SecretKeyDisplay from '@/app/_components/app-page/secret-key-display'
import { getAppById } from '@/app/actions/apps.actions'
import { CopyIcon, TriangleAlertIcon } from 'lucide-react'
import React from 'react'

const WarningBanner = () => {

  return (
    <div className='w-full flex items-center justify-center gap-2 py-[16px] bg-warning text-warning-foreground'>
      <TriangleAlertIcon className='hidden md:block'/>
      <p>KEEP THESE KEYS SAFE</p>
      <TriangleAlertIcon className='hidden md:block'/>
    </div>
  )
}

async function AppAPIKeysPage({ params } : { params: Promise<{ appId: string }> }) {

  const { appId } = await params

  const app = await getAppById(appId)

  if(!app) return

  return (
    <main className='flex flex-col flex-1 w-full'>
      <WarningBanner />

      <section className='w-full p-[8px] md:p-[16px]'>
        <SecretKeyDisplay title='App ID' type='project id' projectId={app.projectId}/>
        <SecretKeyDisplay title='API Key' type='api key'/>
      </section>

    </main>
  )
}

export default AppAPIKeysPage