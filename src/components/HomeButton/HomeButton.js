import React from 'react';
import PropTypes from 'prop-types';

import './HomeButton.css';

export default function HomeButton({ useAltIcon }) {
  const iconSrc = useAltIcon
    ? 'https://production.cdntg.xyz/assets/logos/app-icon-alt.png'
    : `${process.env.PUBLIC_URL}/assets/app-icon.png`;

  const textSrc = useAltIcon
    ? 'https://production.cdntg.xyz/assets/logos/tasting-grounds-text-white.png'
    : `${process.env.PUBLIC_URL}/assets/app-text.png`;

  return (
    <div className="HomeButtonContainer">
      <img
        className="HomeIconImage"
        src={iconSrc}
        alt="tasting grounds logo"
      />
      <img
        className="HomeTextImage"
        src={textSrc}
        alt="tasting grounds logo text"
      />
    </div>
  );
}

HomeButton.propTypes = {
  useAltIcon: PropTypes.bool,
};

HomeButton.defaultProps = {
  useAltIcon: false,
};
