import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./AddNews.css";
export default function AddNews() {
  const [admin, setAdmin] = useState(false);
  const [news, setNews] = useState("");
  const [notice, setNotice] = useState("");
  const [report, setReport] = useState("");
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    isAdmin();
  }, []);
  async function isAdmin() {
    await axios
      .get(`http://localhost:5000/api/auth/adminaccess/${id}`)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setAdmin(true);
        }
      });
  }
  async function handleNews(e) {
    e.preventDefault();
    const body = {
      news: news,
    };
    await axios
      .post(`http://localhost:5000/api/news/addnews`, body)
      .then((res) => {
        // console.log(res);
        if (res.status === 200) {
          alert("News Uploaded");
        }
      });
  }
  async function handleNotice(e) {
    e.preventDefault();
    const body = {
      notice: notice,
    };
    await axios
      .post(`http://localhost:5000/api/notice/addnotice`, body)
      .then((res) => {
        // console.log(res);
        if (res.status === 200) {
          alert("Notice Uploaded");
        }
      });
  }
  async function handleReport(e) {
    e.preventDefault();
    const body = {
      report: report,
    };
    await axios
      .post(`http://localhost:5000/api/report/addreport`, body)
      .then((res) => {
        // console.log(res);
        if (res.status === 200) {
          alert("Report Uploaded");
        }
      });
  }
  return (
    <div className="add-container">
      {admin ? (
        <div className="add-info">
          <div className="add-news">
            <form>
              <textarea
                rows={10}
                cols={80}
                placeholder="What's the news?"
                onChange={(e) => setNews(e.target.value)}
              />
              <br />
              <button className="news-btn" onClick={handleNews}>
                Upload News
              </button>
            </form>
          </div>
          <div className="add-notices">
            <form>
              <textarea
                rows={10}
                cols={80}
                placeholder="What's the notice?"
                onChange={(e) => setNotice(e.target.value)}
              />
              <br />
              <button className="news-btn" onClick={handleNotice}>
                Upload Notice
              </button>
            </form>
          </div>
          <div className="add-reports">
            <form>
              <textarea
                rows={10}
                cols={80}
                placeholder="What's the report?"
                onChange={(e) => setReport(e.target.value)}
              />
              <br />
              <button className="news-btn" onClick={handleReport}>
                Upload Report
              </button>
            </form>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
