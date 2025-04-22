import React from "react";
import { motion } from "framer-motion";
import { Data } from "./Data";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <>
      <main id="portfolio" className="items-center px-5 md:px-0">
        <motion.div
          className="md:flex md:w-full md:flex-col md:items-center md:rounded-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mx-auto md:flex md:w-full md:max-w-2xl md:flex-col md:rounded-md xl:max-w-4xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-shadow-light dark:text-shadow mb-8 px-4 pt-4 text-center text-3xl font-semibold italic text-slate-800 dark:text-white md:text-left md:text-[40px]">
                {t("portfolio.title")}
              </h1>
            </motion.div>
            <p className="mb-10 w-full px-4 text-sm font-normal text-slate-800 dark:text-gray-300 md:mb-20 md:text-xl">
              {t("portfolio.description")}
            </p>
            <Data />
          </div>
        </motion.div>
      </main>
    </>
  );
};

export { Portfolio };
