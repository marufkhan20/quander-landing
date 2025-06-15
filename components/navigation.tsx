"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import JoinWaitlistButton from "./join-waitlist-button";

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

      <JoinWaitlistButton size="md" />
    </motion.nav>
  );
}
