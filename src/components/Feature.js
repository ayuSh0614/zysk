import React from "react";
import "../styles/feature.css";
import square from "../imges/square.png";
import message from "../imges/circle.png";
import light from "../imges/lightning.png";
import content from "../imges/Content.png";
import { FaArrowRightLong } from "react-icons/fa6";
import mobileContent from "../imges/iPhone 12 Pro mockup.png";  {/* Mobile-specific image */}


const Features = () => {
    const features = [
        {
          icon: message,
          title: "Share team inboxes",
          description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
        },
        {
          icon: light,
          title: "Deliver instant answers",
          description: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
        },
        {
          icon: square,
          title: "Manage your team with reports",
          description: "Measure what matters with our easy-to-use reports. You can filter, export, and drill down on the data in a couple of clicks.",
        }
    ];
  return (
    <section className="features-section">
      <div className="features-header">
        <span className="features-ba">Features</span>
        <h1>Cutting-edge features for advanced analytics</h1>
        <p>
          Powerful, self-serve product and growth analytics to help you convert, engage,
          and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
      <div className="features-showcase">
        {/* Mobile image */}
        <img
          src={mobileContent}
          alt="Mobile analytics preview"
          className="mobile-image"
        />
        {/* Desktop image */}
        <img
          src={content}
          alt="Desktop analytics preview"
          className="desktop-image"
        />
      </div>
      
      <div className="features-section">
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">
              <img src={feature.icon} alt={feature.title} />
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
            <p className="raman">Learn More <FaArrowRightLong /></p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Features;
