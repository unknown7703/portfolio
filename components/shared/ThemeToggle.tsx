"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon ,Sun} from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; 

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded bg-background text-primary"
    >
      {currentTheme === "dark" ? <Moon/> : <Sun/>}
    </button>
  );
}
