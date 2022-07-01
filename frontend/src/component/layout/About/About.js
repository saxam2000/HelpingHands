import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";

import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/saxam_dhyani";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://drive.google.com/file/d/1YPN3HMxiYKyJHzRZEN0KaBADzCtVHMtT/view?usp=sharing"
              alt="Founder"
            />
            <Typography>Saksham Dhyani</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by @Saksham. 
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.linkedin.com/in/saxam2000/" target="blank">
              
            </a>

            <a href="https://instagram.com/saxam_dhyani" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
