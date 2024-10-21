import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <div className="mb-8 bg-red-100 rounded-full p-6">
        <AlertTriangle className="w-16 h-16 text-red-500" />
      </div>
      <h1 className="text-4xl font-bold mb-2">404 - Not Found</h1>
      <p className="text-xl text-foreground-muted">Oops! The page you{"'"}re looking for doesn{"'"}t exist.</p>
      <div className="max-w-md">
        <p className="text-foreground-muted">
Looks like a bug?<Link href=""><Button variant={"link"} className='pl-1'>Contact Us </Button></Link>
        </p>
      </div>
      <Link href="/settings" passHref>
        <Button className='bg-primary'>
Dashboard
        </Button>
      </Link>
    </div>
  )
}