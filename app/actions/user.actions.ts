"use server"
import { headers } from "next/headers"
import { auth } from "../_lib/auth/server"
import { redirect } from "next/navigation"


export async function getCurrentUser(bounce = true) {

  try {
    
    const session = await auth.api.getSession({ headers: await headers() })
  
    if (!session && bounce) redirect('/signin')
  
    return session?.user ?? undefined
  } catch (error) {
    console.log(error);
    return undefined
  }
}