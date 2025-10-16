import React from "react";
import { useTranslation } from "react-i18next";
const Project = ({ projectName, image, description, skills, demo, github }) => {
  const { t } = useTranslation();
  return (
    <div className="group mb-10 flex flex-col overflow-hidden md:flex-row">
      {/* Imagen del proyecto */}
      <div className="w-full transform rounded-2xl p-2 duration-[700ms] ease-in-out group-hover:scale-[1.02] md:w-1/2">
        <img
          className="rounded-2xl border border-cyan-500 object-cover object-top dark:border-cyan-300"
          src={image}
          alt="Project Preview"
          loading="lazy"
        />
      </div>

      {/* Contenido */}
      <div className="flex w-full flex-1 flex-col justify-between md:max-w-lg">
        {/* Título */}
        <h1 className="px-4 py-2 text-2xl font-semibold text-slate-800 dark:text-white">
          {projectName}
        </h1>

        {/* Skills */}
        <div className="flex flex-wrap items-center px-4 py-2">
          <h3 className="text-shadow-light dark:text-shadow mr-2 text-sm font-semibold text-cyan-500 dark:text-cyan-300">
            {t("portfolio.projects.skills")}
          </h3>
          {skills.map((skill) => (
            <div key={skill.id} className="mr-2 text-xl text-gray-600">
              {skill.icon}
            </div>
          ))}
        </div>

        {/* Descripción */}
        <p className="px-4 py-2 text-sm text-slate-500 dark:text-gray-300 md:text-base">
          {description}
        </p>

        {/* Footer */}
        <div className="mt-auto flex items-center gap-4 px-4 py-2">
          <a
            className="flex h-10 w-[100px] items-center justify-between rounded-lg border border-cyan-500 bg-[#1b2129] px-2 py-2 text-sm font-semibold text-white transition-colors duration-500 hover:bg-cyan-500 hover:text-[#1b2129] dark:border-cyan-300 dark:hover:bg-cyan-300"
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="h-5 w-5">
              <img
                className=""
                src="https://res.cloudinary.com/smartpocket/image/upload/v1744861505/porfolio/link_rmd2zm.svg"
                alt="Logo Link"
              />
            </span>
            <span>{t("portfolio.projects.previewButton")}</span>
          </a>
          <a
            className="flex h-10 w-[100px] items-center justify-between rounded-lg border border-cyan-500 bg-[#1b2129] px-2 py-2 text-sm font-semibold text-white transition-colors duration-500 hover:bg-cyan-500 hover:text-[#1b2129] dark:border-cyan-300 dark:hover:bg-cyan-300 dark:hover:text-[#1b2129]"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="h-5 w-5">
              <img
                className=""
                src="https://res.cloudinary.com/smartpocket/image/upload/v1744861513/porfolio/github_g29zhg.svg"
                alt="Logo Github"
              />
            </span>
            <span>{t("portfolio.projects.githubButton")}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export { Project };
