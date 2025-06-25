"use client";
import { setAPIKey } from "@/app/actions/credentials.actions";
import { CopyIcon, Loader2Icon, RefreshCcw } from "lucide-react"
import { useState } from "react";
import toast from "react-hot-toast"

type SecretKeyDisplayProps = {
    type?: "api key" | "project id",
    title: string,
    projectId?: string,
}

const SecretKeyDisplay = ({ title, type = "project id", projectId }: SecretKeyDisplayProps) => {

    type GenerationState = 'idle' | 'generating' | 'success' | 'error'

    const [generationState, setGenerationState] = useState<GenerationState>('idle')

    const [generatedKey, setGeneratedKey] = useState<string | null>(null)

    const handleGenerateAPIKey = async () => {

        if (generationState == "success" && generatedKey) {
            toast.promise(navigator.clipboard.writeText(generatedKey), {
                loading: "Copying API Key",
                error: "Couldn't copying API key",
                success: "API Key copied"
            })

            return
        }

        try {
            setGenerationState('generating')

            const { error, data: key } = await setAPIKey()

            if (error) {
                setGenerationState('error')
                toast.error(error)
            } else {

                setGeneratedKey(key)

                setGenerationState('success')

                toast.success("API key generated successfully")
            }

        } catch (error: any) {
            setGenerationState('error')
            toast.error(error.message || error.statusText || "Something went wrong!")
        }
    }

    const handleCopyProjectID = () => {
        if (!projectId) return

        toast.promise(navigator.clipboard.writeText(projectId), {
            loading: "Copying PROJECT ID",
            error: "Couldn't copy PROJECT ID",
            success: "PROJECT ID copied"
        })
    }

    return (
        <div className='w-full mt-[16px] mx-auto p-[8px] border-2 border-foreground rounded-full flex items-center justify-between gap-[8px]'>
            <p className='bg-primary text-primary-foreground rounded-full px-[24px] py-[8px]'>{title}</p>
            <span className='font-bold text-ellipsis'>{generatedKey ?? "*******************"}</span>

            <button onClick={type == "api key" ? handleGenerateAPIKey : handleCopyProjectID} className='bg-primary text-primary-foreground rounded-full px-[24px] py-[8px] cursor-pointer'>
                {type == "project id" && <CopyIcon className="small" />}
                {
                    type == "api key" &&
                    <>
                        {generationState == "idle" && <RefreshCcw className="small" />}
                        {generationState == "success" && <CopyIcon className="small" />}
                        {generationState == "generating" && <RefreshCcw className="small animate-spin" />}
                    </>
                }
            </button>
        </div>
    )
}

export default SecretKeyDisplay