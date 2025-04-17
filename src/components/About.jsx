import React from "react";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="mx-auto mb-20 flex w-full flex-col px-5 md:max-w-2xl md:px-0 xl:max-w-4xl"
      >
        <h1 className="text-shadow mb-8 mt-4 text-center text-3xl font-semibold italic text-white md:text-left md:text-[40px]">
          About me
        </h1>
        <article className="flex w-full flex-col items-center gap-8 md:max-w-2xl md:flex-row xl:max-w-4xl">
          <p className="order-2 text-sm text-gray-300 md:order-1 md:text-base">
            I have always been passionate about technology and problem-solving. For several years, I
            worked in <strong className="font-semibold text-cyan-300">industrial automation</strong>
            , where I developed skills in process control and system optimization. However, my
            curiosity about software and its impact on the industry led me to explore web
            development, a field where I found my true calling. I specialize in JavaScript, React,
            and Node.js, building full-stack applications with a focus on frontend development. I
            enjoy designing intuitive interfaces and optimizing user experience while ensuring that
            my code is clean, maintainable, and scalable. Additionally, I strive to follow best
            development practices, including design patterns and automated testing. Currently, I am
            continuously improving my skills and exploring modern technologies to create efficient
            and high-performance solutions. I am looking for opportunities to contribute my
            knowledge and continue growing as a developer.
            <br />
            <br />
          </p>
          <picture className="order-1 flex w-full items-center justify-center rounded-xl md:order-2 lg:mb-0">
            <img
              className="max-h-[250px] max-w-[250px] rounded-xl object-cover"
              src="https://res.cloudinary.com/smartpocket/image/upload/v1744844774/porfolio/IMG_2751_nttih5.jpg"
              alt="Optional"
            />
          </picture>
        </article>
      </section>
    </>
  );
};

export { About };
