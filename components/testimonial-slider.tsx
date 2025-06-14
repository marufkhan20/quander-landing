"use client";
import clsx from "clsx";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const testimonials = [
  {
    text: "Quander helped me save over $200k in Marketing. Without Quander, I would've completely lost my business.",
    author: "Joseph Domingo",
    meta: "28, San Francisco",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "This platform gave me back control. Simple, powerful, and effective.",
    author: "Sarah Lee",
    meta: "32, New York",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "An essential tool in our company. Highly recommend it to every startup.",
    author: "Michael Chen",
    meta: "35, Austin",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
];

export default function TestimonialSlider() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    embla.on("reInit", onSelect);
    onSelect();
  }, [embla, onSelect]);

  const scrollTo = (index: number) => {
    if (!embla) return;
    embla.scrollTo(index);
  };

  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Dot navigation */}
      <div className="flex justify-center mb-9 gap-2">
        {testimonials.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => scrollTo(i)}
            className="relative overflow-hidden bg-gray-300"
            animate={{
              width: selectedIndex === i ? 60 : 12,
              backgroundColor: selectedIndex === i ? "#2563eb" : "#d1d5db",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
              height: "12px",
              borderRadius: "9999px",
            }}
          />
        ))}
      </div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8 text-lg lg:text-xl text-tight-compact"
      >
        Join 150,000+ people taking control of their health
      </motion.p>

      {/* Carousel */}
      <div className="overflow-visible" ref={emblaRef}>
        <div className="flex -mx-6">
          {testimonials.map((item, index) => (
            <div key={index} className="flex-[0_0_80%] px-6 flex-shrink-0">
              <motion.div
                className={clsx(
                  "p-6 rounded-lg transition-opacity transition-transform duration-500 ease-in-out text-center",
                  selectedIndex === index
                    ? "opacity-100 scale-100"
                    : "opacity-50 scale-95"
                )}
                animate={{
                  scale: selectedIndex === index ? 1 : 0.95,
                  opacity: selectedIndex === index ? 1 : 0.5,
                }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xl md:text-3xl lg:text-4xl text-tight-compact mb-8 font-normal">
                  &quot;{item.text}&quot;
                </p>
                <div className="flex justify-center items-center gap-6">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.author}
                    className="size-[60px] rounded-full"
                    width={60}
                    height={60}
                  />
                  <div className="text-left flex flex-col gap-1">
                    <p className="text-lg text-tight-compact">{item.author}</p>
                    <p className="text-lg text-tight-compact text-black/50">
                      {item.meta}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
