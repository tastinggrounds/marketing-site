import React from 'react';
import PropTypes from 'prop-types';

import './Heading.css';

const SIZES = {
  XSMALL: 'XSMALL',
  SMALL: 'SMALL',
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE',
  XLARGE: 'XLARGE',
  XXLARGE: 'XXLARGE',
};

const SIZE_MAP = {
  [SIZES.XXLARGE]: 1,
  [SIZES.XLARGE]: 2,
  [SIZES.LARGE]: 3,
  [SIZES.MEDIUM]: 4,
  [SIZES.SMALL]: 5,
  [SIZES.XSMALL]: 6,
};

export default function Heading({
  size,
  children,
}) {
  const H = `h${SIZE_MAP[size]}`;
  const className = `heading-component-base heading-component-${SIZE_MAP[size]}`;
  return (
    <H className={className}>
      {children}
    </H>
  );
}

Heading.SIZES = SIZES;

Heading.propTypes = {
  size: PropTypes.oneOf(Object.values(Heading.SIZES)).isRequired,
  children: PropTypes.string.isRequired,
};
