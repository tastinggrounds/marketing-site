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
            style={{ width: 109, height: 36 }}
            src="https://s3-eu-west-1.amazonaws.com/sqreen-assets/badges/20171107/sqreen-light-badge.svg"
            alt="Sqreen | Runtime Application Protection"
          />
        </a>

      </div>
      <div className="FooterCenterContainer">

        <div className="FooterLogoContainer">
          <a href="https://www.instagram.com/tastinggrounds/">
            <img
              src="assets/instagram.png"
              className="FooterLogoImage"
              alt="follow us on Instagram"
            />
          </a>
          <a href="https://twitter.com/tastinggrounds">
            <img
              src="assets/twitter.png"
              className="FooterLogoImage"
              alt="follow us on Twitter"
            />
          </a>
          <a href="https://www.facebook.com/Tasting-Grounds-103688631520558">
            <img
              src="assets/facebook.png"
              className="FooterLogoImage"
              alt="follow us on Facebook"
            />
          </a>
        </div>
        <p className="FooterCopyright">Copyright 2020 | Tasting Grounds</p>
      </div>
      <div className="FooterRightContainer">
        <a className="pp-link" href="/privacy">Privacy Policy</a>
      </div>
    </div>
  );
}
