"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      className="px-4 sm:px-10 xl:px-0 max-w-[1240px] mx-auto py-16 lg:py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <img src="/images/footer-logo.png" alt="quander" className="mx-auto" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-14 flex flex-col justify-center items-center"
      >
        <ul className="flex items-center gap-6 flex-wrap justify-center">
          <li>
            <Link
              href="#"
              className="text-tight-compact hover:text-[#293deb] transition-colors"
            >
              Privacy Policy
            </Link>
          </li>
          <div className="size-[3px] bg-black rounded-full" />
          <li>
            <Link
              href="#"
              className="text-tight-compact hover:text-[#293deb] transition-colors"
            >
              Terms & Conditions
            </Link>
          </li>
        </ul>

        <p className="mt-5 text-tight-compact text-center">
          © 2025 Quander Technologies Inc. All rights reserved.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <Link href="#" className="transition-all hover:scale-110">
            <Image
              src="/images/icons/facebook.svg"
              alt="facebook"
              width={24}
              height={24}
            />
          </Link>
          <Link href="#" className="transition-all hover:scale-110">
            <Image src="/images/icons/x.svg" alt="x" width={24} height={24} />
          </Link>
          <Link href="#" className="transition-all hover:scale-110">
            <Image
              src="/images/icons/discord.svg"
              alt="discord"
              width={24}
              height={24}
            />
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
}
