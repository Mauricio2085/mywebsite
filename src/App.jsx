import React, { Fragment } from "react";
import { lazy } from "react";
const MainAbout = lazy(() => import("./components/MainAbout"));
import { MainPortfolio } from "./components/MainPortfolio";
import { MainHeader } from "./components/MainHeader";
import { MainFooter } from "./components/MainFooter";
import { MainJumbo } from "./components/MainJumbo";

const App = () => {
  return (
    <>
      <MainHeader />
      <MainJumbo />
      <MainPortfolio />

      <MainAbout />

      <MainFooter />
    </>
  );
};

export { App };
