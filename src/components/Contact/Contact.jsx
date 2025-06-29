import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { motion } from "framer-motion";
import contact from '../../../public/contact.avif'
const Contact = () => {
  return (
    <motion.section
      className="c-wraper"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="paddings innerWidth flexCenter c-container">
        {/* Left */}
        <div className="flexColCenter c-left">
          <span className="orangeText">Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText text-center">
            We are always ready to help by providing the best services for you. <br />
            A good place to live can make your life better.
          </span>

          <div className="flexColCenter contactModes mt-4">
            <div className="flexCenter row gap-4 flex-wrap justify-center">
              {/* Call Mode */}
              <motion.div
                className="flexColCenter mode"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              >
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColCenter detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">+91 7070501157</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="tel:+917070501157">Call Now</a>
                </div>
              </motion.div>

              {/* Chat Mode */}
              <motion.div
                className="flexColCenter mode"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              >
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColCenter detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">+91 7070501157</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="https://wa.me/917070501157" target="_blank" rel="noopener noreferrer">
                    Chat Now
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right */}
        <motion.div
          className="c-right"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="image-container">
            <img src={contact} alt="Contact Us" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
