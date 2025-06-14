"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"

const faqs = [
  {
    id: 1,
    question: "What kind of footage can I upload?",
    answer: "Answering the above question blah blah.",
  },
  {
    id: 2,
    question: "Do I need to edit anything myself?",
    answer: "Answering the above question blah blah.",
  },
  {
    id: 3,
    question: "Can I use AI-generated avatars or B-rolls?",
    answer: "Answering the above question blah blah.",
  },
  {
    id: 4,
    question: "What platforms are the videos optimized for?",
    answer: "Answering the above question blah blah.",
  },
]

export default function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showFaq, setShowFaq] = useState<number | null>(null)

  return (
    <motion.section
      ref={ref}
      className="px-4 sm:px-10 xl:px-0 max-w-[1240px] mx-auto py-16 lg:py-20 flex flex-col items-center justify-center gap-14"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl sm:text-5xl lg:text-[64px] text-tight-compact"
      >
        FAQ
      </motion.h2>

      <div className="w-full max-w-[500px] flex flex-col gap-8">
        {faqs.map((faq, idx) => (
          <motion.div
            key={faq.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`pb-8 ${idx + 1 !== faqs.length && "border-b"} border-black/[17%]`}
          >
            <div
              className="flex items-center justify-between gap-2 cursor-pointer"
              onClick={() => setShowFaq(showFaq === faq.id ? null : faq.id)}
            >
              <h3 className="text-xl lg:text-2xl text-tight-compact leading-6">{faq.question}</h3>
              <motion.div animate={{ rotate: showFaq === faq.id ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <Image src="/images/icons/arrow.svg" alt="arrow" width={20} height={20} />
              </motion.div>
            </div>

            <AnimatePresence>
              {showFaq === faq.id && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-base text-black/50 text-tight-compact leading-6"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
