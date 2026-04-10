// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import MyCity from './pages/MyCity';
import MyFuture from './pages/MyFuture';
import './index.css';

// Швидкі вбудовані стилі
const headerStyle = {
  backgroundColor: 'white',
  padding: '15px 0',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  borderBottom: '1px solid #e0e0e0'
};

const navContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '900px',
  margin: '0 auto',
  padding: '0 20px'
};

const logoStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#333',
  textDecoration: 'none'
};

const navLinksStyle = {
  display: 'flex',
  gap: '20px'
};

// Стилізація активного посилання
const getNavLinkStyle = ({ isActive }) => ({
  color: isActive ? '#007bff' : '#555',
  textDecoration: 'none',
  fontWeight: isActive ? '700' : '400',
  fontSize: '1.05rem',
  borderBottom: isActive ? '2px solid #007bff' : '2px solid transparent',
  paddingBottom: '3px'
});

const footerStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '20px 0',
  marginTop: '40px',
  textAlign: 'center'
};

const footerLinksStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '25px',
  margin: '10px 0',
  listStyle: 'none',
  padding: 0
};

const footerLinkItem = {
  textDecoration: 'none',
  color: 'white',
  opacity: '0.8',
  fontSize: '0.9rem'
};

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <header style={headerStyle}>
          <div style={navContainer}>
            <NavLink to="/" style={logoStyle}>Портфоліо</NavLink>
            <nav style={navLinksStyle}>
              <NavLink to="/about" style={getNavLinkStyle}>Про мене</NavLink>
              <NavLink to="/my-city" style={getNavLinkStyle}>Моє місто</NavLink>
              <NavLink to="/my-future" style={getNavLinkStyle}>Мій розвиток</NavLink>
            </nav>
          </div>
        </header>

        <main style={{ flexGrow: 1 }}>
          <div className="container">
            <Routes>
              <Route path="/about" element={<AboutMe />} />
              <Route path="/my-city" element={<MyCity />} />
              <Route path="/my-future" element={<MyFuture />} />
              <Route path="/" element={<AboutMe />} /> 
            </Routes>
          </div>
        </main>

        <footer style={footerStyle}>
          <div style={navContainer}>
            <p style={{ margin: 0, opacity: 0.8 }}>© 2026 Ярослав. Усі права захищено.</p>
            <ul style={footerLinksStyle}>
              <li><a href="https://github.com/Nice0000000" target="_blank" rel="noreferrer" style={footerLinkItem}>GitHub</a></li>
              <li><a href="#" style={footerLinkItem}>LinkedIn</a></li>
              <li><a href="mailto:your.email@example.com" style={footerLinkItem}>Email</a></li>
            </ul>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
