import React from "react";
import tailwindcss from "../assets/images/tailwindcss-mark.d52e9897.svg";
import git from "../assets/images/Git-Icon-1788C.svg";
import javascript from "../assets/images/javascript.svg";
import react from "../assets/images/react.svg";
import node from "../assets/images/nodejs.svg";
import postgresql from "../assets/images/postgresql.svg";
import express from "../assets/images/express.svg";
import nextjs from "../assets/images/nextjs.svg";
import typescript from "../assets/images/typescript.svg";

const Skills = () => {
  return (
    <section class="mx-auto mb-20 flex flex-col items-center justify-center px-5 md:max-w-2xl md:px-0 xl:max-w-4xl">
      <div class="flex w-full flex-1 flex-col text-center md:text-left">
        <h1 class="text-shadow mb-8 mt-4 text-3xl font-bold italic text-white md:text-[40px]">
          My Web Development Stack
        </h1>
        <p class="mb-20 text-sm font-normal text-gray-300 md:text-base">
          Modern frameworks and tools with which I develop my web apps efficiently and scalebly.
        </p>

        <div class="text-shadow grid w-full flex-1 grid-cols-2 gap-8 text-white md:grid-cols-4">
          <div class="flex flex-col items-center">
            <img src={react} class="h-16 w-16" alt="React" />
            <p class="mt-3 text-sm md:text-base">React.js</p>
          </div>
          <div class="flex flex-col items-center">
            <img src={javascript} class="h-16 w-16" alt="JavaScript" />
            <p class="mt-3 text-sm md:text-base">JavaScript</p>
          </div>
          <div class="flex flex-col items-center">
            <img src={node} class="h-16 w-16" alt="Node.js" />
            <p class="mt-3 text-sm md:text-base">Node.js</p>
          </div>
          <div class="flex flex-col items-center">
            <img src={postgresql} class="h-16 w-16" alt="PostgreSQL" />
            <p class="mt-3 text-sm md:text-base">PostgreSQL</p>
          </div>
          <div class="flex flex-col items-center">
            <img src={express} class="h-16 w-16" alt="Express.js" />
            <p class="mt-3 text-sm md:text-base">Express.js</p>
          </div>
          <div class="flex flex-col items-center">
            <img src={tailwindcss} class="h-16 w-16" alt="Tailwind CSS" />
            <p class="mt-3 text-sm md:text-base">Tailwind CSS</p>
          </div>
          <div class="flex flex-col items-center">
            <img src={typescript} class="h-16 w-16" alt="Docker" />
            <p class="mt-3 text-sm md:text-base">TypeScript</p>
          </div>
          <div class="flex flex-col items-center">
            <img src={git} class="h-16 w-16" alt="Git" />
            <p class="mt-3 text-sm md:text-base">Git</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Skills };
