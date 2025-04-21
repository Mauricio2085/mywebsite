import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { MdWhatsapp } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="mx-auto flex w-full flex-col items-center justify-center px-5 pb-20 pt-20 text-sm text-slate-800 dark:text-gray-300 md:flex md:max-w-2xl md:flex-row md:items-center md:px-0 md:text-base xl:max-w-4xl">
      <div className="flex w-full flex-col items-center justify-center md:items-start">
        <a className="text-md mt-1">Cel: +57 310 678 9371</a>
        <p className="mt-1">Pereira - Risaralda - Colombia</p>
      </div>
      <div className="flex w-full items-center justify-center py-5 md:justify-end">
        <div className="flex h-12 w-12 items-center justify-center md:ml-2">
          <a
            href="https://www.linkedin.com/in/jose-mauricio-ocampo-marulanda-92380a81"
            target="_blank"
          >
            <AiFillLinkedin size={32} />
          </a>
        </div>
        <div className="flex h-12 w-12 items-center justify-center md:ml-2">
          <a href="https://github.com/Mauricio2085" target="_blank">
            <AiOutlineGithub size={32} />
          </a>
        </div>
        <div className="flex h-12 w-12 items-center justify-center md:ml-2">
          <a href="https://wa.me/573106789371" target="_blank">
            <MdWhatsapp size={32} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
