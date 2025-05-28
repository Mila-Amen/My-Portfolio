import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";


export default function Contact() {
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!captchaValue) {
      alert("Please complete the reCAPTCHA.");
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
  
      alert(data.message); // Replace with a nicer modal or toast if needed
      setCaptchaValue(null);
      e.target.reset();
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };
  
  
  return (
    <section className="bg-[#121212] text-white py-20 px-6 sm:px-12 lg:px-24 mt-20">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Contact Info */}
        <div>
          <h2 className="text-5xl font-bold mb-4">Let's Chat</h2>
          <p className="text-gray-400 mb-8">No bites. No bugs. Just bytes.</p>
          <div className="flex items-center gap-4 mb-4">
            <FaEnvelope className="text-xl text-teal-400" />
            <a href="mailto:mmiladaniel@gmail.com" className="hover:underline">
              mmiladaniel@gmail.com{" "}
            </a>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <FaPhone className="text-xl text-teal-400" />
            <a href="tel:+19056040314" className="hover:underline">
              (+49) 15736711429
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-xl text-teal-400" />
            <p>
              Marktredwitz
              <br />
              Bayern, Germany
            </p>
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
            placeholder="Name"
            className="w-full bg-transparent border-b border-gray-600 py-2 outline-none placeholder:text-gray-400"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full bg-transparent border-b border-gray-600 py-2 outline-none placeholder:text-gray-400"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
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
            className="mt-4 px-6 py-2 border border-gray-400 rounded-full hover:bg-teal-600 hover:border-teal-600 transition">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
