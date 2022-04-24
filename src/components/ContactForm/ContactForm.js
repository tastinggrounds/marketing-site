import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './ContactForm.css';

export default function ContactForm() {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const actionUrl = `${location}?success=true`;

  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if (window.location.search.includes('success=true')) {
      setSuccess(true);
    }
  }, []);

  function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }
  
  const [name, setName] = useState("")

  const handleChange = (e) => {
    setName({ ...name, [e.target.name]: e.target.value })
  }

  const handleSubmit = (event) => {
    // Prevent the default onSubmit behavior
    event.preventDefault();
    // POST the encoded form with the content-type header that's required for a text submission
    // Note that the header will be different for POSTing a file
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ 
        "form-name": event.target.getAttribute("name"), 
        ...name
      })
    })
      // On success, redirect to the custom success page using Gatsby's `navigate` helper function
      .then(() => navigate("/contact#success=true"))
      // On error, show the error in an alert
      .catch(error => alert(error));
  };

  function onClick() {
    setSuccess(false);
    window.history.replaceState(null, null, '/contact');
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
          onSubmit={handleSubmit}
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
            onChange={handleChange}
          />
          <input
            type="text"
            name="name"
            placeholder="Your name"
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Messaage"
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}
