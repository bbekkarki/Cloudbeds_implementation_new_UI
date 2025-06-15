// import React, { useEffect } from "react";
// import { Home, HelpCircle, Scan, ChevronRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import "./VerificationComplete.css"; // Separate CSS file
// import Header from "../../components/Header/Header";
// import HelpFooter from "../../components/HelpFooter/HelpFooter";
// export default function VerificationComplete() {

//   useEffect(() => {

//  console.log({ guestFirstName: sessionStorage.getItem("guestFirstName") });
//   }, []);
//   const isNewUser = sessionStorage.getItem("newUser");
//   const navigate = useNavigate();
//    const handleHomeClick = () => {
//   navigate("/");
//   }

//   const handleCreateReservationClick = () => {
//     navigate("/customer-details");
//   }
//   return (
//     <div className="verification-page">
//       <div className="verification-container">
//         <header className="verification-header">
//           <div className="logo-section">
//             <div className="home-icon-id">
//              <img src="../src/assets/images/bookingdetails/home.png" alt="home" onClick={handleHomeClick} />
//             </div>
//             <h1 className="verification-title">ID Verification</h1>
//           </div>
          
//             <img src="../src/assets/images/bookingdetails/help.png" alt="help" />
      
      
//         </header>

//         <div className="verification-card">
//           <div className="verification-status">
//             <div className="id-card-illustration">
//                  <img
//                 src="../src/assets/images/card.png"
//                 alt="ID Card Illustration"
//                 className="idcard"
//               />
//               {/* <div className="id-card-content">
              
//                 <div className="id-photo-placeholder"></div>
//                 <div className="id-text-placeholder"></div>
//                 <div className="id-text-placeholder short"></div>
//               </div> */}
//               <div className="checkmark-icon">
//                 <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path
//                     d="M5 13L9 17L19 7"
//                     stroke="white"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </div>
//             </div>
//           </div>

//           <div className="verification-message">
//             <h2 className="message-title">Verification complete!</h2>
//             <p className="message-text">Your identity has been successfully verified.</p>
//           </div>

//           <div className="identity-card">
//             <div className="identity-header"></div>
//             <div className="identity-content">
//               <div className="identity-photo">
//                 <div className="id-photo-profile">
//                   <img
//                 src="../src/assets/images/profileimage.png"
//                 alt="ID Card Illustration"
//                 className="idcard"
//               />
//                 </div>
//               </div>
//               <div className="identity-details">
//                 <div className="detail-row">
//                   <div className="detail-column">
//                     <span className="detail-label">Surname</span>
//                     <span className="detail-value">SIEMANTEL</span>
//                   </div>
//                   <div className="detail-column">
//                     <span className="detail-label">Given Name</span>
//                     <span className="detail-value">DONOVAN</span>
//                   </div>
//                 </div>
//                 <div className="detail-row">
//                   <div className="detail-column">
//                     <span className="detail-label">Date of birth</span>
//                     <span className="detail-value">12 MAY 1993</span>
//                   </div>
//                   <div className="detail-column">
//                     <span className="detail-label">Sex</span>
//                     <span className="detail-value">MALE</span>
//                   </div>
//                 </div>
//                 <div className="detail-row">
//                   <div className="detail-column">
//                     <span className="detail-label">Identity Number</span>
//                     <span className="detail-value">098-876-543</span>
//                   </div>
//                   <div className="detail-column">
//                     <span className="detail-label">Card Expires</span>
//                     <span className="detail-value">02/06/29</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="action-prompt">
//             <p>Do you want to scan another ID or something else?</p>
//           </div>

//           <div className="action-buttons">
//             <button className="rescan-button">
//               <Scan size={40} />
//               <span>Rescan</span>
//             </button>
//             <button className="create-reservation-button" onClick={handleCreateReservationClick}>
//                  <span>{isNewUser ? "Create Reservation" : "Search Reservation"}</span>
//               <ChevronRight size={40} />
//             </button>
//           </div>
//         </div>
//       </div>
//       <HelpFooter />
//     </div>
//   );
// }




