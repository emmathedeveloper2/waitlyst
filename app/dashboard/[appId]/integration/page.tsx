import IntegrationCodePreview from '@/app/_components/integration-code-preview'
import Link from 'next/link'
import React from 'react'

async function IntegrationPage({ params } : { params: Promise<{ appId: string }> }) {

  const { appId } = await params

  return (
    <main className='flex-1 w-full p-[16px]'>
      <h2>API Integration</h2>
      <p>Get your <Link className='text-primary underline' href={`/dashboard/${appId}/api-keys`}>App ID</Link> and <Link className='text-primary underline' href={`/dashboard/${appId}/api-keys`}>API Key</Link> from the <Link className='text-primary underline' href={`/dashboard/${appId}/api-keys`}>API Keys page</Link></p>

      <IntegrationCodePreview />
    </main>
  )
}

export default IntegrationPage