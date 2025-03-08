import React from "react";
import perfilPhoto from "../assets/images/IMG_3688.jpg";

const Jumbo = () => {
  return (
    <section className="w-full px-5 py-8 md:flex md:h-[750px] md:items-center md:justify-center md:justify-items-center md:py-0 lg:px-24 xl:px-40">
      <div className="flex w-full flex-col items-center justify-center md:flex-row md:justify-items-center xl:items-center xl:justify-center">
        <img
          className="h-60 w-60 rounded-full border-4 border-cyan-300 object-cover p-2 shadow-lg md:h-52 md:w-52 xl:h-80 xl:w-80"
          src={perfilPhoto}
          alt="perfil"
        />
        <p className="text-shadow my-5 w-full text-center text-sm text-white drop-shadow-2xl md:w-2/3 md:pl-8 md:text-left md:text-xl xl:px-20">
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
