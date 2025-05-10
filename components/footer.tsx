"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { motion } from "framer-motion"
import { FadeUpDiv, StaggerContainer, fadeInUp } from "@/components/animations"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6 md:py-12">
      <div className="container px-4 md:px-6">
        <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <motion.div variants={fadeInUp} className="space-y-4">
            <div className="flex items-center gap-2">
              <motion.div whileHover={{ rotate: 5 }} transition={{ duration: 0.2 }}>
                <Image 
                  src="/placeholder-logo.svg" 
                  alt="SoftSell India Logo" 
                  width={24} 
                  height={24} 
                />
              </motion.div>
              <h3 className="text-lg font-bold">SoftSell India</h3>
            </div>
            <p className="text-sm text-muted-foreground">The trusted marketplace for software license resale in India.</p>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" }
              ].map(({ Icon, label }, index) => (
                <motion.div 
                  key={label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <FooterLinkGroup
            title="Company"
            links={[
              { href: "#", label: "About Us" },
              { href: "#", label: "Careers" },
              { href: "#", label: "Press" },
              { href: "#", label: "Blog" }
            ]}
          />
          
          <FooterLinkGroup
            title="Services"
            links={[
              { href: "#", label: "License Valuation" },
              { href: "#", label: "Compliance Verification" },
              { href: "#", label: "Enterprise Solutions" },
              { href: "#", label: "Bulk License Sales" }
            ]}
          />
          
          <FooterLinkGroup
            title="Legal"
            links={[
              { href: "#", label: "Terms of Service" },
              { href: "#", label: "Privacy Policy" },
              { href: "#", label: "GST Information" },
              { href: "#", label: "Compliance" }
            ]}
          />
        </StaggerContainer>
        <FadeUpDiv className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SoftSell India. All rights reserved.</p>
        </FadeUpDiv>
      </div>
    </footer>
  )
}

function FooterLinkGroup({ title, links }: { title: string, links: { href: string, label: string }[] }) {
  return (
    <motion.div variants={fadeInUp} className="space-y-4">
      <h3 className="text-lg font-bold">{title}</h3>
      <ul className="space-y-2 text-sm">
        {links.map((link, index) => (
          <motion.li 
            key={link.label}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
            viewport={{ once: true }}
            whileHover={{ x: 3 }}
          >
            <Link href={link.href} className="text-muted-foreground hover:text-foreground">
              {link.label}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}
