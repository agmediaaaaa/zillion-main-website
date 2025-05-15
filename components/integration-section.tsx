"use client"

import { useState } from "react"

export default function IntegrationSection() {
  // This state would be replaced with your actual theme color
  const [themeColor, setThemeColor] = useState("#3B82F6")

  return (
    <section className="w-full bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold leading-tight">
              Seamless <br />
              <span style={{ color: themeColor }}>Integration</span>
            </h2>
            <p className="text-xl text-gray-300">
              We seamlessly integrate with all major CRMs, marketing automation platforms, and communication
              tools—keeping your deal flow information centralized.
            </p>
            <p className="text-xl text-gray-300">
              Whether you use Salesforce, HubSpot, Close, or a customized platform, our system adapts to your tech
              stack. No more manual data entry, no more siloed information—just streamlined deal management.
            </p>
          </div>

          <div className="relative">
            {/* Integration logos grid */}
            <div className="grid grid-cols-3 gap-8">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-800 flex items-center justify-center mx-auto"
                >
                  <div
                    className="w-8 h-8 md:w-10 md:h-10"
                    style={{ backgroundColor: i % 2 === 0 ? themeColor : "white", opacity: 0.2, borderRadius: "50%" }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
