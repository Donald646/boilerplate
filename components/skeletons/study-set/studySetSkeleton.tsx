import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'
import { MoveLeftIcon } from 'lucide-react'
import Link from 'next/link'

export default function StudySetSkeleton() {
  return (
    <div className="flex flex-col w-full gap-4 p-4 md:px-10 relative">
      <Link href="/study-sets" className="absolute top-0 left-0 p-2">
        <Button variant={"link"} className="text-base md:px-3 md:py-2">
          <MoveLeftIcon className='mr-2 h-4 w-4 md:h-5 md:w-5'/> Back to Study Sets
        </Button>
      </Link>
      
      <div className="mt-16 md:mt-12 flex flex-col md:flex-row gap-4">
        <Card className="w-full md:w-1/2 shadow-md">
          <CardHeader>
            <div className="flex justify-between items-center">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-6 w-20" />
            </div>
            <Skeleton className="h-4 w-full mt-2" />
            <Skeleton className="h-4 w-3/4 mt-1" />
          </CardHeader>
          <CardContent className="flex flex-col">
            <Skeleton className="h-4 w-1/2 mt-2" />
            <Skeleton className="h-4 w-2/3 mt-2" />
          </CardContent>
        </Card>

        <Card className="w-full md:w-1/2 shadow-md">
          <CardHeader>
            <Skeleton className="h-6 w-1/4" />
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-2">
            {[...Array(4)].map((_, index) => (
              <Skeleton key={index} className="h-12 w-full" />
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className='shadow-md'>
        <CardHeader>
          <Skeleton className="h-6 w-1/4" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-20 w-full" />
        </CardContent>
      </Card>
    </div>
  )
}