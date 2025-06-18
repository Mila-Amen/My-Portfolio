import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Layout({ children }) {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = { };

  return (
    <div className="relative min-h-screen">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 -z-10"
      />
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
}
