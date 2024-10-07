import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MoveUpRight } from 'lucide-react'
import Link from 'next/link'
interface CTAProps {
  title?: string,
  secondTitle?:string,
}
export default function CTA({title = `Stop Wasting Time Studying`, secondTitle="Join Academik AI"}:CTAProps) {
  return (
    <div className='flex items-center w-full max-w-5xl mx-auto md:p-0'>
      <Card className="w-full p-4 sm:p-6 md:p-10 md:m-0 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{
            backgroundImage: `url("/lightningBg.png")`, // Leave empty for now
            opacity: 1 // Adjust this value to control the overlay darkness
          }}
        />
        <div className="relative z-10"> {/* This wrapper ensures content is above the background */}
          <CardHeader className="space-y-2 sm:space-y-4">
            <CardTitle className="text-center text-foreground">
              <p className='text-4xl md:text-5xl font-bold text-white'>
                  {title}
                  <br/>
                  {secondTitle}
              </p>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center pt-4 sm:pt-6 pb-4 sm:pb-8">
<Link href="/dashboard">
<Button 
              size="lg" 
              variant="default" 
              className="font-bold text-sm sm:text-md w-full sm:w-auto bg-white hover:bg-white text-black"
              elevated
            >

              Start Studying Faster
              <MoveUpRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
</Link>

          </CardContent>
        </div>
      </Card>
    </div>
  )
}