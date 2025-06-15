import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchReservation.css";
import Loading from "../../components/Loading/Loading";
import HelpFooter from "../../components/HelpFooter/HelpFooter";
import { API_KEY, BASE_API_URL, propertyID } from "../../components/constants/constants";


const maskPhone = (phone) => {
  console.log(phone);
  if (!phone) return phone;
  // phone = phone.replace(/\D/g, '');
  if (phone.length === 10) {
    return phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1****$3");
  } else if (phone.length >= 6 && phone.length < 10) {
    return phone.replace(/(\d{3})(\d+)(\d{3})/, "$1***$3");
  } else {
    return phone.replace(/(\d{3})(\d{0,3})/, "$1***");
  }
};

const maskEmail = (email) => {
  if (!email) return email;
  const [local, domain] = email.split("@");
  const maskedLocal =
    local.substring(0, 2) + "***" + local.substring(local.length - 2);
  return `${maskedLocal}@${domain}`;
};

const SearchReservation = () => {
  const [detailedReservation, setDetailedReservation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchDetailedReservation = async (reservationID) => {
    try {
      sessionStorage.setItem("reservationID", reservationID);
      sessionStorage.setItem("reservedcustomer", true);
      const response = await fetch(
        `${BASE_API_URL}/getReservation?reservationID=${reservationID}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            authorization: `Bearer ${API_KEY}`,
            "x-api-key": `${API_KEY}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch detailed reservation information.");
      }

      const data = await response.json();
      if (data.success) {
        setDetailedReservation(data.data);
        setLoading(false);

        const grandTotal = data.data.balanceDetailed.grandTotal || 0;
        const paidAmount = data.data.balanceDetailed.paid || 0;

        sessionStorage.setItem("grandTotal", grandTotal);
        sessionStorage.setItem("paidAmount", paidAmount);

        console.log(
          `✅ Saved to session: Grand Total = $${grandTotal}, Paid = $${paidAmount}`
        );
      } else {
        setError("Detailed reservation not available.");
      }
    } catch (err) {
      setError(
        err.message || "Failed to fetch detailed reservation information."
      );
    }
  };

  useEffect(() => {
    const reservationID = sessionStorage.getItem("reservationID");
    fetchDetailedReservation(reservationID);
  }, []);

  useEffect(() => {
    if (!loading && !detailedReservation) {
      const timeout = setTimeout(() => {
        navigate("/");
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [loading, detailedReservation, navigate]);

  const handleNextStep = () => {
    const balance = detailedReservation?.balance || 0;
    if (balance <= 0) {
      navigate("/assign-room");
    } else {
      navigate("/payment");
    }
  };
const handleHomeClick = () => {
    navigate('/');
  };
  const renderReservationDetails = () => {
    if (!detailedReservation) return null;

    const {
      guestName,
      guestList,
      guestEmail,
      assigned,
      unassigned,
      status,
      total,
      balance,
      balanceDetailed,
      startDate,
      endDate,
      reservationID,
    } = detailedReservation || {};

    const roomStatus =
      assigned && assigned.length > 0
        ? {
            isAssigned: true,
            roomTypeName: assigned[0].roomTypeName,
            roomName: assigned[0].roomName,
            adults: assigned[0].adults,
            children: assigned[0].children,
          }
        : {
            isAssigned: false,
            roomTypeName: unassigned?.[0]?.roomTypeName,
            adults: unassigned?.[0]?.adults,
            children: unassigned?.[0]?.children,
          };

    return (
      <div className="reservation-details-container">
        <h2>Reservation Details</h2>

        <div className="reservation-details-section">
          <h3>General Information</h3>
          <p>
            <strong>Guest Name:</strong> {guestName}
          </p>
          <p>
            <strong>Guest Email:</strong> {maskEmail(guestEmail)}
          </p>
          <p>
            <strong>Guest Phone:</strong>
            {maskPhone(Object.values(guestList)[0]?.guestPhone)}
          </p>
          <p>
            <strong>Reservation ID:</strong> {reservationID}
          </p>
          <p>
            <strong>Status:</strong> {status}
          </p>
        </div>

        <div className="reservation-details-section">
          <h3>Dates & Stay</h3>
          <p>
            <strong>Check-in Date:</strong> {startDate}
          </p>
          <p>
            <strong>Check-out Date:</strong> {endDate}
          </p>

          {roomStatus.isAssigned ? (
            <>
              <p>
                <strong>Room Type:</strong> {roomStatus.roomTypeName}
              </p>
              <p>
                <strong>Room Name:</strong> {roomStatus.roomName}
              </p>
              <p>
                <strong>Total Guests:</strong> Adults - {roomStatus.adults},
                Children - {roomStatus.children}
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Room Status:</strong> Your room is not assigned yet.
              </p>
              <p>
                <strong>Room Type:</strong> {roomStatus.roomTypeName}
              </p>
              <p>
                <strong>Total Guests:</strong> Adults - {roomStatus.adults},
                Children - {roomStatus.children}
              </p>
            </>
          )}
        </div>

        <div className="reservation-details-section">
          <h3>Billing Information</h3>
          <p>
            <strong>Total Amount:</strong> ${total}
          </p>
          <p>
            <strong>Balance:</strong> ${balance}
          </p>
          <p>
            <strong>Balance Breakdown:</strong>
          </p>
          <ul>
            <li>
              <strong>Subtotal:</strong> ${balanceDetailed?.subTotal}
            </li>
            <li>
              <strong>Taxes & Fees:</strong> ${balanceDetailed?.taxesFees}
            </li>
            <li>
              <strong>Grand Total:</strong> ${balanceDetailed?.grandTotal}
            </li>
            <li>
              <strong>Paid:</strong> ${balanceDetailed?.paid}
            </li>
          </ul>
        </div>
        <div className="reservation-button-container">
          <button className="reservation-button" onClick={handleNextStep}>
            {balance <= 0 ? "Continue to Check-In" : "Continue to Payment"}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="check-reservation-page">
      <header className="rooms-header">
          <div className="icon-title">
            <img
              src="/assets/images/bookingdetails/home.png"
              alt="home"
              style={{ cursor: 'pointer' }}
              onClick={handleHomeClick}
            />
            <span style={{ color: "#fff"}}>Reservation Details</span>
          </div>
          <div>
            <img src="/assets/images/bookingdetails/help.png" alt="help" />
          </div>
        </header>
      {loading && <Loading />}
      {!loading && error && (
        <div className="reservation-error-container">
          <h2>{error}</h2>
          <p>Redirecting to the homepage...</p>
        </div>
      )}
      {renderReservationDetails()}
      <HelpFooter/>
    </div>
  );
};

export default SearchReservation;






// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./SearchReservation.css";
// import Loading from "../../components/Loading/Loading";
// import HelpFooter from "../../components/HelpFooter/HelpFooter";
// import { API_KEY, BASE_API_URL, propertyID } from "../../components/constants/constants";
// import homeIcon from "../../assets/images/bookingdetails/home.png"; // Import image
// import helpIcon from "../../assets/images/bookingdetails/help.png"; // Import image

// const maskPhone = (phone) => {
//   if (!phone) return phone;
//   if (phone.length === 10) {
//     return phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1****$3");
//   } else if (phone.length >= 6 && phone.length < 10) {
//     return phone.replace(/(\d{3})(\d+)(\d{3})/, "$1***$3");
//   } else {
//     return phone.replace(/(\d{3})(\d{0,3})/, "$1***");
//   }
// };

// const maskEmail = (email) => {
//   if (!email) return email;
//   const [local, domain] = email.split("@");
//   const maskedLocal =
//     local.substring(0, 2) + "***" + local.substring(local.length - 2);
//   return `${maskedLocal}@${domain}`;
// };

// const SearchReservation = () => {
//   const [detailedReservation, setDetailedReservation] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const fetchDetailedReservation = async (reservationID) => {
//     try {
//       sessionStorage.setItem("reservationID", reservationID);
//       sessionStorage.setItem("reservedcustomer", true);
//       const response = await fetch(
//         `${BASE_API_URL}/getReservation?reservationID=${reservationID}`,
//         {
//           method: "GET",
//           headers: {
//             accept: "application/json",
//             authorization: `Bearer ${API_KEY}`,
//             "x-api-key": `${API_KEY}`,
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to fetch detailed reservation information.");
//       }

//       const data = await response.json();
//       if (data.success) {
//         setDetailedReservation(data.data);
//         setLoading(false);

//         const grandTotal = data.data.balanceDetailed.grandTotal || 0;
//         const paidAmount = data.data.balanceDetailed.paid || 0;

//         sessionStorage.setItem("grandTotal", grandTotal);
//         sessionStorage.setItem("paidAmount", paidAmount);

//         console.log(
//           `✅ Saved to session: Grand Total = $${grandTotal}, Paid = $${paidAmount}`
//         );
//       } else {
//         setError("Detailed reservation not available.");
//       }
//     } catch (err) {
//       setError(
//         err.message || "Failed to fetch detailed reservation information."
//       );
//     }
//   };

//   useEffect(() => {
//     const reservationID = sessionStorage.getItem("reservationID");
//     fetchDetailedReservation(reservationID);
//   }, []);

//   useEffect(() => {
//     if (!loading && !detailedReservation) {
//       const timeout = setTimeout(() => {
//         navigate("/");
//       }, 5000);
//       return () => clearTimeout(timeout);
//     }
//   }, [loading, detailedReservation, navigate]);

//   const handleNextStep = () => {
//     const balance = detailedReservation?.balance || 0;
//     if (balance <= 0) {
//       navigate("/assign-room");
//     } else {
//       navigate("/payment");
//     }
//   };

//   const handleHomeClick = () => {
//     navigate("/");
//   };

//   const renderReservationDetails = () => {
//     if (!detailedReservation) return null;

//     const {
//       guestName,
//       guestList,
//       guestEmail,
//       assigned,
//       unassigned,
//       status,
//       total,
//       balance,
//       balanceDetailed,
//       startDate,
//       endDate,
//       reservationID,
//     } = detailedReservation || {};

//     const roomStatus =
//       assigned && assigned.length > 0
//         ? {
//             isAssigned: true,
//             roomTypeName: assigned[0].roomTypeName,
//             roomName: assigned[0].roomName,
//             adults: assigned[0].adults,
//             children: assigned[0].children,
//           }
//         : {
//             isAssigned: false,
//             roomTypeName: unassigned?.[0]?.roomTypeName,
//             adults: unassigned?.[0]?.adults,
//             children: unassigned?.[0]?.children,
//           };

//     return (
//       <div className="reservation-details-container">
//         <h2>Reservation Details</h2>
//         <div className="details-grid">
//           <div className="details-section">
//             <h3>General Information</h3>
//             <p>
//               <strong>Guest Name:</strong> {guestName}
//             </p>
//             <p>
//               <strong>Guest Email:</strong> {maskEmail(guestEmail)}
//             </p>
//             <p>
//               <strong>Guest Phone:</strong>
//               {maskPhone(Object.values(guestList)[0]?.guestPhone)}
//             </p>
//             <p>
//               <strong>Reservation ID:</strong> {reservationID}
//             </p>
//             <p>
//               <strong>Status:</strong> {status}
//             </p>
//           </div>

//           <div className="details-section">
//             <h3>Dates & Stay</h3>
//             <p>
//               <strong>Check-in Date:</strong> {startDate}
//             </p>
//             <p>
//               <strong>Check-out Date:</strong> {endDate}
//             </p>
//             {roomStatus.isAssigned ? (
//               <>
//                 <p>
//                   <strong>Room Type:</strong> {roomStatus.roomTypeName}
//                 </p>
//                 <p>
//                   <strong>Room Name:</strong> {roomStatus.roomName}
//                 </p>
//                 <p>
//                   <strong>Total Guests:</strong> Adults - {roomStatus.adults},
//                   Children - {roomStatus.children}
//                 </p>
//               </>
//             ) : (
//               <>
//                 <p>
//                   <strong>Room Status:</strong> Your room is not assigned yet.
//                 </p>
//                 <p>
//                   <strong>Room Type:</strong> {roomStatus.roomTypeName}
//                 </p>
//                 <p>
//                   <strong>Total Guests:</strong> Adults - {roomStatus.adults},
//                   Children - {roomStatus.children}
//                 </p>
//               </>
//             )}
//           </div>

//           <div className="details-section">
//             <h3>Billing Information</h3>
//             <p>
//               <strong>Total Amount:</strong> ${total}
//             </p>
//             <p>
//               <strong>Balance:</strong> ${balance}
//             </p>
//             <p>
//               <strong>Balance Breakdown:</strong>
//             </p>
//             <ul>
//               <li>
//                 <strong>Subtotal:</strong> ${balanceDetailed?.subTotal}
//               </li>
//               <li>
//                 <strong>Taxes & Fees:</strong> ${balanceDetailed?.taxesFees}
//               </li>
//               <li>
//                 <strong>Grand Total:</strong> ${balanceDetailed?.grandTotal}
//               </li>
//               <li>
//                 <strong>Paid:</strong> ${balanceDetailed?.paid}
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="button-container">
//           <button className="button" onClick={handleNextStep}>
//             {balance <= 0 ? "Continue to Check-In" : "Continue to Payment"}
//           </button>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="check-reservation-page">
//       <header className="rooms-header">
//         <div className="icon-title">
//           <img
//             src={homeIcon}
//             alt="home"
//             style={{ cursor: "pointer", width: "24px", height: "24px" }}
//             onClick={handleHomeClick}
//           />
//           <span style={{ color: "#fff", fontSize: "18px", fontWeight: "bold" }}>
//             Reservation Details
//           </span>
//         </div>
//         <div>
//           <img src={helpIcon} alt="help" style={{ width: "24px", height: "24px" }} />
//         </div>
//       </header>
//       {loading && <Loading />}
//       {!loading && error && (
//         <div className="error-container">
//           <h2>{error}</h2>
//           <p>Redirecting to the homepage...</p>
//         </div>
//       )}
//       {renderReservationDetails()}
//       <HelpFooter />
//     </div>
//   );
// };

// export default SearchReservation;
