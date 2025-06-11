import React, { useContext, useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { LanguageContext } from "../context/LanguageContext.jsx";
import VerticalSidebar from "./VerticalSidebar.jsx";

export default function HeroSection() {
  const { language } = useContext(LanguageContext);
  const [showSidebar, setShowSidebar] = useState(true);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const bottom = heroRef.current?.getBoundingClientRect().bottom;
      if (bottom && bottom <= 0) {
        setShowSidebar(false);
      } else {
        setShowSidebar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const content = {
    EN: {
      role: "Fullstack Developer & Graphics Designer",
      heading: (
        <>
          Turning ideas into pixel-perfect, production-ready experiences.{" "}
          <span className="text-teal-400">freelancer rates</span>
        </>
      ),
      motto: '"Design sharp. Code smarter. Deliver better."',
      whatsappText:
        "Hello Million, I saw your portfolio and I'm interested in working with you",
      whatsappLabel: "Happy to chat on Whatsapp",
    },
    DE: {
      role: "Fullstack Entwicklerin & Grafikdesignerin",
      heading: (
        <>
          Ideen in pixelgenaue, produktionsbereite Erlebnisse verwandeln.{" "}
          <span className="text-teal-400">Freelancer-Preise</span>
        </>
      ),
      motto: '"Schärfer designen. Klüger coden. Besser liefern."',
      whatsappText:
        "Hallo Million, ich habe dein Portfolio gesehen und möchte gerne mit dir arbeiten",
      whatsappLabel: "Gerne auf Whatsapp chatten",
    },
  };

  return (
    <section
      ref={heroRef}
      className="relative bg-transparent flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 pt-32 pb-20 min-h-screen">
      {showSidebar && (
        <div className="mr-6 md:mr-10 lg:mr-16">
          {" "}
          {/* Add right margin here */}
          <VerticalSidebar />
        </div>
      )}
      <div className="relative w-full md:w-1/2 h-[400px] sm:h-[600px] md:h-auto flex justify-center md:block">
        <img
          src="/MillionDanielCutout.png"
          alt="Profile"
          className="w-4/5 sm:w-3/4 md:w-full h-auto object-contain md:absolute md:bottom-0 md:left-0 md:translate-y-72 lg:translate-y-80 xl:translate-y-[38rem]"
        />
      </div>

      <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-12 text-center md:text-left">
        <p className="text-teal-400 text-lg mb-4">{content[language].role}</p>
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold leading-snug mb-4">
          {content[language].heading}
        </h2>
        <p className="text-gray-300 text-base sm:text-lg mb-6 font-bold">
          {content[language].motto}
        </p>
        <a
          href={`https://wa.me/4915736711429?text=${encodeURIComponent(
            content[language].whatsappText
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto md:mx-0 flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-full w-max shadow-lg">
          <FaWhatsapp className="text-xl" /> {content[language].whatsappLabel}
        </a>
      </div>
    </section>
  );
}
