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

  return (
    <div>
      {success && (
        <p style={{ color: 'green' }}>
          Thanks for your message!
        </p>
      )}
      <form
        name="contactForm"
        action={actionUrl}
        method="POST"
        data-netlify="true"
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
    </div>
  );
}
