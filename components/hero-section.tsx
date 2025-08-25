"use client";
import { motion } from "framer-motion";
import JoinWaitlistButton from "./join-waitlist-button";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[600px] lg:h-[700px] flex items-center justify-center">
      {/* <div className="absolute inset-0 z-0">
        <Threads
          amplitude={5}
          distance={0.7}
          enableMouseInteraction={false}
          // color={[154, 154, 154]}
        />
      </div> */}

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg lg:text-xl p-[18px] lg:p-[22px] bg-[#F3F3F3] rounded-full inline-block mb-6 lg:mb-8 text-tight-compact"
        >
          The AI Marketing Agent
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-regular text-tight-compact mb-6 lg:mb-8 leading-tight"
        >
          The Revenue Engine For <br className="hidden sm:block" /> Consumer
          Businesses
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-black/50 text-lg lg:text-xl mb-6 lg:mb-8 text-tight-compact max-w-2xl"
        >
          A multi-channel revenue engine supercharged with AI to do your
          marketing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <JoinWaitlistButton size="md" />
        </motion.div>
      </div>
    </section>
  );
}
