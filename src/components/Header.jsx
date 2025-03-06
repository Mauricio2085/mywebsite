import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <header className="block h-20 w-full bg-gradient-to-r from-[#1b2129] to-[#111213] px-5 pt-8 font-[ubuntu] text-2xl text-gray-300 md:flex md:flex-row-reverse md:items-center md:justify-between xl:h-20 xl:px-60">
      <div className="h-12 w-12 md:hidden">
        <AiOutlineMenu size={48} />
      </div>
      <nav>
        <ul className="hidden md:flex md:h-7 md:w-full md:items-center md:justify-end md:text-sm">
          <li id="resume" className="shadowHover mr-11 rounded-md font-semibold italic shadow-lg">
            Resume
          </li>
          <li className="shadowHover mr-11 font-semibold italic shadow-lg">Portfolio</li>
          <li className="shadowHover mr-11 items-center font-semibold italic shadow-lg">
            About me
          </li>
          <li className="shadowHover mr-11 font-semibold italic shadow-lg">Settings</li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
