'use client'

import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-foreground p-4">
      <div className="flex items-center space-x-2 mb-4">
        <AlertCircle className="h-8 w-8 text-destructive" />
        <h1 className="text-2xl font-bold">Uh oh! Something went wrong.</h1>
      </div>
      <div className=" w-full max-w-xs">
        <Button onClick={() => reset()} className="w-full">
          Retry
        </Button>
        <div className="text-center">
          <Link href="https://tally.so/r/wAD6PD" target="_blank">
            <Button variant="link" className="text-primary" >
              Need Help? Contact us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}