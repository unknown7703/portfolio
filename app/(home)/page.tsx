"use client";

import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import { InfoSection } from "./components/InfoSection";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes"; // If using a theme provider
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const { resolvedTheme } = useTheme(); // Detects light/dark mode
  const [bgClass, setBgClass] = useState("bg-background");
  const [glitchTriggered, setGlitchTriggered] = useState(false);
  const router = useRouter();

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
        <div className="relative w-full max-w-4xl mx-auto mt-16 mb-32">
          <Image
            src="/projects.png"
            alt="Projects"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 sm:bottom-4 ">
            <Button variant="default" size="lg" onClick={() => router.push("/projects")}>
              Go to Projects
            </Button>
          </div>
        </div>
        <InfoSection />
      </div>
    </div>
  );
}
