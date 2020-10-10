import React from 'react';

import './FeedbackScreen.css';

export default function FeedbackScreen() {
  return (
    <div className="support-container">
      <h1>Feedback</h1>
      <p>
        Submit any feedback by sending an email to&nbsp;
        <a href="mailto:feedback@tastinggrounds.com" target="_blank" rel="noopener noreferrer">feedback@tastinggrounds.com</a>
        .
      </p>
    </div>
  );
}
