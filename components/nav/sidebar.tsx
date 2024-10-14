'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ChevronLeft, LayoutDashboard, FileText, Bookmark, Tag, Users, Settings, LogOut, Menu } from 'lucide-react'
import { ProfilePicture } from './profilepicture'
import { useUser } from '@/context/userContext'
import { useSidebarState } from '@/hooks/use-sidebar-state'

interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
}

interface NavSection {
  title: string
  items: NavItem[]
}

const navSections: NavSection[] = [
  {
    title: '',
    items: [
      { title: 'Dashboard', href: '/dashboard', icon: <LayoutDashboard className="h-5 w-5" /> },
    ],
  },
  {
    title: 'Contents',
    items: [
      { title: 'Posts', href: '/posts', icon: <FileText className="h-5 w-5" /> },
      { title: 'Categories', href: '/categories', icon: <Bookmark className="h-5 w-5" /> },
      { title: 'Tags', href: '/tags', icon: <Tag className="h-5 w-5" /> },
    ],
  },
]

function NavContent({ isExpanded, pathname, onToggle }: { isExpanded: boolean; pathname: string; onToggle: () => void }) {
    const {userDetails, hasSubscription} = useUser()
  return (
    <>
   <div className="flex items-center justify-between p-4 border-b relative">
        <div className={cn(
          'flex items-center',
          isExpanded ? 'space-x-2' : 'w-full justify-center'
        )}>
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">B</span>
          </div>
          {isExpanded && <span className="font-semibold text-lg">Brand</span>}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={onToggle}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 text-foreground hover:bg-accent hover:text-accent-foreground md:block hidden"
        >
          <ChevronLeft className={cn('h-3 w-3 transition-transform', !isExpanded && 'rotate-180')} />
        </Button>
      </div>
      <ScrollArea className="flex-grow">
        <nav className="p-4 space-y-6">
          {navSections.map((section, index) => (
            <div key={index}>
              {isExpanded && section.title && (
                <h2 className="mb-2 px-2 text-xs font-semibold text-muted-foreground uppercase">{section.title}</h2>
              )}
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            href={item.href}
                            className={cn(
                              'flex items-center px-2 py-2 rounded-lg transition-colors',
                              isExpanded ? 'space-x-2' : 'justify-center',
                              pathname === item.href
                                ? 'bg-primary text-primary-foreground'
                                : 'text-foreground hover:bg-muted hover:text-accent-foreground'
                            )}
                          >
                            {item.icon}
                            {isExpanded && <span>{item.title}</span>}
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                          <p>{item.title}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </ScrollArea>
      <div className="p-4 border-t flex flex items-center">
        <TooltipProvider>
          <Tooltip>
          {userDetails && (
                <TooltipTrigger asChild>
                    <ProfilePicture userDetails={userDetails} isExpanded={isExpanded}/>
                </TooltipTrigger>
            )}
            <TooltipContent side="right">
              <p>Account</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </>
  )
}

export function Sidebar() {
    const {isExpanded, toggleSidebar} = useSidebarState()
  const pathname = usePathname()

  return (
    <>
      {/* Mobile Sheet */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden fixed top-4 left-4 z-50">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64">
          <NavContent isExpanded={true} pathname={pathname} onToggle={() => {}} />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <aside
        className={cn(
          'hidden md:flex flex-col h-screen bg-background text-foreground border-r transition-all duration-300',
          isExpanded ? 'w-64' : 'w-20'
        )}
      >
        <NavContent isExpanded={isExpanded} pathname={pathname} onToggle={toggleSidebar} />
      </aside>
    </>
  )
}