"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { PhoneCall, LineChart, Rocket, BarChart3, TrendingUp } from "lucide-react"

export default function FormulaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeStep, setActiveStep] = useState(null)

  const steps = [
    {
      number: "01",
      title: "Book a call",
      description:
        "We talk with you to find out exactly the bottlenecks and limitations in your current sales process.",
      icon: <PhoneCall className="w-6 h-6 text-[#DC143C]" />,
      stats: "15-minute discovery call",
    },
    {
      number: "02",
      title: "Growth Plan",
      description:
        "Our experts will craft a tailored Growth Plan for your staffing firm, optimizing your sales process to achieve maximum results.",
      icon: <LineChart className="w-6 h-6 text-[#DC143C]" />,
      stats: "48-hour turnaround time",
    },
    {
      number: "03",
      title: "Onboarding",
      description: "We will onboard you and setup the infrastructure within 7-days.",
      icon: <Rocket className="w-6 h-6 text-[#DC143C]" />,
      stats: "7-day implementation",
    },
    {
      number: "04",
      title: "Review KPI's",
      description: "We will review our KPIs weekly and improve on every possible backend metric.",
      icon: <BarChart3 className="w-6 h-6 text-[#DC143C]" />,
      stats: "Weekly performance reviews",
    },
    {
      number: "05",
      title: "Grow",
      description: "We stay up-to-date on their performance and consistently upgrade our standards.",
      icon: <TrendingUp className="w-6 h-6 text-[#DC143C]" />,
      stats: "Continuous optimization",
    },
  ]

  return (
    <section className="section light-section" ref={ref} id="formula">
      <div className="section-inner">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[#DC143C]">THE FORMULA</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mt-4 px-4">
            Our proven process to help staffing firms generate consistent, high-quality leads
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto px-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="formula-step"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div className="formula-step-number">{index + 1}</div>
              <motion.div
                className="card"
                animate={{
                  scale: activeStep === index ? 1.03 : 1,
                  boxShadow: activeStep === index ? "0 20px 30px rgba(0, 0, 0, 0.1)" : "0 4px 20px rgba(0, 0, 0, 0.08)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#DC143C]/10 flex items-center justify-center mr-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{step.description}</p>
                <div className="bg-gray-100 p-3 rounded-lg text-sm font-medium text-gray-700">{step.stats}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
