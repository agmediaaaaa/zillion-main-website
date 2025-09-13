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
    "Fully managed cold-email engine",
    "AI-powered lead gen with 24/7 hiring-signal monitoring",
    "Personalized outreach at scale with AI-written scripts",
    "Custom sequences with ongoing A/B testing",
    "AI decision-maker mapping for precise targeting",
    "Expanded data coverage (reach contacts most vendors miss)",
    "Deliverability monitoring and optimization",
    "Weekly performance reports + bi-weekly KPI review calls",
    "Custom mini-CRM & dashboard to track lead status, pipeline, ROI, and outcomes",
    "Dedicated account manager and 24/7 Slack access",
    "Continuous optimization of copy, targeting, and send times",
    "Pre-qualified, ICP-fit leads",
    "Predictable pipeline and booked calls",
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
          <h2 className="text-[#DC143C] px-4">What's Included in the Hiring Signal Engine deliverables</h2>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto mb-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="beige-glass-box p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center bg-[#10B981]">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <p className="text-base md:text-lg text-gray-700 text-left leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

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
