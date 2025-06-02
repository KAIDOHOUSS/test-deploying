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
import { useState } from 'react';
import AppContext from './components/AppContextProvider.jsx';
function App() { 
  const refreshAccessToken =  () =>{
    const token = 'ezezeze'
    return token
  }
  return (
    <AppContext>
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
            <Route path="/about"  element={<AboutPage />}/>
          <Route path="/services" element={<ServicesPage />} />
          <Route path='services/:id' element={<ProtectedRoute accessToken="dsd"> <ServiceDetail/> </ProtectedRoute>}/>
           <Route path="/login" element={<LoginPage/>} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <footer className="app-footer"></footer>
      </div>
    </Router>
    </AppContext>
  );
}
export default App;