import React, { useEffect, useState } from "react";
import "./Skills.css";
import Indicator from "../Common/Indicator/Indicator";
import CircularProgressBar from "../Common/CircularProgressBar/CircularProgressBar";
import ProgressBar from "../Common/ProgressBar/ProgressBar";

function Skills(props) {
  let skills = {
    condingSkills: [
      {
        name: "Javascript",
        progress: 95,
      },
      {
        name: "HTML/CSS/SCSS",
        progress: 90,
      },
      {
        name: "React/Redux",
        progress: 80,
      },
      {
        name: "Angular",
        progress: 90,
      },
      {
        name: "NodeJs",
        progress: 70,
      },
      {
        name: "Express",
        progress: 70,
      },
      {
        name: "Java",
        progress: 60,
      },
      {
        name: "Git/Github/Gitlab",
        progress: 80,
      },
    ],
    pfSkills: [
      {
        name: "Frontend developer",
        progress: 80,
      },
      {
        name: "Backend developer",
        progress: 60,
      },
      {
        name: "Full Stack developer",
        progress: 70,
      },
      {
        name: "Problem Solving",
        progress: 90,
      },
      {
        name: "Team work",
        progress: 95,
      },
      {
        name: "Creative Thinking",
        progress: 90,
      },
    ],
  };
  return (
    <div className="skills-page-container">
      {!props.isHeaderRoute && <Indicator lable="Skills" />}
      <div className="skills-parent">
        <div className="skills coding-skills">
          <p>Codding Skills</p>
          <div 
          className="skills-container"
          data-aos="zoom-in-right"
          data-aos-duration="1000"
          data-aos-delay="200"
          >
            {skills.condingSkills.map((skill) => {
              return (
                <ProgressBar
                  lable={skill.name}
                  percentage={skill.progress}
                  width="130px"
                />
              );
            })}
          </div>
        </div>
        <div className="skills profestional-skills">
          <p>Profesoinal Skills</p>
          <div 
          className="skills-container"
          data-aos="zoom-in-left"
          data-aos-duration="1000"
          data-aos-delay="250"
          >
            {skills.pfSkills.map((skill) => {
              return (
                <CircularProgressBar
                  lable={skill.name}
                  percentage={skill.progress}
                  circleWidth={300}
                  strikeWidth="25px"
                  textSize="50px"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
