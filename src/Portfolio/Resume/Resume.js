import React, { useState, useEffect } from "react";
import "./Resume.css";
import Indicator from "../Common/Indicator/Indicator";
import { TabScrollButton } from "@mui/material";

let data = [
  {
    title: "Education",
    contents: [
      {
        heading: "Full Stack Development Course",
        subHeading: "Newton School",
        detail: "Successfully completed a comprehensive Full Stack Development course at Newton School, where I gained practical experience in various front-end and back-end technologies, including DSA, JavaScript, Angular, React/Redux, Node.js, Express, and MongoDB.",
        time: "Jan 2021 - Jan 2022",
      },
      {
        heading: "Computer Science and Engineering",
        subHeading: "Vaishnavi Institute of Technology and Science Bhopal",
        detail: "Completed Bachelor of Engineering (BE) in Computer Science Engineering. Developed a strong foundation in computer science principles and programming languages, including C++, Java, Python, and more.",
        time: "2016 - 2020",
      },
      {
        heading: "Higher Secondary School Certificate",
        subHeading: "LBS School of Excellence Mandsaur",
        detail: "Completed higher secondary school certification with Mathematics, science subject and score 85%",
        time: "2015 - 2016",
      },
    ],
  },
  {
    title: "Experience",
    contents: [
      {
        heading: "Software Engineer",
        subHeading: "Cumulus systems Pvt Ltd (Hitachi Group)| Pune",
        detail: "Working as a software engineer for last 2 years at Cumulus Systems, where I have boost my skills in Angular, JavaScript, HTML/CSS, Git/GitHub, and Linux commands. Collaborated with cross-functional teams to design, develop and maintain user-friendly UI features and functionality.",
        time: "Feb 2022 - Today",
      },
      {
        heading: "Full Stack Development",
        subHeading: "Newton School",
        detail: "While completing Full stack development cource created many project with faclty guidence using Javascript, React/Redux, NodeJs, MongooDB",
        time: "Jan 2021 - Jan 2022",
      },
      {
        heading: "IT support Engineer",
        subHeading: "Jetking | Bhopal",
        detail: "Completed an internship at Jetking Bhopal in Computer Hardware and Networking, where I gained a solid understanding of networking fundamentals. Learned about various networking concepts including IP, IP Subnetting, MAC address, DNS, network protocols like TCP/IP, HTTP, FTP, and SMTP and more.",
        time: "Jul 2019 - Aug 2020",
      },
    ],
  },
  {
    title: "Projects",
    contents: [
      {
        heading: "React Weather App",
        subHeadingLinks: [
          {
            link: "https://ramdhangar.github.io/react-weather-app/",
            label: "Host link || "
          },
          {
            link: "https://github.com/RamDhangar/react-weather-app",
            label: "Github link"
          }
        ],
        detail: "React weather app is created using react functionality. In this app you can type city name and get data by pressing enter.",
        time: "Jan 2021 - Jan 2022",
      },
      {
        heading: "Rock Paper Scissors Game",
        subHeadingLinks: [
          {
            link: "https://ramdhangar.github.io/rock_paper_scissors_game/",
            label: "Host link"
          },
          {
            link: "https://github.com/RamDhangar/rock_paper_scissors_game",
            label: "Github link"
          }
        ],
        detail: "Create a game Rock Paper and Scissors. Enter round of game as a turns and click on Play button. Every round it will show who win the round and at the end it will show final result as a winner.",
        time: "2016 - 2020",
      },
      {
        heading: "Not A Robot Verify",
        subHeadingLinks: [
          {
            link: "https://ramdhangar.github.io/notRobotVerify/",
            label: "Host link"
          },
          {
            link: "https://github.com/RamDhangar/notRobotVerify",
            label: "Github link"
          }
        ],
        detail: "Verify user as not a robot. There 6 image will show, 5 image will different and one is repeat from out of 5 image. User have to select 2 same image and click on verify button. Verify and reset button appear after clicking on image.",
        time: "2015 - 2016",
      },
      {
        heading: "Tip Calculator",
        subHeadingLinks: [
          {
            link: "https://ramdhangar.github.io/TipCalaulator/",
            label: "Host link || "
          },
          {
            link: "https://github.com/RamDhangar/TipCalaulator",
            label: "Github link"
          }
        ],
        detail: "This project is based on html, css, and javascript. Calculate tip amount and calculate distribution   it in total peoples.",
        time: "2015 - 2016",
      },
    ],
  } 
];

function Resume(props) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeContent, setActiveContets] = useState(0);
  const [windowWidth, setwindowWidth] = useState(
    window.innerWidth - (window.innerWidth / 100) * 8
  );
  let sliderWidth = data.length * 140 + 40;

  const handleWindowResize = () => {
    let width = window.innerWidth - (window.innerWidth / 100) * 8;
    setwindowWidth(width);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function showSlide(i) {
    setActiveSlide(i);
  }

  function scrollLeft() {
    let scollElement = document.getElementById("slider-scroll");
    scollElement.scrollLeft += 100;
  }
  function scrollRight() {
    let scollElement = document.getElementById("slider-scroll");
    scollElement.scrollLeft -= 100;
  }

  return (
    <div className="resume-container">
      <div className="resume-indicator">
        {!props.isHeaderRoute &&
        <>
        <Indicator lable="Resume"/>
        </>
}
      </div>
      <div className="resume" data-aos="zoom-in" data-aos-duration="1000">
        <div className="slider">
          <div
            style={{
              visibility: windowWidth < sliderWidth ? "visible" : "hidden",
            }}
            onClick={scrollRight}
          >
            <TabScrollButton direction="left" />
          </div>
          <div className="slider-labels" id="slider-scroll">
            {data.map((fieled, i) => {
              return (
                <div
                  className="slide-title"
                  onClick={() => showSlide(i)}
                  style={{
                    background: i === activeSlide ? "var(--background)" : "whitesmoke",
                    color: i === activeSlide && "var(--pink)"
                  }}
                >
                  {fieled.title}
                </div>
              );
            })}
          </div>
          <div
            style={{
              visibility: windowWidth < sliderWidth ? "visible" : "hidden",
            }}
            onClick={scrollLeft}
          >
            <TabScrollButton direction="right" />
          </div>
        </div>
        <div className="slider-content">
          {data.map((slideData, i) => {
            if (activeSlide === i && slideData.contents) {
              return slideData.contents.map((content, i) => {
                return (
                  <div className="content-box">
                    <div className="first-line">
                      <div>
                        <span className="indicator"></span>
                        <h2>{content.heading}</h2>
                      </div>
                      <div className="content-left"> {content.time}</div>
                    </div>
                    {content.subHeading && <h4>{content.subHeading}</h4>}
                    <div className="subheading-links">
                    {content.subHeadingLinks && content.subHeadingLinks.map((data, i) => {return i===0 ? <span><a href={data.link}>{data.label}</a></span> : <span> || <a href="data.link">{data.label}</a></span>})}
                    </div>
                    <p>{content.detail}</p>
                  </div>
                );
              });
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Resume;
