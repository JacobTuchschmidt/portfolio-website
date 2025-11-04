import Image from "next/image";

export default function MarsRover() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      {/* Cover Section with Background Image */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center">
        {/* Background Image */}
        <Image
          src="/images/mars-rover1.jpg"
          alt="Mars Rover Prototype"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full"
        />
        {/* Title & Subtitle (No Overlay) */}
        <div className="relative z-10 px-6">
          <h1 className="text-6xl font-bold">Mars Rover Design Team</h1>
          <p className="text-2xl text-gray-300 mt-4">
            My undergraduate experience designing planetary rovers
          </p>
        </div>
      </section>

      {/* Rover Experience */}
      <section className="w-full max-w-6xl mx-auto px-6 my-12">
        <h2 className="text-4xl font-bold mb-6 text-center">My Role & Contributions</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          As a key member of the Mars Rover Design Team at Missouri S&T, I worked on the 
          mechanical and structural design of our competition rover. My responsibilities included:
        </p>
        <ul className="list-disc list-inside mt-6 text-lg text-gray-300 space-y-3">
          <li>CAD modeling and stress analysis of rover components</li>
          <li>Designing and optimizing the suspension system for extreme terrain</li>
          <li>Collaborating with electrical and software teams for integration</li>
          <li>Testing and iterating on prototypes for competition readiness</li>
        </ul>
      </section>

      {/* Additional Images */}
      <section className="w-full flex flex-wrap justify-center gap-8 px-6">
        <div className="w-full max-w-5xl">
          <Image
            src="/images/mars-rover2.jpg"
            alt="Mars Rover CAD Model"
            width={1200}
            height={600}
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div className="w-full max-w-5xl">
          <Image
            src="/images/fea-analysis.jpg"
            alt="FEA Stress Analysis"
            width={1200}
            height={600}
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </section>

      {/* Back to Projects Button */}
      <section className="text-center my-12">
        <a href="/" className="text-blue-400 hover:underline text-2xl">
          ← Back to Portfolio
        </a>
      </section>
    </main>
  );
}
