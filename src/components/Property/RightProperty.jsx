import React from "react";
import { motion } from "framer-motion";

const RightProperty = ({ imageurl, RightHeading, content }) => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Text Section */}
        <motion.div
          className="col-12 col-md-6 order-2 order-md-1 p-4 text-center text-md-start"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="orangeText mb-3">{RightHeading}</h1>
          <p>{content}</p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="col-12 col-md-6 order-1 order-md-2 mb-4 mb-md-0 d-flex justify-content-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <div className="image-container">
            <img src={imageurl} alt="images" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RightProperty;
