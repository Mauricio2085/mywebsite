import React from "react";
import perfilPhoto from "../assets/images/IMG_2751.jpg";

const Jumbo = () => {
  return (
    <section className="w-full px-5 py-8 md:flex md:h-[600px] md:items-center md:justify-center md:justify-items-center md:py-0 lg:px-24 xl:px-40">
      <div className="flex w-full flex-col items-center justify-center md:flex-row md:justify-items-center xl:items-center xl:justify-center">
        <img
          className="h-60 w-60 rounded-full border-4 border-gray-300 object-cover p-2 shadow-lg xl:h-80 xl:w-80"
          src={perfilPhoto}
          alt="perfil"
        />
        <p className="txt-shadow my-5 w-full text-center font-[ubuntu] text-xl text-white drop-shadow-2xl md:w-3/4 md:pl-5 md:text-left xl:px-20">
          Hi! My name is <span className="font-bold text-blue-400">Mauricio Ocampo</span>. I'm an{" "}
          <span className="font-bold">Electronic Engineer</span> and{" "}
          <span className="font-bold">Fullstack Developer</span>. I work with passion, a great
          attitude, and always give my best to help others.
        </p>
      </div>
    </section>
  );
};

export { Jumbo };
