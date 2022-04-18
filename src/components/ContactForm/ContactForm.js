import React, { useEffect, useState } from 'react';

import './ContactForm.css';

// eslint-disable-next-line prefer-template
// const actionUrl = window.location.pathname + '?success=true';
const actionUrl = '/about';

export default function ContactForm() {
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
      <p>{actionUrl}</p>
      <form
        method="POST"
        name="contactForm"
        className="contactForm"
        action={actionUrl}
        data-netlify="true"
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
