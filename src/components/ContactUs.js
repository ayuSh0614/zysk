import React from "react";
import "../styles/ContactUs.css";
import avatar from "../imges/Avatar group.png"

const ContactUsCard = () => {
  return (
    <div className="desi">
      <div className="imageContainer">
        <img
          src={avatar}
          alt="Profile 2"
          className="avatar"
        />
      </div>
      <h2 className="title">Still have questions?</h2>
      <p className="text">
        Can’t find the answer you’re looking for? Please chat to our friendly
        team.
      </p>
      <button className="button">Get in touch</button>
    </div>
  );
};

export default ContactUsCard;
