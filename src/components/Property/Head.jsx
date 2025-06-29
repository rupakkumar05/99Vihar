import React from "react";
import { motion } from "framer-motion";

// Animation variant
const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const Head = () => {
  return (
    <motion.section
      className="hero  bg-dark text-white text-center py-5 px-3"
      {...fadeUp}
    >
      <h1 className="display-4" style={{color: "orange"}}>99 Vihar – Residential Plots</h1>
      <p className="lead">Find your ideal plot across Samastipur & beyond</p>
    </motion.section>
  );
};

export default Head;
