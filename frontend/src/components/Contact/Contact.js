import React from "react";
import fee from "./fee.png";
import qr from "./QR.jpg";
import form from "./google-forms.png";
import "./Contact.css";
import { motion } from "framer-motion";

const registrationHeading = {
  offscreen: { x: "-100vw", opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      ease: [0.81, 1.39, 1, 1.1],
    },
  },
};
const images = {
  offscreen1: { x: "-100vw", opacity: 0 },
  onscreen1: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1.3,
      duration: 1,
      ease: [0.81, 1.39, 1, 1.1],
      type: "spring",
    },
  },
};

export default function Contact() {
  return (
    <motion.div
      className="register-and-contact"
      id="contact"
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{ staggerChildren: 0.5 }}
    >
      <motion.h1
        className="become-member-heading"
        variants={registrationHeading}
      >
        Register Now.
      </motion.h1>
      <div className="fee-qr">
        <motion.div
          className="fee"
          variants={registrationHeading}
          transition={{ delay: 0.5 }}
        >
          <h2 className="fee-str-heading">Fee Structure</h2>
          <img src={fee} alt="fee-structure" className="fee-structure" />
        </motion.div>
        <motion.div className="g-form" variants={registrationHeading}>
          <h2
            className="instruction gf-ins"
            style={{ cursor: "pointer" }}
            onClick={() => window.open("https://forms.gle/rCqVJuQBN93x8QCS6")}
          >
            Google Form
          </h2>
          <img
            src={form}
            alt="google-form"
            className="google-form"
            style={{ cursor: "pointer" }}
            onClick={() => window.open("https://forms.gle/rCqVJuQBN93x8QCS6")}
          />
        </motion.div>
      </div>
      <div className="contact-container">
        <div className="contact-us">
          <motion.h1 className="contact-heading" variants={registrationHeading}>
            Reach out to us.
          </motion.h1>
          <div className="emails">
            <motion.div className="person" variants={registrationHeading}>
              <p>Name</p>
              <p className="post">Designation</p>
              <a href="mailto:arijeetsingh1202@gmail.com" className="mail-link">
                Email
              </a>
            </motion.div>
            <motion.div className="person" variants={registrationHeading}>
              <p>Name</p>
              <p className="post">Designation</p>
              <a href="mailto:arijeetsingh1202@gmail.com" className="mail-link">
                Email
              </a>
            </motion.div>
            <motion.div className="person" variants={registrationHeading}>
              <p>Name</p>
              <p className="post">Designation</p>
              <a href="mailto:arijeetsingh1202@gmail.com" className="mail-link">
                Email
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
