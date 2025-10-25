import React, { useState, useRef, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { SettingsDropdown } from "./SettingsDropdown";
import { useDarkMode } from "../hooks/useDarkMode";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const MobileDropdown = ({ setIsDarkMode, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef1 = useRef(null);
  const { t } = useTranslation();

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
    <div className="relative md:inline-block" ref={dropdownRef}>
      <button
        ref={buttonRef1}
        onClick={() => {
          setIsOpen((prev) => !prev);

          setTimeout(() => {
            if (buttonRef1.current) {
              buttonRef1.current.blur();
            }
          }, 100);
        }}
        className="hover:text-shadow-light dark:hover:text-shadow flex items-center justify-end font-semibold italic hover:text-cyan-500 focus:text-cyan-500 focus:outline-none dark:hover:text-cyan-300 dark:focus:text-cyan-300"
      >
        <AiOutlineMenu size={48} />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute h-[350px] w-[calc(100vw-20px)] origin-top-right rounded-md bg-[#d7d9dd] bg-opacity-75 ring-1 ring-black ring-opacity-5 dark:bg-slate-800 dark:bg-opacity-75 md:hidden">
            <div className="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-gradient-to-r from-[#1b2129] to-[#111213] shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-[4px] py-1 text-white">
                <div className="hover:text-shadow flex w-full items-center gap-4 border-b border-b-cyan-300 px-4 py-2 text-sm font-semibold italic hover:text-cyan-300">
                  <a
                    href="https://drive.google.com/file/d/1fj2d6UDWcFvXW36W7vBSjLvpzcqTvkrl/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("header.resume")}
                  </a>
                </div>
                <div className="hover:text-shadow flex w-full items-center gap-4 border-b border-b-cyan-300 px-4 py-2 text-sm font-semibold italic hover:text-cyan-300">
                  <a href="#portfolio">{t("header.portfolio")}</a>
                </div>
                <div className="hover:text-shadow flex w-full items-center gap-4 border-b border-b-cyan-300 px-4 py-2 text-sm font-semibold italic hover:text-cyan-300">
                  <a href="#about">{t("header.about")}</a>
                </div>
                <div className="hover:text-shadow flex w-full items-center gap-4 border-b border-b-cyan-300 px-4 py-2 text-sm font-semibold italic hover:text-cyan-300">
                  <a href="#stack">{t("header.stack")}</a>
                </div>
                <li className="hover:text-shadow flex w-full items-center gap-4 px-4 py-2 text-sm italic hover:text-cyan-300">
                  <SettingsDropdown
                    setIsDarkMode={setIsDarkMode}
                    IsDarkMode={isDarkMode}
                    onClose={() => setIsOpen(false)}
                    type={"mobile"}
                  />
                </li>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export { MobileDropdown };
