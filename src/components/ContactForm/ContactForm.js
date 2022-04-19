import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './ContactForm.css';

export default function ContactForm() {
  const location = useLocation().pathname;
  const actionUrl = `${location}?success=true`;

  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if (window.location.search.includes('success=true')) {
      setSuccess(true);
    }
  }, []);

  function onClick() {
    setSuccess(false);
    window.history.replaceState(null, '', '/contact');
  }

  return (
    <div>
      {success && (
        <div className="successMessage">
          Thanks for contacting Tasting Grounds! We will follow-up with you by email
          as soon as possible.

          Don&apos;t forget to checkout our feature roadmap or to submit your feature ideas on our
          <a href="https://ideas.tastinggrounds.com"> ideas board!</a>
          <p />
          <button type="submit" onClick={onClick}>Back</button>
        </div>
      )}
      {!success && (
        <form
          name="contactForm"
          action={actionUrl}
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="contactForm"
        >
          <input
            type="hidden"
            name="form-name"
            value="contactForm"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
          />
          <input
            type="text"
            name="name"
            placeholder="Your name"
          />
          <textarea
            name="message"
            placeholder="Messaage"
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}
