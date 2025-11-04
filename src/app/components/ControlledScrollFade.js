"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export function ControlledScrollFade({ sentences }) {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const scrollCount = useRef(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const inView =
        rect.top <= window.innerHeight * 0.5 &&
        rect.bottom >= window.innerHeight * 0.5;

      if (!inView) return;

      e.preventDefault();
      scrollCount.current++;

      if (scrollCount.current >= 3 && visibleIndex < sentences.length - 1) {
        setVisibleIndex((prev) => prev + 1);
        scrollCount.current = 0;
      } else if (
        scrollCount.current >= 3 &&
        visibleIndex >= sentences.length - 1
      ) {
        window.removeEventListener("wheel", handleWheel, { passive: false });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [visibleIndex, sentences.length]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="max-w-4xl mx-auto my-20 px-6 text-center min-h-screen flex flex-col justify-center"
    >
      <h2
        className="font-bold mb-8"
        style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
      >
        About Me
      </h2>

      <div className="space-y-6">
        {sentences.map((text, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: index <= visibleIndex ? 1 : 0, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="text-gray-400"
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}
          >
            {index <= visibleIndex ? text : ""}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
