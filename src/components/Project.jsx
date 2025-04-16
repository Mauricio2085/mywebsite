import React from "react";
import { BiSolidLike } from "react-icons/bi";
import github from "../assets/images/github.svg";
import link from "../assets/images/link.svg";

const Project = ({ projectName, image, description, avatar, skills }) => {
  return (
    <div className="group mb-10 flex flex-col overflow-hidden md:flex-row">
      {/* Imagen del proyecto */}
      <div className="w-full transform rounded-2xl p-2 duration-[700ms] ease-in-out group-hover:scale-[1.02] md:w-1/2">
        <img
          className="rounded-2xl border border-cyan-300 object-cover object-top"
          src={image}
          alt="Project Preview"
          loading="lazy"
        />
      </div>

      {/* Contenido */}
      <div className="flex w-full flex-1 flex-col justify-between md:max-w-lg">
        {/* Título */}
        <h1 className="px-4 py-2 text-2xl font-semibold text-white">{projectName}</h1>

        {/* Skills */}
        <div className="flex flex-wrap items-center px-4 py-2">
          <h3 className="text-shadow mr-2 text-sm font-semibold text-cyan-300">Skills:</h3>
          {skills.map((skill) => (
            <div key={skill.id} className="mr-2 text-xl text-gray-600">
              {skill.icon}
            </div>
          ))}
        </div>

        {/* Descripción */}
        <p className="px-4 py-2 text-sm text-gray-300 md:text-base">{description}</p>

        {/* Footer */}
        <div className="mt-auto flex items-center gap-4 px-4 py-4">
          <a
            className="flex h-10 w-[100px] items-center justify-between rounded-lg border border-cyan-300 bg-[#1b2129] px-2 py-2 text-sm font-semibold text-white transition-colors duration-500 hover:bg-cyan-300 hover:text-[#1b2129]"
            href="https://smart-pocket-v1.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="h-5 w-5">
              <img className="" src={link} alt="Logo Link" />
            </span>
            <span>Preview</span>
          </a>
          <a
            className="flex h-10 w-[100px] items-center justify-between rounded-lg border border-cyan-300 bg-[#1b2129] px-2 py-2 text-sm font-semibold text-white transition-colors duration-500 hover:bg-cyan-300 hover:text-[#1b2129]"
            href="https://github.com/Mauricio2085/smart-pocket-v1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="h-5 w-5">
              <img className="" src={github} alt="Logo Github" />
            </span>
            <span>Github</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export { Project };
