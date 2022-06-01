import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { Heading } from '../../components';
import ContactForm from '../../components/ContactForm/ContactForm';

import './ContactScreen.css';

export default function ContactScreen() {
  return (
    <HelmetProvider>
      <div className="ContactScreenContainer">
        <Helmet>
          <title>Contact | Tasting Grounds</title>
          <meta
            name="description"
            content="Contact Tasting Grounds for help, feedback, bugs reports, or feature requests for the iOS and Android coffee app for logging & tracking your brew process, discovering new coffees & roasters, and sharing with your friends & the community."
          />
          <link rel="canonical" href="https://tastinggrounds.com/contact" />
        </Helmet>
        <Heading size={Heading.SIZES.LARGE}>Contact</Heading>
        <div className="ContactScreenTextContainer">
          <Heading size={Heading.SIZES.XSMALL}>
            Have some feedback or need help with something? Drop us a question, feature request,
            bug report, or any other note in the form below!
            You can also send us an email at&nbsp;
            <a
              href="mailto:hey@tastinggrounds.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              hey@tastinggrounds.com
            </a>
            .
          </Heading>
        </div>
        <ContactForm />
      </div>
    </HelmetProvider>
  );
}
