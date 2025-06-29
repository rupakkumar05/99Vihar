import React from "react";
import Hero from "../Hero/Hero";
import About from "./About";

const AboutPage = () => {
  return (
    <>
      <div className="Home">
        <div>
          <div className="white-grediant" />
          <Hero />
        </div>
      </div>
      <About/>
    </>
  );
};

export default AboutPage;
