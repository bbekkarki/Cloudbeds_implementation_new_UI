
import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './KiotelScreen.css';
import screen01Decor1 from '/assets/images/screen01/screen-01-decor-1.png';
import screen01Decor2 from '/assets/images/screen01/screen-01-decor-2.png';
// import screen01Top from './assets/images/screen01/screen-01.png';
import screen01Top from '/assets/images/screen01/screen-01.png'; // Adjust the path as necessary
const KiotelScreen = () => {
  const navigate = useNavigate();

  const handleScreenClick = () => {
   navigate('/check-reservation'); // Navigate to the Check Reservation screen
  };

  
   useEffect(() => {
    sessionStorage.clear();
  }, [])

  return (
    <>
      <img src={screen01Decor1} alt="Kiosk decor 1" className="screen01-decor-1" />
      <img src={screen01Decor2} alt="Kiosk decor 2" className="screen01-decor-2" />
      <div className="kiotel-container" onClick={handleScreenClick}>
        <div className="kiotel-header">
          <img src={screen01Top} alt="Kiosk welcome screen" className="screen01Top" />
        </div>
        <div className="kiotel-message">
          <p className="line">Effortless</p>
          <p className="line highlight">Stays,</p>
          <p className="line">Exceptional</p>
          <p className="line highlight">Comfort</p>
        </div>
        <div className="tap-text">Tap anywhere to continue</div>
      </div>
    </>
  );
};

export default KiotelScreen;
