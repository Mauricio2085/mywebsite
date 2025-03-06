import React from "react";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Jumbo } from "./components/Jumbo";

const App = () => {
  return (
    <>
      <Header />
      <Jumbo />
      <Portfolio />
      <About />
      <Footer />
    </>
  );
};

export { App };
