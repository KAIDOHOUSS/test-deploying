import { useState } from 'react';
import {contacts} from '../data/data'
import { useContext } from 'react';
import { AppContext } from './AppContextProvider';
const ContactPage = () => {
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const {accessToken,setError,setMessage,setShowAlert,setShowAlertError} = useContext(AppContext)
  const handleSubmit = (e) => {
        e.preventDefault();
    try{
    if (!accessToken){
      setError('you have to log in first')
     return setShowAlertError(true)
    }
    setMessage('message sent successfully our team will reply soon')
    setShowAlert(true)
  }
     finally{
setContactForm({ name: '', email: '', subject: '', message: '' });
setTimeout(() => {
  setShowAlert(false)
setShowAlertError(false)
setMessage('')
setError('')
}, 4000);
     }
  };

  const handleChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  return (
    <>
      <header className="app-header">
        <h1>Contac Us</h1>
        <p>Get in touch with our team</p>
      </header>
      <main className="main-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
            {contacts.map(contact =>
                <a className='contact-icon' href={contact.link}>{contact.icon}</a>
            )}
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