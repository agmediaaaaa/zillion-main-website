"use client"

import { useState } from "react"
import { BarChart3, FileText, Brain, Play } from "lucide-react"

export default function RoadmapSection() {
  // This state would be replaced with your actual theme color
  const [themeColor, setThemeColor] = useState("#3B82F6")

  return (
    <section className="w-full bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Deal Flow <span style={{ color: themeColor }}>Roadmap</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here's a look into our process once you get started.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-[2px]" style={{ backgroundColor: themeColor }}></div>

          {/* Step 1 */}
          <div className="grid md:grid-cols-2 gap-8 mb-24 relative">
            <div className="md:text-right md:pr-16">
              <div className="text-8xl font-bold opacity-20">01</div>
              <div className="text-lg font-medium mb-2" style={{ color: themeColor }}>
                STEP 1
              </div>
            </div>
            <div className="md:pl-16">
              <div
                className="w-16 h-16 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
              >
                <BarChart3 className="w-8 h-8" style={{ color: themeColor }} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Define Target Profile</h3>
              <p className="text-gray-300">
                First we identify strategic, financial, and operational benchmarks for your ideal deal candidate.
              </p>
            </div>
            {/* Circle on the line */}
            <div
              className="absolute left-[50%] top-[50%] w-6 h-6 rounded-full transform -translate-x-1/2 -translate-y-1/2"
              style={{ backgroundColor: themeColor }}
            ></div>
          </div>

          {/* Step 2 */}
          <div className="grid md:grid-cols-2 gap-8 mb-24 relative">
            <div className="md:text-right md:pr-16 order-1 md:order-1">
              <div
                className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 md:ml-auto"
                style={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
              >
                <FileText className="w-8 h-8" style={{ color: themeColor }} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Craft Value Messaging</h3>
              <p className="text-gray-300">
                Then we develop targeted collateral and messaging that articulates your unique value and deal potential.
              </p>
            </div>
            <div className="md:pl-16 order-2 md:order-2">
              <div className="text-8xl font-bold opacity-20">02</div>
              <div className="text-lg font-medium mb-2" style={{ color: themeColor }}>
                STEP 2
              </div>
            </div>
            {/* Circle on the line */}
            <div
              className="absolute left-[50%] top-[50%] w-6 h-6 rounded-full transform -translate-x-1/2 -translate-y-1/2"
              style={{ backgroundColor: themeColor }}
            ></div>
          </div>

          {/* Step 3 */}
          <div className="grid md:grid-cols-2 gap-8 mb-24 relative">
            <div className="md:text-right md:pr-16">
              <div className="text-8xl font-bold opacity-20">03</div>
              <div className="text-lg font-medium mb-2" style={{ color: themeColor }}>
                STEP 3
              </div>
            </div>
            <div className="md:pl-16">
              <div
                className="w-16 h-16 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
              >
                <Brain className="w-8 h-8" style={{ color: themeColor }} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Strategic Outreach</h3>
              <p className="text-gray-300">
                Then we begin leveraging industry networks and data-driven channels to reach qualified deal
                participants.
              </p>
            </div>
            {/* Circle on the line */}
            <div
              className="absolute left-[50%] top-[50%] w-6 h-6 rounded-full transform -translate-x-1/2 -translate-y-1/2"
              style={{ backgroundColor: themeColor }}
            ></div>
          </div>

          {/* Step 4 */}
          <div className="grid md:grid-cols-2 gap-8 relative">
            <div className="md:text-right md:pr-16 order-1 md:order-1">
              <div
                className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 md:ml-auto"
                style={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
              >
                <Play className="w-8 h-8" style={{ color: themeColor }} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Connect & Engage</h3>
              <p className="text-gray-300">
                Lastly, we coordinate due diligence, schedule introductions, and secure meetings to advance
                opportunities.
              </p>
            </div>
            <div className="md:pl-16 order-2 md:order-2">
              <div className="text-8xl font-bold opacity-20">04</div>
              <div className="text-lg font-medium mb-2" style={{ color: themeColor }}>
                STEP 4
              </div>
            </div>
            {/* Circle on the line */}
            <div
              className="absolute left-[50%] top-[50%] w-6 h-6 rounded-full transform -translate-x-1/2 -translate-y-1/2"
              style={{ backgroundColor: themeColor }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
