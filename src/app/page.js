// page.js

export default function Home() {
    return (
        <div className="min-h-screen bg-black text-white">
            <header>
                <h1>Jacob Tuchschmidt's Portfolio</h1>
                <nav>
                    <a href="#hero">Home</a>
                    <a href="#about-me">About</a>
                </nav>
            </header>
            <main>

                <section id="hero" className="min-h-screen flex items-center justify-center">
                    <div>
                        <h1
                            className="uppercase text-[clamp(4rem,12vw,12rem)] font-black tracking-tighter leading-none bg-cover bg-center bg-no-repeat text-transparent"
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
                        <p className="mt-4 text-lg md:text-2xl text-gray-300 font-light">
                            Mechanical Engineering Portfolio
                        </p>
                    </div>
                </section>

                <section id="about-me">
                    Welcome, I am an early career mechanical engineer with a passion for design
                </section>

                <section id="projects-timeline">
                    timeline goes here
                </section>
            </main>
        </div>
    )
}