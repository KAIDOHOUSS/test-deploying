import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const NotFoundPage = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: '404 - Page Not Found',
      description: "The page you're looking for doesn't exist",
      error: 'Oops! Something went wrong.',
      message: "The page you're looking for might have been moved, deleted, or doesn't exist.",
      goBack: 'Go Back Home',
    },
    ar: {
      title: '404 - الصفحة غير موجودة',
      description: 'الصفحة التي تبحث عنها غير موجودة',
      error: 'عذرًا! حدث خطأ ما.',
      message: 'الصفحة التي تبحث عنها قد تم نقلها أو حذفها أو غير موجودة.',
      goBack: 'العودة إلى الصفحة الرئيسية',
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
          <div className="not-found">
            <div className="not-found-content">
              <h2>{translations[language].error}</h2>
              <p>{translations[language].message}</p>
              <Link to="/" className="btn btn-primary">{translations[language].goBack}</Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFoundPage;