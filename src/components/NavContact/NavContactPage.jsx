import React from "react";
import NavContact from "./NavContact";
import Hero from "../Hero/Hero";

const NavContactPage = () => {
  return (
    <>
      <div className="Home">
        <div>
          <div className="white-grediant" />
          <Hero />
        </div>
      </div>
      <NavContact />
    </>
  );
};

export default NavContactPage;
