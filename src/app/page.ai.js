"use client";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const anton = Inter({ subsets: ["latin"], weight: "900" });

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative flex flex-col items-center bg-[#031a2e] text-white min-h-screen p-8">
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 w-full bg-gray-800 backdrop-blur-md transition-all duration-300 text-white flex justify-center items-center ${isScrolled ? "translate-y-0" : "-translate-y-full"
          }`}
        style={{ height: isScrolled ? "70px" : "120px" }}
      >
        <h2
          className={`transition-all duration-500 ${isScrolled ? "text-2xl" : "text-4xl"
            }`}
          style={{
            transform: isScrolled ? "scale(0.8)" : "scale(1)",
          }}
        >
          JACOB'S PORTFOLIO
        </h2>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center">
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left transition-all duration-700 ease-out"
          style={{
            transform: isScrolled
              ? "scale(0.6) translateY(-250%)"
              : "scale(1) translateY(0)",
          }}
        >
          {/* "JACOB'S" */}
          <h1
            className="font-black leading-none tracking-tight"
            style={{
              fontFamily: "Impact, sans-serif",
              fontSize: "clamp(8rem, 20vw, 18rem)",
              lineHeight: "0.85",
              textAlign: "left",
              transition: "all 0.6s ease-out",
            }}
          >
            JACOB'S
          </h1>

          {/* "Mechanical Engineering" */}
          <p
            className="text-gray-400 font-light"
            style={{
              fontSize: "clamp(1.5rem, 5vw, 3rem)",
              textAlign: "left",
              marginRight: "auto",
              transition: "all 0.6s ease-out",
            }}
          >
            Mechanical Engineering
          </p>

          {/* PORTFOLIO TEXT (Double Layer for White Border Effect) */}
          <div className="relative">
            <h1
              className="absolute inset-0 font-black tracking-tight text-white"
              style={{
                fontFamily: "Impact, sans-serif",
                fontSize: "clamp(8rem, 20vw, 22rem)",
                lineHeight: "0.85",
                WebkitTextStroke: "6px white",
                WebkitTextFillColor: "transparent",
                transition: "all 0.6s ease-out",
              }}
            >
              PORTFOLIO
            </h1>

            <h1
              className="relative font-black tracking-tight"
              style={{
                fontFamily: "Impact, sans-serif",
                fontSize: "clamp(8rem, 20vw, 22rem)",
                lineHeight: "0.85",
                backgroundImage: "url('/images/RobotArm.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center 80%",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textAlign: "left",
                transition: "all 0.6s ease-out",
              }}
            >
              PORTFOLIO
            </h1>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="max-w-5xl text-center my-20 px-6">
        <h2
          className="font-bold mb-6"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
        >
          About Me
        </h2>

        <div
          className="space-y-6 text-gray-400"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}
        >
          {[
            "Welcome.",
            "This portfolio is a glimpse into my:",
            "- Work\n- Passions\n- Growth",
            "So—who am I, really?",
            "I’m a mechanical engineer in the early stages of a career fueled by curiosity, creativity, and the desire to build something that matters.",
            "In 2022, I graduated from Missouri University of Science and Technology with a Bachelor of Science in Mechanical Engineering, with an emphasis in Mechanical Design and Analysis.",
            "Since then, I’ve been designing full-time at Hitachi, just outside Missouri’s capital. Our factory is one of North America's largest producers of single- and three-phase transformers.",
            "Every day, I dive into the mechanics of product design—solving real-world challenges for real-world industries.",
            "So far, I’ve worked on systems for:",
            "- Renewable Energy\n- Data Centers\n- Utility Customers\n- Infrastructure Development",
            "But engineering isn’t just a job title to me—",
            "It’s a language I speak. It’s what I live and breathe.",
            "Scroll on, and I’ll show you some of the projects I’m most proud of:",
          ].map((text, index) => {
            // Framer Motion + IntersectionObserver hook
            const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
            const controls = useAnimation();

            useEffect(() => {
              if (inView) controls.start({ opacity: 1, y: 0 });
            }, [inView, controls]);

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {text.split("\n").map((line, i) => (
                  <p
                    key={i}
                    className={line.startsWith("-") ? "text-left ml-6" : ""}
                  >
                    {line}
                  </p>
                ))}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-4xl my-20 px-6">
        <h2
          className="font-bold text-center mb-8"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
        >
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-800 rounded-lg text-center">
            <h3
              className="font-semibold"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
            >
              Mars Rover Design Team
            </h3>
            <p
              className="text-gray-400 mt-2"
              style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
            >
              The passion project of my undergraduate education.
            </p>
            <a
              href="/mars-rover"
              className="mt-4 inline-block px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg transition-transform transform hover:scale-105 active:scale-95 shadow-lg hover:bg-blue-700"
              style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}
            >
              View Project 🚀
            </a>
          </div>

          <div className="p-6 bg-gray-800 rounded-lg text-center">
            <h3
              className="font-semibold"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
            >
              Custom Go-Kart
            </h3>
            <p
              className="text-gray-400 mt-2"
              style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
            >
              A high-performance go-kart with a custom frame and advanced stress analysis.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
