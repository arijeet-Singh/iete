import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./News.css";
import axios from "axios";

const headingUpdate = {
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
const subHeading = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      ease: [0.81, 1.39, 1, 1.1],
    },
  },
};
export default function News() {
  const [news, setNews] = useState({ news: "" });
  const [notice, setNotice] = useState({ notice: "" });
  const [report, setReport] = useState({ report: "" });
  useEffect(() => {
    getNews();
    getReports();
    getNotices();
  }, []);
  async function getNews() {
    await axios.get("http://localhost:5000/api/news/getnews").then((res) => {
      setNews(res.data);
    });
  }
  async function getReports() {
    await axios
      .get("http://localhost:5000/api/report/getreports")
      .then((res) => {
        setReport(res.data);
      });
  }
  async function getNotices() {
    await axios
      .get("http://localhost:5000/api/notice/getnotices")
      .then((res) => {
        setNotice(res.data);
      });
  }
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{
        staggerChildren: 0.5,
      }}
    >
      <motion.h1
        className="nnr-heading-update"
        id="news"
        variants={headingUpdate}
      >
        Updates.
      </motion.h1>
      <div className="news-notices-reports">
        <motion.div className="news" variants={headingUpdate}>
          <h1 className="nnr-heading">News.</h1>
          <motion.div
            className="news-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {news.length > 0 &&
              news.map((singleNews) => (
                <p className="nnr-para">{singleNews.news}</p>
              ))}
          </motion.div>
        </motion.div>
        <motion.div className="notices" variants={headingUpdate}>
          <h1 className="nnr-heading">Notices.</h1>
          <motion.div
            className="notices-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {notice.length > 0 &&
              notice.map((singleNotice) => (
                <p className="nnr-para">{singleNotice.notice}</p>
              ))}
          </motion.div>
        </motion.div>
        <motion.div className="reports" variants={headingUpdate}>
          <h1 className="nnr-heading">Reports.</h1>
          <motion.div
            className="reports-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0 }}
          >
            {report.length > 0 &&
              report.map((singleReport) => (
                <p className="nnr-para">{singleReport.report}</p>
              ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
