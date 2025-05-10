"use client"

import { Upload, CreditCard } from "lucide-react"
import React from "react"
import { motion } from "framer-motion"
import { 
  StaggerContainer, 
  FadeUpDiv, 
  fadeInUp 
} from "@/components/animations"

const RupeeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 3h12" />
    <path d="M6 8h12" />
    <path d="M6 13l8.5 8" />
    <path d="M6 13h3" />
    <path d="M9 13c6.667 0 6.667-10 0-10" />
  </svg>
)

export function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <FadeUpDiv className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">How It Works</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Our streamlined process makes selling your unused software licenses simple and profitable.
            </p>
          </div>
        </FadeUpDiv>
        <StaggerContainer className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Upload className="h-8 w-8 text-primary" />
            </motion.div>
            <h3 className="text-xl font-bold">1. Upload License</h3>
            <p className="text-center text-muted-foreground">
              Submit your license details through our secure portal for verification and valuation.
            </p>
          </motion.div>
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <RupeeIcon className="h-8 w-8 text-primary" />
            </motion.div>
            <h3 className="text-xl font-bold">2. Get Valuation</h3>
            <p className="text-center text-muted-foreground">
              Receive a competitive market valuation based on current demand and license specifics.
            </p>
          </motion.div>
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <CreditCard className="h-8 w-8 text-primary" />
            </motion.div>
            <h3 className="text-xl font-bold">3. Get Paid</h3>
            <p className="text-center text-muted-foreground">
              Once sold, receive payment directly to your UPI or bank account within 2-3 business days.
            </p>
          </motion.div>
        </StaggerContainer>
      </div>
    </section>
  )
}
