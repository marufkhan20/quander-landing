"use client"
import { motion } from "framer-motion"
import Brands from "./brands"

export default function BrandsSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-16 lg:py-20 overflow-x-hidden"
    >
      <Brands />
    </motion.section>
  )
}
