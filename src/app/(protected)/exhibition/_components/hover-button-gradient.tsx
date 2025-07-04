"use client"

import { cn } from "@/lib/utils"
import type React from "react"

// import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

interface HoverBorderGradientProps {
  children: React.ReactNode
  containerClassName?: string
  className?: string
  as?: React.ElementType
  duration?: number
  gradientColors?: string[]
  borderWidth?: number
  onClick?: () => void
}

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Component = "button",
  duration = 10,
  gradientColors = ["#FF5F6D", "#FFC371", "#9E7AFF", "#FE8BBB"],
  borderWidth = 2,
  onClick,
}: HoverBorderGradientProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (!isHovering) return

    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * 100,
        y: Math.random() * 100,
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isHovering])

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative group", containerClassName)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-[inherit] transition-all duration-300",
          isHovering ? "opacity-100" : "opacity-70",
        )}
        style={{
          background: `linear-gradient(to right, ${gradientColors.join(", ")})`,
          backgroundSize: "300% 300%",
          backgroundPosition: `${position.x}% ${position.y}%`,
          transition: "background-position 1s ease-in-out, opacity 0.3s ease-in-out",
          padding: borderWidth,
          filter: "blur(0.5px)",
        }}
      />
      <Component
        className={cn(
          "relative bg-black text-white font-medium rounded-[inherit] flex items-center justify-center",
          className,
        )}
        onClick={onClick}
      >
        {children}
      </Component>
    </div>
  )
}
