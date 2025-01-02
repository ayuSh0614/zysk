import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CompaniesSection from './components/CompaniesSection';
import CurvedImage from './components/CurveImage';
import FeaturesSection from './components/FeaturesSection';
import TestimonialCard from './components/Testimonials';
import Features from './components/Feature';
import FAQSection from './components/FAQsection';
import ContactUsCard from './components/ContactUs';
import BlogSection from './components/Blog';
import BlogPostsSection from './components/BlogSection';
import FreeTrial from './components/FreeTrial';
import Footer from './components/Footer';
import FooterBottom from './components/FooterBottom';

const App = () => {
  return (
    
      <div>
        <Navbar />
        <HeroSection />
        <CurvedImage />
        <CompaniesSection />
        <FeaturesSection />
        <TestimonialCard />
        <Features />
        <FAQSection />
        <ContactUsCard />
        <BlogSection />
        <BlogPostsSection />
        <FreeTrial />
        <Footer />
        <FooterBottom />
      </div>
      
    
  );
};

export default App;
