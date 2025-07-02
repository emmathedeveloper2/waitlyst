import { getAppSignups } from "@/app/actions/apps.actions"
import Image from "next/image"
import ShareLinkButton from "../buttons/share-link-button"
import { headers } from "next/headers"
import { CopyIcon } from "lucide-react"
import CopyButton from "../buttons/copy-button"


export const SignUpsLoadingSkeleton = () => {

  return (
    <div className="size-full inline-flex gap-[16px] p-[16px] animate-pulse">
      <span className='w-[120px] h-[30px] flex items-center gap-[8px] bg-primary rounded-full opacity-50 inline-block'></span>
      <span className='w-[180px] h-[30px] flex items-center gap-[8px] bg-primary rounded-full opacity-50 inline-block'></span>
      <span className='w-[120px] h-[30px] flex items-center gap-[8px] bg-primary rounded-full opacity-50 inline-block'></span>
    </div>
  )
}

type SignUpsListProps = {
  appId: string
}

const NoSignUpsPlaceholder = async ({ appId }: { appId: string }) => {

  const headersList = await headers();
  const baseUrl = headersList.get('x-base-url') || '';
  
  const link = baseUrl + '/waitlyst-form/' + appId

  return <div className='relative z-0 size-full flex flex-col gap-[16px] items-center justify-center'>
    <div className='absolute size-full top-0 left-0 grid place-items-center -z-[1]'>
      <Image
        src={'/assets/doodle-no-apps.svg'}
        alt='doodle'
        width={596}
        height={533}
      />
    </div>

    <h1 className='font-instrument text-center'>Waiting on your first signup.</h1>
    <p className='font-instrument text-small md:text-[32px] text-center'>Share your WaitLyst link and watch the list grow.</p>

    <div className="w-full mt-[32px] flex items-center justify-center gap-[8px]">
      <ShareLinkButton url={link} />
      <CopyButton className="btn bg-primary text-primary-foreground" text={link} successText="Link Copied" errorText="Couldn't copy link">
        Copy Link <CopyIcon />
      </CopyButton>
    </div>
  </div>
}

const SignUpsList = async ({ appId }: SignUpsListProps) => {

  const signups = await getAppSignups(appId)

  if (!signups.length) return <NoSignUpsPlaceholder appId={appId} />

  return (
    <div className="size-full p-[16px] gap-[16px]">
      {signups.map(signup => (
        <div key={signup.id} className="px-[24px] py-[8px] rounded-full border-2 border-primary text-primary w-max inline-block mr-[8px] mb-[8px]">
          <span>{signup.email}</span>
        </div>
      ))}
    </div>
  )
}

export default SignUpsList