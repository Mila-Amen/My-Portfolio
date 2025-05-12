import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 pt-36 pb-20">
      <div className="relative w-full md:w-1/2">
        <img
          src="MillionDaniel.jpg"
          alt="Profile"
          className="rounded-xl shadow-lg grayscale"
        />
        <div className="absolute bottom-6 left-6 bg-teal-600 rounded-full w-16 h-16 flex items-center justify-center shadow-xl">
          <img
            src="https://assets.website-files.com/5d7f5e6327d67419f1e60f7c/61f07b6aef798f174f6814ab_webflow-logo.svg"
            alt="Webflow Logo"
            className="w-8"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-12">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Agency-level web development services at{" "}
          <span className="text-teal-400">freelancer rates</span>
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          My mission is to design and develop a website that you and your
          audience love.
        </p>
        <a
          href="https://wa.me/0000000000"
          className="flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-full w-max shadow-lg">
          <FaWhatsapp className="text-xl" /> Happy to chat on Whatsapp
        </a>
      </div>
    </section>
  );
}
