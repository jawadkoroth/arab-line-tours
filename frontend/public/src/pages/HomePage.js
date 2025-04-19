import React from 'react';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <section style={{
        height: '50vh',
        backgroundColor: '#2563eb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <div>
          <h1>{t('heroTitle')}</h1>
          <p>{t('heroSubtitle')}</p>
          <button style={{
            backgroundColor: 'white',
            color: '#3a86ff',
            border: 'none',
            padding: '0.8rem 2rem',
            fontSize: '1.1rem',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '20px'
          }}>
            {t('contactUs')}
          </button>
        </div>
      </section>
      
      <section style={{
        padding: '5rem 2rem',
        backgroundColor: '#f8f9fa'
      }}>
        <h2 style={{textAlign: 'center', marginBottom: '3rem'}}>{t('ourServices')}</h2>
      </section>
    </>
  );
};

export default HomePage;
