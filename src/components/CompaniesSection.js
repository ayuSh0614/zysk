import React from 'react';
import '../styles/CompaniesSection.css';

// Import logos
import boltshiftLogo from '../logos/boltshift.png';
import lightboxLogo from '../logos/Fictional company logo.svg';
import featherDevLogo from '../logos/featherdev.png';
import spheruleLogo from '../logos/spherule.png';
import globalBankLogo from '../logos/global.png';
import nietzscheLogo from '../logos/niet.png';

const CompaniesSection = () => {
  const companies = [
    { name: 'Boltshift', logo: boltshiftLogo, alt: 'Boltshift Logo' },
    { name: 'Lightbox', logo: lightboxLogo, alt: 'Lightbox Logo' },
    { name: 'FeatherDev', logo: featherDevLogo, alt: 'FeatherDev Logo' },
    { name: 'Spherule', logo: spheruleLogo, alt: 'Spherule Logo' },
    { name: 'GlobalBank', logo: globalBankLogo, alt: 'GlobalBank Logo' },
    { name: 'Nietzsche', logo: nietzscheLogo, alt: 'Nietzsche Logo' },
  ];

  return (
    <section className="companies-container">
      <p className="companies-text">Join 4,000+ companies already growing</p>
      <div className="companies-logos">
        {companies.map((company, index) => (
          <img
            key={index}
            src={company.logo}
            alt={company.alt}
            className="company-logo"
          />
        ))}
      </div>
    </section>
  );
};

export default CompaniesSection;
