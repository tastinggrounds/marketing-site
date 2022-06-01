import React from 'react';

import { Heading, DownloadButtons } from '../../components';

import './HomeScreen.css';

export default function HomeScreen() {
  return (
    <div className="HomeScreenContainer">
      <div className="HomeScreenContentContainer">
        <picture>
          <source srcSet="https://production.cdntg.xyz/assets/marketing-site/app-home-screenshot.webp" type="image/webp" />
          <img
            className="ScreenshotImage"
            src="https://production.cdntg.xyz/assets/marketing-site/app-home-screenshot.png"
            alt="app screenshot"
          />
        </picture>
        <div className="HomeScreenContentTextContainer">
          <Heading size={Heading.SIZES.XXLARGE}>
            Brew Coffee
            {' '}
            <span className="HeadingCoffee">Together</span>
          </Heading>
          <Heading size={Heading.SIZES.XSMALL}>
            A specialty coffee community for logging the coffees you drink,
            rating & reviewing your coffee brews, discovering new coffee roasters,
            and sharing coffee with your friends.
          </Heading>
          <DownloadButtons />
        </div>
      </div>
    </div>
  );
}
