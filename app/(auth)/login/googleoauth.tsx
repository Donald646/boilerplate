'use client'

import { Button } from '@/components/ui/button'
import { createClient } from '@/utils/supabase/client'
import Image from 'next/image'
import React from 'react'

export default function GoogleOAuth() {
  const supabase = createClient()

  const handleGoogleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })
  }

  return (
    <Button
      onClick={handleGoogleSignIn}
      variant="outline"
      className="w-full bg-white text-gray-600 font-medium border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
    >
      <div className="flex items-center justify-center">
        <Image
          src="/google.svg"
          alt="Google logo"
          className="w-5 h-5 mr-2"
          height={18}   
          width={18}
        />
        <span>Sign in with Google</span>
      </div>
    </Button>
  )
}