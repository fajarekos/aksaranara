"use client";

import { motion } from "framer-motion"
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useRef, useLayoutEffect, useState } from "react"

interface Step {
  id: string
  number: string
  title: string
  description: string
}

const steps: Step[] = [
  {
    id: "step1",
    number: "001",
    title: "Let's Get In Touch",
    description:"Start by reaching out through our contact page. Fill out the form or book a call to discuss your project, goals, and ideas in even greater detail.",
  },
  {
    id: "step2",
    number: "002",
    title: "Grab Your Designs",
    description:"Tell me your unique vision, and I'll create stunning, functional designs that perfectly align with your goals and bring your ideas to life seamlessly.",
    
  },
  {
    id: "step3",
    number: "003",
    title: "Kickstart Development",
    description:"Once designs are approved, I'll transform them into clean, efficient code using modern tech stack. Full documentation and support included.",
  },
]

function StepCard({
    step,
    index,
    isLast,
  }: {
    step: Step
    index: number
    isLast: boolean
  }) {
    const { ref: scrollRef, isVisible } = useScrollReveal()
    const cardRef = useRef<HTMLDivElement>(null)
    const [cardHeight, setCardHeight] = useState(0)
  
    // Measure card height dynamically
    useLayoutEffect(() => {
      const measureHeight = () => {
        if (cardRef.current) {
          const height = cardRef.current.offsetHeight
          setCardHeight(height)
        }
      }
  
      // Measure initially
      measureHeight()
  
      // Re-measure on window resize
      window.addEventListener("resize", measureHeight)
      return () => window.removeEventListener("resize", measureHeight)
    }, [])
  
    return (
      <div ref={scrollRef} className="mb-0 flex gap-6">
        {/* Vertical Timeline */}
        <div className="flex flex-col items-center">
          {/* Dot - always visible, scales on intersection */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-4 h-4 bg-gray-900 rounded-full"
          ></motion.div>
  
          {/* Line - dynamic height, only show if not last */}
          {!isLast && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={
                isVisible
                  ? { height: cardHeight + 24, opacity: 1 }
                  : { height: 0, opacity: 0 }
              }
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="w-1 bg-gradient-to-b from-gray-300 to-gray-200"
            ></motion.div>
          )}
        </div>
  
        {/* Card Content */}
        <motion.div
          ref={cardRef}
          initial={{ x: 48, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : { x: 48, opacity: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.3,
          }}
          className="flex-1 bg-gray-50 rounded-lg p-8 border border-gray-200 mb-6"
        >
          {/* Step Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm text-gray-500 font-medium mb-4"
          >
            step{index + 1}
          </motion.div>
  
          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            {step.title}
          </motion.h3>
  
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-600 leading-relaxed mb-8"
          >
            {step.description}
          </motion.p>
  
          {/* Icon & Number */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center justify-between"
          >
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={
                isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
              }
              transition={{ duration: 0.5, delay: 0.9 }}
              className="text-gray-400 text-lg font-light"
            >
              - {step.number}
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    )
  }

export function ExperienceTimeline() {   
    
    return (
        <div
            id="experience" 
            className="px-6 py-20">
            <div className="mx-auto rounded-lg p-12 lg:p-16">
                {/* Heading */}
                <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-5xl font-bold text-gray-900 mb-20"
                >
                My Journey
                </motion.h2>
                <div>
                {steps.map((step, index) => (
                    <StepCard key={step.id} step={step} index={index} />
                ))}
                </div>
            </div>
        </div>
    )
}