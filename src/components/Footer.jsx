import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { MdWhatsapp } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="flex h-80 w-full flex-col items-center justify-center border-t border-slate-200 bg-gradient-to-r from-second-dark to-principal-dark px-5 pb-8 font-[ubuntu] text-slate-200 md:flex md:flex-row md:items-center md:justify-between lg:px-24 xl:px-40">
      <div className="flex w-full flex-col items-center justify-center md:w-1/2 md:items-start">
        <a className="text-md mt-1">Cel: +57 310 678 9371</a>
        <p className="mt-1">Pereira - Risaralda - Colombia</p>
      </div>
      <div className="my-8 flex w-full flex-row items-center justify-center md:w-auto md:items-end">
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
