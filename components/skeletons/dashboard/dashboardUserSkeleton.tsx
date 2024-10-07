import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function DashboardUserSkeleton() {
  return (
    <Card className="w-full bg-gradient-to-r from-primary/10 via-primary/5 to-background">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <Skeleton className="h-24 w-24 rounded-full" />
          <div className="flex flex-col items-center sm:items-start w-full sm:w-auto">
            <Skeleton className="h-8 w-48 mb-2" />
            <Skeleton className="h-4 w-64" />
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center sm:justify-start">
          <Skeleton className="h-5 w-5 mr-2 rounded-full" />
          <Skeleton className="h-4 w-32" />
        </div>
      </CardContent>
    </Card>
  )
}
