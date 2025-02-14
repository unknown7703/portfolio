"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import ContactModal from "./ContactModal";
import Link from "next/link";
import { Menu } from "lucide-react"; // Import icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="bg-background border-b border-b-accent min-h-14 flex items-center justify-between text-primary w-full px-4 md:px-8 relative">
      <Link href="/" className="font-semibold">
        T_Aatreya
      </Link>
      <div className="flex items-center font-medium">
        <div className="hidden md:flex items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="https://github.com/unknown7703">Github</Link>
          <button onClick={() => setIsContactOpen(true)}>Contact</button>
          <ThemeToggle />
        </div>
        <div className="flex flex-row md:hidden items-center">
          <ThemeToggle />
          <button
            className="md:hidden p-2 focus:outline-none ml-4"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Open menu"
          >
            <Menu size={24} className="text-primary" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-14 right-4 bg-muted text-primary p-4 rounded-lg shadow-md flex flex-col gap-3 w-48">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="https://github.com/unknown7703" onClick={() => setIsOpen(false)}>Github</Link>
          <button className="self-start" onClick={() => { setIsContactOpen(true); setIsOpen(false); }}>Contact</button>
        </div>
      )}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
