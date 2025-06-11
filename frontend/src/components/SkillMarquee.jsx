import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";

const skills = [
  { name: { EN: "HTML", DE: "HTML" }, logo: "/html.png" },
  { name: { EN: "CSS", DE: "CSS" }, logo: "/css.png" },
  { name: { EN: "Sass", DE: "Sass" }, logo: "/sass.png" },
  { name: { EN: "JavaScript", DE: "JavaScript" }, logo: "/js.png" },
  { name: { EN: "React", DE: "React" }, logo: "/react.png" },
  { name: { EN: "Tailwind", DE: "Tailwind" }, logo: "/tailwind.png" },
  { name: { EN: "Bootstrap", DE: "Bootstrap" }, logo: "/bootstrap.png" },
  { name: { EN: "Responsive Design", DE: "Responsive Design" }, logo: "/responsive.png" },
  { name: { EN: "Node.js", DE: "Node.js" }, logo: "/node.png" },
  { name: { EN: "Express.js", DE: "Express.js" }, logo: "/express.png" },
  { name: { EN: "MongoDB", DE: "MongoDB" }, logo: "/mongodb.png" },
  { name: { EN: "Git", DE: "Git" }, logo: "/git.png" },
  { name: { EN: "GitHub", DE: "GitHub" }, logo: "/github.png" },
  { name: { EN: "Debugging", DE: "Fehlersuche" }, logo: "/debugging.png" },
  { name: { EN: "npm", DE: "npm" }, logo: "/npm.png" },
];

const headings = {
  EN: "My Tech Stack",
  DE: "Mein Tech-Stack",
};

const SkillMarquee = () => {
  const { language } = useContext(LanguageContext);
  return (
    <section className="bg-transparent py-12 overflow-hidden">
      <h2 className="text-4xl sm:text-7xl text-white font-bold mb-10 text-center">
        {headings[language] || headings.EN}
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee space-x-10 w-max">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-44 h-44 bg-[#111] rounded-3xl flex flex-col items-center justify-center border border-teal-400 shadow-lg">
              <img
                src={skill.logo}
                alt={skill.name[language] || skill.name.EN}
                className="h-16 w-16 mb-2"
              />
              <p className="text-white text-sm">
                {skill.name[language] || skill.name.EN}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillMarquee;
