"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FaqSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const faqs = [
    {
      question: "How does your AI-based cold email system work?",
      answer:
        "Our system uses advanced AI to identify companies with urgent hiring needs, craft personalized outreach messages, and automate follow-ups. We handle everything from prospect identification to email delivery and response management, all optimized for staffing firms.",
    },
    {
      question: "How long until I see results?",
      answer:
        "You can start seeing initial responses from the first week of campaign launch. It typically takes about 15-20 days to see the real effect as we optimize your campaigns. By the 30-day mark, your system should be up and running perfectly (given we don't face external issues which we really cannot solve).",
    },
    {
      question: "Do I need to provide my own email list?",
      answer:
        "No, we handle all prospect identification and list building. Our AI system identifies companies with active hiring needs in your specific niche, ensuring you're only reaching out to high-potential prospects.",
    },
    {
      question: "What makes your system different from other lead generation services?",
      answer:
        "Unlike generic lead generation services, we specialize exclusively in staffing firms. Our system is built to identify companies with urgent hiring needs based on specific signals like open jobs, rapid headcount growth, and new office openings - ensuring higher response rates and quality leads.",
    },
    {
      question: "How do you ensure emails don't get marked as spam?",
      answer:
        "We use a combination of proper email authentication (SPF, DKIM, DMARC), personalized messaging, strategic sending schedules, and continuous deliverability monitoring. Our system maintains high sender reputation scores and adapts to email provider algorithm changes.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "You'll have a dedicated account manager who reviews performance weekly, makes strategic adjustments, and is available for questions. We provide detailed reporting on all key metrics and continuously optimize your campaigns for maximum results.",
    },
  ]

  return (
    <section className="section light-section" id="faq" ref={ref}>
      <div className="section-inner">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-gray-900">
            Frequently Asked <span className="text-[#DC143C]">Questions</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto px-4">
            Get answers to common questions about our AI-powered cold email system for staffing firms
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left py-4 hover:no-underline text-gray-900">
                  <span className="text-base md:text-lg font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="py-4 text-gray-700">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="https://app.lemcal.com/@zillion-systems/growth-partner" target="_blank">
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
