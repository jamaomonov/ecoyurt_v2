"use client"
import { cn } from "@/lib/utils"

type PillProps = React.PropsWithChildren<{
  className?: string
}>

export function Pill({ children, className }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        "bg-white/70 backdrop-blur-sm text-foreground/70 border-black/10",
        "shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_1px_2px_rgba(0,0,0,0.06)]",
        className,
      )}
    >
      {children}
    </span>
  )
}


