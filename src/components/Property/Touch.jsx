import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const Touch = () => {
  return (
    <motion.section className=" py-5 text-center px-3" {...fadeUp}>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="fw-bold mb-3 display-5">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="lead text-muted mb-4">
          Limited plots available — don’t miss out, contact us now!
        </p>

        <motion.div
          className="d-flex justify-content-center gap-3 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <a
            href="tel:+917070501157"
            className="btn btn-lg px-4 py-2"
            style={{
              backgroundColor: "#1188e9", // Orange
              color: "#fff",
              border: "none",
              transition: "all 0.3s ease-in-out",
            }}
          >
            📞 Call Now
          </a>
          <a
            href="https://wa.me/+917070501157"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg px-4 py-2"
            style={{
              backgroundColor: "#25D366", // WhatsApp Green
              color: "#fff",
              border: "none",
              transition: "all 0.3s ease-in-out",
            }}
          >
            💬 WhatsApp Us
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Touch;
