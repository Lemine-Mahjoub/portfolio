import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../assets/styles/Main.scss';
import { LINKS } from "../constants";
import pfp from '../assets/images/pfp.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={pfp} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href={LINKS.github} target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href={LINKS.instagram}><InstagramIcon/></a>
          </div>
          <h1>Mahjoub Lemine</h1>
          <p>Full Stack Developer</p>

          <div className="mobile_social_icons">
            <a href={LINKS.github} target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href={LINKS.instagram}><InstagramIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;