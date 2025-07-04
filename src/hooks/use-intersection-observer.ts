"use client"

import { useEffect, useState, type RefObject } from "react"

interface UseIntersectionObserverProps {
  threshold?: number
  root?: Element | null
  rootMargin?: string
}

export function useIntersectionObserver(
  elementRef: RefObject<Element>,
  { threshold = 0.1, root = null, rootMargin = "0%" }: UseIntersectionObserverProps = {},
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      { threshold, root, rootMargin },
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [elementRef, threshold, root, rootMargin])

  return isIntersecting
}
