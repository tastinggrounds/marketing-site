import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import {
  isAndroid,
  isIOS,
} from 'react-device-detect';
import { Heading } from '..';

import './DownloadRedirect.css';

export default function Download() {
  useEffect(() => {
    if (isAndroid) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.tastinggrounds.app';
    } else if (isIOS) {
      window.location.href = 'https://apps.apple.com/us/app/id1526958511';
    } else {
      // eslint-disable-next-line prefer-template
      window.location.href = process.env.PUBLIC_URL + '/';
    }
  }, []);

  return (
    <div className="Download">
      <Helmet>
        <title>Download | Tasting Grounds</title>
        <meta
          name="description"
          content="Download for free now on iOS and Android! Tasting Grounds, the specialty coffee app for logging & tracking your brew process, discovering new coffees & roasters, and sharing with your friends & the community."
        />
        <meta property="og:title" content="Download Tasting Grounds!" />
        <meta property="og:image" content="https://production.cdntg.xyz/assets/logos/app-icon-white.png" />
      </Helmet>
      <Heading size={Heading.SIZES.LARGE}>Thanks for downloading Tasting Grounds!</Heading>
    </div>
  );
}
