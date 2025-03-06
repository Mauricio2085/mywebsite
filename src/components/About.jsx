import React from "react";
import PerfilLogo from "../assets/images/IMG_3686.jpg";

const About = () => {
  return (
    <>
      <div className="flex h-fit flex-col items-center bg-gradient-to-r from-[#1b2129] to-[#111213] px-5 py-8 md:flex md:w-full md:flex-row md:px-60 md:py-20">
        <section className="flex w-full flex-col md:w-1/2">
          <h1 className="mb-4 text-4xl font-semibold text-slate-200 md:text-6xl">About me</h1>
          <p className="h-full text-base text-gray-300">
            Deserunt et incididunt nisi qui qui non eu anim magna nulla incididunt veniam laboris.
            Voluptate fugiat ullamco labore sit exercitation id ea pariatur Lorem excepteur nisi
            occaecat minim. Id minim eiusmod esse pariatur aute.Enim laborum enim quis occaecat
            culpa enim. Qui ullamco nostrud occaecat anim adipisicing nulla velit mollit enim.
            Mollit incididunt laborum ex laborum ipsum. Adipisicing exercitation pariatur eu sit
            elit excepteur laboris qui mollit ad ea. Lorem officia sint elit consequat et aute
            fugiat non deserunt ipsum. Duis commodo do officia cupidatat proident aliqua ea proident
            Lorem.
            <br />
            <br />
          </p>
        </section>
        <section className="w-full md:w-1/2">
          <picture className="flex h-1/4 w-full justify-center rounded-xl md:flex md:justify-center">
            <img className="h-1/4 w-1/2 rounded-xl object-cover" src={PerfilLogo} alt="Optional" />
          </picture>
        </section>
      </div>
    </>
  );
};

export { About };
