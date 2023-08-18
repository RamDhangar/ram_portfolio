import React from 'react';
import "./SocialLink.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import Facebook from "@mui/icons-material/Facebook";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Twitter from "@mui/icons-material/Twitter";

function ScialLinks(props) {
    return (
        <div className="social-media">
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
          </div>
    );
}

export default ScialLinks;