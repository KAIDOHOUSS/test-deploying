import { useLanguage } from '../LanguageContext';

const ServicesPage = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: 'Our Services',
      description: 'Comprehensive solutions for your digital needs',
      services: [
        { id: 1, title: 'Web Development', description: 'Custom web applications built with modern technologies', icon: '🌐' },
        { id: 2, title: 'Mobile Development', description: 'Native and cross-platform mobile applications', icon: '📱' },
        { id: 3, title: 'Cloud Solutions', description: 'Scalable cloud infrastructure and deployment', icon: '☁️' },
        { id: 4, title: 'Consulting', description: 'Technical consulting and architecture planning', icon: '💡' },
      ],
      learnMore: 'Learn More',
    },
    ar: {
      title: 'خدماتنا',
      description: 'حلول شاملة لاحتياجاتك الرقمية',
      services: [
        { id: 1, title: 'تطوير الويب', description: 'تطبيقات ويب مخصصة مبنية بتقنيات حديثة', icon: '🌐' },
        { id: 2, title: 'تطوير التطبيقات المحمولة', description: 'تطبيقات محمولة أصلية وعبر المنصات', icon: '📱' },
        { id: 3, title: 'الحلول السحابية', description: 'بنية تحتية سحابية قابلة للتوسع والنشر', icon: '☁️' },
        { id: 4, title: 'الاستشارات', description: 'الاستشارات التقنية وتخطيط الهندسة المعمارية', icon: '💡' },
      ],
      learnMore: 'تعرف على المزيد',
    },
  };

  return (
    <>
      <header className="app-header">
        <h1>{translations[language].title}</h1>
        <p>{translations[language].description}</p>
      </header>
      <main className="main-content">
        <div className="container">
          <div className="services-grid">
            {translations[language].services.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="btn btn-primary">{translations[language].learnMore}</button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default ServicesPage;