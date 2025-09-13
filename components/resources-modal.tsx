"use client"

import { useState, useEffect } from "react"
import { X, BarChart } from "lucide-react"
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

  const resource = {
    title: "Cold Email ROI Calculator",
    description:
      "Calculate the potential return on your email campaigns and see how much revenue you could generate with our Hiring Signal Engine system",
    icon: <BarChart className="w-10 h-10" />,
    type: "Calculator",
    link: "https://zs-roi-calculator.lovable.app/",
  }

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
            className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-auto relative z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Hiring Signal Engine ROI Calculator</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>
              </div>

              <div className="flex justify-center">
                <motion.div
                  className="card max-w-md w-full text-center"
                  whileHover={{ scale: 1.03 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div
                    className="mb-6 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto"
                    style={{ backgroundColor: `rgba(220, 20, 60, 0.1)` }}
                  >
                    <div className="text-[#DC143C]">{resource.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{resource.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{resource.description}</p>
                  <div className="flex justify-center">
                    <Button
                      className="primary-button flex items-center gap-2 text-lg px-8 py-3"
                      onClick={() => {
                        window.open(resource.link, "_blank")
                      }}
                    >
                      <BarChart className="w-5 h-5" />
                      Open ROI Calculator
                    </Button>
                  </div>
                  <div className="mt-4">
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{resource.type}</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
