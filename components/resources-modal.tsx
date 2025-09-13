"use client"

import { useState, useEffect } from "react"
import { X, FileText, Video, Download, BookOpen, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function ResourcesModal() {
  const [isOpen, setIsOpen] = useState(false)

  // Listen for the custom event to toggle the modal
  useEffect(() => {
    const handleToggleModal = () => {
      setIsOpen((prev) => !prev)
    }

    window.addEventListener("toggleResourcesModal", handleToggleModal)
    return () => {
      window.removeEventListener("toggleResourcesModal", handleToggleModal)
    }
  }, [])

  const resources = [
    {
      title: "Cold Email ROI Calculator",
      description: "Calculate the potential return on your email campaigns",
      icon: <BarChart className="w-10 h-10" />,
      type: "Calculator",
      link: "https://zs-roi-calculator.lovable.app/",
    },
    {
      title: "Cold Email Templates for Staffing Firms",
      description: "10 proven templates that get responses from hiring managers",
      icon: <FileText className="w-10 h-10" />,
      type: "PDF Guide",
    },
    {
      title: "AI Outreach Masterclass",
      description: "Learn how to leverage AI for your staffing firm's outreach",
      icon: <Video className="w-10 h-10" />,
      type: "Video Course",
    },
    {
      title: "Staffing Industry Benchmark Report",
      description: "Compare your metrics with top-performing staffing firms",
      icon: <BarChart className="w-10 h-10" />,
      type: "Report",
    },
    {
      title: "The Ultimate Guide to Staffing Sales",
      description: "Comprehensive guide to scaling your staffing firm",
      icon: <BookOpen className="w-10 h-10" />,
      type: "eBook",
    },
  ]

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            className="bg-white rounded-xl w-full max-w-6xl max-h-[90vh] overflow-auto relative z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Free Resources</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource, index) => (
                  <motion.div
                    key={index}
                    className="card"
                    whileHover={{ scale: 1.03 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div
                      className="mb-4 p-3 rounded-full w-16 h-16 flex items-center justify-center"
                      style={{ backgroundColor: `rgba(85, 56, 207, 0.1)` }}
                    >
                      <div className="text-[#5538CF]">{resource.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{resource.title}</h3>
                    <p className="text-gray-700 mb-4">{resource.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{resource.type}</span>
                      <Button
                        className="primary-button flex items-center gap-2"
                        onClick={() => {
                          if (resource.link) {
                            window.open(resource.link, "_blank")
                          }
                        }}
                      >
                        <Download className="w-4 h-4" />
                        {resource.link ? "Open Calculator" : "Get Access"}
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
