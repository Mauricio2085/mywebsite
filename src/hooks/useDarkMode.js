"use client";

import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(null);
  const [isMounted, setIsMounted] = useState(false); // Para saber si ya se montó en el cliente

  useEffect(() => {
    const themeFromStorage = localStorage.getItem("theme");
    if (themeFromStorage !== null) {
      setIsDarkMode(themeFromStorage === "dark");
    }
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const root = document.documentElement;
      console.log("Dark mode actualizado:", isDarkMode);
      if (isDarkMode) {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, [isDarkMode, isMounted]);

  return [isDarkMode, setIsDarkMode];
};

export { useDarkMode };