import React, { useEffect, useState } from "react";
import { Home, HelpCircle, Scan, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./VerificationComplete.css";
import Header from "../../components/Header/header";
import HelpFooter from "../../components/HelpFooter/HelpFooter";

export default function VerificationComplete() {
  const [guestFirstName, setGuestFirstName] = useState("");
  const [guestLastName, setGuestLastName] = useState("");
  const [guestGender, setGuestGender] = useState("");
  const [guestCountry, setGuestCountry] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestPhone, setGuestPhone] = useState("");

  const navigate = useNavigate();
  const isNewUser = sessionStorage.getItem("newUser");

  useEffect(() => {
    setGuestFirstName(sessionStorage.getItem("guestFirstName") || "");
    setGuestLastName(sessionStorage.getItem("guestLastName") || "");
    setGuestGender(sessionStorage.getItem("guestGender") || "");
    setGuestCountry(sessionStorage.getItem("guestCountry") || "");
    setGuestEmail(sessionStorage.getItem("guestEmail") || "");
    setGuestPhone(sessionStorage.getItem("guestPhone") || "");
  }, []);

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleCreateReservationClick = () => {
    if(isNewUser) {
 navigate("/customer-details");

    }else{
      navigate("/verify-user");
    }
   
  };

  return (
    <div className="verification-page">
      <div className="verification-container">
        <header className="verification-header">
          <div className="logo-section">
            <div className="home-icon-id">
              <img
                src="/assets/images/bookingdetails/home.png"
                alt="home"
                onClick={handleHomeClick}
              />
            </div>
            <h1 className="verification-title">ID Verification</h1>
          </div>
          <img src="/assets/images/bookingdetails/help.png" alt="help" />
        </header>

        <div className="verification-card">
          <div className="verification-status">
            <div className="id-card-illustration">
              <img
                src="/assets/images/card.png"
                alt="ID Card Illustration"
                className="idcard"
              />
              <div className="checkmark-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 13L9 17L19 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="verification-message">
            <h2 className="message-title">Verification complete!</h2>
            <p className="message-text">
              Your identity has been successfully verified.
            </p>
          </div>

          <div className="identity-card">
            <div className="identity-header"></div>
            <div className="identity-content">
              <div className="identity-photo">
                <div className="id-photo-profile">
                  <img
                    src="/assets/images/profileimage.png"
                    alt="ID Card Illustration"
                    className="idcard"
                  />
                </div>
              </div>
              <div className="identity-details">
                <div className="detail-row">
                  <div className="detail-column">
                    <span className="detail-label">Surname</span>
                    <span className="detail-value">{guestLastName}</span>
                  </div>
                  <div className="detail-column">
                    <span className="detail-label">Given Name</span>
                    <span className="detail-value">{guestFirstName}</span>
                  </div>
                </div>
                <div className="detail-row">
                  <div className="detail-column">
                    <span className="detail-label">Date of birth</span>
                    <span className="detail-value">12 MAY 1993</span>
                  </div>
                  <div className="detail-column">
                    <span className="detail-label">Sex</span>
                    <span className="detail-value">{guestGender}</span>
                  </div>
                </div>
                <div className="detail-row">
                  <div className="detail-column">
                    <span className="detail-label">Identity Number</span>
                    <span className="detail-value">098-876-543</span>
                  </div>
                  <div className="detail-column">
                    <span className="detail-label">Card Expires</span>
                    <span className="detail-value">02/06/29</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="action-prompt">
            <p>Do you want to scan another ID or something else?</p>
          </div>

          <div className="action-buttons">
            <button className="rescan-button">
              <Scan size={40} />
              <span>Rescan</span>
            </button>
            <button
              className="create-reservation-button"
              onClick={handleCreateReservationClick}
            >
              <span>
                {isNewUser ? "Create Reservation" : "Search Reservation"}
              </span>
              <ChevronRight size={40} />
            </button>
          </div>
        </div>
      </div>
      <HelpFooter />
    </div>
  );
}
