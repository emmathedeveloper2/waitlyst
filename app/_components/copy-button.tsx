"use client";
import clsx from 'clsx'
import React from 'react'
import toast from 'react-hot-toast'

type CopyButtonProps = {
    text: string,
    successText?: string,
    errorText?: string,
    className?: string,
    children?: React.ReactNode
}

const CopyButton = ({ text, successText = "Copied", errorText = "Couldn't Copy", className, children }: CopyButtonProps) => {

    const handleCopy = () => {

        toast.promise(navigator.clipboard.writeText(text), {
            loading: "Copying...",
            error: errorText,
            success: successText
        })

    }

    return (
        <button onClick={handleCopy} className={clsx('flex items-center gap-[8px] cursor-pointer', className)}>
            {children}
        </button>
    )
}

export default CopyButton