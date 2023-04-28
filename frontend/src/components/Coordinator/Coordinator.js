import React from "react";
import profNaushad from "./prof-naushad-alam.jpg";
import drAbdus from "./dr-abdus-samad.jpg";
import { motion } from "framer-motion";
import "./Coordinator.css";

const coordinator = {
  offscreen: { x: "-100vw", opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
      type: "spring",
      ease: [0.81, 1.39, 1, 1.1],
    },
  },
};

const advisor = {
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

export default function Coordinator() {
  return (
    <motion.div
      className="coordinators"
      id="coordinators"
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{ staggerChildren: 0.5 }}
    >
      <motion.div className="chapter-coordinator" variants={coordinator}>
        <div className="coordinators-container">
          <div className="who-and-what">
            <h1>Dr. Abdus Samad</h1>
            <h3>Chapter Coordinator</h3>
          </div>
          <div className="profile-photo">
            <img src={drAbdus} className="profile-photo" />
          </div>
        </div>
        <p className="coordinator-achievements">
          B.Sc Engg . (B. Tech.) and M. Tech. from Z. H. College of Engineering
          & Technology, Aligarh Muslim University, Aligarh in the year 1997 and
          1999 respectively. Completed Ph.D in Computer Engg, from Dept. of
          Computer Engineering, ZHCET, AMU, Aligarh in the year 2010. <br />{" "}
          <br />
          His research interests include Parallel and Distributed Systems,
          Algorithm Design, Microprocessor and Parallel System Design. <br />{" "}
          <br />
          He has contributed in and attended various National and International
          Conferences in India and abroad, and published papers in reputed
          Journals. Member of IEEE, IETE and IE (I). He is also a member of
          curriculum design committee of University Polytechnic, JMI, New Delhi.
          <br /> <br />
          Having teaching experience of more than 22 years, he has worked as an
          Associate Professor in Computer Engg. Section at University Women's
          Polytechnic, AMU. He is presently working as Associate Professor in
          the Dept. of Computer Engineering, at Z.H.C.E.T, AMU.
        </p>
      </motion.div>
      <motion.div className="faculty-advisor" variants={advisor}>
        <div className="coordinators-container">
          <div className="who-and-what">
            <h1>Prof. Naushad Alam</h1>
            <h3>Faculty Advisor</h3>
          </div>
          <div className="profile-photo">
            <img src={profNaushad} className="profile-photo" />
          </div>
        </div>
        <p className="coordinator-achievements">
          Naushad Alam received B. Tech. (ECE) degree from JMI, New Delhi , and
          M. Tech. (ECSD) degree from AMU. He earned Ph.D. degree in
          Microelectronics from IIT Roorkee, India. His doctoral work was on
          nanoscale circuit design considering the impact of process-induced
          mechanical stress.
          <br /> <br />
          He has filed 2 Indian Patents and published 29 research papers in SCI
          indexed journals that include 10 IEEE Transactions. He has received
          four Best Paper Awards at ICSCI-2008, IMPACT-2013, VDAT-2015 and
          IMPACT 2017 respectively.
          <br />
          <br />
          He has supervised three PhD theses and sixteen M Tech dissertations in
          the area of device-circuit co-design.
          <br />
          <br /> His research interests include device-circuit co-design, robust
          nanoscale circuit design, low power circuit design, PVT tolerant
          circuit design, Near-Threshold/Sub-Threshold circuit design etc.
        </p>
      </motion.div>
    </motion.div>
  );
}
