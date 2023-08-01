import React from "react";
import "./Bio.css";
import Indicator from "../Common/Indicator/Indicator";

function Bio(props) {
  return (
    <div className="boi-container">
      <Indicator lable='Bio'/>
      <div className="bio-parent">
        <div className="bio-picture" data-aos="fade-right" data-aos-duration="1000">
          <img
            src={require("../../assets/me2.jpg")}
            alt=""
            className="bio-image"
          />
        </div>
        <div className="bio-content" data-aos="fade-left" data-aos-duration="1000">
          {/* <div className="basic-detail">
            <div className="basic-detail-location">
              <h2>Location</h2>
              <span>
                Khodana, Mandsaur <br /> (MP), India 458669
              </span>
            </div>
            <div className="basic-detail-education">
              <h2>Education</h2>
              <span>
                Computer Science <br />
                Engineering from <br />
                VITS Collage Bhopal{" "}
              </span>
            </div>
            <div className="basic-detail-experience">
              <h2>Experience</h2>
              <span>
                2+ years of experience in javascript, Angula, React/Redux
                <br /> Cumulus-systems
              </span>
            </div>
          </div> */}
          <div className="bio-headline">
            Hi, I am a Full stack Developer. I am a proficient in Javascript
            development. I have made many projects during my studies with
            Javascript, React, Angular, and NodeJs. Currentally I am working at
            Cumulus System Pvt. Ltd. (Hitachi group Company). Here I am involved
            in UI developing with Angular. I have worked on multiple front-end
            features. I enjoy in coding, Developing new things, Problem Solving, DataStructure & Algorithms. I always try to
            write clean and sustainable code. I have knowledge of Angular, React, Javascript, HTML, CSS,
            Java, Data Structure & Algorithms. I am also certified of computer
            hardware and networking from Jetking Bhopal.
          </div>
          <div className="bulet-points">
            <ul>
              <li>I am from Mandsaur (MP)</li>
              <li>I am a proficient in Javascript development</li>
              <li>I have experience in Angular, React/Redux development</li>
              <li>Completed Bachelors of Computer Science and Engineering</li>
              <li>Working as Sofware developer for last two year</li>
              <li>I have knowledge of Angular, React, NodeJs, Java, Github, etc</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
