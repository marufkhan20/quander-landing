"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

const testimonials = [
  "/images/brands/1.png",
  "/images/brands/2.png",
  "/images/brands/3.png",
  "/images/brands/4.png",
  "/images/brands/5.png",
  "/images/brands/6.png",
  "/images/brands/7.png",
  "/images/brands/8.png",
  "/images/brands/9.png",
  "/images/brands/10.png",
];

export default function Brands() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ delay: 2000, stopOnInteraction: false }),
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full mx-auto"
    >
      <div className="overflow-visible" ref={emblaRef}>
        <div className="flex justify-between gap-8 lg:gap-11 -mx-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="flex-[0_0_10%] flex-shrink-0"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={item || "/placeholder.svg"}
                alt={`Brand ${index + 1}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
