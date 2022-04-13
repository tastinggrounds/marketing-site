import React from 'react';

import './ContactForm.css';

export default function ContactForm() {
  return (
    <form
      method="POST"
      name="contactform"
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
  );
}
