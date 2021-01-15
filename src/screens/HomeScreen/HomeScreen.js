import React from 'react';

import { Heading, AppleStoreButton, GooglePlayStoreButton } from '../../components';

import './HomeScreen.css';

export default function HomeScreen() {
  return (
    <div className="HomeScreenContainer">
      <div className="HomeScreenContentContainer">
        <img
          className="ScreenshotImage"
          src="assets/app-home-screenshot.png"
          alt="app screenshot"
        />
        <div className="HomeScreenContentTextContainer">
          <Heading size={Heading.SIZES.XXLARGE}>Brew Coffee Together</Heading>
          <Heading size={Heading.SIZES.XSMALL}>A coffee community where you can log your brews, rate & review your coffees, discover new roasters, and share with your friends.</Heading>
          <div className="DownloadButtonContainer">
            <AppleStoreButton />
            <GooglePlayStoreButton />
          </div>
        </div>
      </div>
    </div>
  );
}
