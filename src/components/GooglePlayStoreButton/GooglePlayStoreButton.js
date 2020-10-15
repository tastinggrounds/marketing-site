import React from 'react';

import './GooglePlayStoreButton.css';

export default function GooglePlayStoreButton() {
  return (
    <a href="https://play.google.com/store/apps/details?id=com.tastinggrounds.app">
      <img
        className="GooglePlayStoreButton"
        src="assets/google-play-download.png"
        alt="download on the google play store"
      />
    </a>
  );
}
