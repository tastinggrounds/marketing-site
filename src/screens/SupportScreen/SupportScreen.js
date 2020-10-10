import React from 'react';

import './SupportScreen.css';

export default function SupportScreen() {
  return (
    <div className="support-container">
      <h1>Support</h1>
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
