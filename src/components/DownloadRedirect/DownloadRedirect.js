import React, { useEffect } from 'react';
import {
  isAndroid,
  isIOS,
} from 'react-device-detect';
import { Heading } from '..';

import './DownloadRedirect.css'

export default function Download() {
  useEffect(() => {
    if (isAndroid) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.tastinggrounds.app';
    } else if (isIOS) {
      window.location.href = 'https://apps.apple.com/us/app/id1526958511';
    } else {
      window.location.href = 'https://tastinggrounds.com';
    }
  }, []);

  return (
    <div className="Download">
        <Heading size={Heading.SIZES.LARGE}>Thanks for downloading Tasting Grounds!</Heading>
    </div>
  );
}
