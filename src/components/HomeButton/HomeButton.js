import React from 'react';

import './HomeButton.css';

export default function HomeButton() {
  return (
    <div className="HomeButtonContainer">
      <img
        className="HomeIconImage"
        src={ process.env.PUBLIC_URL + '/assets/app-icon.png' }
        alt="tasting grounds logo"
      />
      <img
        className="HomeTextImage"
        src={ process.env.PUBLIC_URL + '/assets/app-text.png' }
        alt="tasting grounds logo text"
      />
    </div>
  );
}
