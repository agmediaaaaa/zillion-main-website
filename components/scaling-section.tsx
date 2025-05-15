"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export default function ScalingSection() {
  // This state would be replaced with your actual theme color
  const [themeColor, setThemeColor] = useState("#3B82F6")

  return (
    <section className="w-full bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold leading-tight">
              Intelligent <span style={{ color: themeColor }}>Scaling</span>
            </h2>
            <p className="text-xl text-gray-300">
              Our data-driven system expands your reach by identifying thousands of potential contacts that mirror your
              ideal client profile. This scalable approach continuously refines your pipeline, delivering consistent,
              qualified opportunities.
            </p>
            <Button className="text-white rounded-md px-6 py-3 text-lg" style={{ backgroundColor: themeColor }}>
              Book a Consultation
            </Button>
          </div>

          <div className="relative">
            {/* Calendar UI mockup */}
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Schedule</span>
                </div>
                <div className="flex space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                    <span className="text-xs">P</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                    <span className="text-xs">C</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-center mb-4">July 2025</div>
                <div className="grid grid-cols-7 gap-2 text-center">
                  <div className="text-xs text-gray-400">Mon</div>
                  <div className="text-xs text-gray-400">Tue</div>
                  <div className="text-xs text-gray-400">Wed</div>
                  <div className="text-xs text-gray-400">Thu</div>
                  <div className="text-xs text-gray-400">Fri</div>
                  <div className="text-xs text-gray-400">Sat</div>
                  <div className="text-xs text-gray-400">Sun</div>

                  {/* Calendar days */}
                  {Array.from({ length: 31 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${i === 6 ? "text-white" : "text-gray-300"}`}
                      style={{ backgroundColor: i === 6 ? themeColor : "transparent" }}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
