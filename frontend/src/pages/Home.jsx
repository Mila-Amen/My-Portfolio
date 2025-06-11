import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SkillMarquee from "../components/SkillMarquee";
import ProjectShowcase from "./Projects";
import Particles from "../components/Particles";

function Home() {
  return (
    <main className="min-h-screen text-white font-sans relative overflow-hidden ">
       <Particles
        className="fixed inset-0 w-full h-full -z-10"
        particleCount={500}
        particleSpread={15}
        speed={0.1}
        particleColors={["#2dd4bf", "#0f766e", "#5eead4"]}
        moveParticlesOnHover={true}
        particleHoverFactor={2}
        alphaParticles={false}
        particleBaseSize={120}
        sizeRandomness={5}
        cameraDistance={10}
        disableRotation={false}
      />
      <Navbar />
      <HeroSection />
      <ProjectShowcase/>
      <SkillMarquee />
    </main>
  );
}

export default Home;
