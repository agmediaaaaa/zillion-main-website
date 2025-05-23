"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export default function PipelineSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="section off-white-section" id="learn-more" ref={ref}>
      <div className="section-inner">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6 px-4 md:px-0"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-bold">
              Our system can fill ANY recruitment companies pipeline <span className="text-[#5538CF]">in 30 days</span>{" "}
              or less
            </h2>
            <p className="text-xl text-gray-700">
              Reach out to companies that have urgent hiring needs and are open to external recruiting support
            </p>
            <div className="pt-6">
              <Link href="https://app.lemcal.com/@zillion-systems/growth-partner" target="_blank">
                <Button className="primary-button">
                  LEARN MORE
                  <span className="ml-2">→</span>
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="card mx-4 md:mx-0"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-lg font-medium mb-4 text-gray-900">
              Half a million dollar worth of opportunities in one Quarter
            </div>
            <div className="relative h-[300px] md:h-[400px] w-full mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/campaign-stats.png"
                alt="Campaign Results Dashboard"
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
