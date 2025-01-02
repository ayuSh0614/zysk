import React from "react";
import "../styles/FeaturesSection.css";

// Import PNG images
import square from "../imges/square.png";
import command from "../imges/command-symbol.png";
import smile from "../imges/circle (1).png";
import love from "../imges/circle (2).png";
import message from "../imges/circle.png";
import light from "../imges/lightning.png";

const FeaturesSection = () => {
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
    },
    {
      icon: smile,
      title: "Connect with customers",
      description: "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
    },
    {
      icon: command,
      title: "Connect the tools you already use",
      description: "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
    },
    {
      icon: love,
      title: "Our people make the difference",
      description: "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
    },
  ];

  return (
    <div className="features-section">
      <div className="features-header">
        <p className="features-subtitle">Features</p>
        <h2 className="features-title">Analytics that feels like it's from the future</h2>
        <p className="features-description">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">
              <img src={feature.icon} alt={feature.title} />
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
