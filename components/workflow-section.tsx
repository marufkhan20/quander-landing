"use client";
import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
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

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
      delay: 0.2,
    },
  },
};

// const videoCardVariants = {
//   hidden: { opacity: 0, x: -30 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       type: "spring",
//       stiffness: 120,
//       damping: 15,
//       staggerChildren: 0.1,
//     },
//   },
// };

export default function WorkflowSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      className="px-4 sm:px-10 xl:px-0 max-w-[1240px] mx-auto py-16 lg:py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 0.8,
        }}
        className="text-4xl sm:text-5xl lg:text-[64px] text-tight-compact font-normal text-center w-full lg:w-[60%] mx-auto leading-tight"
      >
        From Start To Final Ad
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 15,
          delay: 0.2,
        }}
        className="text-center mt-3 text-lg lg:text-xl text-tight-compact text-black/50"
      >
        You upload. We edit. Your brand goes viral.
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mt-8 lg:mt-12 flex flex-col gap-5"
      >
        {/* First Row */}
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Step 1 - Drop Your URL */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              y: -5,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            className="w-full lg:w-[40%] py-[40px] lg:py-[50px] px-[20px] lg:px-[30px] bg-black/[1%] backdrop-blur-[70.2px] border border-black/[18%] rounded-[30px] group cursor-pointer"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-5 mb-[30px] mx-4 lg:mx-7 min-h-[160px] flex items-center justify-center rounded-2xl"
              style={{
                backgroundImage: `url('/images/dashed-bg.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-16 bg-white rounded-full w-[90%] shadow flex items-center gap-[22px] px-5"
              >
                <Image
                  src="/images/icons/global.svg"
                  alt="global icon"
                  width={20}
                  height={20}
                />
                <input
                  type="url"
                  className="flex-1 focus:outline-none text-black/40 placeholder:text-black/40 text-base leading-[100%]"
                  placeholder="https://"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-[30px]"
            >
              <h3 className="text-lg lg:text-xl font-medium text-tight-compact group-hover:text-[#293deb] transition-colors duration-300">
                1. Drop Your URL
              </h3>
              <p className="mt-4 text-tight-compact text-black/50 text-sm lg:text-base">
                Share a link to your website — we'll instantly extract your
                brand colors, fonts, tone, and product info so the AI can create
                videos that feel 100% on-brand.
              </p>
            </motion.div>
          </motion.div>

          {/* Step 2 - Inspire the AI */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              y: -5,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            className="w-full lg:w-[60%] py-[40px] lg:py-[50px] px-[20px] lg:px-[30px] bg-black/[1%] backdrop-blur-[70.2px] border border-black/[18%] rounded-[30px] group cursor-pointer"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <h3 className="text-lg lg:text-xl font-medium text-tight-compact flex flex-wrap items-center gap-3 lg:gap-5 group-hover:text-[#293deb] transition-colors duration-300">
                2. Inspire the AI{" "}
                <span className="inline-block p-[8px] lg:p-[10px] rounded-full bg-black text-white text-tight-compact text-sm lg:text-base">
                  Optional
                </span>
              </h3>
              <p className="mt-4 text-tight-compact text-black/50 text-sm lg:text-base">
                Upload reference videos you love, or skip it and let us do the
                heavy lifting — our system can automatically select from 100+
                proven ad styles and performance-tested frameworks tailored to
                your industry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-5 grid grid-cols-4 lg:grid-cols-7 items-center gap-[10px] lg:gap-[14px] ml-0 lg:ml-9"
            >
              {[
                {
                  name: "Stone Gaze",
                  platform: "YouTube",
                  duration: "2min 17s",
                  image: "/images/1.png",
                },
                {
                  name: "Chrome Face",
                  platform: "TikTok",
                  duration: "47s",
                  image: "/images/2.png",
                },
                {
                  name: "Pixel Mind",
                  platform: "Instagram",
                  duration: "52s",
                  image: "/images/3.png",
                },
              ].map((video, index) => (
                <motion.div
                  key={video.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ delay: 1.0 + index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="col-span-2 p-[8px] lg:p-[10px] bg-white rounded-[10px] border border-black/20 border-dashed shadow cursor-pointer"
                >
                  <Image
                    src={video.image || "/placeholder.svg"}
                    alt={video.name}
                    width={100}
                    height={80}
                    className="w-full h-auto rounded-md"
                  />
                  <div className="mt-2.5">
                    <h4 className="font-semibold text-black/60 leading-[100%] text-xs lg:text-sm">
                      {video.name}
                    </h4>
                    <div className="mt-2.5 flex items-center gap-2">
                      <span className="text-xs text-black/50">
                        {video.platform}
                      </span>
                      <div className="size-1.5 rounded-full bg-black/20" />
                      <span className="text-xs text-black/50">
                        {video.duration}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ delay: 1.3, duration: 0.4 }}
                whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
                className="h-[120px] lg:h-[160px] border border-black/20 border-dashed rounded-[10px] flex items-center justify-center cursor-pointer transition-colors duration-300"
              >
                <Image
                  src="/images/icons/plus.png"
                  alt="Add more"
                  width={24}
                  height={24}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Step 3 - Connect Your Footage */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              y: -5,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            className="w-full lg:w-[60%] py-[40px] lg:py-[50px] px-[20px] lg:px-[30px] bg-black/[1%] backdrop-blur-[70.2px] border border-black/[18%] rounded-[30px] group cursor-pointer"
          >
            <motion.div
              variants={imageVariants}
              className="mt-[20px] lg:mt-[30px] flex justify-center"
            >
              <img
                src="/images/4.png"
                alt="Connect footage interface"
                className="rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-5"
            >
              <h3 className="text-lg lg:text-xl font-medium text-tight-compact group-hover:text-[#293deb] transition-colors duration-300">
                3. Connect Your Footage
              </h3>
              <p className="mt-4 text-tight-compact text-black/50 text-sm lg:text-base">
                If you have video content, simply upload it — our AI will
                analyze each scene, detect highlights, and match visual cues to
                create compelling edits that align with your goals, audience,
                and tone.
              </p>
            </motion.div>
          </motion.div>

          {/* Step 4 - Get Your Videos */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              y: -5,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            className="w-full lg:w-[40%] pt-[40px] lg:pt-[50px] px-[20px] lg:px-[30px] h-fit bg-black/[1%] backdrop-blur-[70.2px] border border-black/[18%] rounded-[30px] group cursor-pointer"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mb-5"
            >
              <h3 className="text-lg lg:text-xl font-medium text-tight-compact group-hover:text-[#293deb] transition-colors duration-300">
                4. Get Your Videos
              </h3>
              <p className="mt-4 text-tight-compact text-black/50 text-sm lg:text-base">
                Receive multiple video ad versions, optimized for formats like
                TikTok, Reels, YouTube Shorts, and more. Fully edited,
                trend-aware, and instantly ready to publish — no manual tweaking
                required.
              </p>
            </motion.div>

            <motion.div
              variants={imageVariants}
              className="flex justify-center"
            >
              <img src="/images/5.png" alt="Final video outputs" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
