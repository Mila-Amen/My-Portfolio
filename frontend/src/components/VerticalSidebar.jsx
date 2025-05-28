import React from "react";

export default function VerticalSidebar() {
  return (
    <div className="absolute top-0 right-0 h-full flex items-center z-10">
      <div className="text-white text-xl sm:text-2xl md:text-4xl font-bold transform rotate-90 origin-bottom-right whitespace-nowrap tracking-widest 
        mt-30 sm:mt-40 md:mt-80 
        mr-8 sm:mr-10 md:mr-12 lg:mr-14 xl:mr-18">
        WEB DEVELOPER
      </div>
    </div>
  );
}
