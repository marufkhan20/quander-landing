"use client";
import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8,
    },
  },
};

const floatingVariants: Variants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const circleVariants: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      className="px-4 sm:px-10 xl:px-0 max-w-[1240px] mx-auto py-16 lg:py-20 relative"
    >
      <div className="text-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            duration: 0.6,
          }}
          className="text-center text-lg lg:text-xl text-tight-compact text-black p-[18px] lg:p-[22px] rounded-full bg-[#F5F5F5] inline-block"
        >
          From 0 to 100
        </motion.span>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: 0.2,
          duration: 0.8,
        }}
        className="mt-8 lg:mt-12 text-4xl sm:text-5xl lg:text-[64px] text-tight-compact font-normal text-center w-full lg:w-[60%] mx-auto leading-tight"
      >
        Create Unlimited, On-Brand Visuals, in Minutes.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 15,
          delay: 0.4,
          duration: 0.6,
        }}
        className="text-center mt-3 text-lg lg:text-xl text-tight-compact text-black/50"
      >
        Take control of your story and spread it with the world.
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mt-8 lg:mt-12 space-y-8 lg:space-y-12"
      >
        {/* Video Creative Card */}
        <motion.div
          variants={cardVariants}
          whileHover={{
            scale: 1.02,
            y: -5,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
          className="ad-item border border-black/10 rounded-4xl grid grid-cols-1 lg:grid-cols-2 gap-7 overflow-hidden cursor-pointer group"
        >
          <div className="p-6 lg:ml-[70px] h-full flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[64px] text-tight-compact mb-5 leading-tight group-hover:text-[#293deb] transition-colors duration-300">
              Video Creatives That Convert
            </h2>
            <p className="text-lg lg:text-xl text-tight-compact">
              Transform simple images into cinematic visuals that convert.
              Create branded content in seconds — no studio, no team, no limits.
            </p>
          </div>

          <div className="flex justify-center relative p-6">
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative"
            >
              <Image
                className="w-[250px] lg:w-[300px] -mb-20 mt-[52px] rounded-[28px] border-4 border-white shadow-2xl"
                src="/images/ad.gif"
                alt="ad"
                width={300}
                height={400}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="absolute top-[100px] left-0 right-6 p-7 bg-black/30 rounded-[22px] backdrop-blur-[88.8px] flex items-center justify-center flex-col gap-4"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="size-[38px] bg-[#293DEB] rounded-full flex items-center justify-center"
              >
                <Image
                  src="/images/icons/upload.svg"
                  alt="upload icon"
                  width={20}
                  height={20}
                />
              </motion.div>
              <p className="text-xs text-white/70 leading-[100%]">
                <span className="text-white">Click to upload</span> or just use
                drag & drop
              </p>
              <p className="text-xs text-white/40 leading-[100%]">
                PDF, JPG, PNG, MP4, MOV, TTF, OTF
              </p>
            </motion.div>

            <div className="absolute inset-0 -top-[8%] size-[600px] flex items-center justify-center -z-10">
              <motion.div
                variants={circleVariants}
                animate="animate"
                className="size-full rounded-full border border-black/10 flex items-center justify-center"
              >
                <motion.div
                  variants={circleVariants}
                  animate="animate"
                  style={{ animationDirection: "reverse" }}
                  className="size-[480px] rounded-full border border-black/10 flex items-center justify-center"
                >
                  <div className="size-[350px] rounded-full border border-black/10" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Static Ads Card */}
        <motion.div
          variants={cardVariants}
          whileHover={{
            scale: 1.02,
            y: -5,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
          className="ad-item border border-black/10 rounded-4xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden px-6 lg:px-16 cursor-pointer group"
        >
          <motion.div
            transition={{ delay: 1.4, duration: 0.8 }}
            className="py-11 order-2 lg:order-1"
          >
            <div className="relative size-[432px] mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.6, duration: 0.6 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="absolute left-0 top-[50%] transform translate-y-[-50%]"
              >
                <img src="/images/ads/ad-1.png" alt="ad" />
              </motion.div>

              <div className="absolute left-[50%] top-0 transform translate-x-[-50%]">
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.8, duration: 0.6 }}
                  whileHover={{ scale: 1.1, rotate: -2 }}
                >
                  <img src="/images/ads/ad-2.png" alt="ad" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: -45 } : {}}
                  transition={{ delay: 2.0, duration: 0.6 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <img src="/images/ads/ad-4.png" alt="ad" />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 2.2, duration: 0.6 }}
                whileHover={{ scale: 1.1, rotate: -2 }}
                className="absolute right-0 top-[50%] transform translate-y-[-50%] -z-10"
              >
                <img src="/images/ads/ad-3.png" alt="ad" />
              </motion.div>
            </div>
          </motion.div>

          <div className="h-full flex flex-col justify-center text-center lg:text-left order-1 lg:order-2 py-6">
            <motion.h2
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-[64px] text-tight-compact mb-5 leading-tight group-hover:text-[#293deb] transition-colors duration-300"
            >
              Static Ads <br />
              that win
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="text-lg lg:text-xl text-tight-compact"
            >
              From bland to bold. Instantly generate static ads that grab
              attention and drive clicks — without lifting a finger.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      <div className="flex justify-center mt-8 lg:mt-12">
        <motion.button
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 2.4,
            duration: 0.6,
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(41, 61, 235, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          className="px-6 lg:px-8 py-3 lg:py-4 rounded-full text-white text-lg lg:text-xl join-btn cursor-pointer transition-all text-tight-compact"
        >
          Join Waitlist
        </motion.button>
      </div>
    </motion.section>
  );
}
