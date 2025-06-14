"use client";
import { motion } from "framer-motion";
import TestimonialSlider from "./testimonial-slider";

export default function TestimonialSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="overflow-x-hidden py-20 lg:py-28 relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <TestimonialSlider />
    </motion.section>
  );
}
