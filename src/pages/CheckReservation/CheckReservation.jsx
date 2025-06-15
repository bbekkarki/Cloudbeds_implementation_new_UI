
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CheckReservation.css';
import screen01Decor1 from '/assets/images/screen01/screen-01-decor-1.png';
import screen01Decor2 from '/assets/images/screen01/screen-01-decor-2.png';
import walkinIcon from '/assets/images/walkin.png';
import checkinIcon from '/assets/images/checkin.png';
import checkoutIcon from '/assets/images/checkout.png';
import topLogo from '/assets/images/topbox.png';

function CheckReservation() {
  const navigate = useNavigate();

  const handleProceedToID = () => {
    navigate('/id-verification');
  };

const handleWalkIn = () => {
    navigate('/booking-form');
}

  return (
    <div className="app-container">
      <img src={screen01Decor1} alt="Kiosk decor 1" className="screen01-decor-1" />
      <img src={screen01Decor2} alt="Kiosk decor 2" className="screen01-decor-2" />
      
      <div className="top-box">
        <img src={topLogo} alt="Kiotel Logo" className="top-logo" />
      </div>

      <div className="card">
        <h2>How would you like to proceed?</h2>

        <button className="option-button" onClick={handleWalkIn}>
          <span>Walk-In</span>
          <img src={walkinIcon} alt="Walk-In Icon" />
        </button>

        <button className="option-button" onClick={handleProceedToID}>
          <span>Check-In</span>
          <img src={checkinIcon} alt="Check-In Icon" />
        </button>

        <button className="option-button">
          <div className="text-group">
            <span>Check-Out</span>
            <small style={{ fontSize: '35px' }}>Modify Booking</small>
          </div>
          <img src={checkoutIcon} alt="Check-Out Icon" />
        </button>
      </div>
    </div>
  );
}

export default CheckReservation;
