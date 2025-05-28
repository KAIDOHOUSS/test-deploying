import { useState } from 'react';
import { useLanguage } from '../LanguageContext';

const ContactPage = () => {
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const { language } = useLanguage();

  const translations = {
    en: {
      title: 'Contact Us',
      description: 'Get in touch with our team',
      getInTouch: 'Get In Touch',
      email: 'Email',
      emailValue: 'hello@yourapp.com',
      phone: 'Phone',
      phoneValue: '+1 (555) 123-4567',
      address: 'Address',
      addressValue: '123 Tech Street\nSan Francisco, CA 94105',
      nameLabel: 'Name',
      emailLabel: 'Email',
      subjectLabel: 'Subject',
      messageLabel: 'Message',
      sendMessage: 'Send Message',
      successMessage: 'Thank you for your message! We will get back to you soon.',
    },
    ar: {
      title: 'اتصل بنا',
      description: 'تواصل مع فريقنا',
      getInTouch: 'تواصل معنا',
      email: 'البريد الإلكتروني',
      emailValue: 'hello@yourapp.com',
      phone: 'الهاتف',
      phoneValue: '+1 (555) 123-4567',
      address: 'العنوان',
      addressValue: '123 شارع التكنولوجيا\nسان فرانسيسكو، كاليفورنيا 94105',
      nameLabel: 'الاسم',
      emailLabel: 'البريد الإلكتروني',
      subjectLabel: 'الموضوع',
      messageLabel: 'الرسالة',
      sendMessage: 'إرسال الرسالة',
      successMessage: 'شكرًا على رسالتك! سنتواصل معك قريبًا.',
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(translations[language].successMessage);
    setContactForm({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  return (
    <>
      <header className="app-header">
        <h1>{translations[language].title}</h1>
        <p>{translations[language].description}</p>
      </header>
      <main className="main-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>{translations[language].getInTouch}</h2>
              <div className="contact-item">
                <h4>📧 {translations[language].email}</h4>
                <p>{translations[language].emailValue}</p>
              </div>
              <div className="contact-item">
                <h4>📞 {translations[language].phone}</h4>
                <p>{translations[language].phoneValue}</p>
              </div>
              <div className="contact-item">
                <h4>📍 {translations[language].address}</h4>
                <p>{translations[language].addressValue}</p>
              </div>
            </div>
            <div className="contact-form-container">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">{translations[language].nameLabel}</label>
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
                  <label htmlFor="email">{translations[language].emailLabel}</label>
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
                  <label htmlFor="subject">{translations[language].subjectLabel}</label>
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
                  <label htmlFor="message">{translations[language].messageLabel}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={contactForm.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">{translations[language].sendMessage}</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactPage;