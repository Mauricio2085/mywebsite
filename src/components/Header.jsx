import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { SettingsDropdown } from "./SettingsDropdown";
import { MobileDropdown } from "./MobileDropdown";

const Header = () => {
  return (
    <header className="mx-auto block w-full px-5 pt-8 text-2xl text-gray-300 md:flex md:max-w-2xl md:flex-row-reverse md:items-center md:justify-between md:px-0 md:pb-20 md:pt-20 xl:max-w-4xl xl:pb-40">
      <div className="h-12 w-12 md:hidden">
        <MobileDropdown />
      </div>
      <nav>
        <ul className="hidden md:flex md:h-7 md:w-full md:items-center md:justify-end md:text-base">
          <li
            id="resume"
            className="hover:text-shadow ml-11 flex justify-end rounded-md font-semibold italic shadow-lg hover:text-cyan-300"
          >
            <a
              href="./CV-Jose Mauricio Ocampo Marulanda - Frontend developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
          <li className="hover:text-shadow ml-11 flex justify-end font-semibold italic shadow-lg hover:text-cyan-300">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="hover:text-shadow ml-11 flex justify-end font-semibold italic shadow-lg hover:text-cyan-300">
            <a href="#about">About me</a>
          </li>
          <li className="hover:text-shadow ml-11 flex justify-end font-semibold italic shadow-lg hover:text-cyan-300">
            <a href="#stack">Stack</a>
          </li>
          <li className="ml-11 flex justify-end">
            <SettingsDropdown type="desktop" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
