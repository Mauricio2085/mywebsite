import React from "react";
import projectPhoto from "../assets/images/Smart_porfolio.png";
import { GrVmMaintenance } from "react-icons/gr";
import { FaCartShopping } from "react-icons/fa6";
import { FaServer } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import html from "../assets/images/html_icon.png";
import { Project } from "./Project";
import tailwindcss from "../assets/images/tailwindcss-mark.d52e9897.svg";
import react from "../assets/images/react.svg";
import node from "../assets/images/nodejs.svg";
import postgresql from "../assets/images/postgresql.svg";
import express from "../assets/images/express.svg";
import typescript from "../assets/images/typescript.svg";

const Data = () => {
  const dataProject = [
    {
      id: 1,
      name: "Smart-Pocket - Venta de productos de garaje",
      gitHubUrl: "jjgfjdtfhtyfdfh",
      image: projectPhoto,
      description:
        "Aplicación para venta de productos de garaje, donde puedes comprar y vender productos de segunda mano. Puedes consultar productos al propietario vía Whatsapp. Creado con React y Tailwind CSS.",
      avatar: <FaCartShopping size={20} />,
      skills: [
        {
          id: 1,
          name: "React",
          icon: <img src={react} className="w-[24px]" />,
        },
        {
          id: 2,
          name: "Tailwind",
          icon: <img src={tailwindcss} className="w-[24px]" />,
        },
        {
          id: 3,
          name: "Node",
          icon: <img src={node} className="w-[24px]" />,
        },
        {
          id: 4,
          name: "Express",
          icon: <img src={express} className="w-[24px]" />,
        },
        {
          id: 5,
          name: "Postgresql",
          icon: <img src={postgresql} className="w-[24px]" />,
        },
      ],
    },
    {
      id: 2,
      name: "Maintenance App - Aplicación para gestión de Mantenimiento",
      gitHubUrl: "jjgfjdtfhtyfdfh",
      image: projectPhoto,
      description:
        "Aplicación para gestión de mantenimiento de equipos de aire acondicionado. Creado con React y Tailwind CSS.",
      avatar: <FaCartShopping size={20} />,
      skills: [
        {
          id: 1,
          name: "React",
          icon: <img src={react} className="w-[24px]" />,
        },
        {
          id: 2,
          name: "TypeScript",
          icon: <img src={typescript} className="w-[24px]" />,
        },
        {
          id: 3,
          name: "Tailwind",
          icon: <img src={tailwindcss} className="w-[24px]" />,
        },
        {
          id: 4,
          name: "Node",
          icon: <img src={node} className="w-[24px]" />,
        },
        {
          id: 5,
          name: "Express",
          icon: <img src={express} className="w-[24px]" />,
        },
        {
          id: 6,
          name: "Postgresql",
          icon: <img src={postgresql} className="w-[24px]" />,
        },
      ],
    },
  ];
  return (
    <section className="mb-10 flex w-full flex-col items-center justify-center md:justify-center md:justify-items-center md:gap-4">
      {dataProject.map((project) => {
        return (
          <Project
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
  );
};

export { Data };
