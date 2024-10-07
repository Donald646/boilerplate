import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function FlashcardSkeleton() {
  return (
    <div className="w-full max-w-3xl mx-auto p-2">
      <div className="mb-4">
        <Card className="h-96 flex items-center justify-center">
          <Skeleton className="w-3/4 h-12" />
        </Card>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <Button variant="outline" className="rounded-full p-2" disabled>
          <Skeleton className="h-6 w-6" />
        </Button>
        <Skeleton className="w-20 h-6" />
        <Button variant="outline" className="rounded-full p-2" disabled>
          <Skeleton className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}