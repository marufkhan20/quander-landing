"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import JoinWaitlistButton from "./join-waitlist-button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  return (
    <>
      {/* Spacer to prevent content jump */}
      <div className="h-20 lg:h-24" />

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-40"
      >
        <motion.div
          animate={{
            backgroundColor: isScrolled
              ? "rgba(255, 255, 255, 0.95)"
              : "rgba(255, 255, 255, 0)",
            backdropFilter: isScrolled ? "blur(20px)" : "blur(0px)",
            boxShadow: isScrolled
              ? "0 4px 20px rgba(0, 0, 0, 0.08)"
              : "0 0 0 rgba(0, 0, 0, 0)",
            borderBottom: isScrolled
              ? "1px solid rgba(0, 0, 0, 0.08)"
              : "1px solid rgba(0, 0, 0, 0)",
          }}
          transition={{
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth feel
          }}
          className="w-full"
        >
          <motion.div
            animate={{
              paddingTop: isScrolled ? "12px" : "40px",
              paddingBottom: isScrolled ? "12px" : "40px",
            }}
            transition={{
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="flex px-4 sm:px-10 xl:px-0 max-w-[1240px] mx-auto items-center justify-between gap-5"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Link href="/">
                <motion.div
                  animate={{
                    scale: isScrolled ? 0.9 : 1,
                  }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Image
                    src="/images/logo.png"
                    alt="quander"
                    width={120}
                    height={40}
                    className="h-auto"
                  />
                </motion.div>
              </Link>
            </motion.div>

            <ul className="hidden md:flex items-center gap-6 lg:gap-8">
              {["Examples", "Pricing", "Testimonials"].map((item, index) => (
                <li key={item}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Link
                      href="#"
                      className="relative text-lg lg:text-xl font-regular transition-all duration-300 hover:text-[#293deb] text-tight-compact group"
                    >
                      <motion.span
                        animate={{
                          fontSize: isScrolled ? "16px" : "20px",
                        }}
                        transition={{
                          duration: 0.4,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      >
                        {item}
                      </motion.span>
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#293deb] origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>

            <motion.div
              animate={{
                scale: isScrolled ? 1 : 1,
              }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.button
                onClick={() => {
                  /* Will be handled by JoinWaitlistButton */
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 25px rgba(41, 61, 235, 0.25)",
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  paddingLeft: isScrolled ? "20px" : "32px",
                  paddingRight: isScrolled ? "20px" : "32px",
                  paddingTop: isScrolled ? "10px" : "16px",
                  paddingBottom: isScrolled ? "10px" : "16px",
                  fontSize: isScrolled ? "16px" : "20px",
                }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="join-btn text-white rounded-full cursor-pointer text-tight-compact font-medium"
              >
                <JoinWaitlistButton className="!p-0 !bg-transparent !text-inherit !rounded-none !shadow-none hover:!scale-100 hover:!shadow-none">
                  Join Waitlist
                </JoinWaitlistButton>
              </motion.button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                scale: isScrolled ? 0.9 : 1,
              }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <motion.div className="w-5 h-0.5 bg-black mb-1 rounded-full" />
                <motion.div className="w-5 h-0.5 bg-black mb-1 rounded-full" />
                <motion.div className="w-5 h-0.5 bg-black rounded-full" />
              </div>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.nav>
    </>
  );
}
