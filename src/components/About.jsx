import React from "react";
import PerfilLogo from "../assets/images/IMG_2751.jpg";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="flex flex-col items-center justify-center bg-gradient-to-r from-[#1b2129] to-[#111213] px-5 md:w-full lg:h-[750px] lg:flex-row lg:px-24 xl:px-40"
      >
        <section className="flex w-full max-w-5xl flex-col items-center">
          <h1 className="py-8 text-3xl font-semibold text-slate-200 md:py-12 md:text-[40px]">
            ABOUT ME
          </h1>
          <p className="pb-8 text-center text-sm text-gray-300 md:text-base">
            I have always been passionate about technology and problem-solving. For several years, I
            worked in industrial automation, where I developed skills in process control and system
            optimization. However, my curiosity about software and its impact on the industry led me
            to explore web development, a field where I found my true calling. I specialize in
            JavaScript, React, and Node.js, building full-stack applications with a focus on
            frontend development. I enjoy designing intuitive interfaces and optimizing user
            experience while ensuring that my code is clean, maintainable, and scalable.
            Additionally, I strive to follow best development practices, including design patterns
            and automated testing. Currently, I am continuously improving my skills and exploring
            modern technologies to create efficient and high-performance solutions. I am looking for
            opportunities to contribute my knowledge and continue growing as a developer.
            <br />
            <br />
          </p>
        </section>
        <picture className="mb-20 flex h-max w-full items-center justify-center rounded-xl lg:mb-0">
          <img
            className="max-w-[250px] rounded-xl object-cover lg:max-w-[300px] xl:max-w-sm"
            src={PerfilLogo}
            alt="Optional"
          />
        </picture>
      </section>
    </>
  );
};

export { About };
