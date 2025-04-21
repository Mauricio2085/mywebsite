import React, { useState, useRef, useEffect } from "react";

const SettingsDropdown = ({ type }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // const typeMenu = type === "mobile" ? "md:hidden" : "hidden md:inline-block";
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
        className="hover:text-shadow flex items-center justify-end font-semibold italic shadow-lg hover:text-cyan-300 focus:text-cyan-300 focus:outline-none"
      >
        Settings
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
                  console.log("Cambiar idioma");
                }}
              >
                Translate
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
                  console.log("Cambiar tema");
                }}
              >
                Light mode
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
                  console.log("Cambiar tema");
                }}
              >
                Dark mode
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { SettingsDropdown };
