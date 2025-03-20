import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../assets/styles/Footer.scss'
import { LINKS } from "../constants";


function Footer() {
  return (
    <footer>
      <div>
        <a href={LINKS.github} target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href={LINKS.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href={LINKS.instagram} target="_blank"><InstagramIcon/></a>
      </div>
      <p>A portfolio designed & built by Mahjoub Lemine with 💜</p>
    </footer>
  );
}

export default Footer;