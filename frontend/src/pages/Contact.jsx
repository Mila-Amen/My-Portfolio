import React, { useState, useContext } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { LanguageContext } from "../context/LanguageContext.jsx";
import Particles from "../components/Particles.jsx";

const contactText = {
  EN: {
    heading: "Let's Chat",
    subheading: "No bites. No bugs. Just bytes.",
    namePlaceholder: "Name",
    emailPlaceholder: "Email",
    messagePlaceholder: "Message",
    submit: "Submit",
    alertCaptcha: "Please complete the reCAPTCHA.",
  },
  DE: {
    heading: "Lass uns reden",
    subheading: "Keine Bisse. Keine Bugs. Nur Bytes.",
    namePlaceholder: "Name",
    emailPlaceholder: "E-Mail",
    messagePlaceholder: "Nachricht",
    submit: "Absenden",
    alertCaptcha: "Bitte reCAPTCHA ausfüllen.",
  },
};

export default function Contact() {
  const [captchaValue, setCaptchaValue] = useState(null);
  const { language } = useContext(LanguageContext);
  const t = contactText[language] || contactText.EN;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert(t.alertCaptcha);
      return;
    }

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    try {
      const res = await fetch("http://localhost:5002/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, token: captchaValue }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      alert(data.message);
      setCaptchaValue(null);
      e.target.reset();
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

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
      <section className=" relative z-10 bg-transparent  min-h-screen px-20 py-20 mt-20">
        <div className="grid md:grid-cols-2 gap-12 items-start ">
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-5xl font-bold mb-4">{t.heading}</h2>
            <p className="text-gray-400 mb-8">{t.subheading}</p>
            <div className="flex items-center gap-4 mb-4">
              <FaEnvelope className="text-xl text-teal-400" />
              <a
                href="mailto:mmiladaniel@gmail.com"
                className="hover:underline">
                mmiladaniel@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <FaPhone className="text-xl text-teal-400" />
              <a href="tel:+4915736711429" className="hover:underline">
                (+49) 15736711429
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-xl text-teal-400" />
              <p>Marktredwitz, Bayern, Germany</p>
            </div>
            <div className="flex items-center gap-6 mt-6">
              <a
                href="https://github.com/Mila-Amen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-teal-400 text-2xl"
                aria-label="GitHub">
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/million-daniel/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-teal-400 text-2xl"
                aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              name="name"
              type="text"
              placeholder={t.namePlaceholder}
              className="w-full bg-transparent border-b border-gray-600 py-2 outline-none placeholder:text-gray-400"
              required
            />
            <input
              name="email"
              type="email"
              placeholder={t.emailPlaceholder}
              className="w-full bg-transparent border-b border-gray-600 py-2 outline-none placeholder:text-gray-400"
              required
            />
            <textarea
              name="message"
              placeholder={t.messagePlaceholder}
              rows={4}
              className="w-full bg-transparent border-b border-gray-600 py-2 outline-none placeholder:text-gray-400"
              required
            />
            <ReCAPTCHA
              sitekey="6LdkFEorAAAAAPbSgRp4rKXD3S9mPVh48e-DRCgF"
              onChange={setCaptchaValue}
              onExpired={() => setCaptchaValue(null)}
              className="mt-6"
            />
            <button
              type="submit"
              className="mt-4 px-6 py-2 border border-gray-400 font-bold rounded-full hover:bg-teal-600 hover:border-teal-600 transition">
              {t.submit}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
