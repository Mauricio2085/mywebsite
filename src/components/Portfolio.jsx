import { Data } from "./Data";
import React from "react";
import { Project } from "./Project";

const Portfolio = () => {
  return (
    <>
      <main className="items-center bg-gray-200 px-5 font-[ubuntu] lg:px-24 xl:px-40">
        <div className="md:flex md:w-full md:flex-col md:items-center md:rounded-md">
          <h1 className="pb-8 pt-8 text-center text-[40px] font-semibold italic text-black">
            PORTFOLIO
          </h1>
          <p className="mb-8 w-full text-center text-xl font-normal md:mb-0">
            Here you can see and test a little of my work... Enjoy it!!
          </p>
          <Data />
        </div>
      </main>
    </>
  );
};

export { Portfolio };
