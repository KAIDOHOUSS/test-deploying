import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import HomePage from './components/HomePage';
import AboutPage from './components/About';
import ServicesPage from './components/Services';
import ContactPage from './components/Contact';
import NotFoundPage from './components/NotFound.jsx';
import LoginPage from './components/LoginPage.jsx'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceDetail from './components/ServiceDetail.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
function App() { 
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
            <Route path="/about"  element={<ProtectedRoute accessToken="sdqd"> <AboutPage />
          </ProtectedRoute>}/>
          <Route path="/services" element={<ServicesPage />} />
           <Route path="/login" element={<LoginPage/>} />
          <Route path='/services/:id' element={<ServiceDetail/>}/>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <footer className="app-footer"></footer>
      </div>
    </Router>
  );
}
export default App;