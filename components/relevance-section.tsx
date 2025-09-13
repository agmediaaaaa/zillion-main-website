"use client"

import { useRef, useState, useEffect } from "react"
import { Settings, Target, Rocket, DollarSign, Users, Building, Globe, Star, UserMinus } from "lucide-react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function RelevanceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [autoplay, setAutoplay] = useState(true)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Autoplay for mobile carousel
  useEffect(() => {
    if (!isMobile || !autoplay) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % intentSignals.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isMobile, autoplay])

  const intentSignals = [
    {
      title: "Companies with open jobs",
      description:
        "Our AI pinpoints companies actively hiring for specialized, hard-to-fill positions — the exact types that typically require recruiter support in your niche.",
      icon: <Settings className="w-8 h-8 text-[#DC143C]" />,
    },
    {
      title: "Companies with rapid headcount growth",
      description:
        "We identify firms rapidly increasing headcount in your target departments — giving you a first-mover advantage with decision-makers before competitors even notice.",
      icon: <Target className="w-8 h-8 text-[#DC143C]" />,
    },
    {
      title: "New Offices, Product Launches & More",
      description:
        "From new office openings to fresh product launches, we track signals that indicate upcoming hiring needs — and help you reach out before anyone else does.",
      icon: <Rocket className="w-8 h-8 text-[#DC143C]" />,
    },
    {
      title: "Recently Funded Companies",
      description:
        "Companies that just received funding are often in growth mode and need to hire quickly to meet investor expectations and scale operations.",
      icon: <DollarSign className="w-8 h-8 text-[#DC143C]" />,
    },
    {
      title: "Leadership Changes or Appointments",
      description:
        "New executives often bring new initiatives that require additional talent, creating perfect opportunities for staffing partnerships.",
      icon: <Users className="w-8 h-8 text-[#DC143C]" />,
    },
    {
      title: "Mergers & Acquisitions Activity",
      description:
        "Companies involved in M&A often need specialized talent to manage transitions, integrate systems, and fill new roles in the expanded organization.",
      icon: <Building className="w-8 h-8 text-[#DC143C]" />,
    },
    {
      title: "Companies Expanding into New Geographies",
      description:
        "Geographic expansion creates immediate hiring needs as companies establish local teams in new markets.",
      icon: <Globe className="w-8 h-8 text-[#DC143C]" />,
    },
    {
      title: "Poor Ratings on Job Boards",
      description:
        "Companies with low ratings on job sites often struggle with direct hiring and are more receptive to staffing solutions.",
      icon: <Star className="w-8 h-8 text-[#DC143C]" />,
    },
    {
      title: "Employee Turnover or Retention Issues",
      description:
        "High turnover signals potential staffing needs and opportunities to provide more reliable talent solutions.",
      icon: <UserMinus className="w-8 h-8 text-[#DC143C]" />,
    },
  ]

  const nextSlide = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev + 1) % intentSignals.length)
  }

  const prevSlide = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev === 0 ? intentSignals.length - 1 : prev - 1))
  }

  return (
    <section className="section light-section" ref={ref}>
      <div className="section-inner">
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-6 text-[#DC143C]">RELEVANCE</h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto px-4">
            Our system allows you to ONLY reach out to companies having urgent hiring needs based on a variety of
            signals such as:
          </p>
        </motion.div>

        {/* Desktop Grid View */}
        {!isMobile && (
          <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {intentSignals.map((signal, index) => (
              <motion.div
                key={index}
                className="card hover-card text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "rgba(220, 20, 60, 0.03)",
                }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-white border-2 border-[#DC143C]/10">
                  {signal.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{signal.title}</h3>
                <p className="text-gray-700">{signal.description}</p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Mobile Carousel View */}
        {isMobile && (
          <div className="md:hidden">
            <div className="relative max-w-full flex justify-center">
              <div className="carousel-container overflow-hidden rounded-xl max-w-sm w-full mx-auto">
                <div className="relative min-h-[450px] flex items-center justify-center p-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      className="card hover-card text-center w-full"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-white border-2 border-[#DC143C]/10">
                        {intentSignals[activeIndex].icon}
                      </div>
                      <h3 className="text-lg font-bold mb-3 text-gray-900">{intentSignals[activeIndex].title}</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">{intentSignals[activeIndex].description}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Navigation buttons - positioned relative to the centered container */}
              <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center z-10 border border-[#E6E6C7]"
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center z-10 border border-[#E6E6C7]"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
