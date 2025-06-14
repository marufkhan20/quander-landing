"use client"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function ContentSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="px-4 sm:px-10 xl:px-0 max-w-[1240px] mx-auto flex flex-col gap-[17px] text-center py-16 lg:py-20 text-black/40 font-normal"
    >
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-2xl sm:text-3xl lg:text-4xl text-tight-compact leading-[136%]"
      >
        <span className="text-black">In a world where content is constant,</span> but attention is rare,
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-2xl sm:text-3xl lg:text-4xl text-tight-compact leading-[136%]"
      >
        Quander empowers small businesses to shape stories at scale.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-2xl sm:text-3xl lg:text-4xl text-tight-compact leading-[136%]"
      >
        Where ideas become motion, and automation fuels imagination.
      </motion.p>
    </motion.section>
  )
}
