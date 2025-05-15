"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface AnimatedBarProps {
  percentage: number
  label: string
  color?: string
  delay?: number
}

export default function AnimatedBar({ percentage, label, color = "#6C5CE7", delay = 0 }: AnimatedBarProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [themeColor, setThemeColor] = useState(color)

  // Update theme color from localStorage if available
  useEffect(() => {
    const savedColor = localStorage.getItem("theme-color")
    if (savedColor && color === "#6C5CE7") {
      setThemeColor(savedColor)
    }

    // Listen for theme color changes
    const handleStorageChange = () => {
      const updatedColor = localStorage.getItem("theme-color")
      if (updatedColor && color === "#6C5CE7") {
        setThemeColor(updatedColor)
      }
    }

    window.addEventListener("storage", handleStorageChange)
    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [color])

  return (
    <div className="mb-6" ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm font-medium">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: themeColor }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay, ease: "easeOut" }}
        ></motion.div>
      </div>
    </div>
  )
}
