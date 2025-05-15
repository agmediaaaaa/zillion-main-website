"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function TargetingSection() {
  // This state would be replaced with your actual theme color
  const [themeColor, setThemeColor] = useState("#3B82F6")

  return (
    <section className="w-full bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            {/* Replace with your actual UI/dashboard images */}
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="flex space-x-2 mb-4">
                {/* User avatars */}
                <div className="w-10 h-10 rounded-full bg-gray-600"></div>
                <div className="w-10 h-10 rounded-full bg-gray-600"></div>
                <div className="w-10 h-10 rounded-full bg-gray-600"></div>
                <div className="w-10 h-10 rounded-full bg-gray-600"></div>
                <div className="w-10 h-10 rounded-full bg-gray-600"></div>
              </div>

              <div className="bg-white/10 p-4 rounded-lg mt-4">
                <h4 className="text-lg font-medium mb-2">Creating User Confidence</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div
                      className="w-8 h-8 rounded flex items-center justify-center mr-2"
                      style={{ backgroundColor: themeColor }}
                    >
                      <span className="text-xs">1</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full flex-1"></div>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-8 h-8 rounded flex items-center justify-center mr-2"
                      style={{ backgroundColor: themeColor }}
                    >
                      <span className="text-xs">2</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full flex-1"></div>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-8 h-8 rounded flex items-center justify-center mr-2"
                      style={{ backgroundColor: themeColor }}
                    >
                      <span className="text-xs">3</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full flex-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-5xl font-bold leading-tight">
              Moment-of-Need <br />
              <span style={{ color: themeColor }}>Targeting</span>
            </h2>
            <p className="text-xl text-gray-300">
              By monitoring real-time market signals and corporate triggers, we pinpoint prospects who are actively
              seeking partnerships or financing. This method helps us focus on high-intent leads.
            </p>
            <Button className="text-white rounded-md px-6 py-3 text-lg" style={{ backgroundColor: themeColor }}>
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
