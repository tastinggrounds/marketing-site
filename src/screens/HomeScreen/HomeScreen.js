import React from 'react';

import AppleStoreButton from '../../components/AppleStoreButton/AppleStoreButton';
import GooglePlayStoreButton from '../../components/GooglePlayStoreButton/GooglePlayStoreButton';
import Heading from '../../components/Heading/Heading';

import './HomeScreen.css';

export default function HomeScreen() {
  return (
    <div className="HomeScreenContainer">
      <Heading size={Heading.SIZES.XLARGE}>Brew Coffee Together</Heading>
      <div className="HomeScreenContentContainer">
        <img
          className="ScreenshotImage"
          src="assets/app-screenshot-home.png"
          alt="app screenshot"
        />
        <div className="HomeScreenContentTextContainer">
          <Heading size={Heading.SIZES.MEDIUM}>Start brewing today!</Heading>
          <div className="DownloadButtonContainer">
            <AppleStoreButton />
            <GooglePlayStoreButton />
          </div>
          <Heading size={Heading.SIZES.SMALL}>Available now on the App Store and Google Play</Heading>
        </div>
      </div>
    </div>
  );
}
