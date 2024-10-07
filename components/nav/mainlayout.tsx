"use client"

import { LayoutDashboardIcon, SettingsIcon, TvMinimalPlayIcon, Layers, GraduationCapIcon, PanelLeftOpenIcon, PanelLeftCloseIcon, RocketIcon, HelpCircleIcon, ArrowUpFromLine, Folder, TrophyIcon, Star, Trophy, Settings, Home, User } from 'lucide-react'
import Link from 'next/link'
import React, { ReactNode, useState } from 'react'
import { usePathname } from 'next/navigation'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useUser } from '@/context/userContext'
import { cn } from "@/lib/utils"
import { MobileSidebar } from './mobileSidebar'
import { Button } from '../ui/button'
import PricingPopup from '../subscriptions/pricingpopup'
import { Sidebar } from './sidebar'
import { ThemeChanger } from '../public/themeButton'
import { ProfilePicture } from './profilepicture'


interface SidebarItem {
  title: string
  href: string
  icon: ReactNode
  className?: string
}

interface MainLayoutProps {
  children: ReactNode
}

const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    title: "Extracurriculars",
    href: "/extracurriculars",
    icon: <Star className="h-5 w-5" />, // Updated icon
  },
  {
    title: "Awards",
    href: "/awards",
    icon: <Trophy className="h-5 w-5" />, // New item with icon
  },
  {
    title: "Background",
    href: "/background",
    icon: <Folder className="h-5 w-5" />,
  },
]

export default function Component({ children }: MainLayoutProps) {
  const pathname = usePathname()
  const { hasSubscription, userDetails } = useUser()
  const [isOpen, setIsOpen] = useState(true)
  const toggleSidebar = () => setIsOpen(!isOpen)
 
  return (
    <div className="flex h-screen w-screen bg-background">
      {/* Sidebar */}
     <Sidebar/>

      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top Navbar */}
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4">
          {children}
        </main>
      </div>
    </div>
  )
}