import React from "react";
import "../styles/Testimonials.css"; // Import the CSS file
import sisyphusLogo from "../logos/sisy.png"; // Replace with the actual file path

const TestimonialCard = () => {
  return (
    <div className="testimonial-container">
      <img
        src={sisyphusLogo} // Use the imported logo
        alt="Sisyphus Logo"
        className="testimonial-logo"
      />
      <h2 className="testimonial-title">
        We’ve been using <span className="highlight">Untitled</span> to kick start every new project and can’t imagine working without it.
      </h2>
      <div className="testimonial-user-section">
        <img
          src="https://s3-alpha-sig.figma.com/img/fcd7/e604/94e98ef4a34b3228a1783b7f500b0df6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FHJk7Q6x3OZPyBKwiQZTrxaCAzzCLaH1td6lxLjFJwgpr0qs7o7CiETfDymQIGSrvwTZoa-BHh7C990sBR9plzqGnz6qlfdEjeOrBeuGhL2MVUM4OErjwb2VKgqo0TWpAWnlxT6ICZ4HfzWj4JM9hF7lB-bxDrEQrMOCWPc~76G3l9qDDRF7d0FqSPU7H3SLpqycnWEOQbN3mt4xoL5Y~AxcYsabbgnpr3uY4MGZAm48buxF5vh~174bfx0ztWZVlr94Tww7NnVPvY~EWqUVkt2YPW9SAqwimLvVVEeIIdGE5UfJsrjfGIHJR0tlgswSZ8nCe7w3lGJ-2HYF1kSgQw__" // Replace with the actual user image URL
          alt="Candice Wu"
          className="testimonial-avatar"
        />
        <div>
          <p className="testimonial-name">Candice Wu</p>
          <p className="testimonial-position">Product Manager, Sisyphus</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
