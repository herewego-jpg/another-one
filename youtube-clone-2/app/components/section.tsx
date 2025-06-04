"use client"

import type React from "react"

interface SectionProps {
  children: React.ReactNode
  className?: string
}

export function Section({ children, className = "" }: SectionProps) {
  return <section className={`py-8 ${className}`}>{children}</section>
}
