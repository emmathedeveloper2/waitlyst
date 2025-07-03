import Button from '@/app/_components/buttons/button'
import { OpenSidebarButton } from '@/app/_components/nav-bar-context'
import UsageCard from '@/app/_components/usage-card'
import { formatToCurrency } from '@/app/_lib/helpers'
import { getPlans, planFeatures } from '@/app/_lib/plans'
import { getTotalAppsByCurrentUser } from '@/app/actions/apps.actions'
import { getTotalSignUpsForUser } from '@/app/actions/signups.actions'
import { getSubscription } from '@/app/actions/subscriptions.actions'
import { BoxesIcon, MailIcon } from 'lucide-react'
import React from 'react'

async function UsageAndSubscriptionPage() {

  const subscription = await getSubscription()

  const totalSignUps = await getTotalSignUpsForUser()

  const totalApps = await getTotalAppsByCurrentUser()

  const plan = getPlans().find(p => p.type == (subscription?.plan || "free"))!

  const feature = planFeatures[plan.type] 


  return (
    <main className='flex-1 h-full overflow-y-auto'>
      <div className='w-full flex flex-col md:flex-row justify-between p-[16px] mb-[16px] border-b border-b-secondary'>
        <OpenSidebarButton>
          <div className='flex flex-col gap-[8px]'>
            <h2>Usage & Subscription</h2>
            <p>See usage and manage subscription</p>
          </div>
        </OpenSidebarButton>

        <div className='mt-[8px] md:mt-0'>
          {
            subscription && 
            <Button variant='secondary' className='h-max'>
              Cancel Subscription
            </Button>
          }
        </div>
      </div>

      <section className='w-full p-[16px]'>
        <div className='w-full flex items-center justify-between mb-[16px]'>
          <div className='flex flex-col gap-[8px]'>
            <h2>Current Plan</h2>
          </div>

          <Button variant='secondary' className='h-max'>
            Change Plan
          </Button>
        </div>

        <div className='w-full grid md:grid-cols-2 gap-[16px]'>
          <div className='border border-primary/20 rounded-md p-[16px]'>
            <div className='w-full flex items-center gap-[8px] mb-[8px]'>
              <small className='px-[8px] rounded-full bg-secondary text-secondary-foreground'>{plan.title}</small>
              <small className='bg-emerald-500/20 text-emerald-700 rounded-full px-[8px] first-letter:uppercase'>{subscription?.status || "active"}</small>
            </div>
            <h3>{formatToCurrency(plan.price)}/<small>month</small></h3>
          </div>

          {
            subscription && subscription.plan != "free" &&
            <div className='border border-primary/20 rounded-md p-[16px]'>
              <small>Renew At</small>
              <h3>{Intl.DateTimeFormat('en-US' , { dateStyle: 'medium' }).format(subscription.renewAt!)}</h3>
            </div>
          }
        </div>
      </section>

      <section className='w-full p-[16px]'>
        <div className='w-full flex items-center justify-between mb-[16px]'>
          <div className='flex flex-col gap-[8px]'>
            <h2>Usage</h2>
            <p>Your usage is renewed every month</p>
          </div>
        </div>

        <div className='w-full grid md:grid-cols-2 gap-[16px]'>

          <UsageCard
              icon={<BoxesIcon />}
              title='Apps'
              used={totalApps}
              limit={plan.type == 'pro' ? undefined : feature.apps}
          />

          <UsageCard
              icon={<MailIcon />}
              title='Signups'
              used={totalSignUps}
              limit={plan.type == 'pro' ? undefined : feature.signups}
          />
          
        </div>
      </section>
    </main>
  )
}

export default UsageAndSubscriptionPage