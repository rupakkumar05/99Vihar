import React from "react";
import Property from "./property";
import Hero from "../Hero/Hero";

const PropertyPage = () => {
  return (
    <>
      <div className="Home">
        <div>
          <div className="white-grediant" />
          <Hero/>
        </div>
      </div>
      <Property />
    </>
  );
};

export default PropertyPage;
