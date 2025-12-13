import React from "react";
import AnimatedJumbo from "./AnimatedJumbo";
import { ProjectData } from "./ProjectData";
import TranslationWrapper from "./TranslationWrapper";

const Portfolio = () => {
  return (
    <>
      <main id="portfolio" className="items-center px-5 md:px-0">
        <AnimatedJumbo>
          <div className="mx-auto md:flex md:w-full md:max-w-2xl md:flex-col md:rounded-md xl:max-w-4xl">
            <AnimatedJumbo>
              <h1 className="text-shadow-light dark:text-shadow mb-8 px-4 pt-4 text-center text-3xl font-semibold italic text-slate-800 dark:text-white md:text-left md:text-[40px]">
                {<TranslationWrapper translationKey="portfolio.title" />}
              </h1>
            </AnimatedJumbo>
            <p className="mb-10 w-full px-4 text-sm font-normal text-slate-800 dark:text-gray-300 md:mb-20 md:text-xl">
              {<TranslationWrapper translationKey="portfolio.description" />}
            </p>
            <ProjectData />
          </div>
        </AnimatedJumbo>
      </main>
    </>
  );
};

export { Portfolio };
