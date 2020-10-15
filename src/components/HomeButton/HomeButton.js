import React from 'react';

import './HomeButton.css';

export default function HomeButton() {
  return (
    <div className="HomeButtonContainer">
      <img
        className="HomeIconImage"
        src="assets/app-icon.png"
        alt="tasting grounds logo"
      />
      <img
        className="HomeTextImage"
        src="assets/app-text.png"
        alt="tasting grounds logo"
      />
    </div>
  );
}
