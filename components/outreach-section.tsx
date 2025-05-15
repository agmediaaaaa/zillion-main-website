"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function OutreachSection() {
  // This state would be replaced with your actual theme color
  const [themeColor, setThemeColor] = useState("#3B82F6")

  return (
    <section className="w-full bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold leading-tight">
              Diversified Outreach <br />
              <span style={{ color: themeColor }}>Strategy</span>
            </h2>
            <p className="text-xl text-gray-300">
              We engage decision-makers across multiple channels—email, professional networks, and targeted
              calls—ensuring your message reaches the right stakeholders with minimal friction.
            </p>
            <Button className="text-white rounded-md px-6 py-3 text-lg" style={{ backgroundColor: themeColor }}>
              Book a Consultation
            </Button>
          </div>

          <div className="relative">
            {/* Replace with your actual dashboard/UI images */}
            <div className="bg-gray-800 rounded-xl p-6 relative z-10">
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="text-lg font-medium mb-2">Download</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>JPG</div>
                    <div className="text-right">237 KB</div>
                    <div>PNG</div>
                    <div className="text-right">540 KB</div>
                    <div>AI</div>
                    <div className="text-right">257 KB</div>
                    <div>SVG</div>
                    <div className="text-right">157 KB</div>
                  </div>
                </div>

                <div className="bg-white/10 p-4 rounded-lg mt-4">
                  <h4 className="text-lg font-medium mb-2">Leads</h4>
                  <div className="h-[100px] relative">
                    {/* Placeholder for chart */}
                    <div className="absolute bottom-0 left-0 right-0 h-[60px]">
                      <div
                        className="w-full h-full"
                        style={{
                          background: `linear-gradient(to right, transparent, ${themeColor}, transparent)`,
                          clipPath:
                            "polygon(0 100%, 10% 60%, 20% 80%, 30% 40%, 40% 70%, 50% 20%, 60% 40%, 70% 60%, 80% 30%, 90% 50%, 100% 10%, 100% 100%, 0 100%)",
                        }}
                      ></div>
                    </div>
                    <div
                      className="absolute top-0 right-[20%] bg-black/50 text-white px-2 py-1 rounded text-xs"
                      style={{ border: `1px solid ${themeColor}` }}
                    >
                      100x
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
