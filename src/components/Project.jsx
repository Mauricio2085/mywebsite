import React from "react";
import { BiSolidLike } from "react-icons/bi";

const Project = ({ projectName, image, description, avatar, skills }) => {
  return (
    <div className="mb-8 flex w-80 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl">
      {/* Header */}
      <div className="flex items-center bg-gray-100 p-4">
        <div className="h-10 w-10">{avatar}</div>
        <h4 className="ml-3 text-lg font-semibold text-gray-800">{projectName}</h4>
      </div>

      {/* Image */}
      <img className="h-40 w-full object-cover" src={image} alt="Project Preview" />

      {/* Description */}
      <p className="p-4 text-sm text-gray-600">{description}</p>

      {/* Skills */}
      <div className="flex flex-wrap items-center px-4 py-2">
        <span className="mr-2 text-sm font-semibold text-gray-700">Skills:</span>
        {skills.map((skill) => (
          <div key={skill.id} className="mr-2 text-xl text-gray-600">
            {skill.icon}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t bg-gray-100 p-4">
        <button className="rounded-lg bg-[#1b2129] px-4 py-2 text-sm font-semibold text-white transition-colors hover:text-[#1b2129] hover:text-shadow hover:bg-cyan-300">
          Conoce más ...
        </button>
        <button className="text-gray-600 transition-colors hover:text-blue-500">
          <BiSolidLike size={24} />
        </button>
      </div>
    </div>
  );
};

export { Project };
