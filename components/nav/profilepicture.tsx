'use client'

import React, { Suspense, useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from '@/lib/utils'
import { User } from '@supabase/supabase-js'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { createClient } from '@/utils/supabase/client'
import { useQuery } from '@supabase-cache-helpers/postgrest-swr'
import { Button } from '../ui/button'
import Link from 'next/link'
import { SettingsIcon } from 'lucide-react'
import { Skeleton } from '../ui/skeleton'

interface ProfilePictureProps {
  className?: string
  user: User
}

function ProfilePictureSkeleton() {
  return (
      <Button variant={"ghost"} disabled={true}>

        <div className='flex gap-2 items-center'>
          <div>
            <Skeleton className="h-4 w-24" />
          </div>
          <Avatar>
            <Skeleton className="h-10 w-10 rounded-full" />
          </Avatar>
        </div>
        <Skeleton className="h-10 w-full mb-2" />

      </Button>

  )
}

function useProfileData(userId: string) {
  const supabase = createClient()
  const { data, error, isLoading } = useQuery(
    supabase.from('users').select('username, avatar_url').eq('id', userId)
  )


 
  if (error) {
    console.error('Error fetching profile data:', error)
    return null
  }

  return data?.[0] ?? null
}

function ProfilePictureContent({ className, user }: ProfilePictureProps) {
  const profile = useProfileData(user.id)

  if (!profile) {
    return <ProfilePictureSkeleton />
  }
  console.log(profile)
  return (
    <Popover>
      <PopoverTrigger>
        <Button className='h-fit' variant={"ghost"}>
        <div className='flex gap-2 items-center'>
          <div>
            <p className="text-sm text-dark-blue font-semibold">@{profile.username}</p>
          </div>
          <Avatar className={cn("", className)}>
            <AvatarImage src={profile.avatar_url ?? undefined} alt={`${profile.username}'s avatar`} />
            <AvatarFallback className="bg-primary text-primary-foreground">
              <span className="text-2xl">
                {profile.username ? profile.username[0].toUpperCase() : null}
              </span>
            </AvatarFallback>
          </Avatar>
        </div>
        </Button>
       
      </PopoverTrigger>
      <PopoverContent className='w-fit'>
        <Button 
          asChild
          variant="ghost" 
          className={cn("w-fit justify-start")}
        >
          <Link href="/settings">
            <SettingsIcon className="h-5 w-5" />
            <span className="ml-3">Settings</span>
          </Link>
        </Button>
      </PopoverContent>
    </Popover>
  )
}

export default function ProfilePicture(props: ProfilePictureProps) {
  return (
    <Suspense fallback={<ProfilePictureSkeleton />}>
      <ProfilePictureContent {...props} />
    </Suspense>
  )
}