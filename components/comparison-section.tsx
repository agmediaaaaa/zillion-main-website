"use client"

import { useRef, useState } from "react"
import { X, Check } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function ComparisonSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(null)

  const challenges = [
    "The learning curve and ever changing lead generation game make it nearly impossible to efficiently and effectively get more deals",
    "Spending hours every single day on manual outreach to generate more leads/business",
    "The leads you get compare you to other recruitment firms make it tough to charge premium rates",
    "Most importantly, no other 'streams' of getting new business besides referrals and in-person events",
  ]

  const solutions = [
    "Up to date modern lead generation systems that turn your outreach efforts equal to top 1% staffing firms",
    "Zero time spent on manual outreach as we automate every thing",
    "Charge premium rates by turning your offer into a one off one in the space without changing a thing about what you do",
    "2-3 new streams to bring in more deals for you consistently",
  ]

  const stats = [
    { challenge: "Hours spent on outreach weekly", before: "20+ hours", after: "0 hours" },
    { challenge: "Average response rate", before: "2-3%", after: "5-8%" },
    { challenge: "Qualified opportunities monthly", before: "3-4", after: "8-12" },
    { challenge: "Time to first response", before: "24 hours", after: "0-15 mins" },
  ]

  return (
    <section className="section off-white-section" ref={ref}>
      <div className="section-inner">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[#5538CF] mb-4">CHALLENGES & SOLUTIONS</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            See how our system addresses the common challenges faced by staffing firms
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Challenges</h3>
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                style={{
                  backgroundColor: activeIndex === index ? "rgba(85, 56, 207, 0.05)" : "transparent",
                  transform: activeIndex === index ? "scale(1.05)" : "scale(1)",
                }}
              >
                <div className="mt-1 flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                    <X className="w-4 h-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700">{challenge}</p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Solutions</h3>
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onMouseEnter={() => setActiveIndex(index + 4)}
                onMouseLeave={() => setActiveIndex(null)}
                style={{
                  backgroundColor: activeIndex === index + 4 ? "rgba(85, 56, 207, 0.05)" : "transparent",
                  transform: activeIndex === index + 4 ? "scale(1.05)" : "scale(1)",
                }}
              >
                <div className="mt-1 flex-shrink-0">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-[#5538CF]">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700">{solution}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="card p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Before & After Comparison</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="font-bold text-gray-900">Metric</div>
            <div className="font-bold text-gray-900">Before Our System</div>
            <div className="font-bold text-gray-900">After Our System</div>
            <div className="font-bold text-gray-900">Improvement</div>

            {stats.map((stat, index) => (
              <>
                <div key={`challenge-${index}`} className="text-gray-700">
                  {stat.challenge}
                </div>
                <div key={`before-${index}`} className="text-red-500 font-medium">
                  {stat.before}
                </div>
                <div key={`after-${index}`} className="text-[#5538CF] font-medium">
                  {stat.after}
                </div>
                <div key={`improvement-${index}`} className="text-green-600 font-medium">
                  {stat.challenge === "Hours spent on outreach weekly"
                    ? "100% reduction"
                    : stat.challenge === "Average response rate"
                      ? "~3x improvement"
                      : stat.challenge === "Qualified opportunities monthly"
                        ? "3x increase"
                        : "95% faster"}
                </div>
              </>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
