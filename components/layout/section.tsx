import { cn } from "@/lib/utils"
import React from "react"

type SectionProps = React.PropsWithChildren<{
  id?: string
  className?: string
  padded?: boolean
  muted?: boolean
}>

export function Section({ id, children, className, padded = true, muted = false }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        muted ? "bg-muted/20" : undefined,
        padded ? "py-16" : undefined,
        className,
      )}
    >
      {children}
    </section>
  )
}


