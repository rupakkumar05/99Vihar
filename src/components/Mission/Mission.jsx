import React from "react";
import misssion from '../../../public/misssion.webp';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import "react-accessible-accordion/dist/fancy-example.css";
import "../../components/Value/Value.css"; // CSS reuse

import { MdFlag, MdPeople, MdHomeWork } from "react-icons/md";

const Mission = () => {
  const missionData = [
    {
      icon: <MdFlag size={20} />,
      heading: "Transparency First",
      detail:
        "We aim to provide complete transparency in property dealings so that customers trust us without hesitation.",
    },
    {
      icon: <MdPeople size={20} />,
      heading: "Empowering People",
      detail:
        "Our mission is to help everyone find a suitable and affordable home with ease and confidence.",
    },
    {
      icon: <MdHomeWork size={20} />,
      heading: "Better Living",
      detail:
        "We believe good homes build better futures. That's why we strive to offer the best options possible.",
    },
  ];

  return (
    <motion.section
      className="v-wraper"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="paddings innerWidth flexCenter v-container">
        {/* Left side */}
        <motion.div
          className="v-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="image-container">
            <img src={misssion} alt="mission" />
          </div>
        </motion.div>

        {/* Right side */}
        <motion.div
          className="flexColCenter v-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <span className="orangeText centerText">Our Mission</span>
          <span className="primaryText centerText">What Drives Us</span>
          <span className="secondaryText centerText">
            Our mission is to make real estate more accessible, transparent, and trustworthy. <br />
            We're here to empower people with the best housing choices.
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {missionData.map((item, i) => (
              <AccordionItem className="accordionItem" key={i} uuid={i}>
                <AccordionItemHeading>
                  <AccordionItemButton className="flexCenter accordionItemButton">
                    <AccordionItemState>
                      {({ expanded }) => (
                        <>
                          <div className={`flexCenter icon ${expanded ? "rotate" : ""}`}>
                            {item.icon}
                          </div>
                          <span className="primaryText">{item.heading}</span>
                          <div className={`flexCenter icon ${expanded ? "rotate" : ""}`}>
                            <MdOutlineArrowDropDown size={22} />
                          </div>
                        </>
                      )}
                    </AccordionItemState>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="secondaryText">{item.detail}</p>
                    </motion.div>
                  </AnimatePresence>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Mission;
