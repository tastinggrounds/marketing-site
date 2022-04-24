import React, { useState } from 'react';

import './ContactForm.css';

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    message: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // eslint-disable-next-line
  const encode = (data) => {
    return Object.keys(data)
      // eslint-disable-next-line
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  function submitForm(e) {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contactForm', ...formData }),
    })
      .then(() => setSuccess(true))
      .then(() => setFormData({name: null, email: null,  message: null}))
      // eslint-disable-next-line
      .catch(error => console.log(error));
  }

  function handleBack() {
    setSuccess(false);
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
          <button type="submit" onClick={handleBack}>Back</button>
        </div>
      )}
      {!success && (
        <form
          name="contactForm"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="contactForm"
          onSubmit={submitForm}
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
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Messaage"
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}
