import React from "react";
import projectPhoto from "../assets/images/IMG_3688.jpg";
import { GrVmMaintenance } from "react-icons/gr";
import { FaCartShopping } from "react-icons/fa6";
import { FaServer } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import javascript from "../assets/images/js_icon.png";
import html from "../assets/images/html_icon.png";

const dataProjects = [
  {
    id: 1,
    name: "Mantenance-app",
    gitHubUrl: "jjgfjdfh",
    image: projectPhoto,
    description:
      "Una super app de mantenimiento para que gestiones tus órdenes de trabajo y actividades como nunca!!",
    avatar: <GrVmMaintenance size={20} />,
    skills: [
      {
        id: 1,
        name: "html",
        icon: <img src={html} className="w-[24px]" />,
      },
      {
        id: 2,
        name: "Css3",
        icon: <DiCss3 fill={"#2d53e5"} size={24} />,
      },
      {
        id: 3,
        name: "Javascript",
        icon: <img src={javascript} className="w-[24px]" />,
      },
      {
        id: 4,
        name: "Reactjs",
        icon: <FaReact fill={"#00ffff"} size={24} />,
      },
      {
        id: 5,
        name: "Nextjs",
        icon: <SiNextdotjs size={24} />,
      },
    ],
  },
  {
    id: 2,
    name: "Smart-Pocket-Frontend",
    gitHubUrl: "jjgfjdtfhtyfdfh",
    image: projectPhoto,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magnam sed, vel tempore provident ut",
    avatar: <FaCartShopping size={20} />,
    skills: [
      {
        id: 1,
        name: "html",
        icon: <img src={html} className="w-[24px]" />,
      },
      {
        id: 2,
        name: "Css3",
        icon: <DiCss3 fill={"#2d53e5"} size={24} />,
      },
      {
        id: 3,
        name: "Javascript",
        icon: <img src={javascript} className="w-[24px]" />,
      },
      {
        id: 4,
        name: "Reactjs",
        icon: <FaReact fill={"#00ffff"} size={24} />,
      },
      {
        id: 5,
        name: "Nextjs",
        icon: <SiNextdotjs size={24} />,
      },
    ],
  },
  {
    id: 3,
    name: "Smart-Pocket-Backend",
    gitHubUrl: "hgjfhjjgjkjkllk",
    image: projectPhoto,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magnam sed, vel tempore provident ut",
    avatar: <FaServer size={20} />,
    skills: [
      {
        id: 1,
        name: "html",
        icon: <img src={html} className="w-[24px]" />,
      },
      {
        id: 2,
        name: "Css3",
        icon: <DiCss3 fill={"#2d53e5"} size={24} />,
      },
      {
        id: 3,
        name: "Javascript",
        icon: <img src={javascript} className="w-[24px]" />,
      },
      {
        id: 4,
        name: "Reactjs",
        icon: <FaReact fill={"#00ffff"} size={24} />,
      },
      {
        id: 5,
        name: "Nextjs",
        icon: <SiNextdotjs size={24} />,
      },
    ],
  },
  {
    id: 4,
    name: "Fisica",
    gitHubUrl: "jjgfkjkñlfyttydfhggfjdfh",
    image: projectPhoto,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magnam sed, vel tempore provident ut",
    avatar: <FaListCheck size={20} />,
    skills: [
      {
        id: 1,
        name: "html",
        icon: <img src={html} className="w-[24px]" />,
      },
      {
        id: 2,
        name: "Css3",
        icon: <DiCss3 fill={"#2d53e5"} size={24} />,
      },
      {
        id: 3,
        name: "Javascript",
        icon: <img src={javascript} className="w-[24px]" />,
      },
      {
        id: 4,
        name: "Reactjs",
        icon: <FaReact fill={"#00ffff"} size={24} />,
      },
      {
        id: 5,
        name: "Nextjs",
        icon: <SiNextdotjs size={24} />,
      },
    ],
  },
];

export { dataProjects };
