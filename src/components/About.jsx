import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <section
          id="about"
          className="mx-auto mb-20 flex w-full flex-col px-5 md:max-w-2xl md:px-0 xl:max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-shadow-light dark:text-shadow mb-8 mt-4 text-center text-3xl font-semibold italic text-slate-800 dark:text-white md:text-left md:text-[40px]">
              {t("about.title")}
            </h1>
          </motion.div>
          <article className="flex w-full flex-col items-center gap-8 md:max-w-2xl md:flex-row xl:max-w-4xl">
            <p className="order-2 text-sm text-slate-800 dark:text-gray-300 md:order-1 md:text-base">
              {t("about.introduction")}{" "}
              <strong className="font-semibold text-cyan-500 dark:text-cyan-300">
                {t("about.electronicEngineer")}
              </strong>
              {t("about.fragment1")}{" "}
              <strong className="font-semibold text-cyan-500 dark:text-cyan-300">
                {t("about.leadership")}
              </strong>
              {t("about.fragment1b")}{" "}
              <strong className="font-semibold text-cyan-500 dark:text-cyan-300">
                {t("about.criticalProblems")}
              </strong>
              {t("about.fragment2")}{" "}
              <strong className="font-semibold text-cyan-500 dark:text-cyan-300">
                {t("about.reliable")}
              </strong>
              <br />
              <br />
              {t("about.fragment3")}{" "}
              <strong className="font-semibold text-cyan-500 dark:text-cyan-300">
                {t("about.webDevelopment")}
              </strong>
              {t("about.fragment4")}{" "}
              <strong className="font-semibold text-cyan-500 dark:text-cyan-300">
                {t("about.fullstackApps")}
              </strong>
              {t("about.fragment5")}{" "}
              <strong className="font-semibold text-cyan-500 dark:text-cyan-300">
                {t("about.stack")}
              </strong>
              {t("about.fragment6")}
              <br />
              <br />
              {t("about.fragment7")}{" "}
              <strong className="font-semibold text-cyan-500 dark:text-cyan-300">
                {t("about.realClients")}
              </strong>
              {t("about.fragment8")}{" "}
              <strong className="font-semibold text-cyan-500 dark:text-cyan-300">
                {t("about.tangibleProblems")}
              </strong>
              <br />
              <br />
              {t("about.fragment9")}{" "}
              <strong className="font-semibold text-cyan-500 dark:text-cyan-300">
                {t("about.uniquePerspective")}
              </strong>
              {t("about.fragment10")}
            </p>
            <picture className="order-1 flex w-full items-center justify-center rounded-xl md:order-2 lg:mb-0">
              <img
                className="max-h-[250px] max-w-[250px] rounded-xl border-4 border-cyan-500 object-cover"
                src="https://res.cloudinary.com/smartpocket/image/upload/v1744844774/porfolio/IMG_2751_nttih5.jpg"
                alt="Mauricio Ocampo - Electronics Engineer & Fullstack Developer"
              />
            </picture>
          </article>
        </section>
      </motion.div>
    </>
  );
};

export { About };
