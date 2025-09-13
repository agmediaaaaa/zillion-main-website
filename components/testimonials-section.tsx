"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, useInView } from "framer-motion"

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="section off-white-section" ref={ref}>
      <div className="section-inner">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[#DC143C] px-4">THIS IS WHAT OUR CLIENTS HAVE TO SAY ABOUT THEIR EXPERIENCE</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16 px-4">
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="youtube-container">
              <iframe
                src="https://www.youtube.com/embed/dZ2dIRlTvvQ"
                title="Client Testimonial: How we helped Andiamo Group get consistent Leadflow"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="youtube-container">
              <iframe
                src="https://www.youtube.com/embed/paRkt0Okb4Y"
                title="Client Testimonial: Chris Morgan TalentDome Staffing"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="https://zillionsystems.fillout.com/intro-call-with-zillion-systems" target="_blank">
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
