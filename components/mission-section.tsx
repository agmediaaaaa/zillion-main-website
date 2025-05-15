"use client"

import { useState } from "react"
import { TrendingUp, Scale, Users } from "lucide-react"

export default function MissionSection() {
  // This state would be replaced with your actual theme color
  const [themeColor, setThemeColor] = useState("#3B82F6")

  return (
    <section className="w-full bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Our <span style={{ color: themeColor }}>Mission</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            At YourCompany, we follow three guiding principles to ensure every business gets the high-quality
            opportunities and support needed to thrive.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-900 rounded-xl p-8 transition-all hover:bg-gray-800">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
              style={{ backgroundColor: themeColor }}
            >
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Tailored to Your Growth Goals</h3>
            <p className="text-gray-300">
              We help firms cut months off their search by connecting them with thoroughly vetted capital or strategic
              partners—matched by size, sector, and synergy.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900 rounded-xl p-8 transition-all hover:bg-gray-800">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
              style={{ backgroundColor: themeColor }}
            >
              <Scale className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Real Expertise, Enhanced by Tech</h3>
            <p className="text-gray-300">
              Our seasoned team blends real-world deal-making experience with modern sourcing methods, ensuring you
              focus on high-value opportunities instead of guesswork.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900 rounded-xl p-8 transition-all hover:bg-gray-800">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
              style={{ backgroundColor: themeColor }}
            >
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Future-Ready Support</h3>
            <p className="text-gray-300">
              We refine your approach using current market data, keeping your pipeline flexible in a fast-moving
              landscape. With YourCompany, you're always ready to seize new opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
