import { useLanguage } from '../LanguageContext';

const AboutPage = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: 'About Us',
      description: 'Learn more about our company and mission',
      ourStory: 'Our Story',
      storyText: 'We are a modern technology company focused on building innovative solutions that make a difference. Our team combines expertise in full-stack development with a passion for creating exceptional user experiences.',
      projects: 'Projects Completed',
      clients: 'Happy Clients',
      experience: 'Years Experience',
    },
    ar: {
      title: 'من نحن',
      description: 'تعرف على المزيد عن شركتنا ومهمتنا',
      ourStory: 'قصتنا',
      storyText: 'نحن شركة تقنية حديثة تركز على بناء حلول مبتكرة تحدث فرقًا. يجمع فريقنا بين الخبرة في التطوير الكامل والشغف بإنشاء تجارب مستخدم استثنائية.',
      projects: 'المشاريع المكتملة',
      clients: 'العملاء السعداء',
      experience: 'سنوات الخبرة',
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
          <div className="about-section">
            <h2>{translations[language].ourStory}</h2>
            <p>{translations[language].storyText}</p>
            <div className="stats-grid">
              <div className="stat-item">
                <h3>500+</h3>
                <p>{translations[language].projects}</p>
              </div>
              <div className="stat-item">
                <h3>50+</h3>
                <p>{translations[language].clients}</p>
              </div>
              <div className="stat-item">
                <h3>5+</h3>
                <p>{translations[language].experience}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutPage;