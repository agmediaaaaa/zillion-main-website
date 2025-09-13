"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleResourcesModal = () => {
    // Dispatch a custom event that the ResourcesModal component will listen for
    const event = new CustomEvent("toggleResourcesModal")
    window.dispatchEvent(event)
  }

  return (
    <motion.header
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-48 md:h-12 md:w-64">
              <Image
                src="/images/logo-no-background.png"
                alt="Zillionsystems"
                fill
                className={`object-contain transition-all duration-300 ${scrolled ? "opacity-0" : "opacity-100"}`}
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="nav-link">
              About Us
            </Link>
            <Link href="#case-studies" className="nav-link">
              Case Studies
            </Link>
            <button onClick={toggleResourcesModal} className="nav-link">
              Free Resources
            </button>
            <Link href="https://zillionsystems.fillout.com/intro-call-with-zillion-systems" target="_blank">
              <Button className="primary-button">Book a Call</Button>
            </Link>
          </nav>

          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            className={`md:hidden mt-4 py-4 border-t rounded-lg shadow-lg ${
              scrolled ? "border-gray-600 bg-black" : "border-gray-200 bg-white"
            }`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4 p-4">
              <Link href="#about" className="nav-link" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
              <Link href="#case-studies" className="nav-link" onClick={() => setIsOpen(false)}>
                Case Studies
              </Link>
              <button
                onClick={() => {
                  toggleResourcesModal()
                  setIsOpen(false)
                }}
                className="text-left nav-link"
              >
                Free Resources
              </button>
              <Link
                href="https://zillionsystems.fillout.com/intro-call-with-zillion-systems"
                target="_blank"
                onClick={() => setIsOpen(false)}
              >
                <Button className="primary-button w-full">Book a Call</Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
