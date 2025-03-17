import React from "react";
import tailwindcss from "../assets/images/tailwindcss-mark.d52e9897.svg";
import git from "../assets/images/Git-Icon-1788C.svg";
import javascript from "../assets/images/javascript.svg";
import react from "../assets/images/react.svg";
import node from "../assets/images/nodejs.svg";
import postgresql from "../assets/images/postgresql.svg";
import express from "../assets/images/express.svg";
import nextjs from "../assets/images/nextjs.svg";

const Skills = () => {
  return (
    <section class="flex flex-col items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300 px-5 py-16 lg:h-[750px] lg:px-24 xl:px-40">
      <div class="flex max-w-5xl flex-1 flex-col text-center">
        <h1 class="mb-6 text-3xl font-bold">My Web Development Stack</h1>
        <p class="mb-12 text-sm font-normal text-gray-500 md:text-xl">
          Modern frameworks and tools with which I develop my web apps efficiently and scalebly.
        </p>

        <div class="grid flex-1 grid-cols-2 gap-8 md:grid-cols-4">
          <div class="flex flex-col items-center">
            <img src={react} class="h-16 w-16" alt="React" />
            <p class="mt-3 text-lg">React.js</p>
          </div>
          <div class="flex flex-col items-center">
            <img src={javascript} class="h-16 w-16" alt="JavaScript" />
            <p class="mt-3 text-lg">JavaScript</p>
          </div>
          <div class="flex flex-col items-center">
            <img src={node} class="h-16 w-16" alt="Node.js" />
            <p class="mt-3 text-lg">Node.js</p>
          </div>
          <div class="flex flex-col items-center">
            <img src={postgresql} class="h-16 w-16" alt="PostgreSQL" />
            <p class="mt-3 text-lg">PostgreSQL</p>
          </div>
          <div class="flex flex-col items-center">
            <img src={express} class="h-16 w-16" alt="Express.js" />
            <p class="mt-3 text-lg">Express.js</p>
          </div>
          <div class="flex flex-col items-center">
            <img src={tailwindcss} class="h-16 w-16" alt="Tailwind CSS" />
            <p class="mt-3 text-lg">Tailwind CSS</p>
          </div>
          <div class="flex flex-col items-center">
            <img src={nextjs} class="h-16 w-16" alt="Docker" />
            <p class="mt-3 text-lg">Next.js</p>
          </div>
          <div class="flex flex-col items-center">
            <img src={git} class="h-16 w-16" alt="Git" />
            <p class="mt-3 text-lg">Git</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Skills };
