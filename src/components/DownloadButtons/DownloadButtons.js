import React from 'react';

import { AppleStoreButton, GooglePlayStoreButton } from '../../components';
import './DownloadButtons.css';

export default function DownloadButtons() {
  return (
    <div className="DownloadButtonContainer">
      <AppleStoreButton />
      <GooglePlayStoreButton />
    </div>
  );
}
