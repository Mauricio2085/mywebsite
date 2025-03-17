import React from "react";
import { motion } from "framer-motion";
import { Data } from "./Data";

const Portfolio = () => {
  return (
    <>
      <main
        id="portfolio"
        className="items-center bg-gradient-to-r from-gray-100 to-gray-300 px-5 lg:px-24 xl:px-40"
      >
        <motion.div
          className="md:flex md:w-full md:flex-col md:items-center md:rounded-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="md:flex md:w-full md:flex-col md:items-center md:rounded-md">
            <h1 className="py-8 text-center text-3xl font-semibold italic text-black md:text-[40px]">
              PORTFOLIO
            </h1>
            <p className="mb-8 w-full text-center text-sm font-normal text-gray-500 md:mb-0 md:text-xl">
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
