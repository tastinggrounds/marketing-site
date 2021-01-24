import React from 'react';

import './Footer.css';

export default function Footer() {
  return (
    <div className="FooterContainer">
      <div className="FooterLeftContainer">
        <a
          title="Realtime application protection"
          href="https://www.sqreen.com/?utm_source=badge"
        >
          <img
            style={{ width: 82, height: 27 }}
            src="https://s3-eu-west-1.amazonaws.com/sqreen-assets/badges/20171107/sqreen-light-badge.svg"
            alt="Sqreen | Runtime Application Protection"
          />
        </a>

      </div>
      <div className="FooterCenterContainer">

        <div className="FooterLogoContainer">
          <a href="https://www.instagram.com/tastinggrounds/">
            <img
              src={ process.env.PUBLIC_URL + '/assets/instagram.png' }
              className="FooterLogoImage"
              alt="follow us on Instagram"
            />
          </a>
          <a href="https://twitter.com/tastinggrounds">
            <img
              src={ process.env.PUBLIC_URL + '/assets/twitter.png' }
              className="FooterLogoImage"
              alt="follow us on Twitter"
            />
          </a>
          <a href="https://www.facebook.com/Tasting-Grounds-103688631520558">
            <img
              src={ process.env.PUBLIC_URL + '/assets/facebook.png' }
              className="FooterLogoImage"
              alt="follow us on Facebook"
            />
          </a>
        </div>
        <p className="FooterCopyright">Copyright 2021 | Tasting Grounds, LLC</p>
      </div>
      <div className="FooterRightContainer">
        <a className="pp-link" href="/privacy">Privacy Policy</a>
      </div>
    </div>
  );
}
