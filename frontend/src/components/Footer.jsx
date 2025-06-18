import React, { useContext } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { LanguageContext } from "../context/LanguageContext";

const footerLabels = {
  EN: {
    contact: "Get in Touch",
    rights: "All rights reserved.",
  },
  DE: {
    contact: "Kontakt aufnehmen",
    rights: "Alle Rechte vorbehalten.",
  },
};

export default function Footer() {
  const { language } = useContext(LanguageContext);
  const labels = footerLabels[language] || footerLabels.EN;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white px-6 py-10 md:px-20 lg:px-32">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start gap-4 text-xl">
            <a
              href="mailto:mmiladaniel@gmail.com"
              aria-label="Email"
              className="hover:text-teal-400 transition">
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/Mila-Amen"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-teal-400 transition">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/million-daniel/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-teal-400 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="text-sm text-gray-400 text-center md:text-right">
          © {currentYear} Million Daniel. {labels.rights}
        </div>
      </div>
    </footer>
  );
}
