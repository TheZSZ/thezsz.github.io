import React, { useState } from 'react';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // To disable the form while submitting

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setIsSubmitting(true); // Disable the form while submitting

    // Send the form data using fetch to Formspree
    try {
      const response = await fetch('https://formspree.io/f/mqakzblq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setIsSubmitted(true); // success message
        setErrorMessage('');
      } else {
        setErrorMessage('Failed to send the message. Please try again.');
        setIsSubmitting(false); // Re-enable form on failure
      }
    } catch (error) {
      setErrorMessage('There was an error sending the message. Please try again.');
      setIsSubmitting(false); // Re-enable form on error
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="fields">
          <div className="field half">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formState.name}
              onChange={handleChange}
              required
              disabled={isSubmitted || isSubmitting} // disable input after submission
            />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formState.email}
              onChange={handleChange}
              required
              disabled={isSubmitted || isSubmitting} 
            />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={formState.message}
              onChange={handleChange}
              required
              disabled={isSubmitted || isSubmitting}
            />
          </div>
        </div>
        <ul className="actions">
          <li>
            <button
              type="submit"
              className="button submit"
              disabled={isSubmitted || isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </li>
        </ul>
      </form>

      {isSubmitted && <p>Thank you! Your message has been sent.</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </section>
  );
};

export default ContactForm;
