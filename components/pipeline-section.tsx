"use client"

import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export default function PipelineSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <section className="section off-white-section" id="learn-more" ref={ref}>
      <div className="section-inner">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            className="space-y-6 px-4 md:px-0"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-bold">
              Our system can fill ANY recruitment companies pipeline in 30 days or less
              <span className="text-[#DC143C]"> </span>{" "}
            </h2>
            <p className="text-xl text-gray-700">
              Reach out to companies that have urgent hiring needs and are open to external recruiting support
            </p>
            <div className="pt-6">
              <Link href="https://zillionsystems.fillout.com/intro-call-with-zillion-systems" target="_blank">
                <Button className="primary-button">
                  LEARN MORE
                  <span className="ml-2">→</span>
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="card mx-auto md:mx-0 w-[90%] md:w-full"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {!isMobile && (
              <div className="text-lg font-medium mb-4 text-gray-900">
                Half a million dollar worth of opportunities in one Quarter
              </div>
            )}
            <div className="relative h-[250px] md:h-[400px] w-full mb-2 rounded-lg overflow-hidden">
              <Image
                src="/images/campaign-stats.png"
                alt="Half a million dollar worth of opportunities in one Quarter"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="text-right text-xs text-gray-500 mt-2">Powered by Instantly.ai</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
