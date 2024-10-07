'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import PricingSectionCards from '../public/pricingSection'
import { cn } from "@/lib/utils"

interface UpgradePopupProps {
  className?: string
  buttonText?: string
  variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | "success" | null | undefined
  children?: React.ReactNode
}

export default function PricingPopup({ className, variant, children="Upgrade" }: UpgradePopupProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className={cn("", className)} variant={variant} elevated>
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-fit sm:max-w-[90vw] h-full sm:h-[90vh] max-h-screen overflow-y-auto p-0 sm:p-6">
      <DialogHeader>
      <DialogTitle className='font-bold'>Upgrade your plan to continue</DialogTitle>
      </DialogHeader>
        <div className="p-6 sm:p-0 sm:pr-6">
          <PricingSectionCards isTable={false} showCTA={false} />
        </div>
      </DialogContent>
    </Dialog>
  )
}