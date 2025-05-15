"use client"

import { useState } from "react"

export default function CampaignsSection() {
  // This state would be replaced with your actual theme color
  const [themeColor, setThemeColor] = useState("#3B82F6")

  return (
    <section className="w-full bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Recent <span style={{ color: themeColor }}>Campaigns</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Campaign 1 */}
          <div className="bg-gray-900 rounded-xl p-6">
            <div className="mb-4">
              <h3 className="text-xl font-bold">Overall Email Reach</h3>
              <p className="text-sm text-gray-400">The data is from 14 Apr, 08:05pm till now</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-2xl font-bold">3,470</div>
                <div className="text-sm text-gray-400">Total Leads Contacted</div>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-2xl font-bold">189</div>
                <div className="text-sm text-gray-400">Unique Replied (5.45%)</div>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-2xl font-bold">38</div>
                <div className="text-sm text-gray-400">Unique Positive Replies (20.11%)</div>
              </div>
            </div>
          </div>

          {/* Campaign 2 */}
          <div className="bg-gray-900 rounded-xl p-6">
            <div className="mb-4">
              <h3 className="text-xl font-bold">Overall Email Reach</h3>
              <p className="text-sm text-gray-400">The data is from 09 Jun, 05:33pm till now</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-2xl font-bold">7,771</div>
                <div className="text-sm text-gray-400">Total Leads Contacted</div>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-2xl font-bold">143</div>
                <div className="text-sm text-gray-400">Unique Replied (1.84%)</div>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-2xl font-bold">28</div>
                <div className="text-sm text-gray-400">Unique Positive Replies (19.58%)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
