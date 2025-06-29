import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const NavContact = () => {
  return (
    <motion.section
      className="container py-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div
        className="row g-4 align-items-start shadow p-4 rounded-4"
        style={{ backgroundColor: "#fff", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}
      >
        {/* Left Side */}
        <motion.div variants={fadeInUp} custom={1} className="col-lg-6 col-md-12 text-center">
          <h3 className="fw-bold mb-3">CONTACT US</h3>
          <div
            style={{
              height: "3px",
              width: "80px",
              backgroundColor: "#f4a259",
              margin: "0 auto 1.5rem auto",
            }}
          />
          <p className="text-muted mb-4">
            We’re always here to help you. Reach out to us anytime — whether it’s for buying a plot, asking a question, or visiting our site.
          </p>

          <div className="d-flex align-items-start gap-3 mb-4 text-muted justify-content-center">
            <FaMapMarkerAlt size={20} style={{ color: "#f4a259", marginTop: "4px" }} />
            <p className="mb-0 text-start">
              1st Floor, Haripur Ailoth, Musrigharari, Near Vastu Vihar<br />
              Samastipur, Bihar, 848101
            </p>
          </div>

          <div className="d-flex align-items-center gap-3 mb-4 text-muted justify-content-center">
            <FaPhoneAlt size={18} style={{ color: "#f4a259" }} />
            <p className="mb-0 fw-medium">+91 7070501157</p>
          </div>

          <div className="d-flex align-items-center gap-3 text-muted justify-content-center">
            <FaEnvelope size={18} style={{ color: "#f4a259" }} />
            <p className="mb-0 fw-medium">info@99vihar.in</p>
          </div>
        </motion.div>

        {/* Right Side - Google Form */}
        <motion.div variants={fadeInUp} custom={2} className="col-lg-6 col-md-12">
          <div
            style={{
              width: "100%",
              height: "500px",
              borderRadius: "12px",
              border: "1px solid #e0e0e0",
              overflow: "hidden",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.03)",
            }}
          >
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSe3UlJwS8U047a7Cp4z3RlSeZJJwnZgn867-5Uafaj1_NPgkg/viewform?embedded=true"
              title="Google Form"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="yes"
              style={{ border: "none" }}
            ></iframe>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NavContact;
