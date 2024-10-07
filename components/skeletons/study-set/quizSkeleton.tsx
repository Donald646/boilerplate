import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function QuizSkeleton() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardContent className="pt-20 pb-8 px-4 sm:pt-8 sm:pb-10 sm:px-8">
        <Skeleton className="h-8 sm:h-10 w-3/4 mb-4 sm:mb-6" />
        <Skeleton className="h-6 sm:h-7 w-1/2 mb-4 sm:mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {[...Array(4)].map((_, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full min-h-16 sm:min-h-20 h-auto"
              disabled
            >
              <div className="flex items-center w-full">
                <Skeleton className="w-8 h-8 sm:w-10 sm:h-10 rounded-md mr-3" />
                <Skeleton className="flex-grow h-6 sm:h-7" />
              </div>
            </Button>
          ))}
        </div>
        <div className="mt-6 sm:mt-8 text-center">
          <Skeleton className="h-10 w-32 mx-auto" />
        </div>
      </CardContent>
    </Card>
  )
}
