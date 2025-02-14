"use client";

import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import { InfoSection } from "./components/InfoSection";
import { useTheme } from "next-themes"; // If using a theme provider

export default function Home() {
  const { resolvedTheme } = useTheme(); // Detects light/dark mode
  const [bgClass, setBgClass] = useState("bg-background");
  const [glitchTriggered, setGlitchTriggered] = useState(false);

  useEffect(() => {
    if (!glitchTriggered) {
      const glitchBg =
        resolvedTheme === "light"
          ? "bg-[url('/glitch2.gif')] bg-cover bg-center bg-no-repeat"
          : "bg-[url('/glitch.gif')] bg-cover bg-center bg-no-repeat";

      const timeout = setTimeout(() => {
        setBgClass(glitchBg);

        setTimeout(() => {
          setBgClass("bg-background");
          setGlitchTriggered(true);
        }, 1500);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [glitchTriggered, resolvedTheme]);

  return (
    <div className={`h-fit w-[100%] p-8 ${bgClass} text-primary md:p-16 transition-all duration-500`}>
      <div className="flex flex-col mt-4 mb-12">
        <Hero />
        <InfoSection />
      </div>
    </div>
  );
}
