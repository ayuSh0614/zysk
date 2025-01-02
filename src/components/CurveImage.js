import React from 'react';
import '../styles/CurveImage.css';

const CurvedImage = () => {
  const imageUrl = "https://s3-alpha-sig.figma.com/img/081a/4c6e/48bee3c577d90c805ebc6abe73e441d3?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XbVyFyLddlF7hlbaBc2cZicOBskup1ydEdCnZ2zqaObOAPenjWd3SPYalc6iUhfskmS2ARdzDQ0lMs59dgCaNzJZr4naoEI6AHnrNXeYX3blXPmboF577irCmBfjKepDmxYwDbShSUuW6aq5wN8n4uhCI8btiMh8R3hOHdknJ1tCIJncJwmMjMjdcbPa04mSII79AF3VERtPSmGdJU44-9eENwmnzizQOa~Y3w6RWsCzCjxce5fNcF69QImmskzvU8IkhGI2iFPD5f5N0IeBunnA9jAvPdmW00l8zOHraW~dWp5vnVSBaLhpE03JnaFdniJ53FuI0IgTIZo3lGoe7Q__"; // Replace with your image URL

  return (
    <div className="curved-image-container">
      <img className="curved-image" src={imageUrl} alt="Curved Image Example" />
    </div>
  );
};

export default CurvedImage;
