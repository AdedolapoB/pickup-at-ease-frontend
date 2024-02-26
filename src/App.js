import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LocationsAndHours from './components/Location';
import Home from './components/Home';
import TrackPackage from './components/TrackPackage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import GetNotified from './components/GetNotified'; // Adjust the path as needed
import HowToPickUp from './components/HowToPickUp'; // Adjust path as necessary
import ChooseLocation from './components/ChooseLocation'; // Import your ChooseLocation component
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location-hours" element={<LocationsAndHours />} />
        <Route path="/track-package" element={<TrackPackage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/choose-location" element={<ChooseLocation />} />
        <Route path="/get-notified" element={<GetNotified />} />
        <Route path="/how-to-pick-up" element={<HowToPickUp />} />
        {/* ... other routes */}
      </Routes>
      {/* Footer component if you have it */}
    </>
  );
};

export default App;


