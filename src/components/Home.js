import React from 'react';
import Navbar from './Navbar'; // Adjust the path if necessary

import HeroSection from './HeroSection'; // Adjust the path if necessary
import Steps from './Steps';
import Footer from './Footer'; // Adjust the path if necessary// Import any additional components that make up the home page

const Home = () => {
  return (
    <>

      <HeroSection />
      <Steps/>
      {/* Insert any other components that should be part of the Home page here */}
      <Footer />
    </>
  );
};

export default Home;
