"use client";

import Link from "next/link";
import { LayoutGrid, LogOut, MoonStar, Sun, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'
import { useToast } from '@/components/ui/use-toast'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useTheme } from 'next-themes'
import { useSidebarState } from "@/hooks/use-sidebar-state";

export function ProfilePicture({userDetails, isExpanded}:{userDetails:UserProfile, isExpanded:boolean}) {
  const router = useRouter()
  const supabase = createClient()
  const { toast } = useToast()
  const { theme, setTheme } = useTheme()

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
    <DropdownMenu>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center justify-center space-x-2">
                <Avatar className="h-8 w-8 rounded-full border-2">
                  <AvatarImage src={userDetails?.avatar_url ?? undefined} alt="Avatar" />
                  <AvatarFallback className="bg-transparent">{userDetails?.email ? userDetails.email[0] : '?'}</AvatarFallback>
                </Avatar>
                {isExpanded && (
                  <div className="flex flex-col items-start">
                    <p className="text-sm font-medium leading-none">{userDetails?.full_name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{userDetails?.email}</p>
                  </div>
                )}
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent side="bottom">Profile</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuGroup>
          <DropdownMenuItem className="hover:cursor-pointer " onClick={() => setTheme(theme === "dark" ? 'light' : 'dark')} asChild>
            <div className="flex items-center">
            {theme === "dark" ? <MoonStar className="w-4 h-4 mr-3 text-muted-foreground" /> : <Sun className="w-4 h-4 mr-3 text-muted-foreground"/>}
            {theme === "dark" ? 'Switch to Light' : 'Switch to Dark'}
            </div>
           
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:cursor-pointer" asChild>
            <Link href="/account" className="flex items-center">
              <User className="w-4 h-4 mr-3 text-muted-foreground" />
              Account
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="hover:cursor-pointer" onClick={handleLogout}>
          <LogOut className="w-4 h-4 mr-3 text-muted-foreground" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}