"use client"

import React from "react"
import { motion, MotionProps, Variants, HTMLMotionProps } from "framer-motion"

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

export const slideInLeft: Variants = {
  initial: {
    x: -100,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export const slideInRight: Variants = {
  initial: {
    x: 100,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export const scaleUp: Variants = {
  initial: {
    scale: 0.8,
    opacity: 0
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

export const bounce: Variants = {
  initial: {
    y: 0
  },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut"
    }
  }
}

type MotionDivProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
};

export const FadeUpDiv: React.FC<MotionDivProps> = ({ children, ...props }) => (
  <motion.div
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeInUp}
    {...props}
  >
    {children}
  </motion.div>
)

export const StaggerContainer: React.FC<MotionDivProps> = ({ children, ...props }) => (
  <motion.div
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, margin: "-100px" }}
    variants={staggerContainer}
    {...props}
  >
    {children}
  </motion.div>
)

export const SlideInLeftDiv: React.FC<MotionDivProps> = ({ children, ...props }) => (
  <motion.div
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, margin: "-100px" }}
    variants={slideInLeft}
    {...props}
  >
    {children}
  </motion.div>
)

export const SlideInRightDiv: React.FC<MotionDivProps> = ({ children, ...props }) => (
  <motion.div
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, margin: "-100px" }}
    variants={slideInRight}
    {...props}
  >
    {children}
  </motion.div>
)

export const ScaleUpDiv: React.FC<MotionDivProps> = ({ children, ...props }) => (
  <motion.div
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, margin: "-100px" }}
    variants={scaleUp}
    {...props}
  >
    {children}
  </motion.div>
)

export const AnimatedButton: React.FC<MotionDivProps> = ({ children, ...props }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    {...props}
  >
    {children}
  </motion.div>
) 