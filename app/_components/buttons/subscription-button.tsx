import React from 'react'
import { CrownIcon } from 'lucide-react'
import { getSubscription } from '../../actions/subscriptions.actions'
import LinkButton from './link-button'
import clsx from 'clsx'

export const SubscriptionButtonLoading = () => (
    <div className='w-full rounded-full bg-primary/50 animate-pulse p-4'></div>
)

type SubscriptionButtonProps = {
  className?: string
}

const SubscriptionButton = async ({ className } : SubscriptionButtonProps) => {

  const subscription = await getSubscription()

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
    <LinkButton href={link} className={clsx('bg-primary text-primary-foreground' , className)}>
        {text}
        <CrownIcon className='small'/>
    </LinkButton>
  )
}

export default SubscriptionButton