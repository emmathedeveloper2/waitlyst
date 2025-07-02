"use client";
import React from 'react'
import Button, { ButtonProps } from './button'
import { Share2Icon } from 'lucide-react'
import toast from 'react-hot-toast'

type ShareLinkButtonProps = {
    url: string
}

const ShareLinkButton = React.forwardRef<HTMLButtonElement, ShareLinkButtonProps & ButtonProps>(
    ({ url, ...props }, ref) => {

        const handleClick = () => {

            if (typeof window == "undefined" || !navigator.canShare) {
                toast.error("Couldn't share link")

                toast.promise(navigator.clipboard.writeText(url), {
                    loading: "Copying Link instead",
                    error: "Couln't copy link",
                    success: "Link copied instead"
                })
                return
            }

            toast.promise(navigator.share({ url }), {
                loading: "Sharing link",
                error: "Couln't share link",
                success: "Link shared"
            })
        }

        return (
            <Button ref={ref} onClick={handleClick} {...props}>
                Share Link
                <Share2Icon />
            </Button>
        )
    }
)

export default ShareLinkButton