"use client"; // Required since we use hooks
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { TiWeatherSunny } from "react-icons/ti";
import { BsMoonStars } from "react-icons/bs";
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null; // Or a loading skeleton
  }
  return (
    <span
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="theme-text flex items-center text-2xl mx-4 cursor-pointer"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <TiWeatherSunny />
  : <BsMoonStars />
}
    </span>
  );
}