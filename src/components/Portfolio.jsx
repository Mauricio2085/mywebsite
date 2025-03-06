import { Data } from "./Data";
import React from "react";
import { Project } from "./Project";

const Portfolio = () => {
  return (
    <>
      <main className=" px-5 lg:px-24 xl:px-40 items-center bg-gray-200 font-[ubuntu]">
        <div className=" md:flex md:flex-col md:w-full md:items-center md:rounded-md">
          <h1 className=" text-center font-semibold italic text-[40px] text-black pt-8 pb-8">
            PORTFOLIO
          </h1>
          <p className=" text-center font-normal text-xl w-full mb-8 md:mb-0">
            Here you can see and test a little of my work... Enjoy it!!
          </p>
          <Data />
        </div>
      </main>
    </>
  );
};

export { Portfolio };
