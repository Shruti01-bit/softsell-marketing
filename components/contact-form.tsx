"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  FadeUpDiv, 
  StaggerContainer, 
  fadeInUp, 
  AnimatedButton 
} from "@/components/animations"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    gstNumber: "",
    licenseType: "",
    message: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    company: "",
    gstNumber: "",
    licenseType: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    let valid = true
    const newErrors = {
      name: "",
      email: "",
      company: "",
      gstNumber: "",
      licenseType: "",
    }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
      valid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      valid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
      valid = false
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required"
      valid = false
    }

    if (formData.gstNumber.trim() && !/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(formData.gstNumber)) {
      newErrors.gstNumber = "GST number format is invalid"
      valid = false
    }

    if (!formData.licenseType) {
      newErrors.licenseType = "License type is required"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      console.log("Form submitted:", formData)
      setIsSubmitted(true)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, licenseType: value }))
  }

  return (
    <AnimatePresence mode="wait">
      {isSubmitted ? (
        <motion.section 
          id="contact" 
          className="w-full py-12 md:py-24 lg:py-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key="success"
        >
          <div className="container px-4 md:px-6">
            <motion.div 
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20,
                  delay: 0.2
                }}
              >
                <CheckCircle2 className="h-16 w-16 text-primary" />
              </motion.div>
              <motion.h2 
                className="text-3xl font-bold tracking-tighter md:text-4xl/tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Thank You!
              </motion.h2>
              <motion.p 
                className="mx-auto max-w-[600px] text-muted-foreground md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Your message has been received. Our team will get back to you within 24 hours to discuss your software
                license valuation.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <AnimatedButton>
                  <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
                </AnimatedButton>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      ) : (
        <motion.section 
          id="contact" 
          className="w-full py-12 md:py-24 lg:py-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key="form"
        >
          <div className="container px-4 md:px-6">
            <FadeUpDiv className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get a Free Valuation</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Fill out the form below and our team will provide you with a no-obligation quote for your software
                  licenses.
                </p>
              </div>
            </FadeUpDiv>
            <StaggerContainer className="mx-auto max-w-lg space-y-6 py-12">
              <motion.form variants={fadeInUp} onSubmit={handleSubmit} className="space-y-4">
                <FormField
                  label="Name"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                
                <FormField
                  label="Email"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                />
                
                <FormField
                  label="Company"
                  id="company"
                  name="company"
                  placeholder="Your company"
                  value={formData.company}
                  onChange={handleChange}
                  error={errors.company}
                />
                
                <FormField
                  label="GST Number (Optional)"
                  id="gstNumber"
                  name="gstNumber"
                  placeholder="e.g., 27AAPFU0939F1ZV"
                  value={formData.gstNumber}
                  onChange={handleChange}
                  error={errors.gstNumber}
                />
                
                <motion.div 
                  className="space-y-2"
                  variants={fadeInUp}
                >
                  <Label htmlFor="licenseType">License Type</Label>
                  <Select onValueChange={handleSelectChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select license type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="microsoft">Microsoft</SelectItem>
                      <SelectItem value="adobe">Adobe</SelectItem>
                      <SelectItem value="autodesk">Autodesk</SelectItem>
                      <SelectItem value="oracle">Oracle</SelectItem>
                      <SelectItem value="tally">Tally</SelectItem>
                      <SelectItem value="zoho">Zoho</SelectItem>
                      <SelectItem value="quickheal">Quick Heal</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.licenseType && <motion.p 
                    className="text-sm text-red-500"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {errors.licenseType}
                  </motion.p>}
                </motion.div>
                
                <motion.div 
                  className="space-y-2"
                  variants={fadeInUp}
                >
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your licenses (quantity, version, etc.)"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                  />
                </motion.div>
                
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button type="submit" className="w-full">
                    Submit
                  </Button>
                </motion.div>
              </motion.form>
            </StaggerContainer>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

interface FormFieldProps {
  label: string;
  id: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

function FormField({ label, id, name, type = "text", placeholder, value, onChange, error }: FormFieldProps) {
  return (
    <motion.div 
      className="space-y-2"
      variants={fadeInUp}
    >
      <Label htmlFor={id}>{label}</Label>
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <Input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </motion.div>
      {error && (
        <motion.p 
          className="text-sm text-red-500"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  )
}
