"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export default function ResultsScroll() {
  const [themeColor, setThemeColor] = useState("#6C5CE7")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const results = [
    "/images/case-study-1.png",
    "/images/case-study-2.png",
    "/images/case-study-3.png",
    "/images/case-study-4.png",
    "/images/case-study-5.png",
    "/images/case-study-6.png",
    "/images/case-study-7.png",
    "/images/case-study-8.png",
    "/images/case-study-9.png",
  ]

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

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden" ref={ref} id="results">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Real <span style={{ color: themeColor }}>Results</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See the actual campaign results our clients are achieving
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto glass-effect p-6 rounded-xl">
          <div className="scroll-container h-[500px]">
            <div className="scroll-content">
              {/* Double the results to create a seamless loop */}
              {[...results, ...results].map((result, index) => (
                <div key={index} className="mb-6 hover:scale-105 transition-transform">
                  <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
                    <Image
                      src={result || "/placeholder.svg"}
                      alt={`Campaign result ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
