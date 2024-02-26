import React, { useState, useEffect } from 'react';
import './HeroSection.css'; // Ensure you have a corresponding CSS file for styles
 // Ensure the path to your image is correct
 import { Link } from 'react-router-dom';



import signUpImage from '../img/sign-up-image.jpeg';
import chooseLocationImage from '../img/choose-location-image.jpeg';
import getNotifiedImage from '../img/get-notified-image.jpeg';
import pickupImage from '../img/pickup-image.jpeg';

const HeroSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((currentStep) => (currentStep + 1) % steps.length);
    }, 3000); // Change step every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

 const steps = [
   {
     title: "Sign Up",
     description: "Get your unique account and start using our services.",
     to: "/signup", // Path to your sign-up page
     linkText: "Learn more",
     imgSrc: signUpImage,
     imgAlt: "Sign up"
   },
    {
      title: "Choose Location",
      description: "Use one of our many locations as your delivery address.",
      to: "/choose-location",
      link: "https://www.locationexample.com",
      linkText: "View locations",
      imgSrc: chooseLocationImage,
      imgAlt: "Choose Location"
    },
    {
       title: "Get Notified",
       description: "We'll inform you when your package is ready for pickup.",
       to: "/get-notified", // Use the path defined in your routes
       linkText: "Notification info",
       imgSrc: getNotifiedImage,
       imgAlt: "Get Notified"
     },
    {
      title: "Pickup",
        description: "Collect your package at your convenience.",
        to: "/how-to-pick-up", // This should match your Route path in App.js
        linkText: "How to pick up",
        imgSrc: pickupImage,
        imgAlt: "Pickup"
    }
  ];

  return (
   <div className="hero-section">
     <h1>How it works</h1>
     <div className="decorative-line"></div>
     <p className="hero-subtitle">Simple steps to a hassle-free package pickup experience.</p>
     <div className="steps-container">
       {steps.map((step, index) => (
         <div key={index} className={`step ${index === activeStep ? 'active' : ''}`}>
           <img src={step.imgSrc} alt={step.imgAlt} className="step-image"/>
           <h2>{step.title}</h2>
           <p>{step.description}</p>
           {step.to ? (
             <Link to={step.to} className="step-link">{step.linkText}</Link>
           ) : (
             <a href={step.link} target="_blank" rel="noopener noreferrer" className="step-link">{step.linkText}</a>
           )}
         </div>
       ))}
     </div>
   </div>

  );
};

export default HeroSection;
