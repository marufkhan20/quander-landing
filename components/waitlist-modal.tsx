"use client";
import { useWaitlist } from "@/contexts/waitlist-context";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { X } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

const modalVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 50,
    transition: { duration: 0.2 },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
      delay: 0.2,
      duration: 0.6,
    },
  },
};

const inputContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
};

const inputVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      duration: 0.5,
    },
  },
};

const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      delay: 0.8,
      duration: 0.6,
    },
  },
};

export default function WaitlistModal() {
  const { isOpen, closeModal } = useWaitlist();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    source: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  // Handle ESC key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, closeModal]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    closeModal();

    // Reset form
    setFormData({
      name: "",
      email: "",
      description: "",
      source: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleInputFocus = (fieldName: string) => {
    setFocusedInput(fieldName);
  };

  const handleInputBlur = () => {
    setFocusedInput(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={handleOverlayClick}
          className="w-full h-screen fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-[430px] bg-white rounded-3xl border border-[#E1E1E1] py-8 lg:py-10 px-4 lg:px-6 relative max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              whileHover={{ scale: 1.1, backgroundColor: "#f3f4f6" }}
              whileTap={{ scale: 0.9 }}
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X size={20} className="text-gray-600 cursor-pointer" />
            </motion.button>

            <motion.h2
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-3xl lg:text-4xl text-tight-compact capitalize leading-tight"
            >
              Experience the <br />
              future of marketing.
            </motion.h2>

            <motion.form
              onSubmit={handleSubmit}
              variants={inputContainerVariants}
              initial="hidden"
              animate="visible"
              className="mt-5 flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <motion.div
                  variants={inputVariants}
                  className="flex flex-col gap-1.5"
                >
                  <motion.label
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    htmlFor="name"
                    className="text-sm font-medium"
                  >
                    Name*
                  </motion.label>
                  <motion.input
                    type="text"
                    placeholder="Enter your first name"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    onFocus={() => handleInputFocus("name")}
                    onBlur={handleInputBlur}
                    required
                    whileFocus={{
                      scale: 1.02,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      },
                    }}
                    animate={{
                      borderColor:
                        focusedInput === "name"
                          ? "#293deb"
                          : "rgba(0, 0, 0, 0.2)",
                      boxShadow:
                        focusedInput === "name"
                          ? "0 0 0 3px rgba(41, 61, 235, 0.1)"
                          : "0px 2px 8px 0px rgba(0, 0, 0, 0.08)",
                    }}
                    transition={{ duration: 0.2 }}
                    className="w-full outline-none bg-white input-shadow rounded-full py-[14px] px-5 text-sm border border-black/20 placeholder:text-black/50"
                  />
                </motion.div>

                <motion.div
                  variants={inputVariants}
                  className="flex flex-col gap-1.5"
                >
                  <motion.label
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                    htmlFor="email"
                    className="text-sm font-medium"
                  >
                    Email Address*
                  </motion.label>
                  <motion.input
                    type="email"
                    placeholder="hello@example.com"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    onFocus={() => handleInputFocus("email")}
                    onBlur={handleInputBlur}
                    required
                    whileFocus={{
                      scale: 1.02,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      },
                    }}
                    animate={{
                      borderColor:
                        focusedInput === "email"
                          ? "#293deb"
                          : "rgba(0, 0, 0, 0.2)",
                      boxShadow:
                        focusedInput === "email"
                          ? "0 0 0 3px rgba(41, 61, 235, 0.1)"
                          : "0px 2px 8px 0px rgba(0, 0, 0, 0.08)",
                    }}
                    transition={{ duration: 0.2 }}
                    className="w-full outline-none bg-white input-shadow rounded-full py-[14px] px-5 text-sm border border-black/20 placeholder:text-black/50"
                  />
                </motion.div>
              </div>

              <motion.div
                variants={inputVariants}
                className="flex flex-col gap-1.5"
              >
                <motion.label
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                  htmlFor="description"
                  className="text-sm font-medium"
                >
                  How would you describe yourself?*
                </motion.label>
                <motion.input
                  type="text"
                  placeholder="Ex: Founder"
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  onFocus={() => handleInputFocus("description")}
                  onBlur={handleInputBlur}
                  required
                  whileFocus={{
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  animate={{
                    borderColor:
                      focusedInput === "description"
                        ? "#293deb"
                        : "rgba(0, 0, 0, 0.2)",
                    boxShadow:
                      focusedInput === "description"
                        ? "0 0 0 3px rgba(41, 61, 235, 0.1)"
                        : "0px 2px 8px 0px rgba(0, 0, 0, 0.08)",
                  }}
                  transition={{ duration: 0.2 }}
                  className="w-full outline-none bg-white input-shadow rounded-full py-[14px] px-5 text-sm border border-black/20 placeholder:text-black/50"
                />
              </motion.div>

              <motion.div
                variants={inputVariants}
                className="flex flex-col gap-1.5"
              >
                <motion.label
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                  htmlFor="source"
                  className="text-sm font-medium"
                >
                  How'd you hear about us? (optional)
                </motion.label>
                <motion.input
                  type="text"
                  placeholder="Ex: Instagram, TikTok"
                  id="source"
                  value={formData.source}
                  onChange={(e) => handleInputChange("source", e.target.value)}
                  onFocus={() => handleInputFocus("source")}
                  onBlur={handleInputBlur}
                  whileFocus={{
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  animate={{
                    borderColor:
                      focusedInput === "source"
                        ? "#293deb"
                        : "rgba(0, 0, 0, 0.2)",
                    boxShadow:
                      focusedInput === "source"
                        ? "0 0 0 3px rgba(41, 61, 235, 0.1)"
                        : "0px 2px 8px 0px rgba(0, 0, 0, 0.08)",
                  }}
                  transition={{ duration: 0.2 }}
                  className="w-full outline-none bg-white input-shadow rounded-full py-[14px] px-5 text-sm border border-black/20 placeholder:text-black/50"
                />
              </motion.div>

              <motion.div variants={buttonVariants}>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{
                    scale: isSubmitting ? 1 : 1.05,
                    boxShadow: isSubmitting
                      ? "none"
                      : "0 10px 30px rgba(41, 61, 235, 0.3)",
                  }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  animate={{
                    opacity: isSubmitting ? 0.8 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                  className="w-full px-6 lg:px-8 py-3 lg:py-4 rounded-full text-white text-base join-btn cursor-pointer transition-all text-tight-compact disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                      <motion.span
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        Joining...
                      </motion.span>
                    </motion.div>
                  ) : (
                    <motion.span
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      Join Waitlist
                    </motion.span>
                  )}
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
