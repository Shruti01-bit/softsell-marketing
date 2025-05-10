"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedButton } from "@/components/animations"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header 
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Image 
                src="/placeholder-logo.svg" 
                alt="SoftSell India Logo" 
                width={32} 
                height={32} 
              />
            </motion.div>
            <span className="text-xl font-bold">SoftSell India</span>
          </Link>
        </motion.div>
        <motion.nav 
          className="hidden md:flex gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {[
            { href: "#how-it-works", label: "How It Works" },
            { href: "#why-choose-us", label: "Why Choose Us" },
            { href: "#testimonials", label: "Testimonials" },
            { href: "#contact", label: "Contact" }
          ].map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <Link href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
                {item.label}
              </Link>
            </motion.div>
          ))}
        </motion.nav>
        <motion.div 
          className="flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <ModeToggle />
          <AnimatedButton className="hidden md:inline-flex">
            <Button asChild>
              <Link href="#contact">Get a Quote</Link>
            </Button>
          </AnimatedButton>
          <motion.button 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label="Toggle menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </motion.div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="container md:hidden py-4 pb-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.nav 
              className="flex flex-col gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {[
                { href: "#how-it-works", label: "How It Works" },
                { href: "#why-choose-us", label: "Why Choose Us" },
                { href: "#testimonials", label: "Testimonials" },
                { href: "#contact", label: "Contact" }
              ].map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-sm font-medium transition-colors hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button asChild className="w-full mt-2">
                  <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                    Get a Quote
                  </Link>
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
