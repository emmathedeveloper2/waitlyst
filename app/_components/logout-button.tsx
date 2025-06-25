"use client";
import { ArrowRightIcon, Loader2Icon } from 'lucide-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { authClient } from '../_lib/auth/client';
import Button from './button';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';

const LogOutButton = ({ className } : { className?: string }) => {

    const router = useRouter()

    const [ loggingOut , setLogginOut ] = useState(false)

    const handleLogOut = async () => {
        try {

            const { error } = await authClient.signOut({
                fetchOptions: {
                    onSuccess: () => {
                        toast.success("Signed Out successfully")
                    },
                    onError: ({ error }) => {
                        toast.success(error.message || error.statusText || "Something went wrong!")
                    },
                    onResponse: () => {
                        setLogginOut(false)
                    },
                    onRequest: () => {
                        setLogginOut(true)
                    },
                }
            })

            if (error) throw error

            router.push('/')
        } catch (error) {
            const err = error as any
            toast.error(err.statustText || err.message || "Something went wrong!")
        }
    }

    return (
        <Button disabled={loggingOut} onClick={handleLogOut} className={clsx(className)}>
            {
                loggingOut ?
                <Loader2Icon className='animate-spin' />
                :
                <>
                    LogOut
                    <ArrowRightIcon className='small' />
                </>
            }
        </Button>
    )
}

export default LogOutButton