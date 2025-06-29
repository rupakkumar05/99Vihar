import React from "react";
import Hero from "../Hero/Hero";
import Recidencies from "../Recidencies/Recidencies";
import Value from "../Value/Value";
import GetStarted from "../GetStarted/GetStarted";
import Contact from "../Contact/Contact";
import "./Home.css";
import Mission from "../Mission/Mission";

const Home = () => {
  return (
    <>
      <div className="Home">
        <div>
          <div className="white-grediant" />
          <Hero />
        </div>
      </div>
      <Recidencies />
      <Value />
      <Contact />
      {/* <GetStarted /> video ka hai */}
      <Mission />
    </>
  );
};

export default Home;
