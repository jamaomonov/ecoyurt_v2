import { cn } from "@/lib/utils"
import React from "react"

type ContainerProps = React.PropsWithChildren<{
  className?: string
}>

export function Container({ children, className }: ContainerProps) {
  return <div className={cn("max-w-7xl mx-auto w-full px-6", className)}>{children}</div>
}


