import React from "react";
import Navbar from "../components/Navbar";
import VerticalSidebar from "../components/VerticalSidebar";
import HeroSection from "../components/HeroSection";
import SkillMarquee from "../components/SkillMarquee";
import ProjectShowcase from "./Projects";


function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white font-sans relative overflow-hidden">
      <Navbar />
      <HeroSection />
      <ProjectShowcase/>
      <SkillMarquee/>
    </main>
  );
}

export default Home;
