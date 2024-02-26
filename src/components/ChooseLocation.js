import React from 'react';
import './ChooseLocation.css'; // Make sure this path is correct

const ChooseLocation = () => {
  // Add your location selection logic here (e.g., fetching from an API, state management, etc.)

  const handleLocationSelect = (event) => {
    // Handle the location selection
    console.log("Location selected:", event.target.value);
  };

  return (
    <div className="choose-location-container">
      <h2 className="location-title">Choose Your Delivery Location</h2>
      <div className="location-list">
        {/* Replace this with dynamic location data fetched from an API */}
        <div className="location-item" onClick={() => handleLocationSelect("Location 1")}>
          <h3>Location 1</h3>
          <p>123 Main Street, City, Country</p>
        </div>
        <div className="location-item" onClick={() => handleLocationSelect("Location 2")}>
          <h3>Location 2</h3>
          <p>456 Another St, Another City, Country</p>
        </div>
        {/* More locations */}
      </div>
    </div>
  );
};

export default ChooseLocation;
