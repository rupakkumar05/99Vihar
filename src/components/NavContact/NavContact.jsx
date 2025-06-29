import React from "react";
import { motion } from "framer-motion";

function NavContact() {
  return (
    <div className="container my-5 d-flex justify-content-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="shadow"
        style={{
          width: "100%",
          maxWidth: "800px",
          backgroundColor: "#fff",
          borderRadius: "16px",
          padding: "24px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
          border: "1px solid #e0e0e0",
        }}
      >
        <h3 className="text-center mb-4 text-dark fw-semibold">Contact Us</h3>

        <div
          style={{
            height: "990px", // Full height of the form (you can adjust this)
            overflow: "hidden",
            borderRadius: "12px",
            position: "relative",
          }}
        >
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe3UlJwS8U047a7Cp4z3RlSeZJJwnZgn867-5Uafaj1_NPgkg/viewform?embedded=true"
            title="Google Form"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            style={{
              border: "none",
            }}
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
}

export default NavContact;
