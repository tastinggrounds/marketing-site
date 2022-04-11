import React from 'react';

import AppleStoreButton from './AppleStoreButton/AppleStoreButton';
import GooglePlayStoreButton from './GooglePlayStoreButton/GooglePlayStoreButton';
import './DownloadButtons.css';

export default function DownloadButtons() {
  return (
    <div className="DownloadButtonContainer">
      <AppleStoreButton />
      <GooglePlayStoreButton />
    </div>
  );
}
