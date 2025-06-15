"use client";
import { useWaitlist } from "@/contexts/waitlist-context";
import { motion } from "framer-motion";
import type React from "react";

interface JoinWaitlistButtonProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
  children?: React.ReactNode;
}

export default function JoinWaitlistButton({
  className = "",
  size = "md",
  variant = "primary",
  children = "Join Waitlist",
}: JoinWaitlistButtonProps) {
  const { openModal } = useWaitlist();

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 lg:px-8 py-3 lg:py-4 text-lg lg:text-xl",
    lg: "px-8 lg:px-10 py-4 lg:py-5 text-xl lg:text-2xl",
  };

  const variantClasses = {
    primary: "join-btn text-white",
    secondary:
      "bg-white text-[#293deb] border-2 border-[#293deb] hover:bg-[#293deb] hover:text-white",
  };

  return (
    <motion.button
      onClick={openModal}
      whileHover={{
        scale: 1.05,
        boxShadow:
          variant === "primary"
            ? "0 10px 30px rgba(41, 61, 235, 0.3)"
            : "0 5px 20px rgba(41, 61, 235, 0.2)",
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.4,
      }}
      className={`
        ${sizeClasses[size]} 
        ${variantClasses[variant]}
        rounded-full cursor-pointer transition-all text-tight-compact
        ${className}
      `}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
}
