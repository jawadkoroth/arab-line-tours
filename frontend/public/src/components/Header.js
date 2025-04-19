import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };
  
  return (
    <header style={{
      backgroundColor: '#3a86ff',
      color: 'white',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>
        <h1>Arab Line Tours</h1>
      </div>
      
      <nav>
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          gap: '2rem'
        }}>
          <li><Link to="/" style={{color: 'white'}}>{t('home')}</Link></li>
          <li><Link to="/about" style={{color: 'white'}}>{t('about')}</Link></li>
          <li><Link to="#" style={{color: 'white'}}>{t('visa')}</Link></li>
          <li><Link to="#" style={{color: 'white'}}>{t('ticket')}</Link></li>
          <li><Link to="/travel-guides" style={{color: 'white'}}>{t('travelGuides')}</Link></li>
          <li>
            <button onClick={toggleLanguage} style={{
              background: 'none',
              border: '1px solid white',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              {i18n.language === 'en' ? 'العربية' : 'English'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
