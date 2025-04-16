import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const HeroSection = styled.section`
  height: 85vh;
  background-image: url('/images/dubai-skyline.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.4);
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 0 2rem;
  
  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

const CTAButton = styled.button`
  background-color: #3a86ff;
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background-color: #2563eb;
    transform: translateY(-2px);
  }
`;

const FeaturedSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f8f9fa;
  
  h2 {
    text-align: center;
    margin-bottom: 3rem;
    color: #333;
    font-size: 2.5rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-10px);
  }
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .content {
    padding: 1.5rem;
    
    h3 {
      margin-bottom: 0.5rem;
      color: #3a86ff;
    }
    
    p {
      color: #666;
      margin-bottom: 1rem;
    }
  }
`;

const HomePage = () => {
  const { t } = useTranslation();
  
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello! I'd like to know more about your tour packages.");
    window.open(`https://wa.me/YOUR_WHATSAPP_NUMBER?text=${message}`, '_blank');
  };
  
  return (
    <>
      <HeroSection>
        <HeroContent>
          <h1>{t('heroTitle')}</h1>
          <p>{t('heroSubtitle')}</p>
          <CTAButton onClick={openWhatsApp}>{t('contactUs')}</CTAButton>
        </HeroContent>
      </HeroSection>
      
      <FeaturedSection>
        <h2>{t('ourServices')}</h2>
        <ServicesGrid>
          <ServiceCard>
            <img src="/images/visa-service.jpg" alt="Visa Services" />
            <div className="content">
              <h3>{t('visaServices')}</h3>
              <p>{t('visaDescription')}</p>
              <CTAButton onClick={() => openWhatsApp('visa')}>{t('inquireNow')}</CTAButton>
            </div>
          </ServiceCard>
          
          <ServiceCard>
            <img src="/images/flight-booking.jpg" alt="Flight Booking" />
            <div className="content">
              <h3>{t('flightBooking')}</h3>
              <p>{t('flightDescription')}</p>
              <CTAButton onClick={() => openWhatsApp('ticket')}>{t('bookNow')}</CTAButton>
            </div>
          </ServiceCard>
          
          <ServiceCard>
            <img src="/images/tour-packages.jpg" alt="Tour Packages" />
            <div className="content">
              <h3>{t('tourPackages')}</h3>
              <p>{t('tourDescription')}</p>
              <CTAButton onClick={() => openWhatsApp('tour')}>{t('explorePackages')}</CTAButton>
            </div>
          </ServiceCard>
        </ServicesGrid>
      </FeaturedSection>
    </>
  );
};

export default HomePage;
