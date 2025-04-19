import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import GlobalStyle from './styles/GlobalStyle';

const Footer = () => <footer style={{textAlign: 'center', padding: '20px', backgroundColor: '#f8f9fa'}}>
  © 2025 Arab Line Tours. All rights reserved.
</footer>;

const AboutPage = () => <div style={{padding: '50px 20px', textAlign: 'center'}}>
  <h1>About Arab Line Tours</h1>
  <p>Your premier travel partner in the Middle East</p>
</div>;

const TravelGuidesPage = () => <div style={{padding: '50px 20px', textAlign: 'center'}}>
  <h1>Travel Guides</h1>
  <p>Explore our collection of travel guides</p>
</div>;

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/travel-guides" element={<TravelGuidesPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
