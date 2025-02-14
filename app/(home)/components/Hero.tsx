"use client";

import Image from "next/image";
import TypewriterComponent from "./TypeWriter";
import { CircleArrowDown } from "lucide-react";

export default function Hero() {
  const handleScroll = () => {
    window.scrollBy({ top: 500, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center mt-20 px-10 md:px-24">
      {/* Content Section */}
      <div className="flex flex-col md:flex-row md:justify-between w-full">
        <div>
          <div className="text-md md:text-3xl flex flex-col">
            <p>Hi, I am Aatreya</p>
            <p>I am a Software Developer</p>
            <TypewriterComponent />
          </div>
        </div>
        <div className="mt-20 md:mt-0">
          <Image
            src={"/heroimg1.svg"}
            alt="Logo"
            width={400}
            height={180}
            className="object-cover"
          />
        </div>
      </div>

      {/* Scroll Arrow */}
      <div className="flex justify-center mt-40 mb-40">
        <div className="cursor-pointer animate-bounce" onClick={handleScroll}>
          <CircleArrowDown size={40} className="text-primary" />
        </div>
      </div>
    </div>
  );
}
