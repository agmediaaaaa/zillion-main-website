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

    // Clean up function to remove any scripts when component unmounts
    return () => {
      const scripts = document.querySelectorAll('script[data-wistia="true"]')
      scripts.forEach((script) => script.remove())
    }
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
            className="text-xl md:text-2xl font-medium text-[#5538CF] mb-1"
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
            Get <span className="text-[#5538CF]">3-5 job</span> orders <span>a month using</span>{" "}
            <span>AI based cold emails</span>
          </motion.h1>
        </motion.div>

        {mounted && (
          <>
            <Script
              id="wistia-player-js"
              src="https://fast.wistia.com/player.js"
              strategy="afterInteractive"
              data-wistia="true"
            />
            <Script
              id="wistia-embed-js"
              src="https://fast.wistia.com/embed/58ajutp3x5.js"
              strategy="afterInteractive"
              type="module"
              data-wistia="true"
            />
          </>
        )}

        <motion.div
          className="max-w-3xl mx-auto relative rounded-xl overflow-hidden mb-6 px-4 md:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {mounted && (
            <div className="wistia-container">
              <style jsx>{`
                wistia-player[media-id='58ajutp3x5']:not(:defined) { 
                  background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/58ajutp3x5/swatch'); 
                  display: block; 
                  filter: blur(5px); 
                  padding-top: 56.25%; 
                }
              `}</style>
              <wistia-player media-id="58ajutp3x5" aspect="1.7777777777777777"></wistia-player>
            </div>
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
