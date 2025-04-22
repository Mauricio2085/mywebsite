import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Jumbo = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <section className="mb-20 w-full px-5 md:flex md:h-[350px] md:items-center md:justify-center md:justify-items-center md:px-0 md:py-0">
        <div className="flex w-full flex-col items-center justify-center md:max-w-2xl md:flex-row md:justify-items-center xl:max-w-4xl xl:items-center xl:justify-center">
          <img
            className="h-60 w-60 rounded-full border-4 border-cyan-500 object-cover p-2 shadow-lg dark:border-cyan-300"
            src="https://res.cloudinary.com/smartpocket/image/upload/v1744844824/porfolio/IMG_3688_khelzi.jpg"
            alt="perfil"
          />
          <p className="text-shadow my-5 w-full text-center text-sm text-slate-800 drop-shadow-2xl dark:text-white md:w-2/3 md:pl-8 md:text-left md:text-xl xl:pl-20">
            {t("jumbo.greeting")}{" "}
            <span className="font-bold text-cyan-500 dark:text-cyan-300">{t("jumbo.name")}</span>
            {t("jumbo.toBe")}
            <span className="font-bold text-cyan-500 dark:text-cyan-300">
              {t("jumbo.engineering")}
            </span>{" "}
            {t("jumbo.and")}{" "}
            <span className="font-bold text-cyan-500 dark:text-cyan-300">
              {t("jumbo.developer")}
            </span>
            {t("jumbo.complement")}
          </p>
        </div>
      </section>
    </motion.div>
  );
};

export { Jumbo };
