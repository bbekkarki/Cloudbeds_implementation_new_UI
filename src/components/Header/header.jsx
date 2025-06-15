// // Header.js
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./header.css"; // You can create a separate CSS file or reuse styles

// export default function Header() {
//   const navigate = useNavigate();

//   const handleHomeClick = () => {
//     navigate("/");
//   };

//   return (
//     <header className="header-container">
//       <div className="logo-section">
//         <div className="header-icon-id" onClick={handleHomeClick}>
//           <img
//             src="../src/assets/images/bookingdetails/home.png"
//             alt="home"
//             style={{ cursor: "pointer" }}
//           />
//         </div>
//         <h1 className="header-title">ID Verification</h1>
//       </div>
//       <img
//         src="../src/assets/images/bookingdetails/help.png"
//         alt="help"
//         className="header-icon"
//       />
//     </header>
//   );
// }


import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

export default function Header({ value = "ID Verification" }) {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <header className="header-container">
      <div className="logo-section">
        <div className="header-icon-id" onClick={handleHomeClick}>
          <img
            src="/assets/images/bookingdetails/home.png"
            alt="home"
            style={{ cursor: "pointer" }}
          />
        </div>
        <h1 className="header-title">{value}</h1>
      </div>
      <img
        src="/assets/images/bookingdetails/help.png"
        alt="help"
        className="header-icon"
      />
    </header>
  );
}