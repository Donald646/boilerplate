'use client'

import { Button } from '@/components/ui/button'
import { createClient } from '@/utils/supabase/client'
import Image from 'next/image'
import React from 'react'

export default function GoogleOAuth() {
  const supabase = createClient()

  const handleGoogleSignIn = async () => {
    const searchParams = new URLSearchParams(window.location.search);
    const redirectUrl = searchParams.get('redirect') || "/dashboard"
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?redirect=${encodeURI(redirectUrl)}`,
      },
    })
  }

  return (
    <Button
      onClick={handleGoogleSignIn}
      variant="outline"
      className=""
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