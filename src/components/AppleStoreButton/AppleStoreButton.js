import React from 'react';

import './AppStoreButton.css';

export default function AppStoreButton() {
  return (
    <a href="https://apps.apple.com/us/app/tasting-grounds/id1526958511">
      <img
        className="AppStoreButton"
        src="assets/apple-store-download.svg"
        alt="download on the apple store"
      />
    </a>
  );
}
