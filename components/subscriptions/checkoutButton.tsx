"use client"

import { useState } from 'react'
import { Button } from '../ui/button'
import { ButtonLoading } from '../ui/loadingButton'
import { createCheckoutSession } from './actions'
import Link from 'next/link'

interface CheckoutButtonProps {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  className?: string
  option: number
  children?: React.ReactNode
}

export default function CheckoutButton({ 
  variant = "default", 
  className, 
  option, 
  children = "Get Started" 
}: CheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const handleCheckout = async () => {
    setIsLoading(true)
  
    try {
      const url = await createCheckoutSession({option})
      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error('Checkout error:', error)
      setIsLoading(false)
    }
  }

  if(option === 2){
    return(
<Link href="/dashboard">
         <Button className={className} variant={variant}>
      {children}
    </Button>
      </Link>
    )
      
  }

  if (isLoading) {
    return <ButtonLoading className={className} variant={variant} />
  }

  return (
    <Button className={className} variant={variant} onClick={handleCheckout}>
      {children}
    </Button>
  )
}