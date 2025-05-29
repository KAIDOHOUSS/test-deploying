import { useState } from 'react';

const ContactPage = () => {
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setContactForm({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  return (
    <>
      <header className="app-header">
        <h1>Contact Us</h1>
        <p>Get in touch with our team</p>
      </header>
      <main className="main-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <div className="contact-item">
                <h4>📧 Email</h4>
                <p>hello@yourapp.com</p>
              </div>
              <div className="contact-item">
                <h4>📞 Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="contact-item">
                <h4>📍 Address</h4>
                <p>123 Tech Street<br/>San Francisco, CA 94105</p>
              </div>
            </div>
            <div className="contact-form-container">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={contactForm.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactPage;