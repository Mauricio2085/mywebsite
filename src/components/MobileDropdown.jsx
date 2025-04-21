import React, { useState, useRef, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { SettingsDropdown } from "./SettingsDropdown";

const MobileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

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
        ref={buttonRef}
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);

          setTimeout(() => {
            if (buttonRef.current) {
              buttonRef.current.blur();
            }
          }, 100);
        }}
        className="hover:text-shadow flex items-center justify-end font-semibold italic shadow-lg hover:text-cyan-300 focus:text-cyan-300 focus:outline-none"
      >
        <AiOutlineMenu size={48} />
      </button>

      {isOpen && (
        <div className="absolute h-[350px] w-[calc(100vw-20px)] origin-top-right rounded-md bg-[#1b2129] bg-opacity-75 shadow-lg ring-1 ring-black ring-opacity-5 md:hidden">
          <div className="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-gradient-to-r from-[#1b2129] to-[#111213] shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-[4px] py-1 text-white">
              <div className="hover:text-shadow flex w-full items-center gap-4 border-b border-b-cyan-300 px-4 py-2 text-sm italic hover:text-cyan-300">
                <a
                  href="./CV-Jose Mauricio Ocampo Marulanda - Frontend developer.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </div>
              <div className="hover:text-shadow flex w-full items-center gap-4 border-b border-b-cyan-300 px-4 py-2 text-sm italic hover:text-cyan-300">
                <a href="#portfolio">Portfolio</a>
              </div>
              <div className="hover:text-shadow flex w-full items-center gap-4 border-b border-b-cyan-300 px-4 py-2 text-sm italic hover:text-cyan-300">
                <a href="#about">About me</a>
              </div>
              <div className="hover:text-shadow flex w-full items-center gap-4 border-b border-b-cyan-300 px-4 py-2 text-sm italic hover:text-cyan-300">
                <a href="#stack">Stack</a>
              </div>
              <li className="hover:text-shadow flex w-full items-center gap-4 px-4 py-2 text-sm italic hover:text-cyan-300">
                <SettingsDropdown type={"mobile"} />
              </li>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { MobileDropdown };
