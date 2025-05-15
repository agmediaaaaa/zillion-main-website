"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export default function CaseStudiesSlider() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Combined array of both image case studies and video testimonials
  const allCaseStudies = [
    // Image-based case studies
    {
      type: "image",
      title: "1 week, 10 opps",
      image: "/images/case-study-1.png",
      description: "Generated 10 opportunities worth $30,000 in just one week for a technical staffing firm.",
    },
    {
      type: "image",
      title: "Client Results",
      image: "/images/case-study-2.png",
      description: "7 opportunities worth $35,000 from just 250 targeted emails to decision makers.",
    },
    // Video testimonial 1
    {
      type: "video",
      videoId: "dZ2dIRlTvvQ",
      title: "How we helped Andiamo Group get consistent Leadflow",
      description: "Learn how we helped Andiamo Group achieve consistent lead flow with our AI-powered system.",
    },
    {
      type: "image",
      title: "1/3 responses is a positive lead",
      image: "/images/case-study-3.png",
      description: "33% positive response rate generating 6 opportunities worth $18,000.",
    },
    {
      type: "image",
      title: "Client Results",
      image: "/images/case-study-5.png",
      description: "26 opportunities worth $130,000 from a targeted campaign over 11 months.",
    },
    // Video testimonial 2
    {
      type: "video",
      videoId: "paRkt0Okb4Y",
      title: "Chris Morgan: TalentDome Staffing Success Story",
      description: "Chris Morgan shares how our system helped TalentDome Staffing achieve remarkable results.",
    },
    {
      type: "image",
      title: "Opportunities",
      image: "/images/case-study-6.png",
      description: "57.1% positive reply rate generating 4 opportunities worth $20,000.",
    },
    {
      type: "image",
      title: "$80,000 worth of opportunities under 7days",
      image: "/images/case-study-7.png",
      description: "Generated $80,000 in opportunities in less than a week with a 4.8% reply rate.",
    },
    {
      type: "image",
      title: "Consistent Results",
      image: "/images/case-study-8.png",
      description: "15 opportunities worth $290,000 from a month-long campaign.",
    },
    {
      type: "image",
      title: "Quick Results",
      image: "/images/case-study-9.png",
      description: "4 opportunities worth $80,000 in just a week of outreach.",
    },
  ]

  return (
    <section className="section light-section" id="case-studies" ref={ref}>
      <div className="section-inner">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-gray-900">
            Client <span className="text-[#5538CF]">Case Studies</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Real results from our AI-powered cold email system for staffing firms
          </p>
        </motion.div>

        <div className="horizontal-slider">
          <div className="slider-track">
            {allCaseStudies.map((study, index) => (
              <div key={index} className="case-study-card">
                {study.type === "image" ? (
                  // Image-based case study
                  <>
                    <div className="relative h-[300px] w-full">
                      <Image
                        src={study.image || "/placeholder.svg"}
                        alt={study.title}
                        fill
                        className="object-contain case-study-image"
                      />
                    </div>
                    <div className="case-study-content">
                      <h3 className="text-[#5538CF] mb-2">{study.title}</h3>
                      <p className="text-gray-700">{study.description}</p>
                    </div>
                  </>
                ) : (
                  // Video testimonial
                  <>
                    <div className="relative h-[300px] w-full">
                      <div className="youtube-container h-full">
                        <iframe
                          src={`https://www.youtube.com/embed/${study.videoId}`}
                          title={study.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                    <div className="case-study-content">
                      <h3 className="text-[#5538CF] mb-2">{study.title}</h3>
                      <p className="text-gray-700">{study.description}</p>
                    </div>
                  </>
                )}
              </div>
            ))}

            {/* Duplicate the first few items to create a seamless loop */}
            {allCaseStudies.slice(0, 3).map((study, index) => (
              <div key={`duplicate-${index}`} className="case-study-card">
                {study.type === "image" ? (
                  // Image-based case study
                  <>
                    <div className="relative h-[300px] w-full">
                      <Image
                        src={study.image || "/placeholder.svg"}
                        alt={study.title}
                        fill
                        className="object-contain case-study-image"
                      />
                    </div>
                    <div className="case-study-content">
                      <h3 className="text-[#5538CF] mb-2">{study.title}</h3>
                      <p className="text-gray-700">{study.description}</p>
                    </div>
                  </>
                ) : (
                  // Video testimonial
                  <>
                    <div className="relative h-[300px] w-full">
                      <div className="youtube-container h-full">
                        <iframe
                          src={`https://www.youtube.com/embed/${study.videoId}`}
                          title={study.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                    <div className="case-study-content">
                      <h3 className="text-[#5538CF] mb-2">{study.title}</h3>
                      <p className="text-gray-700">{study.description}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
