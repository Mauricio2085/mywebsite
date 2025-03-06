import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { MdWhatsapp } from "react-icons/md";

const Footer = () => {
  return (
    <footer className=" pb-8 px-5 md:px-60 text-slate-200 w-full flex flex-col justify-center items-center md:flex md:flex-row md:justify-between md:items-center font-[ubuntu] h-80 bg-gradient-to-r from-second-dark to-principal-dark border-t border-slate-200">
      <div className=" w-full md:w-1/2 flex flex-col justify-center md:items-start items-center">
        <a className="text-md mt-1">Cel: +57 310 678 9371</a>
        <p className="mt-1">Pereira - Risaralda - Colombia</p>
      </div>
      <div className="w-full md:w-auto flex flex-row justify-center md:items-end items-center my-8">
        <div className=" flex justify-center items-center w-12 h-12 md:ml-2">
          <AiFillLinkedin size={32} />
        </div>
        <div className=" flex justify-center items-center w-12 h-12 md:ml-2">
          <AiOutlineGithub size={32} />
        </div>
        <div className=" flex justify-center items-center w-12 h-12 md:ml-2">
          <MdWhatsapp size={32} />
        </div>
      </div>
    </footer>
  );
};

export { Footer };
