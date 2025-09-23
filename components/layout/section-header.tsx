import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import React from "react"

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeader({ eyebrow, title, align = "center", className }: SectionHeaderProps) {
  return (
    <div className={cn("space-y-6", align === "center" ? "text-center" : "text-left", className)}>
      {eyebrow ? (
        <Button
          variant="outline"
          className="rounded-full px-6 py-2 text-sm bg-primary/10 border-primary/20 text-primary hover:bg-primary/20"
        >
          {eyebrow}
        </Button>
      ) : null}
      <h2 className="text-3xl lg:text-4xl font-bold text-balance">{title}</h2>
    </div>
  )
}


