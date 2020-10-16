import React from 'react';

import { Heading } from '../../components';

import './SupportScreen.css';

export default function SupportScreen() {
  return (
    <div>
      <Heading size={Heading.SIZES.XLARGE}>Support</Heading>
      <p>
        For support requests, please email&nbsp;
        <a
          href="mailto:support@tastinggrounds.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          support@tastinggrounds.com
        </a>
        .
      </p>
    </div>
  );
}
