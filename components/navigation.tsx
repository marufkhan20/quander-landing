"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex px-4 sm:px-10 xl:px-0 max-w-[1240px] mx-auto items-center justify-between gap-5 mt-10"
    >
      <Link href="/">
        <img src="/images/logo.png" alt="quander" className="h-auto" />
      </Link>

      <ul className="hidden md:flex items-center gap-4">
        <li>
          <Link
            href="#"
            className="text-lg lg:text-xl font-regular transition-all hover:text-[#293deb] text-tight-compact"
          >
            Examples
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="text-lg lg:text-xl font-regular transition-all hover:text-[#293deb] text-tight-compact"
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="text-lg lg:text-xl font-regular transition-all hover:text-[#293deb] text-tight-compact"
          >
            Testimonials
          </Link>
        </li>
      </ul>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 lg:px-8 py-3 lg:py-4 rounded-full text-white text-lg lg:text-xl join-btn cursor-pointer transition-all text-tight-compact"
      >
        Join Waitlist
      </motion.button>
    </motion.nav>
  );
}
