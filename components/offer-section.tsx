"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Award } from "lucide-react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"

export default function OfferSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="section light-section" id="offer" ref={ref}>
      <div className="section-inner">
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-8 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-[#5538CF]">
            <Award className="w-8 h-8 text-white" />
          </div>

          <motion.p
            className="text-xl md:text-2xl text-gray-700"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We believe one offering allows us to become an EXPERT at it
          </motion.p>

          <motion.p
            className="text-xl md:text-2xl text-gray-700"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Hence, here is our one offer and how we can help you (explained in under 2 minutes)
          </motion.p>

          <motion.p
            className="text-xl md:text-2xl text-gray-700"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            We can setup and run a fully managed cold email system for your firm using predictive AI and our in-house
            creative marketing strategies
          </motion.p>

          <motion.p
            className="text-xl md:text-2xl text-gray-700"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Result? You'll have a pipeline FULL of leads (probably more than you can handle)
          </motion.p>

          <motion.div
            className="pt-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Link href="https://app.lemcal.com/@zillion-systems/growth-partner" target="_blank">
              <Button className="primary-button">
                BOOK A CALL
                <span className="ml-2">📅</span>
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
