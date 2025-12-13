import TranslationWrapper from "./TranslationWrapper";
import AnimatedJumbo from "./AnimatedJumbo";

const Jumbo = () => {
  return (
    <AnimatedJumbo>
      <section className="mb-20 w-full px-5 md:flex md:h-[350px] md:items-center md:justify-center md:justify-items-center md:px-0 md:py-0">
        <div className="flex w-full flex-col items-center justify-center md:max-w-2xl md:flex-row md:justify-items-center xl:max-w-4xl xl:items-center xl:justify-center">
          <img
            className="h-60 w-60 rounded-full border-4 border-cyan-500 object-cover p-2 shadow-lg dark:border-cyan-300"
            src="https://res.cloudinary.com/smartpocket/image/upload/v1744844824/porfolio/IMG_3688_khelzi.jpg"
            alt="perfil"
          />
          <p className="text-shadow my-5 w-full text-center text-sm text-slate-800 drop-shadow-2xl dark:text-white md:w-2/3 md:pl-8 md:text-left md:text-xl xl:pl-20">
            {<TranslationWrapper translationKey="jumbo.greeting" />}{" "}
            <span className="font-bold text-cyan-500 dark:text-cyan-300">
              {<TranslationWrapper translationKey="jumbo.name" />}
            </span>
            {<TranslationWrapper translationKey="jumbo.toBe" />}
            <span className="font-bold text-cyan-500 dark:text-cyan-300">
              {<TranslationWrapper translationKey="jumbo.engineering" />}
            </span>{" "}
            {<TranslationWrapper translationKey="jumbo.and" />}{" "}
            <span className="font-bold text-cyan-500 dark:text-cyan-300">
              {<TranslationWrapper translationKey="jumbo.developer" />}
            </span>
            {<TranslationWrapper translationKey="jumbo.complement" />}
          </p>
        </div>
      </section>
    </AnimatedJumbo>
  );
};

export { Jumbo };
