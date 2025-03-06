import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <header className=" w-full bg-gradient-to-r from-[#1b2129] to-[#111213] block md:flex md:flex-row-reverse md:items-center md:justify-between h-20 xl:h-20 text-2xl font-[ubuntu] pt-8 px-5 xl:px-60 text-gray-300">
      <div className=" md:hidden w-12 h-12">
        <AiOutlineMenu size={48} />
      </div>
      <nav>
        <ul className="hidden md:text-sm md:flex md:w-full md:justify-end md:h-7 md:items-center">
          <li
            id="resume"
            className=" font-semibold italic mr-11 shadow-lg shadowHover rounded-md"
          >
            Resume
          </li>
          <li className=" font-semibold italic mr-11 shadow-lg shadowHover">
            Portfolio
          </li>
          <li className=" font-semibold italic mr-11 items-center shadow-lg shadowHover">
            About me
          </li>
          <li className=" font-semibold italic mr-11 shadow-lg shadowHover">
            Settings
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
