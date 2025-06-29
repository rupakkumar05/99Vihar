import React from "react";
import "./GetStarted.css";
import { motion } from "framer-motion";

const GetStarted = () => {
  return (
    <motion.section
      className="py-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/Bnarj44Gc8Q?autoplay=1&mute=1&loop=1&playlist=Bnarj44Gc8Q"
          title="99Vihar Showcase"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </motion.section>
  );
};

export default GetStarted;
