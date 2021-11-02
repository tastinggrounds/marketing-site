import React from 'react';

import './Footer.css';
import { IconContext } from 'react-icons';
import { SiInstagram, SiTwitter, SiFacebook, SiReddit } from 'react-icons/si';

export default function Footer() {
  return (
    <div className="FooterContainer">
      
      <div className="FooterLeftContainer">
      </div>
      <div className="FooterCenterContainer">
        <div className="FooterLogoContainer">
          <IconContext.Provider value={{ className: "FooterLogoImage", size: "1.5em" }}>
            <a href="https://www.instagram.com/tastinggrounds/" target="_blank" rel="noopener noreferrer">
              <SiInstagram />
            </a>
            <a href="https://twitter.com/tastinggrounds" target="_blank" rel="noopener noreferrer">
              <SiTwitter />
            </a>
            <a href="https://www.facebook.com/tastingcoffeegrounds" target="_blank" rel="noopener noreferrer"> 
              <SiFacebook />
            </a>
            <a href="https://www.reddit.com/r/TastingGrounds" target="_blank" rel="noopener noreferrer"> 
              <SiReddit />
            </a>
          </IconContext.Provider>
        </div>
        <p className="FooterCopyright">Copyright 2021 | Tasting Grounds, LLC</p>
      </div>
      <div className="FooterRightContainer">
        <a className="pp-link" href="/privacy">Privacy Policy</a>
      </div>
    </div>
  );
}
