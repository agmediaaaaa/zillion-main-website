"use client"

import { useRef } from "react"
import Link from "next/link"
import { Linkedin, Youtube, Mail } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="section light-section" ref={ref}>
      <div className="section-inner">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-8 text-[#DC143C]">Connect with us</h2>

          <div className="flex justify-center space-x-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.1 }}
            >
              <Link
                href="https://www.linkedin.com/in/swapnil-panigrahi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full flex items-center justify-center bg-[#DC143C] shadow-lg"
              >
                <Linkedin className="w-8 h-8 text-white" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.1 }}
            >
              <Link
                href="https://www.youtube.com/@Zillionsystems"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full flex items-center justify-center bg-[#DC143C] shadow-lg"
              >
                <Youtube className="w-8 h-8 text-white" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.1 }}
            >
              <Link
                href="mailto:swapnil@thezillionsystems.online"
                className="w-16 h-16 rounded-full flex items-center justify-center bg-[#DC143C] shadow-lg"
              >
                <Mail className="w-8 h-8 text-white" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} SMPAJG Zillion Systems Agency LLP. All rights reserved.
        </div>
      </div>
    </section>
  )
}
