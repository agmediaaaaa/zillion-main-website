"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function CaseStudiesSection() {
  const [themeColor, setThemeColor] = useState("#6C5CE7")
  const [currentSlide, setCurrentSlide] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const caseStudies = [
    {
      title: "1 week, 10 opps",
      image: "/images/case-study-1.png",
      description: "Generated 10 opportunities worth $30,000 in just one week for a technical staffing firm.",
    },
    {
      title: "Client Results",
      image: "/images/case-study-2.png",
      description: "7 opportunities worth $35,000 from just 250 targeted emails to decision makers.",
    },
    {
      title: "1/3 responses is a positive lead",
      image: "/images/case-study-3.png",
      description: "33% positive response rate generating 6 opportunities worth $18,000.",
    },
    {
      title: "Client Results",
      image: "/images/case-study-5.png",
      description: "26 opportunities worth $130,000 from a targeted campaign over 11 months.",
    },
    {
      title: "Opportunities",
      image: "/images/case-study-6.png",
      description: "57.1% positive reply rate generating 4 opportunities worth $20,000.",
    },
    {
      title: "$80,000 worth of opportunities under 7days",
      image: "/images/case-study-7.png",
      description: "Generated $80,000 in opportunities in less than a week with a 4.8% reply rate.",
    },
    {
      title: "Consistent Results",
      image: "/images/case-study-8.png",
      description: "15 opportunities worth $290,000 from a month-long campaign.",
    },
    {
      title: "Quick Results",
      image: "/images/case-study-9.png",
      description: "4 opportunities worth $80,000 in just a week of outreach.",
    },
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

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [caseStudies.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1))
  }

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden" id="case-studies" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span style={{ color: themeColor }}>Case Studies</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from our AI-powered cold email system for staffing firms
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {caseStudies.map((study, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="glass-effect p-6 rounded-xl">
                    <h3 className="text-2xl font-bold mb-4" style={{ color: themeColor }}>
                      {study.title}
                    </h3>
                    <div className="relative h-[400px] w-full mb-4">
                      <Image
                        src={study.image || "/placeholder.svg"}
                        alt={study.title}
                        fill
                        className="object-contain rounded-lg"
                      />
                    </div>
                    <p className="text-gray-300">{study.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-5 w-12 h-12 rounded-full glass-effect flex items-center justify-center z-10 hover:scale-110 transition-transform"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-5 w-12 h-12 rounded-full glass-effect flex items-center justify-center z-10 hover:scale-110 transition-transform"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? "bg-white" : "bg-gray-600"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
