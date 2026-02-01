// page.js

"use client";
import { useEffect, useState } from "react";

export default function Home() {
    const [scrolled, setScrolled] = useState(false);
    const [visibleItems, setVisibleItems] = useState([]);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > window.innerHeight * 0.3);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    useEffect(() => {
        const items = document.querySelectorAll(".timeline-item");

        requestAnimationFrame(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setVisibleItems((prev) =>
                                prev.includes(entry.target.dataset.index)
                                    ? prev
                                    : [...prev, entry.target.dataset.index]
                            );
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.5 }
            );

            items.forEach((item) => observer.observe(item));
        });
    }, []);
    return (
        <div className="min-h-screen bg-black text-white">
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
                    ? "bg-black/80 backdrop-blur-md h-16"
                    : "bg-transparent h-32"
                    }`}
            >
                <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">
                    <span
                        className={`font-semibold tracking-wide transition-all duration-500 ${scrolled ? "opacity-100 scale-100" : "opacity-0 scale-75"
                            }`}
                    >
                        JT
                    </span>

                    <nav className={`space-x-6 text-sm uppercase tracking-wider transition-all duration-500 ${scrolled ? "opacity-100 scale-100" : "opacity-0 scale-75"
                        }`}
                    >
                        <a href="#hero" className="opacity-80 hover:opacity-100">Home</a>
                        <a href="#about-me" className="opacity-80 hover:opacity-100">About</a>
                    </nav>
                </div>
            </header>
            <main>
                <section id="hero" className="min-h-screen flex items-center justify-center">
                    <div className="max-w-8xl mx-auto px-6">
                        <h1
                            className={`uppercase text-[clamp(4rem,8vw,8rem)] font-black tracking-tighter leading-none bg-cover bg-center bg-no-repeat text-transparent transition-all duration-200 ${scrolled ? "opacity-0 scale-95" : "opacity-100 scale-100"
                                }`}
                            style={{
                                backgroundImage: "url('/images/RobotArm.jpg')",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                backgroundPosition: "center 40%",
                                WebkitTextStroke: "2px rgba(255, 191, 191, 1)"
                            }}
                        >
                            Jacob Tuchschmidt
                        </h1>
                        <p className={`mt-4 text-lg md:text-2xl text-gray-300 font-light" transition-all duration-200 ${scrolled ? "opacity-0 scale-95" : "opacity-100 scale-100"
                            }`}
                        >
                            Mechanical Engineering Portfolio
                        </p>
                    </div>
                </section>

                <section
                    id="about-me" className="py-40"
                >
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                            Welcome!
                        </h2>

                        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                            This portfolio is an introduction to my
                        </p>

                        <ul className="mt-10 space-y-2 text-xl font-medium">
                            <li>My Work</li>
                            <li>My Passions</li>
                            <li>My Growth</li>
                        </ul>

                        <p className="mt-10 text-lg text-gray-300 leading-relaxed">
                            I’m a mechanical engineer in the early stages of building a career driven by passion and purpose in mechanical design.
                        </p>
                    </div>
                </section>


                <section id="timeline" className="py-40 border-t border-white/10">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                            Timeline
                        </h2>

                        <div className="mt-16 space-y-16">
                            {/* Timeline Item 1 */}
                            <div
                                data-index="1"
                                className={`timeline-item relative pl-8 border-l border-white/20 transition-all duration-700
                                    ${visibleItems.includes("1")
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-6"}
                                `}
                            >
                                <span className="absolute -left-[6.5px] top-0 w-3 h-3 rounded-full bg-white"></span>
                                <span className="text-sm text-gray-400">2022</span>
                                <h3 className="mt-2 text-xl md:text-2xl font-semibold tracking-tight">
                                    B.S. Mechanical Engineering
                                </h3>
                                <p className="mt-2 text-gray-300 leading-relaxed">
                                    Graduated from Missouri University of Science and Technology with an
                                    emphasis in Mechanical Design and Analysis.
                                </p>
                                <ul className="mt-4 list-disc list-inside text-gray-400 space-y-1">
                                    {/* Future bullet points */}
                                </ul>
                            </div>

                            {/* Timeline Item 2 */}
                            <div
                                data-index="2"
                                className={`timeline-item relative pl-8 border-l border-white/20 transition-all duration-700
                                    ${visibleItems.includes("2")
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-6"}
                                `}
                            >
                                <span className="absolute -left-[6.5px] top-0 w-3 h-3 rounded-full bg-white"></span>
                                <span className="text-sm text-gray-400">2022 – 2025</span>
                                <h3 className="mt-2 text-xl md:text-2xl font-semibold tracking-tight">
                                    Product Design Engineer — Hitachi
                                </h3>
                                <p className="mt-2 text-gray-300 leading-relaxed">
                                    Worked in Jefferson City, Missouri at one of North America’s largest
                                    factories producing liquid-filled transformers, contributing to
                                    designs across renewable energy, data centers, utilities, and
                                    infrastructure projects.
                                </p>
                                <ul className="mt-4 list-disc list-inside text-gray-400 space-y-1">
                                    {/* Future bullet points */}
                                </ul>
                            </div>

                            {/* Timeline Item 3 */}
                            <div
                                data-index="3"
                                className={`timeline-item relative pl-8 border-l border-white/20 transition-all duration-700
                                    ${visibleItems.includes("3")
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-6"}
                                `}
                            >
                                <span className="absolute -left-[6.5px] top-0 w-3 h-3 rounded-full bg-white"></span>
                                <span className="text-sm text-gray-400">2025 – Present</span>
                                <h3 className="mt-2 text-xl md:text-2xl font-semibold tracking-tight">
                                    Marketing Engineer — Hitachi Energy
                                </h3>
                                <p className="mt-2 text-gray-300 leading-relaxed">
                                    Applying mechanical design and product expertise to evaluate site
                                    plans and technical specifications of construction and industry leaders
                                    throughout the dry type transformer market
                                </p>
                                <ul className="mt-4 list-disc list-inside text-gray-400 space-y-1">
                                    {/* Future bullet points */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}