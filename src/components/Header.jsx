import React from "react";
import { SettingsDropdown } from "./SettingsDropdown";
import { MobileDropdown } from "./MobileDropdown";
import { useDarkMode } from "../hooks/useDarkMode";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  const { t } = useTranslation();
  return (
    <header className="mx-auto block w-full px-5 pt-8 text-2xl text-slate-800 dark:text-gray-300 md:flex md:max-w-2xl md:flex-row-reverse md:items-center md:justify-between md:px-0 md:pb-20 md:pt-20 xl:max-w-4xl xl:pb-40">
      <div className="h-12 w-12 md:hidden">
        <MobileDropdown setIsDarkMode={setIsDarkMode} IsDarkMode={isDarkMode} />
      </div>
      <nav>
        <ul className="hidden md:flex md:h-7 md:w-full md:items-center md:justify-end md:text-base">
          <li
            id="resume"
            className="hover:text-shadow-light dark:hover:text-shadow ml-11 flex justify-end font-semibold italic hover:text-cyan-500 dark:hover:text-cyan-300"
          >
            <a
              href="./CV-Jose Mauricio Ocampo Marulanda - Frontend developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("header.resume")}
            </a>
          </li>
          <li className="hover:text-shadow-light dark:hover:text-shadow ml-11 flex justify-end font-semibold italic hover:text-cyan-500 dark:hover:text-cyan-300">
            <a href="#portfolio">{t("header.portfolio")}</a>
          </li>
          <li className="hover:text-shadow-light dark:hover:text-shadow ml-11 flex justify-end font-semibold italic hover:text-cyan-500 dark:hover:text-cyan-300">
            <a href="#about">{t("header.about")}</a>
          </li>
          <li className="hover:text-shadow-light dark:hover:text-shadow ml-11 flex justify-end font-semibold italic hover:text-cyan-500 dark:hover:text-cyan-300">
            <a href="#stack">{t("header.stack")}</a>
          </li>
          <li className="ml-11 flex justify-end">
            <SettingsDropdown
              setIsDarkMode={setIsDarkMode}
              IsDarkMode={isDarkMode}
              type="desktop"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
