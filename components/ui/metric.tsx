"use client"
import { cn } from "@/lib/utils"

type MetricProps = {
  value: string
  label: string
  className?: string
}

export function Metric({ value, label, className }: MetricProps) {
  return (
    <div className={cn("flex items-baseline gap-2", className)}>
      <div className="text-3xl md:text-4xl font-bold tracking-tight">{value}</div>
      <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
    </div>
  )}


