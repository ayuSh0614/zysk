import React, { useState } from "react";
import "../styles/FAQsection.css";

const FAQSection = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel your subscription anytime from your account settings.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "Yes, you can add additional details to your invoice from your billing settings.",
    },
    {
      question: "How does billing work?",
      answer: "Billing is done on a monthly basis, and you can review invoices in your account.",
    },
    {
      question: "How do I change my account email?",
      answer: "You can update your account email from the profile settings section.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
  <div className="faq-header">
    <h1>Frequently asked questions</h1>
    <p>Everything you need to know about the product and billing.</p>
  </div>
  <div className="faq-list">
    {faqs.map((faq, index) => (
      <div
        key={index}
        className={`faq-item ${openQuestionIndex === index ? "open" : ""}`}
        onClick={() => toggleQuestion(index)}
      >
        <div className="faq-question">
          {faq.question}
          <span className="faq-toggle">{openQuestionIndex === index ? "−" : "+"}</span>
        </div>
        {openQuestionIndex === index && (
          <div className="faq-answer">{faq.answer}</div>
        )}
      </div>
    ))}
  </div>
  
</section>

  );
};

export default FAQSection;