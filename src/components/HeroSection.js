import React from 'react';
import { PiPlayCircle } from 'react-icons/pi'; // React icon for Demo button
import '../styles/HeroSection.css'; // Import the custom CSS file

const HeroSection = () => {
  return (
    <section className="hero-container">
      {/* Nested capsules */}
      <div className="outer-capsule">
        <span className="inner-capsule">New feature</span>
        <span className="outer-text">Check out the team dashboard →</span>
      </div>

      {/* Hero text */}
      <h1 className="hero-heading">Beautiful analytics to grow smarter</h1>
      <p className="hero-description">
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </p>

      {/* Buttons */}
      <div className="hero-buttons">
        <button className="demo-button">
          <PiPlayCircle className="icon" /> Demo
        </button>
        <button className="signup-button">Sign up</button>
      </div>
    </section>
  );
};

export default HeroSection;
