import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Project } from "./Project";

const Data = () => {
  const dataProject = [
    {
      id: 1,
      name: "Smart-Pocket - Venta de productos de garaje",
      gitHubUrl: "jjgfjdtfhtyfdfh",
      image:
        "https://res.cloudinary.com/smartpocket/image/upload/v1744847884/porfolio/Smart_porfolio_owfc4h.png",
      description:
        "Aplicación para venta de productos de garaje, donde puedes comprar y vender productos de segunda mano. Puedes consultar productos al propietario vía Whatsapp. Creado con React y Tailwind CSS.",
      skills: [
        {
          id: 1,
          name: "React",
          icon: (
            <img
              src="https://res.cloudinary.com/smartpocket/image/upload/v1744844558/porfolio/react_r7bgfo.svg"
              className="w-[24px]"
              alt="React logo"
            />
          ),
        },
        {
          id: 2,
          name: "Tailwind",
          icon: (
            <img
              src="https://res.cloudinary.com/smartpocket/image/upload/v1744844589/porfolio/tailwindcss-mark.d52e9897_dbg6bu.svg"
              className="w-[24px]"
              alt="Tailwind CSS logo"
            />
          ),
        },
        {
          id: 3,
          name: "Node",
          icon: (
            <img
              src="https://res.cloudinary.com/smartpocket/image/upload/v1744844549/porfolio/nodejs_pwvwid.svg"
              className="w-[24px]"
              alt="Node.js logo"
            />
          ),
        },
        {
          id: 4,
          name: "Express",
          icon: (
            <img
              src="https://res.cloudinary.com/smartpocket/image/upload/v1744938591/porfolio/express-dark_qdvkff.svg"
              className="w-[24px]"
              alt="Express.js logo"
            />
          ),
        },
        {
          id: 5,
          name: "Postgresql",
          icon: (
            <img
              src="https://res.cloudinary.com/smartpocket/image/upload/v1744844537/porfolio/postgresql_ybzlqh.svg"
              className="w-[24px]"
              alt="PostgreSQL logo"
            />
          ),
        },
      ],
    },
    // {
    //   id: 2,
    //   name: "Maintenance App - Aplicación para gestión de Mantenimiento",
    //   gitHubUrl: "jjgfjdtfhtyfdfh",
    //   image:
    //     "https://res.cloudinary.com/smartpocket/image/upload/v1744847884/porfolio/Smart_porfolio_owfc4h.png",
    //   description:
    //     "Aplicación para gestión de mantenimiento de equipos de aire acondicionado. Creado con React y Tailwind CSS.",
    //   skills: [
    //     {
    //       id: 1,
    //       name: "React",
    //       icon: (
    //         <img
    //           src="https://res.cloudinary.com/smartpocket/image/upload/v1744844558/porfolio/react_r7bgfo.svg"
    //           className="w-[24px]"
    //         />
    //       ),
    //     },
    //     {
    //       id: 2,
    //       name: "TypeScript",
    //       icon: (
    //         <img
    //           src="https://res.cloudinary.com/smartpocket/image/upload/v1744844469/porfolio/typescript_jaabhl.svg"
    //           className="w-[24px]"
    //         />
    //       ),
    //     },
    //     {
    //       id: 3,
    //       name: "Tailwind",
    //       icon: (
    //         <img
    //           src="https://res.cloudinary.com/smartpocket/image/upload/v1744844589/porfolio/tailwindcss-mark.d52e9897_dbg6bu.svg"
    //           className="w-[24px]"
    //         />
    //       ),
    //     },
    //     {
    //       id: 4,
    //       name: "Node",
    //       icon: (
    //         <img
    //           src="https://res.cloudinary.com/smartpocket/image/upload/v1744844549/porfolio/nodejs_pwvwid.svg"
    //           className="w-[24px]"
    //         />
    //       ),
    //     },
    //     {
    //       id: 5,
    //       name: "Express",
    //       icon: (
    //         <img
    //           src="https://res.cloudinary.com/smartpocket/image/upload/v1744844508/porfolio/express_mp0flx.svg"
    //           className="w-[24px]"
    //         />
    //       ),
    //     },
    //     {
    //       id: 6,
    //       name: "Postgresql",
    //       icon: (
    //         <img
    //           src="https://res.cloudinary.com/smartpocket/image/upload/v1744844537/porfolio/postgresql_ybzlqh.svg"
    //           className="w-[24px]"
    //         />
    //       ),
    //     },
    //   ],
    // },
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
          />
        );
      })}
    </section>
  );
};

export { Data };
