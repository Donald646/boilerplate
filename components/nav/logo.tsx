import { NAME } from '@/utils/config'
import { GraduationCapIcon, IceCream } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface LogoProps {
  onClick?: () => void
}

export default function Logo({ onClick }: LogoProps) {
  return (
    <Link 
      href="/" 
      className='flex flex-row gap-2 items-center font-bold text-lg'
      onClick={onClick}
    >
      <IceCream color='#2563eb' strokeWidth={2} className='size-8'/>
      {NAME}
    </Link>
  )
}