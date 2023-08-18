import React from "react";
import "./Profile.css";
import Typical from "react-typical";
import AppButton from "../Common/AppButton/AppButton";
import SocialLink from "../Common/SocialLink/ScialLinks"

function Profile(props) {
  function onclick() {
    console.log("clicked");
  }
  function downloadPDF() {
    // Create an anchor element
    const link = document.createElement("a");
    link.href = "ram_resume.pdf";
    link.target = "_blank";
    link.download = "ram_resume.pdf";

    // Append the anchor element to the document body
    document.body.appendChild(link);

    // Trigger a click event on the anchor element
    link.click();

    // Remove the anchor element from the document body
    document.body.removeChild(link);
  }
  return (
    <div
      className="profile-container"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I am <span className="highlight-text">Ram dhangar</span>
            </span>
          </div>
          <div className="primary-details-role">
            <h1>
              <Typical
                loop={Infinity}
                steps={[
                  "Ethusiastic Dev 📍",
                  4000,
                  "Frontend Dev 💻",
                  4000,
                  "Full Stack Dev 😎",
                  4000,
                  "Cross Platfrom v 🪩",
                  4000,
                  "Angular Dev 📱",
                  4000,
                  "React/React Native Dev 📱",
                  4500,
                ]}
              />
            </h1>
            <span className="profile-bio">
              Full stack Developer || Angular || React/Redux || Node.js || Cumulus System pvt ltd
            </span>
          </div>
          <div className="profile-buttons">
            <AppButton isPrimary="true" label="Hire me" clickEvent={onclick} />
            <AppButton
              type="secondary"
              label="Resume"
              clickEvent={downloadPDF}
            />
          </div>
          {/* <div className="social-media">
            <div className="social-media-icons">
              <a href="https://www.instagram.com">
                {" "}
                <InstagramIcon />{" "}
              </a>
              <a href="https://www.linkedin.com/in/ramdhangar">
                <LinkedIn />
              </a>
              <a href="https://github.com/RamDhangar/">
                <GitHub />
              </a>
              <a href="https://www.facebook.com/ram.chodhari.14">
                <Facebook />
              </a>
              <a href="#">
                <Twitter />
              </a>
            </div>
          </div> */}
          <SocialLink/>
        </div>
        <div
          className="profile-picture"
          data-aos="zoom-in-left"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="profile-Picture-background">
            <img src="profile.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
