import React, { useState } from "react";

export default function Navbar() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const toggleLangDropdown = () => setIsLangOpen((prev) => !prev);
  const selectLanguage = (lang) => {
    setLanguage(lang);
    setIsLangOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6 z-10">
      <a
        href="/"
        className="text-teal-400 text-2xl font-bold font-mono hover:text-white">
        Million Daniel
      </a>
      <nav className="flex items-center gap-8 text-sm">
        <a href="/" className="hover:text-teal-400">
          Home
        </a>
        <a href="/about" className="hover:text-teal-400">
          About Me
        </a>
        <a href="/projects" className="hover:text-teal-400">
          Projects
        </a>
        <a href="/services" className="hover:text-teal-400">
          Services
        </a>
        <a href="/contact" className="hover:text-teal-400">
          Contact
        </a>
        <button className="bg-gray-800 text-white px-4 py-1 rounded-full text-xs border border-teal-500">
          Available for Work
        </button>

        <div className="relative inline-block w-10 text-center">
          <div
            onClick={toggleLangDropdown}
            className="text-white shadow-md p-2 cursor-pointer flex items-center gap-1">
            {language}
            <span className="text-sm">▼</span>
          </div>

          {isLangOpen && (
            <ul className="absolute z-10 bg-white border border-gray-300 rounded-md shadow-md w-full mt-1">
              {["EN", "DE"].map((lang) => (
                <li
                  key={lang}
                  onClick={() => selectLanguage(lang)}
                  className="text-black p-2 hover:bg-teal-400 cursor-pointer">
                  {lang}
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}
