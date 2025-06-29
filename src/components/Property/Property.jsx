import React from "react";
import RightProperty from "./RightProperty";
import LeftProperty from "./LeftProperty";
import Touch from "./Touch";
import Head from "./Head";
import firstProperty from '../../../public/firstProperty.jpg'
import secondProperty from '../../../public/secondProperty.jpg'
import thirdProperty from '../../../public/thirdProperty.jpg'
import fourthProperty from '../../../public/fourthProperty.jpg'


const Property = () => {
  return (
    <>
    <Head />
      <RightProperty
        RightHeading="99 Vihar — Harpur Ailoth, Samastipur"
        content={
          <>
            <p>
              Just 5 minutes from Samastipur city — an ideal location to build
              your dream home with convenience and comfort.
            </p>
            <h5>Key Features:</h5>
            <ul
              style={{
                textAlign: "left",
                listStyleType: "disc",
                paddingLeft: "1.2rem",
              }}
            >
              <li>16-feet wide internal roads for easy access</li>
              <li>Gated boundary with 24x7 security</li>
              <li>Registry available with immediate possession</li>
              <li>Located close to Samastipur city center</li>
            </ul>
          </>
        }
        imageurl={firstProperty}
      />
      <Touch/>
      <LeftProperty
        leftHeading="99 Vihar — Ekadash Nagar, Dalsinghsarai"
        content={
          <>
            <p>Located at Pagara Chowk — well connected and family-friendly.</p>
            <h5>Key Features:</h5>
            <ul
              style={{
                textAlign: "left",
                listStyleType: "disc",
                paddingLeft: "1.2rem",
              }}
            >
              <li> 17 & 19-feet wide roads</li>
              <li> Electricity and water connection</li>
              <li> Close to schools, hospitals, and markets</li>
              <li> Registry-ready plots</li>
            </ul>
          </>
        }
        imageurl={secondProperty}
      />
       <Touch/>
      <RightProperty
        RightHeading="   99 Vihar — Rosera"
        content={
          <>
            <p>
              Premium plots in Rosera’s peaceful surroundings — perfect for
              modern families.
            </p>
            <h5>Key Features:</h5>
            <ul
              style={{
                textAlign: "left",
                listStyleType: "disc",
                paddingLeft: "1.2rem",
              }}
            >
              <li> Wide internal roads</li>
              <li> Green spaces and open parks</li>
              <li> Ready for registry and construction</li>
            </ul>
          </>
        }
        imageurl={thirdProperty}
      />
       <Touch/>
      <LeftProperty
        leftHeading="  99 Vihar — Begusarai"
        content={
          <>
            <p>
              Prime location in Begusarai with fast-growing property values —
              ideal for investment.
            </p>
            <h5>Key Features:</h5>
            <ul
              style={{
                textAlign: "left",
                listStyleType: "disc",
                paddingLeft: "1.2rem",
              }}
            >
             <li>Wide roads</li>
             <li> Gated boundary and secure community</li>
             <li> All basic facilities — electricity & water</li>
             <li>Registry-ready plots</li>
            </ul>
          </>
        }
        imageurl={fourthProperty}
      />{" "}
       <Touch/>
    </>
  );
};

export default Property;
