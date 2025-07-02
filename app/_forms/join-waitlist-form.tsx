"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Button from '../_components/buttons/button'
import { LoaderCircleIcon } from 'lucide-react'
import toast from 'react-hot-toast'
import { JoinWaitListSchemaType, joinWaitListSchema } from '../_validation-schemas'
import { addSignUp } from '../actions/signups.actions'

type JoinWaitListFormProps = {
  appId: string,
  ownerId: string
}

const JoinWaitListForm = ({ appId , ownerId } : JoinWaitListFormProps) => {

  const {
    handleSubmit,
    register,
    formState,
  } = useForm<JoinWaitListSchemaType>({
    resolver: zodResolver(joinWaitListSchema)
  })

  const processForm: SubmitHandler<JoinWaitListSchemaType> = async ({ email }) => {

    try {
        const response = await addSignUp(email , appId , ownerId)

        if(response.error){
          toast.error(response.error)
        }else {
          toast.success("You've joined the waitlist 🎉🎉🎉")
        }

    } catch (error) {
      const err = error as any
      toast.error(err.message || err.statusText || "Something went wrong!")
    }
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
          placeholder='your email'
          className='w-full'
          {...register('email')}
        />
      </div>

      <Button
        disabled={formState.isSubmitting}
        className='w-full'
      >
        {
          formState.isSubmitting ?
            <LoaderCircleIcon className='animate-spin small' /> :
            <>
              Join Waitlist
            </>
        }
      </Button>
    </form>
  )
}

export default JoinWaitListForm