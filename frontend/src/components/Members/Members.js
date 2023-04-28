import React from "react";
import userProfile from "./profile-member.png";
import { motion } from "framer-motion";
import "./Members.css";
const memberHeading = {
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
const singleMember = {
  offscreen1: { opacity: 0 },
  onscreen1: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.81, 1.39, 1, 1.1],
    },
  },
};
export default function Members() {
  return (
    <div className="super-container-members" id="members">
      <motion.div
        className="members"
        initial={"offscreen"}
        whileInView={"onscreen"}
        transition={{ staggerChildren: 0.5 }}
      >
        <motion.h1 className="members-heading" variants={memberHeading}>
          Meet the Team.
        </motion.h1>
        <motion.div
          className="team-members-1"
          initial={"offscreen1"}
          whileInView={"onscreen1"}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.div className="member-single" variants={singleMember}>
            <div className="photo">
              <img
                src={userProfile}
                alt="user-profile"
                className="user-profile-photo"
              />
            </div>
            <div className="name">Member Name</div>
            <div className="position">Position</div>
          </motion.div>
          <motion.div className="member-single" variants={singleMember}>
            <div className="photo">
              <img
                src={userProfile}
                alt="user-profile"
                className="user-profile-photo"
              />
            </div>
            <div className="name">Member Name</div>
            <div className="position">Position</div>
          </motion.div>
          <motion.div className="member-single" variants={singleMember}>
            <div className="photo">
              <img
                src={userProfile}
                alt="user-profile"
                className="user-profile-photo"
              />
            </div>
            <div className="name">Member Name</div>
            <div className="position">Position</div>
          </motion.div>
          <motion.div className="member-single" variants={singleMember}>
            <div className="photo">
              <img
                src={userProfile}
                alt="user-profile"
                className="user-profile-photo"
              />
            </div>
            <div className="name">Member Name</div>
            <div className="position">Position</div>
          </motion.div>
          <motion.div className="member-single" variants={singleMember}>
            <div className="photo">
              <img
                src={userProfile}
                alt="user-profile"
                className="user-profile-photo"
              />
            </div>
            <div className="name">Member Name</div>
            <div className="position">Position</div>
          </motion.div>
          <motion.div className="member-single" variants={singleMember}>
            <div className="photo">
              <img
                src={userProfile}
                alt="user-profile"
                className="user-profile-photo"
              />
            </div>
            <div className="name">Member Name</div>
            <div className="position">Position</div>
          </motion.div>
          <motion.div className="member-single" variants={singleMember}>
            <div className="photo">
              <img
                src={userProfile}
                alt="user-profile"
                className="user-profile-photo"
              />
            </div>
            <div className="name">Member Name</div>
            <div className="position">Position</div>
          </motion.div>
          <motion.div className="member-single" variants={singleMember}>
            <div className="photo">
              <img
                src={userProfile}
                alt="user-profile"
                className="user-profile-photo"
              />
            </div>
            <div className="name">Member Name</div>
            <div className="position">Position</div>
          </motion.div>
          <motion.div className="member-single" variants={singleMember}>
            <div className="photo">
              <img
                src={userProfile}
                alt="user-profile"
                className="user-profile-photo"
              />
            </div>
            <div className="name">Member Name</div>
            <div className="position">Position</div>
          </motion.div>
          <motion.div className="member-single" variants={singleMember}>
            <div className="photo">
              <img
                src={userProfile}
                alt="user-profile"
                className="user-profile-photo"
              />
            </div>
            <div className="name">Member Name</div>
            <div className="position">Position</div>
          </motion.div>
          <motion.div className="member-single" variants={singleMember}>
            <div className="photo">
              <img
                src={userProfile}
                alt="user-profile"
                className="user-profile-photo"
              />
            </div>
            <div className="name">Member Name</div>
            <div className="position">Position</div>
          </motion.div>
          <motion.div className="member-single" variants={singleMember}>
            <div className="photo">
              <img
                src={userProfile}
                alt="user-profile"
                className="user-profile-photo"
              />
            </div>
            <div className="name">Member Name</div>
            <div className="position">Position</div>
          </motion.div>
          <motion.div className="member-single" variants={singleMember}>
            <div className="photo">
              <img
                src={userProfile}
                alt="user-profile"
                className="user-profile-photo"
              />
            </div>
            <div className="name">Member Name</div>
            <div className="position">Position</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
