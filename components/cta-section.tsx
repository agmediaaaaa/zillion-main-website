"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"

export default function CtaSection() {
  // This state would be replaced with your actual theme color
  const [themeColor, setThemeColor] = useState("#3B82F6")

  return (
    <section className="w-full bg-black text-white py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">
              Accelerate Your <br />
              <span style={{ color: themeColor }}>Deal Flow</span> Today
            </h2>
            <p className="text-xl text-gray-300">
              Book a consultation call with us to learn more about our proprietary methods of generating deal flow, and
              how we can implement them for your firm.
            </p>
          </div>

          <div className="bg-gray-900 rounded-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="w-32 h-8 bg-gray-800 mb-8"></div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-800 mr-4"></div>
                    <div>
                      <h3 className="font-bold">Consultant Name</h3>
                      <p className="text-sm text-gray-400">Discovery Call</p>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-300 mb-2">
                    <span className="mr-2">⏱️</span>
                    <span>45 min</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-300 mb-6">
                    <span className="mr-2">💻</span>
                    <span>Web conferencing details provided upon confirmation.</span>
                  </div>

                  <div className="space-y-4 text-sm">
                    <p>
                      This is a <strong>brief discovery call</strong> that will help us better understand your firm and
                      current methods for generating deal flow.
                    </p>
                    <p>
                      We'll also share details of the <strong>intent-based outbound strategy</strong> we've been using
                      to source opportunities for our partners at the exact moment they're{" "}
                      <strong>ready to take action</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-8">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold">Select a Date & Time</h3>
                </div>

                <div className="mb-4 flex justify-between items-center">
                  <button className="p-2">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <div>May 2025</div>
                  <button className="p-2">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-2 text-center mb-4">
                  <div className="text-xs text-gray-400">MON</div>
                  <div className="text-xs text-gray-400">TUE</div>
                  <div className="text-xs text-gray-400">WED</div>
                  <div className="text-xs text-gray-400">THU</div>
                  <div className="text-xs text-gray-400">FRI</div>
                  <div className="text-xs text-gray-400">SAT</div>
                  <div className="text-xs text-gray-400">SUN</div>
                </div>

                <div className="grid grid-cols-7 gap-2 text-center">
                  {Array.from({ length: 31 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm mx-auto ${i === 6 ? "text-white" : "text-gray-300"}`}
                      style={{ backgroundColor: i === 6 ? themeColor : "transparent" }}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <div className="text-sm mb-2">Time zone</div>
                  <div className="p-2 border border-gray-700 rounded flex items-center justify-between">
                    <span>Your Local Time Zone</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Abstract background shape */}
      <div className="absolute bottom-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div
          className="absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: `radial-gradient(circle, ${themeColor} 0%, rgba(0,0,0,0) 70%)`,
            transform: "translate(20%, 30%)",
          }}
        ></div>
      </div>
    </section>
  )
}
