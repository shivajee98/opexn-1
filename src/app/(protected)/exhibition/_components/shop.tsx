"use client"

import { useTheme } from "next-themes"
import { MagicCard } from "./magic-card"

interface TextProps {
  text: string
  className?: string
}

export function MagicCardDemo({ text }: TextProps) {
  const { theme } = useTheme()
  return (
    <div className="flex w-full sm:w-[250px] md:w-[300px] h-[100px] md:h-[150px] mt-4">
      <MagicCard
        className="cursor-pointer flex items-center justify-center w-full h-full"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        // gradientColor={ "#262626"}
        gradientFrom="#9E7AFF"
        gradientTo="#FE8BBB"
      >
        <span className="text-2xl md:text-4xl font-bold text-white">{text}</span>
      </MagicCard>
    </div>
  )
}
