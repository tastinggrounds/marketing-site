import React from 'react';

import { Heading } from '../../components';

import './FeedbackScreen.css';

export default function FeedbackScreen() {
  return (
    <div>
      <Heading size={Heading.SIZES.XLARGE}>Feedback</Heading>
      <p>
        Submit any feedback by sending an email to&nbsp;
        <a href="mailto:feedback@tastinggrounds.com" target="_blank" rel="noopener noreferrer">feedback@tastinggrounds.com</a>
        .
      </p>
    </div>
  );
}
