import React from "react";
import { motion } from "framer-motion";
import { Data } from "./Data";

const Portfolio = () => {
  return (
    <>
      <main
        id="portfolio"
        className="items-center bg-gradient-to-r from-[#1b2129] to-[#111213] px-5 md:px-0"
      >
        <motion.div
          className="md:flex md:w-full md:flex-col md:items-center md:rounded-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mx-auto md:flex md:w-full md:max-w-2xl md:flex-col md:rounded-md xl:max-w-4xl">
            <h1 className="text-shadow mb-8 px-4 pt-4 text-center text-3xl font-semibold italic text-white md:text-left md:text-[40px]">
              Porfolio
            </h1>
            <p className="mb-10 w-full px-4 text-sm font-normal text-gray-300 md:mb-20 md:text-xl">
              Explore my portfolio and see what I’ve built. I hope you like it as much as I enjoyed
              creating it!
            </p>
            <Data />
          </div>
        </motion.div>
      </main>
    </>
  );
};

export { Portfolio };
