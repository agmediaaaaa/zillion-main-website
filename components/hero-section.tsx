"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Script from "next/script"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  // Ensure client-side only rendering for the Wistia video
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="hero-section">
      <div className="section-inner">
        <motion.div
          className="text-center mb-4 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-xl md:text-2xl font-medium text-[#DC143C] mb-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            FOR STAFFING FIRMS:
          </motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gray-900 mb-3 text-2xl md:text-4xl lg:text-5xl font-bold"
          >
            Get <span className="text-[#DC143C]">3-5 job</span> orders <span>a month using</span>{" "}
            <span>AI based cold emails</span>
          </motion.h1>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto relative rounded-xl overflow-hidden mb-6 px-4 md:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {mounted && (
            <>
              {/* Standard Wistia iframe embed - works with static exports */}
              <div className="wistia_responsive_padding" style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <div
                  className="wistia_responsive_wrapper"
                  style={{ height: "100%", left: 0, position: "absolute", top: 0, width: "100%" }}
                >
                  <iframe
                    src="https://fast.wistia.net/embed/iframe/58ajutp3x5"
                    allowTransparency={true}
                    frameBorder="0"
                    scrolling="no"
                    className="wistia_embed"
                    name="wistia_embed"
                    allowFullScreen
                    width="100%"
                    height="100%"
                    style={{ borderRadius: "0.75rem" }}
                  ></iframe>
                </div>
              </div>
              <Script src="https://fast.wistia.net/assets/external/E-v1.js" strategy="afterInteractive" />
            </>
          )}
        </motion.div>

        <motion.div
          className="text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <Link href="https://app.lemcal.com/@zillion-systems/growth-partner" target="_blank">
            <Button className="primary-button">
              LEARN MORE
              <span className="ml-2">→</span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
