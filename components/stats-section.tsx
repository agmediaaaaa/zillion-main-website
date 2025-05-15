"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import AnimatedBar from "./animated-bar"

export default function StatsSection() {
  const [themeColor, setThemeColor] = useState("#6C5CE7")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Update theme color from localStorage if available
  useEffect(() => {
    const savedColor = localStorage.getItem("theme-color")
    if (savedColor) {
      setThemeColor(savedColor)
    }

    // Listen for theme color changes
    const handleStorageChange = () => {
      const updatedColor = localStorage.getItem("theme-color")
      if (updatedColor) {
        setThemeColor(updatedColor)
      }
    }

    window.addEventListener("storage", handleStorageChange)
    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [])

  const stats = [
    { value: 95, label: "Response Rate Increase" },
    { value: 87, label: "Client Satisfaction" },
    { value: 78, label: "Lead Quality Improvement" },
    { value: 92, label: "Client Retention Rate" },
  ]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-black to-[#2D1B69] z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Performance <span style={{ color: themeColor }}>Metrics</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how our AI-powered cold email system delivers exceptional results for staffing firms
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {stats.slice(0, 2).map((stat, index) => (
              <AnimatedBar key={index} percentage={stat.value} label={stat.label} delay={0.2 + index * 0.2} />
            ))}
          </motion.div>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {stats.slice(2, 4).map((stat, index) => (
              <AnimatedBar key={index} percentage={stat.value} label={stat.label} delay={0.6 + index * 0.2} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
