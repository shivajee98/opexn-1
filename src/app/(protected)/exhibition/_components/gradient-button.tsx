"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface GradientButtonProps {
  children: React.ReactNode
  className?: string
  size?: "default" | "sm" | "lg"
  onClick?: () => void
}

export function GradientButton({ children, className, size = "default", onClick }: GradientButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const sizes = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-2.5",
    lg: "px-8 py-3 text-lg",
  }

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
    <button
      ref={buttonRef}
      className={cn(
        "relative rounded-full font-medium text-white transition-all duration-300 overflow-hidden",
        sizes[size],
        className,
      )}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="relative z-10">{children}</span>
      <div
        className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 opacity-90"
        style={{
          backgroundSize: "200% 200%",
          backgroundPosition: `${position.x}% ${position.y}%`,
          transition: "background-position 1s ease-in-out",
        }}
      />
      <div className="absolute inset-0 backdrop-blur-[1px]" />
      <div
        className={cn(
          "absolute inset-[2px] rounded-full bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 opacity-0 transition-opacity duration-300",
          isHovering ? "opacity-100" : "opacity-0",
        )}
        style={{
          backgroundSize: "200% 200%",
          backgroundPosition: `${100 - position.x}% ${100 - position.y}%`,
          transition: "background-position 1s ease-in-out, opacity 0.3s ease-in-out",
        }}
      />
    </button>
  )
}
