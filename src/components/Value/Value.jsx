import React from "react";
import value from '../../../public/value.png'

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
import "./Value.css";
import data from "../../utils/accordion";

const Value = () => {
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
            <img src={value} alt="value" />
          </div>
        </motion.div>

        {/* Right side */}
        <motion.div
          className="flexColCenter v-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <span className="orangeText centerText">Our Value</span>
          <span className="primaryText centerText">Value We Give to You</span>
          <span className="secondaryText centerText">
            We’re always ready to help by providing the best services for you. <br />
            We believe a good place to live can make your life better.
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => (
              <AccordionItem
                className="accordionItem"
                key={i}
                uuid={i}
              >
                <AccordionItemHeading>
                  <AccordionItemButton className="flexCenter accordionItemButton">
                    <AccordionItemState>
                      {({ expanded }) => (
                        <>
                          <div
                            className={`flexCenter icon ${expanded ? "rotate" : ""}`}
                          >
                            {item.icon}
                          </div>
                          <span className="primaryText">{item.heading}</span>
                          <div
                            className={`flexCenter icon ${expanded ? "rotate" : ""}`}
                          >
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

export default Value;
