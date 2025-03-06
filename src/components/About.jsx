import React from "react";
import PerfilLogo from "../assets/images/IMG_3686.jpg";

const About = () => {
  return (
    <>
      <div className=" flex flex-col md:flex md:flex-row md:w-full items-center bg-gradient-to-r from-[#1b2129] to-[#111213] px-5 md:px-60 py-8 md:py-20 h-fit">
        <section className="w-full md:w-1/2 flex flex-col">
          <h1 className=" text-slate-200 text-4xl md:text-6xl font-semibold mb-4">
            About me
          </h1>
          <p className="text-gray-300 text-base h-full">
            Deserunt et incididunt nisi qui qui non eu anim magna nulla
            incididunt veniam laboris. Voluptate fugiat ullamco labore sit
            exercitation id ea pariatur Lorem excepteur nisi occaecat minim. Id
            minim eiusmod esse pariatur aute.Enim laborum enim quis occaecat
            culpa enim. Qui ullamco nostrud occaecat anim adipisicing nulla
            velit mollit enim. Mollit incididunt laborum ex laborum ipsum.
            Adipisicing exercitation pariatur eu sit elit excepteur laboris qui
            mollit ad ea. Lorem officia sint elit consequat et aute fugiat non
            deserunt ipsum. Duis commodo do officia cupidatat proident aliqua ea
            proident Lorem.
            <br />
            <br />
          </p>
        </section>
        <section className="w-full md:w-1/2  ">
          <picture className=" w-full h-1/4 rounded-xl flex justify-center md:flex md:justify-center">
            <img
              className=" w-1/2 h-1/4 rounded-xl object-cover"
              src={PerfilLogo}
              alt="Optional"
            />
          </picture>
        </section>
      </div>
    </>
  );
};

export { About };
