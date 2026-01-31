// page.js

"use client";
import { useEffect, useState } from "react";

export default function Home() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > window.innerHeight * 0.3);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
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
                    <div>
                        <h1
                            className={`uppercase text-[clamp(4rem,12vw,12rem)] font-black tracking-tighter leading-none bg-cover bg-center bg-no-repeat text-transparent transition-all duration-200 ${scrolled ? "opacity-0 scale-95" : "opacity-100 scale-100"
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
                    id="about-me"
                    className="min-h-screen flex items-center justify-center"
                >
                    Welcome, I am an early career mechanical engineer with a passion for design
                </section>

                <section id="projects-timeline">
                    timeline goes here
                </section>
            </main>
        </div>
    )
}