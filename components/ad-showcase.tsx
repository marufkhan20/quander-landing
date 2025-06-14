"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function AdShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      className="px-4 sm:px-10 xl:px-0 max-w-[1240px] mx-auto py-16 lg:py-20"
    >
      <div className="text-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.6 }}
          className="text-center text-lg lg:text-xl text-tight-compact text-black p-[18px] lg:p-[22px] rounded-full bg-[#F5F5F5] inline-block"
        >
          Hundreds of quality ads generated in minutes.
        </motion.span>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-8 lg:mt-12 text-4xl sm:text-5xl lg:text-[64px] text-tight-compact font-normal text-center w-full lg:w-[60%] mx-auto leading-tight"
      >
        No Matter What You Have, We Handle the Rest
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-8 lg:mt-12"
      >
        <Image
          src="/images/ads/ad-banner.png"
          alt="ad banner"
          width={1240}
          height={600}
          className="w-full h-auto rounded-2xl hidden sm:block"
        />

        <Image
          src="/images/ads/ad-banner-mobile.png"
          alt="ad banner"
          width={1240}
          height={600}
          className="w-full h-auto rounded-2xl block sm:hidden"
        />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-6 lg:mt-8 text-center text-4xl sm:text-5xl lg:text-[64px] text-tight-compact mb-6"
      >
        Online Ad Campaigns
      </motion.h2>

      <div className="flex justify-center">
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 lg:px-8 py-3 lg:py-4 rounded-full text-white text-lg lg:text-xl join-btn cursor-pointer transition-all text-tight-compact"
        >
          Join Waitlist
        </motion.button>
      </div>
    </motion.section>
  );
}
