import React from "react";
import TranslationWrapper from "./TranslationWrapper";
import AnimatedJumbo from "./AnimatedJumbo";

const About = () => {
  return (
    <>
      <AnimatedJumbo>
        <section
          id="about"
          className="mx-auto mb-20 flex w-full flex-col px-5 md:max-w-2xl md:px-0 xl:max-w-4xl"
        >
          <AnimatedJumbo>
            <h1 className="text-shadow-light dark:text-shadow mb-8 mt-4 text-center text-3xl font-semibold italic text-slate-800 dark:text-white md:text-left md:text-[40px]">
              {<TranslationWrapper translationKey="about.title" />}
            </h1>
          </AnimatedJumbo>
          <article className="flex w-full flex-col items-center gap-8 md:max-w-2xl md:flex-row xl:max-w-4xl">
            <p className="order-2 text-sm text-slate-800 dark:text-gray-300 md:order-1 md:text-base">
              {<TranslationWrapper translationKey="about.introduction" />}{" "}
              <strong className="font-semibold text-cyan-500 dark:text-cyan-300">
                {<TranslationWrapper translationKey="about.electronicEngineer" />}
              </strong>
              {<TranslationWrapper translationKey="about.fragment1" />}{" "}
              <strong className="font-semibold text-cyan-500 dark:text-cyan-300">
                {<TranslationWrapper translationKey="about.leadership" />}
              </strong>
              {<TranslationWrapper translationKey="about.fragment1b" />}{" "}
              <strong className="font-semibold text-cyan-500 dark:text-cyan-300">
                {<TranslationWrapper translationKey="about.criticalProblems" />}
              </strong>
              {<TranslationWrapper translationKey="about.fragment2" />}{" "}
              <strong className="font-semibold text-cyan-500 dark:text-cyan-300">
                {<TranslationWrapper translationKey="about.reliable" />}
              </strong>
              <br />
              <br />
              {<TranslationWrapper translationKey="about.fragment3" />}{" "}
              <strong className="font-semibold text-cyan-500 dark:text-cyan-300">
                {<TranslationWrapper translationKey="about.webDevelopment" />}
              </strong>
              {<TranslationWrapper translationKey="about.fragment4" />}{" "}
              <strong className="font-semibold text-cyan-500 dark:text-cyan-300">
                {<TranslationWrapper translationKey="about.fullstackApps" />}
              </strong>
              {<TranslationWrapper translationKey="about.fragment5" />}{" "}
              <strong className="font-semibold text-cyan-500 dark:text-cyan-300">
                {<TranslationWrapper translationKey="about.stack" />}
              </strong>
              {<TranslationWrapper translationKey="about.fragment6" />}
              <br />
              <br />
              {<TranslationWrapper translationKey="about.fragment7" />}{" "}
              <strong className="font-semibold text-cyan-500 dark:text-cyan-300">
                {<TranslationWrapper translationKey="about.realClients" />}
              </strong>
              {<TranslationWrapper translationKey="about.fragment8" />}{" "}
              <strong className="font-semibold text-cyan-500 dark:text-cyan-300">
                {<TranslationWrapper translationKey="about.tangibleProblems" />}
              </strong>
              <br />
              <br />
              {<TranslationWrapper translationKey="about.fragment9" />}{" "}
              <strong className="font-semibold text-cyan-500 dark:text-cyan-300">
                {<TranslationWrapper translationKey="about.uniquePerspective" />}
              </strong>
              {<TranslationWrapper translationKey="about.fragment10" />}
            </p>
            <picture className="order-1 flex w-full items-center justify-center rounded-xl md:order-2 lg:mb-0">
              <div className="animate-gradient-flow dark:animate-gradient-flow max-h-[250px] max-w-[250px] rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-300 to-cyan-100 bg-[length:200%_200%] dark:bg-gradient-to-r dark:from-cyan-500 dark:via-cyan-300 dark:to-cyan-100 dark:bg-[length:200%_200%]">
                <img
                  className="max-h-[250px] max-w-[250px] rounded-xl object-cover p-1"
                  src="https://res.cloudinary.com/smartpocket/image/upload/v1744844774/porfolio/IMG_2751_nttih5.jpg"
                  alt="Mauricio Ocampo - Electronics Engineer & Fullstack Developer"
                />
              </div>
            </picture>
          </article>
        </section>
      </AnimatedJumbo>
    </>
  );
};

export { About };
