
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { ArrowLeft } from 'lucide-react';
// import "./bookingDetailsForm.css";

// export default function BookingDetailsForm() {
//   const navigate = useNavigate();

//   const today = new Date();
//   const tomorrow = new Date();
//   tomorrow.setDate(today.getDate() + 1);

//   const [rooms, setRooms] = useState(2);
//   const [adults, setAdults] = useState(4);
//   const [checkInDate, setCheckInDate] = useState(today);
//   const [checkOutDate, setCheckOutDate] = useState(tomorrow);

//   const handleCheckAvailability = () => {
//     navigate("/select-room");
//   };

//   const handleGoHome = () => {
//     navigate("/");
//   };

//   return (
//     <div className="booking-container">
//       <div className="booking-header">
//         <div className="home-icon" onClick={handleGoHome} style={{ cursor: "pointer" }}>
//           <img src="../src/assets/images/bookingdetails/home.png" alt="home" />
//         </div>
//         <h1 className="booking-title">Booking details</h1>
//         <img src="../src/assets/images/bookingdetails/help.png" alt="help" />
//       </div>

//       <div className="booking-card">
//         <div className="back-button" onClick={handleGoHome} style={{ cursor: "pointer" }}>
//           <ArrowLeft className="back-icon" />
//           <span>Back</span>
//         </div>

//         <div className="check-in-out-container">
//           <div className="timeline">
//             <div className="timeline-dot"></div>
//             <div className="timeline-line"></div>
//             <div className="timeline-dot"></div>
//           </div>

//           <div className="check-details">
//             <div className="check-row">
//               <div className="check-label">
//                 <span>Check-In</span>
//               </div>
//               <div className="date-box">
//                 <DatePicker
//                   selected={checkInDate}
//                   onChange={(date) => setCheckInDate(date)}
//                   showTimeSelect
//                   dateFormat="EEE dd MMM, HH:mm"
//                   className="date-text"
//                 />
//               </div>
//             </div>

//             <div className="check-row">
//               <div className="check-label">
//                 <span>Check-Out</span>
//               </div>
//               <div className="date-box">
//                 <DatePicker
//                   selected={checkOutDate}
//                   onChange={(date) => setCheckOutDate(date)}
//                   showTimeSelect
//                   dateFormat="EEE dd MMM, HH:mm"
//                   className="date-text"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="divider"></div>

//         <div className="selection-row">
//           <div className="selection-box">
//             <div className="selection-label">Room</div>
//             <div className="selection-value">
//               <span className="selection-number">{rooms}</span>
//               <select
//                 value={rooms}
//                 onChange={(e) => setRooms(Number(e.target.value))}
//                 className="dropdown-select"
//               >
//                 {[1, 2, 3, 4, 5].map(n => (
//                   <option key={n} value={n}>{n}</option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <div className="selection-box">
//             <div className="selection-label">Adults</div>
//             <div className="selection-value">
//               <span className="selection-number">{adults}</span>
//               <select
//                 value={adults}
//                 onChange={(e) => setAdults(Number(e.target.value))}
//                 className="dropdown-select"
//               >
//                 {[1, 2, 3, 4, 5].map(n => (
//                   <option key={n} value={n}>{n}</option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </div>

//         <button
//           className="check-availability-button"
//           onClick={handleCheckAvailability}
//         >
//           Check Availability
//         </button>
//       </div>
//     </div>
//   );
// }




import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ArrowLeft } from 'lucide-react';
import "./bookingDetailsForm.css";

export default function BookingDetailsForm() {
  const navigate = useNavigate();
sessionStorage.setItem("newUser", true);
  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).format(date); // Format as YYYY-MM-DD
  };

  // Initialize with sessionStorage or fallback defaults
  const initialCheckIn = sessionStorage.getItem("checkInDate")
    ? new Date(sessionStorage.getItem("checkInDate"))
    : new Date();

  const initialCheckOut = sessionStorage.getItem("checkOutDate")
    ? new Date(sessionStorage.getItem("checkOutDate"))
    : new Date(Date.now() + 86400000);

  const [rooms, setRooms] = useState(Number(sessionStorage.getItem("numRooms")) || 1);
  const [adults, setAdults] = useState(Number(sessionStorage.getItem("numAdults")) || 1);
  const [checkInDate, setCheckInDate] = useState(initialCheckIn);
  const [checkOutDate, setCheckOutDate] = useState(initialCheckOut);

  // Store values in sessionStorage whenever they change
  useEffect(() => {
    sessionStorage.setItem("checkInDate", formatDate(checkInDate));
  }, [checkInDate]);

  useEffect(() => {
    sessionStorage.setItem("checkOutDate", formatDate(checkOutDate));
  }, [checkOutDate]);

  useEffect(() => {
    sessionStorage.setItem("numRooms", rooms);
  }, [rooms]);

  useEffect(() => {
    sessionStorage.setItem("numAdults", adults);
  }, [adults]);

  const handleCheckAvailability = () => {
    navigate("/select-room");
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="booking-container">
      <div className="booking-header">
        <div className="home-icon" onClick={handleGoHome} style={{ cursor: "pointer" }}>
          <img src="/assets/images/bookingdetails/home.png" alt="home" />
        </div>
        <h1 className="booking-title">Booking details</h1>
        <img src="/assets/images/bookingdetails/help.png" alt="help" />
      </div>

      <div className="booking-card">
        <div className="back-button" onClick={handleGoHome} style={{ cursor: "pointer" }}>
          <ArrowLeft className="back-icon" />
          <span>Back</span>
        </div>

        <div className="check-in-out-container">
          <div className="timeline">
            <div className="timeline-dot"></div>
            <div className="timeline-line"></div>
            <div className="timeline-dot"></div>
          </div>

          <div className="check-details">
            <div className="check-row">
              <div className="check-label">
                <span>Check-In</span>
              </div>
              <div className="date-box">
                <DatePicker
                  selected={checkInDate}
                  onChange={(date) => setCheckInDate(date)}
                  showTimeSelect
                  dateFormat="EEE dd MMM, HH:mm"
                  className="date-text"
                />
              </div>
            </div>

            <div className="check-row">
              <div className="check-label">
                <span>Check-Out</span>
              </div>
              <div className="date-box">
                <DatePicker
                  selected={checkOutDate}
                  onChange={(date) => setCheckOutDate(date)}
                  showTimeSelect
                  dateFormat="EEE dd MMM, HH:mm"
                  className="date-text"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="selection-row">
          <div className="selection-box">
            <div className="selection-label">Room</div>
            <div className="selection-value">
              <span className="selection-number">{rooms}</span>
              <select
                value={rooms}
                onChange={(e) => setRooms(Number(e.target.value))}
                className="dropdown-select"
              >
                {[1, 2, 3, 4, 5].map(n => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="selection-box">
            <div className="selection-label">Adults</div>
            <div className="selection-value">
              <span className="selection-number">{adults}</span>
              <select
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
                className="dropdown-select"
              >
                {[1, 2, 3, 4, 5].map(n => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <button
          className="check-availability-button"
          onClick={handleCheckAvailability}
        >
          Check Availability
        </button>
      </div>
    </div>
  );
}
