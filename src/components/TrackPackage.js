import React from 'react';
import Footer from './Footer';
import './TrackPackage.css'; // Ensure this is the correct path to your CSS file

const TrackPackage = () => {
  return (
    <div className="tracking-container">
      <h1>Track your Order</h1>
      <div className="search-area">
        <p>Track your items using tracking, delivery notice card, or reference numbers.</p>
        <input type="text" placeholder="Enter your 12-digit tracking ID" maxLength="12" className="tracking-input" />
        <button type="button" className="search-button">Search</button>
      </div>
      <div className="recent-searches">
        <h2>Recent Searches</h2>
        {/* List out recent searches here */}
      </div>
      {/* Additional content goes here */}
      <Footer />
    </div>
  );
};

export default TrackPackage;



