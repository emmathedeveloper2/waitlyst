"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { SignUpInputs, signUpSchema } from '../_validation-schemas'
import Button from '../_components/buttons/button'
import { ArrowRightIcon, LoaderCircleIcon } from 'lucide-react'
import Link from 'next/link'
import { authClient } from '../_lib/auth/client'
import toast from 'react-hot-toast'
import SocialSignIn from '../_components/social-signin'
import { useSearchParams } from 'next/navigation'

const SignUpForm = () => {

  const {
    handleSubmit,
    register,
    formState,
  } = useForm<SignUpInputs>({
    resolver: zodResolver(signUpSchema)
  })

  const [loading, setLoading] = useState(false)

  const [emailSent, setEmailSent] = useState('')

  const searchParams = useSearchParams()

  const processForm: SubmitHandler<SignUpInputs> = async (inputs) => {
    await authClient.signUp.email({
      ...inputs,
      callbackURL: searchParams.get('redirectTo') ?? '/dashboard',
      fetchOptions: {
        onSuccess: () => {
          toast.success("Account created successfully")
          setEmailSent(inputs.email)
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

  if (!!emailSent) return (
    <div className='flex flex-col items-center gap-[32px] w-full md:w-[400px]'>
      <h2>Check Your Inbox</h2>
      <p>An email has been sent to <span className='text-primary'>{emailSent}</span></p>
    </div>
  )

  return (
    <form
      className='flex flex-col items-center gap-[32px] w-full md:w-[400px]'
      onSubmit={handleSubmit(processForm)}
    >

      <div className='grid gap-2 w-full'>
        {
          formState.errors.name &&
          <span className='text-destructive'>{formState.errors.name.message}</span>
        }

        <input
          placeholder='username'
          className='w-full'
          {...register('name')}
        />
      </div>

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
              Sign Up
              <ArrowRightIcon className='small' />
            </>
        }
      </Button>

      <SocialSignIn />

      <span className='font-semibold'>Already have an account? <Link
        href={`/signin${searchParams.has('redirectTo') ? `?redirectTo=${searchParams.get('redirectTo')}` : ''}`}
        className='text-primary underline link-btn'
      >Sign In</Link>
      </span>
    </form>
  )
}

export default SignUpForm