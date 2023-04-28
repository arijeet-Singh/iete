import React, { useState } from "react";
import logo from "./IETE-logo.png";
import amu from "./amu-logo.jpg";
import ViewListIcon from "@mui/icons-material/ViewList";
import { motion } from "framer-motion";
import "./Homepage.css";
export default function Homepage() {
  const [showNavigation, setShowNavigation] = useState(false);
  return (
    <div className="header" id="about">
      <div className="navbar">
        <div className="logos">
          <div className="iete-logo">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <h1 className="and-sign">&</h1>
          <div className="iete-logo">
            <img src={amu} alt="logo" className="logo" />
          </div>
        </div>
      </div>
      <motion.div
        className="iete-full-form"
        initial={{ y: "100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        INSTITUTION OF ELECTRONICS AND TELECOMMUNICATION ENGINEERS
        <br />
        <span className="zhcet-chapter">Z.H.C.E.T. CHAPTER</span>
      </motion.div>
      <motion.div
        className="about-iete"
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, ease: [0.81, 1.39, 1, 1.1] }}
      >
        <span className="zhcet-chapter">Background of IETE</span>
        <p>
          <p>
            The Institution of Electronics and Telecommunication Engineers
            (IETE) is India’s leading recognised professional society devoted to
            the advancement of Science and Technology of Electronics,
            Telecommunication & IT founded in 1953. The IETE is the National
            Apex Professional body of Electronics and Telecommunication,
            Computer Science and IT Professionals. It serves more than 1,25,000
            members (including Corporate, Student and ISF members) through
            various 64 centres spread all over India and abroad.{" "}
          </p>
          <p>
            The Institution provides leadership in Scientific and Technical
            areas of direct importance to the national development and economy.
            Government of India has recognised IETE as a Scientific and
            Industrial Research Organization (SIRO) and also notified as an
            educational Institution of national eminence.
          </p>
        </p>
      </motion.div>
      <motion.div
        className="objectives"
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5, ease: [0.81, 1.39, 1, 1.1] }}
      >
        <span className="zhcet-chapter">Objectives of IETE</span>
        <p>
          <p>
            The IETE focuses on advancing the science and technology of
            electronics, telecommunications, computers, information technology
            and related areas. The objectives of the Institution, inter-alias
            include:
          </p>
          <ol>
            <li>
              Organise conferences, symposia, workshops and brainstorming
              sessions involving all concerned professionals, students and
              industry associations for the advancement of the Disciplines.
            </li>
            <li>
              Provide a forum for discussion on national policies and provide
              suitable inputs to policymakers.
            </li>
            <li>
              Promote and conduct basic engineering and continuing technical
              education programmes for human resource development.
            </li>
            <li>Stimulate research and development in the Disciplines.</li>
            <li>
              Bring out quality publications for all levels of readership.
            </li>
            <li>Honour outstanding professionals.</li>
          </ol>
        </p>
      </motion.div>
    </div>
  );
}