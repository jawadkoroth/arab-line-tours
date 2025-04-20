import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #3a86ff;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  
  img {
    height: 50px;
  }
  
  h1 {
    margin-left: 1rem;
    font-weight: 600;
  }
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    gap: 2rem;
    
    @media (max-width: 768px) {
      display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
      flex-direction: column;
      position: absolute;
      top: 80px;
      left: 0;
      right: 0;
      background-color: #3a86ff;
      padding: 1rem;
    }
  }
  
  li a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.3s;
    
    &:hover {
      opacity: 0.8;
    }
  }
  
  button {
    background: none;
    border: 1px solid white;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s;
    
    &:hover {
      background-color: white;
      color: #3a86ff;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };
  
  const openWhatsApp = (service) => {
    const message = encodeURIComponent(`Hello! I'm interested in your ${service} services.`);
    window.open(`https://wa.me/YOUR_WHATSAPP_NUMBER?text=${message}`, '_blank');
  };
  
  return (
    <HeaderContainer>
      <Logo>
        <img src="/images/logo.png" alt="Arab Line Tours" />
        <h1>Arab Line Tours</h1>
      </Logo>
      
      <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </MobileMenuButton>
      
      <Nav isOpen={isMenuOpen}>
        <ul>
          <li><Link to="/">{t('home')}</Link></li>
          <li><Link to="/about">{t('about')}</Link></li>
          <li><a href="#" onClick={() => openWhatsApp('visa')}>{t('visa')}</a></li>
          <li><a href="#" onClick={() => openWhatsApp('ticket')}>{t('ticket')}</a></li>
          <li><Link to="/travel-guides">{t('travelGuides')}</Link></li>
          <li><button onClick={toggleLanguage}>{i18n.language === 'en' ? 'العربية' : 'English'}</button></li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
