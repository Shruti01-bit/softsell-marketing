"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { 
  StaggerContainer, 
  FadeUpDiv, 
  ScaleUpDiv, 
  AnimatedButton,
  fadeInUp
} from "@/components/animations"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <StaggerContainer className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <motion.h1 
                variants={fadeInUp}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              >
                Unlock the Value of Your Unused Software Licenses in India
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="max-w-[600px] text-muted-foreground md:text-xl"
              >
                SoftSell India helps businesses recover costs by selling unused or legacy software licenses in a secure,
                GST-compliant marketplace designed for Indian enterprises.
              </motion.p>
            </div>
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col gap-2 min-[400px]:flex-row"
            >
              <AnimatedButton>
                <Button asChild size="lg" className="px-8">
                  <Link href="#contact">
                    Get a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </AnimatedButton>
              <AnimatedButton>
                <Button asChild variant="outline" size="lg">
                  <Link href="#how-it-works">Sell My Licenses</Link>
                </Button>
              </AnimatedButton>
            </motion.div>
          </StaggerContainer>
          <ScaleUpDiv className="flex items-center justify-center">
            <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] rounded-full opacity-20 blur-3xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.25, 0.2]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              ></motion.div>
              <motion.div 
                className="relative h-full w-full rounded-xl border bg-background p-4 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="flex h-full w-full flex-col items-center justify-center space-y-4 rounded-lg border border-dashed p-6">
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Your Unused Licenses</h3>
                    <p className="text-sm text-muted-foreground">
                      Turn idle software assets into value with our secure Indian marketplace
                    </p>
                  </div>
                  <StaggerContainer className="grid w-full gap-2">
                    <motion.div variants={fadeInUp} className="rounded-md bg-muted p-2 text-center text-sm">Adobe Creative Cloud</motion.div>
                    <motion.div variants={fadeInUp} className="rounded-md bg-muted p-2 text-center text-sm">Microsoft Office</motion.div>
                    <motion.div variants={fadeInUp} className="rounded-md bg-muted p-2 text-center text-sm">Tally ERP</motion.div>
                    <motion.div variants={fadeInUp} className="rounded-md bg-muted p-2 text-center text-sm">Quick Heal</motion.div>
                  </StaggerContainer>
                </div>
              </motion.div>
            </div>
          </ScaleUpDiv>
        </div>
      </div>
    </section>
  )
}
