"use client"
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Button from './buttons/button'
import GitHubIcon from './icons/github-icon'
import GoogleIcon from './icons/google-icon'
import toast from 'react-hot-toast'
import { authClient } from '../_lib/auth/client'
import { Loader2Icon } from 'lucide-react'

const SocialSignIn = () => {

    const [loading, setLoading] = useState(false)

    const searchParams = useSearchParams()

    const signInWithGitHub = async () => {

        await authClient.signIn.social({
            provider: "github",
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

    if (loading) return (
        <div className='w-full grid place-items-center'>
            <Loader2Icon className='animate-spin' />
        </div>
    )

    return (
        <div className='w-full flex gap-4'>
            <Button type='button' onClick={signInWithGitHub} variant='outline' className="flex-1">
                <GitHubIcon height={'24'} width={'24'} />
            </Button>
        </div>
    )
}

export default SocialSignIn