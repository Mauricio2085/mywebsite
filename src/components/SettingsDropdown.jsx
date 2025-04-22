import React, { useState, useRef, useEffect } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import { useTranslation } from "react-i18next";

const SettingsDropdown = ({ type }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const [IsDarkMode, setDarkMode] = useDarkMode();
  const { t, i18n } = useTranslation();

  const typeMobile = {
    visibility: "md:hidden",
    position: "left",
  };
  const typeDesktop = {
    visibility: "hidden md:inline-block",
    position: "right",
  };

  // Cierra el dropdown si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`relative ${type === "mobile" ? typeMobile.visibility : typeDesktop.visibility} `}
      ref={dropdownRef}
    >
      <button
        ref={buttonRef}
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);

          setTimeout(() => {
            if (buttonRef.current) {
              buttonRef.current.blur();
            }
          }, 100);
        }}
        className="hover:text-shadow-light dark:hover:text-shadow flex items-center justify-end font-semibold italic hover:text-cyan-500 focus:text-cyan-300 focus:outline-none dark:hover:text-cyan-300"
      >
        {t("header.settings")}
      </button>

      {isOpen && (
        <div
          className={`absolute ${type === "mobile" ? typeMobile.position : typeDesktop.position}-0 z-10 mt-2 w-48 origin-top-${type === "mobile" ? typeMobile.position : typeDesktop.position} rounded-md bg-gradient-to-r from-[#1b2129] to-[#111213] shadow-lg ring-1 ring-black ring-opacity-5`}
        >
          <div className="px-[4px] py-1 text-white">
            <div className="hover:text-shadow flex w-full items-center gap-4 border-b border-b-cyan-300 px-4 py-2 text-sm italic hover:text-cyan-300">
              <img
                className="w-4"
                src="https://res.cloudinary.com/smartpocket/image/upload/v1744947836/porfolio/translate-dark_s5x05s.svg"
                alt="Translate logo"
              />
              <button
                onClick={() => {
                  // Lógica para cambiar el idioma
                  const newLang = i18n.language === "en" ? "es" : "en";
                  i18n.changeLanguage(newLang);
                  setIsOpen(false);
                }}
              >
                {t("settings.translate")}
              </button>
            </div>
            <div className="hover:text-shadow flex w-full items-center gap-4 border-b border-b-cyan-300 px-4 py-2 text-sm italic hover:text-cyan-300">
              <img
                className="w-4"
                src="https://res.cloudinary.com/smartpocket/image/upload/v1744946076/porfolio/light-mode-dark_b2rojl.svg"
                alt="Translate logo"
              />
              <button
                onClick={() => {
                  // Lógica para cambiar el tema
                  setDarkMode(false);
                  setIsOpen(false);
                }}
              >
                {t("settings.light")}
              </button>
            </div>
            <div className="hover:text-shadow flex w-full items-center gap-4 px-4 py-2 text-sm italic hover:text-cyan-300">
              <img
                className="w-4"
                src="https://res.cloudinary.com/smartpocket/image/upload/v1744947729/porfolio/dark-mode-dark_nnbuzn.svg"
                alt="Translate logo"
              />
              <button
                onClick={() => {
                  // Lógica para cambiar el tema
                  setDarkMode(true);
                  setIsOpen(false);
                }}
              >
                {t("settings.dark")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { SettingsDropdown };
