import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { LanguageContext } from "../context/LanguageContext";
import RotatingText from "../components/RotatingText.jsx";
import Particles from "../components/Particles.jsx";

const projects = [
  {
    title: {
      EN: "Hotel Landing Page",
      DE: "Hotel-Landingpage",
    },
    description: {
      EN: "A full-stack hotel booking platform with user authentication, search filters, and responsive design.",
      DE: "Eine Full-Stack-Hotelbuchungsplattform mit Benutzeranmeldung, Suchfiltern und responsivem Design.",
    },
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    image: "/hotel-app.jpg",
    github: "https://github.com/Mila-Amen/Hotel-Landing-page",
    live: "https://hotel-booking-mern-stack-1.onrender.com/#/",
  },
  {
    title: {
      EN: "Portfolio Website",
      DE: "Portfolio-Webseite",
    },
    description: {
      EN: "A modern personal portfolio with animated transitions and CMS-driven content.",
      DE: "Ein modernes persönliches Portfolio mit Animationen und CMS-basierten Inhalten.",
    },
    tech: ["React", "Framer Motion", "Sanity CMS", "Tailwind CSS"],
    image: "/portfolio.jpg",
    github: "https://github.com/Mila-Amen/My-Portfolio",
    live: "https://yourportfolio.com",
  },
  {
    title: {
      EN: "Multinational Museum",
      DE: "Multinationales Museum",
    },
    description: {
      EN: "A React application developed with Vite, featuring a booking component.",
      DE: "Eine mit Vite entwickelte React-Anwendung mit Buchungskomponente.",
    },
    tech: ["React", "Framer Motion", "Sanity CMS", "Tailwind CSS"],
    image: "/Museum.jpg",
    github: "https://github.com/Mila-Amen/Multinational-Museum",
    live: "https://museumsphere.netlify.app/",
  },
  {
    title: {
      EN: "Movie App",
      DE: "Film-App",
    },
    description: {
      EN: "A React movie application developed with Vite and styled with Tailwind CSS.",
      DE: "Eine React-Film-App, entwickelt mit Vite und gestaltet mit Tailwind CSS.",
    },
    tech: ["React", "Sanity CMS", "Tailwind CSS"],
    image: "/MovieApp.jpg",
    github: "https://github.com/Mila-Amen/Movie-App",
    live: "https://museumsphere.netlify.app/",
  },
];

const ProjectCard = ({ project, language }) => (
  <a
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"
    className="block">
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg cursor-pointer">
      <img
        src={project.image}
        alt={project.title[language]}
        className="w-full h-60 object-cover group-hover:opacity-70 transition duration-300"
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold text-white mb-2">
          {project.title[language]}
        </h3>
        <p className="text-gray-400 mb-4">{project.description[language]}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="text-sm bg-teal-600 text-white px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4" onClick={(e) => e.stopPropagation()}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-400"
            onClick={(e) => e.stopPropagation()}>
            <FaGithub className="text-xl" />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-400"
            onClick={(e) => e.stopPropagation()}>
            <FaExternalLinkAlt className="text-xl" />
          </a>
        </div>
      </div>
    </motion.div>
  </a>
);

export default function ProjectShowcase() {
  const { language } = useContext(LanguageContext);

  return (
    <section className="relative min-h-[100vh] px-4 py-20 sm:py-32">
      {/* Particles background */}
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

      {/* Content on top */}
      <h2 className="text-2xl sm:text-6xl font-bold text-white text-center mb-10 flex justify-center items-center gap-2 relative z-20">
        {language === "EN" ? "Code. Caffeine." : "Code. Kaffee."}
        <span className="text-teal-400 inline-flex relative z-20">
          <RotatingText
            texts={[
              language === "EN" ? "Innovate." : "Innovieren.",
              language === "EN" ? "Create." : "Erstellen.",
              language === "EN" ? "Inspire." : "Inspirieren.",
            ]}
            mainClassName="relative z-20 text-2xl sm:text-6xl font-bold text-teal-400 px-1 py-0 rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </span>
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 relative z-20">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} language={language} />
        ))}
      </div>
    </section>
  );
}
