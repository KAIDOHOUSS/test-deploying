import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import HomePage from './components/HomePage';
import AboutPage from './components/About';
import ServicesPage from './components/Services';
import ContactPage from './components/Contact';
import NotFoundPage from './components/NotFound.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <footer className="app-footer"></footer>
      </div>
    </Router>
  );
}

export default App;