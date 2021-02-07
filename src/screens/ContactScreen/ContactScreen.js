import React from 'react';
import Helmet from 'react-helmet';

import { Heading } from '../../components';

import './ContactScreen.css';

export default function ContactScreen() {
  return (
    <div className="ContactScreenContainer">
      <Helmet>
        <title>Tasting Grounds | Contact</title>
        <meta 
          name="description" 
          content="Contact Tasting Grounds. The iOS and Android coffee app for logging & tracking your brew process, discovering new coffees & roasters, and sharing with your friends & the community." 
        />
      </Helmet>
      <Heading size={Heading.SIZES.XXLARGE}>Contact</Heading>
      <div className="ContactScreenTextContainer">
        <Heading size={Heading.SIZES.XSMALL}>Have some feedback or need help with something? Drop us a question, feature request, bug report, or any  other note in the form below or send us an email at&nbsp;
          <a href="mailto:hey@tastinggrounds.com" target="_blank" rel="noopener noreferrer">hey@tastinggrounds.com</a>!
        </Heading>
      </div>
      {/* eslint-disable-next-line */}
      <iframe className="ContactForm" src="https://docs.google.com/forms/d/e/1FAIpQLSf6rqxHMBBIy-D3nlXvGinxEj4TA5fiWlPkv0Wg1QfiUTYVzQ/viewform?embedded=true">Loading…</iframe>
    </div>
  );
}
