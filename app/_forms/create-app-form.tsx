"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Button from '../_components/button'
import { ArrowRightIcon, LoaderCircleIcon } from 'lucide-react'
import { createApp } from '../actions/apps.actions'
import { InsertAppSchema, type InsertAppSchemaType } from '../_lib/db/schemas/app'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const CreateAppForm = () => {

  const {
    handleSubmit,
    register,
    formState,
  } = useForm<InsertAppSchemaType>({
    resolver: zodResolver(InsertAppSchema)
  })

  const router = useRouter()

  const processForm: SubmitHandler<InsertAppSchemaType> = async (inputs) => {

    try {
      const app = await createApp(inputs)
      router.push(`/dashboard/${app.id}`)
      toast.success("App created successfully")
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
          formState.errors.name &&
          <span className='text-destructive'>{formState.errors.name.message}</span>
        }

        <input
          placeholder='app name'
          className='w-full'
          {...register('name')}
        />
      </div>

      <div className='grid gap-2 w-full'>
        {
          formState.errors.description &&
          <span className='text-destructive'>{formState.errors.description.message}</span>
        }

        <textarea
          rows={5}
          placeholder='description'
          className='w-full p-4'
          {...register('description')}
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
              Create App
              <ArrowRightIcon className='small' />
            </>
        }
      </Button>
    </form>
  )
}

export default CreateAppForm