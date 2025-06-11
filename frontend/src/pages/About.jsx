import React, { useContext } from "react";
import { motion } from "framer-motion";
import {
  LightBulbIcon,
  ChartBarIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import SkillMarquee from "../components/SkillMarquee";
import { LanguageContext } from "../context/LanguageContext.jsx";
import Particles from "../components/Particles.jsx";

function About() {
  const { language } = useContext(LanguageContext);

  const content = {
    EN: {
      code: "Code",
      smarter: "Smarter",
      idea: "Your idea,",
      flawlessly: "flawlessly",
      executed: "executed.",
      paragraph: `Hi! I'm a passionate and detail-oriented Junior Web & Software Developer
        with a creative background in graphic design and over 10 years of
        professional experience in branding and visual communication. After
        completing an intensive Web & Software Development program at Digital
        Career Institute in Berlin, I transitioned into tech to build modern,
        user-friendly web applications. I specialize in both frontend and
        backend development, with a strong focus on clean UI/UX design and
        responsive layouts using tools like React, Vite, Tailwind CSS, and
        Node.js. With my unique blend of creative and technical skills, I love
        turning complex problems into intuitive digital solutions. I’m
        constantly learning and improving—currently expanding my skills in
        full-stack development and German (B1 level). Whether working on a
        dynamic hotel landing page, CMS-style blog layouts, or developing robust
        APIs, I bring dedication, adaptability, and design thinking to every
        project. Let’s build something great together!`,
      design: "Design",
      designText: `Design is more than aesthetics—it's about connection and function.
        It shapes how we experience the world, how we interact with
        technology, and how we relate to ideas. I believe good design is
        invisible, purposeful, and always user-centered.`,
      results: "Results",
      resultsText: `I’m results-driven and thrive on delivering work that reflects both
        vision and quality. Whether through code, design, or collaboration,
        my goal is always the same—build outcomes that perform, inspire, and
        make a real impact.`,
      collaboration: "Collaboration",
      collaborationText: `Throughout my journey, I’ve built strong relationships with
        professionals across design, development, and marketing. I believe
        in the power of collaboration to bring a project’s vision to life—no
        matter the tools or expertise required. Great things are built
        together.`,
    },
    DE: {
      code: "Code",
      smarter: "Klüger",
      idea: "Deine Idee,",
      flawlessly: "makellos",
      executed: "umgesetzt.",
      paragraph: `Hallo! Ich bin ein leidenschaftlicher und detailorientierter Junior Web- & Softwareentwickler
        mit kreativem Hintergrund im Grafikdesign und über 10 Jahren Berufserfahrung
        in Markenentwicklung und visueller Kommunikation. Nach dem Abschluss eines intensiven
        Web- & Softwareentwicklungsprogramms am Digital Career Institute in Berlin,
        habe ich den Wechsel in die Tech-Branche vollzogen, um moderne, benutzerfreundliche
        Webanwendungen zu entwickeln. Ich spezialisiere mich sowohl auf Frontend- als auch
        auf Backend-Entwicklung – mit starkem Fokus auf sauberes UI/UX-Design und
        responsive Layouts mit Tools wie React, Vite, Tailwind CSS und Node.js.
        Mit meiner einzigartigen Mischung aus kreativen und technischen Fähigkeiten
        liebe ich es, komplexe Probleme in intuitive digitale Lösungen zu verwandeln.
        Ich lerne ständig dazu – aktuell vertiefe ich meine Kenntnisse in Fullstack-Entwicklung
        und Deutsch (B1). Ob bei dynamischen Hotel-Landingpages, CMS-basierten Blog-Layouts
        oder robusten APIs – ich bringe Engagement, Anpassungsfähigkeit und Design Thinking
        in jedes Projekt ein. Lass uns gemeinsam Großartiges schaffen!`,
      design: "Design",
      designText: `Design ist mehr als nur Ästhetik – es geht um Verbindung und Funktion.
        Es prägt unsere Erfahrungen, unseren Umgang mit Technologie und unsere Beziehung zu Ideen.
        Gutes Design ist unsichtbar, zielgerichtet und immer benutzerzentriert.`,
      results: "Ergebnisse",
      resultsText: `Ich bin ergebnisorientiert und liebe es, Arbeit zu liefern, die sowohl Vision als auch Qualität widerspiegelt.
        Ob durch Code, Design oder Zusammenarbeit – mein Ziel ist es immer, Ergebnisse zu schaffen,
        die funktionieren, inspirieren und echten Einfluss haben.`,
      collaboration: "Zusammenarbeit",
      collaborationText: `Während meiner Reise habe ich starke Beziehungen zu Fachleuten in Design, Entwicklung und Marketing aufgebaut.
        Ich glaube an die Kraft der Zusammenarbeit, um die Vision eines Projekts zum Leben zu erwecken –
        unabhängig von Tools oder Fachkenntnissen. Großartige Dinge entstehen gemeinsam.`,
    },
  };

  const letters = content[language].smarter.split("");

  return (
    <>
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
      <section className="mt-10 py-16 px-4 sm:px-6 lg:px-20 bg-transparent">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-10 flex flex-wrap gap-3 items-center">
          <span className="text-gray-400">{content[language].code}</span>
          <motion.span
            className="inline-flex text-transparent stroke-white stroke-[1.5px] font-extrabold"
            style={{ WebkitTextStroke: "1.5px white" }}
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.3,
                },
              },
            }}>
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="inline-block">
                {letter}
              </motion.span>
            ))}
          </motion.span>
        </h2>

        <div className="flex flex-col lg:flex-row items-start gap-8 bg-black">
          {/* Paragraph */}
          <div className="flex-1">
            <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-5xl text-justify">
              {content[language].paragraph}
            </p>
          </div>

          {/* Image */}
          <div className="w-full lg:w-auto lg:max-w-lg">
            <img
              src="/aboutTech.jpg"
              alt="Developer profile"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Design & Results Section */}
        <h1 className="mt-10 text-white text-4xl sm:text-8xl font-bold flex flex-wrap gap-2 items-center">
          {content[language].idea}
          <motion.span
            className="inline-flex text-transparent stroke-white stroke-[1.5px] font-extrabold"
            style={{ WebkitTextStroke: "1.5px white" }}
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.3,
                },
              },
            }}>
            {content[language].flawlessly.split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="inline-block">
                {letter}
              </motion.span>
            ))}
          </motion.span>
          {content[language].executed}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-4 rounded-2xl">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              <LightBulbIcon className="h-10 w-10 text-teal-400 mb-5" />
              {content[language].design}
            </h3>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl">
              {content[language].designText}
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded-2xl">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              <ChartBarIcon className="h-10 w-10 text-teal-400 mb-5" />
              {content[language].results}
            </h3>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl">
              {content[language].resultsText}
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded-2xl">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              <UsersIcon className="h-10 w-10 text-teal-400 mb-5" />
              {content[language].collaboration}
            </h3>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl">
              {content[language].collaborationText}
            </p>
          </div>
        </motion.div>
        <SkillMarquee />
      </section>
    </>
  );
}

export default About;
