"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { SignInInputs, signInSchema } from '../_validation-schemas'
import Button from '../_components/buttons/button'
import { ArrowRightIcon, LoaderCircleIcon } from 'lucide-react'
import Link from 'next/link'
import { authClient } from '../_lib/auth/client'
import toast from 'react-hot-toast'
import SocialSignIn from '../_components/social-signin'
import { useSearchParams } from 'next/navigation'

const SignInForm = () => {

  const {
    handleSubmit,
    register,
    formState,
  } = useForm<SignInInputs>({
    resolver: zodResolver(signInSchema)
  })

  const [loading, setLoading] = useState(false)

  const searchParams = useSearchParams()

  const processForm: SubmitHandler<SignInInputs> = async (inputs) => {

    await authClient.signIn.email({
      ...inputs,
      callbackURL: searchParams.get('redirectTo') || '/dashboard',
      fetchOptions: {
        onSuccess: () => {
          toast.success("Signed In successfully")
        },
        onError: ({ error }) => {
          toast.error(error.message || error.statusText || "Something went wrong!")
        },
        onRequest: () => {
          setLoading(true)
        },
        onResponse: () => {
          setLoading(false)
        },
      }
    })
  }

  return (
    <form
      className='flex flex-col items-center gap-[32px] w-full md:w-[400px]'
      onSubmit={handleSubmit(processForm)}
    >

      <div className='grid gap-2 w-full'>
        {
          formState.errors.email &&
          <span className='text-destructive'>{formState.errors.email.message}</span>
        }

        <input
          type='email'
          placeholder='email'
          className='w-full'
          {...register('email')}
        />
      </div>

      <div className='grid gap-2 w-full'>
        {
          formState.errors.password &&
          <span className='text-destructive'>{formState.errors.password.message}</span>
        }

        <input
          type='password'
          placeholder='password'
          className='w-full'
          {...register('password')}
        />
      </div>

      <Button
        disabled={formState.isSubmitting || loading}
        className='w-full'
      >
        {
          (formState.isSubmitting || loading) ?
            <LoaderCircleIcon className='animate-spin small' /> :
            <>
              Sign In
              <ArrowRightIcon className='small' />
            </>
        }
      </Button>

      <SocialSignIn />

      <span className='font-semibold'>Don't have an account? <Link
        href={`/signup${searchParams.has('redirectTo') ? `?redirectTo=${searchParams.get('redirectTo')}` : ''}`}
        className='text-primary underline link-btn'>Sign Up</Link></span>
    </form>
  )
}

export default SignInForm