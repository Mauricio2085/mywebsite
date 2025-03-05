import { dataProjects } from "../utils/data";
import React, { lazy } from "react";
import { MainProject } from "./MainProject";

const MainPortfolio = () => {
  return (
    <>
      <main className=" px-5 md:px-60 items-center bg-gray-200">
        <div className=" md:flex md:flex-col md:w-full md:items-center md:rounded-md">
          <h1 className=" text-center font-semibold italic text-4xl text-black font-[ubuntu] pt-8 pb-8">
            PORTFOLIO
          </h1>
          <p className=" text-center font-normal text-xl w-full font-[ubuntu] mb-8 md:mb-0">
            Here you can see and taste a little of my work... Enjoy it!!
          </p>
          <section className=" flex flex-col md:grid md:grid-cols-2 md:grid-flow-row md:gap-4 justify-center md:justify-center items-center md:justify-items-center md:py-20 md:w-full">
            {dataProjects.map((project) => {
              return (
                <MainProject
                  key={project.id}
                  projectName={project.name}
                  image={project.image}
                  description={project.description}
                  skills={project.skills}
                  avatar={project.avatar}
                />
              );
            })}
          </section>
        </div>
      </main>
    </>
  );
};

export { MainPortfolio };
