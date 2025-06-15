"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import JoinWaitlistButton from "./join-waitlist-button";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      className="px-4 sm:px-10 xl:px-0 max-w-[1240px] mx-auto py-16 lg:py-20 flex flex-col gap-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="mt-8 lg:mt-12 text-4xl sm:text-5xl lg:text-[64px] text-tight-compact font-normal text-center mx-auto leading-tight"
      >
        Outperform. Outcreate. Outscale.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center text-lg lg:text-xl text-tight-compact text-black/50"
      >
        Join the brands replacing agencies with AI. Request your Quander demo
        today.
      </motion.p>

      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <JoinWaitlistButton size="md" />
        </motion.div>
      </div>
    </motion.section>
  );
}
