"use client"

import { useState } from "react"

export default function TeamSection() {
  // This state would be replaced with your actual theme color
  const [themeColor, setThemeColor] = useState("#3B82F6")

  return (
    <section className="w-full bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Meet the <span style={{ color: themeColor }}>Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our team is comprised of experts with a proven history in strategic deal-making, market positioning, and
            capital sourcing. Their diverse expertise turns market intelligence into actionable opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Team member cards would go here */}
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-gray-900 rounded-xl p-6 text-center">
              <div className="w-24 h-24 rounded-full bg-gray-800 mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-1">Team Member Name</h3>
              <p className="text-gray-400 mb-4">Position / Role</p>
              <p className="text-gray-300">Brief bio highlighting expertise and experience in the industry.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
