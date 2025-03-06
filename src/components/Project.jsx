import React from "react";
import { BiSolidLike } from "react-icons/bi";

const Project = ({ projectName, image, description, avatar, skills }) => {
  return (
    <div className="flex flex-col rounded-xl bg-white shadow-lg w-80 mb-8 overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
      {/* Header */}
      <div className="flex items-center p-4 bg-gray-100">
        <div className="w-10 h-10">{avatar}</div>
        <h4 className="ml-3 text-lg font-semibold text-gray-800">
          {projectName}
        </h4>
      </div>

      {/* Image */}
      <img
        className="w-full h-40 object-cover"
        src={image}
        alt="Project Preview"
      />

      {/* Description */}
      <p className="p-4 text-sm text-gray-600">{description}</p>

      {/* Skills */}
      <div className="px-4 py-2 flex flex-wrap items-center">
        <span className="text-sm font-semibold text-gray-700 mr-2">
          Skills:
        </span>
        {skills.map((skill) => (
          <div key={skill.id} className="text-gray-600 text-xl mr-2">
            {skill.icon}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center p-4 bg-gray-100 border-t">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
          Conoce más...
        </button>
        <button className="text-gray-600 hover:text-blue-500 transition-colors">
          <BiSolidLike size={24} />
        </button>
      </div>
    </div>
  );
};

export { Project };
