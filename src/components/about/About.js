/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./About.css";
import Certificate from "../../img/certificate.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import CV from "../../assets/FakeCv.pdf";
// import CV from "../../assets/cv.pdf";
// import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <p className="message">My CV is Downloadable here</p>
          <p className="shortMessage">(Click on the icon)</p>
          <a href={CV} download="Amit's Resume" target="_blank">
            <DownloadIcon className="downloadIcon" />
          </a>
          {/* <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          /> */}
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I am aspiring React developer.
        </p>
        <p className="a-desc">
          I started my education as a Bachelor of Computer Application at the year 2013 and then started my Masters on Computer Application at the year 2016. Presently i am studying on React and working on it.
        </p>
        <div className="a-award">
          <img src={Certificate} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">
              IBM Hackathon Special Category Winner 2018
            </h4>
            <p className="a-award-desc">Winner for best UI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
