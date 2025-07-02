import React from 'react'
import { CrownIcon } from 'lucide-react'
import { getSubscription } from '../../actions/subscriptions.actions'
import LinkButton from './link-button'

type SubscriptionButtonProps = {
    userEmail: string
}

export const SubscriptionButtonLoading = () => (
    <div className='w-full rounded-full bg-primary/50 animate-pulse p-4'></div>
)

const SubscriptionButton = async ({ userEmail } : SubscriptionButtonProps) => {

  const subscription = await getSubscription(userEmail)

  let text = 'Upgrade'

  let link = '/pricing'

  if(subscription?.plan == 'free') {
    link = '/pricing'
  }
  
  if(subscription?.plan == 'starter'){
    link = `/checkout?plan=pro`
    text = 'Go Pro'
  }

  if(subscription?.plan == 'pro') return null

  return (
    <LinkButton href={link} className='bg-primary text-primary-foreground'>
        {text}
        <CrownIcon className='small'/>
    </LinkButton>
  )
}

export default SubscriptionButton