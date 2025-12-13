// src/components/ThemeSwitcherHandler.jsx
"use client"; // ¡Marcado como Cliente!

import React, { useEffect, useState } from "react";

const getSkillIcon = (skill, theme) => {
  // Simplificado, pero aquí va tu lógica de URL condicional
  if (skill === "Express" && theme === "dark") {
    return (
      <img
        src="https://res.cloudinary.com/.../express-dark_qdvkff.svg"
        className="w-[24px]"
        alt={`${skill} logo`}
      />
    );
  }
  return (
    <img
      src={`https://res.cloudinary.com/.../${skill.toLowerCase()}_logo.svg`}
      className="w-[24px]"
      alt={`${skill} logo`}
    />
  );
};

export default function ThemeSwitcherHandler({ skill }) {
  // *** 1. Lógica que necesita el Cliente ***
  const [theme, setTheme] = useState("light"); // Estado inicializado en el cliente

  useEffect(() => {
    // *** 2. Lógica de Efecto/Navegador ***
    const initialTheme = localStorage.getItem("theme") || "light";
    setTheme(initialTheme);

    const observer = new MutationObserver(() => {
      const currentTheme = localStorage.getItem("theme") || "light";
      setTheme(currentTheme);
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return getSkillIcon(skill, theme);
}
