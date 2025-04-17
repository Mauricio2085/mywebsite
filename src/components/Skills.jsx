import React from "react";

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
            <img
              src="https://res.cloudinary.com/smartpocket/image/upload/v1744844558/porfolio/react_r7bgfo.svg"
              class="h-16 w-16"
              alt="React"
            />
            <p class="mt-3 text-sm md:text-base">React.js</p>
          </div>
          <div class="flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/smartpocket/image/upload/v1744844565/porfolio/javascript_cxa1hd.svg"
              class="h-16 w-16"
              alt="JavaScript"
            />
            <p class="mt-3 text-sm md:text-base">JavaScript</p>
          </div>
          <div class="flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/smartpocket/image/upload/v1744844549/porfolio/nodejs_pwvwid.svg"
              class="h-16 w-16"
              alt="Node.js"
            />
            <p class="mt-3 text-sm md:text-base">Node.js</p>
          </div>
          <div class="flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/smartpocket/image/upload/v1744844537/porfolio/postgresql_ybzlqh.svg"
              class="h-16 w-16"
              alt="PostgreSQL"
            />
            <p class="mt-3 text-sm md:text-base">PostgreSQL</p>
          </div>
          <div class="flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/smartpocket/image/upload/v1744844508/porfolio/express_mp0flx.svg"
              class="h-16 w-16"
              alt="Express.js"
            />
            <p class="mt-3 text-sm md:text-base">Express.js</p>
          </div>
          <div class="flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/smartpocket/image/upload/v1744844589/porfolio/tailwindcss-mark.d52e9897_dbg6bu.svg"
              class="h-16 w-16"
              alt="Tailwind CSS"
            />
            <p class="mt-3 text-sm md:text-base">Tailwind CSS</p>
          </div>
          <div class="flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/smartpocket/image/upload/v1744844469/porfolio/typescript_jaabhl.svg"
              class="h-16 w-16"
              alt="Docker"
            />
            <p class="mt-3 text-sm md:text-base">TypeScript</p>
          </div>
          <div class="flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/smartpocket/image/upload/v1744844578/porfolio/Git-Icon-1788C_raiuq1.svg"
              class="h-16 w-16"
              alt="Git"
            />
            <p class="mt-3 text-sm md:text-base">Git</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Skills };
