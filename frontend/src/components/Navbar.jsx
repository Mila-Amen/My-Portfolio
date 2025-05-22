import React, { useState, useContext } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageContext } from "../context/LanguageContext.jsx";

const navLabels = {
  EN: {
    home: "Home",
    about: "About",
    projects: "Projects",
    services: "Services",
    contact: "Contact",
    available: "Available for Work",
  },
  DE: {
    home: "Startseite",
    about: "Über mich",
    projects: "Projekte",
    services: "Dienstleistungen",
    contact: "Kontakt",
    available: "Verfügbar für Arbeit",
  },
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, changeLanguage } = useContext(LanguageContext);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleLangDropdown = () => setIsLangOpen((prev) => !prev);
  const selectLanguage = (lang) => {
    changeLanguage(lang);
    setIsLangOpen(false);
    setIsMenuOpen(false);
  };

  const labels = navLabels[language] || navLabels.EN;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/">
          <img src="/Logo.png" alt="logo" className="w-40" />
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-md font-semibold">
          <NavLink to="/" className="hover:text-teal-400">
            {labels.home}
          </NavLink>
          <NavLink to="/about" className="hover:text-teal-400">
            {labels.about}
          </NavLink>
          <NavLink to="/projects" className="hover:text-teal-400">
            {labels.projects}
          </NavLink>
          <NavLink to="/services" className="hover:text-teal-400">
            {labels.services}
          </NavLink>
          <NavLink to="/contact" className="hover:text-teal-400">
            {labels.contact}
          </NavLink>

          <button className="bg-gray-800 text-white px-4 py-1 rounded-full text-xs border border-teal-500">
            {labels.available}
          </button>

          {/* Language Dropdown */}
          <div className="relative inline-block w-16 text-center">
            <div
              role="button"
              tabIndex={0}
              onClick={toggleLangDropdown}
              onKeyDown={(e) =>
                (e.key === "Enter" || e.key === " ") && toggleLangDropdown()
              }
              aria-haspopup="listbox"
              aria-expanded={isLangOpen}
              className="cursor-pointer text-white shadow-md px-3 py-1 flex items-center justify-center gap-1 rounded-md hover:bg-gray-800 transition"
            >
              {language}
              <ChevronDown size={16} className="select-none" />
            </div>

            {isLangOpen && (
              <ul
                role="listbox"
                tabIndex={-1}
                aria-activedescendant={`lang-${language}`}
                className="absolute right-0 z-20 bg-black text-white border border-gray-700 rounded-md shadow-lg mt-1 min-w-[5rem] overflow-hidden"
              >
                {["EN", "DE"].map((lang) => (
                  <li
                    id={`lang-${lang}`}
                    role="option"
                    aria-selected={language === lang}
                    key={lang}
                    onClick={() => selectLanguage(lang)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        selectLanguage(lang);
                      }
                    }}
                    tabIndex={0}
                    className={`px-4 py-2 cursor-pointer hover:bg-teal-600 ${
                      language === lang ? "bg-teal-700 font-semibold" : ""
                    }`}
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-teal-400"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-black/90 px-4 py-4 text-sm font-semibold rounded-b-lg"
          >
            <NavLink
              to="/"
              className="block py-2 hover:text-teal-400"
              onClick={() => setIsMenuOpen(false)}
            >
              {labels.home}
            </NavLink>
            <NavLink
              to="/about"
              className="block py-2 hover:text-teal-400"
              onClick={() => setIsMenuOpen(false)}
            >
              {labels.about}
            </NavLink>
            <NavLink
              to="/projects"
              className="block py-2 hover:text-teal-400"
              onClick={() => setIsMenuOpen(false)}
            >
              {labels.projects}
            </NavLink>
            <NavLink
              to="/services"
              className="block py-2 hover:text-teal-400"
              onClick={() => setIsMenuOpen(false)}
            >
              {labels.services}
            </NavLink>
            <NavLink
              to="/contact"
              className="block py-2 hover:text-teal-400"
              onClick={() => setIsMenuOpen(false)}
            >
              {labels.contact}
            </NavLink>

            <button className="w-full mt-2 bg-gray-800 text-white px-4 py-2 rounded-full text-xs border border-teal-500">
              {labels.available}
            </button>

            {/* Language Dropdown in Mobile */}
            <div className="relative mt-4 text-center">
              <div
                onClick={toggleLangDropdown}
                className="text-white shadow-md px-3 py-1 cursor-pointer inline-flex items-center gap-1 justify-center rounded-md hover:bg-gray-800 transition"
              >
                {language}
                <ChevronDown size={16} />
              </div>
              {isLangOpen && (
                <ul className="absolute left-1/2 -translate-x-1/2 z-20 bg-black text-white border border-gray-700 rounded-md shadow-lg mt-1 w-20 overflow-hidden">
                  {["EN", "DE"].map((lang) => (
                    <li
                      key={lang}
                      onClick={() => selectLanguage(lang)}
                      className="px-4 py-2 hover:bg-teal-600 cursor-pointer"
                    >
                      {lang}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
