"use client"

import { useRef } from "react"
import { Settings, Target, Rocket, DollarSign, Users, Building, Globe, Star, UserMinus } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function RelevanceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const intentSignals = [
    {
      title: "Companies with open jobs",
      description:
        "Our AI pinpoints companies actively hiring for specialized, hard-to-fill positions — the exact types that typically require recruiter support in your niche.",
      icon: <Settings className="w-8 h-8 text-[#5538CF]" />,
    },
    {
      title: "Companies with rapid headcount growth",
      description:
        "We identify firms rapidly increasing headcount in your target departments — giving you a first-mover advantage with decision-makers before competitors even notice.",
      icon: <Target className="w-8 h-8 text-[#5538CF]" />,
    },
    {
      title: "New Offices, Product Launches & More",
      description:
        "From new office openings to fresh product launches, we track signals that indicate upcoming hiring needs — and help you reach out before anyone else does.",
      icon: <Rocket className="w-8 h-8 text-[#5538CF]" />,
    },
    {
      title: "Recently Funded Companies",
      description:
        "Companies that just received funding are often in growth mode and need to hire quickly to meet investor expectations and scale operations.",
      icon: <DollarSign className="w-8 h-8 text-[#5538CF]" />,
    },
    {
      title: "Leadership Changes or Appointments",
      description:
        "New executives often bring new initiatives that require additional talent, creating perfect opportunities for staffing partnerships.",
      icon: <Users className="w-8 h-8 text-[#5538CF]" />,
    },
    {
      title: "Mergers & Acquisitions Activity",
      description:
        "Companies involved in M&A often need specialized talent to manage transitions, integrate systems, and fill new roles in the expanded organization.",
      icon: <Building className="w-8 h-8 text-[#5538CF]" />,
    },
    {
      title: "Companies Expanding into New Geographies",
      description:
        "Geographic expansion creates immediate hiring needs as companies establish local teams in new markets.",
      icon: <Globe className="w-8 h-8 text-[#5538CF]" />,
    },
    {
      title: "Poor Ratings on Job Boards",
      description:
        "Companies with low ratings on job sites often struggle with direct hiring and are more receptive to staffing solutions.",
      icon: <Star className="w-8 h-8 text-[#5538CF]" />,
    },
    {
      title: "Employee Turnover or Retention Issues",
      description:
        "High turnover signals potential staffing needs and opportunities to provide more reliable talent solutions.",
      icon: <UserMinus className="w-8 h-8 text-[#5538CF]" />,
    },
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
          <h2 className="mb-6 text-[#5538CF]">RELEVANCE</h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto">
            Our system allows you to ONLY reach out to companies having urgent hiring needs based on a variety of
            signals such as:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {intentSignals.map((signal, index) => (
            <motion.div
              key={index}
              className="card hover-card text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)",
                backgroundColor: "rgba(85, 56, 207, 0.03)",
              }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-white border-2 border-[#5538CF]/10">
                {signal.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{signal.title}</h3>
              <p className="text-gray-700">{signal.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
