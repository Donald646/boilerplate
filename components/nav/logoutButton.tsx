"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'
import { useToast } from '@/components/ui/use-toast'
import { Button } from '@/components/ui/button'

export default function LogoutButton() {
  const router = useRouter()
  const supabase = createClient()
  const { toast } = useToast()
  const handleLogout = async () => {
    const {error} = await supabase.auth.signOut({scope:"local"})
    if(error){
        toast({
            title: "Uh oh! Something went wrong.",
            description: error.message,
            variant: "destructive",
        });
    }
    router.push('/login') // Redirect to login page after logout
  }

  return (
    <Button
      onClick={handleLogout}
    variant={"destructive"}
    className='w-fit'
    elevated
    >
      Logout
    </Button>
  )
}