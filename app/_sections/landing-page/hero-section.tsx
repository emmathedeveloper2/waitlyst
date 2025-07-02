import LinkButton from '@/app/_components/buttons/link-button'
import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <section className='min-h-screen relative z-0 flex flex-col items-center justify-center'>
        <div className='absolute top-0 left-0 size-full flex items-center justify-center -z-[1]'>
          <Image
            src={'/assets/doodle-hero.svg'}
            alt='doodle'
            width={1218}
            height={640}
            className='size-full object-cover'
          />
        </div>

        <div className='flex flex-col'>
          <h1 className='font-instrument text-center'>Build Buzz Before You Launch.</h1>
          <h2 className='font-instrument text-center'>The easiest way to create and manage waitlists for your app.</h2>
        </div>

        <LinkButton href='/dashboard' className='mt-[64px] large highlighted'>
          Add waitlyst to your app today
          <ArrowRightIcon />
        </LinkButton>
    </section>
  )
}

export default HeroSection