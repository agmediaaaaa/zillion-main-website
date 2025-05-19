"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

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
          className="text-center mb-4" // Reduced from mb-8 to mb-4
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-xl md:text-2xl font-medium text-[#5538CF] mb-1" // Reduced from mb-2 to mb-1
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
            className="text-gray-900 mb-3" // Reduced from mb-6 to mb-3
          >
            Get <span className="text-[#5538CF]">3-5 job</span> orders <span>a month using</span>{" "}
            <span>AI based cold emails</span>
          </motion.h1>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto relative rounded-xl overflow-hidden mb-6" // Reduced from mb-8 to mb-6
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {mounted && (
            <div className="wistia-container">
              {/* Wistia player implementation */}
              <script src="https://fast.wistia.com/player.js" async></script>
              <script src="https://fast.wistia.com/embed/58ajutp3x5.js" async type="module"></script>
              <style>
                {`wistia-player[media-id='58ajutp3x5']:not(:defined) { 
                  background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/58ajutp3x5/swatch'); 
                  display: block; 
                  filter: blur(5px); 
                  padding-top:56.25%; 
                }`}
              </style>
              <wistia-player
                media-id="58ajutp3x5"
                aspect="1.7777777777777777"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              ></wistia-player>
            </div>
          )}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <Link href="https://calendly.com/swapnil-panigrahi/discovery-call" target="_blank">
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
