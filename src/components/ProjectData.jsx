import { Project } from "./Project";
import TranslationWrapper from "./TranslationWrapper";
import ThemeSwitcherHandler from "./ThemeSwitcherHandler";

const ProjectData = () => {
  const dataProject = [
    // Smart Pocket Backend
    {
      id: 1,
      name: <TranslationWrapper translationKey="portfolio.projects.smartPocketBackend" />,
      image:
        "https://res.cloudinary.com/smartpocket/image/upload/v1760549626/porfolio/Login_k6q4q9.png",
      description: (
        <TranslationWrapper translationKey="portfolio.projects.smartPocketBackendDescription" />
      ),
      demo: "https://smart-pocket-v1.vercel.app",
      github: "https://github.com/Mauricio2085/Smart_Pocket_Backend",
      skills: [
        {
          id: 1,
          name: "Javascript",
          icon: (
            <img
              src="https://res.cloudinary.com/smartpocket/image/upload/v1744844565/porfolio/javascript_cxa1hd.svg"
              className="w-[24px]"
              alt="TypeScript logo"
            />
          ),
        },
        {
          id: 2,
          name: "Node",
          icon: (
            <img
              src="https://res.cloudinary.com/smartpocket/image/upload/v1744844549/porfolio/nodejs_pwvwid.svg"
              className="w-[24px] bg-white"
              alt="Node.js logo"
            />
          ),
        },
        {
          id: 3,
          name: "Express",
          icon: <ThemeSwitcherHandler skill="Express" />,
        },
        {
          id: 4,
          name: "PostgreSQL",
          icon: (
            <img
              src="https://res.cloudinary.com/smartpocket/image/upload/v1744844537/porfolio/postgresql_ybzlqh.svg"
              className="w-[24px]"
              alt="PostgreSQL logo"
            />
          ),
        },
        {
          id: 5,
          name: "JWT",
          icon: (
            <img
              src="https://res.cloudinary.com/smartpocket/image/upload/v1760547615/porfolio/jsonwebtoken_xvjbmy.svg"
              className="w-[24px]"
              alt="JWT logo"
            />
          ),
        },
        {
          id: 6,
          name: "Hapi-Boom",
          icon: (
            <img
              src="https://res.cloudinary.com/smartpocket/image/upload/v1760548434/porfolio/hapi_pezhzq.svg"
              className="w-[24px] bg-white"
              alt="JWT logo"
            />
          ),
        },
      ],
    },

    // Smart Pocket Frontend
    {
      id: 2,
      name: <TranslationWrapper translationKey="portfolio.projects.smartPocketFrontend" />,
      image:
        "https://res.cloudinary.com/smartpocket/image/upload/v1744847884/porfolio/Smart_porfolio_owfc4h.png",
      description: (
        <TranslationWrapper translationKey="portfolio.projects.smartPocketFrontendDescription" />
      ),
      demo: "https://smart-pocket-v1.vercel.app",
      github: "https://github.com/Mauricio2085/smart-pocket-v1",
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
          name: "Javascript",
          icon: (
            <img
              src="https://res.cloudinary.com/smartpocket/image/upload/v1744844565/porfolio/javascript_cxa1hd.svg"
              className="w-[24px]"
              alt="TypeScript logo"
            />
          ),
        },
        {
          id: 3,
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
          id: 4,
          name: "React Router",
          icon: (
            <img
              src="https://res.cloudinary.com/smartpocket/image/upload/v1760548774/porfolio/react-router_nyizp6.svg"
              className="w-[24px]"
              alt="React Router logo"
            />
          ),
        },
      ],
    },
    // Permit Management Demo
    {
      id: 3,
      name: <TranslationWrapper translationKey="portfolio.projects.permitManagement" />,
      image:
        "https://res.cloudinary.com/smartpocket/image/upload/v1760549040/porfolio/dashboard_tqfyoa.png",
      description: (
        <TranslationWrapper translationKey="portfolio.projects.permitManagementDescription" />
      ),
      demo: "https://permit-management-demo.vercel.app/",
      github: "https://github.com/Mauricio2085/permit-management-demo",
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
          name: "TypeScript",
          icon: (
            <img
              src="https://res.cloudinary.com/smartpocket/image/upload/v1744844469/porfolio/typescript_jaabhl.svg"
              className="w-[24px]"
              alt="TypeScript logo"
            />
          ),
        },
        {
          id: 4,
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
          id: 5,
          name: "Express",
          icon: <ThemeSwitcherHandler skill="Express" />,
        },
        {
          id: 6,
          name: "PostgreSQL",
          icon: (
            <img
              src="https://res.cloudinary.com/smartpocket/image/upload/v1744844537/porfolio/postgresql_ybzlqh.svg"
              className="w-[24px]"
              alt="PostgreSQL logo"
            />
          ),
        },
        {
          id: 7,
          name: "JWT",
          icon: (
            <img
              src="https://res.cloudinary.com/smartpocket/image/upload/v1760547615/porfolio/jsonwebtoken_xvjbmy.svg"
              className="w-[24px]"
              alt="JWT logo"
            />
          ),
        },
        {
          id: 8,
          name: "Hapi-Boom",
          icon: (
            <img
              src="https://res.cloudinary.com/smartpocket/image/upload/v1760548434/porfolio/hapi_pezhzq.svg"
              className="w-[24px] bg-white"
              alt="JWT logo"
            />
          ),
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
            demo={project.demo}
            github={project.github}
          />
        );
      })}
    </section>
  );
};

export { ProjectData };
