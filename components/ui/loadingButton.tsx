import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ButtonProps } from "@/components/ui/button"

export function ButtonLoading({ className, children, ...props }: ButtonProps) {
  return (
    <Button disabled className={className} {...props}>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      {children || "Please wait"}
    </Button>
  )
}