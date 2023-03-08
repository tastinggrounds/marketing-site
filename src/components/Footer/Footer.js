import React from 'react';

import './Footer.css';
import { IconContext } from 'react-icons';
import {
  SiInstagram,
  SiTwitter,
  SiFacebook,
  SiReddit,
} from 'react-icons/si';
import MailChimpForm from '../MailChimpForm/MailChimpForm';

export default function Footer() {
  return (
    <div className="FooterContainer">
      <div className="FooterLeftContainer">
        <MailChimpForm />
      </div>
      <div className="FooterCenterContainer">
        <div className="FooterLogoContainer">
          {/* eslint-disable-next-line react/jsx-no-constructed-context-values */}
          <IconContext.Provider value={{ className: 'FooterLogoImage', size: '1.5em' }}>
            <a href="https://www.instagram.com/tastinggrounds/" target="_blank" rel="noopener noreferrer">
              <SiInstagram />
            </a>
            <a href="https://twitter.com/tastinggrounds" target="_blank" rel="noopener noreferrer">
              <SiTwitter />
            </a>
            <a href="https://www.facebook.com/tastinggrounds" target="_blank" rel="noopener noreferrer">
              <SiFacebook />
            </a>
            <a href="https://www.reddit.com/r/TastingGrounds" target="_blank" rel="noopener noreferrer">
              <SiReddit />
            </a>
          </IconContext.Provider>
        </div>
        <p className="FooterCopyright">Copyright &copy; Tasting Grounds, LLC</p>
      </div>
      <div className="FooterRightContainer">
        <a className="LegalLink" href="/terms">Terms</a>
        |
        <a className="LegalLink" href="/privacy">Privacy Policy</a>
      </div>
    </div>
  );
}
