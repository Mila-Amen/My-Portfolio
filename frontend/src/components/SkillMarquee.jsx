import React from "react";

const skills = [
  { name: "HTML", logo: "/html.png" },
  { name: "CSS", logo: "/css.png" },
  { name: "JavaScript", logo: "/js.png" },
  { name: "React", logo: "/react.png" },
  { name: "Node.js", logo: "/node.png" },
  { name: "Tailwind", logo: "/tailwind.png" },
];

const SkillMarquee = () => {
  return (
    <section className="bg-black py-12 overflow-hidden">
      <h2 className="text-4xl sm:text-7xl text-white font-bold mb-10 text-center">
        My Tech Stack
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee space-x-10 w-max">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-44 h-44 bg-[#111] rounded-3xl flex flex-col items-center justify-center border border-gray-700 shadow-lg"
            >
              <img src={skill.logo} alt={skill.name} className="h-16 w-16 mb-2" />
              <p className="text-white text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillMarquee;
