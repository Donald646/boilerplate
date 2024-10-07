"use client"
import { BotIcon, LayoutDashboardIcon, RocketIcon, Video } from 'lucide-react'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Image from 'next/image'

export default function IconNavbar() {
  const pathname = usePathname()

  const SIDEBAR_ITEMS = [
    {
        title:"Dashboard",
        href:"/dashboard",
        icon:  <LayoutDashboardIcon/>
    },
    /*
    {
      title: "YouTube Tools",
      href: "/youtube-tool",
      icon: <Video className="h-7 w-7" />
    },
    */
    {
      title: "Chatbots",
      href: "/chatbots",
      icon: <BotIcon className="h-7 w-7" />
    },
  ]

  return (
    <div className='flex flex-col border-r h-screen p-4 gap-2 justify-between sticky'>
        <div className='flex flex-col gap-2 items-center'>
        {SIDEBAR_ITEMS.map((item) => (
          <Tooltip key={item.href}>
            <TooltipTrigger asChild>
              <Link href={item.href} className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'>
                {item.icon}
              </Link>
            </TooltipTrigger>
            {item.title && <TooltipContent side="right">
              <p>{item.title}</p>
            </TooltipContent>}
            <Separator />
          </Tooltip>
        ))}
        </div>
      
<div>
</div>
    </div>
  )
}