"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"

export default function BenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    "Fully managed cold email system",
    "AI-powered lead generation",
    "Custom email sequences",
    "Weekly performance reports",
    "Dedicated account manager",
    "Continuous optimization",
    "Premium lead quality",
    "Consistent deal flow",
  ]

  return (
    <section className="section light-section" ref={ref}>
      <div className="section-inner">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[#DC143C]">YOU'D GET</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12 px-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-[#10B981]">
                  <Check className="w-4 h-4 text-white" />
                </div>
              </div>
              <p className="text-lg md:text-xl text-gray-700">{benefit}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link href="https://app.lemcal.com/@zillion-systems/growth-partner" target="_blank" id="book-call">
            <Button className="primary-button">
              BOOK AN INTRO CALL
              <span className="ml-2">📅</span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
