import { cn } from "@/lib/utils"
import React from "react"

type GlassPanelProps = React.PropsWithChildren<{
  className?: string
}>

export function GlassPanel({ children, className }: GlassPanelProps) {
  return (
    <div
      className={cn(
        // Liquid glass (монохром): нейтральная кромка, мягкое внутреннее сияние
        "rounded-3xl bg-white/35 dark:bg-white/5 backdrop-blur-xl shadow-[0_12px_36px_-14px_rgba(0,0,0,0.28)]",
        "[--tw-border-opacity:0.22]",
        // монохромный ободок и внутренний свет без цветного градиента
        "relative before:absolute before:inset-0 before:rounded-3xl before:pointer-events-none",
        "before:bg-[radial-gradient(900px_500px_at_0%_0%,rgba(255,255,255,0.18),transparent_60%),radial-gradient(700px_360px_at_100%_100%,rgba(255,255,255,0.10),transparent_60%)]",
        "after:absolute after:inset-0 after:rounded-3xl after:pointer-events-none after:[mask:linear-gradient(white,transparent)]",
        "after:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35)]",
        className,
      )}
    >
      {children}
    </div>
  )
}


