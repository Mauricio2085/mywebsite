import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <section
        id="about"
        className="mx-auto mb-20 flex w-full flex-col px-5 md:max-w-2xl md:px-0 xl:max-w-4xl"
      >
        <h1 className="text-shadow-light dark:text-shadow mb-8 mt-4 text-center text-3xl font-semibold italic text-slate-800 dark:text-white md:text-left md:text-[40px]">
          {t("about.title")}
        </h1>
        <article className="flex w-full flex-col items-center gap-8 md:max-w-2xl md:flex-row xl:max-w-4xl">
          <p className="order-2 text-sm text-slate-800 dark:text-gray-300 md:order-1 md:text-base">
            {t("about.introduction")}{" "}
            <strong className="font-semibold text-cyan-500 dark:text-cyan-300">
              {t("about.automation")}
            </strong>
            {t("about.fragment1")}{" "}
            <strong className="font-semibold text-cyan-500 dark:text-cyan-300">
              {t("about.stack")}
            </strong>
            {t("about.fragment2")}{" "}
            <strong className="font-semibold text-cyan-500 dark:text-cyan-300">
              {t("about.frontend")}
            </strong>
            {t("about.fragment3")}{" "}
            <strong className="font-semibold text-cyan-500 dark:text-cyan-300">
              {t("about.codeAtributte")}
            </strong>
            {t("about.fragment4")}{" "}
            <strong className="font-semibold text-cyan-500 dark:text-cyan-300">
              {t("about.bestPractices")}
            </strong>
            {t("about.fragment5")}
            <br />
          </p>
          <picture className="order-1 flex w-full items-center justify-center rounded-xl md:order-2 lg:mb-0">
            <img
              className="max-h-[250px] max-w-[250px] rounded-xl border-4 border-cyan-500 object-cover"
              src="https://res.cloudinary.com/smartpocket/image/upload/v1744844774/porfolio/IMG_2751_nttih5.jpg"
              alt="Optional"
            />
          </picture>
        </article>
      </section>
    </>
  );
};

export { About };
