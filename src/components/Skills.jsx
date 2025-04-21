import React from "react";

const Skills = () => {
  return (
    <section
      id="stack"
      className="mx-auto mb-20 flex flex-col items-center justify-center px-5 md:max-w-2xl md:px-0 xl:max-w-4xl"
    >
      <div className="flex w-full flex-1 flex-col text-center md:text-left">
        <h1 className="text-shadow-light dark:text-shadow mb-8 mt-4 text-3xl font-bold italic text-slate-800 dark:text-white md:text-[40px]">
          My Web Development Stack
        </h1>
        <p className="mb-20 text-sm font-normal text-slate-800 dark:text-gray-300 md:text-base">
          Modern frameworks and tools with which I develop my web apps efficiently and scalebly.
        </p>

        <div className="text-shadow-light dark:text-shadow grid w-full flex-1 grid-cols-2 gap-8 text-slate-800 dark:text-gray-300 md:grid-cols-4">
          <div className="flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/smartpocket/image/upload/v1744844558/porfolio/react_r7bgfo.svg"
              className="h-16 w-16"
              alt="React logo"
            />
            <p className="mt-3 text-sm md:text-base">React.js</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/smartpocket/image/upload/v1744844565/porfolio/javascript_cxa1hd.svg"
              className="h-16 w-16"
              alt="JavaScript logo"
            />
            <p className="mt-3 text-sm md:text-base">JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/smartpocket/image/upload/v1744844549/porfolio/nodejs_pwvwid.svg"
              className="h-16 w-16"
              alt="Node.js logo"
            />
            <p className="mt-3 text-sm md:text-base">Node.js</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/smartpocket/image/upload/v1744844537/porfolio/postgresql_ybzlqh.svg"
              className="h-16 w-16"
              alt="PostgreSQL logo"
            />
            <p className="mt-3 text-sm md:text-base">PostgreSQL</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/smartpocket/image/upload/v1744844508/porfolio/express_mp0flx.svg"
              className="h-16 w-16"
              alt="Express.js logo"
            />
            <p className="mt-3 text-sm md:text-base">Express.js</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/smartpocket/image/upload/v1744844589/porfolio/tailwindcss-mark.d52e9897_dbg6bu.svg"
              className="h-16 w-16"
              alt="Tailwind CSS logo"
            />
            <p className="mt-3 text-sm md:text-base">Tailwind CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/smartpocket/image/upload/v1744844469/porfolio/typescript_jaabhl.svg"
              className="h-16 w-16"
              alt="TypeScript logo"
            />
            <p className="mt-3 text-sm md:text-base">TypeScript</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/smartpocket/image/upload/v1744844578/porfolio/Git-Icon-1788C_raiuq1.svg"
              className="h-16 w-16"
              alt="Git logo"
            />
            <p className="mt-3 text-sm md:text-base">Git</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Skills };
