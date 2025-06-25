"use client";

import { CopyIcon, Share2Icon } from "lucide-react"
import toast from "react-hot-toast";

type AppLinkActionsProps = {
    link: string
}

const AppLinkActions = ({ link }: AppLinkActionsProps) => {

    const handleShare = () => {

        if (typeof window == "undefined" || !navigator.canShare) {
            toast.error("Couldn't share link")

            toast.promise(navigator.clipboard.writeText(link), {
                loading: "Copying Link instead",
                error: "Couln't copy link",
                success: "Link copied instead"
            })
            return
        }

        toast.promise(navigator.share({ url: link }), {
            loading: "Sharing link",
            error: "Couln't share link",
            success: "Link shared"
        })
    }

    const handleCopy = () => {
        
        toast.promise(navigator.clipboard.writeText(link), {
            loading: "Copying Link",
            error: "Couln't copy link",
            success: "Link copied"
        })

    }

    return <div className='flex gap-[8px]'>
        <button onClick={handleCopy} className='text-secondary hover:text-primary cursor-pointer small'>
            <CopyIcon />
        </button>
        <button onClick={handleShare} className='text-secondary hover:text-primary cursor-pointer small'>
            <Share2Icon />
        </button>
    </div>
}

export default AppLinkActions