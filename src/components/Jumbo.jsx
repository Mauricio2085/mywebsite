import React from "react";

const Jumbo = () => {
  return (
    <section className="mb-20 w-full px-5 md:flex md:h-[350px] md:items-center md:justify-center md:justify-items-center md:px-0 md:py-0">
      <div className="flex w-full flex-col items-center justify-center md:max-w-2xl md:flex-row md:justify-items-center xl:max-w-4xl xl:items-center xl:justify-center">
        <img
          className="h-60 w-60 rounded-full border-4 border-cyan-300 object-cover p-2 shadow-lg"
          src="https://res.cloudinary.com/smartpocket/image/upload/v1744844824/porfolio/IMG_3688_khelzi.jpg"
          alt="perfil"
        />
        <p className="text-shadow my-5 w-full text-center text-sm text-white drop-shadow-2xl md:w-2/3 md:pl-8 md:text-left md:text-xl xl:pl-20">
          Hi! My name is <span className="font-bold text-cyan-300">Mauricio Ocampo</span>. I'm an{" "}
          <span className="font-bold">Electronic Engineer</span> and{" "}
          <span className="font-bold">Fullstack Developer</span>. I work with passion, a great
          attitude, and always give my best to help others.
        </p>
      </div>
    </section>
  );
};

export { Jumbo };
