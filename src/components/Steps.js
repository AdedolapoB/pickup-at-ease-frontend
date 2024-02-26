import React from 'react';
import './Steps.css'; // Make sure your CSS path is correct

// Replace with your actual SVG icons and paths
import logisticsIcon from '../img/Logistics.jpeg';
import fastDeliveryIcon from '../img/Fast-Delivery.jpeg';
import orderTrackingIcon from '../img/Tracking.jpeg';
import warehousingIcon from '../img/Warehouse.jpeg';

const Steps = () => {
  return (
    <div className="steps-container">
      <div className="step">
        <img src={logisticsIcon} alt="Logistics" className="step-icon" />
        <h3>Logistics</h3>
        <p>Our Logistics services encompass comprehensive planning and execution strategies tailored to your specific needs. With a focus on real-time coordination, we leverage advanced systems for maximum efficiency, ensuring that every aspect of the supply chain is optimized for speed and reliability. From inventory management to order fulfillment and distribution, we integrate cutting-edge technology and data analytics to provide transparent and controlled processes.</p>
      </div>
      <div className="step">
        <img src={fastDeliveryIcon} alt="Fast Delivery" className="step-icon" />
        <h3>Fast Delivery</h3>
        <p>Our Fast Delivery commitment is underpinned by a state-of-the-art logistics network, ensuring that your package not only arrives on time but is also handled with the utmost care from pickup to delivery. We understand that speed is of the essence, which is why our dispatch system is optimized for rapid processing, leveraging real-time routing algorithms to avoid delays. Our fleet is equipped with the latest in GPS technology, allowing for dynamic rerouting to navigate traffic and other transit hurdles efficiently.</p>
      </div>
      <div className="step">
        <img src={orderTrackingIcon} alt="Order Tracking" className="step-icon" />
        <h3>Order Tracking</h3>
        <p>Our Order Tracking system offers unparalleled transparency and peace of mind by providing real-time updates on your order status from the moment it leaves the warehouse to the moment it arrives at your doorstep. Utilizing advanced GPS tracking and RFID technology, our platform allows you to monitor your shipment. </p>
      </div>
      <div className="step">
        <img src={warehousingIcon} alt="Warehousing" className="step-icon" />
        <h3>Warehousing</h3>
        <p>Our Warehousing service is the cornerstone of supply chain security and efficiency. We offer state-of-the-art facilities that are designed to keep your inventory safe, secure, and ready for dispatch. Each warehouse is equipped with 24/7 surveillance systems, advanced fire suppression technology, and climate-controlled environments to ensure optimal preservation of your goods</p>
      </div>
    </div>
  );
};

export default Steps;
