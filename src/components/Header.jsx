import React from "react";
import { SettingsDropdown } from "./SettingsDropdown";
import { MobileDropdown } from "./MobileDropdown";
import ThemeHandlerDropdowns from "./ThemeHandlerDropdowns";
import TranslationWrapper from "./TranslationWrapper";

const Header = () => {
  return (
    <header className="mx-auto block w-full px-5 pt-8 text-2xl text-slate-800 dark:text-gray-300 md:flex md:max-w-2xl md:flex-row-reverse md:items-center md:justify-between md:px-0 md:pb-20 md:pt-20 xl:max-w-4xl xl:pb-40">
      <ThemeHandlerDropdowns mobile={"mobile"} />
      <nav>
        <ul className="hidden md:flex md:h-7 md:w-full md:items-center md:justify-end md:text-base">
          <li
            id="resume"
            className="hover:text-shadow-light dark:hover:text-shadow ml-11 flex justify-end font-semibold italic hover:text-cyan-500 dark:hover:text-cyan-300"
          >
            <a
              href="https://drive.google.com/file/d/1fj2d6UDWcFvXW36W7vBSjLvpzcqTvkrl/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              {<TranslationWrapper translationKey="header.resume" />}
            </a>
          </li>
          <li className="hover:text-shadow-light dark:hover:text-shadow ml-11 flex justify-end font-semibold italic hover:text-cyan-500 dark:hover:text-cyan-300">
            <a href="#portfolio">{<TranslationWrapper translationKey="header.portfolio" />}</a>
          </li>
          <li className="hover:text-shadow-light dark:hover:text-shadow ml-11 flex justify-end font-semibold italic hover:text-cyan-500 dark:hover:text-cyan-300">
            <a href="#about">{<TranslationWrapper translationKey="header.about" />}</a>
          </li>
          <li className="hover:text-shadow-light dark:hover:text-shadow ml-11 flex justify-end font-semibold italic hover:text-cyan-500 dark:hover:text-cyan-300">
            <a href="#stack">{<TranslationWrapper translationKey="header.stack" />}</a>
          </li>
          <ThemeHandlerDropdowns />
        </ul>
      </nav>
    </header>
  );
};

export { Header };
