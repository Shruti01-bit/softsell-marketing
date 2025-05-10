"use client"

import { Star } from "lucide-react"
import { motion } from "framer-motion"
import { 
  StaggerContainer, 
  FadeUpDiv, 
  SlideInLeftDiv, 
  SlideInRightDiv,
  fadeInUp 
} from "@/components/animations"

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <FadeUpDiv className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Customers Say</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Hear from businesses that have successfully recovered value from their unused software licenses.
            </p>
          </div>
        </FadeUpDiv>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          <SlideInLeftDiv className="flex flex-col justify-between space-y-4 rounded-lg border bg-background p-6 shadow-sm">
            <div className="space-y-2">
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
                viewport={{ once: true }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Star className="h-5 w-5 fill-primary text-primary" />
                  </motion.div>
                ))}
              </motion.div>
              <motion.p 
                className="text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                "SoftSell helped us recover over ₹40 lakh from unused enterprise software licenses after our company
                downsized. The process was seamless and their team was incredibly helpful throughout."
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="font-semibold">Priya Sharma</p>
              <p className="text-sm text-muted-foreground">CIO, TechVidya Solutions</p>
            </motion.div>
          </SlideInLeftDiv>
          <SlideInRightDiv className="flex flex-col justify-between space-y-4 rounded-lg border bg-background p-6 shadow-sm">
            <div className="space-y-2">
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
                viewport={{ once: true }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Star className="h-5 w-5 fill-primary text-primary" />
                  </motion.div>
                ))}
              </motion.div>
              <motion.p 
                className="text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                "As we migrated to cloud solutions, we had dozens of perpetual licenses sitting unused. SoftSell found
                buyers quickly and handled all the compliance details. I was impressed by how easy they made the entire
                process."
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="font-semibold">Rajesh Patel</p>
              <p className="text-sm text-muted-foreground">IT Director, Bharat Manufacturing Industries</p>
            </motion.div>
          </SlideInRightDiv>
        </div>
      </div>
    </section>
  )
}
